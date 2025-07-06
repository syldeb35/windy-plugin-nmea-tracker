<div class="plugin__mobile-header">
    {title}
</div>

<section class="plugin__content">
    <div
        class="plugin__title plugin__title--chevron-back"
        on:click={() => bcast.emit('rqstOpen', 'menu')}
    >
        {title}
    </div>

    <p>🛳️ Plugin développé par <a href="https://github.com/syldeb35/Windy-plugin-GPS" target="_blank"></a></p>
    <p>Le serveur NMEA doit être accessible à :</p>
    <p><code>{route}</code></p>
    <p>UDP : <code>{udpIp}:{udpPort}</code></p>
    <p>TCP : <code>{tcpIp}:{tcpPort}</code></p>
    <p>Requête provenant de : <strong>{requestIp}</strong></p>

    <hr />

    {#if gpsData}
        <p><strong>Dernière trame NMEA reçue :</strong></p>
        <pre>{gpsData}</pre>
        <p><strong>Latitude :</strong> {maLatitude}</p>
        <p><strong>Longitude :</strong> {maLongitude}</p>
        <p><strong>Route fond :</strong> {myCourseOverGroundT}</p>
        <p><strong>vitesse fond :</strong> {mySpeedOverGround}</p>
        <p><strong>Navire AIS :</strong> {vesselName}</p>

        <div class="plugin__buttons">
            <button on:click={centerShip}>📍 Centrer sur le bateau</button>
            <button on:click={toggleFollowShip}>
                {followShip ? '🛑 Stop Suivi' : '▶️ Suivre le bateau'}
            </button> <br>
            <br>
            <button on:click={showWeatherPopup}>🌬️ Afficher météo</button>
        </div>
    {/if}
   
    
    <div class="error" id="err">
        <p></p>
    </div>
    
    <p class="follow-state">
      📡 Suivi automatique : {followShip ? 'Activé' : 'Désactivé'}
    </p>
    <div id="footer">
      <center><p>© 2025 Capt S. DEBRAY</p></center>
    </div>
</section>



<script lang="ts">
    import bcast from "@windy/broadcast";
    import { onMount, onDestroy } from 'svelte';
    import { map } from '@windy/map';
    import { getLatLonInterpolator } from '@windy/interpolator';
    //import { overlaySettings } from '@windy/config';
    import { wind2obj } from '@windy/utils';
    import store from '@windy/store';
    import metrics from '@windy/metrics';
    import { io } from './socket.io.min.js';
    import { createRotatingBoatIcon } from './boatIcon';
    
    const title = 'GPS position tracker plugin';
    const VESSEL = 'CMA CGM RIVOLI';
    let requestIp = location.hostname;
    let route = 'https://localhost:5000'; // Remplacez par l'URL de votre serveur NMEA
    let latitudesal: number | null = null, latDirection: string | null = null;
    let longitudesal: number | null = null, lonDirection: string | null = null;
    let latitude: string | null = null;
    let longitude: string | null = null;
    let maLatitude: string | null = null;
    let maLongitude: string | null = null;
    let gpsData = 'Aucune donnée reçue pour le moment...';
    let lastLatitude: number | null = null;
    let lastLongitude: number | null = null;
    let courseOverGroundT: number = 0; // True
    let myCourseOverGroundT: number = 0; // True
    let courseOverGroundM: number = 0; // Magnetic
    let speedOverGround: number = 0; // In knots
    let mySpeedOverGround: number = 0; // In knots
    let heurePrev: number | null = null; // pour la projection
    let followShip = true;
    let vesselName = VESSEL;

    let socket: any = null;
    let markerLayer = L.layerGroup().addTo(map);
    let boatPath: L.Polyline | null = null;
    let projectionArrow: L.Polyline | null = null;
    let forecastIcon: L.Marker | null = null;
    let forecastLabel: L.Marker | null = null;
    let pathLatLngs: L.LatLng[] = [];
    let openedPopup: L.Popup | null = null;

    let udpIp = '0.0.0.0';
    let udpPort = 5005;
    let tcpIp = '0.0.0.0';
    let tcpPort = 5006;

    let aisFragments: { [key: string]: { total: number, received: number, payloads: string[] } } = {};

    function processNMEA(data: string) {
        if (!(data.startsWith('$') || data.startsWith('!'))) return; // Vérifie si la trame commence par $ ou !

        const parts = data.split(',');

        if (data.slice(3, 6) === 'GLL') {
            latitudesal = parseFloat(parts[1]);
            latDirection = parts[2];
            longitudesal = parseFloat(parts[3]);
            lonDirection = parts[4];
        }
        else if (data.slice(3, 6) === 'GGA') {
            latitudesal = parseFloat(parts[2]);
            latDirection = parts[3];
            longitudesal = parseFloat(parts[4]);
            lonDirection = parts[5];
        }
        else if (data.slice(3, 6) === 'RMC') {
            latitudesal = parseFloat(parts[3]);
            latDirection = parts[4];
            longitudesal = parseFloat(parts[5]);
            lonDirection = parts[6];
            speedOverGround = parseFloat(parts[7]);
            courseOverGroundT = parseFloat(parts[8]);
        }
        else if (data.slice(3, 6) === 'VTG') {
            courseOverGroundT = parseFloat(parts[1]);
            if (parts[2] === 'T') {
                courseOverGroundM = parseFloat(parts[3]);
            }
            if (parts[4] === 'N') {
                speedOverGround = parseFloat(parts[5]);
            } else if (parts[4] === 'K') {
                // Convertir km/h en noeuds
                speedOverGround = parseFloat(parts[5]) / 1.852;
            } else if (parts[4] === 'M') {
                // A Traiter: $HCHDM
            }
        }
        else if (data.slice(3, 6) === 'HDG') {
            
            // A Traiter: $HCHDG
        }
        else if (data.slice(3, 6) === 'HDT') {
            // A Traiter: $HCHDT
        } else {
            return;
        }

    // Déchiffrement basique AIVDO (VDO)
    if (data.slice(3, 6) === 'VDO') {
        // Exemple : !AIVDO,1,1,,B,13aG?P0P00PD;88MD5MTDww@2D0k,0*7C
        // Ici, la payload AIS est dans parts[5]
        const aisPayload = parts[5];
        if (aisPayload) {
            const bitstring = ais6bitDecode(aisPayload);
            const mmsi = parseInt(bitstring.slice(8, 38), 2);
            // Type de message (6 premiers bits)
            const msgType = parseInt(bitstring.slice(0, 6), 2);
            // Pour les messages 1, 2, 3 (position)
            if ([1, 2, 3].includes(msgType)) {
                const latRaw = parseInt(bitstring.slice(89, 116), 2);
                const lonRaw = parseInt(bitstring.slice(61, 89), 2);
                let lat = (latRaw & 0x8000000) ? (latRaw - 0x10000000) : latRaw;
                let lon = (lonRaw & 0x8000000) ? (lonRaw - 0x10000000) : lonRaw;
                lat = lat / 600000.0;
                lon = lon / 600000.0;
                const cog = parseInt(bitstring.slice(116, 128), 2) / 10.0;
                const sog = parseInt(bitstring.slice(50, 60), 2) / 10.0;
                gpsData = `AIS VDO MMSI: ${mmsi}\nLat: ${lat.toFixed(5)}\nLon: ${lon.toFixed(5)}\nCOG: ${cog}°\nSOG: ${sog} nds`;
                addBoatMarker(lat, lon, cog);
                maLatitude = lat.toFixed(5);
                maLongitude = lon.toFixed(5);
                myCourseOverGroundT = cog;
                mySpeedOverGround = sog;
                lastLatitude = lat;
                lastLongitude = lon;
            } else {
                gpsData = `AIS VDO MMSI: ${mmsi} (type ${msgType})`;
            }
        }
        return;
    }
    // Déchiffrement AIVDM (VDM)
    if (data.startsWith('!') && data.includes('AIVDM')) {
        const parts = data.split(',');
        const total = parseInt(parts[1]);
        const num = parseInt(parts[2]);
        const seq = parts[3]; // identifiant de séquence (peut être vide)
        const aisPayload = parts[5];
        const fragKey = seq + '-' + parts[4]; // clé unique pour le message fragmenté

        if (total > 1) {
            // Message fragmenté
            if (!aisFragments[fragKey]) {
                aisFragments[fragKey] = { total, received: 0, payloads: [] };
            }
            aisFragments[fragKey].payloads[num - 1] = aisPayload;
            aisFragments[fragKey].received++;

            // Si tous les fragments sont reçus
            if (aisFragments[fragKey].received === total) {
                const fullPayload = aisFragments[fragKey].payloads.join('');
                delete aisFragments[fragKey];
                decodeAISType5(fullPayload);
            }
        } else {
            // Message non fragmenté
            decodeAISType5(aisPayload);
        }
    }

    // Fonction de décodage du type 5
    function decodeAISType5(aisPayload: string) {
        if (!aisPayload) return;
        const bitstring = ais6bitDecode(aisPayload);
        const msgType = parseInt(bitstring.slice(0, 6), 2);
        if (msgType === 5) {
            // Le nom du navire est sur 120 bits à partir du bit 112 (28*6 bits)
            let nameBits = bitstring.slice(112, 232);
            let name = '';
            for (let i = 0; i < nameBits.length; i += 6) {
                const charCode = parseInt(nameBits.slice(i, i + 6), 2);
                name += aisAscii(charCode);
            }
            name = name.replace(/@+$/, '').trim();
            vesselName = name;
        }
    }

        // A Traiter: $HCHDG, $HCHDT
        latitude = convertLatitude(latitudesal, latDirection);
        longitude = convertLongitude(longitudesal, lonDirection);
        maLatitude = afficheLatitude(latitudesal, latDirection);
        maLongitude = afficheLongitude(longitudesal, lonDirection);
        
        if (courseOverGroundT !== null && courseOverGroundT !== undefined && !Number.isNaN(courseOverGroundT)) {
            myCourseOverGroundT = parseFloat(courseOverGroundT.toFixed(2));
        } else {
            myCourseOverGroundT = myCourseOverGroundT; // Si pas de donnée, on garde la dernière valeur
        }
        if (speedOverGround !== null && speedOverGround !== undefined && !Number.isNaN(speedOverGround)) {
            mySpeedOverGround = parseFloat(speedOverGround.toFixed(2));
        } else {
            mySpeedOverGround = mySpeedOverGround; // Si pas de donnée, on garde la dernière valeur
        }
        const newLat = latitude;
        const newLon = longitude;
        /*
        if (lastLatitude !== null && lastLongitude !== null && newLat !== null && newLon !== null) {
            courseOverGround = calculateBearing(lastLatitude, lastLongitude, newLat, newLon);
        }
        */
        lastLatitude = newLat;
        lastLongitude = newLon;

        addBoatMarker(newLat, newLon, myCourseOverGroundT);

        document.getElementById("err")!.innerHTML = "<p></p>";
    }
    // Fonction utilitaire pour décoder le 6bit AIS
    function ais6bitDecode(payload: string): string {
        let bitstring = '';
        for (let i = 0; i < payload.length; i++) {
            let val = payload.charCodeAt(i) - 48;
            if (val > 40) val -= 8;
            bitstring += ('000000' + val.toString(2)).slice(-6);
        }
        return bitstring;
    }

    // Fonction utilitaire pour décoder l'alphabet AIS
    function aisAscii(val: number): string {
        // Table officielle ITU-R M.1371-5
        const table = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^- !\"#$%&'()*+,-./0123456789:;<=>?";
        return table[val] || ' ';
    }

    function convertLatitude(value: number, dir: string): number {
        const degrees = Math.floor(value / 100);
        const minutes = value - (degrees * 100);
        let lat = degrees + (minutes / 60);
        return dir === 'S' ? -lat : lat;
    }

    function convertLongitude(value: number, dir: string): number {
        const degrees = Math.floor(value / 100);
        const minutes = value - (degrees * 100);
        let lon = degrees + (minutes / 60);
        return dir === 'W' ? -lon : lon;
    }

    function afficheLatitude(val: number, dir: string): string {
        const deg = Math.floor(val / 100);
        const min = val - deg * 100;
        return ('00' + deg).slice(-2) + '° ' + ('0' + ((Math.floor(min * 1000) / 1000).toFixed(4))).slice(-7) + "' " + dir;
    }

    function afficheLongitude(val: number, dir: string): string {
        const deg = Math.floor(val / 100);
        const min = val - deg * 100;
        return ('000' + deg).slice(-3) + '° ' + ('0' + ((Math.floor(min * 1000) / 1000).toFixed(4))).slice(-7) + "' " + dir;
    }
    
    function computeProjection(lat: number, lon: number, cog: number, sog: number): L.LatLng {
        const ts = store.get('timestamp');
        heurePrev = Math.round((ts - Date.now()) / 3600000) || 24; // en heures, par défaut 24h si pas de timestamp
        if (heurePrev < 0) heurePrev = 0; // si timestamp futur
        // sog en noeuds → km/h (1.852) → m/s (÷3.6)
        const distanceMeters = sog * 1.852 * 1000 * heurePrev; // sur 24h
        const R = 6371000; // rayon Terre en m
        const δ = distanceMeters / R; // en radians
        const θ = toRadians(cog);
        const φ1 = toRadians(lat);
        const λ1 = toRadians(lon);

        const φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));
        const λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1), Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));

        return L.latLng(toDegrees(φ2), toDegrees(λ2));
    }
    
    function showMyPopup(lat: number, lon: number) {
        openedPopup?.remove();
    
        const popup = L.popup({ autoClose: true })
            .setLatLng([lat, lon])
            .setContent('<em>Chargement météo...</em>')
            .openOn(map);
    
        openedPopup = popup;
    
        getLatLonInterpolator().then(interpolator => {
            if (!interpolator) {
                popup.setContent('Couche météo non disponible.');
                return;
            }
    
            const overlay = store.get('overlay');
            const values = interpolator({ lat, lon });
            let content = `<strong>${VESSEL}</strong><br>${lat.toFixed(5)}, ${lon.toFixed(5)}<br>`;

            if (!Array.isArray(values)) {
                content += '❌ Pas de données interpolées.';
                popup.setContent(content);
                return;
            }

            if (overlay === 'wind') {
                const { dir, wind } = wind2obj(values);
                const speed = metrics.wind.convertValue(wind);
                content += `💨 Vent : ${speed}<br>🧭 Direction : ${dir} °`;
            } else if (overlay === 'waves') {
                const waveHeight = metrics.waves.convertValue(values[0]);
                const waveDir = Math.round(values[1]);
                const wavePeriod = values[2].toFixed(1);
                content += `🌊 Hauteur : ${waveHeight} m<br>🧭 Direction : ${waveDir}°<br>⏱ Période : ${wavePeriod} s`;
            } else if (overlay === 'gust') {
                const gust = metrics.wind.convertValue(values[0]);
                content += `💨 Rafales : ${gust}`;
            } else if (overlay === 'rain') {
                const rain = values[0].toFixed(2);
                content += `🌧️ Pluie : ${rain} mm/h`;
            } else if (overlay === 'temp') {
                const tempC = metrics.temp.convertValue(values[0]);
                content += `🌡️ Température : ${tempC}`;
            } else if (overlay === 'pressure') {
                const Press = metrics.pressure.convertValue(values[0]);
                content += `📉 Pression : ${Press} hPa`;
            } else if (overlay === 'clouds') {
                content += `☁️ Couverture nuageuse : ${Math.round(values[0])}%`;
            } else {
                content += 'ℹ️ Aucune donnée météo disponible pour cette couche.';
            }

            const ts = store.get('timestamp');
            if (ts) {
                const forecastDate = new Date(ts);
                content += `<hr><small>Prévision du :<br> ${forecastDate.toUTCString()}<br>`;
                content += `${forecastDate.toString()}</small>`;
            }

            popup.setContent(content);
        });
    } // Fin showMyPopup

    function addBoatMarker(lat: number, lon: number, cog: number) {
        if (!map) return;

        const latlng = L.latLng(lat, lon);
        markerLayer.clearLayers();
        pathLatLngs.push(latlng);

        if (!boatPath) {
            boatPath = L.polyline(pathLatLngs, { color: 'blue', weight: 3 }).addTo(map);
        } else {
            boatPath.setLatLngs(pathLatLngs);
        }

        const icon = createRotatingBoatIcon(cog, 0.9);
        const marker = L.marker(latlng, { icon }).addTo(markerLayer);
        marker.on('click', () => showMyPopup(lat, lon));
        //mySpeedOverGround = 10;
        // Ajout projection 24h
        if (mySpeedOverGround > 0) {
            if (heurePrev === null) {
                heurePrev = Math.round(store.get('timestamp') - Date.now() / 3600000);
            }
            const projected = computeProjection(lat, lon, cog, mySpeedOverGround);
            if (projectionArrow) projectionArrow.remove();
            projectionArrow = L.polyline([latlng, projected], {
                color: 'red',
                weight: 2,
                dashArray: '5, 5',
            }).addTo(markerLayer);
            if (forecastIcon) forecastIcon.remove();
            const icon = createRotatingBoatIcon(cog, 0.6)
            forecastIcon = L.marker(projected, { icon }).addTo(markerLayer);
            forecastIcon.on('click', () => showMyPopup(projected.lat, projected.lng));
        }
        // Rotation dynamique
        const iconDiv = marker.getElement()?.querySelector('.rotatable') as HTMLElement;
        if (iconDiv) {
            iconDiv.style.transformOrigin = '12px 12px';
            iconDiv.style.transform = `rotateZ(${cog}deg)`;
        }
        if (followShip) {
            map.setView(latlng);
        }
    } // Fin addBoatMarker

    function showWeatherPopup() {
        if (openedPopup) {
          openedPopup?.remove();
          openedPopup = null;
          return;
        }
        if (lastLatitude !== null && lastLongitude !== null) {
            showMyPopup(lastLatitude, lastLongitude); // pour forcer l’affichage + popup
        }
    }
    
    function toRadians(deg: number): number {
        return deg * Math.PI / 180;
    }

    function toDegrees(rad: number): number {
        return rad * 180 / Math.PI;
    }

    function calculateBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const φ1 = toRadians(lat1);
        const φ2 = toRadians(lat2);
        const Δλ = toRadians(lon2 - lon1);
        const y = Math.sin(Δλ) * Math.cos(φ2);
        const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
        let θ = Math.atan2(y, x);
        θ = toDegrees(θ);
        return (θ + 360) % 360;
    }

    function centerShip() {
        if (lastLatitude !== null && lastLongitude !== null) {
            map.setView([lastLatitude, lastLongitude]);
        }
    }

    function toggleFollowShip() {
        followShip = !followShip;
    }

    export const onopen = () => {
        console.log('Plugin ouvert');
        //store.set('overlay', 'wind'); // important pour activer l’interpolation
    };
    
    // ✅ Initialisation WebSocket
    onMount(() => {
        // @ts-ignore: socket.io injecté via script global
        socket = io(route, {
            transports: ['websocket'],
            secure: true,
            rejectUnauthorized: false // pour auto-signé
        });
        
        socket.on('nmea_data', (data: string) => {
            gpsData = data;
            processNMEA(data);
        });
    });
    
    onDestroy(() => {
        if (socket) {
            socket.disconnect();
            socket = null;
        }
        openedPopup?.remove();
        markerLayer.clearLayers();
        boatPath?.remove();
        projectionArrow?.remove();
        forecastIcon?.remove();
        boatPath = null;
        projectionArrow = null;
        forecastIcon = null;
        pathLatLngs = [];
    });

</script>

<style lang="less">
    .gps-info {
        margin-top: 20px;
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 5px;
    }
    .plugin__buttons button {
        margin: 5px;
        padding: 5px 10px;
        font-size: 14px;
    }
    .rotatable {
        transform-origin: center center;
    }
    .error {
        color: red;
        margin-top: 20px;
    }
    .plugin-container {
        padding: 10px;
        font-family: Arial, sans-serif;
        white-space: pre-wrap; /* Permet d'afficher les retours à la ligne */
        background: #f5f5f5;
        height: 100%;
        overflow-y: auto;
    }
    
    #footer{
    height: 40px;
    position: absolute;
    bottom: 0px;
    }
</style>

