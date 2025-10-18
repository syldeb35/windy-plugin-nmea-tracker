# Windy Plugin Startup - Batch File Version
# Save as start-windy-plugin.bat and place in Startup folder

@echo off
echo Starting Windy Plugin in background...

REM Wait for system to be ready
timeout /t 15 /nobreak >nul

REM Start PowerShell job in background
powershell -WindowStyle Hidden -Command "Start-Job -ScriptBlock { Set-Location 'c:\temp\windy\Plugin\nmea-tracker'; npm.cmd run start } -Name 'WindyPluginWatch'"

echo Windy Plugin watch mode started in background
pause