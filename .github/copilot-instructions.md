# Windy Plugin NMEA Tracker - AI Coding Instructions

## Project Overview
This is a **Windy.com plugin** for real-time vessel tracking using NMEA/AIS data. The plugin connects to an external NMEA server via WebSocket to display vessel position, course, speed, and weather forecasts on the Windy map.

**Current Version**: 1.1.2 (see `package.json`)

## Architecture & Key Components

### Core Technologies
- **Svelte 4** + TypeScript for UI components  
- **Rollup** for bundling with Windy-specific plugins
- **Windy Plugin API** (`@windy/*` modules) for map integration
- **Socket.io** for real-time NMEA data streaming
- **Leaflet** (via Windy) for map markers and overlays

### Main Files Structure
- `src/plugin.svelte` - Main UI component (9000+ lines, includes all business logic)
- `src/pluginConfig.ts` - Windy plugin configuration and metadata  
- `src/types.d.ts` - TypeScript declarations for Windy APIs and global types
- `src/boatIcon.ts` - Custom rotating vessel icon with SVG rendering
- `src/AtoN.ts` - Maritime navigation aids (buoys, beacons) SVG definitions
- `src/windy-imports-plugin.js` - Custom Rollup plugin for handling Windy external modules

### Windy Plugin Integration Patterns
- **External modules**: All `@windy/*` imports are marked as external in rollup config
- **Plugin config**: Must export `ExternalPluginConfig` with specific UI modes (`rhpane`, `fullscreen`)
- **Event system**: Uses `@windy/broadcast` for inter-component communication
- **Map integration**: Direct access to Leaflet map via `@windy/map`

## Development Workflow

### Build & Development Commands
```bash
npm.cmd run start      # Watch mode for development
npm.cmd run build      # Production build  
npm.cmd run serve      # Development server with auto-reload
npm.cmd run windy      # Opens Windy with localhost plugin URL
```

### GitHub Actions CI/CD
- **`.github/workflows/build-release.yml`** - Main CI/CD pipeline for releases and builds
- **`.github/workflows/main.yml`** - Plugin publishing to Windy registry
- **`.github/workflows/dev-build.yml`** - Development builds
- Triggered on tags (`v*`), push to main, PRs, or manual dispatch
- Automatically builds and packages plugin for distribution

### Background Development (PowerShell)
Run watch mode as background job to free up terminal:
```powershell
# Start background watch job
Start-Job -ScriptBlock { 
    Set-Location "c:\temp\windy\Plugin\nmea-tracker"
    & npm.cmd run start 
} -Name "WindyPluginWatch"

# Monitor job output
Receive-Job -Name "WindyPluginWatch" -Keep

# Stop and cleanup
Get-Job -Name "WindyPluginWatch" | Stop-Job | Remove-Job
```

### Key Build Configuration
- **Entry point**: `src/plugin.svelte` (not typical .js/.ts)
- **Output**: `dist/plugin.js` and `dist/plugin.min.js` as ES modules
- **External deps**: All `@windy/*` modules excluded from bundle
- **Custom plugins**: `windyImportsPlugin()` handles Windy API resolution

### Publishing Process
- **Primary**: GitHub Actions workflow (`.github/workflows/main.yml`) for automated publishing
- **Manual**: PowerShell script `publish-plugin.ps1` for local publishing  
- Requires Windy API key (`WINDY_API_KEY` secret) and git repository
- Builds, archives, and uploads to Windy's plugin system
- Can be triggered via GitHub Actions workflow dispatch or locally

## Code Patterns & Conventions

### NMEA Data Handling
- WebSocket connection to external NMEA server (default localhost:8080)
- Real-time parsing of GPS (GGA, RMC, VTG) and AIS (VDO, VDM) frames
- Vessel state stored in Svelte reactive variables (`myLatitude`, `myLongitude`, etc.)

### GPX Route Management (Major Feature)
- **GPX import/export**: Full route editing with waypoint management
- **Leg types**: Rhumb Line (RL, constant bearing) vs Great Circle (GC, shortest path)
- **Route projection**: Future position calculation based on SOG/COG or route following
- **Route editor modal**: Interactive waypoint editing with distance/bearing calculations
- **ETA calculations**: Estimated time of arrival for each waypoint
- Supports maritime navigation standards for precise route planning

### Map Marker Management
- **Layer hierarchy**: Vessel icon (top) → waypoints → AIS stations → weather → other ships
- **Custom icons**: `createRotatingBoatIcon()` with dynamic rotation based on COG
- **Track history**: 30-day position trail with automatic cleanup
- **Route visualization**: GPX route display with leg type indicators (RL/GC)
- **Waypoint markers**: Interactive route waypoints with progress tracking

### State Management
- All state in single Svelte component (no external store)
- Local storage for persistence (`serverAddress`, `vesselName`, route data)
- Reactive statements for automatic map updates

### UI Component Structure
```svelte
<!-- Help modal with extensive maritime feature documentation -->
<!-- Main plugin interface -->
<section class="plugin__content">
  <!-- Connection status and vessel data -->
  <!-- Weather prediction integration -->
  <!-- Timeline navigation controls -->
</section>
```

## Maritime Domain Specifics

### Navigation Calculations
- **Coordinate systems**: WGS84 decimal degrees
- **Distance/bearing**: Great circle vs rhumb line calculations
- **AIS integration**: MMSI validation, vessel type classification
- **Weather overlay**: Position-based forecast retrieval

### Test Mode Features
- Simulated vessel movement for development/demo
- Configurable SOG/COG simulation
- Independent of real NMEA data source

## Integration Points

### External Dependencies
- **NMEA Server**: Separate Python/executable that provides WebSocket endpoint
- **Windy APIs**: Map rendering, weather data, timeline controls
- **Browser APIs**: Local storage, WebSocket, file upload (GPX)

### Cross-Platform Considerations
- OS detection for appropriate NMEA server download links
- PowerShell publishing script (Windows-specific)
- File path handling for different platforms

## Common Development Tasks

### Adding New NMEA Sentence Types
1. Extend parsing logic in main Svelte component WebSocket handler
2. Add new reactive variables for data storage
3. Update UI display sections accordingly

### Map Feature Extensions
1. Import new Leaflet functionality via window.L
2. Add to appropriate layer in the established hierarchy
3. Ensure proper cleanup in component destruction

### Plugin Configuration Changes
1. Update `src/pluginConfig.ts` for metadata changes
2. Modify `src/types.d.ts` for new Windy API usage
3. Test with both desktop (`rhpane`) and mobile (`fullscreen`) UI modes