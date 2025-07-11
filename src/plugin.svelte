<div class="plugin__mobile-header">
    {title}
</div>

<div popover id="help" class="plugin-summary" style="border-radius:8px; padding:12px; margin-bottom:16px;">
    <strong>GPS position tracker Windy</strong><br>
    This plugin displays real-time vessel position on Windy map from NMEA or AIS data received via UDP, TCP or serial port.<br>
    <ul style="margin:8px 0 0 18px;">
        <li>Display of last received NMEA frame</li>
        <li>Vessel latitude, longitude, course and speed over ground</li>
        <li>Vessel name (if available via AIS type 5)</li>
        <li>Track history and future position projection</li>
        <li>Weather forecast at vessel position</li>
        <li>Configurable connection (UDP, TCP, Serial)</li>
        <li>AIS class A decoding (fragmented messages handling)</li>
    </ul>
    <br>
    <span style="font-size:90%"><strong>Ideal for navigation, fleet tracking or experimenting with real-time NMEA/AIS data.</strong></span>
</div>

<section class="plugin__content">
    <button
        style="border-radius:8px; padding:12px; margin-bottom:16px; background: #3c3c3c;"
        class="plugin__title plugin__title--chevron-back"
        on:click={() => bcast.emit('rqstOpen', 'menu')}
        type="button"
        aria-label="Retour au menu"
    >
        {title}
    </button>

    
    <!-- <label class="centered">
        Vessel name:
        <input type="text" bind:value={vesselName} />
    </label> -->
    <label class="centered">
        Your MMSI:
        <input type="text" bind:value={myMMSI} placeholder="e.g. 123456789" maxlength="9" />
    </label>
    <p></p>
    <div class="centered">
        <button popovertarget="help">🛳️ <big>Help</big> 🛳️</button>
    </div>
    
    {#if userOS === 'Windows'}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/1vaJohWpDq1b_FuU6mT2mOA_baj7ATbTm/view?usp=sharing" target="_blank">NMEA tracker server (for Windows systems)</a></strong></p>
    {:else if userOS === 'Linux'}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/1gtHy7I55g-o26V-Ryx_oOifvlxGAqIF6/view?usp=sharing" target="_blank">NMEA tracker server (for Linux systems)</a></strong></p>
    {:else if userOS.includes('macOS') && userOS.includes('Intel')}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/1ZYDc7i_ycNmofew59UrqXeudNZktawbx/view?usp=sharing" target="_blank">NMEA tracker server (for macOS Intel)</a></strong></p>
    {:else if userOS.includes('macOS') && userOS.includes('Apple Silicon')}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/1N0-qNmHeDdbN0TmdcHszFqZVkFIdSrCW/view?usp=sharing" target="_blank">NMEA tracker server (for macOS Apple Silicon)</a></strong></p>
    {:else if userOS.includes('macOS')}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/1N0-qNmHeDdbN0TmdcHszFqZVkFIdSrCW/view?usp=sharing" target="_blank">NMEA tracker server (for macOS)</a></strong></p>
    {:else}
        <p>Prerequisite: <strong><a href="https://google.com/" target="_blank">NMEA tracker server</a></strong></p>
    {/if}
    <p>Configure the server: <a href="{route}/config.html" target="_blank">Configuration</a></p>
    <p>Test the server: <a href="{route}" target="_blank"><code>Testing</code></a></p>
    <!-- <p>UDP: <code>{udpIp}:{udpPort}</code></p> -->
    <!-- <p>TCP: <code>{tcpIp}:{tcpPort}</code></p> -->
    <!-- <p>Request from: <strong>{requestIp}</strong></p> -->

    <hr />

    {#if gpsData}
        <p><strong>Last received NMEA frame:</strong></p>
        <pre>{gpsData}</pre>
        <p><strong>Latitude:</strong> {myLatitude}</p>
        <p><strong>Longitude:</strong> {myLongitude}</p>
        <p><strong>Course over ground:</strong> {myCourseOverGroundT}</p>
        <p><strong>Speed over ground:</strong> {mySpeedOverGround}</p>

        <div class="plugin__buttons">
            <button on:click={centerShip}>📍 Center on vessel</button>
            <button on:click={toggleFollowShip}>
                {followShip ? '🛑 Stop Tracking' : '▶️ Follow vessel'}
            </button> <br>
            <br>
            <button id="button" on:click={showWeatherPopup}>🌬️ Show weather</button>
        </div>
    {/if}    
    <hr />
    <p class="follow-state">
      📡 Automatic tracking: {followShip ? 'Enabled' : 'Disabled'}
    </p>
    <p class="connection-state">
      🔌 Connection: <span class={isConnected ? ' connected' : ' disconnected'}>
        {isConnected ? ' Connected' : ' Disconnected'}
      </span>
    </p>
    {#if myMMSI}
    <p class="mmsi-state">
      🆔 MMSI: {myMMSI} {isValidMMSI(myMMSI) ? '✅' : '❌ Invalid format'}
    </p>
    {/if}
    <p class="debug-info" style="font-size: 12px; color: #666; margin-top: 5px;">
      💻 Detected OS: {userOS}
    </p>
    <div class="error" id="err">
        <p></p>
    </div>
    <div id="footer">
      <center>
        <p>© 2025 Capt S. DEBRAY</p>
        <p><a href="https://github.com/syldeb35/windy-plugin-nmea-tracker" target="_blank">🛳️ Sources and info 🛳️</a></p>
      </center>
    </div>
</section>



<script lang="ts">
    // Type declaration for modern Navigator API
    declare global {
        interface Navigator {
            userAgentData?: {
                platform?: string;
                getHighEntropyValues?: (hints: string[]) => Promise<{architecture?: string}>;
            };
            deviceMemory?: number;
        }
    }
    import bcast from "@windy/broadcast";
    import { onMount, onDestroy } from 'svelte';
    import { map } from '@windy/map';
    import { getLatLonInterpolator } from '@windy/interpolator';
    import { overlaySettings } from '@windy/config';
    import { wind2obj } from '@windy/utils';
    import store from '@windy/store';
    import metrics from '@windy/metrics';
    import io from './socket.io.min.js';
    import { createRotatingBoatIcon } from './boatIcon';
    
    // Use global Leaflet from Windy
    const L = (window as any).L;
    
    const title = 'NMEA tracker plugin';
    const VESSEL = 'YOUR BOAT';
    let requestIp = location.hostname;
    let route = 'https://localhost:5000'; // Replace with your NMEA server URL
    
    // Detect user's operating system with detailed macOS detection
    function detectOSAdvanced() {
        const userAgent = navigator.userAgent.toLowerCase();
        
        if (userAgent.includes('windows nt')) {
            return 'Windows';
        }
        
        if (userAgent.includes('mac os')) {
            // More detailed macOS detection
            const macOSMatch = userAgent.match(/mac os x (\d+)[_.](\d+)/);
            let macVersion = '';
            let architecture = '';
            
            if (macOSMatch) {
                const majorVersion = parseInt(macOSMatch[1]);
                const minorVersion = parseInt(macOSMatch[2]);
                
                // macOS version mapping
                if (majorVersion === 10) {
                    if (minorVersion >= 15) macVersion = 'macOS Catalina+';
                    else macVersion = 'macOS Legacy';
                    architecture = 'Intel'; // macOS 10.x is always Intel
                } else if (majorVersion >= 11) {
                    macVersion = `macOS ${majorVersion}`;
                    
                    // Detect architecture - multiple methods
                    if (userAgent.includes('arm') || userAgent.includes('apple silicon')) {
                        architecture = 'Apple Silicon';
                    } else if (userAgent.includes('intel') || userAgent.includes('x86')) {
                        architecture = 'Intel';
                    } else {
                        // Try to detect via modern APIs (newer browsers)
                        try {
                            if (navigator.userAgentData && navigator.userAgentData.platform) {
                                const platform = navigator.userAgentData.platform.toLowerCase();
                                if (platform === 'macos') {
                                    // Use CPU info to determine architecture if available
                                    navigator.userAgentData.getHighEntropyValues?.(['architecture']).then((ua) => {
                                        architecture = ua.architecture === 'arm' ? 'Apple Silicon' : 'Intel';
                                    }).catch(() => {
                                        architecture = 'Unknown';
                                    });
                                } else {
                                    architecture = 'Unknown';
                                }
                            } else {
                                // Alternative: Use hardware concurrency and other hints
                                const cores = navigator.hardwareConcurrency || 0;
                                const memory = navigator.deviceMemory || 0;
                                
                                // Apple Silicon Macs typically have 8+ cores and high memory
                                // This is a heuristic, not foolproof
                                if (cores >= 8 && memory >= 8) {
                                    architecture = 'Likely Apple Silicon';
                                } else if (cores > 0) {
                                    architecture = 'Likely Intel';
                                } else {
                                    architecture = 'Unknown';
                                }
                            }
                        } catch {
                            architecture = 'Unknown';
                        }
                    }
                }
                
                return `${macVersion} (${architecture})`;
            }
            
            // Fallback for macOS detection
            if (userAgent.includes('intel')) return 'macOS (Intel)';
            if (userAgent.includes('arm')) return 'macOS (Apple Silicon)';
            return 'macOS';
        }
        
        if (userAgent.includes('linux')) return 'Linux';
        if (userAgent.includes('android')) return 'Android';
        if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'iOS';
        
        return 'Unknown';
    }

    const userOS = detectOSAdvanced();
    console.log('User OS detected:', userOS);
    let latitudesal: number | null = null, latDirection: string | null = null;
    let longitudesal: number | null = null, lonDirection: string | null = null;
    let latitude: number | null = null;
    let longitude: number | null = null;
    let myLatitude: string | null = null;
    let myLongitude: string | null = null;
    let gpsData = 'No data received yet...';
    let lastLatitude: number | null = null;
    let lastLongitude: number | null = null;
    let courseOverGroundT: number = 0; // True
    let myCourseOverGroundT: number = 0; // True
    let trueHeading: number = 0; // True heading
    let courseOverGroundM: number = 0; // Magnetic
    let varM: number = 0; // Magnetic variation
    let speedOverGround: number = 0; // In knots
    let mySpeedOverGround: number = 0; // In knots
    let heurePrev: number | null = null; // for projection
    let followShip = true;
    let vesselName = VESSEL;

    let socket: any = null;
    let markerLayer: any = null;
    let aisShipsLayer: any = null; // Layer for AIS ships
    let boatPath: any = null;
    let projectionArrow: any = null;
    let headingArrow: any = null;
    let forecastIcon: any = null;
    let forecastLabel: any = null;
    let pathLatLngs: any[] = [];
    let openedPopup: any = null;
    let aisShips: { [mmsi: string]: any } = {}; // Store AIS ships data

    let udpIp = '0.0.0.0';
    let udpPort = 5005;
    let tcpIp = '0.0.0.0';
    let tcpPort = 5006;
    let myMMSI = ''; // Our own MMSI for comparison

    let aisFragments: { [key: string]: { total: number, received: number, payloads: string[] } } = {};
    let unsubscribeTimeline: (() => void) | null = null;
    let projectionHours: number | null = null; // for projection
    let isConnected: boolean = false; // WebSocket connection status
    let connectionLostTimer: number | null = null; // Timer for connection lost alert

    /**
     * Validates MMSI format (9 digits)
     */
    function isValidMMSI(mmsi: string): boolean {
        return /^\d{9}$/.test(mmsi);
    }

    /**
     * Processes each received NMEA/AIS frame.
     * Updates position, speed, heading, vessel name, etc.
     */
    function processNMEA(data: string) {
        if (!(data.startsWith('$') || data.startsWith('!'))) {
            document.getElementById("err")!.innerHTML = "<p>Invalid NMEA frame</p>";
            return;
        }
        const parts = data.split(',');

        // Decoding classic GPS frames
        if (data.includes('GLL')) {
            if (parts.length < 6) {
                document.getElementById("err")!.innerHTML = "<p>Invalid GLL frame</p>"
                return;
            }
            latitudesal = parseFloat(parts[1]);
            latDirection = parts[2];
            longitudesal = parseFloat(parts[3]);
            lonDirection = parts[4];
        } else if (data.includes('GGA')) {
            if (parts[6] === 'V') {
                document.getElementById("err")!.innerHTML = "<p>Invalid GGA frame</p>"
                return;
            }
            latitudesal = parseFloat(parts[2]);
            latDirection = parts[3];
            longitudesal = parseFloat(parts[4]);
            lonDirection = parts[5];
        } else if (data.includes('RMC')) {
            if (parts[2] === 'V') {
                document.getElementById("err")!.innerHTML = "<p>Invalid RMC frame</p>"
                return;
            }
            latitudesal = parseFloat(parts[3]);
            latDirection = parts[4];
            longitudesal = parseFloat(parts[5]);
            lonDirection = parts[6];
            speedOverGround = parseFloat(parts[7]);
            courseOverGroundT = parseFloat(parts[8]);
        } else if (data.includes('VTG')) {
            courseOverGroundT = parseFloat(parts[1]);
            if (parts[2] === 'T') {
                courseOverGroundM = parseFloat(parts[3]);
            }
            if (parts[4] === 'N') {
                speedOverGround = parseFloat(parts[5]);
            } else if (parts[4] === 'K') {
                // Convert km/h to knots
                speedOverGround = parseFloat(parts[5]) / 1.852;
            } else if (parts[4] === 'M') {
                // To be processed: $HCHDM
            }
        } else if (data.includes('HDG')) {
            courseOverGroundM = parseFloat(parts[1]);
            varM = parseFloat(parts[4]);
        } else if (data.includes('HDT')) {
            trueHeading = parseFloat(parts[1]);
        } else {
            document.getElementById("err")!.innerHTML = "<p>No data received</p>";
            return;
        }

        // Basic AIVDO (VDO) decoding
        if (data.startsWith('!') && data.includes('VDO')) {
            // Example: !AIVDO,1,1,,B,13aG?P0P00PD;88MD5MTDww@2D0k,0*7C
            // Here, the AIS payload is in parts[5]
            const aisPayload = parts[5];
            if (aisPayload) {
                const bitstring = ais6bitDecode(aisPayload);
                const mmsi = parseInt(bitstring.slice(8, 38), 2);
                
                // Store our own MMSI for comparison if not manually set
                if (!myMMSI || !isValidMMSI(myMMSI)) {
                    myMMSI = mmsi.toString();
                }
                
                // Check if this is our own vessel (either manual MMSI or auto-detected)
                const isOwnVessel = (myMMSI && mmsi.toString() === myMMSI);
                
                // Message type (first 6 bits)
                const msgType = parseInt(bitstring.slice(0, 6), 2);
                // For messages 1, 2, 3 (position)
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
                    myLatitude = lat.toFixed(5);
                    myLongitude = lon.toFixed(5);
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
        // AIVDM (VDM) decoding - External AIS ships
        if (data.startsWith('!') && data.includes('AIVDM')) {
            const parts = data.split(',');
            const total = parseInt(parts[1]);
            const num = parseInt(parts[2]);
            const seq = parts[3]; // sequence identifier (can be empty)
            const aisPayload = parts[5];
            const fragKey = seq + '-' + parts[4]; // unique key for fragmented message

            if (total > 1) {
                // Fragmented message
                if (!aisFragments[fragKey]) {
                    aisFragments[fragKey] = { total, received: 0, payloads: [] };
                }
                aisFragments[fragKey].payloads[num - 1] = aisPayload;
                aisFragments[fragKey].received++;

                // If all fragments are received
                if (aisFragments[fragKey].received === total) {
                    const fullPayload = aisFragments[fragKey].payloads.join('');
                    delete aisFragments[fragKey];
                    decodeAISMessage(fullPayload);
                }
            } else {
                // Non-fragmented message
                decodeAISMessage(aisPayload);
            }
            return; // Don't process as own ship data
        }

        // Position variables update

        
        latitude = convertLatitude(latitudesal, latDirection);
        longitude = convertLongitude(longitudesal, lonDirection);
        myLatitude = displayLatitude(latitudesal, latDirection);
        myLongitude = displayLongitude(longitudesal, lonDirection);
        
        if (courseOverGroundT !== null && courseOverGroundT !== undefined && !Number.isNaN(courseOverGroundT)) {
            myCourseOverGroundT = parseFloat(courseOverGroundT.toFixed(2));
        } else {
            myCourseOverGroundT = myCourseOverGroundT; // If no data, keep the last value
        }
        if (speedOverGround !== null && speedOverGround !== undefined && !Number.isNaN(speedOverGround)) {
            mySpeedOverGround = parseFloat(speedOverGround.toFixed(2));
        } else {
            mySpeedOverGround = mySpeedOverGround; // If no data, keep the last value
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
        if (!Number.isNaN(newLat) && !Number.isNaN(newLon)) {
            
        addBoatMarker(newLat, newLon, myCourseOverGroundT);

        }
        // Clear potential errors
        document.getElementById("err")!.innerHTML = "<p></p>";
    }

    /**
     * Creates an AIS ship icon
     */
    function createAISShipIcon(heading: number, shipType: number = 0): any {
        let color = '#ff6600'; // Default orange
        let size = 16;
        
        // Color based on ship type (AIS ship and cargo type)
        if (shipType >= 70 && shipType <= 79) color = '#ff0000'; // Cargo ships - red
        else if (shipType >= 60 && shipType <= 69) color = '#0066ff'; // Passenger ships - blue
        else if (shipType >= 80 && shipType <= 89) color = '#00cc00'; // Tanker ships - green
        else if (shipType >= 30 && shipType <= 39) color = '#8800ff'; // Fishing vessels - purple
        else if (shipType >= 40 && shipType <= 49) color = '#ffcc00'; // High speed craft - yellow
        
        const iconHtml = `
            <div class="ais-ship-icon" style="
                width: ${size}px; 
                height: ${size}px; 
                transform: rotate(${heading}deg);
                transform-origin: center center;
            ">
                <svg width="${size}" height="${size}" viewBox="0 0 24 24">
                    <path d="M12 2L4 12h16L12 2z" fill="${color}" stroke="#000" stroke-width="1"/>
                </svg>
            </div>
        `;
        
        return L.divIcon({
            html: iconHtml,
            className: 'ais-ship-marker',
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });
    }

    /**
     * Updates or adds an AIS ship on the map
     */
    function updateAISShip(mmsi: string, data: any) {
        if (!aisShipsLayer) return;
        
        const shipKey = mmsi.toString();
        const position = L.latLng(data.lat, data.lon);
        
        // Remove existing marker if it exists
        if (aisShips[shipKey] && aisShips[shipKey].marker) {
            aisShipsLayer.removeLayer(aisShips[shipKey].marker);
        }
        
        // Create new marker
        const icon = createAISShipIcon(data.cog || 0, data.shipType || 0);
        const marker = L.marker(position, { icon }).addTo(aisShipsLayer);
        
        // Create tooltip content
        const tooltipContent = `
            <strong>MMSI: ${mmsi}</strong><br>
            Name: ${data.name || 'Unknown'}<br>
            Course: ${data.cog?.toFixed(1) || 'N/A'}°<br>
            Speed: ${data.sog?.toFixed(1) || 'N/A'} knots<br>
            Type: ${getShipTypeName(data.shipType || 0)}
        `;
        
        marker.bindTooltip(tooltipContent, { 
            permanent: false, 
            direction: 'top', 
            className: 'ais-ship-tooltip' 
        });
        
        // Store ship data
        aisShips[shipKey] = {
            marker: marker,
            data: data,
            lastUpdate: Date.now()
        };
    }

    /**
     * Get ship type name from AIS ship type code
     */
    function getShipTypeName(shipType: number): string {
        if (shipType >= 70 && shipType <= 79) return 'Cargo';
        if (shipType >= 60 && shipType <= 69) return 'Passenger';
        if (shipType >= 80 && shipType <= 89) return 'Tanker';
        if (shipType >= 30 && shipType <= 39) return 'Fishing';
        if (shipType >= 40 && shipType <= 49) return 'High Speed';
        if (shipType >= 20 && shipType <= 29) return 'Wing in Ground';
        if (shipType >= 50 && shipType <= 59) return 'Special Craft';
        if (shipType >= 90 && shipType <= 99) return 'Other';
        return 'Unknown';
    }

    /**
     * Clean up old AIS ships (older than 10 minutes)
     */
    function cleanupOldAISShips() {
        const now = Date.now();
        const maxAge = 10 * 60 * 1000; // 10 minutes
        
        Object.keys(aisShips).forEach(mmsi => {
            if (now - aisShips[mmsi].lastUpdate > maxAge) {
                if (aisShips[mmsi].marker) {
                    aisShipsLayer.removeLayer(aisShips[mmsi].marker);
                }
                delete aisShips[mmsi];
            }
        });
    }
    function decodeAISMessage(aisPayload: string) {
        if (!aisPayload) return;
        const bitstring = ais6bitDecode(aisPayload);
        const msgType = parseInt(bitstring.slice(0, 6), 2);
        const mmsi = parseInt(bitstring.slice(8, 38), 2).toString(); // Extract MMSI from payload
        
        // Check if this is our own vessel
        const isOwnVessel = (myMMSI && isValidMMSI(myMMSI) && mmsi === myMMSI);
        
        if (msgType === 1 || msgType === 2 || msgType === 3) {
            // Position Report (Class A)
            const lat = (parseInt(bitstring.slice(89, 116), 2) - 134217728) / 600000;
            const lon = (parseInt(bitstring.slice(61, 89), 2) - 134217728) / 600000;
            const cog = parseInt(bitstring.slice(116, 128), 2) / 10; // Course over ground
            const sog = parseInt(bitstring.slice(50, 60), 2) / 10; // Speed over ground
            const heading = parseInt(bitstring.slice(128, 137), 2); // True heading
            
            if (lat !== 91 && lon !== 181) { // Valid coordinates
                if (isOwnVessel) {
                    // This is our own vessel - update our position data
                    gpsData = `AIS MMSI: ${mmsi} (Own vessel)\nLat: ${lat.toFixed(5)}\nLon: ${lon.toFixed(5)}\nCOG: ${cog}°\nSOG: ${sog} nds`;
                    addBoatMarker(lat, lon, cog);
                    myLatitude = lat.toFixed(5);
                    myLongitude = lon.toFixed(5);
                    myCourseOverGroundT = cog;
                    mySpeedOverGround = sog;
                    lastLatitude = lat;
                    lastLongitude = lon;
                } else {
                    // This is an external vessel - add to AIS ships
                    updateAISShip(mmsi, { lat, lon, cog, sog, heading });
                }
            }
        } else if (msgType === 5) {
            // Static and Voyage Related Data
            const shipType = parseInt(bitstring.slice(232, 240), 2);
            let nameBits = bitstring.slice(112, 232);
            let name = '';
            for (let i = 0; i < nameBits.length; i += 6) {
                const charCode = parseInt(nameBits.slice(i, i + 6), 2);
                name += aisAscii(charCode);
            }
            name = name.replace(/@+$/, '').trim();
            
            if (isOwnVessel) {
                // This is our own vessel - update vessel name
                vesselName = name;
            } else {
                // This is an external vessel - store static data
                if (!aisShips[mmsi]) {
                    aisShips[mmsi] = { marker: null, lastUpdate: Date.now() };
                }
                aisShips[mmsi].name = name;
                aisShips[mmsi].shipType = shipType;
                aisShips[mmsi].lastUpdate = Date.now();
            }
        }
    }
    
    /**
     * Décode le payload 6 bits AIS en binaire
     */
    function ais6bitDecode(payload: string): string {
        let bitstring = '';
        for (let i = 0; i < payload.length; i++) {
            let val = payload.charCodeAt(i) - 48;
            if (val > 40) val -= 8;
            bitstring += ('000000' + val.toString(2)).slice(-6);
        }
        return bitstring;
    }

    /**
     * Convertit un code AIS 6 bits en caractère ASCII
     */
    function aisAscii(val: number): string {
        // Official ITU-R M.1371-5 table
        const table = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^- !\"#$%&'()*+,-./0123456789:;<=>?";
        return table[val] || ' ';
    }

    /**
     * Convert NMEA latitude/longitude to decimal
     */
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

    /**
     * Formatted display of latitude/longitude
     */
    function displayLatitude(val: number, dir?: string): string {
        const hemisphere = dir ?? (val >= 0 ? 'N' : 'S');
        let deg: number | null = null;
        let min: number | null = null;
        // If dir is undefined or null, we assume it's a decimal degrees value
        // and we calculate degrees and minutes accordingly.
        if (dir === undefined || dir === null) {
            deg = Math.floor(Math.abs(val));
            min = (Math.abs(val) - deg) * 60; // Convert decimal degrees to minutes
        } else { // If dir is defined, we assume it's a raw value.
            deg = Math.floor(Math.abs(val) / 100);
            min = Math.abs(val) - deg * 100;
        }
        return ('00' + deg).slice(-2) + '° ' + ('0' + ((Math.floor(min * 1000) / 1000).toFixed(4))).slice(-7) + "' " + hemisphere;
    }

    function displayLongitude(val: number, dir?: string): string {
        const hemisphere = dir ?? (val >= 0 ? 'E' : 'W');
        let deg: number | null = null;
        let min: number | null = null;
        // If dir is undefined or null, we assume it's a decimal degrees value
        // and we calculate degrees and minutes accordingly.
        if (dir === undefined || dir === null) {
            deg = Math.floor(Math.abs(val));
            min = (Math.abs(val) - deg) * 60; // Convert decimal degrees to minutes
        } else { // If dir is defined, we assume it's a raw value.
            deg = Math.floor(Math.abs(val) / 100);
            min = Math.abs(val) - deg * 100;
        }
        return ('000' + deg).slice(-3) + '° ' + ('0' + ((Math.floor(min * 1000) / 1000).toFixed(4))).slice(-7) + "' " + hemisphere;
    }
    
    /**
     * Calculate the projected position of the vessel based on heading/speed and Windy timestamp
     */
    function computeProjection(lat: number, lon: number, cog: number, sog: number, duration?: number): any {
        const ts = store.get('timestamp');
        duration = duration ?? (Math.floor((ts - Date.now()) / 3600000) || 0); // in hours, if no timestamp we don't project
        if (duration > 360) duration = 0;
        if (duration < 1) duration = 0; // if timestamp in the past, we don't project
        // sog in knots → km/h (1.852) → m/s (÷3.6)
        const distanceMeters = sog * 1.852 * 1000 * duration; // in meters
        const R = 6371000; // Earth radius in m
        const δ = distanceMeters / R; // in radians
        const θ = toRadians(cog);
        const φ1 = toRadians(lat);
        const λ1 = toRadians(lon);

        const φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));
        const λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1), Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));

        return L.latLng(toDegrees(φ2), toDegrees(λ2));
    }
    
    /**
     * Shows a Windy weather popup at the given position.
     * @param useProjectionTime If true, uses Windy timestamp (forecast), otherwise current time.
     */
    function showMyPopup(lat: number, lon: number, useProjectionTime = false) {
        openedPopup?.remove();

        const popup = L.popup({ autoClose: true })
            .setLatLng([lat, lon])
            .setContent('<em>Loading weather...</em>')
            .openOn(map);

        openedPopup = popup;

        getLatLonInterpolator().then(interpolator => {
            if (!interpolator) {
                popup.setContent('Weather layer not available.');
                return;
            }

            // Choose timestamp according to context
            let ts: number;
            let forecastDate: Date;
            if (useProjectionTime) {
                ts = getRoundedHourTimestamp(store.get('timestamp')); // projection time (forecast)
            } else {
                ts = getRoundedHourTimestamp(Date.now()); // current time
            }
            if (ts) {
                forecastDate = new Date(ts);
            }

            const overlay = store.get('overlay');
            const values = interpolator({ lat, lon });
            let content = `<strong>${VESSEL}</strong><br>φ = ${displayLatitude(lat)}, λ= ${displayLongitude(lon)}<br>`;

            if (!Array.isArray(values)) {
                content += '❌ No interpolated data.';
                popup.setContent(content);
                return;
            }

            if (overlay === 'wind') {
                const { dir, wind } = wind2obj(values);
                const speed = metrics.wind.convertValue(wind);
                content += `💨 Wind: ${speed}<br>🧭 Direction: ${dir} °`;
            } else if (overlay === 'waves') {
                const waveHeight = metrics.waves.convertValue(values[0]);
                const waveDir = Math.round(values[1]);
                const wavePeriod = values[2].toFixed(1);
                content += `🌊 Height: ${waveHeight} m<br>🧭 Direction: ${waveDir}°<br>⏱ Period: ${wavePeriod} s`;
            } else if (overlay === 'gust') {
                const gust = metrics.wind.convertValue(values[0]);
                content += `💨 Gusts: ${gust}`;
            } else if (overlay === 'rain') {
                const rain = values[0].toFixed(2);
                content += `🌧️ Rain: ${rain} mm/h`;
            } else if (overlay === 'temp') {
                const tempC = metrics.temp.convertValue(values[0]);
                content += `🌡️ Temperature: ${tempC}`;
            } else if (overlay === 'pressure') {
                const Press = metrics.pressure.convertValue(values[0]);
                content += `📉 Pressure: ${Press} hPa`;
            } else if (overlay === 'clouds') {
                content += `☁️ Cloud cover: ${Math.round(values[0])}%`;
            } else {
                content += 'ℹ️ No weather data available for this layer.';
            }
            content += `<hr><small><strong>Forecast in ${projectionHours} hours :</strong><br> ${forecastDate.toUTCString()}<br>`;
            //content += `${forecastDate.toString()}</small>`;
            popup.setContent(content);
        });
    } // End showMyPopup

    /**
     * Adds the vessel marker and projection on the map.
     * Handles clicks on icons to display weather at current or projected time.
     */
    function addBoatMarker(lat: number, lon: number, cog: number) {
        if (!map || !markerLayer) return;

        const Position = L.latLng(lat, lon);
        markerLayer.clearLayers();
        pathLatLngs.push(Position);

        if (mySpeedOverGround === null || mySpeedOverGround === undefined || isNaN(mySpeedOverGround)) {
            mySpeedOverGround = 6; // Default to 6 if no speed data
        }

        // Trace of the path traveled
        if (!boatPath) {
            boatPath = L.polyline(pathLatLngs, { color: 'blue', weight: 3 }).addTo(map);
        } else {
            boatPath.setLatLngs(pathLatLngs);
        }

        // Heading direction arrow
        const headingEnd = computeProjection(lat, lon, trueHeading, 6, 24);
        if (headingArrow) headingArrow.remove();
        headingArrow = L.polyline([Position, headingEnd], {
            color: 'blue',
            weight: 2,
            dashArray: '10, 10',
        }).addTo(markerLayer);

        // Future projection arrow
        const cogEnd = computeProjection(lat, lon, cog, mySpeedOverGround, projectionHours);
        if (projectionArrow) projectionArrow.remove();
        projectionArrow = L.polyline([Position, cogEnd], {
            color: 'red',
            weight: 1,
            dashArray: '5, 5',
        }).addTo(markerLayer);

        // Main marker (current position)
        const icon = createRotatingBoatIcon(trueHeading, 0.9);
        const marker = L.marker(Position, { icon }).addTo(markerLayer);
        marker.bindTooltip(vesselName, { permanent: false, direction: 'top', className: 'boat-tooltip' });

        // Click on vessel: weather at current time
        marker.on('click', () => {
            if (openedPopup) {
                openedPopup.remove();
                openedPopup = null;
                return;
            }
            // Round to the nearest full hour (in ms)
            store.set('timestamp', getRoundedHourTimestamp());
            showMyPopup(lat, lon, false);
        });

        // Future projection icon (if speed > 0.5 knots)
        if (mySpeedOverGround > 0.5) {
            if (projectionHours === null || projectionHours === undefined) {
                projectionHours = getRoundedHourTimestamp(store.get('timestamp')) - getRoundedHourTimestamp();
            }
            const projected = computeProjection(lat, lon, cog, mySpeedOverGround, projectionHours);            
            // Display forecast icon at projected position
            if (forecastIcon) forecastIcon.remove();
            const icon = createRotatingBoatIcon(trueHeading, 0.6)
            forecastIcon = L.marker(projected, { icon }).addTo(markerLayer);
            forecastIcon.bindTooltip(`Weather forecast in ${projectionHours} hours`, { permanent: false, direction: 'top', className: 'forecast-tooltip' });

            // Click on projection: weather at projection time
            forecastIcon.on('click', () => {
                if (openedPopup) {
                    openedPopup.remove();
                    openedPopup = null;
                    return;
                }
                showMyPopup(projected.lat, projected.lng, true);
            });
        }

        // Dynamic rotation of the icon
        const iconDiv = marker.getElement()?.querySelector('.rotatable') as HTMLElement;
        if (iconDiv) {
            iconDiv.style.transformOrigin = '12px 12px';
            iconDiv.style.transform = `rotateZ(${trueHeading}deg)`;
        }
        // Automatic vessel tracking
        if (followShip) {
            map.setView(Position);
        }
    } // End addBoatMarker

    /**
     * Shows weather according to Windy timeline:
     * - If timeline at current time: popup on vessel
     * - If timeline in the future: popup on projection
     */
    function showWeatherPopup() {
        if (openedPopup) {
            openedPopup?.remove();
            openedPopup = null;
            return;
        }
        if (lastLatitude !== null && lastLongitude !== null) {
            const now = getRoundedHourTimestamp(Date.now());
            const ts = getRoundedHourTimestamp(store.get('timestamp'));
            // If timeline is at current time (±1h)
            if (projectionHours < (1)) {
                showMyPopup(lastLatitude, lastLongitude, false);
            } else if (projectionHours >= (1)) {
                // Display on projected position if timeline in the future
                const projected = computeProjection(lastLatitude, lastLongitude, myCourseOverGroundT, mySpeedOverGround, projectionHours);
                showMyPopup(projected.lat, projected.lng, true);
            } else {
                // If no projection possible, display on current position
                showMyPopup(lastLatitude, lastLongitude, false);
            }
        }
    }

    // Utility functions for geographical calculations
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

    /**
     * Rounds a timestamp (or Date.now() if not provided) to the nearest full hour (in ms)
     */
    function getRoundedHourTimestamp(ts?: number): number {
        const t = ts ?? Date.now();
        const hourMs = 3600 * 1000;
        return Math.floor(t / hourMs) * hourMs;
    }

    // Manual centering on vessel
    function centerShip() {
        if (lastLatitude !== null && lastLongitude !== null) {
            map.setView([lastLatitude, lastLongitude]);
        }
    }

    // Enable/disable automatic vessel tracking
    function toggleFollowShip() {
        followShip = !followShip;
    }

    // Initialization when plugin opens
    export const onopen = () => {
        console.log('Plugin opened');
        projectionHours = 0; // Reset projection hours
    };

    // WebSocket initialization to receive NMEA/AIS frames
    onMount(() => {
        // Initialize marker layer when component mounts and map is available
        markerLayer = L.layerGroup().addTo(map);
        
        // Initialize AIS ships layer
        aisShipsLayer = L.layerGroup().addTo(map);
        
        // Start cleanup timer for old AIS ships (every 5 minutes)
        setInterval(cleanupOldAISShips, 5 * 60 * 1000);
        
        // @ts-ignore: socket.io injected via global script
        socket = io(route, {
            transports: ['websocket'],
            secure: true,
            rejectUnauthorized: false // for self-signed
        });

        // Connection event handlers
        socket.on('connect', () => {
            console.log('WebSocket connected to NMEA server');
            isConnected = true;
            // Clear the connection lost timer
            if (connectionLostTimer) {
                clearTimeout(connectionLostTimer);
                connectionLostTimer = null;
            }
            document.getElementById("err")!.innerHTML = "<p></p>"; // Clear any previous error
        });

        socket.on('disconnect', (reason: string) => {
            console.log('WebSocket disconnected:', reason);
            isConnected = false;
            document.getElementById("err")!.innerHTML = "<p>⚠️ Connection lost to NMEA server</p>";
            
            // Set a timer to show alert if disconnection persists
            connectionLostTimer = setTimeout(() => {
                if (!isConnected) {
                    alert('⚠️ NMEA Server Connection Lost!\n\nThe connection to the NMEA server has been lost for more than 10 seconds.\nPlease check:\n- NMEA server is running\n- Network connectivity\n- Server URL: ' + route);
                }
            }, 10000); // 10 seconds
        });

        socket.on('connect_error', (error: any) => {
            console.error('WebSocket connection error:', error);
            isConnected = false;
            document.getElementById("err")!.innerHTML = "<p>❌ Failed to connect to NMEA server</p>";
        });

        socket.on('reconnect', (attemptNumber: number) => {
            console.log('WebSocket reconnected after', attemptNumber, 'attempts');
            isConnected = true;
            // Clear the connection lost timer
            if (connectionLostTimer) {
                clearTimeout(connectionLostTimer);
                connectionLostTimer = null;
            }
            document.getElementById("err")!.innerHTML = "<p>✅ Reconnected to NMEA server</p>";
            setTimeout(() => {
                document.getElementById("err")!.innerHTML = "<p></p>";
            }, 3000); // Clear success message after 3 seconds
        });

        socket.on('nmea_data', (data: string) => {
            gpsData = data;
            processNMEA(data);
        });

        // Subscribe to Windy timeline changes
        const unsub = store.on('timestamp', (ts: number) => {
            // This code will be executed on every timeline change
            // For example:
            console.log('Windy timeline changed, new timestamp:', ts);
            // You can trigger an action here, update a variable, etc.
            projectionHours = (getRoundedHourTimestamp(store.get('timestamp')) - getRoundedHourTimestamp()) / (3600 * 1000); // in hours
            if (projectionHours > 1) {
                document.getElementById('button').innerHTML = "🌬️ Show weather (in " + projectionHours + "h)";
            } else {
                document.getElementById('button').innerHTML = "🌬️ Show weather";
            }
        });
        if (typeof unsub === 'function') {
            unsubscribeTimeline = unsub;
        } else {
            unsubscribeTimeline = null;
        }
    });

    // Cleanup when plugin closes
    onDestroy(() => {
        if (socket) {
            socket.disconnect();
            socket = null;
        }
        // Clear connection lost timer
        if (connectionLostTimer) {
            clearTimeout(connectionLostTimer);
            connectionLostTimer = null;
        }
        openedPopup?.remove();
        markerLayer.clearLayers();
        aisShipsLayer?.clearLayers(); // Clear AIS ships layer
        boatPath?.remove();
        projectionArrow?.remove();
        forecastIcon?.remove();
        boatPath = null;
        projectionArrow = null;
        forecastIcon = null;
        pathLatLngs = [];

        // Unsubscribe from Windy timeline
        if (unsubscribeTimeline) unsubscribeTimeline();
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
    .connection-state {
        margin-top: 10px;
        font-weight: bold;
    }
    .connected {
        color: green;
    }
    .disconnected {
        color: red;
    }
    .mmsi-state {
        margin-top: 10px;
        font-weight: bold;
        color: #0066cc;
    }
    .plugin-container {
        padding: 10px;
        font-family: Arial, sans-serif;
        white-space: pre-wrap; /* Allows displaying line breaks */
        background: #f5f5f5;
        height: 100%;
        overflow-y: auto;
    }
    .centered {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    /* Styles for links */
    a {
        color: #4db8ff;
        text-decoration: underline;
    }
    
    a:hover {
        color: #66d9ff;
        text-decoration: underline;
    }
    
    a:visited {
        color: #b366ff;
    }
    /* Styles for the footer */
    #footer{
        height: 100px;
        position: absolute;
        bottom: 0px;
    }
    
    /* AIS Ship marker styles */
    .ais-ship-marker {
        background: transparent !important;
        border: none !important;
    }
    
    .ais-ship-icon {
        cursor: pointer;
        z-index: 1000;
    }
    
    .ais-ship-icon svg {
        filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.3));
    }
</style>

