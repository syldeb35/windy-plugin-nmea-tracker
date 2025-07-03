<div class="plugin__mobile-header">
    { title }
</div>

<section class="plugin__content">
    <div
        class="plugin__title plugin__title--chevron-back"
        on:click={ () => bcast.emit('rqstOpen', 'menu') }
    >
    { title }
    </div>
<p> A plugin by <a href="https://github.com/syldeb35/Windy-plugin-GPS">Capt. S. DEBRAY</a></p>
<p> <center>🛳️</center></p>
<p> Need a server which listen the NMEA emitter and provides a {route} route that returns NMEA frames </p>
<p>  {requestIp}  </p>
<p> <center>🛳️</center></p>
    {#if gpsData}
        <p> GPS Data:</p>
        <p> {gpsData}</p>
        <p>  Latitude: {maLatitude} </p>
        <p>  Longitude: {maLongitude} </p>
        <div class="plugin__buttons">
            <button on:click={centerShip}>Center Ship</button>
            <button on:click={toggleFollowShip}>{followShip ? 'Stop Follow' : 'Follow Ship'}</button>
        </div>
    {/if}
    <div class="error" id="err">
        <p></p>
    </div>
</section>


<script lang="ts">
    import bcast from "@windy/broadcast";
    import { onDestroy, onMount } from 'svelte';
    import { map } from "@windy/map";
    import { io } from './socket.io.min.js';
    const title = 'GPS position tracker plugin';
    let requestIp = location.hostname;
    let route = 'https://192.168.1.27:5000/gps-data'; // utilisé uniquement pour affichage texte
    let latitude: string | null = null;
    let longitude: string | null = null;
    let maLatitude: string | null = null;
    let maLongitude: string | null = null;
    let markerLayer = L.layerGroup().addTo(map);
    let gpsData = 'Aucune donnée reçue pour le moment...';
    let lastLatitude: number | null = null;
    let lastLongitude: number | null = null;
    let courseOverGround: number = 0;
    let boatPath: L.Polyline | null = null;
    let pathLatLngs: L.LatLng[] = [];
    let followShip = true;

    // ✅ Initialisation WebSocket
    onMount(() => {
        // @ts-ignore: socket.io injecté via script global
        const socket = io('https://192.168.1.27:5000', {
            transports: ['websocket'],
            secure: true,
            rejectUnauthorized: false // pour auto-signé
        });

        socket.on('connect', () => {
            console.log('WebSocket connecté');
        });

        socket.on('nmea_data', (data: string) => {
            gpsData = data;
            processNMEA(data);
        });

        socket.on('disconnect', () => {
            console.warn('WebSocket déconnecté');
        });
    });
    onDestroy(() => {
        // Do nothing
    });

    function processNMEA(data: string) {
        if (!data.startsWith('$')) return;

        const parts = data.split(',');
        let latitudesal, latDirection, longitudesal, lonDirection;

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
        } else {
            return;
        }

        latitude = convertLatitude(latitudesal, latDirection);
        longitude = convertLongitude(longitudesal, lonDirection);
        maLatitude = afficheLatitude(latitudesal, latDirection);
        maLongitude = afficheLongitude(longitudesal, lonDirection);

        const newLat = latitude;
        const newLon = longitude;

        if (lastLatitude !== null && lastLongitude !== null && newLat !== null && newLon !== null) {
            courseOverGround = calculateBearing(lastLatitude, lastLongitude, newLat, newLon);
        }

        lastLatitude = newLat;
        lastLongitude = newLon;

        addBoatMarker(newLat, newLon, courseOverGround);

        document.getElementById("err")!.innerHTML = "<p></p>";
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

    function addBoatMarker(lat: number, lon: number, cog: number) {
        if (!map) return;
        markerLayer.clearLayers();

        const newLatLng = L.latLng(lat, lon);
        pathLatLngs.push(newLatLng);

        if (!boatPath) {
            boatPath = L.polyline(pathLatLngs, { color: 'blue', weight: 3 }).addTo(map);
        } else {
            boatPath.setLatLngs(pathLatLngs);
        }

        const icon = L.divIcon({
            className: '',
            html: `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" style="transform: rotate(${cog}deg);">
                    <polygon points="50,0 90,100 50,80 10,100" fill="red" stroke="black" stroke-width="3"/>
                </svg>
            `,
            iconSize: [10, 10],
            iconAnchor: [5, 5]
        });

        L.marker(newLatLng, { icon }).addTo(markerLayer);

        if (followShip) {
            map.setView(newLatLng);
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
    };

    export const onclose = () => {
        console.log('Plugin fermé');
    };
</script>

<style lang="less">
    .gps-info {
        margin-top: 20px;
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 5px;
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
</style>

