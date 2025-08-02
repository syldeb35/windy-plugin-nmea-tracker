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
    
    {#if userOS === 'Windows'}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/1W_CtJgLw57gbtDJlDJ5Fk_5hpp42NV6i/view?usp=drive_link" target="_blank">NMEA tracker server (for Windows)</a></strong></p>
    {:else if userOS === 'Linux'}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/1gtHy7I55g-o26V-Ryx_oOifvlxGAqIF6/view?usp=drive_link" target="_blank">NMEA tracker server (for Linux)</a></strong></p>
    {:else if userOS.includes('macOS') && userOS.includes('Intel')}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/13x7YSK_oX0mUgWyk-88h7bWsYqAyfaSx/view?usp=drive_link" target="_blank">NMEA tracker server (for macOS Intel)</a></strong></p>
    {:else if userOS.includes('macOS') && userOS.includes('Apple Silicon')}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/1N0-qNmHeDdbN0TmdcHszFqZVkFIdSrCW/view?usp=drive_link" target="_blank">NMEA tracker server (for macOS Apple Silicon)</a></strong></p>
    {:else if userOS.includes('macOS')}
        <p>Prerequisite: <strong><a href="https://drive.google.com/file/d/1N0-qNmHeDdbN0TmdcHszFqZVkFIdSrCW/view?usp=drive_link" target="_blank">NMEA tracker server (for macOS)</a></strong></p>
    {:else}
        <p>Prerequisite: <strong><a href="https://drive.google.com/drive/folders/1P1H36AiJA98XaYRdEsfCV8L59EiUXKAG?usp=drive_link" target="_blank">NMEA tracker server</a></strong></p>
    {/if}
    <p>Configure the server: <a href="{route}/config.html" target="_blank">Configuration</a></p>
    <p>Test the server: <a href="{route}" target="_blank"><code>Testing</code></a></p>
    <!-- <p>UDP: <code>{udpIp}:{udpPort}</code></p> -->
    <!-- <p>TCP: <code>{tcpIp}:{tcpPort}</code></p> -->
    <!-- <p>Request from: <strong>{requestIp}</strong></p> -->

    <!-- <label class="centered">
        Vessel name:
        <input type="text" bind:value={vesselName} />
    </label> -->
    <label class="right-aligned">
        Server address : 
        <input 
            type="text" 
            bind:value={serverHost} 
            on:input={updateRoute}
            placeholder="localhost or IP address" 
            style="width: 100px;" 
        />
    </label>
    <p style="font-size: 12px; color: #666; margin: 5px 0;">
        🌐 Full server URL: <code>{route}</code>
    </p>
    
    <label class="right-aligned">
        Your MMSI : 
        <input 
            type="text" 
            bind:value={myMMSI} 
            placeholder="e.g. 123456789"
            style="width: 100px;" 
            maxlength="9" 
            />
    </label>
    <p></p>
    <div class="centered">
        <button popovertarget="help">🛳️ <big>Help</big> 🛳️</button>
    </div>
    
    <hr />

    {#if nmeaHistory.length > 0}
        <p><strong>Last received NMEA frames:</strong></p>
        <p class="nmea-types">{nmeaHistory.join(', ')}</p>
        <p><strong>Latitude:</strong> {myLatitude}</p>
        <p><strong>Longitude:</strong> {myLongitude}</p>
        <p><strong>Course over ground:</strong> 
            {testModeEnabled ? `${testCOG}° (TEST)` : `${myCourseOverGroundT}°`}
        </p>
        <p><strong>Speed over ground:</strong> 
            {testModeEnabled ? `${testSOG} knots (TEST)` : `${mySpeedOverGround} knots`}
        </p>

        <div class="plugin__buttons">
            <button on:click={centerShip}>📍 Center on vessel</button>
            <button on:click={toggleFollowShip}>
                {followShip ? '🛑 Stop Tracking' : '▶️ Follow vessel'}
            </button> <br>
            <br>
            <button id="button" on:click={showWeatherPopup}>{buttonText}</button>
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
    
    <!-- Test Mode Controls -->
    <hr />
    <div class="test-mode-section">
      <p style="font-weight: bold; margin-bottom: 10px;">🧪 Test Mode :</p>
      <label class="centered">
        <input type="checkbox" bind:checked={testModeEnabled} />
        Enable test mode
      </label>
      {#if testModeEnabled}
        <div style="margin-top: 10px;">
          <label class="centered">
            Test SOG (knots):
            <input type="number" bind:value={testSOG} min="0" max="30" step="0.1" style="width: 80px;" />
          </label>
          <label class="centered">
            Test COG (degrees):
            <input 
              type="number" 
              value={testCOG}
              on:input={handleCOGInput}
              on:change={handleCOGInput}
              step="1" 
              style="width: 80px;" 
            />
          </label>
          <p style="font-size: 12px; color: #666; margin-top: 5px;">
            📝 Test values override real data for projections and weather forecasts
          </p>
        </div>
      {/if}
    </div>
    <div class="error" id="err">
        <p></p>
    </div>
    <div id="footer">
      <p>© 2025 Capt S. DEBRAY - v{config.version}</p>
      <p><a href="https://github.com/syldeb35/windy-plugin-nmea-tracker" target="_blank">🛳️ Sources and info 🛳️</a></p>
    </div>
</section>



<script lang="ts">
    import bcast from "@windy/broadcast";
    import { onMount, onDestroy } from 'svelte';
    import { map } from '@windy/map';
    import { getLatLonInterpolator } from '@windy/interpolator';
    import { overlaySettings } from '@windy/config';
    import { wind2obj, wave2obj } from '@windy/utils';
    import store from '@windy/store';
    import metrics from '@windy/metrics';
    import io from './socket.io.min.js';
    import { createRotatingBoatIcon } from './boatIcon';
    import config from './pluginConfig';
    
    // Use global Leaflet from Windy
    const L = (window as any).L;
    
    const title = 'NMEA tracker plugin';
    const VESSEL = 'YOUR BOAT';
    let route = 'https://localhost:5000'; // Replace with your NMEA server URL
    
     // Server configuration variables
    let serverHost = 'localhost'; // Default server host
    let serverPort = 5000; // Fixed port
    
    // Function to update the route when server host changes
    function updateRoute() {
        route = `https://${serverHost}:${serverPort}`;
    }
    
    /**
     * Creates and configures the WebSocket connection
     */
    function createSocketConnection() {
        // Disconnect existing socket if any
        if (socket) {
            socket.disconnect();
            socket = null;
        }
        
        console.log('Connecting to NMEA server at:', route);
        
        // @ts-ignore: socket.io injected via global script
        socket = io(route, {
            transports: ['websocket'],
            secure: true,
            rejectUnauthorized: false // for self-signed
        });

        // Connection event handlers (same as before)
        socket.on('connect', () => {
            console.log('WebSocket connected to NMEA server');
            isConnected = true;
            if (connectionLostTimer) {
                clearTimeout(connectionLostTimer);
                connectionLostTimer = null;
            }
            errorList = errorList.filter(error => 
                !error.includes("Connection lost") && 
                !error.includes("Failed to connect") && 
                !error.includes("No NMEA frames received")
            );
            lastError = '';
            updateErrorDisplay();
            resetNoFrameTimer();
        });

        socket.on('disconnect', (reason: string) => {
            console.log('WebSocket disconnected:', reason);
            isConnected = false;
            addError("⚠️ Connection lost to NMEA server");
            
            if (noFrameTimer) {
                clearTimeout(noFrameTimer);
                noFrameTimer = null;
            }
            
            connectionLostTimer = setTimeout(() => {
                if (!isConnected) {
                    alert('⚠️ NMEA Server Connection Lost!\n\nThe connection to the NMEA server has been lost for more than 10 seconds.\nPlease check:\n- NMEA server is running\n- Network connectivity\n- Server URL: ' + route);
                }
            }, 10000);
        });

        socket.on('connect_error', (error: any) => {
            console.error('WebSocket connection error:', error);
            isConnected = false;
            addError("❌ Failed to connect to NMEA server");
        });

        socket.on('reconnect', (attemptNumber: number) => {
            console.log('WebSocket reconnected after', attemptNumber, 'attempts');
            isConnected = true;
            if (connectionLostTimer) {
                clearTimeout(connectionLostTimer);
                connectionLostTimer = null;
            }
            errorList = errorList.filter(error => 
                !error.includes("Connection lost") && 
                !error.includes("Failed to connect") && 
                !error.includes("No NMEA frames received")
            );
            lastError = '';
            updateErrorDisplay();
            resetNoFrameTimer();
        });

        socket.on('nmea_data', (data: string) => {
            const frameType = processNMEA(data);
            if (frameType) {
                removeErrorsByType(frameType);
            }
            updateErrorDisplay();
        });
    }
    
    // Initialize route on component load
    updateRoute();
    
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
                            // Use type assertion for experimental APIs
                            const nav = navigator as any;
                            if (nav.userAgentData && nav.userAgentData.platform) {
                                const platform = nav.userAgentData.platform.toLowerCase();
                                if (platform === 'macos') {
                                    // Use CPU info to determine architecture if available
                                    nav.userAgentData.getHighEntropyValues?.(['architecture']).then((ua: any) => {
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
                                const memory = (navigator as any).deviceMemory || 0;
                                
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
    let data = 'No data received yet...';
    let nmeaHistory: string[] = []; // Store last 10 NMEA frame types
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
    let followShip = false; // do not follow ship by default
    let vesselName = VESSEL;
    let CurrentOverlay = 'Windy'; // Default overlay, can be changed later

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
    // Store AIS ships data globally so all functions can access it
    let aisShips: { [mmsi: string]: any } = {};

    let udpIp = '0.0.0.0';
    let udpPort = 5005;
    let tcpIp = '0.0.0.0';
    let tcpPort = 5006;
    let myMMSI = ''; // Our own MMSI for comparison

    let aisFragments: { [key: string]: { total: number, received: number, payloads: string[] } } = {};
    let unsubscribeTimeline: (() => void) | null = null;
    let unsubscribeOverlay: (() => void) | null = null;
    let projectionHours: number | null = null; // for projection
    let isConnected: boolean = false; // WebSocket connection status
    let connectionLostTimer: number | null = null; // Timer for connection lost alert
    let lastError: string = ''; // Store the last error to persist until valid frame
    let errorList: string[] = []; // Store multiple errors
    let lastFrameReceived: number = Date.now(); // Timestamp of last received frame
    let noFrameTimer: number | null = null; // Timer for no frame detection

    // Test mode variables for when vessel is stopped
    let testModeEnabled: boolean = false; // Enable/disable test mode
    let testSOG: number = 6; // Test Speed Over Ground in knots
    let testCOG: number = 45; // Test Course Over Ground in degrees

    // Button text variables for reactive updates
    let buttonText: string = "🌬️ Show Windy prediction";

    /**
     * Updates the button text based on current overlay and projection hours
     */
    function updateButtonText() {
        if (projectionHours > 1) {
            buttonText = `🌬️ Show ${CurrentOverlay} prediction (in ${projectionHours}h)`;
        } else {
            buttonText = `🌬️ Show ${CurrentOverlay} prediction`;
        }
    }

    /**
     * Normalizes COG value to be between 0 and 359 degrees (cyclical)
     */
    function normalizeCOG(value: number): number {
        // Handle proper cyclical behavior for any value
        if (value < 0) {
            return ((value % 360) + 360) % 360;
        } else if (value >= 360) {
            return value % 360;
        }
        return value;
    }

    /**
     * Handles COG input changes with cyclical normalization
     */
    function handleCOGInput(event: Event) {
        const target = event.target as HTMLInputElement;
        const rawValue = parseInt(target.value) || 0;
        testCOG = normalizeCOG(rawValue);
        // Update the input field to reflect the normalized value
        target.value = testCOG.toString();
    }

    /**
     * Handles arrow key presses for cyclical COG behavior
    function handleCOGKeydown(event: KeyboardEvent) {
        const target = event.target as HTMLInputElement;
        const currentValue = parseInt(target.value) || 0;
        
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            testCOG = normalizeCOG(currentValue + 1);
            target.value = testCOG.toString();
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            testCOG = normalizeCOG(currentValue - 1);
            target.value = testCOG.toString();
        }
    }
     */

    /**
     * Adds NMEA frame type to history (keep last 10)
     */
    function addToNmeaHistory(frame: string) {
        // Only add frames that start with $ (standard NMEA) or ! (AIS)
        if (frame.startsWith('$') || frame.startsWith('!')) {
            // Extract frame type (e.g., $GPGGA -> $GPGGA)
            const frameType = frame.split(',')[0];
            
            nmeaHistory.unshift(frameType); // Add to beginning
            if (nmeaHistory.length > 10) {
                nmeaHistory.pop(); // Remove oldest if more than 10
            }
            // Update reactive variable to trigger UI update
            nmeaHistory = [...nmeaHistory];
        }
    }

    /**
     * Validates MMSI format (9 digits)
     */
    function isValidMMSI(mmsi: string): boolean {
        return /^\d{9}$/.test(mmsi);
    }

    /**
     * Processes each received NMEA/AIS frame.
     * Updates position, speed, heading, vessel name, etc.
     * @returns {string|null} Frame type if successfully processed, null if error
     */
    function processNMEA(data: string): string | null {
        // Reset the no frame timer since we received a frame
        resetNoFrameTimer();
        
        if (!data.startsWith('$') && !data.startsWith('!')) {
            addError("[Err] Invalid NMEA frame");
            return null;
        }
        
        // Add frame to history
        addToNmeaHistory(data);
        
        const parts = data.split(',');
        let frameType: string | null = null; // Track which frame type was processed

        // Decoding classic GPS frames
        if (data.includes('GLL')) {
            if (parts.length < 6) {
                addError("[Err] Invalid GLL frame - insufficient parts");
                return null;
            }
            if (parts[6] === 'V') {
                addError("[Err] Invalid GLL frame - status invalid");
                return null;
            }
            latitudesal = parseFloat(parts[1]);
            latDirection = parts[2];
            longitudesal = parseFloat(parts[3]);
            lonDirection = parts[4];
            frameType = 'GLL';
        } else if (data.includes('GGA')) {
            if (parts.length < 7) {
                addError("[Err] Invalid GGA frame - insufficient parts");
                return null;
            }
            if (parts[6] === '0' || parts[6] === 'V') {
                addError("[Err] Invalid GGA frame - no GPS fix");
                return null;
            }
            latitudesal = parseFloat(parts[2]);
            latDirection = parts[3];
            longitudesal = parseFloat(parts[4]);
            lonDirection = parts[5];
            frameType = 'GGA';
        } else if (data.includes('RMC')) {
            if (parts.length < 9) {
                addError("[Err] Invalid RMC frame - insufficient parts");
                return null;
            }
            if (parts[2] === 'V') {
                addError("[Err] Invalid RMC frame - status invalid");
                return null;
            }
            latitudesal = parseFloat(parts[3]);
            latDirection = parts[4];
            longitudesal = parseFloat(parts[5]);
            lonDirection = parts[6];
            speedOverGround = parseFloat(parts[7]);
            courseOverGroundT = parseFloat(parts[8]);
            frameType = 'RMC';
        } else if (data.includes('VTG')) {
            if (parts.length < 6) {
                addError("[Err] Invalid VTG frame - insufficient parts");
                return null;
            }
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
            frameType = 'VTG';
        } else if (data.includes('HDG')) {
            if (parts.length < 5) {
                addError("[Err] Invalid HDG frame - insufficient parts");
                return null;
            }
            courseOverGroundM = parseFloat(parts[1]);
            varM = parseFloat(parts[4]);
            frameType = 'HDG';
        } else if (data.includes('HDT')) {
            if (parts.length < 2) {
                addError("[Err] Invalid HDT frame - insufficient parts");
                return null;
            }
            trueHeading = parseFloat(parts[1]);
            frameType = 'HDT';
        }
        
        // Position variables update (for GPS frames that have position data)
        if (frameType && ['GLL', 'GGA', 'RMC'].includes(frameType)) {
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
        }

        // ...existing code...
        // Basic AIVDO (VDO) decoding
        if (data.startsWith('!') && data.includes('VDO')) {
            // Example: !AIVDO,1,1,,B,13aG?P0P00PD;88MD5MTDww@2D0k,0*7C
            const parts = data.split(',');
            if (parts.length < 6) {
                addError("[Err] Invalid AIS VDO frame - insufficient parts");
                return null;
        // AIVDM (VDM) decoding - External AIS ships
        if (data.startsWith('!') && data.includes('AIVDM')) {
            const parts = data.split(',');
            if (parts.length < 6) {
                addError("[Err] Invalid AIS AIVDM frame - insufficient parts");
                return null;
            }
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
            return 'AIS VDM'; // Return frame type for AIS VDM processing
        }

        // Return the frame type if successfully processed
        return frameType;
    }
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
        }
        
        // Return the frame type if successfully processed
        return frameType;
    }

    /**
     * Clears the error display
     */
    function clearErrorDisplay() {
        // Clear the no frame error specifically when valid data is received
        if (lastError.includes("No NMEA frames received")) {
            lastError = '';
        }
        // Clear all errors when valid data is received
        errorList = [];
        lastError = '';
        const errorElement = document.getElementById("err");
        if (errorElement) {
            errorElement.innerHTML = "<p></p>";
        }
    }

    /**
     * Removes errors from the error list based on frame type
     * @param {string|string[]} frameTypes - Frame type(s) to remove errors for
     */
    function removeErrorsByType(frameTypes) {
        const typesToRemove = Array.isArray(frameTypes) ? frameTypes : [frameTypes];
        
        // Remove errors that contain any of the specified frame types
        errorList = errorList.filter(error => {
            return !typesToRemove.some(type => error.includes(type));
        });
        
        // Also clear lastError if it matches any of the types
        if (typesToRemove.some(type => lastError.includes(type))) {
            lastError = '';
        }
        
        // Always clear the "no frames" error when any valid frame is received
        errorList = errorList.filter(error => !error.includes("No NMEA frames received"));
        if (lastError.includes("No NMEA frames received")) {
            lastError = '';
        }
    }

    /**
     * Adds an error to the error list, avoiding duplicates
     */
    function addError(error: string) {
        // Avoid adding duplicate errors
        if (!errorList.includes(error)) {
            errorList.push(error);
            // Keep only the last 5 errors to avoid overflow
            if (errorList.length > 5) {
                errorList.shift();
            }
            // Update display immediately when a new error is added
            updateErrorDisplay();
        }
        lastError = error; // Keep last error for compatibility
    }

    /**
     * Updates the error display with all accumulated errors
     */
    function updateErrorDisplay() {
        const errorElement = document.getElementById("err");
        if (errorElement) {
            if (errorList.length > 0) {
                const errorHTML = errorList.map(err => `<p class="error">${err}</p>`).join('');
                errorElement.innerHTML = errorHTML;
            } else {
                // Clear display when no errors remain
                errorElement.innerHTML = "<p></p>";
            }
        }
    }

    /**
     * Starts the timer to detect no frame reception
     */
    function startNoFrameTimer() {
        if (noFrameTimer) {
            clearTimeout(noFrameTimer);
        }
        noFrameTimer = setTimeout(() => {
            addError("[Err] No NMEA frames received for more than 1 minute");
        }, 60000); // 60 seconds
    }

    /**
     * Resets the no frame timer (called when a frame is received)
     */
    function resetNoFrameTimer() {
        lastFrameReceived = Date.now();
        if (noFrameTimer) {
            clearTimeout(noFrameTimer);
        }
        startNoFrameTimer();
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
        
        // Correction de l'orientation : 0° = Nord, rotation dans le sens horaire
        const correctedHeading = (heading + 0) % 360; // Pas de correction supplémentaire nécessaire si les données sont correctes
        
        const iconHtml = `
            <div class="ais-ship-icon" style="
                width: ${size}px; 
                height: ${size}px; 
                transform: rotate(${correctedHeading}deg);
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
        
        // Use heading if available, otherwise use COG
        const displayHeading = data.heading !== undefined && data.heading !== 511 ? data.heading : (data.cog || 0);
        
        // Create new marker with corrected heading
        const icon = createAISShipIcon(displayHeading, data.shipType || 0);
        const marker = L.marker(position, { icon }).addTo(aisShipsLayer);
        
        // Create tooltip content
        const tooltipContent = `
            <strong>MMSI: ${mmsi}</strong><br>
            Name: ${data.name || 'Unknown'}<br>
            Course: ${data.cog?.toFixed(1) || 'N/A'}°<br>
            Speed: ${data.sog?.toFixed(1) || 'N/A'} knots<br>
            Heading: ${data.heading !== undefined && data.heading !== 511 ? data.heading + '°' : 'N/A'}<br>
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
    // ...existing code...
    function decodeAISMessage(aisPayload: string, isOwnVesselData: boolean = false) {
        if (!aisPayload) return;
        const bitstring = ais6bitDecode(aisPayload);
        const msgType = parseInt(bitstring.slice(0, 6), 2);
        const mmsi = parseInt(bitstring.slice(8, 38), 2).toString();
        
        // Check if this is our own vessel (either from VDO flag or MMSI match)
        const isOwnVessel = isOwnVesselData || (myMMSI && isValidMMSI(myMMSI) && mmsi === myMMSI);
        
        if (msgType === 1 || msgType === 2 || msgType === 3) {
            // Position Report (Class A) - Correction du décodage des coordonnées
            const latRaw = parseInt(bitstring.slice(89, 116), 2);
            const lonRaw = parseInt(bitstring.slice(61, 89), 2);
            
            // Correction du complément à deux
            let lat = (latRaw & 0x4000000) ? (latRaw - 0x8000000) : latRaw;
            let lon = (lonRaw & 0x4000000) ? (lonRaw - 0x8000000) : lonRaw;
            
            lat = lat / 600000.0;
            lon = lon / 600000.0;
            
            const cog = parseInt(bitstring.slice(116, 128), 2) / 10.0;
            const sog = parseInt(bitstring.slice(50, 60), 2) / 10.0;
            const heading = parseInt(bitstring.slice(128, 137), 2);
            
            if (lat !== 91 && lon !== 181) { // Valid coordinates
                if (isOwnVessel) {
                    // Store our own MMSI if not set
                    if (!myMMSI || !isValidMMSI(myMMSI)) {
                        myMMSI = mmsi;
                    }
                    
                    data = `AIS MMSI: ${mmsi} (Own vessel)\nLat: ${lat.toFixed(5)}\nLon: ${lon.toFixed(5)}\nCOG: ${cog}°\nSOG: ${sog} nds`;
                    addBoatMarker(lat, lon, cog);
                    myLatitude = displayLatitude(lat);
                    myLongitude = displayLongitude(lon);
                    myCourseOverGroundT = cog;
                    mySpeedOverGround = sog;
                    lastLatitude = lat;
                    lastLongitude = lon;
                    trueHeading = heading !== 511 ? heading : cog; // Use heading if available
                } else {
                    // External vessel - use corrected heading
                    const displayHeading = heading !== 511 ? heading : cog;
                    updateAISShip(mmsi, { lat, lon, cog, sog, heading: displayHeading });
                }
            }
        } else if (msgType === 5) {
            // Static and Voyage Related Data
            const shipType = parseInt(bitstring.slice(232, 240), 2);
            let nameBits = bitstring.slice(112, 232);
            let name = '';
            for (let i = 0; i < nameBits.length; i += 6) {
                const charCode = parseInt(nameBits.slice(i, i + 6), 2);
                if (charCode === 0) break;
                name += aisAscii(charCode);
            }
            name = name.replace(/@+$/, '').trim();
            
            if (isOwnVessel) {
                if (name && name !== '') {
                    vesselName = name;
                }
            } else {
                if (!aisShips[mmsi]) {
                    aisShips[mmsi] = { marker: null, lastUpdate: Date.now() };
                }
                if (name && name !== '') {
                    aisShips[mmsi].name = name;
                }
                aisShips[mmsi].shipType = shipType;
                aisShips[mmsi].lastUpdate = Date.now();
            }
        }
    }
// ...existing code...
    
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
            let content = `<div style="text-align: center;"><strong>${vesselName}</strong><br>φ = ${displayLatitude(lat)}, λ= ${displayLongitude(lon)}</div>`;
            if (projectionHours === 0) {
                content += `<hr><div><small><strong>${overlay} actual forecast :</strong></small></div>`;
            } else if (projectionHours > 0) {
                content += `<hr><div><small><strong>${overlay} forecast in ${projectionHours} hours :</strong></small></div>`;
            }
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
                const { period, dir } = wave2obj(values);
                const waveHeight = metrics.waves.convertValue(values[2]);
                const waveDir = ((dir % 360) + 360) % 360; // Normalize to 0-360°
                const wavePeriod = period.toFixed(1);
                content += `🌊 Height: ${waveHeight} <br>🧭 Direction: ${Math.round(waveDir)}°<br>⏱ Period: ${wavePeriod} s`;
            
            } else if (overlay === 'wwaves') {
                const { period, dir } = wave2obj(values);
                const waveHeight = metrics.waves.convertValue(values[2]);
                const waveDir = ((dir % 360) + 360) % 360; // Normalize to 0-360°
                const wavePeriod = period.toFixed(1);
                content += `🌊 Height: ${waveHeight} <br>🧭 Direction: ${Math.round(waveDir)}°<br>⏱ Period: ${wavePeriod} s`;
            
            } else if (overlay === 'gust') {
                const gust = metrics.wind.convertValue(values[0]);
                content += `💨 Gusts: ${gust} at ${Math.round(values[1])}m`;
            
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
            
            } else if (overlay === 'tide') {
                const tideHeight = values[0];
                content += `🌊 Tide: ${tideHeight.toFixed(2)} m`;
            
            } else if (overlay === 'currents') {
                const currentSpeed = values[0];
                const currentDir = values[1];
                content += `🌊 Current: ${currentSpeed.toFixed(2)} m/s at ${Math.round(currentDir)}°`;
            
            } else if (overlay === 'swell1' || overlay === 'swell2' || overlay === 'swell3') {
                // For swell overlays, direction conversion formula
                console.log(`Swell ${overlay} data:`, values);
                
                const swellPeriod = values[0].toFixed(1);
                let swellDir = values[1];
                
                // Correct conversion formula based on calibration:
                // 270° → raw: -0.18068928020111485
                // 190° → raw: 10.719788777108018
                let swellDirDeg = (270 - swellDir * 7.33) % 360;
                if (swellDirDeg < 0) swellDirDeg += 360;
                
                const swellHeight = metrics.waves.convertValue(values[2]);
                const swellNum = overlay.slice(-1);
                content += `🌊 Swell ${swellNum}: ${swellHeight}<br>🧭 Direction: ${Math.round(swellDirDeg)}°<br>⏱ Period: ${swellPeriod} s`;
            
            } else {
                content += `ℹ️ No weather data available for ${overlay}.`;
            }
            // Add Windy API version and forecast date
            content += `<hr><div style="text-align: right;"><small><strong>Forecast date : </strong>${forecastDate.toUTCString()}</small></div>`;
            // Uncomment to display forecast date in the popup
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

        // Use test values if test mode is enabled
        let effectiveSOG = mySpeedOverGround;
        let effectiveCOG = cog;
        
        if (testModeEnabled) {
            effectiveSOG = testSOG;
            effectiveCOG = testCOG;
        }

        if (effectiveSOG === null || effectiveSOG === undefined || isNaN(effectiveSOG)) {
            effectiveSOG = 6; // Default to 6 if no speed data
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

        // Future projection arrow (use effective values for test mode)
        const cogEnd = computeProjection(lat, lon, effectiveCOG, effectiveSOG, projectionHours);
        if (projectionArrow) projectionArrow.remove();
        projectionArrow = L.polyline([Position, cogEnd], {
            color: testModeEnabled ? 'orange' : 'red', // Different color in test mode
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
        if (effectiveSOG > 0.5) {
            if (projectionHours === null || projectionHours === undefined) {
                projectionHours = getRoundedHourTimestamp(store.get('timestamp')) - getRoundedHourTimestamp();
            }
            const projected = computeProjection(lat, lon, effectiveCOG, effectiveSOG, projectionHours);            
            // Display forecast icon at projected position
            if (forecastIcon) forecastIcon.remove();
            const icon = createRotatingBoatIcon(trueHeading, 0.6)
            forecastIcon = L.marker(projected, { icon }).addTo(markerLayer);
            const tooltipText = testModeEnabled ? 
                `Weather forecast in ${projectionHours} hours (TEST MODE: SOG=${testSOG}kt, COG=${testCOG}°)` : 
                `Weather forecast in ${projectionHours} hours`;
            forecastIcon.bindTooltip(tooltipText, { permanent: false, direction: 'top', className: 'forecast-tooltip' });

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
            // Use test values if test mode is enabled
            let effectiveSOG = testModeEnabled ? testSOG : mySpeedOverGround;
            let effectiveCOG = testModeEnabled ? testCOG : myCourseOverGroundT;
            
            const now = getRoundedHourTimestamp(Date.now());
            const ts = getRoundedHourTimestamp(store.get('timestamp'));
            // If timeline is at current time (±1h)
            if (projectionHours < (1)) {
                showMyPopup(lastLatitude, lastLongitude, false);
            } else if (projectionHours >= (1)) {
                // Display on projected position if timeline in the future
                const projected = computeProjection(lastLatitude, lastLongitude, effectiveCOG, effectiveSOG, projectionHours);
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
        
        // Start the no frame detection timer
        startNoFrameTimer();
        
        // Create initial socket connection
        createSocketConnection();

        // Subscribe to Windy timeline changes
        const unsub = store.on('timestamp', (ts: number) => {
            // This code will be executed on every timeline change
            // For example:
            console.log('Windy timeline changed, new timestamp:', ts);
            // You can trigger an action here, update a variable, etc.
            projectionHours = (getRoundedHourTimestamp(store.get('timestamp')) - getRoundedHourTimestamp()) / (3600 * 1000); // in hours
            updateButtonText();
        });
        if (typeof unsub === 'function') {
            unsubscribeTimeline = unsub;
        } else {
            unsubscribeTimeline = null;
        }

        // Subscribe to Windy overlay changes
        const unsubOverlay = store.on('overlay', (overlay: string) => {
            console.log('Windy overlay changed, new overlay:', overlay);
            CurrentOverlay = overlay;
            updateButtonText();
        });
        if (typeof unsubOverlay === 'function') {
            unsubscribeOverlay = unsubOverlay;
        } else {
            unsubscribeOverlay = null;
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
        // Clear no frame timer
        if (noFrameTimer) {
            clearTimeout(noFrameTimer);
            noFrameTimer = null;
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
        
        // Unsubscribe from Windy overlay changes
        if (unsubscribeOverlay) unsubscribeOverlay();
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
    /* Specific alignment for server address and MMSI input fields */
    .right-aligned {
        display: flex;
        justify-content: flex-end;
        margin-right: 100px;
        text-align: right;
        align-items: right;
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
    #footer {
        margin-top: 20px;
        padding: 15px 0;
        border-top: 1px solid #444;
        text-align: center;
        /* Remove absolute positioning to prevent overlap */
        position: relative;
    }
    
    /* Add bottom padding to plugin content to ensure space for footer */
    .plugin__content {
        padding-bottom: 20px;
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
    
    /* NMEA Types display */
    .nmea-types {
        background: #2a2a2a;
        border-radius: 4px;
        padding: 8px 12px;
        margin: 8px 0;
        color: #4db8ff;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        border: 1px solid #444;
        word-break: break-all;
    }
</style>

