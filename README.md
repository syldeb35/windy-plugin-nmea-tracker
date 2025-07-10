# Windy Plugin NMEA Tracker

## Windy "NMEA position tracker" plugin – GPS/AIS position tracking

This plugin allows you to display a vessel's position in real time on the Windy map, based on NMEA data received via UDP, TCP, or serial port. It displays:

- The last NMEA frame received
- The vessel's latitude, longitude, course, and speed over ground
- The vessel's name (if available via AIS type 5)
- Track history and future position projection
- Weather forecasts at the vessel's position (wind, waves, rain, etc.)

**Main Features:**

- Automatic connection to the NMEA server (configurable)
- Support for classic GPS (GGA, RMC, VTG, etc.) and AIS (VDO, VDM) frames
- Decoding of the vessel's name via AIS class A (type 5, even fragmented)
- Automatic or manual centering on the vessel
- Contextual weather display based on the vessel's position

**Usage:**

1. Launch the NMEA Tracker server (Python) on your computer or a Raspberry Pi.
2. Configure the server's IP/port in the plugin or the server's web interface.
3. Open the plugin on Windy, view and track your vessel live!

---

**Ideal for:**
Navigation, fleet tracking, onboard weather monitoring, or experimenting with real-time NMEA/AIS data.

**Documentation at: [https://docs.windy-plugins.com/](https://docs.windy-plugins.com/)**

### CHANGELOG

- 1.0.0
  - Initial version of this plugin
