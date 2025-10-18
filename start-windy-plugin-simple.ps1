# Simple startup script - minimal version
# This can be placed in Windows Startup folder

$PluginPath = "c:\temp\windy\Plugin\nmea-tracker"

# Wait for system to be ready
Start-Sleep -Seconds 15

# Start the background watch job
Start-Job -ScriptBlock { 
    Set-Location "c:\temp\windy\Plugin\nmea-tracker"
    & npm.cmd run start 
} -Name "WindyPluginWatch"

# Optional: Create a desktop notification
Add-Type -AssemblyName System.Windows.Forms
[System.Windows.Forms.MessageBox]::Show("Windy Plugin watch mode started in background", "Windy Plugin", [System.Windows.Forms.MessageBoxButtons]::OK, [System.Windows.Forms.MessageBoxIcon]::Information)