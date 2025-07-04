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
from flask import Flask, Response, render_template
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
DEBUG = False
UDP_IP = "0.0.0.0"
UDP_PORT = 5005
HTTPS_PORT = 5000
REJECTED_PATTERN = re.compile(r'^\$([A-Z][A-Z])(GS[A-Z]|XDR|AMAID|AMCLK|AMSA|SGR)')
# === CHARGEMENT CONFIG ENV ===
SERIAL_PORT = os.getenv("SERIAL_PORT", "/dev/rfcomm0").strip()
SERIAL_BAUDRATE = int(os.getenv("SERIAL_BAUDRATE", 4800))
ENABLE_SERIAL = os.getenv("ENABLE_SERIAL", "True").lower() == "true"
ENABLE_UDP = os.getenv("ENABLE_UDP", "True").lower() == "true"

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

        
# === FONCTION UDP ===
def udp_listener():
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind((UDP_IP, UDP_PORT))
    print(f"[UDP] Écoute sur {UDP_IP}:{UDP_PORT}")

    while True:
        data, addr = sock.recvfrom(1024)  # buffer taille max
        message = data.decode('utf-8', errors='ignore').strip()
        #print(f"[UDP] Trame reçue de {addr}: {message}")
        #if ALLOWED_PATTERN.match(message):
        if not REJECTED_PATTERN.match(message):
            if DEBUG:
                print(f"[NMEA][UDP]{message}")
            nmea_logger.info(f"[NMEA][UDP] {message}")
            socketio.emit('nmea_data', message)

# === FONCTION LECTURE PORT SÉRIE ===
def serial_listener(port, baudrate):
    try:
        with serial.Serial(port, baudrate) as ser:
            print(f"[SERIAL] Écoute sur {port} @ {baudrate} bps")
            while True:
                line = ser.readline().decode('utf-8', errors='ignore').strip()
                #if ALLOWED_PATTERN.match(message):
                if not REJECTED_PATTERN.match(line):
                    if DEBUG:
                        print(f"[NMEA][SERIAL] {line}")
                    nmea_logger.info(f"[SERIAL] {line}")
                    socketio.emit('nmea_data', line)
    except serial.SerialException as e:
        print(f"[ERREUR][SERIAL] Impossible d'ouvrir le port {port} : {e}")
        

# === ROUTES FLASK ===
@app.route('/index.html', methods=['GET'])
def index():
    return render_template('./index.html') #, allowed_types=", ".join(ALLOWED_SENTENCE_TYPES))
    
if __name__ == '__main__':
   # Détection automatique si aucun port série défini
    if ENABLE_SERIAL:
        if not SERIAL_PORT:
            SERIAL_PORT = detect_bluetooth_serial_port()
            if not SERIAL_PORT:
                print(f"[ERREUR] Aucun port série détecté automatiquement. Désactivation du thread série.")
                ENABLE_SERIAL = False
    # Lancement du thread série
    if ENABLE_SERIAL:
        print(f"[SERIAL] Écoute sur {SERIAL_PORT} at {SERIAL_BAUDRATE} baud")
        serial_thread = threading.Thread(target=serial_listener, args=(SERIAL_PORT, SERIAL_BAUDRATE), daemon=True)
        serial_thread.start()

    # Lancement du thread UDP
    if ENABLE_UDP:
        udp_thread = threading.Thread(target=udp_listener, daemon=True)
        udp_thread.start()
        
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

