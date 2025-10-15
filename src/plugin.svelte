
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
            <li>📈 <strong>Track history</strong> - 30 days visual trail of your vessel's path recorded</li>
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
                    <div style="margin-bottom: 5px;">📡 <strong>Base Layer:</strong> AIS Base Stations (orange antenna icons)</div>
                    <div style="margin-bottom: 5px;">🌦️ <strong>Weather Layer:</strong> Meteorological Stations (blue weather icons)</div>
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
        aria-label="Back to menu"
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
      🆔 Vessel name: {vesselName} {isValidMMSI(myMMSI) ? '✅' : '❌ Invalid MMSI'}
    </p>
    <p class="mmsi-state">
      🆔 MMSI: {myMMSI} {isValidMMSI(myMMSI) ? '✅' : '❌ Invalid MMSI'}
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
        
        <div class="plugin__buttons__grid">
            <!-- Row 1: | empty | Center | Follow | empty | -->
            <div></div> <!-- Empty cell -->
            <button on:click={centerShip} title="Center on the vessel present position">📍 Center</button>
            <button on:click={toggleFollowShip} title="Follow the projected vessel">
                {followShip ? '🛑 Stop' : '▶️ Follow'}
            </button>
            <div></div> <!-- Empty cell -->
            
            <!-- Row 2: | empty | Show windy prediction (2 cols) | empty | -->
           
            <button id="button" on:click={showWeatherPopup} title="Display the weather tooltip" class="weather-prediction-button">{@html buttonText}</button>
            
            
            <!-- Row 3: | Rew | Fwd | Now | step | -->
            <button class="timeline-nav-button" on:click={() => moveTimelineBackward(parseInt(timelineStepHours))} title="Move timeline backward {timelineStepHours} hours">⏪ Rew</button>
            <button class="timeline-nav-button" on:click={() => moveTimelineForward(parseInt(timelineStepHours))} title="Move timeline forward {timelineStepHours} hours">Fwd ⏩</button>
            <button on:click={setTimelineNow} title="Set timeline to present time">⏰ Now</button>
            <select class="timeline-step-selector" id="timeline-step" bind:value={timelineStepHours} title="Timeline navigation step">
                <option value="1">1h</option>
                <option value="4">4h</option>
                <option value="8">8h</option>
                <option value="12">12h</option>
            </select>
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
            {#if routeMetadata.name}
                <p style="font-size: 12px; color: #0a0; margin: 2px 0;">
                    ✅ Loaded: {routeMetadata.name}
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
    import { getSpecialMarkSVG } from './AtoN';
    import { getAtoNWithLightSVG } from './AtoN';

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
    let timelineStepHours = "4"; // Timeline navigation step in hours (1, 4, 8, 12) - string to match select options
    
    // Follow ship throttling variables
    let lastFollowUpdateTime: number = 0; // Last time map view was updated for position following
    let lastTimelineFollowTime: number = 0; // Last time map view was updated for timeline changes
    let lastProjectionPosition: {lat: number, lon: number} | null = null; // Last projection position for comparison
    let vesselName = loadVesselName(); // Load from localStorage or default
    let vesselCallSign = loadVesselCallSign(); // Load from localStorage or default
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
    let emergencyDevices: { [mmsi: string]: any } = {}; // Store for emergency devices (SART, SAR aircraft)
    let baseStations: { [mmsi: string]: any } = {}; // Store for AIS base stations
    // Boat icon size control
    let boatIconSize: number = 1.0; // Default size multiplier (0.5 to 2.0)

    let myMMSI = loadVesselMMSI(); // Our own MMSI for comparison

    let unsubscribeTimeline: (() => void) | null = null; // Unsubscribe function for timeline updates
    let unsubscribeOverlay: (() => void) | null = null; // Unsubscribe function for overlay updates
    let projectionHours: number | null = null; // for projection
    let lastRouteProjection: {lat: number, lon: number, heading: number} | null = null;
    let lastFallbackProjection: {lat: number, lon: number, heading: number} | null = null;
    
    // Change detection variables for route projection optimization
    let lastProjectionSOG: number | null = null;
    let lastProjectionTargetTime: number | null = null;
    let lastProjectionRouteState: string = '';
    let userInitiatedTimelineChange: boolean = false;
    
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
    let gpxRoute: Array<{lat: number, lon: number, name?: string, time?: string | Date, passedTime?: Date, type?: string, plannedSpeed?: number}> = []; // Route waypoints
    let routeLayer: any = null; // Layer for displaying the route
    let atonLayer: any = null; // Layer for displaying AtoN markers
    let emergencyLayer: any = null; // Layer for displaying emergency devices (SART, SAR aircraft)
    let baseStationLayer: any = null; // Layer for displaying AIS base stations
    let meteoLayer: any = null; // Layer for displaying meteorological stations
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
    let zIndexBaseStations: number = 200; // AIS base stations
    let zIndexMeteo: number = 150; // Meteorological stations
    let zIndexAtoN: number = 100; // AtoN markers

    let helpVisible = false;
    let lastWakeTime = Date.now();
    let lastReconnectAttempt = 0; // Track last manual reconnection attempt

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
        
        // Initialize wake time after event listeners to prevent immediate triggers
        lastWakeTime = Date.now();
        
        // Load track history on plugin start
        loadShortTrackHistory();
        
        // Save AtoN data before page unload
        if (typeof window !== 'undefined') {
            window.addEventListener('beforeunload', () => {
                saveAtoNData(atonMarkers);
            });
        }
        
        // Force initial track display update (ignore throttling on startup)
        lastTrackDisplayUpdate = 0; // Reset to force update
        updateTrackDisplay();

        // --- Restore GPX route data ---
        // Priority 1: Try to load from parsed route data (contains passedTime and other runtime data)
        const routeLoaded = loadGpxRoute();
        
        // Priority 2: If no parsed route data, fall back to raw GPX file
        if (!routeLoaded) {
            const savedRawGpx = localStorage.getItem('windy-nmea-gpx-raw');
            if (savedRawGpx) {
                console.debug('No parsed route data found, restoring from raw GPX');
                // Use a placeholder filename if not available
                parseGpxMetadata(savedRawGpx, 'Restored.gpx');
                parseGpxRoute(savedRawGpx, 'Restored.gpx');
            }
        } else {
            console.debug('Restored route from parsed data (preserving passedTime)');
        }

        // Initialize route display and calculations if route is loaded
        if (isRouteLoaded) {
            calculateRouteDistance();
            // Initialize route on component load
            // updateRouteProgress();
            displayRoute();
        }

        // Initialize layers with proper z-index ordering        
        aisShipsLayer = createLayerGroup(map, zIndexAisShips); // Bottom layer: Other AIS ships
        baseStationLayer = createLayerGroup(map, zIndexBaseStations); // AIS base stations
        meteoLayer = createLayerGroup(map, zIndexMeteo); // Meteorological stations
        atonLayer = createLayerGroup(map, zIndexAtoN); // AtoN markers
        emergencyLayer = createLayerGroup(map, zIndexOwnShip + 100); // Emergency devices (SART, SAR) - high priority
        markerLayer = createLayerGroup(map, zIndexOwnShip); // Top layer: Your ship

        // Restore AtoN markers from previous session (after atonLayer is created)
        restoreAtoNMarkers();
        
        // Create test AtoN near Funchal for debugging (disabled - using real implementation)
        // createTestAtoNFunchal();

        // Add zoom event listener to center on vessel after zoom changes
        map.on('zoomend', () => {
            if (followShip) {
                // User manually changed zoom - immediately center on vessel position
                handleFollowShip(false, true); // Force immediate update
            }
            
            // Update AtoN icon sizes based on new zoom level
            updateAtoNIconSizes();
            
            // Update AIS ship name labels based on new zoom level
            updateAISShipNameLabels();
        });

        // Start cleanup timer for old AIS ships (every 5 minutes)
        setInterval(cleanupOldAISShips, 5 * 60 * 1000);
        
        // Start cleanup timer for old emergency devices (every 10 minutes)
        setInterval(cleanupOldEmergencyDevices, 10 * 60 * 1000);
        
        // Start cleanup timer for old base stations (every 30 minutes)
        setInterval(cleanupOldBaseStations, 30 * 60 * 1000);
        
        // Start cleanup timer for old AtoN markers (every 30 minutes)
        setInterval(cleanupOldAtoNMarkers, 30 * 60 * 1000);
        
        // Start the no frame detection timer
        startNoFrameTimer();
        
        // Démarrer le nettoyage des fragments AIS
        startFragmentCleanup();

        // Create initial socket connection
        createSocketConnection();

        // Subscribe to Windy timeline changes
        const unsub = store.on('timestamp', (ts: number) => {
            // This code will be executed on every timeline change
            
            // Use the rounded timestamp consistently for all timeline-based operations
            const roundedTimestamp = getRoundedHourTimestamp(ts);
            
            // Check if this was a user-initiated change to force recalculation
            const forceRecalculation = userInitiatedTimelineChange;
            if (userInitiatedTimelineChange) {
               // User-initiated timeline change detected, forcing recalculation
                userInitiatedTimelineChange = false; // Reset the flag
            }
            
            // Update projection for the rounded timeline timestamp
            // For automatic timeline updates, only recalculate if parameters changed
            updateProjectionForTimeline(roundedTimestamp, forceRecalculation);
            updateButtonText(roundedTimestamp);
            
            // Handle follow ship for timeline changes (immediate update when projection changes)
            handleFollowShip(true); // Timeline change
            
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
            const timeSinceLastWake = Date.now() - lastWakeTime;
            const timeSinceLastReconnect = Date.now() - lastReconnectAttempt;
            
            // Check actual connection state (both our flag and socket.io's state)
            const actuallyConnected = isConnected && socket && socket.connected;
            
            // Only reconnect if:
            // 1. More than 10 seconds since last wake detection AND
            // 2. Socket is actually disconnected (either our flag is false OR socket.io shows disconnected) AND
            // 3. Haven't attempted reconnection in the last 30 seconds (throttling)
            if (timeSinceLastWake > 10000 && 
                !actuallyConnected && 
                timeSinceLastReconnect > 30000) {
                console.debug('Detected wake from sleep or inactivity with disconnected socket, reconnecting...');
                lastReconnectAttempt = Date.now();
                createSocketConnection();
            } else if (timeSinceLastWake > 10000 && actuallyConnected) {
                // console.debug('Wake detected but socket is still connected, no reconnection needed');  // Commented out to reduce console noise
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
            if (wp.time) {
                const timeStr = wp.time instanceof Date ? wp.time.toISOString() : wp.time;
                gpx += `           <time>${timeStr}</time>\n`;
            }
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
                // Skip error reporting for NMEA format issues - too technical for users
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
     * Save vessel name to localStorage (only if changed)
    */
    function saveVesselName(name: string): void {
        try {
            // Check if the name has actually changed
            const currentStoredName = localStorage.getItem('windy-nmea-vessel-name');
            if (currentStoredName !== name) {
                localStorage.setItem('windy-nmea-vessel-name', name);
                console.debug('Vessel name saved:', name);
            }
            // No log message if name hasn't changed to avoid spam
        } catch (error) {
            console.warn('Failed to save vessel name to localStorage:', error);
        }
    }
    
    /**
     * Load vessel call sign from localStorage
    */
    function loadVesselCallSign(): string {
        try {
            const saved = localStorage.getItem('windy-nmea-vessel-callsign');
            return saved || '';
        } catch (error) {
            console.warn('Failed to load vessel call sign from localStorage:', error);
            return '';
        }
    }

    /**
     * Save vessel call sign to localStorage
    */
    function saveVesselCallSign(callSign: string): void {
        try {
            const currentStored = localStorage.getItem('windy-nmea-vessel-callsign');
            if (currentStored !== callSign) {
                localStorage.setItem('windy-nmea-vessel-callsign', callSign);
                console.debug('Vessel call sign saved:', callSign);
            }
        } catch (error) {
            console.warn('Failed to save vessel call sign to localStorage:', error);
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
     * Load AtoN data from localStorage
     */
    function loadAtoNData(): Record<string, any> {
        try {
            const saved = localStorage.getItem('windy-nmea-aton-data');
            if (saved) {
                const atonData = JSON.parse(saved);
                console.debug('Loaded AtoN data from localStorage:', Object.keys(atonData).length, 'markers');
                return atonData;
            }
        } catch (error) {
            console.warn('Failed to load AtoN data from localStorage:', error);
        }
        return {};
    }

    /**
     * Save AtoN data to localStorage
     */
    function saveAtoNData(atonData: Record<string, any>): void {
        try {
            // Only save the data portion, not the Leaflet markers
            const dataToSave: Record<string, any> = {};
            Object.keys(atonData).forEach(mmsi => {
                if (atonData[mmsi] && atonData[mmsi].data) {
                    dataToSave[mmsi] = atonData[mmsi].data;
                }
            });
            
            localStorage.setItem('windy-nmea-aton-data', JSON.stringify(dataToSave));
            console.debug('AtoN data saved to localStorage:', Object.keys(dataToSave).length, 'markers');
        } catch (error) {
            console.warn('Failed to save AtoN data to localStorage:', error);
        }
    }

    /**
     * Create test AtoN near Funchal for debugging light symbols
     */
    function createTestAtoNFunchal(): void {
        if (!atonLayer) {
            console.warn('Cannot create test AtoN: atonLayer not initialized');
            return;
        }

        // Funchal coordinates (approximately)
        const funchalLat = 32.0000;
        const funchalLon = -16.9000;
        
        // Create a test Cardinal North with light
        const testMMSI = "999999999";
        const atonType = 20; // Cardinal Mark N (floating)
        const name = "TEST CARDINAL N";
        const iconSize = calculateAtoNIconSize(map.getZoom());
        
        // Create test status with light conditions
        const testStatusMessages = ['Light ON']; // This should show light symbol
        const hasLight = atonHasLight(atonType, testStatusMessages, false);
        
        /*
        console.info(`*** TEST ATON DEBUG ***`);
        console.info(`Creating test AtoN: type=${atonType}, hasLight=${hasLight}, statusMessages=${JSON.stringify(testStatusMessages)}`);
        console.info(`AtoN location: ${funchalLat}, ${funchalLon} (near Funchal)`);
        console.info(`Icon size: ${iconSize}px`);
        */

        const atonIcon = createAtoNIcon(atonType, iconSize, hasLight, 'Test Light');
        const marker = L.marker([funchalLat, funchalLon], { 
            icon: atonIcon, 
            zIndexOffset: zIndexWaypoint 
        }).addTo(atonLayer);
        
        // Add a separate light indicator as HTML overlay for testing
        if (hasLight) {
            const lightOverlay = L.marker([funchalLat, funchalLon], {
                icon: L.divIcon({
                    html: '<div style="background: red; color: white; padding: 2px 4px; border-radius: 3px; font-size: 10px; font-weight: bold; margin-left: 20px; margin-top: -10px;">LIGHT</div>',
                    className: 'light-overlay',
                    iconSize: [40, 15],
                    iconAnchor: [0, 0]
                }),
                zIndexOffset: zIndexWaypoint + 10
            }).addTo(atonLayer);
            
            console.log('Added separate light overlay for test AtoN');
        }
        
        const tooltipContent = `
            <strong>TEST AtoN (Funchal)</strong><br>
            Name: ${name}<br>
            Type: Cardinal Mark N<br>
            Has Light: ${hasLight}<br>
            Status: Test Light<br>
            Lat: ${funchalLat.toFixed(5)}<br>
            Lon: ${funchalLon.toFixed(5)}
        `;
        
        marker.bindTooltip(tooltipContent, { 
            permanent: false, 
            direction: 'top',
            offset: [0, -iconSize - 5],
            className: 'aton-tooltip' 
        });
        
        // Store test AtoN data
        atonMarkers[testMMSI] = {
            marker: marker,
            statusLabel: null,
            data: {
                mmsi: testMMSI,
                lat: funchalLat,
                lon: funchalLon,
                name: name,
                atonType: atonType,
                atonTypeName: 'Cardinal Mark N',
                offPosition: 0,
                virtualAtoN: 0,
                statusText: 'Test Light',
                atonStatus: { statusMessages: testStatusMessages },
                lastUpdate: Date.now()
            }
        };
        
        // console.info(`Test AtoN created near Funchal: ${testMMSI}`);
        
        // Create a second test AtoN with different coordinates for comparison
        const testMMSI2 = "999999998";
        const atonType2 = 19; // Special mark
        const name2 = "TEST SPECIAL MARK";
        const testStatusMessages2 = ['Light OFF']; // Different status but still has light
        const hasLight2 = atonHasLight(atonType2, testStatusMessages2, false);
        
        // console.info(`Creating second test AtoN: type=${atonType2}, hasLight=${hasLight2}, statusMessages=${JSON.stringify(testStatusMessages2)}`);
        
        const atonIcon2 = createAtoNIcon(atonType2, iconSize, hasLight2, 'Test Light OFF');
        const marker2 = L.marker([funchalLat + 0.01, funchalLon + 0.01], { 
            icon: atonIcon2, 
            zIndexOffset: zIndexWaypoint 
        }).addTo(atonLayer);
        
        // Add a separate light indicator as HTML overlay for testing
        if (hasLight2) {
            const lightOverlay2 = L.marker([funchalLat + 0.01, funchalLon + 0.01], {
                icon: L.divIcon({
                    html: '<div style="background: orange; color: white; padding: 2px 4px; border-radius: 3px; font-size: 10px; font-weight: bold; margin-left: 20px; margin-top: -10px;">LIGHT OFF</div>',
                    className: 'light-overlay',
                    iconSize: [60, 15],
                    iconAnchor: [0, 0]
                }),
                zIndexOffset: zIndexWaypoint + 10
            }).addTo(atonLayer);
            
            console.log('Added separate light overlay for second test AtoN');
        }
        
        const tooltipContent2 = `
            <strong>TEST AtoN #2 (Special)</strong><br>
            Name: ${name2}<br>
            Type: Special Mark<br>
            Has Light: ${hasLight2}<br>
            Status: Test Light OFF<br>
            Lat: ${(funchalLat + 0.01).toFixed(5)}<br>
            Lon: ${(funchalLon + 0.01).toFixed(5)}
        `;
        
        marker2.bindTooltip(tooltipContent2, { 
            permanent: false, 
            direction: 'top',
            offset: [0, -iconSize - 5],
            className: 'aton-tooltip' 
        });
        
        // console.info(`Second test AtoN created: ${testMMSI2}`);
    }

    /**
     * Restore AtoN markers from saved data
     */
    function restoreAtoNMarkers(): void {
        if (!atonLayer) {
            console.warn('Cannot restore AtoN markers: atonLayer not initialized');
            return;
        }
        
        const savedAtoNData = loadAtoNData();
        let restoredCount = 0;
        
        Object.keys(savedAtoNData).forEach(mmsi => {
            const atonData = savedAtoNData[mmsi];
            if (atonData && atonData.lat !== undefined && atonData.lon !== undefined) {
                try {
                    // Calculate icon size based on current zoom level
                    const currentZoom = map.getZoom();
                    const iconSize = calculateAtoNIconSize(currentZoom);
                    
                    // Check if AtoN has a light based on new default assumption logic
                    const statusMessages = atonData.statusText ? atonData.statusText.split(', ') : [];
                    const hasLight = atonHasLight(atonData.atonType, statusMessages, atonData.virtualAtoN === 1);
                    const atonIcon = createAtoNIcon(atonData.atonType, iconSize, hasLight, atonData.statusText || '');
                    const marker = L.marker([atonData.lat, atonData.lon], { 
                        icon: atonIcon, 
                        zIndexOffset: zIndexWaypoint 
                    }).addTo(atonLayer);
                    
                    // Add status label for critical conditions
                    let statusLabel = null;
                    let statusLabelText = '';
                    let statusColor = '';
                    
                    // Determine what status label to show based on stored data
                    if (atonData.offPosition === 1 || (atonData.statusText && atonData.statusText.includes('Off Position'))) {
                        statusLabelText = 'Off Pstn';
                        statusColor = 'rgba(255,0,0,0.8)';
                    } else if (atonData.statusText && atonData.statusText.includes('Light OFF')) {
                        statusLabelText = 'Light OFF';
                        statusColor = 'rgba(255,165,0,0.8)';
                    } else if (atonData.statusText && atonData.statusText.includes('Light Error')) {
                        statusLabelText = 'Light Error';
                        statusColor = 'rgba(255,165,0,0.8)';
                    } else if (atonData.statusText && atonData.statusText.includes('Racon OFF')) {
                        statusLabelText = 'Racon OFF';
                        statusColor = 'rgba(255,165,0,0.8)';
                    } else if (atonData.statusText && atonData.statusText.includes('Racon Error')) {
                        statusLabelText = 'Racon Error';
                        statusColor = 'rgba(255,165,0,0.8)';
                    }
                    
                    if (statusLabelText) {
                        const statusTextIcon = L.divIcon({
                            className: 'aton-status-label',
                            html: `<div style="background: ${statusColor}; color: white; padding: 2px 6px; border-radius: 3px; font-size: 10px; font-weight: bold; text-align: center; white-space: nowrap;">${statusLabelText}</div>`,
                            iconSize: [Math.max(50, statusLabelText.length * 7), 15],
                            iconAnchor: [Math.max(25, statusLabelText.length * 3.5), 0]
                        });
                        statusLabel = L.marker([atonData.lat, atonData.lon], { icon: statusTextIcon, zIndexOffset: zIndexWaypoint + 1 }).addTo(atonLayer);
                    }
                    
                    // Add light indicator if AtoN has a light
                    let lightIndicator = null;
                    if (hasLight) {
                        const lightSize = Math.max(24, Math.floor(iconSize * 2)); // Make it bigger for the teardrop
                        
                        // Use the official maritime light symbol (teardrop/flame shape)
                        const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg"
                                            width="${lightSize}px"
                                            height="${lightSize}px" 
                                            viewBox="0 0 320 320">
                                            <g transform="rotate(-90 160 160)">
                                            <path d="M 131.60087,181.31159 L 69.97299,257.62001 L 65.44288,263.19827 L 59.885447,267.42201 L 52.986033,269.53125 L 45.663807,269.42153 L 38.851616,267.12524 L 33.104189,262.78791 L 28.902861,256.70061 L 26.677963,249.64945 L 26.834933,242.67425 L 29.567773,236.58472 L 34.162548,231.27636 L 39.756076,226.40835 L 40.930254,225.46186 L 131.60087,181.31159 z M 159.60212,156.05108 C 161.79918,155.83146 163.76054,157.43633 163.98017,159.63337 C 164.19979,161.83043 162.59492,163.79179 160.39788,164.01142 C 158.20082,164.23104 156.23946,162.62617 156.01983,160.42913 C 155.80021,158.23207 157.40508,156.27071 159.60212,156.05108 z"
                                            style="fill:#a30075;fill-opacity:0.5;fill-rule:evenodd;stroke:none"/>
                                          </svg>`;
                        
                        const lightIcon = L.divIcon({
                            className: 'aton-light-indicator',
                            html: lightSvg,
                            iconSize: [lightSize, lightSize],
                            iconAnchor: [lightSize/2, lightSize/2], // Position at bottom-center of AtoN
                            popupAnchor: [0, 0]
                        });
                        
                        // Position light indicator at same coordinates as AtoN, offset by iconAnchor
                        lightIndicator = L.marker([atonData.lat, atonData.lon], { 
                            icon: lightIcon,
                            interactive: false, // Prevent interference with AtoN clicks
                            zIndexOffset: zIndexWaypoint + 5
                        }).addTo(atonLayer);
                    }
                    
                    const tooltipContent = `
                        <strong>AtoN</strong><br>
                        Name: ${atonData.name}<br>
                        Type: ${atonData.atonTypeName}<br>
                        ${atonData.statusText ? `Status: ${atonData.statusText}<br>` : ''}
                        Lat: ${displayLatitude(atonData.lat)}<br>
                        Lon: ${displayLongitude(atonData.lon)}
                    `;
                    
                    marker.bindTooltip(tooltipContent, { 
                        permanent: false, 
                        direction: 'top', 
                        className: 'aton-tooltip' 
                    });
                    
                    // Store AtoN marker data for zoom-based resizing
                    atonMarkers[mmsi] = {
                        marker: marker,
                        statusLabel: statusLabel,
                        lightIndicator: lightIndicator,
                        data: atonData
                    };
                    
                    restoredCount++;
                    // console.debug('Restored AtoN marker:', atonData.name, 'at', atonData.lat, atonData.lon);
                } catch (error) {
                    console.warn('Failed to restore AtoN marker for MMSI', mmsi, ':', error);
                }
            } else {
                console.warn('Invalid AtoN data for MMSI', mmsi, '- missing coordinates:', atonData);
            }
        });
        
        if (restoredCount > 0) {
            console.debug(`Successfully restored ${restoredCount} AtoN markers from previous session`);
        } else if (Object.keys(savedAtoNData).length > 0) {
            console.warn(`Failed to restore any AtoN markers from ${Object.keys(savedAtoNData).length} saved entries`);
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
            // console.debug(`Track point saved: ${shortTrackHistory.length} points (${actualHistoryDays.toFixed(2)} days history)`);
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
        // console.debug(`Track history loaded: ${shortTrackHistory.length} points (${TRACK_HISTORY_DAYS} days retention)`);
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
                    // console.debug(`Track gap detected: ${(timeDiff / (60 * 1000)).toFixed(1)} minutes between points`);
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
        
        // console.debug(`Track display updated: ${trackSegments.length} segments from ${shortTrackHistory.length} points`);
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
                        time: wp.time ? (wp.time instanceof Date ? wp.time.toISOString() : wp.time) : null,
                        passedTime: wp.passedTime ? (wp.passedTime instanceof Date ? wp.passedTime.toISOString() : wp.passedTime) : null,
                        type: wp.type
                    })),
                    fileName: routeFileName,
                    startTime: routeStartTime ? routeStartTime.toISOString() : null,
                    distance: routeDistance,
                    showWaypoints: showRouteWaypoints,
                    metadata: routeMetadata
                };
                localStorage.setItem('windy-nmea-gpx-route', JSON.stringify(routeData));
                
                // Also update the raw GPX with current state including passedTime
                updateRawGpxStorage();
                
                console.debug(`GPX route saved: ${routeFileName} with ${gpxRoute.length} waypoints and metadata:`, routeMetadata);
            }
        } catch (error) {
            console.warn('Failed to save GPX route to localStorage:', error);
        }
    }

    /**
     * Update the raw GPX storage with current route state including passedTime
     */
    function updateRawGpxStorage(): void {
        try {
            if (!isRouteLoaded || gpxRoute.length === 0) return;
            
            // Generate updated GPX XML with current state
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
                if (wp.time) {
                    const timeStr = wp.time instanceof Date ? wp.time.toISOString() : wp.time;
                    gpx += `           <time>${timeStr}</time>\n`;
                }
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
            
            // Update raw GPX storage
            localStorage.setItem('windy-nmea-gpx-raw', gpx);
            console.debug('Raw GPX storage updated with current route state');
        } catch (error) {
            console.warn('Failed to update raw GPX storage:', error);
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

                // Restore route metadata if available
                if (routeData.metadata) {
                    routeMetadata = { ...routeData.metadata };
                } else {
                    // Initialize empty metadata if not saved
                    routeMetadata = {};
                }

                // Set route as loaded and active
                isRouteLoaded = true;
                routeProjectionActive = true;
                forceRouteProjectionRecalculation(); // Force recalculation when route is loaded

                // Reset waypoint indices only if no current position available
                if (!lastLatitude || !lastLongitude) {
                    nextWaypointIndex = 0;
                } else {
                    // Calculate proper waypoint indices based on current position
                    updateRouteProgress();
                }

                console.debug(`GPX route loaded: ${routeFileName} with ${gpxRoute.length} waypoints and metadata:`, routeMetadata);
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
                buttonText = `🌬️ Show ${myOverlay} prediction (in ${formatDuration(projectionHours)})`;
            } else {
                let hours = 0;
                if (routeStartTime) {
                    if (routeStartTime.getTime() > Date.now()) {
                        hours = (ts - routeStartTime.getTime()) / (3600 * 1000);
                        if (hours < 0) {
                            buttonText = `🌬️ Show ${myOverlay} prediction<br>(${formatDuration(-hours)} before route start)`;
                        } else {
                            buttonText = `🌬️ Show ${myOverlay} prediction<br>(${formatDuration(hours)} after route start)`;
                        }
                    } else {
                        hours = (ts - Date.now()) / (3600 * 1000);
                        buttonText = `🌬️ Show ${myOverlay} prediction (in ${formatDuration(hours)})`;
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
        // Store to localStorage
        localStorage.setItem('testCOG', target.value);
    }

    /**
     * Handles SOG input changes
     * @param event - The input change event
    */
    function handleSOGInput(event: Event) {
        const target = event.target as HTMLInputElement;
        testSOG = parseFloat(target.value) || 0;
        // Store to localStorage
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
        (window as any).modalDisplayLatitude = displayLatitude;
        (window as any).modalDisplayLongitude = displayLongitude;

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
            max-width: 1400px !important;
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
                    <th style="padding: 12px 8px; text-align: left; font-weight: bold; border-right: 1px solid #dee2e6; width: 180px;">From</th>
                    <th style="padding: 12px 8px; text-align: left; font-weight: bold; border-right: 1px solid #dee2e6; width: 180px;">To</th>
                    <th style="padding: 12px 8px; text-align: center; font-weight: bold; border-right: 1px solid #dee2e6; width: 80px;">Distance (NM)</th>
                    <th style="padding: 12px 8px; text-align: center; font-weight: bold; border-right: 1px solid #dee2e6; width: 90px;">Speed (kts)</th>
                    <th style="padding: 12px 8px; text-align: center; font-weight: bold; border-right: 1px solid #dee2e6; width: 80px;">Type</th>
                    <th style="padding: 12px 8px; text-align: center; font-weight: bold; border-right: 1px solid #dee2e6; width: 160px;">ETA</th>
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
            overflow-x: auto;
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
            
            // Calculate intended speed based on time difference
            let speedText = '-';
            let speedValue = 5.0; // Default speed in knots
            if (wp.time && nextWp.time) {
                const timeDiffMs = new Date(nextWp.time).getTime() - new Date(wp.time).getTime();
                const timeDiffHours = timeDiffMs / (1000 * 60 * 60);
                if (timeDiffHours > 0) {
                    speedValue = distance / timeDiffHours;
                    speedText = speedValue.toFixed(1);
                    // Store calculated speed for future reference
                    wp.plannedSpeed = speedValue;
                } else {
                    speedText = '-';
                }
            } else if (i >= nextWaypointIndex && wp.plannedSpeed) {
                // Use stored planned speed for future legs
                speedValue = wp.plannedSpeed;
                speedText = speedValue.toFixed(1);
            } else if (i >= nextWaypointIndex) {
                // Initialize default speed for future legs that don't have one
                wp.plannedSpeed = speedValue;
                speedText = speedValue.toFixed(1);
            }
            
            // Format ETA
            let etaText = '-';
            let etaInputValue = '';
            let etaDateValue = null;
            if (i < nextWaypointIndex && wp.time) {
                etaText = (window as any).modalFormatDateTime(wp.time);
                etaDateValue = wp.time instanceof Date ? wp.time : new Date(wp.time);
            } else if (waypointETAs && waypointETAs[i - nextWaypointIndex]) {
                etaDateValue = new Date(waypointETAs[i - nextWaypointIndex].eta);
                etaText = (window as any).modalFormatDateTime(etaDateValue);
            } else if (nextWp.time) {
                etaDateValue = nextWp.time instanceof Date ? nextWp.time : new Date(nextWp.time);
                etaText = (window as any).modalFormatDateTime(etaDateValue);
            }
            
            // Create datetime-local input value (ISO format without timezone)
            if (etaDateValue && !isNaN(etaDateValue.getTime())) {
                // Use toISOString and remove the 'Z' and seconds part for datetime-local format
                const isoString = etaDateValue.toISOString();
                etaInputValue = isoString.slice(0, 16); // YYYY-MM-DDTHH:MM format
            }
            
            // Format passed time
            let passedTimeText = '-';
            if (wp.passedTime && wp.passedTime instanceof Date) {
                passedTimeText = (window as any).modalFormatDateTime(wp.passedTime);
            }
            
            tableRows += `
                <tr style="${rowStyle}">
                    <td style="padding: 10px 8px; text-align: center; border-right: 1px solid #dee2e6; font-size: 14px; width: 40px;">${i}</td>
                    <td style="padding: 10px 8px; text-align: left; border-right: 1px solid #dee2e6; font-size: 14px; width: 180px; overflow: hidden; text-overflow: ellipsis;">
                        <div style="font-weight: bold;">${wp.name || `WP ${i}`}</div>
                        <div style="font-size: 11px; color: #6c757d; line-height: 1.2;">
                            &phi;: ${(window as any).modalDisplayLatitude(wp.lat)} &nbsp;&nbsp;&nbsp; &lambda;: ${(window as any).modalDisplayLongitude(wp.lon)}
                        </div>
                    </td>
                    <td style="padding: 10px 8px; text-align: left; border-right: 1px solid #dee2e6; font-size: 14px; width: 180px; overflow: hidden; text-overflow: ellipsis;">
                        <div style="font-weight: bold;">${nextWp.name || `WP ${i + 1}`}</div>
                        <div style="font-size: 11px; color: #6c757d; line-height: 1.2;">
                            &phi;: ${(window as any).modalDisplayLatitude(nextWp.lat)} &nbsp;&nbsp;&nbsp; &lambda;: ${(window as any).modalDisplayLongitude(nextWp.lon)}
                        </div>
                    </td>
                    <td style="padding: 10px 8px; text-align: center; border-right: 1px solid #dee2e6; font-size: 14px; font-weight: bold; color: #495057; width: 80px;">${distance.toFixed(2)}</td>
                    <td style="padding: 10px 8px; text-align: center; border-right: 1px solid #dee2e6; width: 90px;">
                        <input type="number" step="0.1" min="0.1" max="50" value="${speedValue.toFixed(1)}" 
                               onchange="updateLegSpeed(${i}, parseFloat(this.value))" 
                               style="width: 70px; padding: 4px 6px; border: 1px solid #ced4da; border-radius: 4px; text-align: center; font-size: 13px;"
                               ${i < nextWaypointIndex ? 'disabled' : ''}>
                    </td>
                    <td style="padding: 10px 8px; text-align: center; border-right: 1px solid #dee2e6; width: 80px;">
                        <select onchange="updateLegType(${i}, this.value)" style="padding: 4px 8px; border: 1px solid #ced4da; border-radius: 4px; background: white; font-size: 14px;">
                            <option value="RL" ${legType === 'RL' ? 'selected' : ''}>R-L</option>
                            <option value="GC" ${legType === 'GC' ? 'selected' : ''}>G-C</option>
                        </select>
                    </td>
                    <td style="padding: 10px 8px; text-align: center; border-right: 1px solid #dee2e6; font-size: 13px; color: #6c757d; width: 160px;">
                        ${i >= nextWaypointIndex && etaInputValue ? 
                            `<input type="datetime-local" value="${etaInputValue}" 
                                    onchange="updateWaypointETA(${i + 1}, this.value)" 
                                    style="width: 150px; padding: 2px 4px; border: 1px solid #ced4da; border-radius: 4px; font-size: 12px;">` 
                            : etaText}
                    </td>
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

        // Function to update leg speed and recalculate ETAs
        (window as any).updateLegSpeed = (legIndex: number, newSpeed: number) => {
            // console.debug(`updateLegSpeed called: leg ${legIndex}, speed: ${newSpeed} kts`);
            
            if (!gpxRoute[legIndex] || !gpxRoute[legIndex + 1] || newSpeed <= 0) {
                console.debug(`Cannot update leg ${legIndex}: invalid parameters`);
                return;
            }
            
            const wp = gpxRoute[legIndex];
            const nextWp = gpxRoute[legIndex + 1];
            
            // Store the planned speed for this leg
            wp.plannedSpeed = newSpeed;
            
            // Calculate distance for this leg
            const legType = wp.type || 'RL';
            let distance;
            if (legType === 'GC') {
                distance = (window as any).modalCalculateGreatCircleDistance(wp.lat, wp.lon, nextWp.lat, nextWp.lon);
            } else {
                distance = (window as any).modalCalculateStraightLineDistance(wp.lat, wp.lon, nextWp.lat, nextWp.lon);
            }
            
            // Calculate time needed for this leg (in milliseconds)
            const timeNeededHours = distance / newSpeed;
            const timeNeededMs = timeNeededHours * 60 * 60 * 1000;
            
            // Get current waypoint time (either actual time if passed, or estimated)
            let currentTime;
            if (legIndex < nextWaypointIndex && wp.time) {
                currentTime = new Date(wp.time);
            } else if (legIndex === 0 && routeStartTime) {
                currentTime = new Date(routeStartTime);
            } else {
                // Use previous waypoint ETA + time to this waypoint
                currentTime = (window as any).getWaypointETA(legIndex);
            }
            
            if (currentTime) {
                // Calculate new ETA for next waypoint
                const newETA = new Date(currentTime.getTime() + timeNeededMs);
                
                // Update the waypoint time
                nextWp.time = newETA.toISOString();
                
                // Trigger reactivity
                gpxRoute = [...gpxRoute];
                
                // Recalculate all subsequent ETAs
                (window as any).recalculateETAsFromWaypoint(legIndex + 1);
                
                // Save changes
                saveGpxRoute();
                
                console.debug(`Updated leg ${legIndex} speed to ${newSpeed} kts, new ETA: ${newETA}`);
                
                // Update the modal display
                (window as any).refreshModalETAs();
            }
        };

        // Function to update waypoint ETA and recalculate speeds/ETAs
        (window as any).updateWaypointETA = (waypointIndex: number, newETAString: string) => {
            // console.debug(`updateWaypointETA called: waypoint ${waypointIndex}, ETA: ${newETAString}`);
            
            if (!gpxRoute[waypointIndex] || waypointIndex < nextWaypointIndex) {
                console.debug(`Cannot update waypoint ${waypointIndex}: invalid or already passed`);
                return;
            }
            
            const newETA = new Date(newETAString);
            if (isNaN(newETA.getTime())) {
                console.debug(`Invalid ETA string: ${newETAString}`);
                return;
            }
            
            console.debug(`Setting waypoint ${waypointIndex} ETA to: ${newETA}`);
            
            // Update the waypoint time
            gpxRoute[waypointIndex].time = newETA.toISOString();
            
            // Recalculate speed for the previous leg
            if (waypointIndex > 0) {
                const prevWp = gpxRoute[waypointIndex - 1];
                const currentWp = gpxRoute[waypointIndex];
                
                // Get previous waypoint ETA
                let prevETA;
                if (waypointIndex - 1 < nextWaypointIndex && prevWp.time) {
                    prevETA = new Date(prevWp.time);
                } else {
                    prevETA = (window as any).getWaypointETA(waypointIndex - 1);
                }
                
                if (prevETA) {
                    // Calculate time difference
                    const timeDiffMs = newETA.getTime() - prevETA.getTime();
                    const timeDiffHours = timeDiffMs / (1000 * 60 * 60);
                    
                    if (timeDiffHours > 0) {
                        // Calculate distance for the leg
                        const legType = prevWp.type || 'RL';
                        let distance;
                        if (legType === 'GC') {
                            distance = (window as any).modalCalculateGreatCircleDistance(prevWp.lat, prevWp.lon, currentWp.lat, currentWp.lon);
                        } else {
                            distance = (window as any).modalCalculateStraightLineDistance(prevWp.lat, prevWp.lon, currentWp.lat, currentWp.lon);
                        }
                        
                        // Calculate and store new speed
                        const newSpeed = distance / timeDiffHours;
                        prevWp.plannedSpeed = newSpeed;
                        
                        console.debug(`Updated waypoint ${waypointIndex} ETA, calculated speed for leg ${waypointIndex - 1}: ${newSpeed.toFixed(1)} kts`);
                    }
                }
            }
            
            // Trigger reactivity
            gpxRoute = [...gpxRoute];
            
            // Recalculate all subsequent ETAs
            (window as any).recalculateETAsFromWaypoint(waypointIndex);
            
            // Save changes
            saveGpxRoute();
            
            // Update the modal display
            (window as any).refreshModalETAs();
        };

        // Helper function to get waypoint ETA
        (window as any).getWaypointETA = (waypointIndex: number) => {
            if (waypointIndex < 0 || waypointIndex >= gpxRoute.length) {
                return new Date(); // Fallback to current time
            }
            
            const wp = gpxRoute[waypointIndex];
            
            // If this waypoint has a time, use it
            if (wp.time) {
                return new Date(wp.time);
            }
            
            // If this is the first waypoint and we have departure time, use it
            if (waypointIndex === 0 && routeStartTime) {
                return new Date(routeStartTime);
            }
            
            // For other waypoints, calculate based on previous waypoint
            if (waypointIndex > 0) {
                const prevWp = gpxRoute[waypointIndex - 1];
                const prevETA = (window as any).getWaypointETA(waypointIndex - 1);
                
                if (prevWp.plannedSpeed && prevWp.plannedSpeed > 0) {
                    // Calculate distance to current waypoint
                    const legType = prevWp.type || 'RL';
                    let distance;
                    if (legType === 'GC') {
                        distance = (window as any).modalCalculateGreatCircleDistance(prevWp.lat, prevWp.lon, wp.lat, wp.lon);
                    } else {
                        distance = (window as any).modalCalculateStraightLineDistance(prevWp.lat, prevWp.lon, wp.lat, wp.lon);
                    }
                    
                    // Calculate time needed
                    const timeNeededHours = distance / prevWp.plannedSpeed;
                    const timeNeededMs = timeNeededHours * 60 * 60 * 1000;
                    
                    return new Date(prevETA.getTime() + timeNeededMs);
                }
            }
            
            return new Date(); // Fallback to current time
        };

        // Helper function to recalculate ETAs from a specific waypoint onwards
        (window as any).recalculateETAsFromWaypoint = (startIndex: number) => {
            for (let i = startIndex; i < gpxRoute.length - 1; i++) {
                const wp = gpxRoute[i];
                const nextWp = gpxRoute[i + 1];
                
                if (!wp.plannedSpeed) continue;
                
                // Calculate distance
                const legType = wp.type || 'RL';
                let distance;
                if (legType === 'GC') {
                    distance = (window as any).modalCalculateGreatCircleDistance(wp.lat, wp.lon, nextWp.lat, nextWp.lon);
                } else {
                    distance = (window as any).modalCalculateStraightLineDistance(wp.lat, wp.lon, nextWp.lat, nextWp.lon);
                }
                
                // Get current waypoint ETA
                const currentETA = (window as any).getWaypointETA(i);
                
                // Calculate time needed
                const timeNeededHours = distance / wp.plannedSpeed;
                const timeNeededMs = timeNeededHours * 60 * 60 * 1000;
                
                // Set next waypoint ETA
                const nextETA = new Date(currentETA.getTime() + timeNeededMs);
                nextWp.time = nextETA.toISOString();
            }
        };

        // Function to refresh ETA displays in the modal
        (window as any).refreshModalETAs = () => {
            const modal = document.getElementById('leg-editor-modal-external');
            if (!modal) return;
            
            const rows = modal.querySelectorAll('tbody tr');
            rows.forEach((row, index) => {
                const etaCell = (row as HTMLTableRowElement).cells[6]; // ETA column is 7th (index 6)
                const speedCell = (row as HTMLTableRowElement).cells[4]; // Speed column is 5th (index 4)
                
                if (etaCell && speedCell) {
                    const wp = gpxRoute[index];
                    const nextWp = gpxRoute[index + 1];
                    
                    if (wp && nextWp) {
                        // Update speed display
                        const speedInput = speedCell.querySelector('input') as HTMLInputElement;
                        if (speedInput && wp.plannedSpeed) {
                            speedInput.value = wp.plannedSpeed.toFixed(1);
                        }
                        
                        // Update ETA display
                        if (index >= nextWaypointIndex) {
                            const etaInput = etaCell.querySelector('input') as HTMLInputElement;
                            if (etaInput) {
                                let etaDate;
                                if (nextWp.time) {
                                    etaDate = new Date(nextWp.time);
                                } else {
                                    etaDate = (window as any).getWaypointETA(index + 1);
                                }
                                
                                if (etaDate && !isNaN(etaDate.getTime())) {
                                    const isoString = etaDate.toISOString();
                                    etaInput.value = isoString.slice(0, 16); // YYYY-MM-DDTHH:MM format
                                }
                            }
                        }
                    }
                }
            });
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
                        // console.debug(`AIS message assembled from ${total} fragments: ${fragKey}`);
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
            //console.warn(`Position jump detected: ${distance.toFixed(3)}km > ${maxJump.toFixed(3)}km limit. SOG: ${sog || 'unknown'} knots. Rejecting position.`);
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
            console.debug("Invalid NMEA frame format:", data);
            return null;
        }
        
        // Validate NMEA checksum (silently fail if invalid)
        if (!validateNMEAChecksum(data)) {
            console.debug("NMEA checksum validation failed for:", data);
            return null;
        }    
        
        // Add frame to history
        addToNmeaHistory(data);
        
        const parts = data.split(',');
        let frameType: string | null = null; // Track which frame type was processed

        // Decoding classic GPS frames
        if (parts[0].includes('GLL')) {
            if (parts.length < 6) {
                console.debug("Invalid GLL frame - insufficient parts");
                return null;
            }
            if (parts[6] === 'V') {
                console.debug("Invalid GLL frame - status invalid");
                return null;
            }
            const parsedLat = parseFloat(parts[1]);
            const parsedLon = parseFloat(parts[3]);
            if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLon)) {
                console.debug("Invalid GLL frame - invalid coordinates");
                return null;
            }
            latitudesal = parsedLat;
            latDirection = parts[2];
            longitudesal = parsedLon;
            lonDirection = parts[4];
            frameType = 'GLL';
        } else if (parts[0].includes('GGA')) {
            if (parts.length < 7) {
                console.debug("Invalid GGA frame - insufficient parts");
                return null;
            }
            if (parts[6] === '0' || parts[6] === 'V') {
                console.debug("Invalid GGA frame - no GPS fix");
                return null;
            }
            const parsedLat = parseFloat(parts[2]);
            const parsedLon = parseFloat(parts[4]);
            if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLon)) {
                console.debug("Invalid GGA frame - invalid coordinates");
                return null;
            }
            latitudesal = parsedLat;
            latDirection = parts[3];
            longitudesal = parsedLon;
            lonDirection = parts[5];
            frameType = 'GGA';
        } else if (parts[0].includes('RMC')) {
            if (parts.length < 9) {
                console.debug("Invalid RMC frame - insufficient parts", data);
                return null;
            }
            if (parts[2] === 'V') {
                console.debug("Invalid RMC frame - status invalid");
                return null;
            }
            const parsedLat = parseFloat(parts[3]);
            const parsedLon = parseFloat(parts[5]);
            if (!Number.isFinite(parsedLat) || !Number.isFinite(parsedLon)) {
                console.debug("Invalid RMC frame - invalid coordinates");
                return null;
            }
            latitudesal = parsedLat;
            latDirection = parts[4];
            longitudesal = parsedLon;
            lonDirection = parts[6];
            speedOverGround = parseFloat(parts[7]);
            courseOverGroundT = parseFloat(parts[8]);
            frameType = 'RMC';
        } else if (parts[0].includes('VTG')) {
            if (parts.length < 6) {
                console.debug("Invalid VTG frame - insufficient parts");
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
        } else if (parts[0].includes('HDG')) {
            if (parts.length < 5) {
                console.debug("Invalid HDG frame - insufficient parts");
                return null;
            }
            // HDG contains magnetic course and variation (not used in current implementation)
            frameType = 'HDG';
        } else if (parts[0].includes('HDT')) {
            if (parts.length < 2) {
                console.debug("Invalid HDT frame - insufficient parts");
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
                    console.debug("Invalid coordinates - frame rejected");
                    return frameType;
                }
                
                // Pass speed if available for better validation
                const currentSpeed = speedOverGround && !Number.isNaN(speedOverGround) ? speedOverGround : undefined;
                if (!validatePositionJump(latitude, longitude, currentSpeed)) {
                    console.debug("Position jump detected - frame rejected");
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
                console.debug("Invalid AIS VDO frame - insufficient parts");
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
                console.debug("Invalid AIS AIVDM frame - insufficient parts");
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
     * Determine vessel size category based on length
     * @param {number} length - Vessel length in meters
     * @returns {string} Size category
     */
    function getVesselSizeCategory(length: number): string {
        if (!length || length <= 0) return 'unknown';
        if (length < 50) return 'small';      // <50m
        if (length < 100) return 'medium';    // 50-100m
        if (length < 200) return 'large';     // 100-200m
        if (length < 300) return 'xlarge';    // 200-300m
        return 'xxlarge';                     // 300m+
    }

    /**
     * Calculate proportional icon size based on vessel length
     * @param {number} length - Vessel length in meters
     * @param {number} baseSize - Base icon size
     * @returns {number} Calculated icon size
     */
    function getProportionalIconSize(length: number, baseSize: number = 24): number {
        if (!length || length <= 0) return baseSize;
        
        // Size mapping similar to Marine Traffic
        if (length < 50) return Math.max(16, baseSize * 0.7);      // Small vessels
        if (length < 100) return baseSize;                         // Medium vessels (base size)
        if (length < 200) return Math.max(32, baseSize * 1.3);     // Large vessels
        if (length < 300) return Math.max(40, baseSize * 1.6);     // XLarge vessels
        return Math.max(48, baseSize * 2);                         // XXLarge vessels (300m+)
    }

    /**
     * Create Marine Traffic-style vessel icon based on length and type
     * @param {number} heading - Vessel heading in degrees
     * @param {string} color - Icon color
     * @param {number} length - Vessel length in meters
     * @param {number} beam - Vessel beam in meters
     * @param {boolean} classB - Whether this is a Class B vessel
     * @param {number} baseSize - Base icon size
     * @returns {any} Leaflet icon
     */
    function createMarineTrafficIcon(heading: number, color: string, length: number = 0, beam: number = 0, classB: boolean = false, baseSize: number = 24): any {
        const validHeading = Number.isFinite(heading) ? heading : 0;
        const category = getVesselSizeCategory(length);
        const iconSize = getProportionalIconSize(length, baseSize);
        
        // Calculate vessel dimensions for display (proportional to length)
        const vesselLength = Math.max(iconSize * 0.8, 12);
        const vesselWidth = Math.max(vesselLength * 0.25, 4);
        
        const classLabel = classB ? 'B' : 'A';
        const labelSize = Math.max(8, iconSize * 0.4);
        
        const iconHtml = `
            <div class="marine-traffic-icon" style="
                width: ${iconSize}px; 
                height: ${iconSize}px; 
                display: flex;
                justify-content: center;
                align-items: center;
            ">
                <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 ${iconSize} ${iconSize}" style="
                    transform: rotate(${validHeading}deg);
                    transform-origin: center center;
                ">
                    <!-- Vessel hull outline -->
                    <path d="M${iconSize/2},2 
                             L${iconSize/2 + vesselWidth/2},${iconSize-4}
                             L${iconSize/2 - vesselWidth/2},${iconSize-4}
                             Z" 
                          fill="${color}" 
                          stroke="#000" 
                          stroke-width="0.5"/>
                    
                    <!-- Vessel class label -->
                    <text x="${iconSize/2}" y="${iconSize/2 + labelSize/3}" 
                          text-anchor="middle" 
                          font-size="${labelSize}" 
                          fill="#fff" 
                          stroke="#000"
                          stroke-width="0.3"
                          font-weight="bold" 
                          font-family="Arial, sans-serif">${classLabel}</text>
                </svg>
            </div>
        `;
        
        return L.divIcon({
            html: iconHtml,
            className: 'marine-traffic-marker',
            iconSize: [iconSize, iconSize],
            iconAnchor: [iconSize/2, iconSize/2]
        });
    }

    /**
     * Creates a simple "A" icon for Class A vessels
     * @param {number} heading - The heading of the ship
     * @param {string} color - The base color for the ship
     * @param {number} shipType - The type of the ship (not used in this simple version)
     * @param {number} size - The size of the icon
     * @returns {any} The created ship icon
     */
    function createDetailedShipIcon(heading: number, color: string, shipType: number, size: number = 24): any {
        // Ensure heading is valid (0-359 degrees)
        const validHeading = isNaN(heading) || heading === 511 ? 0 : ((heading % 360) + 360) % 360;
        
        const iconHtml = `
            <div class="ais-ship-icon-simple" style="
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
                    <!-- Simple "A" letter for Class A -->
                    <text x="12" y="16" 
                          text-anchor="middle" 
                          font-size="16" 
                          fill="${color}" 
                          stroke="#000"
                          stroke-width="0.5"
                          font-weight="normal" 
                          font-family="Arial, sans-serif">A</text>
                </svg>
            </div>
        `;
        
        return L.divIcon({
            html: iconHtml,
            className: 'ais-ship-marker-simple',
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });
    }

    /**
     * Creates an AIS ship icon
     * @param {number} heading - The heading of the ship
     * @param {number} shipType - The type of the ship
     * @param {boolean} classB - Whether this is a Class B transponder (default: false for Class A)
     * @param {number} length - Vessel length in meters (optional)
     * @param {number} beam - Vessel beam in meters (optional)
     * @returns {any} The created ship icon
    */
    function createAISShipIcon(heading: number, shipType: number = 0, classB: boolean = false, length: number = 0, beam: number = 0): any {
        let color = '#ff6600'; // Default orange
        let size = 28;
        
        // If vessel dimensions are available, use Marine Traffic style
        if (length > 0) {
            // Determine color by ship type first
            if (shipType >= 30 && shipType <= 39) color = '#FF00ff'; // Fishing vessels - purple
            else if (shipType >= 40 && shipType <= 49) color = '#ff6600'; // HSC - orange  
            else if (shipType >= 60 && shipType <= 69) color = '#00ff00'; // Passenger ships - green
            else if (shipType >= 70 && shipType <= 79) color = '#0066ff'; // Cargo ships - blue
            else if (shipType >= 80 && shipType <= 89) color = '#ff0000'; // Tankers - red
            else if (classB) color = '#ff69b4'; // Hot pink for Class B ships
            else color = '#ff6600'; // Default orange for Class A
            
            return createMarineTrafficIcon(heading, color, length, beam, classB, size);
        }
        
        // Class B ships get pink/magenta color as base, but can be overridden by specific ship types
        if (classB) {
            color = '#ff69b4'; // Hot pink for Class B ships
        }
        
        // Special handling for sailing boats
        if (shipType === 36) { // Sailing vessel
            //console.debug(`Creating sailing vessel icon for MMSI with ship type ${shipType} (Class B: ${classB})`);
            return createSailingBoatIcon(heading, classB, size * 1.3);
        }
        
        // For pleasure craft (type 37), we'll use a slightly different sailing icon
        // as many pleasure craft are sailing boats
        if (shipType === 37) { // Pleasure craft (often sailing boats)
            //console.debug(`Creating pleasure craft sailing icon for MMSI with ship type ${shipType} (Class B: ${classB})`);
            return createSailingBoatIcon(heading, classB, size * 1.3, true); // true flag for pleasure craft
        }
        
        // Color based on ship type (AIS ship and cargo type) - these override the Class B color
        if (shipType >= 30 && shipType <= 39) color = '#FF00ff'; // Fishing vessels - purple
        if (shipType >= 40 && shipType <= 49) color = '#ffff00'; // High speed craft - yellow
        if (shipType >= 50 && shipType <= 59) color = '#C0C0C0'; // Special Craft - Gray
        if (shipType >= 60 && shipType <= 69) color = '#0000ff'; // Passenger ships - blue
        if (shipType >= 70 && shipType <= 79) color = '#00ff00'; // Cargo ships - green
        if (shipType >= 80 && shipType <= 89) color = '#ff0000'; // Tanker ships - red
        
        // Use detailed icons for Class A vessels (unless it's a sailing boat which is handled above)
        if (!classB) {
            return createDetailedShipIcon(heading, color, shipType, size);
        }
        
        // For Class B vessels (non-sailing), use the simpler original icon
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
                    <text x="12" y="20" text-anchor="middle" font-size="6" fill="#000" font-weight="bold">B</text>
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
     * Creates a special sailing boat icon for better identification
     * @param {number} heading - The heading of the sailing boat
     * @param {boolean} classB - Whether this is a Class B transponder
     * @param {number} size - The size of the icon
     * @param {boolean} pleasureCraft - Whether this is a pleasure craft (type 37) vs sailing vessel (type 36)
     * @returns {any} The created sailing boat icon
     */
    function createSailingBoatIcon(heading: number, classB: boolean = false, size: number = 16, pleasureCraft: boolean = false): any {
        // Sailing boats get a distinctive color scheme
        const hullColor = classB ? '#ff69b4' : (pleasureCraft ? '#9966cc' : '#0066cc'); // Pink for Class B, purple for pleasure craft, blue for sailing vessels
        const sailColor = '#ffffff'; // White sails
        
        // Ensure heading is valid (0-359 degrees)
        const validHeading = isNaN(heading) || heading === 511 ? 0 : ((heading % 360) + 360) % 360;
        
        const iconHtml = `
            <div class="sailing-boat-icon" style="
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
                    <!-- Main sail (larger and more prominent) -->
                    <path d="M12 2 L19 12 L12 12 Z" fill="${sailColor}" stroke="#333" stroke-width="0.6"/>
                    <!-- Jib sail (forward sail) -->
                    <path d="M12 3 L5 10 L12 10 Z" fill="${sailColor}" stroke="#333" stroke-width="0.6"/>
                    <!-- Sail details/wind lines -->
                    <line x1="13" y1="5" x2="17" y2="9" stroke="#ddd" stroke-width="0.3"/>
                    <line x1="14" y1="7" x2="17" y2="10" stroke="#ddd" stroke-width="0.3"/>
                    <!-- Mast (more prominent) -->
                    <line x1="12" y1="2" x2="12" y2="20" stroke="#654321" stroke-width="1.2"/>
                    <!-- Boom (horizontal beam) -->
                    <line x1="10" y1="12" x2="19" y2="12" stroke="#654321" stroke-width="0.8"/>
                    <!-- Hull (sailing boat shape) -->
                    <path d="M7 17 L17 17 L16 21 L8 21 Z" fill="${hullColor}" stroke="#000" stroke-width="0.8"/>
                    <!-- Keel indicator -->
                    <line x1="12" y1="21" x2="12" y2="22" stroke="${hullColor}" stroke-width="1"/>
                    <!-- Center dot for position -->
                    <circle cx="12" cy="14" r="0.8" fill="#fff" stroke="#000" stroke-width="0.3"/>
                    ${classB ? '<text x="12" y="23.5" text-anchor="middle" font-size="4.5" fill="#000" font-weight="bold">S</text>' : 
                      (pleasureCraft ? '<text x="12" y="23.5" text-anchor="middle" font-size="3.5" fill="#000" font-weight="bold">PC</text>' : 
                       '<text x="12" y="23.5" text-anchor="middle" font-size="3" fill="#000" font-weight="bold">SAIL</text>')}
                </svg>
            </div>
        `;
        
        return L.divIcon({
            html: iconHtml,
            className: 'sailing-boat-marker',
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
        const shipKey = mmsi.toString();
        const isClassB = data.classB || aisShips[shipKey]?.classB || false;
        const classInfo = isClassB ? ' (Class B)' : ' (Class A)';
        
        // Build call sign line if available
        const callSignLine = data.callSign ? `Call Sign: ${data.callSign}<br>` : '';
        
        // Build dimensions line if available
        const dimensionsLine = (data.length > 0 || data.beam > 0) ? 
            `Dimensions: ${data.length || 'N/A'}m x ${data.beam || 'N/A'}m (L x B)<br>` : '';
        
        return `
            <strong>Name: ${data.name || 'Unknown'}</strong><br>
            ${callSignLine}MMSI: ${mmsi}${classInfo}<br>
            ${dimensionsLine}Course: ${data.cog?.toFixed(1) || 'N/A'}°<br>
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
        
        // Remove existing name label if it exists
        if (aisShips[shipKey] && aisShips[shipKey].nameLabel) {
            aisShipsLayer.removeLayer(aisShips[shipKey].nameLabel);
        }
        
        // Use heading if available, otherwise use COG
        const displayHeading = data.heading !== undefined && data.heading !== 511 ? data.heading : (data.cog || 0);
        
        // Create new marker with corrected heading
        // Get ship type from existing data if available (for ships that already sent static data)
        const consolidatedShipType = data.shipType || aisShips[shipKey]?.shipType || 0;
        const isClassB = data.classB || aisShips[shipKey]?.classB || false;
        
        // Get vessel dimensions from data or existing stored data
        const vesselLength = data.length || aisShips[shipKey]?.data?.length || 0;
        const vesselBeam = data.beam || aisShips[shipKey]?.data?.beam || 0;
        
        const icon = createAISShipIcon(displayHeading, consolidatedShipType, isClassB, vesselLength, vesselBeam);
        const marker = L.marker(position, { 
            icon: icon,
            zIndexOffset: zIndexAisShips   // Lower z-index for other ships
        }).addTo(aisShipsLayer);
        
        //console.debug(`Adding/updating AIS ship: ${mmsi} at ${position.lat.toFixed(5)}, ${position.lng.toFixed(5)}`);
        
        // Create tooltip content
        const tooltipContent = getAISTooltipContent(data, mmsi);
        
        marker.bindTooltip(tooltipContent, { 
            permanent: false, 
            direction: 'top', 
            className: 'ais-ship-tooltip' 
        });
        
        // Add name label if zoom level >= 11
        let nameLabel = null;
        const currentZoom = map.getZoom();
        const shipName = data.name || aisShips[shipKey]?.name || 'Unknown';
        
        if (currentZoom >= 11 && shipName !== 'Unknown') {
            nameLabel = L.marker(position, {
                icon: L.divIcon({
                    className: 'ais-ship-name-label',
                    html: `<div style="
                        background: transparent;
                        border: none;
                        color: #FFFFFF;
                        font-size: 12px;
                        font-weight: bold;
                        text-align: center;
                        text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
                        white-space: nowrap;
                        pointer-events: none;
                    ">${shipName}</div>`,
                    iconSize: [100, 20],
                    iconAnchor: [50, -10] // Position above the ship icon
                }),
                zIndexOffset: zIndexAisShips + 1 // Above the ship icon
            }).addTo(aisShipsLayer);
        }
        
        // Store ship data with consolidated structure
        const existingData = aisShips[shipKey]?.data || {};
        const name = data.name || aisShips[shipKey]?.name || 'Unknown';
        const shipType = data.shipType !== undefined ? data.shipType : (aisShips[shipKey]?.shipType || 0);
        const classB = data.classB || aisShips[shipKey]?.classB || false;
        
        aisShips[shipKey] = {
            ...aisShips[shipKey],
            marker: marker,
            nameLabel: nameLabel,
            data: { ...existingData, ...data, shipType: shipType },
            name: name,
            shipType: shipType,
            classB: classB,
            lastUpdate: Date.now()
        };
        
        // Update tooltip with latest consolidated data including ship type
        const updatedTooltipContent = getAISTooltipContent(aisShips[shipKey].data, mmsi);
        marker.setTooltipContent(updatedTooltipContent);
        
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
        if (shipType === 30) return 'Fishing';
        if (shipType === 31) return 'Towing';
        if (shipType === 32) return 'Towing > 200m';
        if (shipType === 33) return 'Dredger';
        if (shipType === 34) return 'Offshore Support';
        if (shipType === 35) return 'Military';
        if (shipType === 36) return 'Sailing';
        if (shipType === 37) return 'Pleasure Craft';
        if (shipType === 38) return 'Reserved';
        if (shipType === 39) return 'Reserved';
        if (shipType >= 40 && shipType <= 49) return 'High Speed Craft';
        if (shipType === 50) return 'Pilot Vessel';
        if (shipType === 51) return 'Search and Rescue';
        if (shipType === 52) return 'Tug';
        if (shipType === 53) return 'Port Tender';
        if (shipType === 54) return 'Anti-pollution';
        if (shipType === 55) return 'Law Enforcement';
        if (shipType === 56) return 'Medical Transport';
        if (shipType === 57) return 'Salvage';
        if (shipType === 58) return 'Diving Support';
        if (shipType === 59) return 'Military Ops';
        if (shipType >= 60 && shipType <= 69) return 'Passenger';
        if (shipType >= 70 && shipType <= 79) return 'Cargo';
        if (shipType >= 80 && shipType <= 89) return 'Tanker';
        if (shipType >= 90 && shipType <= 99) return 'Other';
        return 'Unknown';
    }

    /**
     * Create SART (Search and Rescue Transponder) icon
     * @param size Icon size multiplier
     * @returns Leaflet DivIcon for SART device
     */
    function createSARTIcon(size: number = 24): any {
        const iconHtml = `
            <div style="
                width: ${size}px; 
                height: ${size}px; 
                background: #ff0000; 
                border: 3px solid #fff; 
                border-radius: 50%; 
                display: flex; 
                align-items: center; 
                justify-content: center;
                box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
                animation: sart-pulse 2s infinite;
            ">
                <span style="color: white; font-weight: bold; font-size: ${size * 0.5}px;">⚠</span>
            </div>
            <style>
                @keyframes sart-pulse {
                    0% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.8); }
                    50% { box-shadow: 0 0 20px rgba(255, 0, 0, 1); }
                    100% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.8); }
                }
            </style>
        `;
        
        return L.divIcon({
            html: iconHtml,
            className: 'sart-emergency-marker',
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });
    }

    /**
     * Create SAR Aircraft icon with heading
     * @param heading Aircraft heading in degrees
     * @param size Icon size multiplier
     * @returns Leaflet DivIcon for SAR aircraft
     */
    function createSARAircraftIcon(heading: number = 0, size: number = 28): any {
        const iconHtml = `
            <div style="
                width: ${size}px; 
                height: ${size}px; 
                transform: rotate(${heading}deg);
                display: flex; 
                align-items: center; 
                justify-content: center;
            ">
                <svg width="${size}" height="${size}" viewBox="0 0 24 24" style="filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));">
                    <!-- Aircraft body -->
                    <path d="M12 2 L12 18 L10 16 L14 16 Z" fill="#ff6600" stroke="#fff" stroke-width="1"/>
                    <!-- Wings -->
                    <path d="M6 8 L18 8 L16 12 L8 12 Z" fill="#ff6600" stroke="#fff" stroke-width="1"/>
                    <!-- Tail -->
                    <path d="M10 18 L14 18 L13 22 L11 22 Z" fill="#ff6600" stroke="#fff" stroke-width="1"/>
                    <!-- SAR Cross -->
                    <circle cx="12" cy="10" r="3" fill="white" stroke="#ff0000" stroke-width="1"/>
                    <path d="M12 8 L12 12 M10 10 L14 10" stroke="#ff0000" stroke-width="2"/>
                </svg>
            </div>
        `;
        
        return L.divIcon({
            html: iconHtml,
            className: 'sar-aircraft-marker',
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });
    }

    /**
     * Calculate AtoN icon size based on map zoom level
     * @param zoom Current map zoom level (typically 3-16)
     * @returns Icon size in pixels
     */
    function calculateAtoNIconSize(zoom: number): number {
        // Scale from 12px at zoom 3 to 64px at zoom 16
        // Linear interpolation: size = minSize + (zoom - minZoom) * (maxSize - minSize) / (maxZoom - minZoom)
        const minZoom = 3;
        const maxZoom = 16;
        const minSize = 6;
        const maxSize = 48;
        
        // Clamp zoom level to valid range
        const clampedZoom = Math.max(minZoom, Math.min(maxZoom, zoom));
        
        // Calculate size with linear interpolation
        const size = minSize + (clampedZoom - minZoom) * (maxSize - minSize) / (maxZoom - minZoom);
        
        return Math.round(size);
    }

    /**
     * Update all AtoN markers with new icon sizes based on current zoom level
     */
    function updateAtoNIconSizes() {
        if (!map || !atonLayer) return;
        
        const currentZoom = map.getZoom();
        const newSize = calculateAtoNIconSize(currentZoom);
        
        // We'll store AtoN data and recreate markers with new sizes
        // This is simpler than trying to update existing markers
        Object.keys(atonMarkers || {}).forEach(mmsi => {
            const atonData = atonMarkers[mmsi];
            if (atonData && atonData.marker && atonData.data) {
                // Remove old marker
                atonLayer.removeLayer(atonData.marker);
                if (atonData.statusLabel) {
                    atonLayer.removeLayer(atonData.statusLabel);
                }
                if (atonData.lightIndicator) {
                    atonLayer.removeLayer(atonData.lightIndicator);
                }
                
                // Create new marker with updated size and light status
                const statusMessages = atonData.data.statusText ? atonData.data.statusText.split(', ') : [];
                const hasLight = atonHasLight(atonData.data.atonType, statusMessages, atonData.data.virtualAtoN === 1);
                const newIcon = createAtoNIcon(atonData.data.atonType, newSize, hasLight, atonData.data.statusText || '');
                const newMarker = L.marker([atonData.data.lat, atonData.data.lon], { 
                    icon: newIcon, 
                    zIndexOffset: zIndexWaypoint 
                }).addTo(atonLayer);
                
                // Recreate status label if needed
                let newStatusLabel = null;
                let statusLabelText = '';
                let statusColor = '';
                
                // Determine what status label to show
                if (atonData.data.offPosition === 1 || (atonData.data.statusText && atonData.data.statusText.includes('Off Position'))) {
                    statusLabelText = 'Off Pstn';
                    statusColor = 'rgba(255,0,0,0.8)';
                } else if (atonData.data.statusText && atonData.data.statusText.includes('Light OFF')) {
                    statusLabelText = 'Light OFF';
                    statusColor = 'rgba(255,165,0,0.8)';
                } else if (atonData.data.statusText && atonData.data.statusText.includes('Light Error')) {
                    statusLabelText = 'Light Error';
                    statusColor = 'rgba(255,165,0,0.8)';
                } else if (atonData.data.statusText && atonData.data.statusText.includes('Racon OFF')) {
                    statusLabelText = 'Racon OFF';
                    statusColor = 'rgba(255,165,0,0.8)';
                } else if (atonData.data.statusText && atonData.data.statusText.includes('Racon Error')) {
                    statusLabelText = 'Racon Error';
                    statusColor = 'rgba(255,165,0,0.8)';
                }
                
                if (statusLabelText) {
                    const statusTextIcon = L.divIcon({
                        className: 'aton-status-label',
                        html: `<div style="background: ${statusColor}; color: white; padding: 2px 6px; border-radius: 3px; font-size: 10px; font-weight: bold; text-align: center; white-space: nowrap;">${statusLabelText}</div>`,
                        iconSize: [Math.max(50, statusLabelText.length * 7), 15],
                        iconAnchor: [Math.max(25, statusLabelText.length * 3.5), 0]
                    });
                    newStatusLabel = L.marker([atonData.data.lat, atonData.data.lon], { icon: statusTextIcon, zIndexOffset: zIndexWaypoint + 1 }).addTo(atonLayer);
                }
                
                // Recreate light indicator with new size if AtoN has light
                let newLightIndicator = null;
                if (hasLight) {
                    const lightSize = Math.max(24, Math.floor(newSize * 2)); // Make it bigger for the teardrop
                    
                    // Use the official maritime light symbol (teardrop/flame shape)
                    const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" 
                                        width="${lightSize}px"
                                        height="${lightSize}px"
                                        viewBox="0 0 320 320">
                                        <g transform="rotate(-90 160 160)">
                                        <path d="M 131.60087,181.31159 L 69.97299,257.62001 L 65.44288,263.19827 L 59.885447,267.42201 L 52.986033,269.53125 L 45.663807,269.42153 L 38.851616,267.12524 L 33.104189,262.78791 L 28.902861,256.70061 L 26.677963,249.64945 L 26.834933,242.67425 L 29.567773,236.58472 L 34.162548,231.27636 L 39.756076,226.40835 L 40.930254,225.46186 L 131.60087,181.31159 z M 159.60212,156.05108 C 161.79918,155.83146 163.76054,157.43633 163.98017,159.63337 C 164.19979,161.83043 162.59492,163.79179 160.39788,164.01142 C 158.20082,164.23104 156.23946,162.62617 156.01983,160.42913 C 155.80021,158.23207 157.40508,156.27071 159.60212,156.05108 z"
                                        style="fill:#a30075;fill-opacity:0.5;fill-rule:evenodd;stroke:none"/>
                                      </svg>`;
                    
                    const lightIcon = L.divIcon({
                        className: 'aton-light-indicator',
                        html: lightSvg,
                        iconSize: [lightSize, lightSize],
                        iconAnchor: [lightSize/2, lightSize/2], // Position at bottom-center of AtoN
                        popupAnchor: [0, 0]
                    });
                    
                    // Position light indicator at same coordinates as AtoN, offset by iconAnchor
                    newLightIndicator = L.marker([atonData.data.lat, atonData.data.lon], { 
                        icon: lightIcon,
                        interactive: false, // Prevent interference with AtoN clicks
                        zIndexOffset: zIndexWaypoint + 5
                    }).addTo(atonLayer);
                }
                

                
                // Restore tooltip
                const tooltipContent = `
                    <strong>AtoN</strong><br>
                    Name: ${atonData.data.name}<br>
                    Type: ${atonData.data.atonTypeName}<br>
                    ${atonData.data.statusText ? `Status: ${atonData.data.statusText}<br>` : ''}
                    Lat: ${displayLatitude(atonData.data.lat)}<br>
                    Lon: ${displayLongitude(atonData.data.lon)}
                `;
                newMarker.bindTooltip(tooltipContent, { 
                    permanent: false, 
                    direction: 'top',
                    offset: [0, -newSize - 5], // Anchor to top of icon with small gap
                    className: 'aton-tooltip' 
                });
                
                // Update stored marker references
                atonData.marker = newMarker;
                atonData.statusLabel = newStatusLabel;
                atonData.lightIndicator = newLightIndicator;
            }
        });
    }

    /**
     * Update AIS ship name label visibility based on zoom level
     */
    function updateAISShipNameLabels() {
        if (!map || !aisShipsLayer) return;
        
        const currentZoom = map.getZoom();
        const showLabels = currentZoom >= 11;
        
        //console.debug(`Updating AIS ship name labels for zoom ${currentZoom} -> show: ${showLabels}`);
        
        Object.keys(aisShips || {}).forEach(mmsi => {
            const shipData = aisShips[mmsi];
            if (!shipData || !shipData.marker) return;
            
            const shipName = shipData.name || 'Unknown';
            const position = shipData.marker.getLatLng();
            
            // Remove existing name label if it exists
            if (shipData.nameLabel) {
                aisShipsLayer.removeLayer(shipData.nameLabel);
                shipData.nameLabel = null;
            }
            
            // Add name label if zoom level >= 11 and ship has a name
            if (showLabels && shipName !== 'Unknown') {
                const nameLabel = L.marker(position, {
                    icon: L.divIcon({
                        className: 'ais-ship-name-label',
                        html: `<div style="
                            background: transparent;
                            border: none;
                            color: #ffffff;
                            font-size: 10px;
                            font-weight: bold;
                            text-align: center;
                            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
                            white-space: nowrap;
                            pointer-events: none;
                        ">${shipName}</div>`,
                        iconSize: [100, 20],
                        iconAnchor: [50, -5] // Position above the ship icon
                    }),
                    zIndexOffset: zIndexAisShips + 1 // Above the ship icon
                }).addTo(aisShipsLayer);
                
                // Store the name label reference
                shipData.nameLabel = nameLabel;
            }
        });
    }

    // Storage for AtoN markers to enable zoom-based resizing
    let atonMarkers: Record<string, any> = {};

    // Storage for meteorological station markers
    let meteoMarkers: Record<string, any> = {};

    /**
     * Add or update meteorological station marker on the chart
     * @param mmsi Station MMSI identifier
     * @param lat Latitude
     * @param lon Longitude
     * @param weatherData Weather data object
     */
    function addMeteoStationMarker(mmsi: string, lat: number, lon: number, weatherData: any) {
        if (!meteoLayer || !map) return;

        // Remove existing marker if it exists
        if (meteoMarkers[mmsi]) {
            const existingMarker = meteoMarkers[mmsi];
            if (existingMarker.marker) {
                meteoLayer.removeLayer(existingMarker.marker);
            }
        }

        // Create weather station icon
        const currentZoom = map.getZoom();
        const iconSize = Math.max(20, Math.min(32, currentZoom * 2));
        const meteoIcon = createMeteoIcon(iconSize);

        // Create marker
        const marker = L.marker([lat, lon], { 
            icon: meteoIcon, 
            zIndexOffset: zIndexMeteo 
        }).addTo(meteoLayer);

        // Create detailed tooltip with weather information
        let tooltipContent = `<strong>🌦️ Weather Station</strong><br>`;
        tooltipContent += `MMSI: ${mmsi}<br>`;
        tooltipContent += `📍 ${displayLatitude(lat)}, ${displayLongitude(lon)}<br>`;
        
        if (weatherData.utcDay !== 'N/A') {
            tooltipContent += `🕐 ${String(weatherData.utcHour).padStart(2, '0')}:${String(weatherData.utcMin).padStart(2, '0')} UTC<br>`;
        }

        // Wind data
        if (weatherData.avgWindSpeed !== 'N/A') {
            tooltipContent += `💨 Wind: ${weatherData.avgWindSpeed} kt from ${weatherData.windDir}°<br>`;
            if (weatherData.windGust !== 'N/A') {
                tooltipContent += `💨 Gusts: ${weatherData.windGust} kt from ${weatherData.windGustDir}°<br>`;
            }
        }

        // Temperature and humidity
        if (weatherData.airTemp !== 'N/A') {
            tooltipContent += `🌡️ Air: ${weatherData.airTemp}°C<br>`;
        }
        if (weatherData.humidity !== 'N/A') {
            tooltipContent += `💧 Humidity: ${weatherData.humidity}%<br>`;
        }
        if (weatherData.dewPoint !== 'N/A') {
            tooltipContent += `🌡️ Dew Point: ${weatherData.dewPoint}°C<br>`;
        }

        // Pressure and visibility
        if (weatherData.pressure !== 'N/A') {
            tooltipContent += `📊 Pressure: ${weatherData.pressure} hPa (${weatherData.pressureTendency})<br>`;
        }
        if (weatherData.visibility !== 'N/A') {
            tooltipContent += `👁️ Visibility: ${weatherData.visibility} NM${weatherData.visibilityGreater ? '+' : ''}<br>`;
        }

        // Water data
        if (weatherData.waterTemp !== 'N/A') {
            tooltipContent += `🌊 Water: ${weatherData.waterTemp}°C<br>`;
        }
        if (weatherData.waterLevel !== 'N/A') {
            tooltipContent += `🌊 Level: ${weatherData.waterLevel}m (${weatherData.waterTrend})<br>`;
        }
        if (weatherData.salinity !== 'N/A') {
            tooltipContent += `🧂 Salinity: ${weatherData.salinity}‰<br>`;
        }

        // Current
        if (weatherData.currentSpeed !== 'N/A') {
            tooltipContent += `🌊 Current: ${weatherData.currentSpeed} kt from ${weatherData.currentDir}°<br>`;
        }

        // Precipitation and ice
        if (weatherData.precipitation !== 'N/A') {
            tooltipContent += `☔ Precipitation: ${weatherData.precipitation}<br>`;
        }
        if (weatherData.ice !== 'N/A') {
            tooltipContent += `🧊 Ice: ${weatherData.ice}<br>`;
        }

        // Add tooltip
        marker.bindTooltip(tooltipContent, {
            permanent: false,
            direction: 'top',
            offset: [0, -10]
        });

        // Store marker data
        meteoMarkers[mmsi] = {
            marker: marker,
            data: {
                lat: lat,
                lon: lon,
                mmsi: mmsi,
                timestamp: Date.now(),
                weather: weatherData
            }
        };


    }

    /**
     * Create AIS Base Station icon
     * @param size Icon size multiplier
     * @returns Leaflet DivIcon for AIS base station
     */
    function createBaseStationIcon(size: number = 24): any {
        const iconHtml = `
            <div style="
                width: ${size}px;
                height: ${size}px;
                <-- background: radial-gradient(circle, #ff6600 30%, #ffffff 30%, #ffffff 40%, #ff6600 40%); -->
                border: 2px solid #cc5500;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: ${size * 0.5}px;
                font-weight: bold;
                color: #ffffff;
                text-shadow: 1px 1px 1px rgba(0,0,0,0.8);
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">
                📡
            </div>
        `;
        
        return L.divIcon({
            html: iconHtml,
            className: 'base-station-marker',
            iconSize: [size, size],
            iconAnchor: [size/2, size]
        });
    }

    /**
     * Create Meteorological Station icon
     * @param size Icon size multiplier
     * @returns Leaflet DivIcon for meteorological station
     */
    function createMeteoIcon(size: number = 24): any {
        const iconHtml = `
            <div style="
                width: ${size}px;
                height: ${size}px;
                background: linear-gradient(135deg, #4A90E2 0%, #87CEEB 100%);
                border: 2px solid #2E86AB;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: ${size * 0.5}px;
                font-weight: bold;
                color: #ffffff;
                text-shadow: 1px 1px 1px rgba(0,0,0,0.8);
                box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            ">
                🌦️
            </div>
        `;
        
        return L.divIcon({
            html: iconHtml,
            className: 'meteo-station-marker',
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });
    }

    /**
     * Create AtoN (Aid to Navigation) icon based on type following IALA maritime standards
     * @param atonType AtoN type code (0-31)
     * @param size Icon size
     * @returns Leaflet DivIcon for specific AtoN type
     */
    function createAtoNIcon(atonType: number, size: number = 24, hasLight: boolean = true, lightStatus: string = ''): any {
        let iconHtml = '';
        let bgColor = '#666666'; // Default gray
        let symbol = '⛯'; // Default symbol
        let topMark = ''; // Additional top mark for cardinal buoys
        
        switch(atonType) {
            case 0: // Default, Type of AtoN not specified
                bgColor = '#808080';
                symbol = '⛯';
                break;
                
            case 1: // Reference point
                bgColor = '#FFD700';
                symbol = '📍';
                break;
                
            case 2: // RACON
                bgColor = '#FF6600';
                symbol = '📡';
                break;
                
            case 3: // Fixed structures off-shore (oil platforms, wind farms)
                bgColor = '#8B4513';
                symbol = '🏭';
                break;
                
            case 4: // Emergency Wreck Marking Buoy
                bgColor = '#FF0000';
                symbol = '⚠';
                topMark = '<div style="position: absolute; top: -18px; left: 50%; transform: translateX(-50%); color: #FF0000; font-size: 10px;">⚠</div>';
                break;
                
            case 5: // Fixed Light, without sectors
                // Use SVG from AtoN module
                size = size * 2;
                return L.divIcon({
                    html: getSpecialMarkSVG('FixedLight', size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size] // Bottom center anchor for lighthouse
                });
                
            case 6: // Fixed Light, with sectors
                // Use SVG from AtoN module
                size = size * 2;
                return L.divIcon({
                    html: getSpecialMarkSVG('FixedLight', size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size] // Bottom center anchor for lighthouse
                });
                
            case 7: // Fixed Leading Light Front
                bgColor = '#FFFF00';
                symbol = '🔅';
                break;
                
            case 8: // Fixed Leading Light Rear
                bgColor = '#FFFF00';
                symbol = '🔆';
                break;
                
            // Cardinal Beacons (Fixed)
            case 9: // Cardinal N
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('North', false, size), // Light rendered separately as HTML overlay
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
            case 10: // Cardinal E
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('East', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
            case 11: // Cardinal S
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('South', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
            case 12: // Cardinal W
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('West', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
                
            // Port/Starboard Beacons (Fixed)
            case 13: // Port hand
                // Use SVG from AtoN module
                return L.divIcon({
                    html: getSpecialMarkSVG('FixedPort', size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
            case 14: // Fixed Starboard hand
                // Use SVG from AtoN module
                return L.divIcon({
                    html: getSpecialMarkSVG('FixedStarboard', size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
                
            case 15: // Preferred Channel port hand
                bgColor = '#FF0000';
                symbol = '●';
                topMark = '<div style="position: absolute; top: -18px; left: 50%; transform: translateX(-50%); color: #00FF00; font-size: 6px;">▲</div>';
                break;

            case 16: // Preferred Channel starboard hand
                bgColor = '#00FF00';
                symbol = '●';
                topMark = '<div style="position: absolute; top: -18px; left: 50%; transform: translateX(-50%); color: #FF0000; font-size: 6px;">■</div>';
                break;
                
            case 17: // Isolated danger
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('IsolatedDanger', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });

            case 18: // Safe water
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('SafeWater', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });

            case 19: // Special mark
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('Special', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
                
            // Floating Cardinal Marks
            case 20: // Cardinal Mark N
                // Use SVG from AtoN module (floating) with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('North', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });

            case 21: // Cardinal Mark E
                // Use SVG from AtoN module (floating) with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('East', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });

            case 22: // Cardinal Mark S
                // Use SVG from AtoN module (floating) with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('South', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });

            case 23: // Cardinal Mark W
                // Use SVG from AtoN module (floating) with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('West', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
                
            // Floating Port/Starboard Marks
            case 24: // Port hand Mark
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('Port', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });

            case 25: // Starboard hand Mark
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('Starboard', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
                
            case 26: // Preferred Channel Port hand
                bgColor = '#FF0000';
                symbol = '🔴';
                topMark = '<div style="position: absolute; top: -18px; left: 50%; transform: translateX(-50%); color: #00FF00; font-size: 6px;">▲</div>';
                break;
            case 27: // Preferred Channel Starboard hand
                bgColor = '#00FF00';
                symbol = '🟢';
                topMark = '<div style="position: absolute; top: -18px; left: 50%; transform: translateX(-50%); color: #FF0000; font-size: 6px;">■</div>';
                break;
                
            case 28: // Isolated danger
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('IsolatedDanger', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });

            case 29: // Safe Water
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('SafeWater', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });

            case 30: // Special Mark
                // Use SVG from AtoN module with optional light
                return L.divIcon({
                    html: getAtoNWithLightSVG('Special', hasLight, size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });

            case 31: // Light Vessel/LANBY/Rigs
                // Use SVG from AtoN module
                return L.divIcon({
                    html: getSpecialMarkSVG('LightVessel', size),
                    className: 'aton-marker',
                    iconSize: [size, size],
                    iconAnchor: [size/2, size]
                });
                
            default:
                bgColor = '#808080';
                symbol = '⛯';
        }
        
        size = size * 0.5; // Scale down for better appearance

        iconHtml = `
            <div style="
                width: ${size}px; 
                height: ${size}px; 
                background: ${bgColor}; 
                border: 2px solid #fff; 
                border-radius: 50%; 
                display: flex; 
                align-items: center; 
                justify-content: center;
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                position: relative;
            ">
                <span style="color: white; font-size: ${size * 0.6}px; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">${symbol}</span>
                ${topMark}
            </div>
        `;
        
        return L.divIcon({
            html: iconHtml,
            className: 'aton-marker',
            iconSize: [size, size],
            iconAnchor: [size/2, size]
        });
    }

    /**
     * Determine if an AtoN has a light based on default assumption with exceptions
     * @param atonType AtoN type number
     * @param statusMessages Array of status messages
     * @param isVirtual Whether the AtoN is virtual
     * @returns boolean indicating if AtoN has a light
     */
    function atonHasLight(atonType: number, statusMessages: string[], isVirtual: boolean = false): boolean {
        // Exception 1: Fixed Lights (types 5 and 6) are dedicated light structures - no overlay needed
        if (atonType === 5 || atonType === 6) {
            // console.debug(`AtoN type ${atonType} is Fixed Light - no light overlay needed`);
            return false;
        }
        
        // Exception 2: Virtual AtoNs don't have physical lights
        if (isVirtual) {
            // console.debug(`Virtual AtoN - no light overlay`);
            return false;
        }
        
        // Exception 3: If status explicitly says "No Light"
        if (statusMessages.some(msg => msg.includes('No Light'))) {
            // console.debug(`AtoN has "No Light" status - no light overlay`);
            return false;
        }
        
        // Default assumption: All other AtoNs have lights
        // console.debug(`AtoN type ${atonType} - assuming has light (default)`);
        return true;
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
                // Remove name label if it exists
                if (ship.nameLabel) {
                    aisShipsLayer.removeLayer(ship.nameLabel);
                }
                delete aisShips[mmsi];
            }
        });
    }

    /**
     * Clean up old emergency devices (older than 30 minutes for SAR aircraft, 2 hours for SART)
     */
    function cleanupOldEmergencyDevices() {
        const sarAircraftMaxAge = 30 * 60 * 1000; // 30 minutes for SAR aircraft
        const sartMaxAge = 2 * 60 * 60 * 1000; // 2 hours for SART devices
        
        Object.keys(emergencyDevices).forEach(mmsi => {
            const device = emergencyDevices[mmsi];
            const age = Date.now() - device.lastUpdate;
            
            // Use different timeouts based on device type
            const maxAge = device.type === 'SAR_AIRCRAFT' ? sarAircraftMaxAge : sartMaxAge;
            
            if (age > maxAge) {
                if (device.marker) {
                    emergencyLayer.removeLayer(device.marker);
                }
                delete emergencyDevices[mmsi];
                console.debug(`Cleaned up old emergency device: ${device.type} MMSI ${mmsi}`);
            }
        });
    }

    /**
     * Clean up old base stations (older than 24 hours)
     */
    function cleanupOldBaseStations() {
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours for base stations (they're usually permanent)
        
        Object.keys(baseStations).forEach(mmsi => {
            const station = baseStations[mmsi];
            const age = Date.now() - station.lastUpdate;
            
            if (age > maxAge) {
                // Remove marker from map
                if (station.marker && baseStationLayer) {
                    baseStationLayer.removeLayer(station.marker);
                }
                delete baseStations[mmsi];
                console.debug(`Cleaned up old base station: MMSI ${mmsi}`);
            }
        });
    }

    /**
     * Clean up old AtoN markers (older than 24 hours)
     */
    function cleanupOldAtoNMarkers() {
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours for AtoN (they're usually permanent)
        let cleanedCount = 0;
        
        Object.keys(atonMarkers).forEach(mmsi => {
            const aton = atonMarkers[mmsi];
            if (aton.data && aton.data.lastUpdate) {
                const age = Date.now() - aton.data.lastUpdate;
                
                if (age > maxAge) {
                    // Remove marker from map
                    if (aton.marker && atonLayer) {
                        atonLayer.removeLayer(aton.marker);
                    }
                    delete atonMarkers[mmsi];
                    cleanedCount++;
                    console.debug(`Cleaned up old AtoN marker: MMSI ${mmsi}`);
                }
            }
        });
        
        // Save updated AtoN data after cleanup
        if (cleanedCount > 0) {
            saveAtoNData(atonMarkers);
            console.debug(`Cleaned up ${cleanedCount} old AtoN markers and saved data`);
        }
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
                    classB: false,  // Explicitly mark as Class A
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
                        //console.debug(`Warning: VDO message with different MMSI ${mmsi} vs known ${myMMSI}`);
                    }
                    
                    // First check if coordinates are valid
                    if (!validateCoordinates(lat, lon)) {
                        //console.warn(`AIS invalid coordinates for own vessel MMSI ${mmsi} - position rejected`);
                        return; // Reject this AIS position update
                    }
                    
                    // Then check position jump with speed
                    if (!validatePositionJump(lat, lon, sog)) {
                        //console.warn(`AIS position jump detected for own vessel MMSI ${mmsi} - position rejected`);
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
                    updateAISShip(mmsi, { lat, lon, cog, sog, heading: displayHeading, classB: false });
                }
            }
        }

        /* AIS Base Station Report
            * https://www.navcen.uscg.gov/ais-base-station-report-message4
        */
        if (msgType === 4) {
            // Base Station Report
            // According to ITU-R M.1371-5, for message type 4:
            // Longitude: bits 79-106 (28 bits)
            // Latitude: bits 107-133 (27 bits)
            const lonRaw = parseInt(bitstring.slice(79, 107), 2);  // 28 bits for longitude
            const latRaw = parseInt(bitstring.slice(107, 134), 2); // 27 bits for latitude
            
            // Two's complement correction for 28 bits (longitude)
            let lon = (lonRaw & 0x8000000) ? (lonRaw - 0x10000000) : lonRaw;
            // Two's complement correction for 27 bits (latitude)  
            let lat = (latRaw & 0x4000000) ? (latRaw - 0x8000000) : latRaw;

            // decimal degrees conversion (in units of 1/10000 minutes)
            lat = lat / 600000.0;
            lon = lon / 600000.0;
            
            if (lat !== 91 && lon !== 181) { // Valid coordinates
                // console.debug(`AIS Base Station MMSI ${mmsi} at ${lat.toFixed(5)}, ${lon.toFixed(5)}`);
                
                // Create or update base station marker
                if (!baseStations[mmsi]) {
                    baseStations[mmsi] = {
                        marker: null,
                        data: {},
                        lastUpdate: Date.now()
                    };
                }

                baseStations[mmsi].data = {
                    mmsi: mmsi,
                    lat: lat,
                    lon: lon
                };
                baseStations[mmsi].lastUpdate = Date.now();

                if (baseStationLayer) {
                    // Remove existing marker if it exists
                    if (baseStations[mmsi].marker) {
                        baseStationLayer.removeLayer(baseStations[mmsi].marker);
                    }

                    const baseStationIcon = createBaseStationIcon(32);
                    const marker = L.marker([lat, lon], { 
                        icon: baseStationIcon, 
                        zIndexOffset: zIndexBaseStations 
                    }).addTo(baseStationLayer);

                    const tooltipContent = `
                        <strong style="color: #ff6600;">📡 AIS BASE STATION</strong><br>
                        <strong>MMSI:</strong> ${mmsi}<br>
                        <strong>Position:</strong> ${lat.toFixed(5)}, ${lon.toFixed(5)}<br>
                        <strong>Last Update:</strong> ${new Date().toLocaleTimeString()}
                    `;

                    marker.bindTooltip(tooltipContent, { 
                        permanent: false, 
                        direction: 'top',
                        className: 'base-station-tooltip',
                        offset: [0, -20]
                    });

                    baseStations[mmsi].marker = marker;
                }
            }
        }

        /* AIS Class A Ship Static and Voyage Related Data
            * https://www.navcen.uscg.gov/ais-class-a-static-voyage-message-5
        */
        if (msgType === 5) {
            // Static and Voyage Related Data
            const shipType = parseInt(bitstring.slice(232, 240), 2);
            
            // Call sign (bits 70-111, 42 bits = 7 characters)
            let callSignBits = bitstring.slice(70, 112);
            let callSign = '';
            for (let i = 0; i < callSignBits.length; i += 6) {
                const charCode = parseInt(callSignBits.slice(i, i + 6), 2);
                if (charCode === 0) break;
                callSign += aisAscii(charCode);
            }
            callSign = callSign.replace(/@+$/, '').trim();
            
            // Vessel name (bits 112-231, 120 bits = 20 characters)
            let nameBits = bitstring.slice(112, 232);
            let name = '';
            for (let i = 0; i < nameBits.length; i += 6) {
                const charCode = parseInt(nameBits.slice(i, i + 6), 2);
                if (charCode === 0) break;
                name += aisAscii(charCode);
            }
            name = name.replace(/@+$/, '').trim();
            
            // Vessel dimensions (bits 240-269)
            const dimToBow = parseInt(bitstring.slice(240, 249), 2);      // 9 bits
            const dimToStern = parseInt(bitstring.slice(249, 258), 2);   // 9 bits
            const dimToPort = parseInt(bitstring.slice(258, 264), 2);    // 6 bits
            const dimToStarboard = parseInt(bitstring.slice(264, 270), 2); // 6 bits
            
            // Calculate total length and beam
            const totalLength = dimToBow + dimToStern;
            const totalBeam = dimToPort + dimToStarboard;
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

            //console.debug(`ETA: ${etaStr}`);

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
                // Store our own MMSI if not set or invalid
                if (!myMMSI || !isValidMMSI(myMMSI)) {
                    myMMSI = mmsi;
                    saveVesselMMSI(mmsi);
                }
                
                if (name && name !== '') {
                    // Only update and save if the name has actually changed
                    if (vesselName !== name) {
                        vesselName = name;
                        saveVesselName(name); // Save AIS-received name too
                    }
                }
                
                if (callSign && callSign !== '') {
                    // Only update and save if the call sign has actually changed
                    if (vesselCallSign !== callSign) {
                        vesselCallSign = callSign;
                        saveVesselCallSign(callSign);
                    }
                }
            } else {
                // External vessel - update or create ship data
                if (!aisShips[mmsi]) {
                    aisShips[mmsi] = { 
                        marker: null, 
                        data: {},
                        name: 'Unknown',
                        shipType: 0,
                        classB: false,  // Explicitly mark as Class A
                        lastUpdate: Date.now() 
                    };
                }
                
                // Update name, call sign and ship type
                if (name && name !== '') {
                    aisShips[mmsi].name = name;
                    aisShips[mmsi].data.name = name;
                }
                if (callSign && callSign !== '') {
                    aisShips[mmsi].data.callSign = callSign;
                }
                aisShips[mmsi].shipType = shipType;
                aisShips[mmsi].data.shipType = shipType;
                aisShips[mmsi].classB = false;  // Ensure it stays Class A
                aisShips[mmsi].data.destination = destination;
                aisShips[mmsi].data.eta = etaStr;
                
                // Store vessel dimensions
                if (totalLength > 0) {
                    aisShips[mmsi].data.length = totalLength;
                }
                if (totalBeam > 0) {
                    aisShips[mmsi].data.beam = totalBeam;
                }
                
                aisShips[mmsi].lastUpdate = Date.now();
                
                // Update existing marker tooltip if ship is already displayed
                if (aisShips[mmsi].marker && aisShips[mmsi].data.lat) {
                    const data = aisShips[mmsi].data;
                    const updatedTooltipContent = getAISTooltipContent(data, mmsi);
                    aisShips[mmsi].marker.setTooltipContent(updatedTooltipContent);
                }
            }
        }

        /*
            * AIS Binary Messages (Types 6, 7, 8)
            * https://www.navcen.uscg.gov/ais-binary-messages
        */
        if (msgType === 6) {
            // Binary Addressed Message
            console.debug(`AIS Binary Addressed Message (Type 6) from MMSI ${mmsi}`);
            
            // Sequence Number (bits 38-39, 2 bits)
            const seqNum = parseInt(bitstring.slice(38, 40), 2);
            
            // Destination MMSI (bits 40-69, 30 bits)
            const destMMSI = parseInt(bitstring.slice(40, 70), 2).toString();
            
            // Retransmit flag (bit 70)
            const retransmit = parseInt(bitstring.slice(70, 71), 2);
            
            // Application Identifier (DAC/FID) (bits 72-87, 16 bits)
            const dac = parseInt(bitstring.slice(72, 82), 2); // Designated Area Code (10 bits)
            const fid = parseInt(bitstring.slice(82, 88), 2); // Function Identifier (6 bits)
            
            // Binary data payload (bits 88+, variable length)
            const binaryData = bitstring.slice(88);
            
            console.debug(`Type 6 - Seq: ${seqNum}, Dest: ${destMMSI}, DAC: ${dac}, FID: ${fid}, Retransmit: ${retransmit}, Data length: ${binaryData.length} bits`);
            
            // Handle specific DAC/FID combinations
            if (dac === 1) { // International applications
                switch (fid) {
                    case 0: // Text using 6-bit ASCII
                        let text = '';
                        for (let i = 0; i < binaryData.length; i += 6) {
                            if (i + 6 <= binaryData.length) {
                                const charCode = parseInt(binaryData.slice(i, i + 6), 2);
                                if (charCode === 0) break;
                                text += aisAscii(charCode);
                            }
                        }
                        console.debug(`Type 6 Text Message to ${destMMSI}: "${text.trim()}"`);
                        break;
                    case 1: // Application Acknowledgement
                        console.debug(`Type 6 Application ACK to ${destMMSI}`);
                        break;
                    case 2: // Interrogation for a DAC/FID
                        console.debug(`Type 6 Interrogation to ${destMMSI}`);
                        break;
                    case 3: // Capability Interrogation
                        console.debug(`Type 6 Capability Interrogation to ${destMMSI}`);
                        break;
                    default:
                        console.debug(`Type 6 Unknown FID ${fid} to ${destMMSI}`);
                }
            } else {
                console.debug(`Type 6 Regional DAC ${dac}, FID ${fid} to ${destMMSI}`);
            }
        }
        /*
            * AIS Binary Acknowledge (Type 7)
            * https://www.navcen.uscg.gov/ais-binary-messages
        */
        if (msgType === 7) {
            // Binary Acknowledge
            // console.debug(`AIS Binary Acknowledge (Type 7) from MMSI ${mmsi}`);
            // Sequence Number (bits 38-39, 2 bits)
            const seqNum = parseInt(bitstring.slice(38, 40), 2);
            // Destination MMSI (bits 40-69, 30 bits)
            const destMMSI = parseInt(bitstring.slice(40, 70), 2).toString();
            // Retransmit flag (bit 70)
            const retransmit = parseInt(bitstring.slice(70, 71), 2);
            // Number of messages acknowledged (bits 71-75, 5 bits)
            const numMessages = parseInt(bitstring.slice(71, 76), 2);
            // Acknowledged message IDs (bits 76+, 30 bits each)
            let messageIds: number[] = [];
            for (let i = 0; i < numMessages; i++) {
                const startBit = 76 + i * 30;
                if (startBit + 30 <= bitstring.length) {
                    const msgId = parseInt(bitstring.slice(startBit, startBit + 30), 2);
                    messageIds.push(msgId);
                }
            }
            // console.debug(`Type 7 - Seq: ${seqNum}, Dest: ${destMMSI}, Retransmit: ${retransmit}, Messages Acknowledged: ${messageIds.join(', ')}`);
        }

        /*
            * AIS Binary Broadcast Message (Type 8)
            * https://www.navcen.uscg.gov/ais-binary-messages
        */
        if (msgType === 8) {
            // Binary Broadcast Message
            // console.debug(`AIS Binary Broadcast Message (Type 8) from MMSI ${mmsi}`);
            // console.debug(`Type 8 - Full bitstring length: ${bitstring.length} bits`);
            
            // Application Identifier (DAC/FID) (bits 40-55, 16 bits)
            const dac = parseInt(bitstring.slice(40, 50), 2); // Designated Area Code (10 bits)
            const fid = parseInt(bitstring.slice(50, 56), 2); // Function Identifier (6 bits)
            
            // Binary data payload (bits 56+, variable length)
            const binaryData = bitstring.slice(56);
            
            // console.debug(`Type 8 - DAC: ${dac}, FID: ${fid}, Data length: ${binaryData.length} bits`);
            
            // Add debug logging for text-based messages
            if (dac === 1 && (fid === 0 || fid === 29)) {
                // console.debug(`Type 8 Binary data (first 60 bits): ${binaryData.slice(0, Math.min(60, binaryData.length))}`);
            }
            
            // Handle specific DAC/FID combinations
            if (dac === 1) { // International applications
                switch (fid) {
                    case 0: // Text using 6-bit ASCII
                        let text = '';
                        // console.debug(`Type 8 FID 0 - Processing ${binaryData.length} bits of text data`);
                        for (let i = 0; i < binaryData.length; i += 6) {
                            if (i + 6 <= binaryData.length) {
                                const charCode = parseInt(binaryData.slice(i, i + 6), 2);
                                console.debug(`Type 8 FID 0 - Char ${i/6}: code ${charCode} = '${aisAscii(charCode)}'`);
                                if (charCode === 0) break;
                                text += aisAscii(charCode);
                            }
                        }
                        console.debug(`Type 8 Broadcast Text: "${text.trim()}" (length: ${text.length})`);
                        break;
                    case 11: // Meteorological and Hydrographic Data
                        console.debug(`Type 8 Met/Hydro Data from ${mmsi}`);
                        meteoDecode(binaryData, mmsi);
                        break;
                    case 13: // Fairway Closed
                        console.debug(`Type 8 Fairway Closed notification from ${mmsi}`);
                        break;
                    case 15: // Extended Ship Static and Voyage Related Data
                        console.debug(`Type 8 Extended Ship Data from ${mmsi}`);
                        break;
                    case 16: // Number of Persons on board
                        if (binaryData.length >= 13) {
                            const persons = parseInt(binaryData.slice(0, 13), 2);
                            console.debug(`Type 8 Persons on board ${mmsi}: ${persons === 8191 ? 'N/A' : persons}`);
                        }
                        break;
                    case 17: // VTS-generated/synthetic targets
                        console.debug(`Type 8 VTS Synthetic Target from ${mmsi}`);
                        break;
                    case 19: // Marine Traffic Signals
                        console.debug(`Type 8 Marine Traffic Signals from ${mmsi}`);
                        break;
                    case 21: // Weather observation report from ship
                        console.debug(`Type 8 Weather Report from ${mmsi}`);
                        break;
                    case 22: // Area Notice (broadcast)
                        console.debug(`Type 8 Area Notice from ${mmsi}`);
                        break;
                    case 24: // Extended Ship Static and Voyage Related Data
                        console.debug(`Type 8 Extended Ship Static Data from ${mmsi}`);
                        break;
                    case 25: // Dangerous Cargo Indication
                        console.debug(`Type 8 Dangerous Cargo from ${mmsi}`);
                        break;
                    case 27: // Route Information (broadcast)
                        console.debug(`Type 8 Route Information from ${mmsi}`);
                        break;
                    case 29: // Text Description (broadcast)
                        // For FID 29, the binary data structure is:
                        // - Link ID (10 bits) - bits 0-9
                        // - Text (variable length, 6-bit ASCII) - bits 10+
                        console.debug(`Type 8 FID 29 - Processing ${binaryData.length} bits of text description data`);
                        if (binaryData.length >= 10) {
                            const linkId = parseInt(binaryData.slice(0, 10), 2);
                            let description = '';
                            
                            console.debug(`Type 8 FID 29 - Link ID: ${linkId}, Text data starts at bit 10 (${binaryData.length - 10} bits available)`);
                            
                            // Start reading text from bit 10 onwards
                            for (let i = 10; i < binaryData.length; i += 6) {
                                if (i + 6 <= binaryData.length) {
                                    const charCode = parseInt(binaryData.slice(i, i + 6), 2);
                                    // console.debug(`Type 8 FID 29 - Char ${(i-10)/6}: code ${charCode} = '${aisAscii(charCode)}'`);
                                    if (charCode === 0) break;
                                    description += aisAscii(charCode);
                                }
                            }
                            console.debug(`Type 8 Text Description (Link ID: ${linkId}): "${description.trim()}" (length: ${description.length})`);
                        } else {
                            console.debug(`Type 8 Text Description: Insufficient data (${binaryData.length} bits, need at least 10)`);
                        }
                        break;
                    case 31: // Meteorological/Hydrological Data
                        console.debug(`Type 8 Met/Hydro Data (FID 31) from ${mmsi}`);
                        meteoDecode(bitstring, mmsi);
                        break;
                    default:
                        console.debug(`Type 8 Unknown International FID ${fid} from ${mmsi}`);
                }
            } else {
                //console.debug(`Type 8 Regional DAC ${dac}, FID ${fid} from ${mmsi}`);
                
                // Handle some common regional applications
                if (dac === 316 && fid === 1) { // US/Canada - Text message
                    let text = '';
                    for (let i = 0; i < binaryData.length; i += 6) {
                        if (i + 6 <= binaryData.length) {
                            const charCode = parseInt(binaryData.slice(i, i + 6), 2);
                            if (charCode === 0) break;
                            text += aisAscii(charCode);
                        }
                    }
                    console.debug(`Type 8 US/Canada Text: "${text.trim()}"`);
                } else if (dac === 200) { // European inland waterways
                    // console.debug(`Type 8 European Inland Waterways message from ${mmsi}`);
                }
            }
        }

        /*
            * AIS Search and Rescue Aircraft Position Report (Type 9)
            * https://www.navcen.uscg.gov/ais-search-and-rescue-aircraft-position-report-message9
        */
        if (msgType === 9) {
            // SAR Aircraft Position Report
            console.debug(`%c SAR Aircraft detected: MMSI ${mmsi}`, 'background: #222; color: #bada55');
            
            // Position (bits 61-88 longitude, 89-115 latitude)
            const lonRaw = parseInt(bitstring.slice(61, 89), 2);
            const latRaw = parseInt(bitstring.slice(89, 116), 2);
            
            // Two's complement correction
            let lon = (lonRaw & 0x8000000) ? (lonRaw - 0x10000000) : lonRaw;
            let lat = (latRaw & 0x4000000) ? (latRaw - 0x8000000) : latRaw;
            
            // Convert to decimal degrees
            lat = lat / 600000.0;
            lon = lon / 600000.0;
            
            // Course Over Ground (bits 116-127)
            const cog = parseInt(bitstring.slice(116, 128), 2) / 10.0;
            
            // Speed Over Ground (bits 50-59) - for aircraft: 1 knot per bit (not 0.1 like ships)
            const sog = parseInt(bitstring.slice(50, 60), 2); // No division by 10 for aircraft!
            
            // Altitude (bits 38-49) in meters
            const altitudeRaw = parseInt(bitstring.slice(38, 50), 2);
            const altitude = altitudeRaw === 4095 ? 'N/A' : `${altitudeRaw}m`;

            if (lat !== 91 && lon !== 181) { // Valid coordinates
                // Create or update SAR aircraft
                if (!emergencyDevices[mmsi]) {
                    emergencyDevices[mmsi] = {
                        marker: null,
                        type: 'SAR_AIRCRAFT',
                        data: {},
                        lastUpdate: Date.now()
                    };
                }

                emergencyDevices[mmsi].data = {
                    mmsi: mmsi,
                    lat: lat,
                    lon: lon,
                    cog: cog,
                    sog: sog,
                    altitude: altitude
                };
                emergencyDevices[mmsi].lastUpdate = Date.now();

                if (emergencyLayer) {
                    // Remove existing marker
                    if (emergencyDevices[mmsi].marker) {
                        emergencyLayer.removeLayer(emergencyDevices[mmsi].marker);
                    }

                    const aircraftIcon = createSARAircraftIcon(cog, 32);
                    const marker = L.marker([lat, lon], { 
                        icon: aircraftIcon, 
                        zIndexOffset: zIndexOwnShip + 150 // High priority
                    }).addTo(emergencyLayer);

                    const tooltipContent = `
                        <strong style="color: #ff6600;">✈️ SAR AIRCRAFT</strong><br>
                        <strong>MMSI:</strong> ${mmsi}<br>
                        <strong>Course:</strong> ${cog.toFixed(1)}°<br>
                        <strong>Speed:</strong> ${sog.toFixed(1)} knots<br>
                        <strong>Altitude:</strong> ${altitude}<br>
                        <strong>Position:</strong> ${displayLatitude(lat)}, ${displayLongitude(lon)}<br>
                        <strong>Time:</strong> ${new Date().toLocaleTimeString()}
                    `;

                    marker.bindTooltip(tooltipContent, { 
                        permanent: false, 
                        direction: 'top',
                        className: 'emergency-tooltip'
                    });

                    emergencyDevices[mmsi].marker = marker;
                    
                    //console.debug(`SAR Aircraft displayed: ${mmsi} at ${lat.toFixed(5)}, ${lon.toFixed(5)}`);
                }
            }
        }

        /*
            * AIS UTC/Date Inquiry (Type 10) and UTC/Date Response (Type 11)
            * https://www.navcen.uscg.gov/ais-utcdate-inquiry-message-10
            * https://www.navcen.uscg.gov/ais-utcdate-response-message-11
        */
        if (msgType === 10) {
            // UTC/Date Inquiry
            console.debug(`AIS UTC/Date Inquiry (Type 10) from MMSI ${mmsi}`);
            // This message is typically sent by base stations requesting time sync
            // We can respond with our own UTC time if needed (not implemented here)
        }

        /*
            * AIS UTC/Date Response (Type 11)
            * https://www.navcen.uscg.gov/ais-utcdate-response-message-11
        */
        if (msgType === 11) {
            // UTC/Date Response
            console.debug(`AIS UTC/Date Response (Type 11) from MMSI ${mmsi}`);
            // Extract UTC time and date according to ITU-R M.1371-5
            const year = parseInt(bitstring.slice(38, 52), 2); // bits 38-51 (14 bits)
            const month = parseInt(bitstring.slice(52, 56), 2); // bits 52-55 (4 bits)
            const day = parseInt(bitstring.slice(56, 61), 2); // bits 56-60 (5 bits)
            const hour = parseInt(bitstring.slice(61, 66), 2); // bits 61-65 (5 bits)
            const minute = parseInt(bitstring.slice(66, 72), 2); // bits 66-71 (6 bits)
            const second = parseInt(bitstring.slice(72, 78), 2); // bits 72-77 (6 bits)
            
            // Validate and format the time components
            const validYear = year === 0 ? 'N/A' : year;
            const validMonth = (month === 0 || month > 12) ? 'N/A' : month.toString().padStart(2, '0');
            const validDay = (day === 0 || day > 31) ? 'N/A' : day.toString().padStart(2, '0');
            const validHour = hour >= 24 ? 'N/A' : hour.toString().padStart(2, '0');
            const validMinute = minute >= 60 ? 'N/A' : minute.toString().padStart(2, '0');
            const validSecond = second >= 60 ? 'N/A' : second.toString().padStart(2, '0');
            
            console.debug(`UTC Time from ${mmsi}: ${validYear}-${validMonth}-${validDay} ${validHour}:${validMinute}:${validSecond} UTC`);
        }

        /*
            * AIS Safety-Related Broadcast Message (Type 14)
            * https://www.navcen.uscg.gov/ais-safety-related-broadcast-message-14
        */
        if (msgType === 14) {
            // Safety-Related Broadcast Message (SART)
            console.debug(`SART Safety message detected from MMSI ${mmsi}`);
            
            // Safety text (bits 40-191, max 968 bits, but typically much shorter)
            // Each character is 6 bits, up to ~25 characters for message type 14
            const textBits = bitstring.slice(40, 191); // Extract available text bits
            let safetyText = '';
            for (let i = 0; i < textBits.length; i += 6) {
                if (i + 6 <= textBits.length) {
                    const charCode = parseInt(textBits.slice(i, i + 6), 2);
                    if (charCode === 0) break; // Null terminator
                    safetyText += aisAscii(charCode);
                }
            }
            safetyText = safetyText.replace(/@+$/, '').trim();

            // SART devices don't always include position in message 14
            // Position usually comes from associated message 1/2/3 with status 14
            let lat = null, lon = null;
            
            // Try to get position from existing ship data if this MMSI is known
            if (aisShips[mmsi] && aisShips[mmsi].data && aisShips[mmsi].data.lat !== undefined) {
                lat = aisShips[mmsi].data.lat;
                lon = aisShips[mmsi].data.lon;
            }

            // Create or update emergency device entry
            if (!emergencyDevices[mmsi]) {
                emergencyDevices[mmsi] = {
                    marker: null,
                    type: 'SART',
                    data: {},
                    lastUpdate: Date.now()
                };
            }

            emergencyDevices[mmsi].data.safetyText = safetyText;
            emergencyDevices[mmsi].data.mmsi = mmsi;
            emergencyDevices[mmsi].lastUpdate = Date.now();

            // Add SART marker if we have position
            if (lat !== null && lon !== null && emergencyLayer) {
                // Remove existing marker
                if (emergencyDevices[mmsi].marker) {
                    emergencyLayer.removeLayer(emergencyDevices[mmsi].marker);
                }

                const sartIcon = createSARTIcon(28);
                const marker = L.marker([lat, lon], { 
                    icon: sartIcon, 
                    zIndexOffset: zIndexOwnShip + 200 // Very high priority
                }).addTo(emergencyLayer);

                const tooltipContent = `
                    <strong style="color: #ff0000;">🚨 SART EMERGENCY 🚨</strong><br>
                    <strong>MMSI:</strong> ${mmsi}<br>
                    <strong>Safety Message:</strong> ${safetyText || 'SART Active'}<br>
                    <strong>Position:</strong> ${displayLatitude(lat)}, ${displayLongitude(lon)}<br>
                    <strong>Time:</strong> ${new Date().toLocaleTimeString()}
                `;

                marker.bindTooltip(tooltipContent, { 
                    permanent: false, 
                    direction: 'top',
                    className: 'emergency-tooltip'
                });

                emergencyDevices[mmsi].marker = marker;
                
                 //console.debug(`SART device displayed: ${mmsi} - "${safetyText}"`);
            }
        }

        if (msgType === 18) {
            // Position Report (Class B)
            // According to ITU-R M.1371-5, for message type 18:
            // SOG: bits 46-55 (10 bits)
            // Longitude: bits 57-84 (28 bits)
            // Latitude: bits 85-111 (27 bits)
            // COG: bits 112-123 (12 bits)
            // True Heading: bits 124-132 (9 bits)
            
            const sog = parseInt(bitstring.slice(46, 56), 2) / 10.0;
            const lonRaw = parseInt(bitstring.slice(57, 85), 2);  // 28 bits for longitude
            const latRaw = parseInt(bitstring.slice(85, 112), 2); // 27 bits for latitude
            const cog = parseInt(bitstring.slice(112, 124), 2) / 10.0;
            const heading = parseInt(bitstring.slice(124, 133), 2);
            
            // Two's complement correction for 28 bits (longitude)
            let lon = (lonRaw & 0x8000000) ? (lonRaw - 0x10000000) : lonRaw;
            // Two's complement correction for 27 bits (latitude)  
            let lat = (latRaw & 0x4000000) ? (latRaw - 0x8000000) : latRaw;

            // decimal degrees conversion
            lat = lat / 600000.0;
            lon = lon / 600000.0;

            if (!aisShips[mmsi]) {
                // position message (type 18) is received before a static message (type 24) for a new ship.
                // Let's create a new ship
                aisShips[mmsi] = {
                    marker: null,
                    data: {},
                    name: 'Unknown',
                    shipType: 0,
                    lastUpdate: Date.now(),
                    classB: true  // Mark as Class B
                };
            }
            aisShips[mmsi].classB = true;  // Ensure it's marked as Class B
            
            if (lat !== 91 && lon !== 181) { // Valid coordinates
                // External vessel - use corrected heading
                const displayHeading = heading !== 511 ? heading : cog;
                updateAISShip(mmsi, { lat, lon, cog, sog, heading: displayHeading, classB: true });
            }
        }

        if (msgType === 19) {
            // Extended Position Report (Class B)
            // According to ITU-R M.1371-5, for message type 19:
            // SOG: bits 46-55 (10 bits)
            // Longitude: bits 57-84 (28 bits)
            // Latitude: bits 85-111 (27 bits)
            // COG: bits 112-123 (12 bits)
            // True Heading: bits 124-132 (9 bits)
            // Ship Name: bits 143-262 (120 bits = 20 x 6-bit characters)
            // Ship Type: bits 263-270 (8 bits)
            
            const sog = parseInt(bitstring.slice(46, 56), 2) / 10.0;
            const lonRaw = parseInt(bitstring.slice(57, 85), 2);  // 28 bits for longitude
            const latRaw = parseInt(bitstring.slice(85, 112), 2); // 27 bits for latitude
            const cog = parseInt(bitstring.slice(112, 124), 2) / 10.0;
            const heading = parseInt(bitstring.slice(124, 133), 2);
            const shipType = parseInt(bitstring.slice(263, 271), 2);
            
            // Two's complement correction for 28 bits (longitude)
            let lon = (lonRaw & 0x8000000) ? (lonRaw - 0x10000000) : lonRaw;
            // Two's complement correction for 27 bits (latitude)  
            let lat = (latRaw & 0x4000000) ? (latRaw - 0x8000000) : latRaw;

            // decimal degrees conversion
            lat = lat / 600000.0;
            lon = lon / 600000.0;
            
            // Extract ship name from bits 143-262 (120 bits)
            let nameBits = bitstring.slice(143, 263);
            let name = '';
            for (let i = 0; i < nameBits.length; i += 6) {
                const charCode = parseInt(nameBits.slice(i, i + 6), 2);
                if (charCode === 0) break;
                name += aisAscii(charCode);
            }
            name = name.replace(/@+$/, '').trim();

            if (!aisShips[mmsi]) {
                // position message (type 19) is received before a static message (type 24) for a new ship.
                // Let's create a new ship
                aisShips[mmsi] = {
                    marker: null,
                    data: {},
                    name: 'Unknown',
                    shipType: 0,
                    lastUpdate: Date.now(),
                    classB: true  // Mark as Class B
                };
            }
            aisShips[mmsi].classB = true;  // Ensure it's marked as Class B
            aisShips[mmsi].shipType = shipType;
            if (name && name !== '') {
                aisShips[mmsi].name = name;
                aisShips[mmsi].data.name = name;
            }
            if (lat !== 91 && lon !== 181) { // Valid coordinates
                // External vessel - use corrected heading
                const displayHeading = heading !== 511 ? heading : cog;
                updateAISShip(mmsi, { lat, lon, cog, sog, heading: displayHeading, classB: true, shipType: shipType, name: name });
            }
        }

        if (msgType === 24) {
            // Static Data Report (Class B) - Part A and Part B
            // Part A: Vessel Name (indicated by bit 38-39 = 0)
            // Part B: Ship Type and Vendor Info (indicated by bit 38-39 = 1)
            const partNumber = parseInt(bitstring.slice(38, 40), 2);
            
            if (partNumber === 0) {
                // Part A: Vessel Name
                // Vessel Name: bits 40-159 (120 bits = 20 x 6-bit characters)
                let nameBits = bitstring.slice(40, 160);
                let name = '';
                for (let i = 0; i < nameBits.length; i += 6) {
                    const charCode = parseInt(nameBits.slice(i, i + 6), 2);
                    if (charCode === 0) break;
                    name += aisAscii(charCode);
                }
                name = name.replace(/@+$/, '').trim();
                
                if (!aisShips[mmsi]) {
                    // Create new ship entry if it doesn't exist
                    aisShips[mmsi] = {
                        marker: null,
                        data: {},
                        name: 'Unknown',
                        shipType: 0,
                        lastUpdate: Date.now(),
                        classB: true  // Mark as Class B
                    };
                }
                
                if (name && name !== '') {
                    aisShips[mmsi].name = name;
                    aisShips[mmsi].data.name = name;
                    aisShips[mmsi].classB = true;
                    //console.debug(`Class B vessel name updated: MMSI ${mmsi} = "${name}"`);
                }
                
            } else if (partNumber === 1) {
                // Part B: Ship Type and other static data
                // Ship Type: bits 40-47 (8 bits)
                const shipType = parseInt(bitstring.slice(40, 48), 2);
                
                // Call sign: bits 90-131 (42 bits = 7 characters)
                let callSignBits = bitstring.slice(90, 132);
                let callSign = '';
                for (let i = 0; i < callSignBits.length; i += 6) {
                    const charCode = parseInt(callSignBits.slice(i, i + 6), 2);
                    if (charCode === 0) break;
                    callSign += aisAscii(charCode);
                }
                callSign = callSign.replace(/@+$/, '').trim();
                
                // Vessel dimensions (bits 132-161)
                const dimToBow = parseInt(bitstring.slice(132, 141), 2);      // 9 bits
                const dimToStern = parseInt(bitstring.slice(141, 150), 2);   // 9 bits
                const dimToPort = parseInt(bitstring.slice(150, 156), 2);    // 6 bits
                const dimToStarboard = parseInt(bitstring.slice(156, 162), 2); // 6 bits
                
                // Calculate total length and beam
                const totalLength = dimToBow + dimToStern;
                const totalBeam = dimToPort + dimToStarboard;
                
                if (!aisShips[mmsi]) {
                    // Create new ship entry if it doesn't exist
                    aisShips[mmsi] = {
                        marker: null,
                        data: {},
                        name: 'Unknown',
                        shipType: 0,
                        lastUpdate: Date.now(),
                        classB: true  // Mark as Class B
                    };
                }
                
                aisShips[mmsi].shipType = shipType;
                aisShips[mmsi].data.shipType = shipType;
                if (callSign && callSign !== '') {
                    aisShips[mmsi].data.callSign = callSign;
                }
                
                // Store vessel dimensions for Class B
                if (totalLength > 0) {
                    aisShips[mmsi].data.length = totalLength;
                }
                if (totalBeam > 0) {
                    aisShips[mmsi].data.beam = totalBeam;
                }
                
                aisShips[mmsi].classB = true;
                //console.debug(`Class B vessel type updated: MMSI ${mmsi} = ${shipType} (${getShipTypeName(shipType)})`);
                
                // If the ship already has a marker displayed, update it with the new ship type
                if (aisShips[mmsi].marker && aisShips[mmsi].data.lat && aisShips[mmsi].data.lon) {
                    const currentData = aisShips[mmsi].data;
                    updateAISShip(mmsi, { 
                        ...currentData, 
                        shipType: shipType, 
                        classB: true 
                    });
                }
            }
        }
        // https://www.navcen.uscg.gov/ais-aton-report
        if (msgType === 21) {
            //console.debug(`AIS AtoN Message (Type 21) from MMSI ${mmsi}`);
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

            // AtoN type (bits 38-42)
            const atonType = parseInt(bitstring.slice(38, 43), 2);
            const atonTypeName = getAtoNTypeText(atonType);

            let atonStatus = {
                offPosition: 0,
                virtualAtoN: 0,
                rawStatus: 0,
                statusBits: '',
                statusMessages: [] as string[]
            };
            
            // Off-position indicator (bit 259)
            if (bitstring.length >= 260) {
                atonStatus.offPosition = parseInt(bitstring.slice(259, 260), 2);
                if (atonStatus.offPosition === 1) atonStatus.statusMessages.push('Off Position');
            }
            
            // AtoN Status bits (8 bits from 260-267) - IEC 62288 Annex L
            if (bitstring.length >= 268) {
                // Extract 8-bit status field (bits 260-267)
                const statusBits = bitstring.slice(260, 268);
                atonStatus.rawStatus = parseInt(statusBits, 2);
                atonStatus.statusBits = statusBits;
                
                // Decode individual status bits according to IEC 62288 Annex L
                const bit0 = parseInt(statusBits[0], 2); // Alarm / Good health
                const bit1 = parseInt(statusBits[1], 2); // Light - Status (2 bits)
                const bit2 = parseInt(statusBits[2], 2); // 
                const bit3 = parseInt(statusBits[3], 2); // RACON - Status (2 bits)
                const bit4 = parseInt(statusBits[4], 2); // 
                const bit5 = parseInt(statusBits[5], 2); // Page ID (3 bits)
                const bit6 = parseInt(statusBits[6], 2); // Page ID
                const bit7 = parseInt(statusBits[7], 2); // Page ID
                
                // Build status messages for the 8-bit status field
                if (bit5 === 1 && bit6 === 1 && bit7 === 1) {
                    if (bit0 === 0) atonStatus.statusMessages.push('Alarm');

                    if (bit2 === 0 && bit1 === 0) atonStatus.statusMessages.push('No Light');
                    if (bit2 === 0 && bit1 === 1) atonStatus.statusMessages.push('Light ON');
                    if (bit2 === 1 && bit1 === 0) atonStatus.statusMessages.push('Light OFF');
                    if (bit2 === 1 && bit1 === 1) atonStatus.statusMessages.push('Light Error');
                    
                    if (bit4 === 0 && bit3 === 0) atonStatus.statusMessages.push('No RACON installed');
                    if (bit4 === 0 && bit3 === 1) atonStatus.statusMessages.push('Racon not monitored');
                    if (bit4 === 1 && bit3 === 0) atonStatus.statusMessages.push('Racon Ok');
                    if (bit4 === 1 && bit3 === 1) atonStatus.statusMessages.push('Racon Error');
                }
                // console.debug(`AtoN Status bits for ${name}: ${statusBits} (${atonStatus.rawStatus}) - ${atonStatus.statusMessages.join(', ') || 'Normal'}`);
            }
            // RAIM-flag (bit 268)
            if (bitstring.length >= 269) {
                const raimFlag = parseInt(bitstring.slice(268, 269), 2);
                if (raimFlag === 0) atonStatus.statusMessages.push('No RAIM in use');
            }
            // Virtual AtoN flag (bit 269)
            if (bitstring.length >= 270) {
                atonStatus.virtualAtoN = parseInt(bitstring.slice(269, 270), 2);
                if (atonStatus.virtualAtoN === 1) atonStatus.statusMessages.push('Virtual');
            }
            
            // console.debug(`AtoN Status bits for ${name}: ${atonStatus.statusMessages.join(', ') || 'Normal'}`);

            // Legacy variables for compatibility
            const offPosition = atonStatus.offPosition;
            const virtualAtoN = atonStatus.virtualAtoN;
            
            // Build comprehensive status text
            let statusText = atonStatus.statusMessages.join(', ');
            
            // Add marker to atonLayer
            if (atonLayer) {
                // console.debug(`Adding AtoN marker: Type ${atonType} (${atonTypeName}) at ${lat.toFixed(5)}, ${lon.toFixed(5)}`);
                
                // Calculate icon size based on current zoom level
                const currentZoom = map.getZoom();
                const iconSize = calculateAtoNIconSize(currentZoom);
                // console.debug(`AtoN icon size for zoom ${currentZoom}: ${iconSize}px`);
                
                // Check if this AtoN already exists and update it
                const isNewAtoN = !atonMarkers[mmsi];
                
                if (atonMarkers[mmsi]) {
                    // Update existing marker
                    const existingAton = atonMarkers[mmsi];
                    if (existingAton.marker && atonLayer) {
                        atonLayer.removeLayer(existingAton.marker);
                    }
                    if (existingAton.statusLabel && atonLayer) {
                        atonLayer.removeLayer(existingAton.statusLabel);
                    }
                }
                
                // Check if AtoN has a light based on new default assumption logic
                const hasLight = atonHasLight(atonType, atonStatus.statusMessages, virtualAtoN === 1);
                const atonIcon = createAtoNIcon(atonType, iconSize, hasLight, statusText);
                const marker = L.marker([lat, lon], { icon: atonIcon, zIndexOffset: zIndexWaypoint }).addTo(atonLayer);
                
                // console.debug(`AtoN ${mmsi} created: type=${atonType}, hasLight=${hasLight}, statusMessages=[${atonStatus.statusMessages.join(', ')}]`);
                
                // Add status text label for critical conditions
                let statusLabel = null;
                let statusLabelText = '';
                let statusColor = '';
                
                // Prioritize most critical status first
                if (offPosition === 1) {
                    statusLabelText = 'Off Pstn';
                    statusColor = 'rgba(255,0,0,0.8)'; // Red for off position
                } else if (atonStatus.statusMessages.includes('Light OFF')) {
                    statusLabelText = 'Light OFF';
                    statusColor = 'rgba(255,165,0,0.8)'; // Orange for light issues
                } else if (atonStatus.statusMessages.includes('Light Error')) {
                    statusLabelText = 'Light Error';
                    statusColor = 'rgba(255,165,0,0.8)'; // Orange for light issues
                } else if (atonStatus.statusMessages.includes('Racon OFF')) {
                    statusLabelText = 'Racon OFF';
                    statusColor = 'rgba(255,165,0,0.8)'; // Orange for racon issues
                } else if (atonStatus.statusMessages.includes('Racon Error')) {
                    statusLabelText = 'Racon Error';
                    statusColor = 'rgba(255,165,0,0.8)'; // Orange for racon issues
                }
                
                if (statusLabelText) {
                    const statusTextIcon = L.divIcon({
                        className: 'aton-status-label',
                        html: `<div style="background: ${statusColor}; color: white; padding: 2px 6px; border-radius: 3px; font-size: 10px; font-weight: bold; text-align: center; white-space: nowrap;">${statusLabelText}</div>`,
                        iconSize: [Math.max(50, statusLabelText.length * 7), 15],
                        iconAnchor: [Math.max(25, statusLabelText.length * 3.5), 0] // Position below the icon
                    });
                    statusLabel = L.marker([lat, lon], { icon: statusTextIcon, zIndexOffset: zIndexWaypoint + 1 }).addTo(atonLayer);
                }
                
                const tooltipContent = `
                    <strong>AtoN</strong><br>
                    Name: ${name}<br>
                    Type: ${atonTypeName}<br>
                    ${statusText ? `Status: ${statusText}<br>` : ''}
                    Lat: ${displayLatitude(lat)}<br>
                    Lon: ${displayLongitude(lon)}
                `;
                
                marker.bindTooltip(tooltipContent, { 
                    permanent: false, 
                    direction: 'top',
                    offset: [0, -iconSize - 5], // Anchor to top of icon with small gap
                    className: 'aton-tooltip' 
                });
                
                // Store AtoN marker data for zoom-based resizing
                atonMarkers[mmsi] = {
                    marker: marker,
                    statusLabel: statusLabel,
                    data: {
                        mmsi: mmsi,
                        lat: lat,
                        lon: lon,
                        name: name,
                        atonType: atonType,
                        atonTypeName: atonTypeName,
                        offPosition: offPosition,
                        virtualAtoN: virtualAtoN,
                        statusText: statusText,
                        atonStatus: atonStatus,
                        lastUpdate: Date.now()
                    }
                };
                
                // Save AtoN data to localStorage only for new markers
                if (isNewAtoN) {
                    // console.debug(`New AtoN discovered - saving data: ${Object.keys(atonMarkers).length} markers`);
                    saveAtoNData(atonMarkers);
                }
            }
        }
    }
    
    function meteoDecode(binaryData: string, mmsi?: string) {
        // Decode meteorological and hydrographic data according to IMO289 standard (FID 31)
        // Handles variable message lengths: 304 bits minimum, up to 360 bits full message
        console.debug(`Met/Hydro data length: ${binaryData.length} bits`);
        
        // Helper function to extract bits with proper offset handling
        function extractBits(binary: string, start: number, length: number): number {
            const end = start + length;
            if (end > binary.length) {
                console.debug(`Warning: Trying to extract bits ${start}-${end-1} but data only has ${binary.length} bits`);
                return 0;
            }
            const bits = binary.substring(start, end);
            return parseInt(bits, 2);
        }
        
        // Helper function for signed integers (two's complement)
        function extractSignedBits(binary: string, start: number, length: number): number {
            const value = extractBits(binary, start, length);
            const signBit = 1 << (length - 1);
            return (value & signBit) ? value - (1 << length) : value;
        }
        
        if (binaryData.length < 122) {
            console.debug(`Type 8 Met/Hydro Data: Insufficient data length (${binaryData.length} bits, need at least 122)`);
            return;
        }

        // Extract fields according to IMO289 standard (FID 31) - starting at bit 56 after header
        // Header: Message Type (6) + Repeat (2) + MMSI (30) + Spare (2) + DAC (10) + FID (6) = 56 bits
        
        // Longitude (bits 56-80): 25 bits, signed, minutes * 0.001
        const lonRaw = extractSignedBits(binaryData, 56, 25);
        const metLon = lonRaw === 181000 ? 'N/A' : (lonRaw * 0.001 / 60.0).toFixed(5);
        
        // Latitude (bits 81-104): 24 bits, signed, minutes * 0.001  
        const latRaw = extractSignedBits(binaryData, 81, 24);
        const metLat = latRaw === 91000 ? 'N/A' : (latRaw * 0.001 / 60.0).toFixed(5);
        
        // Position accuracy (bit 105): 1 bit
        const positionAccuracy = extractBits(binaryData, 105, 1);
        
        // Day (bits 106-110): 5 bits, 1-31, 0=N/A
        const dayRaw = extractBits(binaryData, 106, 5);
        const utcDay = dayRaw === 0 ? 'N/A' : dayRaw;
        
        // Hour (bits 111-115): 5 bits, 0-23, 24=N/A
        const hourRaw = extractBits(binaryData, 111, 5);
        const utcHour = hourRaw === 24 ? 'N/A' : hourRaw;
        
        // Minute (bits 116-121): 6 bits, 0-59, 60=N/A
        const minuteRaw = extractBits(binaryData, 116, 6);
        const utcMin = minuteRaw === 60 ? 'N/A' : minuteRaw;
        
        // Wind Speed (bits 122-128): 7 bits, knots, 126=>=126kt, 127=N/A
        const windSpeedRaw = extractBits(binaryData, 122, 7);
        const avgWindSpeed = windSpeedRaw === 127 ? 'N/A' : (windSpeedRaw === 126 ? '>=126' : windSpeedRaw.toString());
        
        // Gust Speed (bits 129-135): 7 bits, knots, 126=>=126kt, 127=N/A
        const gustSpeedRaw = extractBits(binaryData, 129, 7);
        const windGust = gustSpeedRaw === 127 ? 'N/A' : (gustSpeedRaw === 126 ? '>=126' : gustSpeedRaw.toString());
        
        // Wind Direction (bits 136-144): 9 bits, 0-359 degrees, 360=N/A
        const windDirRaw = extractBits(binaryData, 136, 9);
        const windDir = windDirRaw === 360 ? 'N/A' : windDirRaw.toString();
        
        // Wind Gust Direction (bits 145-153): 9 bits, 0-359 degrees, 360=N/A
        const gustDirRaw = extractBits(binaryData, 145, 9);
        const windGustDir = gustDirRaw === 360 ? 'N/A' : gustDirRaw.toString();
        
        // Air Temperature (bits 154-164): 11 bits, signed, 0.1°C, -60.0 to +60.0, -1024=N/A
        const airTempRaw = extractSignedBits(binaryData, 154, 11);
        const airTemp = airTempRaw === -1024 ? 'N/A' : (airTempRaw * 0.1).toFixed(1);
        
        // Relative Humidity (bits 165-171): 7 bits, 0-100%, 101=N/A
        const humidityRaw = extractBits(binaryData, 165, 7);
        const humidity = humidityRaw === 101 ? 'N/A' : humidityRaw.toString();
        
        // Dew Point (bits 172-181): 10 bits, signed, 0.1°C, -20.0 to +50.0, 501=N/A
        const dewRaw = extractSignedBits(binaryData, 172, 10);
        const dewPoint = dewRaw === 501 ? 'N/A' : (dewRaw * 0.1).toFixed(1);
        
        // Air Pressure (bits 182-190): 9 bits, 800-1200hPa, 0=<=799, 402=>=1201, 511=N/A
        const pressureRaw = extractBits(binaryData, 182, 9);
        let pressure = 'N/A';
        if (pressureRaw === 511) {
            pressure = 'N/A';
        } else if (pressureRaw === 0) {
            pressure = '<=799';
        } else if (pressureRaw === 402) {
            pressure = '>=1201';
        } else {
            pressure = (pressureRaw + 800).toString();
        }
        
        // Pressure Tendency (bits 191-192): 2 bits, 0=steady, 1=decreasing, 2=increasing, 3=N/A
        const pressureTrendRaw = extractBits(binaryData, 191, 2);
        const pressureTrendMap: Record<number, string> = { 0: 'Steady', 1: 'Decreasing', 2: 'Increasing', 3: 'N/A' };
        const pressureTendency = pressureTrendMap[pressureTrendRaw] || 'N/A';
        
        // Initialization for optional fields
        let visibilityGreater = false;
        let visibility = 'N/A';
        let waterLevel = 'N/A';
        let waterTrend = 'N/A';
        let currentSpeed = 'N/A';
        let currentDir = 'N/A';
        let waterTemp = 'N/A';
        let precipitation = 'N/A';
        let ice = 'N/A';
        let salinity = 'N/A';
        
        // Continue with optional fields if we have enough bits
        if (binaryData.length >= 201) {
            // Visibility greater than flag (bit 193): 1 bit
            visibilityGreater = extractBits(binaryData, 193, 1) === 1;
            
            // Horizontal Visibility (bits 194-200): 7 bits, 0.1nm units, 127=N/A
            const visRaw = extractBits(binaryData, 194, 7);
            visibility = visRaw === 127 ? 'N/A' : (visRaw * 0.1).toFixed(1);
        }
        
        if (binaryData.length >= 215) {
            // Water Level (bits 201-212): 12 bits, signed, 0.01m, -10.0 to +30.0, 4001=N/A
            const waterLevelRaw = extractSignedBits(binaryData, 201, 12);
            waterLevel = waterLevelRaw === 4001 ? 'N/A' : ((waterLevelRaw - 1000) * 0.01).toFixed(2);
            
            // Water Level Trend (bits 213-214): 2 bits, 0=steady, 1=decreasing, 2=increasing, 3=N/A
            const waterTrendRaw = extractBits(binaryData, 213, 2);
            const waterTrendMap: { [key: number]: string } = { 0: 'Steady', 1: 'Decreasing', 2: 'Increasing', 3: 'N/A' };
            waterTrend = waterTrendMap[waterTrendRaw] || 'N/A';
        }
        
        if (binaryData.length >= 232) {
            // Surface Current Speed (bits 215-222): 8 bits, 0.1 knot units, 251=>=25.1kt, 255=N/A
            const currentSpeedRaw = extractBits(binaryData, 215, 8);
            if (currentSpeedRaw === 255) {
                currentSpeed = 'N/A';
            } else if (currentSpeedRaw === 251) {
                currentSpeed = '>=25.1';
            } else {
                currentSpeed = (currentSpeedRaw * 0.1).toFixed(1);
            }
            
            // Surface Current Direction (bits 223-231): 9 bits, 0-359 degrees, 360=N/A
            const currentDirRaw = extractBits(binaryData, 223, 9);
            currentDir = currentDirRaw === 360 ? 'N/A' : currentDirRaw.toString();
        }
        
        if (binaryData.length >= 336) {
            // Water Temperature (bits 326-335): 10 bits, signed, 0.1°C, -10.0 to 50.0, 501=N/A
            const waterTempRaw = extractSignedBits(binaryData, 326, 10);
            waterTemp = waterTempRaw === 501 ? 'N/A' : (waterTempRaw * 0.1).toFixed(1);
        }
        
        if (binaryData.length >= 339) {
            // Precipitation Type (bits 336-338): 3 bits, 0=reserved, 1=rain, 2=thunderstorm, 3=freezing rain, 4=mixed/ice, 5=snow, 6=reserved, 7=N/A
            const precipRaw = extractBits(binaryData, 336, 3);
            const precipMap: { [key: number]: string } = { 0: 'N/A', 1: 'Rain', 2: 'Thunderstorm', 3: 'Freezing rain', 4: 'Mixed/ice', 5: 'Snow', 6: 'N/A', 7: 'N/A' };
            precipitation = precipMap[precipRaw] || 'N/A';
        }
        
        if (binaryData.length >= 348) {
            // Salinity (bits 339-347): 9 bits, 0.1% units, 0.0-50.0%, 501=>=50.1%, 510=N/A, 511=sensor N/A
            const salinityRaw = extractBits(binaryData, 339, 9);
            if (salinityRaw === 510 || salinityRaw === 511) {
                salinity = 'N/A';
            } else if (salinityRaw === 501) {
                salinity = '>=50.1';
            } else {
                salinity = (salinityRaw * 0.1).toFixed(1);
            }
        }
        
        if (binaryData.length >= 350) {
            // Ice (bits 348-349): 2 bits, 0=No, 1=Yes, 2=reserved, 3=N/A
            const iceRaw = extractBits(binaryData, 348, 2);
            const iceMap: { [key: number]: string } = { 0: 'No', 1: 'Yes', 2: 'N/A', 3: 'N/A' };
            ice = iceMap[iceRaw] || 'N/A';
        }
        
        // Display results
        console.info(`🌊 METEOROLOGICAL DATA from MMSI ${mmsi} (${binaryData.length} bits) - IMO289 FID 31:`);
        
        if (metLat !== 'N/A') {
            console.info(`📍 Position: ${metLat}°, ${metLon}° (Accuracy: ${positionAccuracy ? 'High' : 'Low'})`);
        }
        if (utcDay !== 'N/A') {
            console.info(`🕐 Time: Day ${utcDay}, ${String(utcHour).padStart(2, '0')}:${String(utcMin).padStart(2, '0')} UTC`);
        }
        if (avgWindSpeed !== 'N/A') {
            console.info(`💨 Wind: ${avgWindSpeed} kt from ${windDir}° (Gusts: ${windGust} kt from ${windGustDir}°)`);
        }
        if (airTemp !== 'N/A') {
            console.info(`🌡️ Air: ${airTemp}°C, Humidity: ${humidity}%, Dew Point: ${dewPoint}°C`);
        }
        if (pressure !== 'N/A') {
            console.info(`📊 Pressure: ${pressure} hPa (${pressureTendency}), Visibility: ${visibility} NM${visibilityGreater ? '+' : ''}`);
        }
        if (waterTemp !== 'N/A') {
            console.info(`🌊 Water: ${waterTemp}°C, Level: ${waterLevel}m (${waterTrend}), Salinity: ${salinity}‰`);
        }
        if (currentSpeed !== 'N/A') {
            console.info(`🌊 Current: ${currentSpeed} kt from ${currentDir}°`);
        }
        if (precipitation !== 'N/A' || ice !== 'N/A') {
            console.info(`☔ Precipitation: ${precipitation}, Ice: ${ice}`);
        }

        // Add meteorological station marker to chart
        if (metLat !== 'N/A' && metLon !== 'N/A' && meteoLayer && mmsi) {
            const lat = parseFloat(metLat);
            const lon = parseFloat(metLon);
            if (!isNaN(lat) && !isNaN(lon)) {
                addMeteoStationMarker(mmsi, lat, lon, {
                utcDay,
                utcHour,
                utcMin,
                avgWindSpeed,
                windDir,
                windGust,
                windGustDir,
                airTemp,
                humidity,
                dewPoint,
                pressure,
                pressureTendency,
                visibility,
                visibilityGreater,
                waterTemp,
                waterLevel,
                waterTrend,
                salinity,
                currentSpeed,
                currentDir,
                precipitation,
                ice,
                positionAccuracy
                });
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
        const minutesStr = (Math.floor(min * 1000) / 1000).toFixed(3);
        const paddedMinutes = minutesStr.length < 6 ? ('0' + minutesStr).slice(-6) : minutesStr;
        return ('00' + deg).slice(-2) + '° ' + paddedMinutes + "' " + hemisphere;
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
        const minutesStr = (Math.floor(min * 1000) / 1000).toFixed(3);
        const paddedMinutes = minutesStr.length < 6 ? ('0' + minutesStr).slice(-6) : minutesStr;
        return ('000' + deg).slice(-3) + '° ' + paddedMinutes + "' " + hemisphere;
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
                filename: metadata.getElementsByTagName('filename')[0]?.textContent?.trim() || fileName,
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
            // When there's no metadata section, at least preserve the filename
            routeMetadata = {
                name: 'Unknown Route',
                filename: fileName,
                desc: '',
                author: 'Unknown',
                time: '',
                keywords: '',
            };
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
            let waypoints: Array<{lat: number, lon: number, name?: string, time?: string | Date, passedTime?: Date, type?: string, plannedSpeed?: number}> = [];

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
            routeStartTime = waypoints[0].time ? (waypoints[0].time instanceof Date ? waypoints[0].time : new Date(waypoints[0].time)) : null;
            
            // Success - load the route
            gpxRoute = [...waypoints]; // Ensure Svelte reactivity
            routeFileName = fileName;
            isRouteLoaded = true;
            routeProjectionActive = true; // Enable route-based projection
            forceRouteProjectionRecalculation(); // Force recalculation when route is loaded

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
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const wp1 = gpxRoute[i];
            const wp2 = gpxRoute[i + 1];
            
            if (wp1.type === 'GC') {
                // Interpolate great circle points for GC legs
                const dist = calculateGreatCircleDistance(wp1.lat, wp1.lon, wp2.lat, wp2.lon);
                const gcPoints = interpolateGreatCircle(wp1.lat, wp1.lon, wp2.lat, wp2.lon, dist / 10);
                routeLatLngs = routeLatLngs.concat(gcPoints);
            } else {
                // For RL legs and default: use straight lines (matches ECDIS/chart plotter display)
                routeLatLngs.push([wp1.lat, wp1.lon]);
            }
        }
        // Always add the last waypoint
        routeLatLngs.push([gpxRoute[gpxRoute.length - 1].lat, gpxRoute[gpxRoute.length - 1].lon]);
        
        // Debug the final waypoint being added
        const lastWP = gpxRoute[gpxRoute.length - 1];

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
            
            // Build tooltip content with conditional click message
            let tooltipContent = `Waypoint ${index + 1} : ${waypoint.name}<br>
                ${displayLatitude(waypoint.lat)}<br>
                ${displayLongitude(waypoint.lon)}<br>
                ${passedTime}`;
            
            // Only show click message for future waypoints (not passed)
            if (!isPassed) {
                tooltipContent += `<br><small style="color: #888;">🕒 Click to advance timeline to ETA</small>`;
            }
            
            marker.bindTooltip(tooltipContent, { permanent: false, direction: 'top' });

            // Add click handler to set timeline to waypoint ETA
            marker.on('click', () => {
                setTimelineToWaypointETA(index);
            });
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
        // Use test mode values if enabled, otherwise use actual vessel values
        let sog = testModeEnabled ? testSOG : (mySpeedOverGround > 0 ? mySpeedOverGround : 6); // SOG in knots
        let etas = [];
        let totalDist = 0;
        let lastLat = lastLatitude ?? gpxRoute[nextWaypointIndex]?.lat ?? 0;
        let lastLon = lastLongitude ?? gpxRoute[nextWaypointIndex]?.lon ?? 0;

        // Determine if we're before or after route departure
        const now = Date.now();
        const isBeforeRoute = routeStartTime && now < routeStartTime.getTime();

        for (let i = nextWaypointIndex; i < gpxRoute.length; i++) {
            let wp = gpxRoute[i];
            let legType = wp.type || 'GC';
            let dist = calculateDistance(lastLat, lastLon, wp.lat, wp.lon, legType);
            totalDist += dist;
            
            let etaDate: Date;
            
            if (isBeforeRoute && wp.time) {
                // Before route departure: use GPX planned times
                etaDate = new Date(wp.time);
            } else {
                // After route departure: calculate ETA based on distance and SOG
                let hours = totalDist / sog;
                etaDate = new Date(Date.now() + hours * 3600 * 1000);
            }
            
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
        /* console.info('computeRouteProjection called:', {
            currentSOG,
            targetTime: new Date(targetTime).toISOString(),
            isRouteLoaded,
            gpxRouteLength: gpxRoute.length,
            routeStartTime: routeStartTime?.toISOString()
        }); */
        
        if (!isRouteLoaded || gpxRoute.length < 2) {
           console.info('Early return due to:', { isRouteLoaded, gpxRouteLength: gpxRoute.length });
            return null;
        }

        // --- ROUTE PROJECTION LOGIC ---
        // Timeline-based projection: use Windy timeline and routeStartTime
        if (routeStartTime) {
            const now = Date.now();

            // Check if we're before or after route departure
            const beforeDeparture = now < routeStartTime.getTime();
            
            // BEFORE DEPARTURE: Always use GPX-time projection for passage planning
            if (beforeDeparture) {
                const gpxProjection = computeGpxTimeProjection(targetTime);
              /*  console.info('GPX projection (passage planning mode - before departure):', {
                    targetTime: new Date(targetTime).toISOString(),
                    routeStartTime: routeStartTime.toISOString(),
                    currentTime: new Date(now).toISOString(),
                    beforeDeparture: true,
                    gpxProjection
                }); */
                return gpxProjection;
            }

            // AFTER DEPARTURE: Use real-time projection from vessel's actual position
           //console.info('After route departure - using real-time projection from vessel position');
            
            // If test mode is disabled after departure, we still need to project from actual vessel position
            // This handles the case where the vessel may be off schedule but we want to show realistic projection
            // After departure: for real-time projection, we need SOG > 0
            if (currentSOG <= 0) {
               //console.info('No SOG for real-time projection after departure');
                return null;
            }

            // After departure: project from vessel's current position for the time between now and timeline
            // The vessel's current position is where it actually is, and we project forward/backward from there
            
            // Get vessel's actual position
            let vesselLat = lastLatitude ?? gpxRoute[0].lat;
            let vesselLon = lastLongitude ?? gpxRoute[0].lon;
            
            // For route projection after departure, calculate time from NOW to timeline (not from route start)
            const projectionDurationSeconds = (targetTime - now) / 1000; // seconds from current time to timeline
            
           /* console.info('Real-time projection after departure:', {
                vesselPosition: { lat: vesselLat, lon: vesselLon },
                currentTime: new Date(now).toISOString(),
                targetTime: new Date(targetTime).toISOString(),
                projectionDurationSeconds,
                projectionDurationHours: projectionDurationSeconds / 3600,
                currentSOG,
                testModeEnabled
            }); */
            
            // Special case: When timeline is at current time (projectionDurationSeconds ≈ 0), 
            // return the vessel's current snapped position
            if (Math.abs(projectionDurationSeconds) < 30) { // Within 30 seconds of current time
               // console.info('Timeline at current time, returning snapped vessel position');
                
                // Snap vessel to route and return that position
                const snapResult = snapToRoute(vesselLat, vesselLon);
                let heading = 0;
                if (currentSOG > 0.5 && gpxRoute.length > 1) {
                    const segmentIndex = snapResult.bestSegmentIndex;
                    const segmentStart = gpxRoute[segmentIndex];
                    const segmentEnd = gpxRoute[segmentIndex + 1];
                    const legType = segmentStart.type || 'RL';
                    heading = calculateBearingByLegType(segmentStart.lat, segmentStart.lon, segmentEnd.lat, segmentEnd.lon, legType);
                }
                
                return {
                    lat: snapResult.snappedLat,
                    lon: snapResult.snappedLon,
                    heading: heading
                };
            }
            
            // For projection beyond current time, calculate from vessel's current position
           // console.info('Projecting from current vessel position along route');
            
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
     * Projects vessel position based on GPX waypoint times (before route departure, test mode disabled)
     * Interpolates between waypoints based on timeline vs GPX planned times
     * @param {number} targetTime Target timestamp for projection
     * @returns {{lat: number, lon: number, heading: number} | null} Projected position
     */
    function computeGpxTimeProjection(targetTime: number): {lat: number, lon: number, heading: number} | null {
        if (!gpxRoute || gpxRoute.length < 2) return null;

        // Find the appropriate waypoint pair for the target time
        for (let i = 0; i < gpxRoute.length - 1; i++) {
            const currentWP = gpxRoute[i];
            const nextWP = gpxRoute[i + 1];
            
            // Skip waypoints without time data
            if (!currentWP.time || !nextWP.time) continue;
            
            const currentTime = new Date(currentWP.time).getTime();
            const nextTime = new Date(nextWP.time).getTime();
            
            // Check if target time falls within this segment
            if (targetTime >= currentTime && targetTime <= nextTime) {
                // Calculate interpolation ratio based on time
                const timeRatio = (targetTime - currentTime) / (nextTime - currentTime);
                
                // Interpolate position based on leg type
                const legType = currentWP.type || 'RL';
                let projectedLat: number, projectedLon: number;
                
                if (legType === 'GC') {
                    // Great Circle interpolation
                    const gc = interpolateGreatCirclePoint(
                        currentWP.lat, currentWP.lon, 
                        nextWP.lat, nextWP.lon, 
                        timeRatio
                    );
                    projectedLat = gc.lat;
                    projectedLon = gc.lon;
                } else {
                    // Rhumb Line interpolation
                    const totalDistance = calculateDistance(currentWP.lat, currentWP.lon, nextWP.lat, nextWP.lon, legType);
                    const distanceToTravel = totalDistance * timeRatio;
                    const bearing = calculateStraightLineBearing(currentWP.lat, currentWP.lon, nextWP.lat, nextWP.lon);
                    const projected = deadReckoningFromPoint(currentWP.lat, currentWP.lon, bearing, distanceToTravel);
                    projectedLat = projected.lat;
                    projectedLon = projected.lon;
                }
                
                // Calculate heading for the projected position
                const heading = calculateBearingByLegType(currentWP.lat, currentWP.lon, nextWP.lat, nextWP.lon, legType);
                
                return {
                    lat: projectedLat,
                    lon: projectedLon,
                    heading: heading
                };
            }
        }
        
        // If target time is before first waypoint, return first waypoint position
        if (gpxRoute[0].time && targetTime <= new Date(gpxRoute[0].time).getTime()) {
            const heading = gpxRoute.length > 1 ? 
                calculateBearingByLegType(gpxRoute[0].lat, gpxRoute[0].lon, gpxRoute[1].lat, gpxRoute[1].lon, gpxRoute[0].type || 'RL') : 0;
            return {
                lat: gpxRoute[0].lat,
                lon: gpxRoute[0].lon,
                heading: heading
            };
        }
        
        // If target time is after last waypoint, return last waypoint position
        const lastWP = gpxRoute[gpxRoute.length - 1];
        if (lastWP.time && targetTime >= new Date(lastWP.time).getTime()) {
            const heading = gpxRoute.length > 1 ? 
                calculateBearingByLegType(gpxRoute[gpxRoute.length - 2].lat, gpxRoute[gpxRoute.length - 2].lon, lastWP.lat, lastWP.lon, gpxRoute[gpxRoute.length - 2].type || 'RL') : 0;
            return {
                lat: lastWP.lat,
                lon: lastWP.lon,
                heading: heading
            };
        }
        
        return null;
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
    /**
     * Updates the main vessel marker at current position
     * @param lat Current latitude
     * @param lon Current longitude
     * @param cog Current course over ground
     */
    function updateVesselMarker(lat: number, lon: number, cog: number) {
        if (!map || !markerLayer) return;
        
        // Validate input parameters
        if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
            console.warn(`Invalid coordinates in updateVesselMarker: lat=${lat}, lon=${lon}`);
            return;
        }

        // Ensure COG is valid
        const validCOG = Number.isFinite(cog) ? cog : 0;
        const Position = L.latLng(lat, lon);

        // Remove existing vessel marker
        if (ownShipMarker) {
            markerLayer.removeLayer(ownShipMarker);
            ownShipMarker = null;
        }

        // Create main vessel marker
        const icon = createRotatingBoatIcon(trueHeading, 0.846008, boatIconSize);
        ownShipMarker = L.marker(Position, { 
            icon: icon,
            zIndexOffset: zIndexOwnShip
        }).addTo(markerLayer);
        
        ownShipMarker.bindTooltip(vesselName, { 
            permanent: false, 
            direction: 'top', 
            className: 'boat-tooltip' 
        });

        // Click handler for weather at current time
        ownShipMarker.on('click', () => {
            if (openedPopup) {
                openedPopup.remove();
                openedPopup = null;
                return;
            }
            windyStore.set('timestamp', getRoundedHourTimestamp());
            showMyPopup(lat, lon, false);
        });

        // Apply rotation to vessel icon
        const iconDiv = ownShipMarker.getElement()?.querySelector('.rotatable') as HTMLElement;
        if (iconDiv) {
            iconDiv.style.transformOrigin = '12px 12px';
            iconDiv.style.transform = `rotateZ(${trueHeading}deg)`;
        }
    }

    /**
     * Updates the projection marker for future vessel position
     * @param effectiveSOG Effective speed (test or real)
     * @param effectiveCOG Effective course (test or real)
     */
    function updateProjectionMarker(effectiveSOG: number, effectiveCOG: number) {
        if (!map || !markerLayer) return;

        // Remove existing forecast icon
        if (forecastIcon) {
            forecastIcon.remove();
            forecastIcon = null;
        }

        // Only show projection if we have a valid projection
        // For GPX-time projection (before route start, test mode disabled), ignore SOG requirement
        const isGpxTimeProjection = isRouteLoaded && routeStartTime && 
                                   Date.now() < routeStartTime.getTime() && 
                                   !testModeEnabled &&
                                   projectionHours !== null && projectionHours > 0;
        
        const shouldShowProjection = isGpxTimeProjection || 
                                   (effectiveSOG > 0.5 && projectionHours !== null && projectionHours > 0);
        
        if (shouldShowProjection) {
            let projectedLat: number, projectedLon: number, projectedHeading: number;

            // Use route projection if available, otherwise fallback projection
            if (lastRouteProjection) {
                //console.log('Using route projection:', lastRouteProjection);
                projectedLat = lastRouteProjection.lat;
                projectedLon = lastRouteProjection.lon;
                projectedHeading = lastRouteProjection.heading;
            } else if (lastFallbackProjection) {
                //console.log('Using fallback projection:', lastFallbackProjection);
                projectedLat = lastFallbackProjection.lat;
                projectedLon = lastFallbackProjection.lon;
                projectedHeading = lastFallbackProjection.heading;
            } else {
                //console.log('No projection available - using current position');
                // No projection available - use current position
                if (lastLatitude === null || lastLongitude === null) return;
                projectedLat = lastLatitude;
                projectedLon = lastLongitude;
                projectedHeading = trueHeading;
            }

            // Create projection marker
            const projectedIcon = createRotatingBoatIcon(projectedHeading, 0.846008, boatIconSize * 0.67);
            forecastIcon = L.marker([projectedLat, projectedLon], {
                icon: projectedIcon,
                zIndexOffset: zIndexOwnShip
            }).addTo(markerLayer);

            // Tooltip for projection
            let tooltipText: string;
            if (testModeEnabled) {
                tooltipText = `Weather forecast in ${(projectionHours ?? 0).toFixed(1)} hours (TEST MODE: SOG=${testSOG}kt, COG=${testCOG}°)`;
            } else if (isGpxTimeProjection) {
                tooltipText = `Weather forecast (GPX planned schedule)`;
            } else {
                tooltipText = `Weather forecast in ${(projectionHours ?? 0).toFixed(1)} hours`;
            }
            
            forecastIcon.bindTooltip(tooltipText, { 
                permanent: false, 
                direction: 'top', 
                className: 'forecast-tooltip' 
            });

            // Click handler for weather at projection time
            forecastIcon.on('click', () => {
                if (openedPopup) {
                    openedPopup.remove();
                    openedPopup = null;
                    return;
                }
                showMyPopup(projectedLat, projectedLon, true);
            });

            // Apply rotation to projection icon
            const projectedIconDiv = forecastIcon.getElement()?.querySelector('.rotatable') as HTMLElement;
            if (projectedIconDiv) {
                projectedIconDiv.style.transformOrigin = '12px 12px';
                projectedIconDiv.style.transform = `rotateZ(${projectedHeading}deg)`;
            }

            // Handle follow ship immediately after updating projection marker
            if (followShip) {
                // handleFollowShip(true, true); // Timeline change with force update
            }
        }
    }

    /**
     * Updates projection arrows (heading and COG) for non-route mode
     * @param lat Current latitude
     * @param lon Current longitude
     * @param effectiveSOG Effective speed
     * @param effectiveCOG Effective course
     */
    function updateProjectionArrows(lat: number, lon: number, effectiveSOG: number, effectiveCOG: number) {
        if (!map || !markerLayer) return;

        const Position = L.latLng(lat, lon);

        // Remove existing arrows
        if (headingArrow) {
            headingArrow.remove();
            headingArrow = null;
        }
        if (projectionArrow) {
            projectionArrow.remove();
            projectionArrow = null;
        }

        // Only show arrows when NOT following a route
        if (!routeProjectionActive) {
            // Heading direction arrow (24-hour projection)
            const headingEnd = computeFallbackProjection(lat, lon, effectiveCOG, effectiveSOG, 24);
            headingArrow = L.polyline([Position, headingEnd], {
                color: 'blue',
                weight: 2,
                dashArray: '10, 10',
            }).addTo(markerLayer);

            // Future projection arrow (timeline-based projection)
            const cogEnd = computeFallbackProjection(lat, lon, effectiveCOG, effectiveSOG, projectionHours ?? 0);
            projectionArrow = L.polyline([Position, cogEnd], {
                color: testModeEnabled ? 'orange' : 'red',
                weight: 1,
                dashArray: '5, 5',
            }).addTo(markerLayer);
        }
    }

    /**
     * Main function to update vessel position and all related elements
     * @param lat Current latitude
     * @param lon Current longitude  
     * @param cog Current course over ground
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
        
        // Clear marker layer and update track
        markerLayer.clearLayers();
        pathLatLngs.push(Position);
        saveShortTrackPoint(lat, lon);
        updateTrackDisplay();

        // Calculate effective values (test mode or real)
        let effectiveSOG = testModeEnabled ? testSOG : mySpeedOverGround;
        let effectiveCOG = testModeEnabled ? testCOG : validCOG;
        
        if (effectiveSOG === null || effectiveSOG === undefined || isNaN(effectiveSOG)) {
            effectiveSOG = 6; // Default speed
        }

        // Update all vessel-related markers and projections
        updateVesselMarker(lat, lon, validCOG);
        updateProjectionArrows(lat, lon, effectiveSOG, effectiveCOG);
        updateProjectionMarker(effectiveSOG, effectiveCOG);
        
        // Update button text and handle camera following with throttling
        updateButtonText(windyStore.get('timestamp'));
        handleFollowShip(false, false); // Position update, not timeline change
    }

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
        const maxIterations = Math.max(1000, gpxRoute.length * 10); // Safety limit for very long projections
        while (remainingDistance > 0 && currentIndex < gpxRoute.length - 1 && iterations < maxIterations) {
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
                    // RL: Use proper rhumb line interpolation instead of simple linear interpolation
                    // This is crucial for long distance projections to prevent gaps
                    
                    // Get the exact waypoint coordinates and calculate rhumb line bearing and distance
                    const totalSegmentDistance = calculateDistance(segmentStartWP.lat, segmentStartWP.lon, segmentEndWP.lat, segmentEndWP.lon, legType);
                    const distanceFromStart = calculateDistance(segmentStartWP.lat, segmentStartWP.lon, currentLat, currentLon, legType);
                    
                    // Calculate the bearing of this rhumb line segment
                    const rhumbBearing = calculateStraightLineBearing(segmentStartWP.lat, segmentStartWP.lon, segmentEndWP.lat, segmentEndWP.lon);
                    
                    // Calculate the total distance we need to travel along this segment
                    const finalDistance = distanceFromStart + remainingDistance;
                    
                    // Use dead reckoning along the rhumb line bearing for accurate positioning
                    const newPosition = deadReckoningFromPoint(segmentStartWP.lat, segmentStartWP.lon, rhumbBearing, finalDistance);
                    currentLat = newPosition.lat;
                    currentLon = newPosition.lon;
                }
                
                // INTERMEDIATE SNAP: Snap to route after interpolation to prevent cumulative errors
                const snapResult = findPerpendicularProjection(
                    currentLat, currentLon,
                    segmentStartWP.lat, segmentStartWP.lon,
                    segmentEndWP.lat, segmentEndWP.lon,
                    legType
                );
                
                // For long projections, be more aggressive with snapping to prevent gaps
                // Use larger distance threshold based on remaining distance to project
                const snapThreshold = Math.min(5.0, Math.max(2.0, remainingDistance / 100)); // 2-5 NM threshold
                if (snapResult.progress >= 0 && snapResult.progress <= 1 && snapResult.distance < snapThreshold) {
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

            // Only snap if we're within the segment bounds and reasonably close to the route
            // For very long projections, use a more generous distance threshold
            const finalSnapThreshold = Math.max(3.0, iterations > 500 ? 10.0 : 3.0); // More generous for long projections
            if (snapResult.progress >= 0 && snapResult.progress <= 1 && snapResult.distance < finalSnapThreshold) {
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
     * Checks if route projection parameters have changed significantly to avoid unnecessary recalculations
     */
    function hasRouteProjectionParametersChanged(effectiveSOG: number, targetTime: number, forceRecalculation = false): boolean {
        // Force recalculation if explicitly requested
        if (forceRecalculation) {
            lastProjectionSOG = effectiveSOG;
            lastProjectionTargetTime = targetTime;
            lastProjectionRouteState = `${isRouteLoaded}-${routeProjectionActive}-${gpxRoute.length}-${routeStartTime?.getTime() || 0}-${testModeEnabled}-${testModeEnabled ? testSOG : 'N/A'}-${testModeEnabled ? testCOG : 'N/A'}`;
            // console.info('Force recalculation triggered');
            return true;
        }
        
        // Create a route state fingerprint that includes test mode values
        const currentRouteState = `${isRouteLoaded}-${routeProjectionActive}-${gpxRoute.length}-${routeStartTime?.getTime() || 0}-${testModeEnabled}-${testModeEnabled ? testSOG : 'N/A'}-${testModeEnabled ? testCOG : 'N/A'}`;
        
        // Check if any critical parameter has changed
        const sogChanged = lastProjectionSOG === null || Math.abs(effectiveSOG - lastProjectionSOG) > 0.1; // 0.1 knot threshold
        
        // For time changes, use a much larger threshold to account for timeline granularity
        // Windy timeline often updates in small increments, so we need a bigger threshold
        const timeThreshold = 5 * 60 * 1000; // 5 minutes in milliseconds
        const timeChanged = lastProjectionTargetTime === null || Math.abs(targetTime - lastProjectionTargetTime) > timeThreshold;
        
        const routeStateChanged = lastProjectionRouteState !== currentRouteState;
        
        const hasChanged = sogChanged || timeChanged || routeStateChanged;
        
        // Only log if something actually changed to reduce console noise
        if (hasChanged) {
           /* console.info('Parameter change detected:', {
                effectiveSOG,
                lastProjectionSOG,
                sogChanged,
                targetTime: new Date(targetTime).toISOString(),
                lastTargetTime: lastProjectionTargetTime ? new Date(lastProjectionTargetTime).toISOString() : null,
                timeDiffMs: lastProjectionTargetTime ? Math.abs(targetTime - lastProjectionTargetTime) : 'null',
                timeDiffMin: lastProjectionTargetTime ? Math.round(Math.abs(targetTime - lastProjectionTargetTime) / 60000) : 'null',
                timeChanged,
                currentRouteState,
                lastRouteState: lastProjectionRouteState,
                routeStateChanged,
                reason: sogChanged ? 'SOG' : timeChanged ? 'Time' : 'Route'
            }); */
            
            // Update last known parameters
            lastProjectionSOG = effectiveSOG;
            lastProjectionTargetTime = targetTime;
            lastProjectionRouteState = currentRouteState;
        }
        
        return hasChanged;
    }

    /**
     * Forces route projection recalculation by resetting change detection parameters
     */
    function forceRouteProjectionRecalculation() {
        lastProjectionSOG = null;
        lastProjectionTargetTime = null;
        lastProjectionRouteState = '';
    }

    /**
     * Updates the projection for the timeline based on the given timestamp.
     * @param ts The target timestamp
     * @param forceRecalculation Force recalculation even if parameters haven't changed
     */
    function updateProjectionForTimeline(ts: number, forceRecalculation = false) {
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
            // Only compute route projection if parameters have changed significantly
            if (hasRouteProjectionParametersChanged(effectiveSOG, ts, forceRecalculation)) {
               /* console.info('Route projection conditions met and parameters changed:', {
                    isRouteLoaded,
                    routeProjectionActive,
                    gpxRouteLength: gpxRoute.length,
                    routeStartTime: routeStartTime?.toISOString(),
                    testModeEnabled,
                    effectiveSOG
                }); */
                // Route-based projection: use timeline vs route start time
                lastRouteProjection = computeRouteProjection(effectiveSOG, ts);
                // console.info('computeRouteProjection returned:', lastRouteProjection);
            }
            
            // If route projection returns null (e.g., before route start), use fallback projection
            if (!lastRouteProjection && lastLatitude !== null && lastLongitude !== null && effectiveSOG > 0.5 && projectionHours > 0) {
                const fallback = computeFallbackProjection(lastLatitude, lastLongitude, effectiveCOG, effectiveSOG, projectionHours);
                lastFallbackProjection = {
                    lat: fallback.lat,
                    lon: fallback.lng,
                    heading: effectiveCOG
                };
            } else {
                lastFallbackProjection = null;
            }
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
     * Set the Windy timeline to a specific waypoint's ETA
     * @param waypointIndex The index of the waypoint in the route
     */
    function setTimelineToWaypointETA(waypointIndex: number) {
        // Find the waypoint's ETA in the waypointETAs array
        const waypointETA = waypointETAs.find(eta => eta.index === waypointIndex);
        
        if (waypointETA && waypointETA.eta) {
            // Convert ETA to timestamp and round to nearest Windy time interval
            const etaTimestamp = getRoundedHourTimestamp(waypointETA.eta.getTime());
            windyStore.set('timestamp', etaTimestamp);
            console.debug(`Timeline set to waypoint ${waypointIndex + 1} ETA: ${waypointETA.eta.toISOString()}`);
        } else {
            console.warn(`No ETA found for waypoint ${waypointIndex + 1}`);
        }
    }

    /**
     * Move the Windy timeline backward by the specified step
     * @param stepHours - Number of hours to move backward
     */
    function moveTimelineBackward(stepHours: number) {
        userInitiatedTimelineChange = true;
        const currentTimestamp = windyStore.get('timestamp');
        const newTimestamp = currentTimestamp - (stepHours * 3600 * 1000); // Step hours in milliseconds
        //const roundedTimestamp = getRoundedHourTimestamp(newTimestamp);
        //windyStore.set('timestamp', roundedTimestamp);
        windyStore.set('timestamp', newTimestamp);
    }

    /**
     * Move the Windy timeline forward by the specified step
     * @param stepHours - Number of hours to move forward
     */
    function moveTimelineForward(stepHours: number) {
        userInitiatedTimelineChange = true;
        const currentTimestamp = windyStore.get('timestamp');
        const newTimestamp = currentTimestamp + (stepHours * 3600 * 1000); // Step hours in milliseconds
        //const roundedTimestamp = getRoundedHourTimestamp(newTimestamp);
        //windyStore.set('timestamp', roundedTimestamp);
        windyStore.set('timestamp', newTimestamp);
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
     * @param date Date object or ISO string to format
     * @returns Formatted date string in dd/mm/yyyy format
    */
    function formatDateDDMMYYYY(date: Date | string): string {
        const dateObj = date instanceof Date ? date : new Date(date);
        if (isNaN(dateObj.getTime())) return 'Invalid Date';
        
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear();
        return `${day}/${month}/${year}`;
    }

    /**
     * Formats time as HH:MM (24-hour format)
     * @param date Date object or ISO string to format
     * @returns Formatted time string in HH:MM format
    */
    function formatTime24Hour(date: Date | string): string {
        const dateObj = date instanceof Date ? date : new Date(date);
        if (isNaN(dateObj.getTime())) return 'Invalid Time';
        
        const hours = dateObj.getHours().toString().padStart(2, '0');
        const minutes = dateObj.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    /**
     * Formats duration in hours as HH:MM
     * @param hours - Duration in hours (can be decimal)
     * @returns Formatted string in HH:MM format
     */
    function formatDuration(hours: number): string {
        const totalMinutes = Math.round(Math.abs(hours) * 60);
        const h = Math.floor(totalMinutes / 60);
        const m = totalMinutes % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    }

    /**
     * Formats date and time together
     * @param date Date object or ISO string to format
     * @returns Formatted date and time string in dd/mm/yyyy HH:MM format
    */
    function formatDateTime(date: Date | string): string {
        const dateObj = date instanceof Date ? date : new Date(date);
        if (isNaN(dateObj.getTime())) return 'Invalid DateTime';
        
        return `${formatDateDDMMYYYY(dateObj)} ${formatTime24Hour(dateObj)}`;
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
     * Calculate new position from a starting point using dead reckoning along a rhumb line
     * @param startLat Starting latitude in degrees
     * @param startLon Starting longitude in degrees
     * @param bearing True bearing in degrees (0-359)
     * @param distanceNM Distance to travel in nautical miles
     * @returns New position {lat, lon}
     */
    function deadReckoningFromPoint(startLat: number, startLon: number, bearing: number, distanceNM: number): {lat: number, lon: number} {
        // Convert to radians
        const lat1 = toRadians(startLat);
        const lon1 = toRadians(startLon);
        const bearingRad = toRadians(bearing);
        
        // Earth radius in nautical miles
        const R = 3437.7468;
        
        // Angular distance
        const d = distanceNM / R;
        
        // Calculate destination latitude
        const lat2 = Math.asin(Math.sin(lat1) * Math.cos(d) + Math.cos(lat1) * Math.sin(d) * Math.cos(bearingRad));
        
        // Calculate destination longitude using rhumb line formula
        const dPhi = Math.log(Math.tan(lat2 / 2 + Math.PI / 4) / Math.tan(lat1 / 2 + Math.PI / 4));
        const q = Math.abs(dPhi) > 10e-12 ? (lat2 - lat1) / dPhi : Math.cos(lat1);
        const dLon = d * Math.sin(bearingRad) / q;
        
        // Handle date line crossing
        let lon2 = (lon1 + dLon + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
        
        return {
            lat: toDegrees(lat2),
            lon: toDegrees(lon2)
        };
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
     * Handles follow ship logic with throttling
     * @param isTimelineChange - True if this is triggered by timeline change, false for position updates
     * @param forceUpdate - Force update regardless of throttling
     */
    function handleFollowShip(isTimelineChange: boolean = false, forceUpdate: boolean = false) {
        if (!followShip) return;
        
        const now = Date.now();
        let shouldUpdate = forceUpdate;
        
        // Determine target position
        let targetLat: number, targetLon: number;
        if (lastRouteProjection) {
            targetLat = lastRouteProjection.lat;
            targetLon = lastRouteProjection.lon;
        } else if (lastFallbackProjection) {
            targetLat = lastFallbackProjection.lat;
            targetLon = lastFallbackProjection.lon;
        } else if (lastLatitude !== null && lastLongitude !== null) {
            targetLat = lastLatitude;
            targetLon = lastLongitude;
        } else {
            return; // No valid position available
        }
        
        if (isTimelineChange) {
            // Timeline changes: update if projection position changed
            if (!lastProjectionPosition || 
                Math.abs(targetLat - lastProjectionPosition.lat) > 0.1 || 
                Math.abs(targetLon - lastProjectionPosition.lon) > 0.1) {
                shouldUpdate = true;
                lastTimelineFollowTime = now;
                lastProjectionPosition = { lat: targetLat, lon: targetLon };
            }
        } else {
            // Position updates: throttle to once per minute (60000ms)
            if (now - lastFollowUpdateTime >= 60000) {
                shouldUpdate = true;
                lastFollowUpdateTime = now;
            }
        }
        
        if (shouldUpdate) {
            // Center on vessel position, keep current zoom level
            map.setView([targetLat, targetLon]);
        }
    }

    /**
     * Toggles the follow ship mode
    */
    function toggleFollowShip() {
        followShip = !followShip;
        
        /*if (followShip) {
            // Force immediate update when follow mode is enabled
            handleFollowShip(false, true); // Force update regardless of throttling
        }*/
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
    
    // Reactive statement to handle test mode changes - runs when testModeEnabled, testSOG, or testCOG change
    $: handleTestModeChange(testModeEnabled, testSOG, testCOG);
    
    function handleTestModeChange(enabled: boolean, sog: number, cog: number) {
        // Update ETAs when test mode or test values change
        if (isRouteLoaded) {
            etc_etaCalculation();
            waypointETAs = computeWaypointsETAs();
            
            // Refresh waypoint display to show updated ETAs
            if (showRouteWaypoints && routeMarkers) {
                displayRouteWaypoints();
            }
        }
        
        // Note: No forced timeline projection recalculation here
        // Test mode changes will be detected by the normal change detection logic
        // since SOG changes will trigger recalculation automatically
        
        // Update vessel marker when test mode changes
        if (lastLatitude !== null && lastLongitude !== null) {
            const validCOG = enabled ? cog : (Number.isFinite(myCourseOverGroundT) ? myCourseOverGroundT : 0);
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
            emergencyLayer?.clearLayers(); // Clear emergency devices layer
            
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
            
            // Remove map event listeners
            if (map) {
                map.off('zoomend');
            }
            
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

    // Test function to manually create a meteorological marker (for debugging)
    function testMeteoMarker() {
        if (!map) {
            console.error('Map not available for testing');
            return;
        }
        
        // Get current map center for test marker
        const center = map.getCenter();
        const testLat = center.lat;
        const testLon = center.lng;
        
        // Test weather data
        const testWeatherData = {
            utcDay: 12,
            utcHour: 14,
            utcMin: 30,
            avgWindSpeed: '15',
            windDir: '270',
            windGust: '22',
            windGustDir: '280',
            airTemp: '18.5',
            humidity: '65',
            dewPoint: '12.1',
            pressure: '1013.2',
            pressureTendency: 'Steady',
            visibility: '15',
            visibilityGreater: false,
            waterTemp: '16.8',
            waterLevel: '2.1',
            waterTrend: 'Rising',
            salinity: '35.2',
            currentSpeed: '1.2',
            currentDir: '045',
            precipitation: 'No',
            ice: 'No',
            positionAccuracy: true
        };
        
        addMeteoStationMarker('TEST001', testLat, testLon, testWeatherData);
    }

    // Make test function available globally for console testing
    if (typeof window !== 'undefined') {
        (window as any).testMeteoMarker = testMeteoMarker;
    }
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
    
    .timeline-nav-button {
        font-size: 12px !important; /* Smaller font for timeline buttons */
    }
    
    .timeline-step-selector {
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 3px;
        font-size: 12px;
        justify-content: center;
    }
    
    .timeline-step-selector label {
        white-space: nowrap;
        margin: 0;
    }
    
    .timeline-step-selector select {
        /* background: whitesmoke; */
        /* color: black; */
        border: 1px solid #555;
        border-radius: 3px;
        padding: 2px 5px;
        min-width: 40px;
    }
    
    .plugin__buttons__grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 8px;
        margin: 10px 0;
        align-items: center;
    }
    
    .plugin__buttons__grid button {
        width: 100%;
        min-height: 35px;
        padding: 8px 4px;
        font-size: 12px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    /* Weather prediction button spans 2 columns */
    .weather-prediction-button {
        grid-column: span 4;
        font-size: 12px !important;
        white-space: normal !important;
        overflow: visible !important;
        text-overflow: unset !important;
    }
    
    /* Timeline step selector styled to match buttons */
    .timeline-step-selector {
        width: 100%;
        min-height: 35px;
        padding: 8px 4px;
        font-size: 12px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        box-sizing: border-box;
        /* Inherit button colors from existing theme */
        /*background: inherit;*/
        background: whitesmoke;
        /*color: inherit;*/
        color: black;
        border: 1px solid currentColor;
    }
    
    .timeline-step-selector:hover {
        opacity: 0.8;
    }
    
    .plugin__buttons__centered {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        gap: 10px;
        margin: 5px 0;
    }
    
    .plugin__buttons__row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
        gap: 10px;
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
    
    /* Emergency Device Styles */
    .emergency-tooltip {
        background: rgba(255, 0, 0, 0.95) !important;
        color: white !important;
        border: 2px solid #fff !important;
        border-radius: 5px !important;
        padding: 8px !important;
        font-weight: bold !important;
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.8) !important;
    }
    
    .sart-emergency-marker {
        background: transparent !important;
        border: none !important;
    }
    
    .sar-aircraft-marker {
        background: transparent !important;
        border: none !important;
    }
    
    /* SART pulse animation */
    @keyframes sart-pulse {
        0% { 
            transform: scale(1);
            box-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
        }
        50% { 
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(255, 0, 0, 1);
        }
        100% { 
            transform: scale(1);
            box-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
        }
    }
    
    /* AtoN (Aid to Navigation) Styles */
    .aton-marker {
        /*background: transparent !important;*/
        border: none !important;
    }
    
    .aton-marker div {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        user-select: none;
        pointer-events: none;
    }
    
    /* Specific AtoN tooltip styling */
    .leaflet-tooltip.aton-tooltip {
        background: rgba(70, 130, 180, 0.55) !important;
        color: white !important;
        border: 2px solid #fff !important;
        border-radius: 5px !important;
        padding: 6px !important;
        font-weight: bold !important;
        font-size: 12px !important;
    }
    
    /* AIS ship tooltip styling */
    .leaflet-tooltip.ais-ship-tooltip {
        background: white !important;
        border: 2px solid #007acc !important;
        border-radius: 5px !important;
        padding: 8px !important;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
        font-size: 12px !important;
        font-family: 'Segoe UI', Arial, sans-serif !important;
        white-space: nowrap !important;
    }
    
    /* Marine Traffic style vessel icon */
    /*.marine-traffic-marker {
        background: transparent !important;
        border: none !important;
    }
    
    .marine-traffic-icon {
        user-select: none;
        pointer-events: none;
    }
    
    .marine-traffic-icon svg {
        filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.3));
    }
    */
    /* Base station tooltip styling */
    .leaflet-tooltip.base-station-tooltip {
        background: white !important;
        border: 2px solid #ff6600 !important;
        border-radius: 5px !important;
        padding: 8px !important;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
        font-size: 12px !important;
        font-family: 'Segoe UI', Arial, sans-serif !important;
        white-space: nowrap !important;
    }
</style>

