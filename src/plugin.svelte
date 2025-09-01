<div class="plugin__mobile-header">
    {title}
</div>

{#if helpVisible}
<div id="help" class="plugin-summary" style="border-radius:8px; padding:12px; margin-bottom:16px; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); z-index:9999; background:#3c3c3c; color:white; box-shadow: 0 4px 20px rgba(0,0,0,0.5); max-width:600px; max-height:80vh; overflow-y:auto; border: 1px solid #555;">
    <div style="text-align: center; margin-bottom: 15px;">
        <strong style="color:white; font-size: 18px;">🛳️ NMEA Tracker Help 🛳️</strong>
    </div>
    
    <div style="color:white; line-height: 1.4;">
        <p><strong>📍 What does this plugin do?</strong></p>
        <p style="margin-bottom: 12px;">Track your vessel's real-time position on the Windy map using NMEA or AIS data from your GPS/navigation system.</p>
        
        <p><strong>🔧 How to get started:</strong></p>
        <ol style="margin: 8px 0 12px 20px; color:white;">
            <li><strong>Configure your server:</strong> Click the "Configuration" link to set up your data source (UDP, TCP, or Serial port)</li>
            <li><strong>Enter server address:</strong> Type your server's IP address or use "localhost" for local connections</li>
            <li><strong>Connect:</strong> The plugin will automatically connect and display your vessel's position</li>
        </ol>
        
        <p><strong>⭐ Key Features:</strong></p>
        <ul style="margin: 8px 0 12px 18px; color:white;">
            <li>📡 <strong>Real-time tracking</strong> - See your vessel move live on the map</li>
            <li>🎯 <strong>Position details</strong> - View latitude, longitude, course, and speed</li>
            <li>🏷️ <strong>Vessel identification</strong> - Shows vessel name from AIS data</li>
            <li>📈 <strong>Track history</strong> - Visual trail of your vessel's path</li>
            <li>🌤️ <strong>Weather at position</strong> - Get forecast for your current location</li>
            <li>🎮 <strong>Test mode</strong> - Simulate movement for testing</li>
            <li>🗺️ <strong>GPX route navigation</strong> - Upload and follow sailing routes</li>
        </ul>
         <!-- Layer Organization Section -->
        <hr />
        <div class="layer-organization-section">
            <p style="font-weight: bold; margin-bottom: 10px;">📚 Icon Layer Organization:</p>
            <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                <div style="font-size: 12px; color: #666; line-height: 1.4;">
                    <div style="margin-bottom: 5px;">🔝 <strong>Top Layer:</strong> Your Ship (always visible on top)</div>
                    <div style="margin-bottom: 5px;">📍 <strong>Middle Layer:</strong> Route Waypoints & Lines</div>
                    <div style="margin-bottom: 5px;">🚢 <strong>Bottom Layer:</strong> Other AIS Ships</div>
                </div>
            </div>
            <p style="font-size: 11px; color: #888; margin: 5px 0;">
                This organization ensures your ship icon is always visible above other elements, 
                waypoints are visible above other ships, and everything maintains proper visibility.
            </p>
        </div>
        <hr />
        <p><strong>🎛️ Control buttons:</strong></p>
        <ul style="margin: 8px 0 12px 18px; color:white;">
            <li><strong>📍 Center on vessel</strong> - Jump to your current position</li>
            <li><strong>▶️ Follow vessel</strong> - Auto-track your movement</li>
            <li><strong>🌤️ Weather</strong> - View weather forecast at your position</li>
        </ul>
        
        <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 5px; margin: 12px 0;">
            <strong>💡 Tip:</strong> If you don't see your position, check that your NMEA/AIS data is being received and that the server connection is active (green "Connected" status).
        </div>
        
        <p style="font-size: 90%; color: #ccc; margin-top: 15px; text-align: center;">
            Perfect for sailing, motor boating, commercial vessels, and maritime enthusiasts!
        </p>
    </div>
    
    <div style="text-align: center; margin-top: 15px;">
        <button on:click={toggleHelp} style="background: #ff4444; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold;">✕ Close Help</button>
    </div>
</div>
{/if}

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
        <p style="margin-bottom: 12px;">Prerequisite: <strong><a href="https://drive.google.com/file/d/1W_CtJgLw57gbtDJlDJ5Fk_5hpp42NV6i/view?usp=drive_link" target="_blank">NMEA tracker server (for Windows)</a></strong></p>
    {:else if userOS === 'Linux'}
        <p style="margin-bottom: 12px;">Prerequisite: <strong><a href="https://drive.google.com/file/d/1gtHy7I55g-o26V-Ryx_oOifvlxGAqIF6/view?usp=drive_link" target="_blank">NMEA tracker server (for Linux)</a></strong></p>
    {:else if userOS.includes('macOS') && userOS.includes('Intel')}
        <p style="margin-bottom: 12px;">Prerequisite: <strong><a href="https://drive.google.com/file/d/13x7YSK_oX0mUgWyk-88h7bWsYqAyfaSx/view?usp=drive_link" target="_blank">NMEA tracker server (for macOS Intel)</a></strong></p>
    {:else if userOS.includes('macOS') && userOS.includes('Apple Silicon')}
        <p style="margin-bottom: 12px;">Prerequisite: <strong><a href="https://drive.google.com/file/d/1N0-qNmHeDdbN0TmdcHszFqZVkFIdSrCW/view?usp=drive_link" target="_blank">NMEA tracker server (for macOS Apple Silicon)</a></strong></p>
    {:else if userOS.includes('macOS')}
        <p style="margin-bottom: 12px;">Prerequisite: <strong><a href="https://drive.google.com/file/d/1N0-qNmHeDdbN0TmdcHszFqZVkFIdSrCW/view?usp=drive_link" target="_blank">NMEA tracker server (for macOS)</a></strong></p>
    {:else}
        <p style="margin-bottom: 12px;">Prerequisite: <strong><a href="https://drive.google.com/drive/folders/1P1H36AiJA98XaYRdEsfCV8L59EiUXKAG?usp=drive_link" target="_blank">NMEA tracker server</a></strong></p>
    {/if}
    <p style="margin-bottom: 12px;">Configure the server: <a href="{route}/config.html" target="_blank">Configuration</a></p>
     <label class="right-aligned" style="margin-bottom: 12px;">
        Server address : &nbsp; &nbsp;
        <input 
            type="text"
            id="serverHost"
            name="serverHost"
            bind:value={serverHost} 
            on:input={updateRoute}
            placeholder="localhost or IP address" 
            style="width: 150px; height: 20px; font-weight: bold;"
        />
    </label>
    <p style="margin-bottom: 12px;">Test the server: <a href="{route}" target="_blank"><code>Testing</code></a></p>
    <p class="connection-state" style="margin-bottom: 12px;">
      🔌 Connection: <span class={isConnected ? ' connected' : ' disconnected'}>
        {isConnected ? ' Connected' : ' Disconnected'}
      </span>
    </p>
    <hr />
    {#if !myMMSI}
    <label class="mmsi-state">
        Vessel name : &nbsp; &nbsp;
        <input 
            type="text"
            id="vesselName"
            name="vesselName"
            bind:value={vesselName} 
            on:blur={handleVesselNameChange}
            on:input={handleVesselNameChange}
            placeholder="Enter vessel name" 
            style="width: 150px; height: 20px; font-weight: bold;"
        />
    </label>
    {/if}
    {#if myMMSI}
    <p class="mmsi-state">
      🆔 Vessel name: {vesselName} {isValidMMSI(myMMSI) ? '✅' : '❌'}
    </p>
    <p class="mmsi-state">
      🆔 MMSI: {myMMSI} {isValidMMSI(myMMSI) ? '✅' : '❌ Invalid format'}
    </p>
    {/if}
    <hr />

    {#if nmeaHistory.length > 0}
        <!-- <p><strong>Last received NMEA frames:</strong></p>
        <p class="nmea-types">{nmeaHistory.join(', ')}</p> -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; width: 100%; margin-bottom: 8px;">
            <div><strong>&phi;:</strong> {myLatitude}</div>
            <div><strong>&lambda;:</strong> {myLongitude}</div>
            <div>
                <strong>COG:</strong>
                {testModeEnabled ? `${testCOG.toFixed(1)}° (TEST)` : `${myCourseOverGroundT.toFixed(1)}°`}
            </div>
            <div>
                <strong>SOG:</strong>
                {testModeEnabled ? `${testSOG.toFixed(1)} knots (TEST)` : `${mySpeedOverGround.toFixed(1)} knots`}
            </div>
        </div>
        
        <div class="plugin__buttons__centered">
            <button on:click={centerShip}>📍 Center on vessel</button>
            <button on:click={toggleFollowShip}>
                {followShip ? '🛑 Stop Tracking' : '▶️ Follow vessel'}
            </button>
        </div>
        <div class="plugin__buttons__centered">
            <button id="button" on:click={showWeatherPopup}>{@html buttonText}</button>
        </div>
    {/if}
    <!-- Boat Icon Size Control -->
    <hr />
    <div class="icon-size-section">
        <label for="boatIconSize" style="display: block; margin-bottom: 8px;">
            <strong>🚢 Boat Icon Size: {boatIconSize.toFixed(1)}x</strong>
        </label>
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 12px;">Small</span>
            <input 
                type="range" 
                id="boatIconSize"
                bind:value={boatIconSize}
                min="0.5" 
                max="2.0" 
                step="0.1"
                style="flex: 1;"
            />
            <span style="font-size: 12px;">Large</span>
        </div>
        <p style="font-size: 12px; color: #666; margin: 5px 0;">
            Adjust the size of your boat icon on the map (0.5x to 2.0x)
        </p>
    </div>    
    <!-- Test Mode Controls -->
    <hr />
    <div class="test-mode-section">
      <p style="font-weight: bold; margin-bottom: 10px;">🧪 Test Mode :
            <label style="font-weight: bold; margin-bottom: 10px;">
                <input
                    type="checkbox"
                    id="testModeEnabled"
                    name="testModeEnabled"
                    bind:checked={testModeEnabled}
                />
                Enable
            </label>
        </p>
      {#if testModeEnabled}
        <div style="margin-top: 10px;">
            <label class="right-aligned">
                Test SOG (knots) : &nbsp; &nbsp;
                <input
                    type="number"
                    id="testSOG"
                    name="testSOG"
                    bind:value={testSOG}
                    on:keydown={(e) => { if (e.key === 'Enter') handleSOGInput(e); }}
                    on:mouseleave={handleSOGInput}
                    on:wheel={(e) => {
                        e.preventDefault();
                        if (e.deltaY < 0) testSOG = +(testSOG + 0.1).toFixed(1);
                        else if (e.deltaY > 0) testSOG = +(testSOG - 0.1).toFixed(1);
                    }}
                    min="0"
                    max="30"
                    step="0.1"
                    style="width: 80px; font-weight: bold;"
                />
            </label>

          {#if !isRouteLoaded}
            <label class="right-aligned">
                Test COG (degrees) : &nbsp; &nbsp;
                <input 
                    type="number" 
                    id="testCOG"
                    name="testCOG"
                    value={testCOG}
                    on:input={handleCOGInput}
                    on:change={handleCOGInput}
                    step="1" 
                    style="width: 80px; font-weight: bold;" 
                />
            </label>
          {/if}

          <p style="font-size: 12px; color: #666; margin-top: 5px;">
            📝 Test values override real data for projections and weather forecasts
          </p>
        </div>
      {/if}
    </div>
    <!-- GPX Route Controls -->
    <hr />
    <div class="gpx-route-section">
        <p style="font-weight: bold; margin-bottom: 10px;">🗺️ GPX Route Navigation :</p>
        
        <!-- GPX File Upload -->
        <div style="margin-bottom: 10px;">
            <label for="gpxFileInput" style="display: block; margin-bottom: 5px; font-weight: bold;">
                📄 Upload GPX Route:
            </label>
            <input
                type="file"
                id="gpxFileInput"
                name="gpxFileInput"
                accept=".gpx"
                on:change={handleGpxFileUpload}
                style="width: 100%; margin-bottom: 5px;"
            />
            {#if routeFileName}
                <p style="font-size: 12px; color: #0a0; margin: 2px 0;">
                    ✅ Loaded: {routeFileName}
                </p>
            {/if}
        </div>

        <!-- Route Status Display -->
        {#if isRouteLoaded && gpxRoute.length > 0}
            <div style="background: rgba(0,100,0,0.1); padding: 8px; border-radius: 4px; margin-bottom: 10px;">
                <p style="font-size: 12px; margin: 2px 0;">
                    📍 Waypoints: {gpxRoute.length} | Distance: {routeDistance.toFixed(1)} NM | DTG: {((1 - routeProgress) * routeDistance).toFixed(2)} NM
                </p>
                {#if estimatedTimeToCompletion > 0}
                    <p style="font-size: 12px; margin: 2px 0;">
                        ⏱️ ETC: {Math.floor(estimatedTimeToCompletion)}h {Math.floor((estimatedTimeToCompletion % 1) * 60).toString().padStart(2, '0')} min |
                        {#if estimatedTimeOfArrival}
                            🏁 ETA: {formatDateDDMMYYYY(estimatedTimeOfArrival)} {formatTime24Hour(estimatedTimeOfArrival)} UTC
                        {/if}
                    </p>
                {/if}
                <p style="font-size: 12px; margin: 2px 0;">
                    🎯 Progress: {Math.round(routeProgress * 100)}% | Next: n°{nextWaypointIndex + 1} / {gpxRoute[nextWaypointIndex].name}
                </p>
            </div>

            <!-- Route Controls -->
            <div class="plugin__buttons__centered" style="margin-bottom: 10px;">
                <label class="centered">
                    <input
                        type="checkbox"
                        bind:checked={showRouteWaypoints}
                        on:change={toggleRouteWaypoints}
                    />
                    Show waypoints
                </label>
                <button on:click={clearRoute} style="background: #ff4444; margin-left: 10px;">
                    🗑️ Clear Route
                </button>
            </div>

            <p style="font-size: 11px; color: #666; margin-top: 5px;">
                🧭 Vessel will be projected along the route based on current/test speed
            </p>
        {/if}
    </div>
    <!-- Data Persistence Controls -->
    <hr />
    <div class="persistence-section">
        <p style="font-weight: bold; margin-bottom: 10px;">💾 Data Storage:</p>
        <div class="plugin__buttons__centered" style="margin-bottom: 10px;">
            <button on:click={saveTrackHistory} style="background: #4CAF50;">
                💾 Save Track
            </button>
            <button on:click={() => { saveGpxRoute(); }} style="background: #2196F3;">
                💾 Save Route
            </button>
            <button on:click={clearStoredData} style="background: #f44336;">
                🗑️ Clear All
            </button>
        </div>
        <p style="font-size: 11px; color: #666; margin: 5px 0;">
            Track history and routes are automatically saved and restored when the plugin loads.
        </p>
    </div>
    <div class="error" id="err">
        <p></p>
    </div>
    <div id="footer">
    <div class="centered">
                <button on:click={toggleHelp}>🛳️ <big>Help</big> 🛳️</button>
    </div>
        <br />
        <p>© 2025 Capt S. DEBRAY - v{config.version}</p>
        <p><a href="https://github.com/syldeb35/windy-plugin-nmea-tracker" target="_blank">🛳️ Sources and info 🛳️</a></p>
        <p class="debug-info" style="font-size: 12px; color: #666; margin-top: 5px;">
        💻 Detected OS: {userOS}
        </p>
    </div>
</section>



<script lang="ts">
    import bcastImport from "@windy/broadcast";
    import { onMount, onDestroy } from 'svelte';
    import { map } from '@windy/map';
    import { getLatLonInterpolator } from '@windy/interpolator';
    //import { overlaySettings } from '@windy/config';
    import { wind2obj, wave2obj } from '@windy/utils';
    import store from '@windy/store';
    import metricsImport from '@windy/metrics';
    import io from './socket.io.min.js';
    import { createRotatingBoatIcon } from './boatIcon';
    import config from './pluginConfig';

    /**
     * Constants declaration
     */
    const { title } = config;
    // Explicit type assertions to avoid TypeScript module confusion
    const bcast = bcastImport as {
        emit: (event: string, data?: any) => void;
        on: (event: string, callback: Function) => void;
    };

    /**
     * Metrics for various environmental factors
     */
    const metrics = (metricsImport as unknown) as {
        wind: { convertValue: (value: number) => string };
        waves: { convertValue: (value: number) => string };
        temp: { convertValue: (value: number) => string };
        pressure: { convertValue: (value: number) => string };
    };

    // Add explicit type assertion if needed
    const windyStore = store as any;

    // Use global Leaflet from Windy
    const L = (window as any).L;
    

    /**
     * Variables declarations
     */

    let route = 'https://localhost:5000'; // Replace with your NMEA server URL
    
     // Server configuration variables
    let serverHost = 'localhost'; // Default server host
    let serverPort = 5000; // Fixed port
    

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
    let magneticVariation: number = 0; // Magnetic variation
    let speedOverGround: number = 0; // In knots
    let mySpeedOverGround: number = 0; // In knots
    //let heurePrev: number | null = null; // for projection
    let followShip = false; // do not follow ship by default
    let vesselName = loadVesselName(); // Load from localStorage or default
    let CurrentOverlay = 'Windy'; // Default overlay, can be changed later
    let lastDataUpdateTime: number = 0;
    let socket: any = null;
    let markerLayer: any = null;
    let ownShipMarker: any = null;
    let aisShipsLayer: any = null; // Layer for AIS ships
    let boatPath: any = null;
    let projectionArrow: any = null;
    let headingArrow: any = null;
    let forecastIcon: any = null;
    let pathLatLngs: any[] = []; // Array to hold path latitude/longitude points
    let shortPathLatLngs: any[] = []; // Array to hold short path latitude/longitude points
    let openedPopup: any = null;
    // Store AIS ships data globally so all functions can access it
    let aisShips: { [mmsi: string]: any } = {};
    // Boat icon size control
    let boatIconSize: number = 1.0; // Default size multiplier (0.5 to 2.0)

    let myMMSI = loadVesselMMSI(); // Our own MMSI for comparison

    let unsubscribeTimeline: (() => void) | null = null; // Unsubscribe function for timeline updates
    let unsubscribeOverlay: (() => void) | null = null; // Unsubscribe function for overlay updates
    let projectionHours: number | null = null; // for projection
    let lastRouteProjection: {lat: number, lon: number, heading: number} | null = null;
    let lastFallbackProjection: {lat: number, lon: number, heading: number} | null = null;
    let isConnected: boolean = false; // WebSocket connection status
    let connectionLostTimer: any | null = null; // Timer for connection lost alert
    let lastError: string = ''; // Store the last error to persist until valid frame
    let errorList: string[] = []; // Store multiple errors
    let lastFrameReceived: number = Date.now(); // Timestamp of last received frame
    let noFrameTimer: any | null = null; // Timer for no frame detection

    // Test mode variables for when vessel is stopped
    let testModeEnabled: boolean = false; // Enable/disable test mode
    let testSOG: number = 6; // Test Speed Over Ground in knots
    let testCOG: number = 45; // Test Course Over Ground in degrees

    // Button text variables for reactive updates
    let buttonText: string = "🌬️ Show Windy prediction";

    // Variables pour la gestion des fragments AIS
    let aisFragments: { [key: string]: { 
        total: number, 
        received: number, 
        payloads: string[], 
        timestamp: number,
        mmsi?: string 
    } } = {};

    // Timer pour nettoyer les fragments expirés
    let fragmentCleanupTimer: any | null = null;

    // Add new variables for route timing
    let routeStartTime: Date | null = null; // Departure time from GPX
    let routeProjectionActive: boolean = false; // Flag to indicate route-based projection
    
    // GPX Route variables
    let gpxRoute: Array<{lat: number, lon: number, name?: string, time?: Date, type?: string}> = []; // Route waypoints
    let routeLayer: any = null; // Layer for displaying the route
    let atonLayer: any = null; // Layer for displaying AtoN markers
    let routeMarkers: any = null; // Layer for route waypoints
    let isRouteLoaded: boolean = false; // Flag to track if route is loaded
    let routeProgress: number = 0; // Current progress along route (0-1)
    let routeProjectionIcon: any = null; // Projected position along route
    let routeDistance: number = 0; // Total route distance in nautical miles
    let estimatedTimeToCompletion: number = 0; // ETC in hours
    let estimatedTimeOfArrival: Date | null = null; // ETA as a Date object
    let showRouteWaypoints: boolean = true; // Show/hide waypoint markers
    let nextWaypointIndex: number = 0; // Index of next waypoint to current position
    let nextWptETA: Date | null = null; // Estimated time of arrival at next waypoint
    let waypointETAs: Array<{ index: number, name: string, eta: Date, distance: number }> = []; // Array to hold ETAs for waypoints
    let closestWaypointIndex: number = 0; // Index of closest waypoint to current position
    let routeFileName: string = ''; // Name of loaded GPX file
    let lastRouteProgressUpdate = 0;

    // Z order of the overlay
    let zIndexOwnShip: number = 1000; // Own ship marker
    let zIndexWaypoint: number = 800; // Waypoint markers
    let zIndexRoute: number = 600; // Route markers
    let zIndexAisShips: number = 400; // AIS ships markers
    let zIndexTrack: number = 200; // Track markers
    let zIndexAtoN: number = 100; // AtoN markers

    let helpVisible = false;
    let lastWakeTime = Date.now();

    let userOS: string = 'Uknown';

    /**
     * Initialization when plugin opens
     * 
    */
    export const onopen = () => {
        console.log('Plugin opened');
    }

    /**
     * 
    */
    onMount(() => {
        console.log('Plugin start mounted');
        projectionHours = 0; // Reset projection hours
        userOS = detectOSAdvanced();
        console.log('User OS detected:', userOS);

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('focus', handleVisibilityChange);
        
        // Restore saved data
        // Load track history
        const savedTrack = loadTrackHistory();
        if (savedTrack.length > 0) {
            pathLatLngs = savedTrack;
            // Redraw the track on map
            if (pathLatLngs.length > 1) {
                boatPath = L.polyline(pathLatLngs, { color: 'blue', weight: 3 }).addTo(map);
            }
        }

        // Load GPX route
        if (loadGpxRoute()) {
            calculateRouteDistance();
            displayRoute();
            // Initialize route on component load
            updateRoute();
        }

        // Initialize layers with proper z-index ordering        
        aisShipsLayer = createLayerGroup(map, zIndexAisShips); // Bottom layer: Other AIS ships
        atonLayer = createLayerGroup(map, zIndexAtoN); // AtoN markers
        markerLayer = createLayerGroup(map, zIndexOwnShip); // Top layer: Your ship

        // Start cleanup timer for old AIS ships (every 5 minutes)
        setInterval(cleanupOldAISShips, 5 * 60 * 1000);
        
        // Start the no frame detection timer
        startNoFrameTimer();
        
        // Démarrer le nettoyage des fragments AIS
        startFragmentCleanup();

        // Create initial socket connection
        createSocketConnection();

        // Subscribe to Windy timeline changes
        const unsub = store.on('timestamp', (ts: number) => {
            // This code will be executed on every timeline change
            console.log('Windy timeline changed, new timestamp:', ts);
            // You can trigger an action here, update a variable, etc.
            windyStore.set('timestamp', getRoundedHourTimestamp(ts));
            updateProjectionForTimeline(ts);
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
        // Restore test SOG value
        const savedTestSOG = localStorage.getItem('testSOG');
            if (savedTestSOG !== null) {
                testSOG = parseFloat(savedTestSOG);
        }
        
        console.log('Plugin full mounted');
    });

    /**
     * 
     */
    function handleVisibilityChange() {
        if (!document.hidden) {
            // Tab is visible again (could be after sleep)
            if (Date.now() - lastWakeTime > 10000) { // 10s threshold for sleep
                console.log('Detected wake from sleep or long inactivity, reconnecting socket...');
                createSocketConnection();
            }
            lastWakeTime = Date.now();
        }
    }

    /**
     * Function to update the route when server host changes
     */
    function updateRoute() {
        route = `https://${serverHost}:${serverPort}`;
        
        // Reconnect to the new server if socket exists and is initialized
        if (socket !== null && socket !== undefined) {
            console.log('Server address changed, reconnecting to:', route);
            createSocketConnection();
        }
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
            rejectUnauthorized: false, // for self-signed certificates
            // timeout configurations:
            timeout: 120000,           // Connection timeout: 2 minutes
            pingTimeout: 120000,       // How long to wait for ping response: 2 minutes  
            pingInterval: 30000,       // How often to send pings: 30 seconds
            forceNew: false,           // Don't force new connection on reconnect
            reconnection: true,        // Enable automatic reconnection
            reconnectionDelay: 1000,   // Initial delay before reconnection
            reconnectionDelayMax: 5000, // Maximum delay between reconnections
            maxReconnectionAttempts: 5, // Maximum number of reconnection attempts
            upgrade: true              // Allow transport upgrades
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

        socket.on('nmea_data', (data: any) => {
            try {
                let nmeaString: string;
                
                // Gérer différents formats de données
                if (typeof data === 'string') {
                    nmeaString = data;
                } else if (typeof data === 'object' && data !== null) {
                    // Essayer différentes propriétés communes
                    if (data.data && typeof data.data === 'string') {
                        nmeaString = data.data;
                    } else if (data.message && typeof data.message === 'string') {
                        nmeaString = data.message;
                    } else if (data.nmea && typeof data.nmea === 'string') {
                        nmeaString = data.nmea;
                    } else {
                        // Si c'est un objet, essayer de le convertir en JSON puis en string
                        nmeaString = JSON.stringify(data);
                    }
                } else {
                    // Pour tous les autres types, convertir en string
                    nmeaString = String(data);
                }
                
                // Traiter la chaîne NMEA
                const frameType = processNMEA(nmeaString);
                if (frameType) {
                    removeErrorsByType(frameType);
                    isConnected = true;
                }
            } catch (error) {
                console.warn('Erreur lors du traitement des données NMEA:', error, 'Données reçues:', data);
                addError("[Err] Format de données NMEA invalide");
            }
            
            updateErrorDisplay();
        });
    }
    
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

    /**
     * Toggle help visibility
     */
    function toggleHelp() {
        helpVisible = !helpVisible;
    }

    /**
     * Load vessel name from localStorage
    */
    function loadVesselName(): string {
        try {
            const saved = localStorage.getItem('windy-nmea-vessel-name');
            return saved || 'YOUR BOAT';
        } catch (error) {
            console.warn('Failed to load vessel name from localStorage:', error);
            return 'YOUR BOAT';
        }
    }

    /**
     * Save vessel name to localStorage
    */
    function saveVesselName(name: string): void {
        try {
            localStorage.setItem('windy-nmea-vessel-name', name);
            console.log('Vessel name saved:', name);
        } catch (error) {
            console.warn('Failed to save vessel name to localStorage:', error);
        }
    }
    
    /**
     * Load vessel MMSI from localStorage
    */
    function loadVesselMMSI(): string {
        try {
            const saved = localStorage.getItem('windy-nmea-vessel-mmsi');
            return saved || 'YOUR MMSI';
        } catch (error) {
            console.warn('Failed to load vessel MMSI from localStorage:', error);
            return 'YOUR MMSI';
        }
    }

    /**
     * Save vessel MMSI to localStorage
    */
    function saveVesselMMSI(mmsi: string): void {
        try {
            localStorage.setItem('windy-nmea-vessel-mmsi', mmsi);
            console.log('Vessel MMSI saved:', mmsi);
        } catch (error) {
            console.warn('Failed to save vessel name to localStorage:', error);
        }
    }

    /**
     * Handle vessel name input changes
    */
    function handleVesselNameChange(event: Event): void {
        const target = event.target as HTMLInputElement;
        const name = target.value.trim();
        if (name) {
            vesselName = name;
            saveVesselName(name);
        }
    }

    /**
     * Maintain track history limits
    */
    function maintainTrackLimits(): void {
        const MAX_TRACK_POINTS = 100000; // Adjust as needed
        
        if (shortPathLatLngs.length > MAX_TRACK_POINTS) {
            // Remove oldest points, keep most recent
            shortPathLatLngs = pathLatLngs.slice(-MAX_TRACK_POINTS);
            
            // Update the polyline on the map
            if (boatPath) {
                boatPath.setLatLngs(pathLatLngs);
            }
            
            // console.log(`Track history trimmed to ${MAX_TRACK_POINTS} points`);
        }
    }

    /**
     * Save track history to localStorage
    */
    function saveTrackHistory(): void {
        try {
            if (shortPathLatLngs.length > 0) {
                // Convert LatLng objects to simple {lat, lng} objects for JSON storage
                const trackData = shortPathLatLngs.map(latLng => ({
                    lat: latLng.lat,
                    lng: latLng.lng
                }));
                localStorage.setItem('windy-nmea-track-history', JSON.stringify(trackData));
                
                //console.log(`Track history saved: ${trackData.length} points`);
            }
        } catch (error) {
            console.warn('Failed to save track history to localStorage:', error);
        }
    }

    /**
     * Load track history from localStorage
    */
    function loadTrackHistory(): any[] {
        try {
            const saved = localStorage.getItem('windy-nmea-track-history');
            if (saved) {
                const trackData = JSON.parse(saved);
                // Convert back to LatLng objects
                const restoredTrack = trackData.map((point: {lat: number, lng: number}) => 
                    L.latLng(point.lat, point.lng)
                );
                console.log(`Track history loaded: ${restoredTrack.length} points`);
                return restoredTrack;
            }
        } catch (error) {
            console.warn('Failed to load track history from localStorage:', error);
        }
        return [];
    }

    /**
     * Save GPX route to localStorage
    */
    function saveGpxRoute(): void {
        try {
            if (isRouteLoaded && gpxRoute.length > 0) {
                const routeData = {
                    waypoints: gpxRoute.map(wp => ({
                        lat: wp.lat,
                        lon: wp.lon,
                        name: wp.name,
                        time: wp.time ? wp.time.toISOString() : null,
                        type: wp.type
                    })),
                    fileName: routeFileName,
                    startTime: routeStartTime ? routeStartTime.toISOString() : null,
                    distance: routeDistance,
                    showWaypoints: showRouteWaypoints
                };
                localStorage.setItem('windy-nmea-gpx-route', JSON.stringify(routeData));
                console.log(`GPX route saved: ${routeFileName} with ${gpxRoute.length} waypoints`);
            }
        } catch (error) {
            console.warn('Failed to save GPX route to localStorage:', error);
        }
    }

    /**
     * Load GPX route from localStorage
    */
    function loadGpxRoute(): boolean {
        try {
            const saved = localStorage.getItem('windy-nmea-gpx-route');
            if (saved) {
                const routeData = JSON.parse(saved);
                
                // Restore waypoints with proper Date objects
                gpxRoute = routeData.waypoints.map((wp: any) => ({
                    lat: wp.lat,
                    lon: wp.lon,
                    name: wp.name,
                    time: wp.time ? new Date(wp.time) : undefined,
                    type: wp.type
                }));
                
                routeFileName = routeData.fileName || 'Restored Route';
                routeStartTime = routeData.startTime ? new Date(routeData.startTime) : null;
                routeDistance = routeData.distance || 0;
                showRouteWaypoints = routeData.showWaypoints !== undefined ? routeData.showWaypoints : true;
                
                // Set route as loaded and active
                isRouteLoaded = true;
                routeProjectionActive = true;
                
                // Reset waypoint indices only if no current position available
                if (!lastLatitude || !lastLongitude) {
                    closestWaypointIndex = 0;
                    nextWaypointIndex = 0;
                } else {
                    // Calculate proper waypoint indices based on current position
                    updateRouteProgress();
                }
                
                console.log(`GPX route loaded: ${routeFileName} with ${gpxRoute.length} waypoints`);
                return true;
            }
        } catch (error) {
            console.warn('Failed to load GPX route from localStorage:', error);
        }
        return false;
    }

    /**
     * Clear all stored data
    */
    function clearStoredData(): void {
        try {
            localStorage.removeItem('windy-nmea-track-history');
            localStorage.removeItem('windy-nmea-gpx-route');
            console.log('All stored navigation data cleared');
        } catch (error) {
            console.warn('Failed to clear stored data:', error);
        }
    }

    /**
     * Throttles the route progress updates to avoid excessive calls
    */
    function throttledUpdateRouteProgress() {
        if (Date.now() - lastRouteProgressUpdate > 5000) { // 5000 ms = 5 seconds
            updateRouteProgress();
            lastRouteProgressUpdate = Date.now();
        }
    }

    /**
     * Updates the button text based on current overlay and projection hours
    */
    function updateButtonText() {
        let myOverlay = CurrentOverlay;

        switch (myOverlay) {
            case 'Windy':
                myOverlay = 'wind';
                break;
            case 'gust':
                myOverlay = 'wind gusts';
                break;
            case 'temp':
                myOverlay = 'temperature';
                break;
            case 'sst':
                myOverlay = 'sea surface temperature';
                break;
            case 'swell1':
                myOverlay = 'primary swell';
                break;
            case 'swell2':
                myOverlay = 'secondary swell';
                break;
            case 'swell3':
                myOverlay = 'tertiary swell';
                break;
            case 'currentsTide':
                myOverlay = 'tide currents';
                break;
            case 'wwaves':
                myOverlay = 'wind waves';
                break;
            default:
                myOverlay = CurrentOverlay;
        }
        if (projectionHours !== null && projectionHours > 0) {
            if (!routeProjectionActive) {
                buttonText = `🌬️ Show ${myOverlay} prediction (in ${getRoundedHourTimestamp(projectionHours)}h)`;
            } else {
                const ts = getRoundedHourTimestamp(windyStore.get('timestamp'));
                let hours = '0';
                if (routeStartTime) {
                    if (routeStartTime.getMilliseconds() > Date.now()) {
                        hours = ((ts - routeStartTime.getTime()) / (3600 * 1000)).toFixed(1);
                        if (parseInt(hours) < 0) {
                            hours = (-parseInt(hours)).toFixed(1);
                            buttonText = `🌬️ Show ${myOverlay} prediction<br>(${hours}h before route start)`
                        } else {
                            buttonText = `🌬️ Show ${myOverlay} prediction<br>(${hours}h after route start)`;
                        }
                    } else {
                        hours = ((ts - Date.now()) / (3600 * 1000)).toFixed(1);
                        buttonText = `🌬️ Show ${myOverlay} prediction<br>(${hours}h after current time)`;
                    }
                }
            }
        } else {
            buttonText = `🌬️ Show ${myOverlay} prediction`;
        }
    }

    /**
     * Normalizes COG value to be between 0 and 359 degrees (cyclical)
     * @param value - The COG value to normalize
     * @returns The normalized COG value
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
     * @param event  - The input change event
    */
    function handleCOGInput(event: Event) {
        const target = event.target as HTMLInputElement;
        const rawValue = parseInt(target.value) || 0;
        testCOG = normalizeCOG(rawValue);
        // Update the input field to reflect the normalized value
        target.value = testCOG.toString();
    }
    
    /**
     * Handles SOG input changes
     * @param event - The input change event
    */
    function handleSOGInput(event: Event) {
        const target = event.target as HTMLInputElement;
        testSOG = parseFloat(target.value) || 0;
        // Update the projection for the current testSOG & timeline
        updateProjectionForTimeline(windyStore.get('timestamp'));
        localStorage.setItem('testSOG', target.value);
    }

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
     * Nettoie les fragments AIS expirés (plus de 60 secondes)
    */
    function cleanupExpiredAISFragments() {
        const maxAge = 60 * 1000; // 60 secondes
        
        Object.keys(aisFragments).forEach(fragKey => {
            if (Date.now() - aisFragments[fragKey].timestamp > maxAge) {
                console.warn(`AIS fragment expired: ${fragKey}`);
                delete aisFragments[fragKey];
            }
        });
    }

    /**
     * Démarre le timer de nettoyage des fragments
    */
    function startFragmentCleanup() {
        if (fragmentCleanupTimer) {
            clearInterval(fragmentCleanupTimer);
        }
        // Nettoie toutes les 10 minutes
        fragmentCleanupTimer = setInterval(cleanupExpiredAISFragments, 10 * 60 * 1000);
    }

    /**
     * Traite un fragment AIS et gère l'assemblage
    */
    function processAISFragment(
        total: number, 
        num: number, 
        seq: string, 
        channel: string, 
        aisPayload: string, 
        isOwnVessel: boolean = false
    ): boolean {
        // Créer une clé unique basée sur plusieurs critères
        const fragKey = `${seq || 'empty'}-${channel || 'A'}-${total}`;
        
        if (total > 1) {
            // Message fragmenté
            if (!aisFragments[fragKey]) {
                aisFragments[fragKey] = { 
                    total, 
                    received: 0, 
                    payloads: new Array(total), // Pré-allouer le tableau
                    timestamp: Date.now()
                };
            }
            
            // Vérifier la cohérence
            if (aisFragments[fragKey].total !== total) {
                console.warn(`AIS fragment total mismatch for ${fragKey}: expected ${aisFragments[fragKey].total}, got ${total}`);
                delete aisFragments[fragKey];
                return false;
            }
            
            // Ajouter le fragment (num est 1-indexé)
            if (num >= 1 && num <= total) {
                // Éviter les doublons
                if (!aisFragments[fragKey].payloads[num - 1]) {
                    aisFragments[fragKey].payloads[num - 1] = aisPayload;
                    aisFragments[fragKey].received++;
                    aisFragments[fragKey].timestamp = Date.now(); // Mettre à jour le timestamp
                }
                
                // Vérifier si tous les fragments sont reçus
                if (aisFragments[fragKey].received === total) {
                    // Vérifier qu'aucun fragment n'est manquant
                    const hasAllFragments = aisFragments[fragKey].payloads.every(payload => payload !== undefined);
                    
                    if (hasAllFragments) {
                        const fullPayload = aisFragments[fragKey].payloads.join('');
                        console.log(`AIS message assembled from ${total} fragments: ${fragKey}`);
                        delete aisFragments[fragKey];
                        decodeAISMessage(fullPayload, isOwnVessel);
                        return true;
                    } else {
                        console.warn(`AIS fragments incomplete for ${fragKey}, missing fragments detected`);
                        delete aisFragments[fragKey];
                        return false;
                    }
                }
            } else {
                console.warn(`Invalid AIS fragment number ${num} for total ${total}`);
                return false;
            }
        } else {
            // Message non fragmenté
            decodeAISMessage(aisPayload, isOwnVessel);
            return true;
        }
        
        return false; // Fragment en attente
    }
    
    /**
     * Validates NMEA sentence checksum
     * @param {string} nmeaSentence - Complete NMEA sentence including checksum
     * @returns {boolean} True if checksum is valid
    */
    function validateNMEAChecksum(nmeaSentence: string): boolean {
        // Remove any whitespace/newlines
        const sentence = nmeaSentence.trim();
        
        // Check if sentence has proper format (starts with $ or !, ends with *XX)
        const checksumMatch = sentence.match(/^[!$].+\*([0-9A-Fa-f]{2})$/);
        if (!checksumMatch) {
            // No checksum found - some NMEA sentences might not have one
            return true; // Accept sentences without checksum for now
        }
        
        const providedChecksum = checksumMatch[1].toUpperCase();
        const sentenceToCheck = sentence.substring(1, sentence.indexOf('*')); // Remove $ and *XX
        
        // Calculate XOR checksum
        let calculatedChecksum = 0;
        for (let i = 0; i < sentenceToCheck.length; i++) {
            calculatedChecksum ^= sentenceToCheck.charCodeAt(i);
        }
        
        const calculatedHex = calculatedChecksum.toString(16).toUpperCase().padStart(2, '0');
        
        return providedChecksum === calculatedHex;
    }

    /**
     * Validates if coordinates are within valid Earth bounds
     * @param {number} lat - Latitude in decimal degrees
     * @param {number} lon - Longitude in decimal degrees
     * @returns {boolean} True if coordinates are valid
    */
    function validateCoordinates(lat: number, lon: number): boolean {
        // First check if values are finite numbers (not NaN, Infinity, etc.)
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
            console.warn(`Invalid coordinate values: lat=${lat}, lon=${lon} (not finite numbers)`);
            return false;
        }
        
        // Check basic bounds
        if (lat < -90 || lat > 90) {
            console.warn(`Invalid latitude: ${lat}°`);
            return false;
        }
        if (lon < -180 || lon > 180) {
            console.warn(`Invalid longitude: ${lon}°`);
            return false;
        }
        
        // Check for obviously invalid coordinates (0,0 might be valid in Gulf of Guinea)
        if (lat === 0 && lon === 0) {
            console.warn('Suspicious coordinates: 0,0 - possibly invalid');
            return false;
        }
        
        return true; // All validations passed
    }

    /**
     * Validates position jump - rejects positions that jump more than reasonable distance
     * @param {number} newLat - New latitude in decimal degrees
     * @param {number} newLon - New longitude in decimal degrees
     * @param {number} sog - Speed over ground in knots (optional, for dynamic validation)
     * @returns {boolean} True if position change is acceptable
    */
    function validatePositionJump(newLat: number, newLon: number, sog?: number): boolean {
        // If no previous position, accept any position
        if (lastLatitude === null || lastLongitude === null) {
            return true;
        }
        
        // Calculate distance between old and new position using Haversine formula
        const distance = calculateDistance(lastLatitude, lastLongitude, newLat, newLon);
        
        // Dynamic validation based on speed and time
        let maxJump = 1; // Default: 1 nautical mile
        
        // If we have speed information, calculate reasonable distance
        if (sog && sog > 0) {
            // Calculate time since last position update (assuming max 60 seconds between updates)
            const maxTimeBetweenUpdates = 60; // seconds
            const maxDistanceAtSpeed = (sog * maxTimeBetweenUpdates) / 3600; // km
            
            // Allow up to 3x the expected distance to account for course changes
            maxJump = Math.max(maxDistanceAtSpeed * 3, 1); // At least 1 NM
            
            // But never allow more than 20 NM jump (37 km) - clearly erroneous
            maxJump = Math.min(maxJump, 20);
        } else {
            // Without speed info, use fixed limits based on distance
            if (distance > 20) { // > 20 NM is clearly wrong
                maxJump = 1; // Strict limit
            } else if (distance > 5) { // > 5 NM might be wrong
                maxJump = 3; // 3 NM limit
            }
        }
        
        if (distance > maxJump) {
            console.warn(`Position jump detected: ${distance.toFixed(3)}km > ${maxJump.toFixed(3)}km limit. SOG: ${sog || 'unknown'} knots. Rejecting position.`);
            return false;
        }
        
        return true;
    }

    /**
     * Calculate distance between two positions using Haversine formula
     * @param {number} lat1 - Latitude start in decimal degrees
     * @param {number} lon1 - Longitude start in decimal degrees  
     * @param {number} lat2 - Latitude end in decimal degrees
     * @param {number} lon2 - Longitude end in decimal degrees
     * @returns {number} Distance in Nautical Miles
    */
    function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const R = 3440.065; // Earth radius in nautical miles
        // Convert degrees to radians
        const toRad = (deg: number) => deg * Math.PI / 180;
        const φ1 = toRad(lat1);
        const φ2 = toRad(lat2);
        const Δφ = φ2 - φ1;
        const Δλ = toRad(lon2 - lon1);

        // Haversine formula (short distances)
        const a = Math.sin(Δφ / 2) ** 2 +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const haversineDist = R * c;

        // For long legs, use great circle (orthodromic) distance formula
        if (haversineDist > 300) {
            // Spherical law of cosines
            const gcDist = Math.acos(
                Math.sin(φ1) * Math.sin(φ2) +
                Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)
            ) * R;
            return gcDist;
        } else {
            return haversineDist;
        }
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
        
        // Validate NMEA checksum
        if (!validateNMEAChecksum(data)) {
            addError("[Err] NMEA checksum validation failed");
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
            const parsedLat = parseFloat(parts[1]);
            const parsedLon = parseFloat(parts[3]);
            if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLon)) {
                addError("[Err] Invalid GLL frame - invalid coordinates");
                return null;
            }
            latitudesal = parsedLat;
            latDirection = parts[2];
            longitudesal = parsedLon;
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
            const parsedLat = parseFloat(parts[2]);
            const parsedLon = parseFloat(parts[4]);
            if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLon)) {
                addError("[Err] Invalid GGA frame - invalid coordinates");
                return null;
            }
            latitudesal = parsedLat;
            latDirection = parts[3];
            longitudesal = parsedLon;
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
            const parsedLat = parseFloat(parts[3]);
            const parsedLon = parseFloat(parts[5]);
            if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLon)) {
                addError("[Err] Invalid RMC frame - invalid coordinates");
                return null;
            }
            latitudesal = parsedLat;
            latDirection = parts[4];
            longitudesal = parsedLon;
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
                // Convert m/s to knots
                speedOverGround = parseFloat(parts[5]) / 1852 * 3600;
            }
            frameType = 'VTG';
        } else if (data.includes('HDG')) {
            if (parts.length < 5) {
                addError("[Err] Invalid HDG frame - insufficient parts");
                return null;
            }
            courseOverGroundM = parseFloat(parts[1]);
            magneticVariation = parseFloat(parts[4]);
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
            latitude = (latitudesal !== null && latDirection !== null)
                ? convertLatitude(latitudesal, latDirection)
                : null;
            longitude = (longitudesal !== null && lonDirection !== null)
                ? convertLongitude(longitudesal, lonDirection)
                : null;
            
            // Validate position jump before accepting new coordinates
            if (latitude !== null && longitude !== null) {
                // First check if coordinates are valid
                if (!validateCoordinates(latitude, longitude)) {
                    addError("[Err] Invalid coordinates - frame rejected");
                    return frameType;
                }
                
                // Pass speed if available for better validation
                const currentSpeed = speedOverGround && !Number.isNaN(speedOverGround) ? speedOverGround : undefined;
                if (!validatePositionJump(latitude, longitude, currentSpeed)) {
                    addError("[Err] Position jump detected - frame rejected");
                    return frameType; // Return frameType to indicate frame was processed but position rejected
                }
            }
            
            // Only update if this is more recent data
            if (Date.now() > lastDataUpdateTime) {
                myLatitude = (latitudesal !== null && latDirection !== null)
                    ? displayLatitude(latitudesal, latDirection)
                    : null;
                myLongitude = (longitudesal !== null && lonDirection !== null)
                    ? displayLongitude(longitudesal, lonDirection)
                    : null;
                
                if (courseOverGroundT !== null && courseOverGroundT !== undefined && !Number.isNaN(courseOverGroundT)) {
                    myCourseOverGroundT = parseFloat(courseOverGroundT.toFixed(1));
                }
                if (speedOverGround !== null && speedOverGround !== undefined && !Number.isNaN(speedOverGround)) {
                    mySpeedOverGround = parseFloat(speedOverGround.toFixed(1));
                }
                
                lastDataUpdateTime = Date.now();
            }

            // Always update internal position for mapping (only if validation passed)
            const newLat = latitude;
            const newLon = longitude;
            
            if (newLat !== null && newLon !== null) {
                lastLatitude = newLat;
                lastLongitude = newLon;
                if (!Number.isNaN(newLat) && !Number.isNaN(newLon)) {
                    // Ensure COG is a valid number before passing to addBoatMarker
                    const validCOG = Number.isFinite(myCourseOverGroundT) ? myCourseOverGroundT : 0;
                    addBoatMarker(newLat, newLon, validCOG);
                }
            }
        }



        // AIVDO (VDO) decoding
        if (data.startsWith('!') && data.includes('VDO')) {
            const parts = data.split(',');
            if (parts.length < 6) {
                addError("[Err] Invalid AIS VDO frame - insufficient parts");
                return null;
            }
            
            const total = parseInt(parts[1]);
            const num = parseInt(parts[2]);
            const seq = parts[3];
            const channel = parts[4];
            const aisPayload = parts[5];
            
            processAISFragment(total, num, seq, channel, aisPayload, true);
            return 'AIS VDO';
        }

        // AIVDM (VDM) decoding - External AIS ships
        if (data.startsWith('!') && data.includes('AIVDM')) {
            const parts = data.split(',');
            if (parts.length < 6) {
                addError("[Err] Invalid AIS AIVDM frame - insufficient parts");
                return null;
            }
            
            const total = parseInt(parts[1]);
            const num = parseInt(parts[2]);
            const seq = parts[3];
            const channel = parts[4];
            const aisPayload = parts[5];
            
            processAISFragment(total, num, seq, channel, aisPayload, false);
            return 'AIS VDM';
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
    function removeErrorsByType(frameTypes: string | string[]) {
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
     * @param {string} error - The error message to add
    */
    function addError(error: string): void {
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
            createSocketConnection(); // Force reconnect
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
     * @param {number} heading - The heading of the ship
     * @param {number} shipType - The type of the ship
     * @returns {any} The created ship icon
    */
    function createAISShipIcon(heading: number, shipType: number = 0): any {
        let color = '#ff6600'; // Default orange
        let size = 16;
        
        // Color based on ship type (AIS ship and cargo type)
        if (shipType >= 30 && shipType <= 39) color = '#FF00ff'; // Fishing vessels - purple
        if (shipType >= 40 && shipType <= 49) color = '#ffff00'; // High speed craft - yellow
        if (shipType >= 50 && shipType <= 59) color = '#C0C0C0'; // Special Craft - Gray
        if (shipType >= 60 && shipType <= 69) color = '#0000ff'; // Passenger ships - blue
        if (shipType >= 70 && shipType <= 79) color = '#00ff00'; // Cargo ships - green
        if (shipType >= 80 && shipType <= 89) color = '#ff0000'; // Tanker ships - red
        
        // Ensure heading is valid (0-359 degrees)
        const validHeading = isNaN(heading) || heading === 511 ? 0 : ((heading % 360) + 360) % 360;
        
        const iconHtml = `
            <div class="ais-ship-icon" style="
                width: ${size}px; 
                height: ${size}px; 
                display: flex;
                justify-content: center;
                align-items: center;
            ">
                <svg width="${size}" height="${size}" viewBox="0 0 24 24" style="
                    transform: rotate(${validHeading}deg);
                    transform-origin: center center;
                ">
                    <path d="M12 2 L8 6 L6 12 L8 18 L16 18 L18 12 L16 6 Z" fill="${color}" stroke="#000" stroke-width="0.8"/>
                    <circle cx="12" cy="12" r="1" fill="#fff"/>
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
     * Get the tooltip content for an AIS ship
     * @param data
     * @param mmsi
     */
    function getAISTooltipContent(data: any, mmsi: string): string {
        return `
            <strong>MMSI: ${mmsi}</strong><br>
            Name: ${data.name || 'Unknown'}<br>
            Course: ${data.cog?.toFixed(1) || 'N/A'}°<br>
            Speed: ${data.sog?.toFixed(1) || 'N/A'} knots<br>
            Heading: ${data.heading !== undefined && data.heading !== 511 ? data.heading + '°' : 'N/A'}<br>
            Type: ${getShipTypeName(data.shipType || 0)}<br>
            Status: ${getAisStatusText(data.status)}<br>
            Destination: ${data.destination || 'Unknown'}<br>
            ETA: ${data.eta || 'Unknown'}
        `;
    }

    /**
     * Updates or adds an AIS ship on the map
     * @param {string} mmsi - The MMSI of the ship
     * @param {any} data - The AIS data for the ship
     * @returns {void}
    */
    function updateAISShip(mmsi: string, data: any): void {
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
        // Get ship type from existing data if available (for ships that already sent static data)
        const consolidatedShipType = data.shipType || aisShips[shipKey]?.shipType || 0;
        const icon = createAISShipIcon(displayHeading, consolidatedShipType);
        const marker = L.marker(position, { 
            icon: icon,
            zIndexOffset: zIndexAisShips   // Lower z-index for other ships
        }).addTo(aisShipsLayer);
        
        // console.log(`Adding/updating AIS ship: ${mmsi} at ${position.lat.toFixed(5)}, ${position.lng.toFixed(5)}`);
        
        // Create tooltip content
        const tooltipContent = getAISTooltipContent(data, mmsi);
        
        marker.bindTooltip(tooltipContent, { 
            permanent: false, 
            direction: 'top', 
            className: 'ais-ship-tooltip' 
        });
        
        // Store ship data with consolidated structure
        const existingData = aisShips[shipKey]?.data || {};
        const name = data.name || aisShips[shipKey]?.name || 'Unknown';
        const shipType = data.shipType || aisShips[shipKey]?.shipType || 0;
        
        aisShips[shipKey] = {
            ...aisShips[shipKey],
            marker: marker,
            data: { ...existingData, ...data },
            name: name,
            shipType: shipType,
            lastUpdate: Date.now()
        };
        
        // Update tooltip with latest name if it changed
        if (aisShips[shipKey].name !== 'Unknown') {
            const updatedTooltipContent = getAISTooltipContent(aisShips[shipKey].data, mmsi);
            marker.setTooltipContent(updatedTooltipContent);
        }
    }

    /**
     * Get ship type name from AIS ship type code
     * @param {number} shipType - The AIS ship type code
     * @returns {string} The name of the ship type
    */
    function getShipTypeName(shipType: number): string {
        if (shipType >= 20 && shipType <= 29) return 'Wing in Ground';
        if (shipType >= 30 && shipType <= 39) return 'Fishing';
        if (shipType === 31) return 'Towing';
        if (shipType === 32) return 'Towing > 200m';
        if (shipType === 33) return 'Dredging';
        if (shipType === 34) return 'Offshore Support';
        if (shipType === 35) return 'Military';
        if (shipType === 36) return 'Sailing';
        if (shipType === 37) return 'Pleasure Craft';
        if (shipType >= 40 && shipType <= 49) return 'High Speed';
        if (shipType >= 50 && shipType <= 59) return 'Special Craft';
        if (shipType >= 60 && shipType <= 69) return 'Passenger';
        if (shipType >= 70 && shipType <= 79) return 'Cargo';
        if (shipType >= 80 && shipType <= 89) return 'Tanker';
        if (shipType >= 90 && shipType <= 99) return 'Other';
        return 'Unknown';
    }

    /**
     * Get AIS status text from status code
     * @param status
     */
    function getAisStatusText(status: number): string {
        // See ITU-R M.1371 Table 44
        const statuses = [
            "Under way using engine",
            "At anchor",
            "Not under command",
            "Restricted manoeuverability",
            "Constrained by her draught",
            "Moored",
            "Aground",
            "Engaged in fishing",
            "Under way sailing",
            "Reserved for future amendment",
            "Reserved for future amendment",
            "Reserved for future amendment",
            "Reserved for future amendment",
            "Reserved for future amendment",
            "AIS-SART (active)",
            "Not defined"
        ];
        return statuses[status] || "Unknown";
    }

    /**
     * Get AtoN type text from AtoNType code
     * @param AtoNType
     */
    function getAtoNTypeText(AtoNType: number): string {
        const types = [
            "Default, Type of AtoN not specified",
            "Reference point",
            "RACON",
            "Fixed structures off-shore, such as oil platforms, wind farms.",
            "Emergency Wreck Marking Buoy",
            "Fix. Light, without sectors",
            "Fix. Light, with sectors",
            "Fix. Leading Light Front",
            "Fix. Leading Light Rear",
            "Fix. Beacon, Cardinal N",
            "Fix. Beacon, Cardinal E",
            "Fix. Beacon, Cardinal S",
            "Fix. Beacon, Cardinal W",
            "Fix. Beacon, Port hand",
            "Fix. Beacon, Starboard hand",
            "Fix. Beacon, Preferred Channel port hand",
            "Fix. Beacon, Preferred Channel starboard hand",
            "Fix. Beacon, Isolated danger",
            "Fix. Beacon, Safe water",
            "Fix. Beacon, Special mark",
            "Float. Cardinal Mark N",
            "Float. Cardinal Mark E",
            "Float. Cardinal Mark S",
            "Float. Cardinal Mark W",
            "Float. Port hand Mark",
            "Float. Starboard hand Mark",
            "Float. Preferred Channel Port hand",
            "Float. Preferred Channel Starboard hand",
            "Float. Isolated danger",
            "Float. Safe Water",
            "Float. Special Mark",
            "Float. Light Vessel/LANBY/Rigs"

        ];
        return types[AtoNType] || "Unknown";
    }

    /**
     * Clean up old AIS ships (older than 10 minutes)
    */
    function cleanupOldAISShips() {
        const positionMaxAge = 5 * 60 * 1000; // 5 minutes for position data
        const staticMaxAge = 10 * 60 * 1000; // 10 minutes for ships with static data (names)
        
        Object.keys(aisShips).forEach(mmsi => {
            const ship = aisShips[mmsi];
            const age = Date.now() - ship.lastUpdate;
            
            // Use longer timeout for ships with names (static data)
            const maxAge = ship.name && ship.name !== 'Unknown' ? staticMaxAge : positionMaxAge;
            
            if (age > maxAge) {
                if (ship.marker) {
                    aisShipsLayer.removeLayer(ship.marker);
                }
                delete aisShips[mmsi];
            }
        });
    }

    /**
     * Decodes AIS message payload and updates vessel data
     * @param aisPayload - The AIS payload string
     * @param isOwnVesselData - Flag indicating if this is our own vessel data
     * @returns {void}
    */
    function decodeAISMessage(aisPayload: string, isOwnVesselData: boolean = false): void {
        if (!aisPayload) return;
        const bitstring = ais6bitDecode(aisPayload);
        const msgType = parseInt(bitstring.slice(0, 6), 2);
        const mmsi = parseInt(bitstring.slice(8, 38), 2).toString();
        
        // Check if this is our own vessel - prioritize MMSI match over VDO flag
        let isOwnVessel = false;
        
        // If we have a known MMSI, use it for comparison
        if (myMMSI && isValidMMSI(myMMSI)) {
            isOwnVessel = (mmsi === myMMSI);
        } else if (isOwnVesselData) {
            // Only trust VDO flag if we don't have a confirmed MMSI yet
            isOwnVessel = true;
        }
        /*
            *
        */
        if (msgType === 1 || msgType === 2 || msgType === 3) {
            // Position Report (Class A) - CORRECTION of coordinate decoding
            // In AIS: longitude comes first (bits 61-88), then latitude (bits 89-115)
            const lonRaw = parseInt(bitstring.slice(61, 89), 2);  // 28 bits for longitude
            const latRaw = parseInt(bitstring.slice(89, 116), 2); // 27 bits for latitude
            
            // Two's complement correction for 28 bits (longitude)
            let lon = (lonRaw & 0x8000000) ? (lonRaw - 0x10000000) : lonRaw;
            // Two's complement correction for 27 bits (latitude)  
            let lat = (latRaw & 0x4000000) ? (latRaw - 0x8000000) : latRaw;

            // decimal degrees conversion
            lat = lat / 600000.0;
            lon = lon / 600000.0;
            
            const cog = parseInt(bitstring.slice(116, 128), 2) / 10.0;
            const sog = parseInt(bitstring.slice(50, 60), 2) / 10.0;
            const heading = parseInt(bitstring.slice(128, 137), 2);
            const navStatus = parseInt(bitstring.slice(38, 42), 2);

            
            if (!aisShips[mmsi]) {
                // position message (type 1/2/3) is received before a static message (type 5) for a new ship.
                // Let's create a new ship
                aisShips[mmsi] = {
                    marker: null,
                    data: {},
                    name: 'Unknown',
                    shipType: 0,
                    lastUpdate: Date.now()
                };
            }
            aisShips[mmsi].data.status = navStatus;
            if (lat !== 91 && lon !== 181) { // Valid coordinates
                // Validate position jump for own vessel before accepting new AIS coordinates
                if (isOwnVessel) {
                    // Log for debugging if needed
                    if (mmsi !== myMMSI) {
                        console.log(`Warning: VDO message with different MMSI ${mmsi} vs known ${myMMSI}`);
                    }
                    
                    // First check if coordinates are valid
                    if (!validateCoordinates(lat, lon)) {
                        console.warn(`AIS invalid coordinates for own vessel MMSI ${mmsi} - position rejected`);
                        return; // Reject this AIS position update
                    }
                    
                    // Then check position jump with speed
                    if (!validatePositionJump(lat, lon, sog)) {
                        console.warn(`AIS position jump detected for own vessel MMSI ${mmsi} - position rejected`);
                        return; // Reject this AIS position update
                    }
                    
                    // Store our own MMSI if not set
                    if (!myMMSI || !isValidMMSI(myMMSI)) {
                        myMMSI = mmsi;
                        saveVesselMMSI(mmsi);
                    }
                    
                    data = `AIS MMSI: ${mmsi} (Own vessel)\nLat: ${lat.toFixed(5)}\nLon: ${lon.toFixed(5)}\nCOG: ${cog.toFixed(1)}°\nSOG: ${sog.toFixed(1)} nds`;
                    
                    // Only update display if this is more recent data
                    if (Date.now() > lastDataUpdateTime) {
                        myLatitude = displayLatitude(lat);
                        myLongitude = displayLongitude(lon);
                        myCourseOverGroundT = parseFloat(cog.toFixed(1));
                        mySpeedOverGround = parseFloat(sog.toFixed(1));
                        
                        lastDataUpdateTime = Date.now();
                    }
                    
                    // Always update internal position for mapping
                    lastLatitude = lat;
                    lastLongitude = lon;
                    trueHeading = heading !== 511 ? heading : cog;
                    
                    // Add boat marker with validated COG
                    const validCOG = Number.isFinite(cog) ? cog : 0;
                    addBoatMarker(lat, lon, validCOG);
                } else {
                    // External vessel - use corrected heading
                    const displayHeading = heading !== 511 ? heading : cog;
                    updateAISShip(mmsi, { lat, lon, cog, sog, heading: displayHeading });
                }
            }
        } 

        /* AIS Class A Ship Static and Voyage Related Data
            * https://www.navcen.uscg.gov/ais-class-a-static-voyage-message-5
        */
        if (msgType === 5) {
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
            // ETA (bits 274-294, 20 bits)
            // Correct bit ranges for AIS ETA (type 5)
            let etaMonthBits = bitstring.slice(274, 278); // 4 bits: 274-277
            let etaDayBits   = bitstring.slice(278, 283); // 5 bits: 278-282
            let etaHourBits  = bitstring.slice(283, 288); // 5 bits: 283-287
            let etaMinBits   = bitstring.slice(288, 294); // 6 bits: 288-293

            let etaMonth = parseInt(etaMonthBits, 2);
            let etaDay   = parseInt(etaDayBits, 2);
            let etaHour  = parseInt(etaHourBits, 2);
            let etaMin   = parseInt(etaMinBits, 2);

            // Format with leading zeros and handle "not available" (0 or 31/63)
            let etaStr = `${etaDay > 0 && etaDay <= 31 ? String(etaDay).padStart(2, '0') : '--'}/` +
                        `${etaMonth > 0 && etaMonth <= 12 ? String(etaMonth).padStart(2, '0') : '--'}@` +
                        `${etaHour < 24 ? String(etaHour).padStart(2, '0') : '--'}:` +
                        `${etaMin < 60 ? String(etaMin).padStart(2, '0') : '--'}`;

            console.log(`ETA: ${etaStr}`);

            // Destination (bits 302-421, 20x6 bits)
            let destBits = bitstring.slice(302, 422);
            let destination = '';
            for (let i = 0; i < destBits.length; i += 6) {
                const charCode = parseInt(destBits.slice(i, i + 6), 2);
                if (charCode === 0) break;
                destination += aisAscii(charCode);
            }
            destination = destination.replace(/@+$/, '').trim();

            if (isOwnVessel) {
                if (name && name !== '') {
                    vesselName = name;
                    saveVesselName(name); // Save AIS-received name too
                }
            } else {
                // External vessel - update or create ship data
                if (!aisShips[mmsi]) {
                    aisShips[mmsi] = { 
                        marker: null, 
                        data: {},
                        name: 'Unknown',
                        shipType: 0,
                        lastUpdate: Date.now() 
                    };
                }
                
                // Update name and ship type
                if (name && name !== '') {
                    aisShips[mmsi].name = name;
                    aisShips[mmsi].data.name = name;
                }
                aisShips[mmsi].shipType = shipType;
                aisShips[mmsi].data.shipType = shipType;
                aisShips[mmsi].data.destination = destination;
                aisShips[mmsi].data.eta = etaStr;
                aisShips[mmsi].lastUpdate = Date.now();
                
                // Update existing marker tooltip if ship is already displayed
                if (aisShips[mmsi].marker && aisShips[mmsi].data.lat) {
                    const data = aisShips[mmsi].data;
                    const updatedTooltipContent = getAISTooltipContent(data, mmsi);
                    aisShips[mmsi].marker.setTooltipContent(updatedTooltipContent);
                }
            }
        }

        if (msgType === 21) {
            // Extract AtoN position and info
            const lonRaw = parseInt(bitstring.slice(164, 192), 2);
            const latRaw = parseInt(bitstring.slice(193, 219), 2);
            let lon = (lonRaw & 0x8000000) ? (lonRaw - 0x10000000) : lonRaw;
            let lat = (latRaw & 0x4000000) ? (latRaw - 0x8000000) : latRaw;
            lat = lat / 600000.0;
            lon = lon / 600000.0;

            // Name (20x6 bits)
            //let nameBits = bitstring.slice(112, 232);
            let nameBits = bitstring.slice(43, 163);
            let name = '';
            for (let i = 0; i < nameBits.length; i += 6) {
                const charCode = parseInt(nameBits.slice(i, i + 6), 2);
                if (charCode === 0) break;
                name += aisAscii(charCode);
            }
            name = name.replace(/@+$/, '').trim();

            console.log(`Virtual AtoN detected: ${name} in position (${lat.toFixed(5)}, ${lon.toFixed(5)})`);

            // AtoN type (bits 38-42)
            const atonType = parseInt(bitstring.slice(38, 43), 2);
            const atonTypeName = getAtoNTypeText(atonType);

            // Add marker to atonLayer
            if (atonLayer) {
                const atonIcon = L.divIcon({
                    html: '⛯',
                    className: 'aton-marker',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                });
                const marker = L.marker([lat, lon], { icon: atonIcon, zIndexOffset: zIndexWaypoint }).addTo(atonLayer);
                marker.bindTooltip(
                    `<strong>AtoN</strong><br>
                    Name: ${name}<br>
                    Type: ${atonTypeName}<br>
                    Lat: ${lat.toFixed(5)}<br>
                    Lon: ${lon.toFixed(5)}`,
                    { permanent: false, direction: 'top' }
                );
            }
        }
    }
    
    /**
     * Décode le payload 6 bits AIS en binaire
     * @param {string} payload - Le payload AIS 6 bits
     * @returns {string} Le bitstring décodé
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
     * @param {number} val - Le code AIS 6 bits
     * @returns {string} Le caractère ASCII correspondant
    */
    function aisAscii(val: number): string {
        // Official ITU-R M.1371-5 table
        const table = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^- !\"#$%&'()*+,-./0123456789:;<=>?";
        return table[val] || ' ';
    }

    /**
     * Convert NMEA latitude/longitude to decimal
     * @param {number} value - The NMEA value (degrees and minutes)
     * @param {string} dir - The direction ('N', 'S', 'E', 'W')
     * @returns {number} The decimal representation of the latitude/longitude
    */
    function convertLatitude(value: number, dir: string): number {
        // Validate input to prevent NaN
        if (!Number.isFinite(value) || !dir) {
            console.warn(`Invalid latitude data: value=${value}, dir=${dir}`);
            return 0; // Return a safe default
        }
        
        const degrees = Math.floor(value / 100);
        const minutes = value - (degrees * 100);
        let lat = degrees + (minutes / 60);
        return dir === 'S' ? -lat : lat;
    }
    
    /*
     * Convert NMEA longitude/latitude to decimal
     * @param {number} value - The NMEA value (degrees and minutes)
     * @param {string} dir - The direction ('N', 'S', 'E', 'W')
     * @returns {number} The decimal representation of the latitude/longitude
    */
    function convertLongitude(value: number, dir: string): number {
        // Validate input to prevent NaN
        if (!Number.isFinite(value) || !dir) {
            console.warn(`Invalid longitude data: value=${value}, dir=${dir}`);
            return 0; // Return a safe default
        }
        
        const degrees = Math.floor(value / 100);
        const minutes = value - (degrees * 100);
        let lon = degrees + (minutes / 60);
        return dir === 'W' ? -lon : lon;
    }

    /**
     * Formatted display of latitude/longitude
     * @param {number} val - The latitude/longitude value
     * @param {string} dir - The direction ('N', 'S', 'E', 'W')
     * @returns {string} The formatted display string
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

    /**
     * Formatted display of longitude
     * @param {number} val - The longitude value
     * @param {string} dir - The direction ('N', 'S', 'E', 'W')
     * @returns {string} The formatted display string
    */
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
     * Handles GPX file upload and parsing
     * @param {Event} event - The file input change event
     * @returns {void}
    */
    function handleGpxFileUpload(event: Event): void {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];
        
        if (!file || !file.name.toLowerCase().endsWith('.gpx')) {
            addError("[Err] Please select a valid GPX file");
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const gpxContent = e.target?.result as string;
                parseGpxContent(gpxContent, file.name);
            } catch (error) {
                console.error('Error reading GPX file:', error);
                addError("[Err] Failed to read GPX file");
            }
        };
        reader.readAsText(file);
    }

    /**
     * Parses GPX XML content and extracts waypoints with departure time extraction
     * @param {string} gpxXml - The GPX XML content
     * @param {string} fileName - The name of the GPX file
     * @returns {void}
    */
    function parseGpxContent(gpxXml: string, fileName: string): void {
        try {
            // Remove BOM if present and trim whitespace
            if (gpxXml.charCodeAt(0) === 0xFEFF) {
                gpxXml = gpxXml.slice(1);
            }
            gpxXml = gpxXml.trim();

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(gpxXml, 'text/xml');

            // Check for parsing errors (cross-browser)
            let parserError = xmlDoc.querySelector('parsererror');
            if (!parserError) {
                // Fallback for some browsers
                const errors = xmlDoc.getElementsByTagName('parsererror');
                if (errors.length > 0) parserError = errors[0];
            }
            if (parserError) {
                console.error('GPX parsererror:', parserError.textContent || parserError.innerHTML || parserError);
                throw new Error('Invalid GPX XML format');
            }

            // Helper to get first child element by tag name (namespace-agnostic)
            function getFirstChildByTagName(parent: Element, tag: string): Element | null {
                const children = parent.getElementsByTagName(tag);
                for (let i = 0; i < children.length; i++) {
                    if (children[i].parentNode === parent) return children[i];
                }
                return null;
            }

            // Always use a new waypoints array for reactivity
            let waypoints: Array<{lat: number, lon: number, name?: string, time?: Date, type?: string}> = [];

            // PRIORITY 1: Extract route points (rtept) from route blocks
            const routePoints = xmlDoc.getElementsByTagName('rtept');
            for (let i = 0; i < routePoints.length; i++) {
                const rtept = routePoints[i];
                const lat = parseFloat(rtept.getAttribute('lat') || '0');
                const lon = parseFloat(rtept.getAttribute('lon') || '0');
                if (validateCoordinates(lat, lon)) {
                    const nameElement = getFirstChildByTagName(rtept, 'name');
                    const timeElement = getFirstChildByTagName(rtept, 'time');
                    const legType = getFirstChildByTagName(rtept, 'type');
                    waypoints.push({
                        lat,
                        lon,
                        name: nameElement?.textContent || `Route Point ${i + 1}`,
                        time: timeElement?.textContent ? new Date(timeElement.textContent) : undefined,
                        type: legType?.textContent || undefined
                    });
                }
            }

            // PRIORITY 2: If no route points, try track points (trkpt)
            if (waypoints.length === 0) {
                const trackPoints = xmlDoc.getElementsByTagName('trkpt');
                for (let i = 0; i < trackPoints.length; i++) {
                    const trkpt = trackPoints[i];
                    const lat = parseFloat(trkpt.getAttribute('lat') || '0');
                    const lon = parseFloat(trkpt.getAttribute('lon') || '0');
                    if (validateCoordinates(lat, lon)) {
                        const nameElement = getFirstChildByTagName(trkpt, 'name');
                        const timeElement = getFirstChildByTagName(trkpt, 'time');
                        const legType = getFirstChildByTagName(trkpt, 'type');
                        waypoints.push({
                            lat,
                            lon,
                            name: nameElement?.textContent || `Track Point ${i + 1}`,
                            time: timeElement?.textContent ? new Date(timeElement.textContent) : undefined,
                            type: legType?.textContent || undefined
                        });
                    }
                }
            }

            // PRIORITY 3: If still no points, try regular waypoints (wpt)
            if (waypoints.length === 0) {
                const wptPoints = xmlDoc.getElementsByTagName('wpt');
                for (let i = 0; i < wptPoints.length; i++) {
                    const wpt = wptPoints[i];
                    const lat = parseFloat(wpt.getAttribute('lat') || '0');
                    const lon = parseFloat(wpt.getAttribute('lon') || '0');
                    if (validateCoordinates(lat, lon)) {
                        const nameElement = getFirstChildByTagName(wpt, 'name');
                        const timeElement = getFirstChildByTagName(wpt, 'time');
                        const legType = getFirstChildByTagName(wpt, 'type');
                        waypoints.push({
                            lat,
                            lon,
                            name: nameElement?.textContent || `Waypoint ${i + 1}`,
                            time: timeElement?.textContent ? new Date(timeElement.textContent) : undefined,
                            type: legType?.textContent || undefined
                        });
                    }
                }
            }
            
            if (waypoints.length < 2) {
                addError("[Err] GPX file must contain at least 2 waypoints");
                return;
            }
            
            // Extract departure time from first waypoint
            routeStartTime = waypoints[0].time || null;
            
            // Success - load the route
            gpxRoute = [...waypoints]; // Ensure Svelte reactivity
            routeFileName = fileName;
            isRouteLoaded = true;
            routeProjectionActive = true; // Enable route-based projection

            // Reset waypoint indices only if no current position available
            if (!lastLatitude || !lastLongitude) {
                closestWaypointIndex = 0;
                nextWaypointIndex = 0;
            }

            calculateRouteDistance();
            /*// Always clear old route/waypoints before drawing new
            if (map) {
                clearRouteDisplay();
                routeLayer = createLayerGroup(map, zIndexRoute);
                routeMarkers = createLayerGroup(map, zIndexWaypoint);
            }*/
            displayRoute();
            displayRouteWaypoints();

            // If we have current position, calculate proper waypoint indices
            if (lastLatitude && lastLongitude) {
                throttledUpdateRouteProgress();
            }

            // Save route to localStorage
            saveGpxRoute();
            
            console.log(`GPX route loaded: ${waypoints.length} waypoints from ${fileName}`);
            if (routeStartTime) {
                console.log(`Departure time: ${routeStartTime.toISOString()}`);
            }
            
            // Clear any existing errors
            removeErrorsByType(['GPX', 'route']);
            
        } catch (error) {
            console.error('Error parsing GPX:', error);
            addError("[Err] Invalid GPX file format");
        }
    }

    /**
     * Calculates total route distance in nautical miles and updates route metrics
    */
    function calculateRouteDistance(): void {
        if (gpxRoute.length < 2) return;
        
        let totalDistanceNM = 0;
        
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const dist = calculateDistance(
                gpxRoute[i].lat, gpxRoute[i].lon,
                gpxRoute[i + 1].lat, gpxRoute[i + 1].lon
            );
            totalDistanceNM += dist;
        }
        
        routeDistance = totalDistanceNM; 
    }

    /**
     * Creates a Leaflet layer group with a specific z-index offset.
     * @param map
     * @param zIndexOffset
     */
    function createLayerGroup(map: any, zIndexOffset: number) {
        const layer = L.layerGroup().addTo(map);
        layer.options.zIndexOffset = zIndexOffset;
        return layer;
    }

    /**
     *  
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @param fraction
     */
    function interpolateGreatCirclePoint(lat1: number, lon1: number, lat2: number, lon2: number, fraction: number) {
        // All in degrees, fraction in [0,1]
        lat1 = toRadians(lat1); lon1 = toRadians(lon1);
        lat2 = toRadians(lat2); lon2 = toRadians(lon2);

        const d = 2 * Math.asin(Math.sqrt(
            Math.sin((lat2 - lat1) / 2) ** 2 +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
        ));
        if (d === 0) return { lat: toDegrees(lat1), lon: toDegrees(lon1) };
        const A = Math.sin((1 - fraction) * d) / Math.sin(d);
        const B = Math.sin(fraction * d) / Math.sin(d);
        const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
        const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
        const z = A * Math.sin(lat1) + B * Math.sin(lat2);
        const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
        const lon = Math.atan2(y, x);
        return { lat: toDegrees(lat), lon: toDegrees(lon) };
    }

    /**
     * 
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @param numPoints
     * @returns 
     */
    function interpolateGreatCircle(lat1: number, lon1: number, lat2: number, lon2: number, numPoints = 100) {
        // Returns an array of LatLngs along the great circle
        lat1 = toRadians(lat1); lon1 = toRadians(lon1);
        lat2 = toRadians(lat2); lon2 = toRadians(lon2);
        
        const d = 2 * Math.asin(Math.sqrt(
            Math.sin((lat2 - lat1) / 2) ** 2 +
            Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
        ));
        const points = [];
        for (let i = 0; i <= numPoints; i++) {
            const f = i / numPoints;
            const A = Math.sin((1 - f) * d) / Math.sin(d);
            const B = Math.sin(f * d) / Math.sin(d);
            const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
            const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
            const z = A * Math.sin(lat1) + B * Math.sin(lat2);
            const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
            const lon = Math.atan2(y, x);
            points.push([toDegrees(lat), toDegrees(lon)]);
        }
        return points;
    }

    /**
     * Displays the route on the map
    */
    function displayRoute(): void {
        if (!map || !isRouteLoaded || gpxRoute.length < 2) return;
        
        // Clear existing route display
        clearRouteDisplay();

        // Always re-create route and marker layers after clearing
        routeLayer = createLayerGroup(map, zIndexRoute); // Route lines in middle layer
        routeMarkers = createLayerGroup(map, zIndexWaypoint); // Waypoint markers
        
        // Create route line
        let routeLatLngs: any[] = [];
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const wp1 = gpxRoute[i];
            const wp2 = gpxRoute[i + 1];
            if (wp1.type === 'GC') {
                // Interpolate great circle points
                const dist = calculateDistance(wp1.lat, wp1.lon, wp2.lat, wp2.lon);
                const gcPoints = interpolateGreatCircle(wp1.lat, wp1.lon, wp2.lat, wp2.lon, dist / 10);
                routeLatLngs = routeLatLngs.concat(gcPoints);
            } else {
                // RL or undefined: just draw a straight line
                routeLatLngs.push([wp1.lat, wp1.lon]);
            }
        }
        // Always add the last waypoint
        routeLatLngs.push([gpxRoute[gpxRoute.length - 1].lat, gpxRoute[gpxRoute.length - 1].lon]);

        L.polyline(routeLatLngs, {
            color: '#ff6600',
            weight: 3,
            opacity: 0.7,
            dashArray: '8, 8'
        }).addTo(routeLayer);
        
        // Add waypoint markers if enabled
        if (showRouteWaypoints) {
            displayRouteWaypoints();
        }
        
        // Fit map to route bounds
        const group = new L.featureGroup(routeLatLngs.map(ll => L.marker(ll)));
        map.fitBounds(group.getBounds().pad(0.1));
    }

    /**
     * Displays waypoint markers on the route
    */
    function displayRouteWaypoints(): void {
        if (!routeMarkers || !isRouteLoaded) return;
        
        routeMarkers.clearLayers();
        
        gpxRoute.forEach((waypoint, index) => {
            const isStart = index === 0;
            const isEnd = index === gpxRoute.length - 1;
            
            const isNext = index === nextWaypointIndex; // Next waypoint to reach (navigation target)
            const isPassed = index < nextWaypointIndex; // Waypoints we've already passed

            let color = '#ff6600'; // Default orange
            let waypointIcon = '📍';

            if (isStart && !isPassed) {
                color = '#00ff00';
                waypointIcon = '🟢'; // Green start
            } else if (isStart && isPassed) {
                color = '#90EE90';
                waypointIcon = '✅'; // Light green - passed start
            } else if (isEnd && isNext) {
                color = '#ffff00';
                waypointIcon = '🏁'; // Yellow finish line when it's the target
            } else if (isEnd) {
                color = '#ff0000'; 
                waypointIcon = '🏁'; // Red finish line
            } else if (isNext) {
                color = '#ffff00';
                waypointIcon = '🎯'; // Yellow target - next waypoint to reach
            } else if (isPassed) {
                color = '#90EE90';
                waypointIcon = '✅'; // Light green - passed waypoint
            } else {
                color = '#ff6600';
                waypointIcon = '📍'; // Orange - future waypoint
            }
            
            const marker = L.marker([waypoint.lat, waypoint.lon], { 
                icon: L.divIcon({
                    html: waypointIcon,
                    className: 'waypoint-marker',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                }),
                zIndexOffset: zIndexWaypoint
            }).addTo(routeMarkers);

            const myIndex = index - nextWaypointIndex; // My index in the ETA array
            marker.bindTooltip(
                `Waypoint ${index + 1} : ${waypoint.name}}<br>
                ${displayLatitude(waypoint.lat)}<br>
                ${displayLongitude(waypoint.lon)}<br>
                ${waypointETAs.length > 0 && waypointETAs[myIndex] ? `ETA: ${waypointETAs[myIndex].eta.toISOString().split('.')[0] + 'Z'}` : ''}`,
                { permanent: false, direction: 'top' }
            );
        });
    }

    /**
     * Toggles waypoint markers visibility
    */
    function toggleRouteWaypoints(): void {
        if (!routeMarkers) return;
        
        if (showRouteWaypoints) {
            displayRouteWaypoints();
        } else {
            routeMarkers.clearLayers();
        }
    }

    /**
     * Clears the loaded route and removes it from the map
     * Enhanced route clearing with projection reset
    */
    function clearRoute(): void {
        gpxRoute = [];
        isRouteLoaded = false;
        routeFileName = '';
        routeProgress = 0;
        closestWaypointIndex = 0;
        nextWaypointIndex = 0;
        routeDistance = 0;
        estimatedTimeToCompletion = 0;
        estimatedTimeOfArrival = null;
        routeStartTime = null;
        routeProjectionActive = false; // Disable route-based projection
        
        clearRouteDisplay();
        
        // Reset file input
        const fileInput = document.getElementById('gpxFileInput') as HTMLInputElement;
        if (fileInput) {
            fileInput.value = '';
        }
        
        console.log('GPX route cleared');
        
        // Redraw markers to restore traditional projection arrows
        if (lastLatitude !== null && lastLongitude !== null) {
            const validCOG = Number.isFinite(myCourseOverGroundT) ? myCourseOverGroundT : 0;
            addBoatMarker(lastLatitude, lastLongitude, validCOG);
        }
    }

    /**
     * Clears route display elements from the map
    */
    function clearRouteDisplay(): void {
        if (routeLayer) {
            routeLayer.clearLayers();
            map.removeLayer(routeLayer);
            routeLayer = null;
        }
        if (routeMarkers) {
            routeMarkers.clearLayers(); 
            map.removeLayer(routeMarkers);
            routeMarkers = null;
        }
        if (routeProjectionIcon) {
            routeProjectionIcon.remove();
            routeProjectionIcon = null;
        }
    }

    /**
     * Finds the closest point on a line segment to a given point
     * @param pointLat
     * @param pointLon
     * @param segmentStartLat
     * @param segmentStartLon
     * @param segmentEndLat
     * @param segmentEndLon
    */
    function findClosestPointOnSegment(
        pointLat: number, pointLon: number,
        segmentStartLat: number, segmentStartLon: number,
        segmentEndLat: number, segmentEndLon: number
        ) {
        // Convert to Cartesian (x, y) for small distances
        const px = pointLon;
        const py = pointLat;
        const ax = segmentStartLon;
        const ay = segmentStartLat;
        const bx = segmentEndLon;
        const by = segmentEndLat;

        // Vector AB
        const abx = bx - ax;
        const aby = by - ay;
        // Vector AP
        const apx = px - ax;
        const apy = py - ay;

        // Project AP onto AB, get t (progress along segment)
        const ab2 = abx * abx + aby * aby;
        let t = ab2 === 0 ? 0 : (apx * abx + apy * aby) / ab2;

        // Clamp t to [0, 1] for closest point on segment
        const tClamped = Math.max(0, Math.min(1, t));
        const closestX = ax + tClamped * abx;
        const closestY = ay + tClamped * aby;

        // Distance from P to closest point
        const distance = calculateDistance(py, px, closestY, closestX);

        return {
            distance: distance,
            progress: t // Note: return unclamped t for navigation logic!
        };
    }

    /**
     * Calculates the Estimated Time of Arrival (ETA) for the current route
     * based on the current speed and route progress.
     */
    function etc_etaCalculation(): void {
        if (!isRouteLoaded || !lastLatitude || !lastLongitude) return;
        const effectiveSpeed = testModeEnabled ? testSOG : mySpeedOverGround;
        if (effectiveSpeed > 0) {
            const remainingDistance = (routeDistance * (1 - routeProgress));
            estimatedTimeToCompletion = remainingDistance / effectiveSpeed;
            const etcMilliseconds = estimatedTimeToCompletion * 60 * 60 * 1000;
            if (routeStartTime && (routeStartTime.getTime() - Date.now()) > 0) {
                estimatedTimeOfArrival = new Date(routeStartTime.getTime() + etcMilliseconds);
            } else {
                estimatedTimeOfArrival = new Date(Date.now() + etcMilliseconds);
            }
        } else {
            estimatedTimeToCompletion = 0;
            estimatedTimeOfArrival = null;
        }
    }

    /**
     * Finds the next waypoint to current position and calculates progress
    */
    function updateRouteProgress(): void {
        if (!isRouteLoaded || !lastLatitude || !lastLongitude) return;
        
        // if the route departure is in the future calculate the eta of the entire route and do not pass any waypoint.
        if (!routeStartTime || Date.now() < routeStartTime.getTime()) {
            etc_etaCalculation();
            waypointETAs = computeWaypointsETAs();
        
            // Refresh waypoint display if next waypoint changed
            if (showRouteWaypoints && routeMarkers) {
                displayRouteWaypoints();
            }
            return
        };
        
        // Step 1: Find the first segment where the projection parameter t >= 1 (i.e., vessel is past the end of the segment)
        // Navigation/progress logic (use only this for nextWaypointIndex)
        let bestSegmentIndex = 0;
        let bestProgress = 0;
        let minDistance = Infinity;
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const segmentStart = gpxRoute[i];
            const segmentEnd = gpxRoute[i + 1];
            const result = findClosestPointOnSegment(
                lastLatitude!, lastLongitude!,
                segmentStart.lat, segmentStart.lon,
                segmentEnd.lat, segmentEnd.lon
            );
            if (result.progress >= 0 && result.progress <= 1 && result.distance < minDistance) {
                minDistance = result.distance;
                bestSegmentIndex = i;
                bestProgress = result.progress;
            }
        }
        if (minDistance === Infinity) {
            bestSegmentIndex = gpxRoute.length - 2;
            bestProgress = 1;
        }
        nextWaypointIndex = bestSegmentIndex + 1;

        // Step 2: Calculate route progress (for ETC/ETA)
        let distanceCovered = 0;
        for (let i = 0; i < bestSegmentIndex; i++) {
            distanceCovered += calculateDistance(
                gpxRoute[i].lat, gpxRoute[i].lon,
                gpxRoute[i + 1].lat, gpxRoute[i + 1].lon
            );
        }
        if (bestSegmentIndex < gpxRoute.length - 1) {
            const segmentDistance = calculateDistance(
                gpxRoute[bestSegmentIndex].lat, gpxRoute[bestSegmentIndex].lon,
                gpxRoute[bestSegmentIndex + 1].lat, gpxRoute[bestSegmentIndex + 1].lon
            );
            distanceCovered += segmentDistance * bestProgress;
        }
        const totalRouteDistanceKm = routeDistance;
        routeProgress = Math.min(distanceCovered / totalRouteDistanceKm, 1.0);

        // Step 3: The next waypoint is ALWAYS the end of the current segment
        nextWaypointIndex = Math.min(bestSegmentIndex + 1, gpxRoute.length - 1);

        // Step 4: Update closestWaypointIndex for internal use
        closestWaypointIndex = bestProgress > 0 ? bestSegmentIndex + 1 : bestSegmentIndex;

        // Step 5: Calculate ETC/ETA
        const effectiveSpeed = testModeEnabled ? testSOG : mySpeedOverGround;
        if (effectiveSpeed > 0) {
            const remainingDistance = (routeDistance * (1 - routeProgress));
            estimatedTimeToCompletion = remainingDistance / effectiveSpeed;
            const etcMilliseconds = estimatedTimeToCompletion * 60 * 60 * 1000;
            if (routeStartTime && (routeStartTime.getTime() - Date.now()) > 0) {
                estimatedTimeOfArrival = new Date(routeStartTime.getTime() + etcMilliseconds);
            } else {
                estimatedTimeOfArrival = new Date(Date.now() + etcMilliseconds);
            }
        } else {
            estimatedTimeToCompletion = 0;
            estimatedTimeOfArrival = null;
        }
        waypointETAs = computeWaypointsETAs();
        // Refresh waypoint display if next waypoint changed
        if (showRouteWaypoints && routeMarkers) {
            displayRouteWaypoints();
        }
    }

    /** Calculate the ETAs for all remaining waypoints
     * @param
     * @returns 
     * */
    function computeWaypointsETAs() {
        let sog = mySpeedOverGround > 0 ? mySpeedOverGround : testSOG; // SOG in knots, default value if 0
        let etas = [];
        let totalDist = 0;
        let lastLat = lastLatitude ?? gpxRoute[nextWaypointIndex]?.lat ?? 0;
        let lastLon = lastLongitude ?? gpxRoute[nextWaypointIndex]?.lon ?? 0;

        for (let i = nextWaypointIndex; i < gpxRoute.length; i++) {
            let wp = gpxRoute[i];
            let dist = calculateDistance(lastLat, lastLon, wp.lat, wp.lon);
            totalDist += dist;
            let hours = totalDist / sog;
            let etaDate = new Date( Date.now() + hours * 3600 * 1000);
            etas.push({
                index: i,
                name: wp.name || `WP${i+1}`,
                eta: etaDate,
                distance: totalDist
            });
            lastLat = wp.lat;
            lastLon = wp.lon;
        }
        return etas;
    }

    /**
     * Projects vessel position along the loaded route with timing consideration and heading calculation
     * @param {number} currentSOG Speed over ground of the vessel
     * @param {number} duration Duration for the projection (in seconds)
     * @returns {{lat: number, lon: number, heading: number} | null} Projected position as a Leaflet LatLng object
    */
    function computeRouteProjection(currentSOG: number, duration: number): {lat: number, lon: number, heading: number} | null {
        console.log(`Computing route projection: SOG=${currentSOG}, duration=${duration.toFixed(1)}`);
        if (!isRouteLoaded || gpxRoute.length < 2 || currentSOG <= 0) return null;
        
        if (routeStartTime) {
            const targetTime = windyStore.get('timestamp');
            const now = Date.now();

            // Before departure: stay at route start
            if (targetTime < routeStartTime.getTime()) {
                return {
                    lat: gpxRoute[0].lat,
                    lon: gpxRoute[0].lon,
                    heading: gpxRoute.length > 1 ? calculateBearing(gpxRoute[0].lat, gpxRoute[0].lon, gpxRoute[1].lat, gpxRoute[1].lon) : 0
                };
            }

            // After departure: project from vessel's real position, using duration from now to timeline
            let startLat = lastLatitude ?? gpxRoute[0].lat;
            let startLon = lastLongitude ?? gpxRoute[0].lon;
            let bestSegmentIndex = 0;
            let minDistance = Infinity;
            let snappedLat = startLat;
            let snappedLon = startLon;

            // Total distance to travel in NM
            const distanceToTravel = (currentSOG * duration) / 3600; // knots * hours
            let distanceCovered = 0;

            // Snap to closest point on route
            for (let i = 0; i < gpxRoute.length - 1; i++) {
                const segStart = gpxRoute[i];
                const segEnd = gpxRoute[i + 1];
                const proj = findClosestPointOnSegment(
                    startLat, startLon,
                    segStart.lat, segStart.lon,
                    segEnd.lat, segEnd.lon
                );
                if (proj.distance < minDistance) {
                    minDistance = proj.distance;
                    bestSegmentIndex = i;
                    const t = Math.max(0, Math.min(1, proj.progress));
                    if (segStart.type === 'GC') {
                        const snapped = interpolateGreatCirclePoint(segStart.lat, segStart.lon, segEnd.lat, segEnd.lon, t);
                        snappedLat = snapped.lat;
                        snappedLon = snapped.lon;
                    } else {
                        // Linear interpolation (rhumb line)
                        snappedLat = segStart.lat + (segEnd.lat - segStart.lat) * t;
                        snappedLon = segStart.lon + (segEnd.lon - segStart.lon) * t;
                    }
                }
            }

            let currentLat = snappedLat;
            let currentLon = snappedLon;
            let currentIndex = bestSegmentIndex;

            // Duration from now to timeline ---
            const projectionDurationSeconds = (targetTime - now) / 1000; // seconds
            let remainingDistance = currentSOG * (projectionDurationSeconds / 3600); // in NM

            // Walk the route from the snapped point
            while (remainingDistance > 0 && currentIndex < gpxRoute.length - 1) {
                const nextWaypoint = gpxRoute[currentIndex + 1];
                const segmentDistance = calculateDistance(currentLat, currentLon, nextWaypoint.lat, nextWaypoint.lon);

                if (segmentDistance <= remainingDistance) {
                    remainingDistance -= segmentDistance;
                    currentLat = nextWaypoint.lat;
                    currentLon = nextWaypoint.lon;
                    currentIndex++;
                } else {
                    const ratio = segmentDistance === 0 ? 0 : remainingDistance / segmentDistance;
                    if (gpxRoute[currentIndex].type === 'GC') {
                        // Use great circle interpolation for projection
                        const gc = interpolateGreatCirclePoint(currentLat, currentLon, nextWaypoint.lat, nextWaypoint.lon, ratio);
                        currentLat = gc.lat;
                        currentLon = gc.lon;
                    } else {
                        // Linear interpolation (rhumb line)
                        currentLat += (nextWaypoint.lat - currentLat) * ratio;
                        currentLon += (nextWaypoint.lon - currentLon) * ratio;
                    }
                    remainingDistance = 0;
                }
            }

            // Calculate heading for the projected position
            let heading = 0;
            if (currentIndex < gpxRoute.length - 1) {
                heading = calculateBearing(currentLat, currentLon, gpxRoute[currentIndex + 1].lat, gpxRoute[currentIndex + 1].lon);
            } else if (currentIndex > 0) {
                heading = calculateBearing(gpxRoute[currentIndex - 1].lat, gpxRoute[currentIndex - 1].lon, currentLat, currentLon);
            }

            return { lat: currentLat, lon: currentLon, heading };
        }

        // Fallback: project from current position for duration (in seconds)
        let startLat = lastLatitude ?? gpxRoute[0].lat;
        let startLon = lastLongitude ?? gpxRoute[0].lon;
        let bestSegmentIndex = 0;
        let minDistance = Infinity;
        let snappedLat = startLat;
        let snappedLon = startLon;

        // Snap to closest point on route
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const segStart = gpxRoute[i];
            const segEnd = gpxRoute[i + 1];
            const proj = findClosestPointOnSegment(
                startLat, startLon,
                segStart.lat, segStart.lon,
                segEnd.lat, segEnd.lon
            );
            if (proj.distance < minDistance) {
                minDistance = proj.distance;
                bestSegmentIndex = i;
                const t = Math.max(0, Math.min(1, proj.progress));
                // Use great circle interpolation for snap
                const snapped = interpolateGreatCirclePoint(segStart.lat, segStart.lon, segEnd.lat, segEnd.lon, t);
                snappedLat = snapped.lat;
                snappedLon = snapped.lon;
                //snappedLat = segStart.lat + (segEnd.lat - segStart.lat) * t;
                //snappedLon = segStart.lon + (segEnd.lon - segStart.lon) * t;
            }
        }

        let currentLat = snappedLat;
        let currentLon = snappedLon;
        let currentIndex = bestSegmentIndex;

        // duration is in seconds, convert to hours
        const timeElapsedHours = duration / 3600;
        let remainingDistance = currentSOG * timeElapsedHours; // in NM

        // Walk the route from the snapped point
        while (remainingDistance > 0 && currentIndex < gpxRoute.length - 1) {
            const nextWaypoint = gpxRoute[currentIndex + 1];
            const segmentDistance = calculateDistance(currentLat, currentLon, nextWaypoint.lat, nextWaypoint.lon);

            if (segmentDistance <= remainingDistance) {
                remainingDistance -= segmentDistance;
                currentLat = nextWaypoint.lat;
                currentLon = nextWaypoint.lon;
                currentIndex++;
            } else {
                const ratio = segmentDistance === 0 ? 0 : remainingDistance / segmentDistance;
                // Use great circle interpolation for projection
                const gc = interpolateGreatCirclePoint(currentLat, currentLon, nextWaypoint.lat, nextWaypoint.lon, ratio);
                currentLat = gc.lat;
                currentLon = gc.lon;
                //currentLat += (nextWaypoint.lat - currentLat) * ratio;
                //currentLon += (nextWaypoint.lon - currentLon) * ratio;
                remainingDistance = 0;
            }
        }

        // Calculate heading for the projected position
        let heading = 0;
        if (currentIndex < gpxRoute.length - 1) {
            heading = calculateBearing(currentLat, currentLon, gpxRoute[currentIndex + 1].lat, gpxRoute[currentIndex + 1].lon);
        } else if (currentIndex > 0) {
            heading = calculateBearing(gpxRoute[currentIndex - 1].lat, gpxRoute[currentIndex - 1].lon, currentLat, currentLon);
        }

        return { lat: currentLat, lon: currentLon, heading };
    }

    /**
     * Calculate the projected position of the vessel based on route or heading/speed and Windy timestamp
     * @param lat Latitude of the vessel
     * @param lon Longitude of the vessel
     * @param cog Course over ground of the vessel
     * @param sog Speed over ground of the vessel
     * @param duration Duration for the projection (in seconds)
     * @returns Projected position as a Leaflet LatLng object
    */
    function computeProjection(lat: number, lon: number, cog: number, sog: number, duration?: number): any {
        // Use cached route projection if available
        if (lastRouteProjection) {
            return L.latLng(lastRouteProjection.lat, lastRouteProjection.lon);
        }
        if (lastFallbackProjection) {
            return L.latLng(lastFallbackProjection.lat, lastFallbackProjection.lon);
        }

        // Fallback: traditional COG/SOG projection if no cached value
        const ts = getRoundedHourTimestamp(windyStore.get('timestamp'));
        duration = duration ?? (Math.floor((ts - Date.now()) / 3600000) || 0); // in hours
        if (duration > 360) duration = 0;
        if (duration < 1) duration = 0;

        if (duration === 0) {
            return L.latLng(lat, lon);
        }

        const distance = sog * duration; // in nautical miles
        const R = 3440.065; // Earth radius in nautical miles
        const δ = distance / R; // in radians
        const θ = toRadians(cog);
        const φ1 = toRadians(lat);
        const λ1 = toRadians(lon);

        const φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));
        const λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1), Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));

        return L.latLng(toDegrees(φ2), toDegrees(λ2));
    }

   /**
     * Shows a Windy weather popup at the given position.
     * @param lat Latitude of the position
     * @param lon Longitude of the position
     * @param useProjectionTime If true, uses Windy timestamp (forecast), otherwise current time.
     * @returns 
    */
    function showMyPopup(lat: number, lon: number, useProjectionTime = false) {
        openedPopup?.remove();

        const popup = L.popup({ autoClose: true })
            .setLatLng([lat, lon])
            .setContent('<em>Loading weather...</em>')
            .openOn(map);

        openedPopup = popup;

        // *** Gestionnaire d'événement pour détecter la fermeture du popup ***
        popup.on('remove', () => {
            openedPopup = null;
        });

        getLatLonInterpolator().then((interpolator: any) => {
            if (!interpolator) {
                popup.setContent('Weather layer not available.');
                return;
            }

            // Choose timestamp according to context
            let ts: number;
            if (useProjectionTime) {
                ts = getRoundedHourTimestamp(windyStore.get('timestamp')); // projection time (forecast) rounded to the nearest hour
            } else {
                ts = getRoundedHourTimestamp(Date.now()); // current time rounded to the nearest hour
            }
            const forecastDate = ts ? new Date(ts) : new Date();

            const overlay = windyStore.get('overlay');
            const values = interpolator({ lat, lon });
            let content = `<div style="text-align: center;"><strong>${vesselName}</strong><br>φ = ${displayLatitude(lat)}, λ= ${displayLongitude(lon)}</div>`;
            if (projectionHours === 0) {
                content += `<hr><div><small><strong>${overlay} actual forecast :</strong></small></div>`;
            } else if (projectionHours !== null && projectionHours > 0) {
                content += `<hr><div><small><strong>${overlay} forecast in ${projectionHours} hours :</strong></small></div>`;
            }
            if (!Array.isArray(values)) {
                content += '❌ No interpolated data.';
                popup.setContent(content);
                return;
            }

            if (overlay === 'wind') {
                const { dir, wind } = wind2obj(values) as { dir: number; wind: number };
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
                content += `☁️ Cloud cover: ${Math.round(values[0])} %`;
            
            } else if (overlay === 'tide') {
                const tideHeight = values[0];
                content += `🌊 Tide: ${tideHeight.toFixed(2)} m`;
            
            } else if (overlay === 'currents') {
                const u = values[0];
                const v = values[1];
                const dir = (Math.round(Math.atan2(u, v) * 180 / Math.PI) + 360) % 360; // Normalize -180 / +180 to 0-360°
                content += `🌊 Current: ${(Math.sqrt(u * u + v * v) * 3600/1852).toFixed(2)} Knots <br> Carrying to: ${Math.round(dir)}°`;

            } else if (overlay === 'currentsTide') {
                const u = values[0];
                const v = values[1];
                const dir = (Math.round(Math.atan2(u, v) * 180 / Math.PI) + 360) % 360; // Normalize -180 / +180 to 0-360°
                content += `🌊 Current: ${(Math.sqrt(u * u + v * v) * 3600/1852).toFixed(2)} Knots <br> Carrying to: ${Math.round(dir)}°`;
            
            } else if (overlay === 'sst') {
                const seaTemp = metrics.temp.convertValue(values[0]);
                content += `🌊 Sea Temperature: ${seaTemp}`;
            
            } else if (overlay === 'swell1' || overlay === 'swell2' || overlay === 'swell3') {
                // For swell overlays, direction conversion formula
                console.log(`Swell ${overlay} data:`, values);
                
                const u = values[0];
                const v = values[1];

                const swellDirDeg = Math.round(Math.atan2(v, u) * 180 / Math.PI); // Convert to degrees
                const swellPeriod = Math.sqrt(u * u + v * v).toFixed(2);
                
                const swellHeight = metrics.waves.convertValue(values[2]);
                const swellNum = overlay.slice(-1);
                content += `🌊 Swell ${swellNum}: ${swellHeight}<br>🧭 Direction: ${Math.round(swellDirDeg)}°<br>⏱ Period: ${swellPeriod} s`;
            
            } else {
                content += `ℹ️ No weather data available for ${overlay}.`;
            }
            // Add Windy API version and forecast date
            content += `<hr><div style="text-align: right;"><small><strong>Forecast date : </strong>${forecastDate.toUTCString()}</small></div>`;
            
            // *** Mettre à jour le contenu du popup ! ***
            popup.setContent(content);
            
        }).catch((error: unknown) => {
            console.error('Error getting weather data:', error);
            popup.setContent('❌ Error loading weather data.');
        });
    } // End showMyPopup

    /**
     * Adds the vessel marker and projection on the map.
     * Handles clicks on icons to display weather at current or projected time.
     * Enhanced addBoatMarker with route-aware projection and heading calculation.
     */
    function addBoatMarker(lat: number, lon: number, cog: number) {
        if (!map || !markerLayer) return;
        
        // Validate input parameters to prevent NaN errors
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
            console.warn(`Invalid coordinates in addBoatMarker: lat=${lat}, lon=${lon}`);
            return;
        }

        // Update route progress if route is loaded
        if (isRouteLoaded) {
            throttledUpdateRouteProgress();
        }

        // Ensure COG is a valid number, default to 0 if not
        const validCOG = Number.isFinite(cog) ? cog : 0;

        const Position = L.latLng(lat, lon);
        markerLayer.clearLayers();
        pathLatLngs.push(Position);

        // Auto-save track history every 100 points to avoid excessive localStorage writes
        if (pathLatLngs.length % 100 === 0) {
            maintainTrackLimits();
            saveTrackHistory();
        }

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

        // Only show arrows when NOT following a route
        if (!routeProjectionActive) {
            // Heading direction arrow
            const headingEnd = computeProjection(lat, lon, effectiveCOG, effectiveSOG, 24);
            if (headingArrow) headingArrow.remove();
            headingArrow = L.polyline([Position, headingEnd], {
                color: 'blue',
                weight: 2,
                dashArray: '10, 10',
            }).addTo(markerLayer);

            // Future projection arrow (use effective values for test mode)
            const cogEnd = computeProjection(lat, lon, effectiveCOG, effectiveSOG, projectionHours ?? undefined);
            if (projectionArrow) projectionArrow.remove();
            projectionArrow = L.polyline([Position, cogEnd], {
                color: testModeEnabled ? 'orange' : 'red', // Different color in test mode
                weight: 1,
                dashArray: '5, 5',
            }).addTo(markerLayer);
        } else {
            // Remove arrows when following route
            if (headingArrow) {
                headingArrow.remove();
                headingArrow = null;
            }
            if (projectionArrow) {
                projectionArrow.remove();
                projectionArrow = null;
            }
        }
        if (ownShipMarker) {
           markerLayer.removeLayer(ownShipMarker);
            ownShipMarker = null;
        }
        // Main marker (current position)
        const icon = createRotatingBoatIcon(trueHeading, 0.846008, boatIconSize);
        ownShipMarker = L.marker(Position, { 
            icon: icon,
            zIndexOffset: zIndexOwnShip
        }).addTo(markerLayer);
        ownShipMarker.bindTooltip(vesselName, { permanent: false, direction: 'top', className: 'boat-tooltip' });

        // Click on vessel: weather at current time
        ownShipMarker.on('click', () => {
            if (openedPopup) {
                openedPopup.remove();
                openedPopup = null;
                return;
            }
            // Round to the nearest full hour (in ms)
            windyStore.set('timestamp', getRoundedHourTimestamp());
            showMyPopup(lat, lon, false);
        });

        // Future projection icon (if speed > 0.5 knots AND timeline is in future)
        // --- Projected icon (future position) ---
        if (effectiveSOG > 0.5 && projectionHours !== null && projectionHours > 0) {
            let projectedLat: number, projectedLon: number, projectedHeading: number;

            if (lastRouteProjection) {
                projectedLat = lastRouteProjection.lat;
                projectedLon = lastRouteProjection.lon;
                projectedHeading = lastRouteProjection.heading;
            } else if (lastFallbackProjection) {
                projectedLat = lastFallbackProjection.lat;
                projectedLon = lastFallbackProjection.lon;
                projectedHeading = lastFallbackProjection.heading;
            } else {
                // No projection available
                projectedLat = lat;
                projectedLon = lon;
                projectedHeading = trueHeading;
            }

            // Display forecast icon at projected position with correct heading
            if (forecastIcon) forecastIcon.remove();
            const projectedIcon = createRotatingBoatIcon(projectedHeading, 0.846008, boatIconSize * 0.67);
            forecastIcon = L.marker([projectedLat, projectedLon], {
                icon: projectedIcon,
                zIndexOffset: zIndexOwnShip
            }).addTo(markerLayer);

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
                showMyPopup(projectedLat, projectedLon, true);
            });

            // Dynamic rotation of the projected icon
            const projectedIconDiv = forecastIcon.getElement()?.querySelector('.rotatable') as HTMLElement;
            if (projectedIconDiv) {
                projectedIconDiv.style.transformOrigin = '12px 12px';
                projectedIconDiv.style.transform = `rotateZ(${projectedHeading}deg)`;
            }
            updateButtonText();
        } else {
            // Remove forecast icon when timeline is in past or no projection needed
            if (forecastIcon) {
                forecastIcon.remove();
                forecastIcon = null;
            }
        }

        // Dynamic rotation of the main icon
        const iconDiv = ownShipMarker.getElement()?.querySelector('.rotatable') as HTMLElement;
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
     * Updates the projection for the timeline based on the given timestamp.
     * @param ts
     */
    function updateProjectionForTimeline(ts: number) {
        projectionHours = (getRoundedHourTimestamp(ts) - getRoundedHourTimestamp()) / (3600 * 1000); // in hours
        //projectionHours = (ts - Date.now()) / (3600 * 1000); // in hours
        updateButtonText();

        let effectiveSOG = testModeEnabled ? testSOG : mySpeedOverGround;
        let effectiveCOG = testModeEnabled ? testCOG : myCourseOverGroundT;

        if (isRouteLoaded && routeProjectionActive && gpxRoute.length > 0 && routeStartTime) {
            // Use elapsed time from route start, not from now!
            const durationSeconds = (ts - routeStartTime.getTime()) / 1000;
            lastRouteProjection = computeRouteProjection(effectiveSOG, durationSeconds);
            lastFallbackProjection = null;
        } else {
            // Fallback: COG/SOG projection from current position
            if (lastLatitude !== null && lastLongitude !== null && effectiveSOG > 0.5 && projectionHours > 0) {
                const fallback = computeProjection(lastLatitude, lastLongitude, effectiveCOG, effectiveSOG, projectionHours);
                lastFallbackProjection = {
                    lat: fallback.lat,
                    lon: fallback.lng,
                    heading: effectiveCOG
                };
            } else {
                lastFallbackProjection = null;
            }
            lastRouteProjection = null;
        }
        // Move the weather popup if it's open and timeline changes
        if (openedPopup && lastRouteProjection) {
            // Use the projected position for the popup
            openedPopup.setLatLng([lastRouteProjection.lat, lastRouteProjection.lon]);
            showMyPopup(lastRouteProjection.lat, lastRouteProjection.lon, true);
        } else if (openedPopup && lastFallbackProjection) {
            openedPopup.setLatLng([lastFallbackProjection.lat, lastFallbackProjection.lon]);
            showMyPopup(lastFallbackProjection.lat, lastFallbackProjection.lon, true);
        }
    }
    
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
            const ts = getRoundedHourTimestamp(windyStore.get('timestamp'));
            // If timeline is at current time (±1h)
            if (projectionHours !== null && projectionHours < 0.1) {
                showMyPopup(lastLatitude, lastLongitude, false);
            } else if (projectionHours !== null && projectionHours >= 0.1) {
                // Display on projected position if timeline in the future
                const projected = computeProjection(lastLatitude, lastLongitude, effectiveCOG, effectiveSOG, projectionHours);
                showMyPopup(projected.lat, projected.lng, true);
            } else {
                // If no projection possible, display on current position
                showMyPopup(lastLatitude, lastLongitude, false);
            }
        }
    }
    
    /*
    *
    *
    * 
    * UTILITY FUNCTIONS
    * 
    * 
    */

    /**
     * Rounds a timestamp (or Date.now() if not provided) to the nearest 1/10 hour (in ms)
     * @param ts
     * @returns Rounded timestamp in ms
     */
    function getRoundedHourTimestamp(ts?: number): number {
        const t = ts ?? Date.now();
        const hourMs = 360 * 1000; // 0.1 hour in milliseconds
        return Math.round(t / hourMs) * hourMs;
    }

    /**
     * Formats a date as dd/mm/yyyy
     * @param date Date object to format
     * @returns Formatted date string in dd/mm/yyyy format
    */
    function formatDateDDMMYYYY(date: Date): string {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    /**
     * Formats time as HH:MM (24-hour format)
     * @param date Date object to format
     * @returns Formatted time string in HH:MM format
    */
    function formatTime24Hour(date: Date): string {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    /**
     * Formats date and time together
     * @param date Date object to format
     * @returns Formatted date and time string in dd/mm/yyyy HH:MM format
    */
    function formatDateTime(date: Date): string {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const secondes = date.getSeconds().toString().padStart(2, '0');
        return `${formatDateDDMMYYYY(date)} ${hours}:${minutes}:${secondes}`;
    }

    /**
     * Converts degrees to radians
     * @param deg
     * @returns Radians
    */
    function toRadians(deg: number): number {
        return deg * Math.PI / 180;
    }

    /**
     * Converts radians to degrees
     * @param rad
     * @returns Degrees
    */
    function toDegrees(rad: number): number {
        return rad * 180 / Math.PI;
    }

    /**
     * Calculate the bearing between two points
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @returns Bearing in degrees
    */
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
     * Manual centering on vessel
    */
    function centerShip() {
        if (lastLatitude !== null && lastLongitude !== null) {
            map.setView([lastLatitude, lastLongitude]);
        }
    }

    /**
     * Toggles the follow ship mode
    */
    function toggleFollowShip() {
        followShip = !followShip;
    }

    /**
     * Function to update the icon when the size changes
    */
    $: {
        if (boatIconSize && lastLatitude !== null && lastLongitude !== null) {
            // Redessiner le marqueur avec la nouvelle taille - validate COG first
            const validCOG = Number.isFinite(myCourseOverGroundT) ? myCourseOverGroundT : 0;
            addBoatMarker(lastLatitude, lastLongitude, validCOG);
        }
    }
    
    /**
     * Cleanup when plugin closes
    */
    onDestroy(() => 
        {
            // Save data before closing
            saveTrackHistory();
            if (isRouteLoaded) {
                saveGpxRoute();
            }

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
            // Arrêter le timer de nettoyage des fragments
            if (fragmentCleanupTimer) {
                clearInterval(fragmentCleanupTimer);
                fragmentCleanupTimer = null;
            }

            // Clear route display
            clearRouteDisplay();

            // Clean up pending fragments
            aisFragments = {};
            // Clean up pending fragments
            aisFragments = {};
        }
    );
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
    .plugin__buttons__centered button {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin: 5px;
        padding: 5px 10px;
        font-size: 14px;
        width: 75%;
    }
    .plugin__buttons__centered {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    .rotatable {
        transform-origin: center center;
    }

    /* Boat icon size control styles */
    .icon-size-section {
        margin: 10px 0;
        padding: 12px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .icon-size-section input[type="range"] {
        background: #333;
        height: 6px;
        border-radius: 3px;
        outline: none;
        
        &::-webkit-slider-thumb {
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #4db8ff;
            cursor: pointer;
            border: 2px solid #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        &::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #4db8ff;
            cursor: pointer;
            border: 2px solid #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
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
        display: flex;
        justify-content: flex-start;
        margin-right: 75px;
        text-align: right;
        align-items: left;
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
    /* Specific alignment for server address  */
    .right-aligned {
        display: flex;
        justify-content: flex-end;
        margin-right: 75px;
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

