# Windy Plugin NMEA Tracker

Windy plugin to receive NMEA data on port 5000 via webSocket.
It retrieve NMEA frames from a local server (in this case via https://192.168.1.27:5000/gps-data) using GET requests.

it need a simple Python server that:

- Listens on port 5000 (or other).

- Provides a /gps-data route that returns NMEA frames (e.g., $GPGLL, etc.).

- Can generate dynamically or serve fixed frames.

See Python Flask server that generates frames every second:

**Documentation at: [https://docs.windy-plugins.com/](https://docs.windy-plugins.com/)**

# CHANGELOG

-   1.0.0
    -   Initial version of this plugin
