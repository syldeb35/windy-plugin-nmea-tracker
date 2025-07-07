#!/usr/bin/env python3
import eventlet
eventlet.monkey_patch()
import os, sys
import re
import socket
import serial
import serial.tools.list_ports
import threading
import logging
import subprocess
from flask import Flask, Response, render_template, request, redirect, url_for
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from logging.handlers import RotatingFileHandler
from dotenv import load_dotenv
import ssl
import eventlet.wsgi

sys.stderr = open(os.devnull, 'w')  # Attention : plus rien ne s’affichera si erreur réelle

# Charger les variables d'environnement depuis le fichier .env
load_dotenv()

# === VARIABLES GLOBALES ===
DEBUG = os.getenv("DEBUG", "False").lower() == "true"
UDP_IP = "0.0.0.0"
UDP_PORT = 5005
TCP_IP = "0.0.0.0"
TCP_PORT = 5006
HTTPS_PORT = 5000
REJECTED_PATTERN = re.compile(r'^\$([A-Z][A-Z])(GS[A-Z]|XDR|AMAID|AMCLK|AMSA|SGR)')
# === CHARGEMENT CONFIG ENV ===
SERIAL_PORT = os.getenv("SERIAL_PORT", "/dev/rfcomm0").strip()
SERIAL_BAUDRATE = int(os.getenv("SERIAL_BAUDRATE", 4800))
ENABLE_SERIAL = os.getenv("ENABLE_SERIAL", "True").lower() == "true"
ENABLE_UDP = os.getenv("ENABLE_UDP", "True").lower() == "true"
ENABLE_TCP = os.getenv("ENABLE_TCP", "True").lower() == "true"

# === CONFIGURATION DES LOGS ===
# Désactiver les logs HTTP (werkzeug). Masque les requêtes GET / POST (DEBUG, ERROR, WARNING)
logging.getLogger('werkzeug').setLevel(logging.ERROR)

# Logger pour les trames NMEA uniquement
nmea_logger = logging.getLogger("nmea")
nmea_logger.setLevel(logging.INFO)
log_formatter = logging.Formatter('%(asctime)s - %(message)s')
file_handler = RotatingFileHandler(
    "logs/nmea.log",            # fichier log principal
    maxBytes=1024 * 1024,    # 1 Mo max
    backupCount=3          # garde jusqu'à 3 fichiers anciens (nmea.log.1, .2, .3)
)
file_handler.setFormatter(log_formatter)
nmea_logger.addHandler(file_handler)

# === SERVEUR FLASK ===
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)  # Autorise toutes les origines (origine wildcard *)

# === DÉTECTION PORT BLUETOOTH SÉRIE DE FAÇON SIMPLE ===
def detect_bluetooth_serial_port():
    """
    Tente de détecter automatiquement un port série Bluetooth actif.
    Compatible Windows, macOS, Linux.
    Retourne le nom du port (ex: /dev/rfcomm0 ou COM4), ou None.
    """
    ports = list(serial.tools.list_ports.comports())
    bt_pattern = re.compile(r"(bluetooth|rfcomm|serial)", re.IGNORECASE)

    for port in ports:
        port_name = port.device
        desc = port.description or ""
        hwid = port.hwid or ""

        if bt_pattern.search(port_name) or bt_pattern.search(desc) or bt_pattern.search(hwid):
            print(f"[AUTO-DETECT] Port Bluetooth série détecté : {port_name} ({desc})")
            return port_name

    print("[AUTO-DETECT] Aucun port Bluetooth série détecté.")
    return None

        
# === FLAGS ET THREADS POUR GESTION DYNAMIQUE ===
serial_thread = None
udp_thread = None
tcp_thread = None
serial_stop = threading.Event()
udp_stop = threading.Event()
tcp_stop = threading.Event()

# === FONCTIONS MODIFIÉES POUR SUPPORTER L'ARRÊT ===
def udp_listener(stop_event):
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind((UDP_IP, UDP_PORT))
    print(f"[UDP] Écoute sur {UDP_IP}:{UDP_PORT}")
    sock.settimeout(1.0)
    while not stop_event.is_set():
        try:
            data, addr = sock.recvfrom(1024)
            message = data.decode('utf-8', errors='ignore').strip()
            if not REJECTED_PATTERN.match(message):
                if DEBUG:
                    print(f"[NMEA][UDP]{message}")
                nmea_logger.info(f"[NMEA][UDP] {message}")
                socketio.emit('nmea_data', message)
        except socket.timeout:
            continue
    sock.close()
    print("[UDP] Arrêté.")

def tcp_listener(stop_event):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind((TCP_IP, TCP_PORT))
    sock.listen(1)
    print(f"[TCP] Écoute sur {TCP_IP}:{TCP_PORT}")
    sock.settimeout(1.0)
    while not stop_event.is_set():
        try:
            conn, addr = sock.accept()
            print(f"[TCP] Connexion de {addr}")
            with conn:
                conn.settimeout(1.0)
                while not stop_event.is_set():
                    try:
                        data = conn.recv(1024)
                        if not data:
                            break
                        message = data.decode('utf-8', errors='ignore').strip()
                        if not REJECTED_PATTERN.match(message):
                            if DEBUG:
                                print(f"[NMEA][TCP]{message}")
                            nmea_logger.info(f"[NMEA][TCP] {message}")
                            socketio.emit('nmea_data', message)
                    except socket.timeout:
                        continue
        except socket.timeout:
            continue
    sock.close()
    print("[TCP] Arrêté.")

