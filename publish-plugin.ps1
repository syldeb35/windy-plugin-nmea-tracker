# Windows PowerShell script to publish Windy plugin (DEBUG VERSION)
param(
    [string]$WindyApiKey = "KskpHxi7i2gkMBqZA4DGb69CZMwLBK8Y",
    [string]$Owner = "Sylvain Debray",
    [string]$Repository = "syldeb35/windy-plugin-nmea-tracker"
)

# Validate API key
if ($WindyApiKey -eq "PutYourAPIKeyHere" -or [string]::IsNullOrEmpty($WindyApiKey)) {
    Write-Host "Error: Please set your Windy API key" -ForegroundColor Red
    Write-Host "Usage: .\publish-plugin.ps1 -WindyApiKey 'your-api-key'" -ForegroundColor Yellow
    exit 1
}

# Check if we're in the right directory and dist exists
if (-not (Test-Path "dist")) {
    Write-Host "Error: dist directory not found. Please run 'npm run build' first." -ForegroundColor Red
    exit 1
}

# Check if required tools are available
$tools = @("git", "tar")
foreach ($tool in $tools) {
    if (-not (Get-Command $tool -ErrorAction SilentlyContinue)) {
        Write-Host "Error: $tool is not available. Please install Git for Windows." -ForegroundColor Red
        exit 1
    }
}

# Get current commit SHA
try {
    $SHA = git rev-parse --short HEAD
    if ($LASTEXITCODE -ne 0) {
        throw "Git command failed"
    }
} catch {
    Write-Host "Error: Unable to get git commit SHA. Make sure you're in a git repository." -ForegroundColor Red
    exit 1
}

Write-Host "=== DEBUG INFO ===" -ForegroundColor Cyan
Write-Host "Repository: $Repository" -ForegroundColor Gray
Write-Host "Commit SHA: $SHA" -ForegroundColor Gray
Write-Host "Owner: $Owner" -ForegroundColor Gray
Write-Host "API Key length: $($WindyApiKey.Length)" -ForegroundColor Gray
Write-Host "API Key first 8 chars: $($WindyApiKey.Substring(0, [Math]::Min(8, $WindyApiKey.Length)))" -ForegroundColor Gray

# Change to dist directory
$DIR = "dist"
Push-Location $DIR

try {
    Write-Host "`n=== CHECKING DIST CONTENTS ===" -ForegroundColor Cyan
    Get-ChildItem . | ForEach-Object { Write-Host "  $($_.Name) ($($_.Length) bytes)" -ForegroundColor Gray }

    Write-Host "`n=== ORIGINAL PLUGIN.JSON ===" -ForegroundColor Cyan
    if (Test-Path "./plugin.json") {
        $originalContent = Get-Content "./plugin.json" -Raw
        Write-Host $originalContent -ForegroundColor Gray
    } else {
        Write-Host "ERROR: plugin.json not found!" -ForegroundColor Red
        exit 1
    }

    Write-Host "`n=== CREATING PLUGIN ARCHIVE ===" -ForegroundColor Green

    # Create plugin info JSON
    $pluginInfo = @{
        repositoryName = $Repository
        commitSha = $SHA
        repositoryOwner = $Owner
    }

    # Convert to JSON and write to file
    $pluginInfoJson = $pluginInfo | ConvertTo-Json -Compress
    Write-Host "Plugin info JSON: $pluginInfoJson" -ForegroundColor Gray
    $pluginInfoJson | Out-File -FilePath "plugin-info.json" -Encoding UTF8

    # Use PowerShell for JSON merging
    Write-Host "Merging plugin metadata..." -ForegroundColor Gray
    
    $originalPlugin = Get-Content "./plugin.json" -Raw | ConvertFrom-Json
    $pluginInfoObj = Get-Content "./plugin-info.json" -Raw | ConvertFrom-Json
    
    # Merge the objects
    $pluginInfoObj.PSObject.Properties | ForEach-Object {
        $originalPlugin | Add-Member -MemberType NoteProperty -Name $_.Name -Value $_.Value -Force
    }
    
    # Write merged JSON
    $mergedJson = $originalPlugin | ConvertTo-Json -Depth 10
    $mergedJson | Out-File -FilePath "plugin2.json" -Encoding UTF8

    # Replace the original plugin.json
    Remove-Item "./plugin.json" -ErrorAction Stop
    Rename-Item "./plugin2.json" "plugin.json" -ErrorAction Stop

    Write-Host "`n=== FINAL PLUGIN.JSON ===" -ForegroundColor Cyan
    $finalContent = Get-Content "./plugin.json" -Raw
    Write-Host $finalContent -ForegroundColor Gray

    # Create tar archive
    Write-Host "`n=== CREATING TAR ARCHIVE ===" -ForegroundColor Green
    $tarOutput = tar cf ./plugin.tar --exclude='./plugin.tar' . 2>&1
    
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to create tar archive: $tarOutput"
    }

    # Verify archive was created
    if (-not (Test-Path "./plugin.tar")) {
        throw "plugin.tar was not created"
    }

    $archiveSize = (Get-Item "./plugin.tar").Length
    Write-Host "Archive created successfully ($archiveSize bytes)" -ForegroundColor Green

    # List archive contents
    Write-Host "`n=== ARCHIVE CONTENTS ===" -ForegroundColor Cyan
    $archiveContents = tar -tf ./plugin.tar 2>&1
    Write-Host $archiveContents -ForegroundColor Gray

    # Test the API endpoint with verbose curl
    Write-Host "`n=== PUBLISHING PLUGIN (VERBOSE) ===" -ForegroundColor Green
    
    # Use cmd to execute curl with maximum verbosity
    $curlCmd = "curl -v --fail-with-body -X POST `"https://node.windy.com/plugins/v1.0/upload`" -H `"x-windy-api-key: $WindyApiKey`" -F `"plugin_archive=@./plugin.tar`""
    
    Write-Host "Executing: $curlCmd" -ForegroundColor Gray
    
    $curlResponse = cmd /c $curlCmd 2>&1
    $curlExitCode = $LASTEXITCODE
    
    Write-Host "`n=== CURL RESPONSE ===" -ForegroundColor Cyan
    Write-Host "Exit code: $curlExitCode" -ForegroundColor Gray
    Write-Host "Full response:" -ForegroundColor Gray
    Write-Host $curlResponse -ForegroundColor Gray
    
    if ($curlExitCode -eq 0) {
        Write-Host "`nPlugin published successfully! 🎉" -ForegroundColor Green
    } else {
        Write-Host "`nPublication failed!" -ForegroundColor Red
        Write-Host "This appears to be a server-side issue (HTTP 500)" -ForegroundColor Yellow
        
        # Additional debugging - try a simple API test
        Write-Host "`n=== TESTING API CONNECTIVITY ===" -ForegroundColor Cyan
        $testResponse = cmd /c "curl -v -H `"x-windy-api-key: $WindyApiKey`" `"https://node.windy.com/plugins/v1.0/`"" 2>&1
        Write-Host "API test response:" -ForegroundColor Gray
        Write-Host $testResponse -ForegroundColor Gray
    }

} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
} finally {
    # Don't cleanup for debugging
    Write-Host "`n=== DEBUG: Files left for inspection ===" -ForegroundColor Yellow
    Get-ChildItem . | Where-Object { $_.Name -match "(plugin|tar)" } | ForEach-Object { 
        Write-Host "  $($_.Name) ($($_.Length) bytes)" -ForegroundColor Yellow 
    }
    
    # Return to original directory
    Pop-Location
}