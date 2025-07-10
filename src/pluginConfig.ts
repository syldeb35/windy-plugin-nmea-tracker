import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-nmea-tracker',
    version: '1.0.0',
    title: 'GPS tracker',
    icon: '🛰️',
    description: 'GPS Tracker.',
    author: 'Sylvain DEBRAY (CMA CGM)',
    repository: 'https://github.com/syldeb35/windy-plugin-nmea-tracker',
    desktopUI: 'rhpane',
    mobileUI: 'fullscreen',
    routerPath: '/nmea-tracker',
};

export default config;