def serial_listener(port, baudrate, stop_event):
    try:
        with serial.Serial(port, baudrate, timeout=1) as ser:
            print(f"[SERIAL] Écoute sur {port} @ {baudrate} bps")
            while not stop_event.is_set():
                line = ser.readline().decode('utf-8', errors='ignore').strip()
                if not REJECTED_PATTERN.match(line):
                    if DEBUG:
                        print(f"[NMEA][SERIAL] {line}")
                    nmea_logger.info(f"[SERIAL] {line}")
                    socketio.emit('nmea_data', line)
    except serial.SerialException as e:
        print(f"[ERREUR][SERIAL] Impossible d'ouvrir le port {port} : {e}")
    print("[SERIAL] Arrêté.")

# === FONCTION DE GESTION DES THREADS ===
def manage_threads():
    global serial_thread, udp_thread, tcp_thread
    # SERIAL
    if ENABLE_SERIAL:
        if serial_thread is None or not serial_thread.is_alive():
            serial_stop.clear()
            serial_thread = threading.Thread(target=serial_listener, args=(SERIAL_PORT, SERIAL_BAUDRATE, serial_stop), daemon=True)
            serial_thread.start()
    else:
        serial_stop.set()
        serial_thread = None
    # UDP
    if ENABLE_UDP:
        if udp_thread is None or not udp_thread.is_alive():
            udp_stop.clear()
            udp_thread = threading.Thread(target=udp_listener, args=(udp_stop,), daemon=True)
            udp_thread.start()
    else:
        udp_stop.set()
        udp_thread = None
    # TCP
    if ENABLE_TCP:
        if tcp_thread is None or not tcp_thread.is_alive():
            tcp_stop.clear()
            tcp_thread = threading.Thread(target=tcp_listener, args=(tcp_stop,), daemon=True)
            tcp_thread.start()
    else:
        tcp_stop.set()
        tcp_thread = None

# === ROUTES FLASK ===
@app.route('/config.html', methods=['GET'])
def home():
    serial_ports = list_serial_ports()
    return render_template(
        'config.html',
        enable_serial=ENABLE_SERIAL,
        enable_udp=ENABLE_UDP,
        enable_tcp=ENABLE_TCP,
        enable_debug=DEBUG,
        udp_ip=UDP_IP,
        udp_port=UDP_PORT,
        tcp_ip=TCP_IP,
        tcp_port=TCP_PORT,
        serial_ports=serial_ports,
        serial_port=SERIAL_PORT,
        serial_baudrate=SERIAL_BAUDRATE
    )

@app.route('/select_connection', methods=['POST'])
def select_connection():
    global ENABLE_SERIAL, ENABLE_UDP, ENABLE_TCP, DEBUG
    global UDP_IP, UDP_PORT, TCP_IP, TCP_PORT, SERIAL_PORT, SERIAL_BAUDRATE

    ENABLE_SERIAL = 'enable_serial' in request.form
    ENABLE_UDP = 'enable_udp' in request.form
    ENABLE_TCP = 'enable_tcp' in request.form
    DEBUG = 'enable_debug' in request.form

    UDP_IP = request.form.get('udp_ip', UDP_IP)
    try:
        UDP_PORT = int(request.form.get('udp_port', UDP_PORT))
    except ValueError:
        pass
    TCP_IP = request.form.get('tcp_ip', TCP_IP)
    try:
        TCP_PORT = int(request.form.get('tcp_port', TCP_PORT))
    except ValueError:
        pass

    # Nouveau : port série sélectionné
    SERIAL_PORT = request.form.get('serial_port', SERIAL_PORT)
    try:
        SERIAL_BAUDRATE = int(request.form.get('serial_baudrate', SERIAL_BAUDRATE))
    except (ValueError, TypeError):
        pass
    # Redémarre les threads avec la nouvelle configuration
    manage_threads()
    return redirect(url_for('home'))

@app.route('/', methods=['GET'])
def config():
    return render_template('./index.html') #, allowed_types=", ".join(ALLOWED_SENTENCE_TYPES))

def list_serial_ports():
    """Retourne la liste des ports série disponibles (nom et description)."""
    ports = list(serial.tools.list_ports.comports())
    return [(p.device, p.description) for p in ports]
    
if __name__ == '__main__':
    # Détection automatique si aucun port série défini
    if ENABLE_SERIAL:
        if not SERIAL_PORT:
            SERIAL_PORT = detect_bluetooth_serial_port()
    manage_threads()
    # Serveur Flask en HTTPS (nécessite cert.pem et key.pem)
    #app.run(host='0.0.0.0', port=HTTPS_PORT, ssl_context=('cert.pem', 'key.pem'))
    #socketio.run(app, host='0.0.0.0', port=HTTPS_PORT, ssl_context=('cert.pem', 'key.pem'), server='eventlet')
    
    # Configuration SSL manuelle
    ssl_ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ssl_ctx.load_cert_chain(certfile='cert.pem', keyfile='key.pem')

    listener = eventlet.listen(('0.0.0.0', HTTPS_PORT))
    wrapped_socket = eventlet.wrap_ssl(listener, certfile='cert.pem', keyfile='key.pem', server_side=True)

    print(f"[HTTPS] Serveur WebSocket sécurisé sur https://0.0.0.0:{HTTPS_PORT}")
    try:
        eventlet.wsgi.server(wrapped_socket, app, log_output=False)
    except ssl.SSLError as e:
        if "sslv3 alert certificate unknown" in str(e).lower():
            # Silence ces erreurs SSL spécifiques
            pass
        else:
            raise

