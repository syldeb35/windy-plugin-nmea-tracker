# Windy Plugin Auto-Start Script
# Place this in your Windows Startup folder or run via Task Scheduler

# Configuration
$PluginPath = "c:\temp\windy\Plugin\nmea-tracker"
$JobName = "WindyPluginWatch"
$LogPath = "$PluginPath\startup.log"

# Function to log with timestamp
function Write-Log {
    param($Message)
    $Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$Timestamp - $Message" | Out-File -FilePath $LogPath -Append
    Write-Host "$Timestamp - $Message"
}

try {
    Write-Log "Starting Windy Plugin auto-startup script"
    
    # Check if plugin directory exists
    if (-not (Test-Path $PluginPath)) {
        Write-Log "ERROR: Plugin directory not found: $PluginPath"
        exit 1
    }
    
    # Stop existing job if running
    $ExistingJob = Get-Job -Name $JobName -ErrorAction SilentlyContinue
    if ($ExistingJob) {
        Write-Log "Stopping existing job: $JobName"
        Stop-Job -Name $JobName
        Remove-Job -Name $JobName
    }
    
    # Wait a bit for system to be ready (useful on startup)
    Start-Sleep -Seconds 10
    
    # Start the watch job
    Write-Log "Starting background watch job for Windy plugin"
    Start-Job -ScriptBlock { 
        param($Path, $LogPath)
        try {
            Set-Location $Path
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            "$timestamp - Starting npm watch mode" | Out-File -FilePath $LogPath -Append
            & npm.cmd run start 2>&1 | ForEach-Object {
                $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
                "$timestamp - $_" | Out-File -FilePath $LogPath -Append
            }
        } catch {
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            "$timestamp - ERROR: $_" | Out-File -FilePath $LogPath -Append
        }
    } -ArgumentList $PluginPath, $LogPath -Name $JobName
    
    Write-Log "Job started successfully. Status:"
    $Job = Get-Job -Name $JobName
    Write-Log "Job ID: $($Job.Id), State: $($Job.State)"
    
    Write-Log "Auto-startup complete. Check $LogPath for ongoing logs."
    
} catch {
    Write-Log "ERROR during startup: $_"
    exit 1
}