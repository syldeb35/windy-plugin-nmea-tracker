
<div class="plugin__mobile-header">
    {title}
</div>

{#if helpVisible}
<div id="help" class="plugin-summary" style="border-radius:8px; padding:12px; margin-bottom:16px; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); z-index:9999; background:#3c3c3c; color:white; box-shadow: 0 4px 20px rgba(0,0,0,0.5); max-width:800px; max-height:80vh; overflow-y:auto; border: 1px solid #555;">
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
            <li>🌤️ <strong>Weather at position</strong> - Get forecast for your current location or projected position</li>
            <li>🎮 <strong>Test mode</strong> - Simulate movement for testing</li>
            <li>🗺️ <strong>GPX Route Editor</strong> - Upload, edit, and follow sailing routes with a user-friendly editor</li>
            <li>🧭 <strong>Leg types: RL & GC</strong> - Each route leg can be set as Rhumb Line (RL, constant bearing) or Great Circle (GC, shortest path)</li>
            <li>📏 <strong>Accurate distance calculation</strong> - Route and leg distances are computed using the correct geodetic method</li>
            <li>📌 <strong>Waypoint ETA & progress</strong> - See estimated time of arrival and progress for each waypoint</li>
            <li>🔄 <strong>Route projection</strong> - Project your future position based on SOG/COG or along the loaded route</li>
            <li>🖊️ <strong>Route Editor modal</strong> - Edit waypoints, leg types, and export your route as GPX</li>
            <li>🛰️ <strong>GPS-over-AIS priority</strong> - Always uses GPS position if available, falls back to AIS otherwise</li>
        </ul>
        <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 5px; margin: 12px 0;">
            <strong>💡 Tips:</strong>
            <ul style="margin: 6px 0 0 18px; color:white;">
                <li>Use the <b>Route Editor</b> to set each leg as RL (constant bearing) or GC (great circle) for precise navigation.</li>
                <li>Projection and weather forecast update instantly with timeline, SOG, or COG changes—even with no route loaded.</li>
                <li>Passed waypoints are colored for easy progress tracking.</li>
                <li>All server and route settings are saved for your next session.</li>
            </ul>
        </div>
        <p style="font-size: 90%; color: #ccc; margin-top: 15px; text-align: center;">
            Perfect for sailing, motor boating, commercial vessels, and maritime enthusiasts!
        </p>
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
            id="serverAddress"
            name="serverAddress"
            bind:value={serverAddress}
            on:keydown={handleServerAddressKeydown}
            on:blur={handleServerAddressBlur}
            placeholder="localhost or IP address" 
            style="width: 150px; height: 20px; font-weight: bold;"
        />
    </label>
    <p style="margin-bottom: 12px;">Test the server: <a href="{route}" target="_blank"><code>Testing</code></a></p>
    <p class="connection-state" style="margin-bottom: 12px;">
      🔌 Server status: <span class={isConnected ? ' connected' : ' disconnected'}>
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
            <div><strong>&phi;:</strong> {myLatitude !== null ? myLatitude : '--'}</div>
            <div><strong>&lambda;:</strong> {myLongitude !== null ? myLongitude : '--'}</div>
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
            <button on:click={centerShip} title="Center on the vessel present position">📍 Center</button>
            <button on:click={toggleFollowShip} title="Follow the projected vessel">
                {followShip ? '🛑 Stop' : '▶️ Follow'}
            </button>
            <button on:click={setTimelineNow} title="Set timeline to present time">⏰ Now</button>
        </div>
        <div class="plugin__buttons__centered">
            <button id="button" on:click={showWeatherPopup} title="Display the weather tooltip">{@html buttonText}</button>
        </div>
    {/if}
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
            {#if routeMetadata.filename}
                <p style="font-size: 12px; color: #0a0; margin: 2px 0;">
                    ✅ Loaded: {routeMetadata.filename}
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
                <button id="toggleWaypointsButton" on:click={toggleRouteWaypoints} style="margin-left: 10px;">
                    📍 {showRouteWaypoints ? 'Hide waypoints' : 'Show waypoints'}
                </button>
                <button on:click={() => {
                    console.debug('Leg editor button clicked');
                    showLegEditorModal();
                }} style="margin-left: 10px;">
                    ✏️ Edit Leg Types
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
            <button on:click={() => {clearStoredData('track-history'); }} style="background: #2196F3;">
                🗑️ Clear Track
            </button>
            <button on:click={() => { clearRoute(); clearStoredData('gpx-route'); }} style="background: #ff6600;">
                🗑️ Clear Route
            </button>
        </div>
        <p style="font-size: 11px; color: #666; margin: 5px 0;">
            Track history and routes are automatically saved and restored when the plugin loads.
        </p>
    </div>
    <div class="error" id="err">
        <p></p>
    </div><!-- Boat Icon Size Control -->
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
    // Server configuration variables
    let serverAddress = loadServerAddress(); // e.g. 'localhost' or '192.168.1.10' or 'nmea.example.com'
    let serverPort = 5000; // Default port (can be made editable if needed)
    let route = makeRoute(serverAddress, serverPort);
    

    let latitudesal: number | null = null, latDirection: string | null = null;
    let longitudesal: number | null = null, lonDirection: string | null = null;
    let latitude: number | null = null;
    let longitude: number | null = null;
    let myLatitude: string | null = null;
    let myLongitude: string | null = null;
    let nmeaHistory: string[] = []; // Store last 10 NMEA frame types
    let lastLatitude: number | null = null;
    let lastLongitude: number | null = null;
    let courseOverGroundT: number = 0; // True
    let myCourseOverGroundT: number = 0; // True
    let trueHeading: number = 0; // True heading
    let speedOverGround: number = 0; // In knots
    let mySpeedOverGround: number = 0; // In knots
    let followShip = false; // do not follow ship by default
    let vesselName = loadVesselName(); // Load from localStorage or default
    let CurrentOverlay = 'Windy'; // Default overlay, can be changed later
    let lastDataUpdateTime: number = 0;
    let socket: any = null;
    let markerLayer: any = null;
    let ownShipMarker: any = null;
    let aisShipsLayer: any = null; // Layer for AIS ships
    let boatPath: any[] = []; // Array of polylines for track segments
    let projectionArrow: any = null;
    let headingArrow: any = null;
    let forecastIcon: any = null;
    let pathLatLngs: any[] = []; // Array to hold path latitude/longitude points
    // --- Track history configuration ---
    // 📝 CONFIGURATION: Change TRACK_HISTORY_DAYS to adjust track retention duration
    // Options: 1 day (sailing), 7 days (coastal), 30 days (ocean), 90 days (RTW)
    // Storage: ~70KB/day, so 30 days ≈ 2.1 MB (safe for localStorage)
    const TRACK_HISTORY_DAYS = 30; // Duration in days (30 days = ~2.1 MB storage for ocean passages)
    const TRACK_HISTORY_DURATION = TRACK_HISTORY_DAYS * 24 * 60 * 60 * 1000; // Convert to milliseconds
    
    // 📝 CONFIGURATION: Track gap detection (prevents straight lines across land after plugin restart)
    // Time gap threshold in minutes - if more than this time passes between track points, 
    // a new track segment is created instead of connecting with a straight line
    // Recommended: 30 minutes (sailing), 60 minutes (motoring), 15 minutes (racing)
    const TRACK_GAP_THRESHOLD_MINUTES = 30; // Minutes before creating new track segment
    
    // 📝 CONFIGURATION: Track display update throttling (prevents excessive processing)
    // Update interval in seconds - track display will update at most once per interval
    // Recommended: 60 seconds (normal), 30 seconds (racing), 120 seconds (slow devices)
    const TRACK_DISPLAY_UPDATE_INTERVAL_SECONDS = 60; // Seconds between track display updates
    
    // --- Track history logic ---
    let shortTrackHistory: any[] = []; // TODO: Rename to trackHistory for clarity
    let lastShortTrackSaveTime: number = 0;
    
    // --- Track display throttling ---
    let lastTrackDisplayUpdate: number = 0;
    let lastTrackPointCount: number = 0;
    const TRACK_DISPLAY_UPDATE_INTERVAL = TRACK_DISPLAY_UPDATE_INTERVAL_SECONDS * 1000; // Convert to milliseconds
    
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
    let gpxRoute: Array<{lat: number, lon: number, name?: string, time?: Date, passedTime?: Date, type?: string}> = []; // Route waypoints
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
    let prevNextWaypointIndex: number = 0; // Index of previous next waypoint
    let waypointETAs: Array<{ index: number, name: string, eta: Date, distance: number }> = []; // Array to hold ETAs for waypoints
    let routeFileName: string = ''; // Name of loaded GPX file
    let lastRouteProgressUpdate = 0;
    
    // Store all route metadata in a single object for easy access
    let routeMetadata: {
        name?: string;
        filename?: string;
        desc?: string;
        author?: string;
        time?: string;
        keywords?: string;
        [key: string]: any;
    } = {};

    // Z order of the overlay
    let zIndexOwnShip: number = 1000; // Own ship marker
    let zIndexWaypoint: number = 800; // Waypoint markers
    let zIndexRoute: number = 600; // Route markers
    let zIndexAisShips: number = 400; // AIS ships markers
    let zIndexAtoN: number = 100; // AtoN markers

    let helpVisible = false;
    let lastWakeTime = Date.now();

    let userOS: string = 'Uknown';

    /**
     * 
    */
    onMount(() => {
        console.debug('Plugin start mounted');
        projectionHours = 0; // Reset projection hours
        userOS = detectOSAdvanced();
        console.debug('User OS detected:', userOS);

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('focus', handleVisibilityChange);
        
        // Load track history on plugin start
        loadShortTrackHistory();
        
        // Force initial track display update (ignore throttling on startup)
        lastTrackDisplayUpdate = 0; // Reset to force update
        updateTrackDisplay();

        // --- Restore GPX route and metadata from raw GPX file if available ---
        const savedRawGpx = localStorage.getItem('windy-nmea-gpx-raw');
        if (savedRawGpx) {
            // Use a placeholder filename if not available
            parseGpxMetadata(savedRawGpx, 'Restored.gpx');
            parseGpxRoute(savedRawGpx, 'Restored.gpx');
        }

        // Load GPX route
        if (loadGpxRoute()) {
            calculateRouteDistance();
            // Initialize route on component load
            // updateRouteProgress();
            displayRoute();
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
            console.debug('Windy timeline changed, new timestamp:', ts);
            
            // Use the rounded timestamp consistently for all timeline-based operations
            const roundedTimestamp = getRoundedHourTimestamp(ts);
            
            // Update projection for the rounded timeline timestamp
            updateProjectionForTimeline(roundedTimestamp);
            updateButtonText(roundedTimestamp);
            
            // Update boat marker if no route is loaded
            if (!isRouteLoaded && lastLatitude !== null && lastLongitude !== null) {
                const cog = testModeEnabled ? testCOG : myCourseOverGroundT;
                addBoatMarker(lastLatitude, lastLongitude, cog);
            }
        });

        if (typeof unsub === 'function') {
            unsubscribeTimeline = unsub;
        } else {
            unsubscribeTimeline = null;
        }

        // Subscribe to Windy overlay changes
        const unsubOverlay = store.on('overlay', (overlay: string) => {
            console.debug('Windy overlay changed, new overlay:', overlay);
           
            CurrentOverlay = overlay;
            updateButtonText(windyStore.get('timestamp'));
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
        
        console.debug('Plugin full mounted');
    });

    /**
     * Initialization when plugin opens
     * 
    */
    export const onopen = () => {
        console.debug('Plugin opened');
    }

    /**
     * Handle visibility change events
     */
    function handleVisibilityChange() {
        if (!document.hidden) {
            // Tab is visible again (could be after sleep)
            if (Date.now() - lastWakeTime > 10000) { // 10s threshold for sleep
                console.debug('Detected wake from sleep or long inactivity, reconnecting socket...');
                createSocketConnection();
            }
            lastWakeTime = Date.now();
        }
    }

    /**
     * --- Server address input handlers ---
     * @param event
     */
    function handleServerAddressKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            updateServerRoute((event.target as HTMLInputElement).value.trim());
            (event.target as HTMLInputElement).blur(); // Optionally blur to commit
        }
    }
    
    /**
     * Server address blur handler
     * @param event
     */
    function handleServerAddressBlur(event: FocusEvent) {
        updateServerRoute((event.target as HTMLInputElement).value.trim());
    }

    /**
     * General function to export GPX with custom filename suffix
     * @param filenameSuffix - Suffix to add to the filename (e.g., '_edited', '_progress_2024-01-15T14-30-25')
     * @param includeTimestamp - Whether to add timestamp to filename (for auto-downloads)
     */
    function exportGpxFile(filenameSuffix: string = '', includeTimestamp: boolean = false) {
        if (!gpxRoute || gpxRoute.length === 0) {
            console.debug('No route loaded, skipping GPX export');
            return;
        }

        // Build GPX XML string
        let gpx = '';
        gpx += `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n`;
        gpx += `<gpx xmlns="http://www.topografix.com/GPX/1/1" xmlns:cmacgm="http://www.cmacgm.com" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" creator="NMEA Tracker" version="1.1" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">\n`;
        gpx += `    <metadata>\n`;
        gpx += `        <name>${routeMetadata.name || 'NMEA Tracker Route'}</name>\n`;
        gpx += `        <filename>${routeMetadata.filename || 'nmea-route.gpx'}</filename>\n`;
        gpx += `        <desc>${routeMetadata.desc || 'Route with navigation data'}</desc>\n`;
        gpx += `        <author>\n            <name>${routeMetadata.author || 'NMEA Tracker'}</name>\n        </author>\n`;
        gpx += `        <time>${routeMetadata.time || new Date().toISOString()}</time>\n`;
        gpx += `        <keywords>${routeMetadata.keywords || 'navigation,nmea,tracking'}</keywords>\n`;
        gpx += `    </metadata>\n`;
        gpx += `    <rte>\n`;
        
        gpxRoute.forEach((wp, i) => {
            gpx += `        <rtept lat="${wp.lat}" lon="${wp.lon}">\n`;
            if (wp.time) gpx += `           <time>${wp.time.toISOString()}</time>\n`;
            if (wp.name) gpx += `           <name>${wp.name}</name>\n`;
            // Save passedTime as <timePassed> if present
            if (wp.passedTime) {
                const passedTimeStr = wp.passedTime instanceof Date ? wp.passedTime.toISOString() : wp.passedTime;
                gpx += `           <timePassed>${passedTimeStr}</timePassed>\n`;
            }
            // Only add <type> for all but the last point (leg type is for the segment starting at this point)
            if (i < gpxRoute.length - 1 && wp.type) gpx += `           <type>${wp.type}</type>\n`;
            gpx += `        </rtept>\n`;
        });
        
        gpx += `    </rte>\n</gpx>`;

        // Create filename
        const baseFilename = routeMetadata.filename ? routeMetadata.filename.replace(/\.gpx$/i, '') : 'nmea-route';
        let filename = baseFilename;
        
        if (includeTimestamp) {
            const now = new Date();
            const timestamp = now.toISOString().replace(/[:.]/g, '-').substring(0, 19);
            filename = `${baseFilename}${filenameSuffix}_${timestamp}.gpx`;
        } else {
            filename = `${baseFilename}${filenameSuffix}.gpx`;
        }

        // Download as file
        const blob = new Blob([gpx], { type: 'application/gpx+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);

        console.debug(`GPX exported as: ${filename}`);
    }

    /**
     * Save handler for edited GPX (legacy wrapper)
     */
    function saveEditedGpx() {
        exportGpxFile('_edited', false);
    }

    /**
     * Automatically download GPX file with waypoint passing times when waypoints are passed
     */
    function downloadGpxWithPassedTimes() {
        if (!gpxRoute || gpxRoute.length === 0) {
            console.debug('No route loaded, skipping auto-download');
            return;
        }

        // Check if any waypoints have been passed
        const passedWaypoints = gpxRoute.filter(wp => wp.passedTime);
        if (passedWaypoints.length === 0) {
            console.debug('No waypoints passed yet, skipping auto-download');
            return;
        }

        console.debug(`Auto-downloading GPX with ${passedWaypoints.length} passed waypoints`);
        
        // Use the general export function with timestamp
        exportGpxFile('_progress', true);
    }

    /**
     * Function to update the route when server host changes
     */
    function updateServerRoute(newAddress?: string) {
        if (newAddress) {
            serverAddress = newAddress;
            saveServerAddress(serverAddress);
        }
        route = makeRoute(serverAddress, serverPort);
        // Reconnect to the new server if socket exists and is initialized
        if (socket !== null && socket !== undefined) {
            console.debug('Server address changed, reconnecting to:', route);
            createSocketConnection();
        }
    }

    function makeRoute(address: string, port: number) {
        // Always use https for Windy plugins
        return `https://${address}:${port}`;
    }

    function loadServerAddress(): string {
        try {
            const saved = localStorage.getItem('windy-nmea-server-address');
            return saved || 'localhost';
        } catch (error) {
            console.warn('Failed to load server address from localStorage:', error);
            return 'localhost';
        }
    }

    function saveServerAddress(address: string): void {
        try {
            localStorage.setItem('windy-nmea-server-address', address);
            console.debug('Server address saved:', address);
        } catch (error) {
            console.warn('Failed to save server address to localStorage:', error);
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
        
        console.debug('Connecting to NMEA server at:', route);
        
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
            console.debug('WebSocket connected to NMEA server');
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
            console.debug('WebSocket disconnected:', reason);
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
            console.debug('WebSocket reconnected after', attemptNumber, 'attempts');
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
            console.debug('Vessel name saved:', name);
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
            console.debug('Vessel MMSI saved:', mmsi);
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
     * Save a track point to localStorage with configurable duration
     * @param lat
     * @param lon
     */
    function saveShortTrackPoint(lat: any, lon: any): void {
        const now = Date.now();
        // Remove points older than configured duration (30 days by default)
        const cutoff = now - TRACK_HISTORY_DURATION;
        shortTrackHistory = shortTrackHistory.filter(p => p.t >= cutoff);
        const last = shortTrackHistory.length > 0 ? shortTrackHistory[shortTrackHistory.length - 1] : null;
        // Only save if 60s have passed since last save and position is different from last
        if (
            (now - lastShortTrackSaveTime >= 60000) &&
            (!last || Math.abs(lat - last.lat) > 1e-6 || Math.abs(lon - last.lon) > 1e-6)
        ) {
            shortTrackHistory.push({ lat, lon, t: now });
            localStorage.setItem('windy-nmea-shorttrack', JSON.stringify(shortTrackHistory));
            lastShortTrackSaveTime = now;
            const actualHistoryDays = shortTrackHistory.length / (24 * 60);
            console.debug(`Track point saved: ${shortTrackHistory.length} points (${actualHistoryDays.toFixed(2)} days history)`);
        }
    }

    /**
     * Load track history from localStorage
     */
    function loadShortTrackHistory() {
        try {
            const saved = localStorage.getItem('windy-nmea-shorttrack');
            if (saved) {
                shortTrackHistory = JSON.parse(saved);
            } else {
                shortTrackHistory = [];
            }
        } catch (e) {
            shortTrackHistory = [];
        }
        console.debug(`Track history loaded: ${shortTrackHistory.length} points (${TRACK_HISTORY_DAYS} days retention)`);
    }

    /**
     * Creates track segments from track history, breaking at time gaps
     * @param maxGapMinutes - Maximum time gap in minutes before creating a new segment
     * @returns Array of track segments, each containing an array of LatLng points
     */
    function createTrackSegments(maxGapMinutes: number = 30): any[][] {
        if (shortTrackHistory.length < 2) return [];
        
        const segments: any[][] = [];
        let currentSegment: any[] = [];
        const maxGapMs = maxGapMinutes * 60 * 1000; // Convert to milliseconds
        
        for (let i = 0; i < shortTrackHistory.length; i++) {
            const point = shortTrackHistory[i];
            const latLng = L.latLng(point.lat, point.lon);
            
            // Check if this is the first point or if there's a significant time gap
            if (i === 0) {
                // First point - start new segment
                currentSegment = [latLng];
            } else {
                const timeDiff = point.t - shortTrackHistory[i - 1].t;
                
                if (timeDiff > maxGapMs) {
                    // Time gap detected - finish current segment and start new one
                    if (currentSegment.length > 1) {
                        segments.push([...currentSegment]);
                    }
                    currentSegment = [latLng];
                    console.debug(`Track gap detected: ${(timeDiff / (60 * 1000)).toFixed(1)} minutes between points`);
                } else {
                    // Continue current segment
                    currentSegment.push(latLng);
                }
            }
        }
        
        // Add the last segment if it has multiple points
        if (currentSegment.length > 1) {
            segments.push(currentSegment);
        }
        
        return segments;
    }

    /**
     * Updates the track display on the map with gap detection and throttling
     * Only updates if enough time has passed or track data changed significantly
     */
    function updateTrackDisplay(): void {
        const now = Date.now();
        const timeSinceLastUpdate = now - lastTrackDisplayUpdate;
        const trackPointCountChanged = shortTrackHistory.length !== lastTrackPointCount;
        
        // Only update if:
        // 1. More than 1 minute has passed since last update, OR
        // 2. Track point count changed significantly (new points added)
        if (timeSinceLastUpdate < TRACK_DISPLAY_UPDATE_INTERVAL && !trackPointCountChanged) {
            return; // Skip update - too frequent
        }
        
        // Remove existing track polylines
        boatPath.forEach(polyline => polyline.remove());
        boatPath = [];
        
        // Create new track segments with gap detection
        const trackSegments = createTrackSegments(TRACK_GAP_THRESHOLD_MINUTES);
        
        // Display each segment as a separate polyline
        trackSegments.forEach((segment, index) => {
            if (segment.length > 1) {
                const polyline = L.polyline(segment, { 
                    color: 'blue', 
                    weight: 3,
                    opacity: 0.7
                }).addTo(map);
                boatPath.push(polyline);
            }
        });
        
        // Update pathLatLngs for backward compatibility
        pathLatLngs = trackSegments.flat();
        
        // Update throttling variables
        lastTrackDisplayUpdate = now;
        lastTrackPointCount = shortTrackHistory.length;
        
        console.debug(`Track display updated: ${trackSegments.length} segments from ${shortTrackHistory.length} points`);
    }

    /**
     * Save GPX route to localStorage
    */
    function saveGpxRoute(): void {
        try {
            if (isRouteLoaded && gpxRoute.length > 0) {
                // TEMP: Reset all passedTime values for waypoints
                // gpxRoute.forEach(wp => { wp.passedTime = undefined; });
                const routeData = {
                    waypoints: gpxRoute.map(wp => ({
                        lat: wp.lat,
                        lon: wp.lon,
                        name: wp.name,
                        time: wp.time ? wp.time.toISOString() : null,
                        passedTime: wp.passedTime ? (wp.passedTime instanceof Date ? wp.passedTime.toISOString() : wp.passedTime) : null,
                        type: wp.type
                    })),
                    fileName: routeFileName,
                    startTime: routeStartTime ? routeStartTime.toISOString() : null,
                    distance: routeDistance,
                    showWaypoints: showRouteWaypoints
                };
                localStorage.setItem('windy-nmea-gpx-route', JSON.stringify(routeData));
                console.debug(`GPX route saved: ${routeFileName} with ${gpxRoute.length} waypoints`);
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
                // Restore waypoints with proper Date objects, including passedTime
                gpxRoute = routeData.waypoints.map((wp: any) => ({
                    lat: wp.lat,
                    lon: wp.lon,
                    name: wp.name,
                    time: wp.time ? new Date(wp.time) : undefined,
                    passedTime: wp.passedTime ? new Date(wp.passedTime) : undefined,
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
                    nextWaypointIndex = 0;
                } else {
                    // Calculate proper waypoint indices based on current position
                    updateRouteProgress();
                }

                console.debug(`GPX route loaded: ${routeFileName} with ${gpxRoute.length} waypoints`);
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
    function clearStoredData(item: string): void {
        try {
            switch (item) {
                case 'track-history':
                    localStorage.removeItem('windy-nmea-shorttrack');
                    break;
                case 'gpx-route':
                    localStorage.removeItem('windy-nmea-gpx-route');
                    localStorage.removeItem('windy-nmea-gpx-raw');
                    break;
                case 'all':
                    localStorage.removeItem('windy-nmea-shorttrack');
                    localStorage.removeItem('windy-nmea-gpx-route');
                    localStorage.removeItem('windy-nmea-gpx-raw');
                    break;
                default:
                    break;
            }
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
    function updateButtonText(ts: number) {

        const myOverlay = getOverlayName();
        if (projectionHours !== null && projectionHours > 0) {
            if (!routeProjectionActive) {
                buttonText = `🌬️ Show ${myOverlay} prediction (in ${projectionHours.toFixed(1)}h)`;
            } else {
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
        // Update the projection for the current testCOG & timeline
        updateProjectionForTimeline(windyStore.get('timestamp'));
        updateButtonText(windyStore.get('timestamp'));
        if (!isRouteLoaded && lastLatitude !== null && lastLongitude !== null) {
            const cog = testModeEnabled ? testCOG : myCourseOverGroundT;
            addBoatMarker(lastLatitude, lastLongitude, cog);
        }
        localStorage.setItem('testCOG', target.value);
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
        updateButtonText(windyStore.get('timestamp'));
        if (!isRouteLoaded && lastLatitude !== null && lastLongitude !== null) {
            const cog = testModeEnabled ? testCOG : myCourseOverGroundT;
            addBoatMarker(lastLatitude, lastLongitude, cog);
        }
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
     * Create and show the leg editor modal outside the plugin container
     */
    function showLegEditorModal() {
        // Make required functions available globally for the modal FIRST
        (window as any).modalCalculateGreatCircleDistance = calculateGreatCircleDistance;
        (window as any).modalCalculateStraightLineDistance = calculateStraightLineDistance;
        (window as any).modalFormatDateTime = formatDateTime;
        (window as any).modalSaveEditedGpx = saveEditedGpx;

        // Remove any existing modal
        const existingModal = document.getElementById('leg-editor-modal-external');
        if (existingModal) {
            existingModal.remove();
        }

        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.id = 'leg-editor-modal-external';
        overlay.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: rgba(0, 0, 0, 0.8) !important;
            z-index: 999999 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 20px !important;
        `;

        // Create modal content
        const modal = document.createElement('div');
        modal.style.cssText = `
            background: white !important;
            color: black !important;
            border-radius: 12px !important;
            width: 95vw !important;
            max-width: 1200px !important;
            height: 85vh !important;
            overflow: hidden !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
            position: relative !important;
            display: flex !important;
            flex-direction: column !important;
        `;

        // Create header
        const header = document.createElement('div');
        header.style.cssText = `
            padding: 20px 24px 16px 24px;
            border-bottom: 2px solid #eee;
            flex-shrink: 0;
        `;
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = `
            position: absolute;
            top: 16px;
            right: 20px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
            z-index: 1;
        `;
        closeBtn.onclick = () => overlay.remove();

        const title = document.createElement('h2');
        title.textContent = 'Edit Leg Types';
        title.style.cssText = `margin: 0; color: #333; font-size: 24px; text-align: center;`;

        const subtitle = document.createElement('p');
        subtitle.textContent = `${routeMetadata.filename} — ${routeMetadata.name}`;
        subtitle.style.cssText = `margin: 8px 0 0 0; color: #666; font-size: 14px; text-align: center;`;

        header.appendChild(closeBtn);
        header.appendChild(title);
        header.appendChild(subtitle);

        // Create table header
        const tableHeader = document.createElement('div');
        tableHeader.style.cssText = `
            background: #f8f9fa;
            border-bottom: 2px solid #dee2e6;
            flex-shrink: 0;
        `;
        
        const headerTable = document.createElement('table');
        headerTable.style.cssText = `width: 100%; border-collapse: collapse;`;
        headerTable.innerHTML = `
            <thead>
                <tr style="background: #e9ecef;">
                    <th style="padding: 12px 8px; text-align: center; font-weight: bold; border-right: 1px solid #dee2e6; width: 40px;">Id</th>
                    <th style="padding: 12px 8px; text-align: left; font-weight: bold; border-right: 1px solid #dee2e6; width: 200px;">From</th>
                    <th style="padding: 12px 8px; text-align: left; font-weight: bold; border-right: 1px solid #dee2e6; width: 200px;">To</th>
                    <th style="padding: 12px 8px; text-align: center; font-weight: bold; border-right: 1px solid #dee2e6; width: 100px;">Distance (NM)</th>
                    <th style="padding: 12px 8px; text-align: center; font-weight: bold; border-right: 1px solid #dee2e6; width: 80px;">Type</th>
                    <th style="padding: 12px 8px; text-align: center; font-weight: bold; border-right: 1px solid #dee2e6; width: 140px;">ETA</th>
                    <th style="padding: 12px 8px; text-align: center; font-weight: bold; width: 140px;">Passed Time</th>
                </tr>
            </thead>
        `;
        tableHeader.appendChild(headerTable);

        // Create scrollable table body
        const content = document.createElement('div');
        content.style.cssText = `
            flex: 1;
            overflow-y: auto;
            background: white;
        `;
        
        const bodyTable = document.createElement('table');
        bodyTable.style.cssText = `width: 100%; border-collapse: collapse;`;
        
        // Generate table rows for each leg
        let tableRows = '';
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const wp = gpxRoute[i];
            const nextWp = gpxRoute[i + 1];
            
            // Determine row style based on progress
            let rowStyle = 'border-bottom: 1px solid #dee2e6;';
            if (i + 1 < nextWaypointIndex) {
                rowStyle = 'background: #d4edda; border-bottom: 1px solid #c3e6cb;'; // Completed
            } else if (i + 1 === nextWaypointIndex) {
                rowStyle = 'background: #fff3cd; border-bottom: 1px solid #ffeaa7; font-weight: bold;'; // Current
            }
            
            // Calculate distance based on leg type
            const legType = wp.type || 'RL';
            let distance;
            if (legType === 'GC') {
                distance = (window as any).modalCalculateGreatCircleDistance(wp.lat, wp.lon, nextWp.lat, nextWp.lon);
            } else {
                distance = (window as any).modalCalculateStraightLineDistance(wp.lat, wp.lon, nextWp.lat, nextWp.lon);
            }
            
            // Format ETA
            let etaText = '-';
            if (i < nextWaypointIndex && wp.time) {
                etaText = (window as any).modalFormatDateTime(wp.time);
            } else if (waypointETAs && waypointETAs[i - nextWaypointIndex]) {
                etaText = (window as any).modalFormatDateTime(new Date(waypointETAs[i - nextWaypointIndex].eta));
            }
            
            // Format passed time
            let passedTimeText = '-';
            if (wp.passedTime && wp.passedTime instanceof Date) {
                passedTimeText = (window as any).modalFormatDateTime(wp.passedTime);
            }
            
            tableRows += `
                <tr style="${rowStyle}">
                    <td style="padding: 10px 8px; text-align: center; border-right: 1px solid #dee2e6; font-size: 14px; width: 40px;">${i}</td>
                    <td style="padding: 10px 8px; text-align: left; border-right: 1px solid #dee2e6; font-size: 14px; width: 200px; overflow: hidden; text-overflow: ellipsis;">${wp.name || `WP ${i}`}</td>
                    <td style="padding: 10px 8px; text-align: left; border-right: 1px solid #dee2e6; font-size: 14px; width: 200px; overflow: hidden; text-overflow: ellipsis;">${nextWp.name || `WP ${i + 1}`}</td>
                    <td style="padding: 10px 8px; text-align: center; border-right: 1px solid #dee2e6; font-size: 14px; font-weight: bold; color: #495057; width: 100px;">${distance.toFixed(2)}</td>
                    <td style="padding: 10px 8px; text-align: center; border-right: 1px solid #dee2e6; width: 80px;">
                        <select onchange="updateLegType(${i}, this.value)" style="padding: 4px 8px; border: 1px solid #ced4da; border-radius: 4px; background: white; font-size: 14px;">
                            <option value="RL" ${legType === 'RL' ? 'selected' : ''}>R-L</option>
                            <option value="GC" ${legType === 'GC' ? 'selected' : ''}>G-C</option>
                        </select>
                    </td>
                    <td style="padding: 10px 8px; text-align: center; border-right: 1px solid #dee2e6; font-size: 13px; color: #6c757d; width: 140px;">${etaText}</td>
                    <td style="padding: 10px 8px; text-align: center; font-size: 13px; color: #6c757d; width: 140px;">${passedTimeText}</td>
                </tr>
            `;
        }
        
        // Note: Total distance moved to footer for better visibility
        
        bodyTable.innerHTML = `<tbody>${tableRows}</tbody>`;
        content.appendChild(bodyTable);

        // Create footer with total distance and save button
        const footer = document.createElement('div');
        footer.style.cssText = `
            padding: 16px 24px;
            border-top: 2px solid #eee;
            background: #f8f9fa;
            flex-shrink: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `;
        
        // Total distance display
        const totalDistanceDiv = document.createElement('div');
        totalDistanceDiv.id = 'modal-total-distance';
        totalDistanceDiv.style.cssText = `
            font-size: 16px;
            font-weight: bold;
            color: #495057;
        `;
        totalDistanceDiv.innerHTML = `Total Distance: <span style="color: #007bff;">${routeDistance.toFixed(2)} NM</span>`;
        
        const saveBtn = document.createElement('button');
        saveBtn.textContent = '💾 Save & Download GPX';
        saveBtn.style.cssText = `
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
        `;
        saveBtn.onclick = () => {
            (window as any).modalSaveEditedGpx();
            overlay.remove();
        };
        
        footer.appendChild(totalDistanceDiv);
        footer.appendChild(saveBtn);

        // Assemble modal
        modal.appendChild(header);
        modal.appendChild(tableHeader);
        modal.appendChild(content);
        modal.appendChild(footer);
        overlay.appendChild(modal);

        // Add global function for leg type updates
        (window as any).updateLegType = (index: number, newType: string) => {
            if (gpxRoute[index]) {
                gpxRoute[index].type = newType;
                // Trigger reactivity update
                gpxRoute = [...gpxRoute];
                
                // Recalculate route distance and save immediately
                calculateRouteDistance();
                saveGpxRoute();
                
                // Update the route display on the map immediately
                displayRoute();
                
                console.debug(`Updated leg ${index} to type ${newType} - route refreshed on map`);
                
                // Update the distance in the modal table
                (window as any).updateModalDistance(index, newType);
                
                // Update the total distance in the modal
                (window as any).updateModalTotalDistance();
                
                // Visual feedback - briefly highlight the updated row
                (window as any).highlightUpdatedRow(index);
            }
        };

        // Function to update the distance display in the modal
        (window as any).updateModalDistance = (index: number, newType: string) => {
            const wp = gpxRoute[index];
            const nextWp = gpxRoute[index + 1];
            if (!wp || !nextWp) return;
            
            // Calculate new distance
            let distance;
            if (newType === 'GC') {
                distance = (window as any).modalCalculateGreatCircleDistance(wp.lat, wp.lon, nextWp.lat, nextWp.lon);
            } else {
                distance = (window as any).modalCalculateStraightLineDistance(wp.lat, wp.lon, nextWp.lat, nextWp.lon);
            }
            
            // Find and update the distance cell
            const modal = document.getElementById('leg-editor-modal-external');
            if (modal) {
                const rows = modal.querySelectorAll('tbody tr');
                const targetRow = rows[index];
                if (targetRow) {
                    const distanceCell = (targetRow as HTMLTableRowElement).cells[3]; // Distance column is 4th (index 3)
                    if (distanceCell) {
                        distanceCell.textContent = distance.toFixed(2);
                    }
                }
            }
        };

        // Function to update the total distance in the modal footer
        (window as any).updateModalTotalDistance = () => {
            const totalDistanceDiv = document.getElementById('modal-total-distance');
            if (totalDistanceDiv) {
                totalDistanceDiv.innerHTML = `Total Distance: <span style="color: #007bff;">${routeDistance.toFixed(2)} NM</span>`;
                console.debug(`Updated modal total distance to ${routeDistance.toFixed(2)} NM`);
            }
        };

        // Function to provide visual feedback when a leg type is updated
        (window as any).highlightUpdatedRow = (index: number) => {
            const modal = document.getElementById('leg-editor-modal-external');
            if (modal) {
                const rows = modal.querySelectorAll('tbody tr');
                const targetRow = rows[index] as HTMLTableRowElement;
                if (targetRow) {
                    // Save original background
                    const originalBackground = targetRow.style.background;
                    
                    // Apply highlight
                    targetRow.style.background = '#28a745'; // Green highlight
                    targetRow.style.transition = 'background-color 0.3s ease';
                    
                    // Remove highlight after 1 second
                    setTimeout(() => {
                        targetRow.style.background = originalBackground;
                    }, 1000);
                }
            }
        };

        // Add to document body
        document.body.appendChild(overlay);

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });
    }

    /**
     * Close the external leg editor modal
     */
    function closeLegEditorModal() {
        const modal = document.getElementById('leg-editor-modal-external');
        if (modal) {
            modal.remove();
        }
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
                        console.debug(`AIS message assembled from ${total} fragments: ${fragKey}`);
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
        // Always use GC for position jumps (navigation, not route legs)
        const distance = calculateGreatCircleDistance(lastLatitude, lastLongitude, newLat, newLon);
        // Dynamic validation based on speed and time
        let maxJump = 1; // Default: 1 nautical mile
        if (sog && sog > 0) {
            const maxTimeBetweenUpdates = 60; // seconds
            const maxDistanceAtSpeed = (sog * maxTimeBetweenUpdates) / 3600;
            maxJump = Math.max(maxDistanceAtSpeed * 3, 1);
            maxJump = Math.min(maxJump, 20);
        } else {
            if (distance > 20) {
                maxJump = 1;
            } else if (distance > 5) {
                maxJump = 3;
            }
        }
        if (distance > maxJump) {
            console.warn(`Position jump detected: ${distance.toFixed(3)}km > ${maxJump.toFixed(3)}km limit. SOG: ${sog || 'unknown'} knots. Rejecting position.`);
            return false;
        }
        return true;
    }

    /**
     * Calculates the distance between two points, honoring the leg type (GC/RL) if provided.
     * If a legType is provided, uses the appropriate method. Otherwise defaults to RL.
     * @param {number} lat1
     * @param {number} lon1
     * @param {number} lat2
     * @param {number} lon2
     * @param {string} [legType] - 'GC' for great circle, 'RL' for rhumb line, or undefined
     * @returns {number} Distance in nautical miles
     */
    function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number, legType?: string): number {
        if (legType === 'GC') {
            return calculateGreatCircleDistance(lat1, lon1, lat2, lon2);
        } else {
            // Default to 'RL' if not specified or explicitly 'RL'
            return calculateStraightLineDistance(lat1, lon1, lat2, lon2);
        }
    }
    
    /**
     * Processes each received NMEA/AIS frame.
     * Updates position, speed, heading, vessel name, etc.
     * @returns {string|null} Frame type if successfully processed, null if error
    */
    // Timestamp of last valid GPS fix (GGA, GLL, RMC)
    let lastGpsFixTime: number = 0;

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
            // parts[2] is 'T' for True, parts[3] would be magnetic COG (not used)
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
            // HDG contains magnetic course and variation (not used in current implementation)
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
            // Mark time of last GPS fix
            lastGpsFixTime = Date.now();
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
        // Reset frame received time on any valid frame
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
        
        // console.debug(`Adding/updating AIS ship: ${mmsi} at ${position.lat.toFixed(5)}, ${position.lng.toFixed(5)}`);
        
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
                    // Only update from AIS if no GPS fix in last 10 seconds
                    if (lastGpsFixTime && Date.now() - lastGpsFixTime < 10000) {
                        // Ignore AIS update if GPS is active
                        return;
                    }
                    // Log for debugging if needed
                    if (mmsi !== myMMSI) {
                        console.debug(`Warning: VDO message with different MMSI ${mmsi} vs known ${myMMSI}`);
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

            console.debug(`ETA: ${etaStr}`);

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

            console.debug(`Virtual AtoN detected: ${name} in position (${lat.toFixed(5)}, ${lon.toFixed(5)})`);

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
        return ('00' + deg).slice(-2) + '° ' + ('0' + ((Math.floor(min * 1000) / 1000).toFixed(2))).slice(-7) + "' " + hemisphere;
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
        return ('000' + deg).slice(-3) + '° ' + ('0' + ((Math.floor(min * 1000) / 1000).toFixed(2))).slice(-7) + "' " + hemisphere;
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
                // Save the raw GPX content to localStorage for reload
                localStorage.setItem('windy-nmea-gpx-raw', gpxContent);
                parseGpxMetadata(gpxContent, file.name);
                parseGpxRoute(gpxContent, file.name);
            } catch (error) {
                console.error('Error reading GPX file:', error);
                addError("[Err] Failed to read GPX file");
            }
        };
        reader.readAsText(file);
    }

    /**
     * Parses GPX metadata from the XML content
     * @param gpxXml
     * @param fileName
     */
    function parseGpxMetadata(gpxXml: string, fileName: string): void {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(gpxXml, 'text/xml');

        // Extract metadata information into a single object
        const metadata = xmlDoc.getElementsByTagName('metadata')[0];
        if (metadata) {
            // Extract author name from <author><name>...</name></author> if present
            let authorName = 'Unknown';
            const authorElem = metadata.getElementsByTagName('author')[0];
            if (authorElem) {
                const authorNameElem = authorElem.getElementsByTagName('name')[0];
                if (authorNameElem && authorNameElem.textContent) {
                    authorName = authorNameElem.textContent.trim();
                } else if (authorElem.textContent) {
                    authorName = authorElem.textContent.trim();
                }
            }
            routeMetadata = {
                name: metadata.getElementsByTagName('name')[0]?.textContent?.trim() || 'Unknown Route',
                filename: metadata.getElementsByTagName('filename')[0]?.textContent?.trim() || 'No Name Route',
                desc: metadata.getElementsByTagName('desc')[0]?.textContent?.trim() || '',
                author: authorName,
                time: metadata.getElementsByTagName('time')[0]?.textContent?.trim() || '',
                keywords: metadata.getElementsByTagName('keywords')[0]?.textContent?.trim() || '',
            };
            // Optionally, extract any other custom fields
            // Example: loop through all children for extensibility
            Array.from(metadata.children).forEach(child => {
                if (!(child.tagName in routeMetadata)) {
                    routeMetadata[child.tagName] = child.textContent;
                }
            });

            // Store or display the metadata as needed
            console.debug('Route Metadata:', routeMetadata);
        } else {
            routeMetadata = {};
        }
    }

    /**
     * Parses GPX XML content and extracts waypoints with departure time extraction
     * @param {string} gpxXml - The GPX XML content
     * @param {string} fileName - The name of the GPX file
     * @returns {void}
    */
    function parseGpxRoute(gpxXml: string, fileName: string): void {
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
            let waypoints: Array<{lat: number, lon: number, name?: string, time?: Date, passedTime?: Date, type?: string}> = [];

            // PRIORITY 1: Extract route points (rtept) from route blocks
            const routePoints = xmlDoc.getElementsByTagName('rtept');
            for (let i = 0; i < routePoints.length; i++) {
                const rtept = routePoints[i];
                const lat = parseFloat(rtept.getAttribute('lat') || '0');
                const lon = parseFloat(rtept.getAttribute('lon') || '0');
                if (validateCoordinates(lat, lon)) {
                    const nameElement = getFirstChildByTagName(rtept, 'name');
                    const timeElement = getFirstChildByTagName(rtept, 'time');
                    const passedTimedElement = getFirstChildByTagName(rtept, 'timePassed');
                    const legType = getFirstChildByTagName(rtept, 'type');
                    waypoints.push({
                        lat,
                        lon,
                        name: nameElement?.textContent || `Route Point ${i + 1}`,
                        time: timeElement?.textContent ? new Date(timeElement.textContent) : undefined,
                        passedTime: passedTimedElement?.textContent ? new Date(passedTimedElement.textContent) : undefined,
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
                nextWaypointIndex = 0;
            }

            calculateRouteDistance();
            displayRoute();
            displayRouteWaypoints();

            // If we have current position, calculate proper waypoint indices
            if (lastLatitude && lastLongitude) {
                throttledUpdateRouteProgress();
            }

            // Save route to localStorage
            saveGpxRoute();
            
            console.debug(`GPX route loaded: ${waypoints.length} waypoints from ${fileName}`);
            if (routeStartTime) {
                console.debug(`Departure time: ${routeStartTime.toISOString()}`);
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
            const legType = gpxRoute[i + 1].type || 'GC';
            const dist = calculateDistance(
                gpxRoute[i].lat, gpxRoute[i].lon,
                gpxRoute[i + 1].lat, gpxRoute[i + 1].lon,
                legType
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
        console.debug(`DEBUG ROUTE DISPLAY: Creating route with ${gpxRoute.length} waypoints`);
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const wp1 = gpxRoute[i];
            const wp2 = gpxRoute[i + 1];
            
            // Debug waypoints 49-50 specifically
            if (i === 49 || i === 50) {
                console.debug(`DEBUG ROUTE DISPLAY: WP${i} = (${wp1.lat.toFixed(5)}, ${wp1.lon.toFixed(5)}) type=${wp1.type || 'RL'}`);
            }
            
            if (wp1.type === 'GC') {
                // Interpolate great circle points for GC legs
                const dist = calculateGreatCircleDistance(wp1.lat, wp1.lon, wp2.lat, wp2.lon);
                const gcPoints = interpolateGreatCircle(wp1.lat, wp1.lon, wp2.lat, wp2.lon, dist / 10);
                routeLatLngs = routeLatLngs.concat(gcPoints);
            } else {
                // For RL legs and default: use straight lines (matches ECDIS/chart plotter display)
                routeLatLngs.push([wp1.lat, wp1.lon]);
                
                // Debug the coordinates being added to the route display
                if (i === 49) {
                    console.debug(`DEBUG ROUTE DISPLAY: Adding WP${i} to route display: [${wp1.lat.toFixed(5)}, ${wp1.lon.toFixed(5)}]`);
                }
            }
        }
        // Always add the last waypoint
        routeLatLngs.push([gpxRoute[gpxRoute.length - 1].lat, gpxRoute[gpxRoute.length - 1].lon]);
        
        // Debug the final waypoint being added
        const lastWP = gpxRoute[gpxRoute.length - 1];
        if (gpxRoute.length - 1 === 50) {
            console.debug(`DEBUG ROUTE DISPLAY: Adding final WP${gpxRoute.length - 1} to route display: [${lastWP.lat.toFixed(5)}, ${lastWP.lon.toFixed(5)}]`);
        }

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
            let passedTime = 'Passed: --/--/-- --:--';
            if (isStart && isPassed) {
                passedTime = 'Departed';
            } else if (isPassed && waypoint.passedTime instanceof Date && !isNaN(waypoint.passedTime.getTime())) {
                const d = waypoint.passedTime;
                passedTime = `Passed: ${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}-${String(d.getUTCDate()).padStart(2,'0')} ${String(d.getUTCHours()).padStart(2,'0')}:${String(d.getUTCMinutes()).padStart(2,'0')} UTC`;
            } else if (!isPassed) {
                const d = waypointETAs[myIndex]
                passedTime = `${waypointETAs.length > 0 && waypointETAs[myIndex] ? `ETA: ${d.eta.getUTCFullYear()}-${String(d.eta.getUTCMonth()+1).padStart(2,'0')}-${String(d.eta.getUTCDate()).padStart(2,'0')} ${String(d.eta.getUTCHours()).padStart(2,'0')}:${String(d.eta.getUTCMinutes()).padStart(2,'0')} UTC` : ''}`;
            }
            marker.bindTooltip(
                `Waypoint ${index + 1} : ${waypoint.name}<br>
                ${displayLatitude(waypoint.lat)}<br>
                ${displayLongitude(waypoint.lon)}<br>
                ${passedTime}`,
                { permanent: false, direction: 'top' }
            );
        });
    }

    /**
     * Toggles waypoint markers visibility
    */
    function toggleRouteWaypoints(): void {
        if (!routeMarkers) return;
        if (!showRouteWaypoints) {
            displayRouteWaypoints();
            showRouteWaypoints = true;
        } else {
            routeMarkers.clearLayers();
            showRouteWaypoints = false;
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
        
        console.debug('GPX route cleared');
        
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
        segmentEndLat: number, segmentEndLon: number,
        legType: string
    ) {
        if (legType === 'RL') {
            // RL: search for t in [0,1] that minimizes distance using straight-line interpolation
            let minDist = Infinity;
            let bestT = 0;
            for (let t = 0; t <= 1.0001; t += 0.02) {
                // Use straight-line interpolation to match route display
                const ptLat = segmentStartLat + (segmentEndLat - segmentStartLat) * t;
                const ptLon = segmentStartLon + (segmentEndLon - segmentStartLon) * t;
                const d = calculateStraightLineDistance(pointLat, pointLon, ptLat, ptLon);
                if (d < minDist) {
                    minDist = d;
                    bestT = t;
                }
            }
            // Refine search around best point
            for (let dt = -0.02; dt <= 0.02; dt += 0.002) {
                let t = bestT + dt;
                if (t < 0) t = 0;
                if (t > 1) t = 1;
                // Use straight-line interpolation to match route display
                const ptLat = segmentStartLat + (segmentEndLat - segmentStartLat) * t;
                const ptLon = segmentStartLon + (segmentEndLon - segmentStartLon) * t;
                const d = calculateStraightLineDistance(pointLat, pointLon, ptLat, ptLon);
                if (d < minDist) {
                    minDist = d;
                    bestT = t;
                }
            }
            return {
                distance: minDist,
                progress: bestT
            };
        } else {
            // Great circle: search for t in [0,1] that minimizes distance
            let minDist = Infinity;
            let bestT = 0;
            for (let t = 0; t <= 1.0001; t += 0.02) {
                const pt = interpolateGreatCirclePoint(segmentStartLat, segmentStartLon, segmentEndLat, segmentEndLon, t);
                const d = calculateGreatCircleDistance(pointLat, pointLon, pt.lat, pt.lon);
                if (d < minDist) {
                    minDist = d;
                    bestT = t;
                }
            }
            for (let dt = -0.02; dt <= 0.02; dt += 0.002) {
                let t = bestT + dt;
                if (t < 0) t = 0;
                if (t > 1) t = 1;
                const pt = interpolateGreatCirclePoint(segmentStartLat, segmentStartLon, segmentEndLat, segmentEndLon, t);
                const d = calculateGreatCircleDistance(pointLat, pointLon, pt.lat, pt.lon);
                if (d < minDist) {
                    minDist = d;
                    bestT = t;
                }
            }
            return {
                distance: minDist,
                progress: bestT
            };
        }
    }

    /**
     * Find the perpendicular projection (abeam point) of a vessel onto a route segment
     * This is different from findClosestPointOnSegment which finds the minimum distance point
     * This finds where a perpendicular line from the vessel intersects the route
     */
    function findPerpendicularProjection(
        vesselLat: number, vesselLon: number,
        segmentStartLat: number, segmentStartLon: number,
        segmentEndLat: number, segmentEndLon: number,
        legType: string
    ) {
        if (legType === 'RL') {
            // For rhumb line (straight line on Mercator projection)
            // Convert to Mercator coordinates for accurate perpendicular calculation
            const vesselX = vesselLon * Math.PI / 180;
            const vesselY = Math.log(Math.tan(Math.PI / 4 + vesselLat * Math.PI / 360));
            
            const startX = segmentStartLon * Math.PI / 180;
            const startY = Math.log(Math.tan(Math.PI / 4 + segmentStartLat * Math.PI / 360));
            
            const endX = segmentEndLon * Math.PI / 180;
            const endY = Math.log(Math.tan(Math.PI / 4 + segmentEndLat * Math.PI / 360));
            
            // Vector from start to end
            const segmentDx = endX - startX;
            const segmentDy = endY - startY;
            
            // Vector from start to vessel
            const vesselDx = vesselX - startX;
            const vesselDy = vesselY - startY;
            
            // Project vessel onto segment using dot product
            const segmentLengthSq = segmentDx * segmentDx + segmentDy * segmentDy;
            
            if (segmentLengthSq === 0) {
                // Degenerate segment (start and end are the same)
                return {
                    distance: calculateStraightLineDistance(vesselLat, vesselLon, segmentStartLat, segmentStartLon),
                    progress: 0,
                    projectionLat: segmentStartLat,
                    projectionLon: segmentStartLon
                };
            }
            
            // Calculate the parameter t for the projection
            const t = Math.max(0, Math.min(1, (vesselDx * segmentDx + vesselDy * segmentDy) / segmentLengthSq));
            
            // Calculate the projection point in Mercator coordinates
            const projX = startX + t * segmentDx;
            const projY = startY + t * segmentDy;
            
            // Convert back to lat/lon
            const projLon = projX * 180 / Math.PI;
            const projLat = (2 * Math.atan(Math.exp(projY)) - Math.PI / 2) * 180 / Math.PI;
            
            // Calculate distance from vessel to projection
            const distance = calculateStraightLineDistance(vesselLat, vesselLon, projLat, projLon);
            
            return {
                distance: distance,
                progress: t,
                projectionLat: projLat,
                projectionLon: projLon
            };
        } else {
            // For great circle, we need to use spherical geometry
            // This is more complex - for now, fall back to closest point method
            // TODO: Implement proper great circle perpendicular projection
            const result = findClosestPointOnSegment(vesselLat, vesselLon, segmentStartLat, segmentStartLon, segmentEndLat, segmentEndLon, legType);
            
            // Get the projection coordinates
            const pt = interpolateGreatCirclePoint(segmentStartLat, segmentStartLon, segmentEndLat, segmentEndLon, result.progress);
            
            return {
                distance: result.distance,
                progress: result.progress,
                projectionLat: pt.lat,
                projectionLon: pt.lon
            };
        }
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
        
        // Step 1: Find the best perpendicular projection onto route segments
        // Navigation/progress logic (use only this for nextWaypointIndex)
        let bestSegmentIndex = 0;
        let bestProgress = 0;
        let minDistance = Infinity;
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const segmentStart = gpxRoute[i];
            const segmentEnd = gpxRoute[i + 1];
            const legType = segmentStart.type || 'RL'; // Leg type is on departure waypoint
            
            const result = findPerpendicularProjection(
                lastLatitude!, lastLongitude!,
                segmentStart.lat, segmentStart.lon,
                segmentEnd.lat, segmentEnd.lon,
                legType
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
        // bestProgress represents the current segment progress (0-1) but is not stored globally

        // Step 2: Calculate route progress (for ETC/ETA)
        let distanceCovered = 0;
        for (let i = 0; i < bestSegmentIndex; i++) {
            const legType = gpxRoute[i + 1].type || 'RL';
            distanceCovered += calculateDistance(
                gpxRoute[i].lat, gpxRoute[i].lon,
                gpxRoute[i + 1].lat, gpxRoute[i + 1].lon,
                legType
            );
        }
        if (bestSegmentIndex < gpxRoute.length - 1) {
            const legType = gpxRoute[bestSegmentIndex + 1].type || 'RL';
            const segmentDistance = calculateDistance(
                gpxRoute[bestSegmentIndex].lat, gpxRoute[bestSegmentIndex].lon,
                gpxRoute[bestSegmentIndex + 1].lat, gpxRoute[bestSegmentIndex + 1].lon,
                legType
            );
            distanceCovered += segmentDistance * bestProgress;
        }
        const totalRouteDistanceKm = routeDistance;
        routeProgress = Math.min(distanceCovered / totalRouteDistanceKm, 1.0);

        // Step 3: The next waypoint is ALWAYS the end of the current segment
        nextWaypointIndex = Math.min(bestSegmentIndex + 1, gpxRoute.length - 1);

        // Step 4: Calculate ETC/ETA
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

        // step 5: check if we just passed a waypoint
        // Initialise previous waypoint index after a reloading
        if (prevNextWaypointIndex === 0) {
            prevNextWaypointIndex = nextWaypointIndex;
        }
        
        // Enhanced waypoint passing detection and logging
        const currentWaypointIndex = nextWaypointIndex - 1; // The waypoint we just passed
        
        // Check if we've passed a new waypoint
        if (currentWaypointIndex >= 0 && currentWaypointIndex < gpxRoute.length) {
            // Check if this waypoint doesn't have a passedTime yet
            if (!gpxRoute[currentWaypointIndex].passedTime && currentWaypointIndex >= prevNextWaypointIndex) {
                console.debug(`DEBUG: Passing waypoint ${currentWaypointIndex + 1} (${gpxRoute[currentWaypointIndex].name || 'Unnamed'})`);
                
                // Set the passed time
                gpxRoute[currentWaypointIndex].passedTime = new Date();
                
                // Save to localStorage immediately
                saveGpxRoute();
                
                // Auto-download updated GPX file with passed times
                downloadGpxWithPassedTimes();
                
                // Update previous waypoint index
                prevNextWaypointIndex = nextWaypointIndex;
                
                console.debug(`Waypoint ${currentWaypointIndex + 1} passed at ${gpxRoute[currentWaypointIndex].passedTime.toISOString()}`);
            }
        }
        
        // Alternative check: if nextWaypointIndex increased significantly, mark all intermediate waypoints as passed
        if (nextWaypointIndex > prevNextWaypointIndex + 1) {
            console.debug(`DEBUG: Multiple waypoints skipped, marking intermediate waypoints as passed`);
            for (let i = prevNextWaypointIndex; i < nextWaypointIndex - 1; i++) {
                if (i >= 0 && i < gpxRoute.length && !gpxRoute[i].passedTime) {
                    gpxRoute[i].passedTime = new Date();
                    console.debug(`Marked waypoint ${i + 1} as passed (skipped)`);
                }
            }
            // Also mark the current waypoint
            if (currentWaypointIndex >= 0 && currentWaypointIndex < gpxRoute.length && !gpxRoute[currentWaypointIndex].passedTime) {
                gpxRoute[currentWaypointIndex].passedTime = new Date();
                console.debug(`Marked current waypoint ${currentWaypointIndex + 1} as passed`);
            }
            
            // Save and download after marking multiple waypoints
            saveGpxRoute();
            downloadGpxWithPassedTimes();
            prevNextWaypointIndex = nextWaypointIndex;
        }
        
        /*
        // Mark passed time for waypoints
        for (let i = 0; i < nextWaypointIndex; i++) {
                gpxRoute[i].passedTime = undefined;
        }
        */
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
            let legType = wp.type || 'GC';
            let dist = calculateDistance(lastLat, lastLon, wp.lat, wp.lon, legType);
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
     * Snap the given latitude and longitude to the nearest route segment
     * @param lat
     * @param lon
     * @returns 
     */
    function snapToRoute(lat: number, lon: number) { // Helper to snap to route (GC or RL)
        let bestSegmentIndex = 0; // Index of the best matching segment
        let minDistance = Infinity; // Minimum distance to a segment
        let snappedLat = lat; // Snapped latitude
        let snappedLon = lon; // Snapped longitude
        let snappedT = 0; // Progress along the segment [0,1]
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const segStart = gpxRoute[i];
            const segEnd = gpxRoute[i + 1];
            const legType = segStart.type || 'RL'; // Leg type is on departure waypoint
            const proj = findPerpendicularProjection(lat, lon, segStart.lat, segStart.lon, segEnd.lat, segEnd.lon, legType);
            if (proj.distance < minDistance) {
                minDistance = proj.distance;
                bestSegmentIndex = i;
                snappedT = Math.max(0, Math.min(1, proj.progress));
                snappedLat = proj.projectionLat;
                snappedLon = proj.projectionLon;
            }
        }
        return { snappedLat, snappedLon, bestSegmentIndex};
    }

    /**
     * Projects vessel position along the loaded route with timing consideration and heading calculation
     * @param {number} currentSOG Speed over ground of the vessel
     * @param {number} targetTime Target timestamp for projection (not duration!)
     * @returns {{lat: number, lon: number, heading: number} | null} Projected position
    */
    function computeRouteProjection(currentSOG: number, targetTime: number): {lat: number, lon: number, heading: number} | null {
        if (!isRouteLoaded || gpxRoute.length < 2 || currentSOG <= 0) return null;

        // --- ROUTE PROJECTION LOGIC ---
        // Timeline-based projection: use Windy timeline and routeStartTime
        if (routeStartTime) {
            const now = Date.now();

            // If timeline is before planned departure, stay at route start
            if (targetTime < routeStartTime.getTime()) {
                const firstLegType = gpxRoute[0].type || 'RL'; // First leg type
                return {
                    lat: gpxRoute[0].lat,
                    lon: gpxRoute[0].lon,
                    heading: gpxRoute.length > 1 ? calculateBearingByLegType(gpxRoute[0].lat, gpxRoute[0].lon, gpxRoute[1].lat, gpxRoute[1].lon, firstLegType) : 0
                };
            }

            // After departure: project from vessel's real position snapped into route using findPerpendicularProjection & time from now to timeline
            
            // For route projection, start from the vessel's SNAPPED position
            // The vessel may be slightly off route so we need to snap to the actual leg.
            // We project from the snapped position following the route heading from leg start to leg end.
            
            // Get vessel's actual position
            let vesselLat = lastLatitude ?? gpxRoute[0].lat;
            let vesselLon = lastLongitude ?? gpxRoute[0].lon;
            
            // Calculate how far to project (in NM) based on SOG and time from now to timeline
            const projectionDurationSeconds = (targetTime - now) / 1000; // seconds
            
            // Special case: When timeline is at "Now" (projectionDurationSeconds ≈ 0), 
            // return the vessel's actual current position, not a route projection
            if (Math.abs(projectionDurationSeconds) < 30) { // Within 30 seconds of "now"
                
                // Calculate heading based on vessel's current position relative to route
                let heading = 0;
                if (currentSOG > 0.5 && gpxRoute.length > 1) {
                    // Snap to route to find current segment and calculate appropriate heading
                    const snapResult = snapToRoute(vesselLat, vesselLon);
                    const segmentIndex = snapResult.bestSegmentIndex;
                    const segmentStart = gpxRoute[segmentIndex];
                    const segmentEnd = gpxRoute[segmentIndex + 1];
                    const legType = segmentStart.type || 'RL';
                    heading = calculateBearingByLegType(segmentStart.lat, segmentStart.lon, segmentEnd.lat, segmentEnd.lon, legType);
                }
                
                return {
                    lat: vesselLat,
                    lon: vesselLon,
                    heading: heading
                };
            }
            
            // calculate the snapped point:
            // Find the intersection between abeam the vessel and the actual leg: it will be the snapped point and departure of our projected vessel's icon.
            const snapResult = snapToRoute(vesselLat, vesselLon);
            let snappedLat = snapResult.snappedLat;
            let snappedLon = snapResult.snappedLon;
            let currentSegmentIndex = snapResult.bestSegmentIndex;
            
            // No time limitation - allow unlimited projection for route following
            let remainingDistance = currentSOG * (projectionDurationSeconds / 3600); // in NM
            
            // Start projection from snapped point (not from vessel's actual position)
            // if first leg waypoint.type = RL, project following a straight line.
            // if first leg waypoint.type = GC project following a great circle curve.
            // if we reach the end of the segment, follow the route to the next leg.
            // Use the walkRouteFromPosition function to follow route turns after leg end waypoint
            
            // Calculate how far we are from the start of the current segment
            const segmentStart = gpxRoute[currentSegmentIndex];
            const segmentEnd = gpxRoute[currentSegmentIndex + 1];
            const legType = segmentStart.type || 'RL';
            
            // Calculate distance from segment start to our snapped position
            const distanceFromSegmentStart = calculateDistance(
                segmentStart.lat, segmentStart.lon, 
                snappedLat, snappedLon, 
                legType
            );
            
            // Now use walkRouteFromPosition to properly follow the route including turns until we reach the distance sog * projection duration
            // But start from the exact snapped position on the route
            const routeProjectionResult = walkRouteFromPosition(
                snappedLat, 
                snappedLon, 
                currentSegmentIndex, 
                remainingDistance
            );
            
            // return these lat, lon to display the vessel's projected icon and the weatherPopup. Calculation must be done one time.
            return {
                lat: routeProjectionResult.lat,
                lon: routeProjectionResult.lon,
                heading: routeProjectionResult.heading
            };
        }

        return null; // No route start time available
    }

    /**
     * Simple fallback projection for COG/SOG when no route is loaded
     * Only used for direction arrows and non-route projections
     */
    function computeFallbackProjection(lat: number, lon: number, cog: number, sog: number, durationHours: number): any {
        if (durationHours === 0 || sog <= 0) {
            return L.latLng(lat, lon);
        }

        // Calculate arrival point using straight-line projection
        const distance = sog * durationHours; // in nautical miles
        
        // Convert distance and bearing to lat/lon using simple straight-line interpolation
        const latDelta = (distance / 60) * Math.cos(toRadians(cog)); // North-South component
        const lonDelta = (distance / 60) * Math.sin(toRadians(cog)) / Math.cos(toRadians(lat)); // East-West component adjusted for latitude
        
        const projectedLat = lat + latDelta;
        const projectedLon = lon + lonDelta;

        return L.latLng(projectedLat, projectedLon);
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
            const overlayName = getOverlayName();

            const values = interpolator({ lat, lon });
            let content = `<div style="text-align: center;"><strong>${vesselName}</strong><br>φ = ${displayLatitude(lat)}, λ= ${displayLongitude(lon)}</div><hr>`;
                if (Math.abs(projectionHours ?? 0) < 0.1) {
                    content += `<div><small><strong>${capitalizeWords(overlayName)} actual forecast :</strong></small></div>`;
                } else if (projectionHours !== null && projectionHours > 0) {
                content += `<div><small><strong>${capitalizeWords(overlayName)} forecast in ${projectionHours.toFixed(1)} hours :</strong></small></div>`;
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
                console.debug(`Swell ${overlay} data:`, values);
                
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

        // Save track point with time-based cleanup (30 days retention)
        saveShortTrackPoint(lat, lon);

        // Use test values if test mode is enabled
        let effectiveSOG = mySpeedOverGround;
        let effectiveCOG = validCOG;
        
        if (testModeEnabled) {
            effectiveSOG = testSOG;
            effectiveCOG = testCOG;
        }

        if (effectiveSOG === null || effectiveSOG === undefined || isNaN(effectiveSOG)) {
            effectiveSOG = 6; // Default to 6 if no speed data
        }

        // Trace of the path traveled - use segmented track display
        updateTrackDisplay();

        // Only show arrows when NOT following a route
        if (!routeProjectionActive) {
            // Heading direction arrow
            const headingEnd = computeFallbackProjection(lat, lon, effectiveCOG, effectiveSOG, 24);
            if (headingArrow) headingArrow.remove();
            headingArrow = L.polyline([Position, headingEnd], {
                color: 'blue',
                weight: 2,
                dashArray: '10, 10',
            }).addTo(markerLayer);

            // Future projection arrow (use effective values for test mode)
            const cogEnd = computeFallbackProjection(lat, lon, effectiveCOG, effectiveSOG, projectionHours ?? 0);
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
                `Weather forecast in ${projectionHours.toFixed(1)} hours (TEST MODE: SOG=${testSOG}kt, COG=${testCOG}°)` :
                `Weather forecast in ${projectionHours.toFixed(1)} hours`;
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
            updateButtonText(windyStore.get('timestamp'));
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
            if (lastRouteProjection) {
                map.setView([lastRouteProjection.lat, lastRouteProjection.lon]);
            } else if (lastFallbackProjection) {
                map.setView([lastFallbackProjection.lat, lastFallbackProjection.lon]);
            } else {
                map.setView(Position); // fallback to actual position if no projection
            }
        }
    } // End addBoatMarker

    /**
     * Common function to walk along the route from a given position
     * @param startLat Starting latitude
     * @param startLon Starting longitude
     * @param startIndex Starting segment index
     * @param remainingDistance Distance to travel in NM
     * @returns Final position and heading
     */
    function walkRouteFromPosition(startLat: number, startLon: number, startIndex: number, remainingDistance: number): {lat: number, lon: number, heading: number, index: number} {
        let currentLat = startLat;
        let currentLon = startLon;
        let currentIndex = startIndex;
        
        let iterations = 0;
        while (remainingDistance > 0 && currentIndex < gpxRoute.length - 1) {
            iterations++;
            const nextWaypoint = gpxRoute[currentIndex + 1];
            const legType = gpxRoute[currentIndex].type || 'RL'; // Leg type is on the departure waypoint
            const segmentDistance = calculateDistance(currentLat, currentLon, nextWaypoint.lat, nextWaypoint.lon, legType);
            
            if (segmentDistance <= remainingDistance) {
                // Move to next waypoint
                remainingDistance -= segmentDistance;
                currentLat = nextWaypoint.lat;
                currentLon = nextWaypoint.lon;
                currentIndex++;
            } else {
                // Interpolate along current segment using EXACT waypoint coordinates to match route display
                const ratio = segmentDistance === 0 ? 0 : remainingDistance / segmentDistance;
                
                // Always use exact waypoint coordinates for interpolation
                const segmentStartWP = gpxRoute[currentIndex];
                const segmentEndWP = gpxRoute[currentIndex + 1];
                
                if (legType === 'GC') {
                    // GC: use proper great circle interpolation between exact waypoints
                    const gc = interpolateGreatCirclePoint(segmentStartWP.lat, segmentStartWP.lon, segmentEndWP.lat, segmentEndWP.lon, ratio);
                    currentLat = gc.lat;
                    currentLon = gc.lon;
                } else {
                    // RL: For perfect route alignment, calculate where we are within the segment
                    // and interpolate along the exact waypoint line, not from current position
                    const segmentStartWP = gpxRoute[currentIndex];
                    const totalSegmentDistance = calculateDistance(segmentStartWP.lat, segmentStartWP.lon, segmentEndWP.lat, segmentEndWP.lon, legType);
                    const distanceFromStart = calculateDistance(segmentStartWP.lat, segmentStartWP.lon, currentLat, currentLon, legType);
                    const progressAlongSegment = totalSegmentDistance === 0 ? 0 : distanceFromStart / totalSegmentDistance;
                    const finalProgressAlongSegment = totalSegmentDistance === 0 ? 0 : (distanceFromStart + remainingDistance) / totalSegmentDistance;
                    
                    // Interpolate along the exact waypoint line using the final progress
                    const newLat = segmentStartWP.lat + (segmentEndWP.lat - segmentStartWP.lat) * finalProgressAlongSegment;
                    const newLon = segmentStartWP.lon + (segmentEndWP.lon - segmentStartWP.lon) * finalProgressAlongSegment;
                    currentLat = newLat;
                    currentLon = newLon;
                }
                
                // INTERMEDIATE SNAP: Snap to route after interpolation to prevent cumulative errors
                const snapResult = findPerpendicularProjection(
                    currentLat, currentLon,
                    segmentStartWP.lat, segmentStartWP.lon,
                    segmentEndWP.lat, segmentEndWP.lon,
                    legType
                );
                
                // Always apply intermediate snap if we're reasonably close to prevent cumulative errors
                if (snapResult.progress >= 0 && snapResult.progress <= 1 && snapResult.distance < 2.0) {
                    currentLat = snapResult.projectionLat;
                    currentLon = snapResult.projectionLon;
                }
                
                remainingDistance = 0;
            }
        }
        
        // FINAL SNAP: Ensure the projected position is exactly on the route line
        // Since we're already very close, snap the final position to the route using perpendicular projection
        if (currentIndex < gpxRoute.length - 1) {
            const segmentStart = gpxRoute[currentIndex];
            const segmentEnd = gpxRoute[currentIndex + 1];
            const legType = segmentStart.type || 'RL';
            
            const snapResult = findPerpendicularProjection(
                currentLat, currentLon,
                segmentStart.lat, segmentStart.lon,
                segmentEnd.lat, segmentEnd.lon,
                legType
            );

            // Only snap if we're within the segment bounds and close to the route
            if (snapResult.progress >= 0 && snapResult.progress <= 1 && snapResult.distance < 1.0) {
                currentLat = snapResult.projectionLat;
                currentLon = snapResult.projectionLon;
            }
        }
        
        // Calculate heading for the projected position
        let heading = 0;
        if (currentIndex < gpxRoute.length - 1) {
            const legType = gpxRoute[currentIndex].type || 'RL'; // Current leg type from departure waypoint
            heading = calculateBearingByLegType(currentLat, currentLon, gpxRoute[currentIndex + 1].lat, gpxRoute[currentIndex + 1].lon, legType);
        } else if (currentIndex > 0) {
            const legType = gpxRoute[currentIndex - 1].type || 'RL'; // Previous leg type
            heading = calculateBearingByLegType(gpxRoute[currentIndex - 1].lat, gpxRoute[currentIndex - 1].lon, currentLat, currentLon, legType);
        }
        
        return { lat: currentLat, lon: currentLon, heading, index: currentIndex };
    }

    /**
     * Updates the projection for the timeline based on the given timestamp.
     * @param ts
     */
    function updateProjectionForTimeline(ts: number) {
        projectionHours = (ts - Date.now()) / (3600 * 1000); // in hours
        
        // Add threshold for "Now" - if within 6 minutes of current time, treat as "Now"
        const nowThresholdHours = 6 / 60; // 6 minutes in hours
        if (Math.abs(projectionHours) <= nowThresholdHours) {
            projectionHours = 0;
        }
        
        updateButtonText(ts);

        // Always use latest test values if test mode is enabled
        let effectiveSOG = testModeEnabled ? testSOG : mySpeedOverGround;
        let effectiveCOG = testModeEnabled ? testCOG : myCourseOverGroundT;

        if (isRouteLoaded && routeProjectionActive && gpxRoute.length > 0 && routeStartTime) {
            // Route-based projection: use timeline vs route start time
            lastRouteProjection = computeRouteProjection(effectiveSOG, ts);
            lastFallbackProjection = null;
        } else {
            // Fallback: COG/SOG projection from current position
            if (lastLatitude !== null && lastLongitude !== null && effectiveSOG > 0.5 && projectionHours > 0) {
                const fallback = computeFallbackProjection(lastLatitude, lastLongitude, effectiveCOG, effectiveSOG, projectionHours);
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
            
            // If timeline is at current time (±1h), show current position
            if (projectionHours !== null && projectionHours < 0.1) {
                showMyPopup(lastLatitude, lastLongitude, false);
            } else if (projectionHours !== null && projectionHours >= 0.1) {
                // Display on projected position if timeline in the future
                // Priority 1: Use route projection if available
                if (lastRouteProjection) {
                    showMyPopup(lastRouteProjection.lat, lastRouteProjection.lon, true);
                } else if (lastFallbackProjection) {
                    // Priority 2: Use fallback projection
                    showMyPopup(lastFallbackProjection.lat, lastFallbackProjection.lon, true);
                } else {
                    // Priority 3: Calculate projection on demand
                    const projected = computeFallbackProjection(lastLatitude, lastLongitude, effectiveCOG, effectiveSOG, projectionHours);
                    showMyPopup(projected.lat, projected.lng, true);
                }
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
     * Gets the name of the overlay for display purposes.
     * @param overlay
     * @returns Overlay name
     */
    function getOverlayName(overlay = CurrentOverlay) {
        switch (overlay) {
            case 'Windy': return 'wind';
            case 'gust': return 'wind gusts';
            case 'temp': return 'temperature';
            case 'sst': return 'sea surface temperature';
            case 'swell1': return 'primary swell';
            case 'swell2': return 'secondary swell';
            case 'swell3': return 'tertiary swell';
            case 'currentsTide': return 'tide currents';
            case 'wwaves': return 'wind waves';
            default: return overlay;
        }
    }

    /**
     * Set the Windy timeline to the present hour/minute
     */
    function setTimelineNow() {
        // Set timeline to current time (rounded to nearest 6 minutes for Windy)
        const now = getRoundedHourTimestamp(Date.now());
        windyStore.set('timestamp', now);
    }

    /**
     * Capitalizes the first letter of each word in a string.
     * @param str
     * @returns Capitalized string
     */
    function capitalizeWords(str: string): string {
        return str.replace(/\b\w+\b/g, word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
    }

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
        return `${formatDateDDMMYYYY(date)} ${formatTime24Hour(date)}`;
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

    // --- Utility functions for leg distance types (used in Leg Editor table) ---
    /**
     * Calculates the Great Circle distance between two points on the Earth.
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @returns Great Circle distance in nautical miles
     */
    function calculateGreatCircleDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        // Haversine formula for great circle distance
        // Using the same Earth radius as RL calculation for consistency
        const R = 60 * 180 / Math.PI; // 3437.7468 nautical miles
        
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
        
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + 
                  Math.cos(φ1) * Math.cos(φ2) * 
                  Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        
        return R * c;
    }

    /**
     * Calculate the initial bearing for a great circle route
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @returns Initial bearing in degrees (0-359)
     */
    function calculateGreatCircleBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const φ1 = toRadians(lat1);
        const φ2 = toRadians(lat2);
        const Δλ = toRadians(lon2 - lon1);
        
        const y = Math.sin(Δλ) * Math.cos(φ2);
        const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
        
        const bearing = toDegrees(Math.atan2(y, x));
        return (bearing + 360) % 360; // Normalize to 0-359 degrees
    }

    /**
     * Calculates the straight-line distance using simple approximation
     * This matches the straight-line route display used for RL legs
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @returns Distance in nautical miles
     */
    function calculateStraightLineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
        // Professional navigation rhumb line distance - matches OpenCPN, MaxSea, etc.
        // This is the standard formula used in marine navigation software
        
        // Convert to radians
        const lat1rad = lat1 * Math.PI / 180;
        const lat2rad = lat2 * Math.PI / 180;
        const dlat = (lat2 - lat1) * Math.PI / 180;
        let dlon = (lon2 - lon1) * Math.PI / 180;
        
        // Handle date line crossing
        if (Math.abs(dlon) > Math.PI) {
            dlon = dlon > 0 ? -(2 * Math.PI - dlon) : (2 * Math.PI + dlon);
        }
        
        // Calculate using exact rhumb line formula
        let distance;
        if (Math.abs(dlat) < 1e-6) {
            // E-W course
            distance = Math.abs(dlon) * Math.cos(lat1rad);
        } else {
            // General case
            const dphi = Math.log(Math.tan(lat2rad / 2 + Math.PI / 4) / Math.tan(lat1rad / 2 + Math.PI / 4));
            const q = dlat / dphi;
            distance = Math.sqrt(dlat * dlat + q * q * dlon * dlon);
        }
        
        // Convert to nautical miles using the exact conversion factor
        return distance * 60 * 180 / Math.PI; // This gives the same as R=3437.7468
    }

    /**
     * Calculate the bearing between two points using simple straight-line calculation
     * This matches the straight-line route display used for RL legs
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @returns Bearing in degrees (0-359)
    */
    function calculateStraightLineBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
        // Simple bearing calculation for straight lines
        const latDiff = lat2 - lat1;
        const lonDiff = (lon2 - lon1) * Math.cos(toRadians((lat1 + lat2) / 2)); // Adjust for latitude
        
        let bearing = toDegrees(Math.atan2(lonDiff, latDiff));
        return (bearing + 360) % 360; // Normalize to 0-359 degrees
    }

    /**
     * Calculate bearing based on leg type
     * @param lat1
     * @param lon1
     * @param lat2
     * @param lon2
     * @param legType 'GC' for great circle, 'RL' for rhumb line (default)
     * @returns Bearing in degrees (0-359)
     */
    function calculateBearingByLegType(lat1: number, lon1: number, lat2: number, lon2: number, legType?: string): number {
        if (legType === 'GC') {
            return calculateGreatCircleBearing(lat1, lon1, lat2, lon2);
        } else {
            // Default to 'RL' if not specified or explicitly 'RL'
            return calculateStraightLineBearing(lat1, lon1, lat2, lon2);
        }
    }

    function calculateRelativeBearing(vesselLat: number, vesselLon: number, vesselHeading: number, buoyLat: number, buoyLon: number): number {
        const trueBearing = calculateStraightLineBearing(vesselLat, vesselLon, buoyLat, buoyLon);
        const relativeBearing = trueBearing - vesselHeading;
        return (relativeBearing + 360) % 360;
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
            // Close any open leg editor modal
            closeLegEditorModal();
            
            if (isRouteLoaded) {
                saveGpxRoute();
                saveEditedGpx();
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
            
            // Remove all track polylines
            boatPath.forEach(polyline => polyline.remove());
            boatPath = [];
            
            projectionArrow?.remove();
            forecastIcon?.remove();
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
    /* Remove border between the first and second row in the Leg Editor modal table */
    .leg-editor-table tr:first-child th,
    .leg-editor-table tr:first-child td {
        border-bottom: none !important;
    }
    .leg-editor-table tr:nth-child(2) th,
    .leg-editor-table tr:nth-child(2) td {
        border-top: none !important;
    }
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
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
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

    h2 {
        text-align:center;
        margin: 0, 0, 0, 0;
        font-size: 24px;
        font-weight: bold;
        color: #333333;
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
    .modal-content {
        background: #fff;
        border-radius: 8px;
        padding: 24px 20px 16px 20px;
        min-width: 320px;
        max-width: 90vw;
        max-height: 90vh;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        position: relative;
    }
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }
    
    /* Leg Editor Modal Styles - High specificity */
    .leg-editor-overlay {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        background: rgba(0, 0, 0, 0.8) !important;
        z-index: 999999 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 20px !important;
        pointer-events: auto !important;
        visibility: visible !important;
        opacity: 1 !important;
    }
    
    .leg-editor-modal {
        background: white !important;
        color: black !important;
        border-radius: 12px !important;
        width: 95vw !important;
        max-width: 1200px !important;
        height: 85vh !important;
        overflow: hidden !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
        position: relative !important;
        display: flex !important;
        flex-direction: column !important;
        pointer-events: auto !important;
        visibility: visible !important;
        opacity: 1 !important;
        transform: none !important;
    }
    
    .leg-editor-header {
        padding: 20px 24px 16px 24px;
        border-bottom: 2px solid #eee;
        flex-shrink: 0;
    }
    
    .leg-editor-close {
        position: absolute;
        top: 16px;
        right: 20px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        z-index: 1;
    }
    
    .leg-editor-close:hover {
        color: #333;
    }
    
    .leg-editor-title {
        margin: 0;
        color: #333;
        font-size: 24px;
    }
    
    .leg-editor-subtitle {
        margin: 8px 0 0 0;
        color: #666;
        font-size: 14px;
    }
    
    .leg-editor-table-header {
        background: #f8f9fa;
        border-bottom: 2px solid #dee2e6;
        flex-shrink: 0;
    }
    
    .leg-editor-table-body {
        flex: 1;
        overflow-y: auto;
        background: white;
    }
    
    .leg-editor-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .leg-editor-header-cell {
        padding: 12px 8px;
        text-align: center;
        font-weight: bold;
        border-right: 1px solid #dee2e6;
        background: #e9ecef;
    }
    
    .leg-editor-row {
        border-bottom: 1px solid #dee2e6;
    }
    
    .leg-editor-row:hover {
        background: #f8f9fa;
    }
    
    .leg-editor-row-completed {
        background: #d4edda;
        border-bottom: 1px solid #c3e6cb;
    }
    
    .leg-editor-row-current {
        background: #fff3cd;
        border-bottom: 1px solid #ffeaa7;
        font-weight: bold;
    }
    
    .leg-editor-cell {
        padding: 10px 8px;
        border-right: 1px solid #dee2e6;
        font-size: 14px;
    }
    
    .leg-editor-footer {
        padding: 16px 24px;
        border-top: 2px solid #eee;
        background: #f8f9fa;
        flex-shrink: 0;
    }
    
    .leg-editor-save-btn {
        background: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
    }
    
    .leg-editor-save-btn:hover {
        background: #0056b3;
    }
</style>

