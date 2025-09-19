import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: 'windy-plugin-nmea-tracker',
    version: '1.1.2',
    title: 'NMEA tracker plugin',
    icon: '🛰️',
    description: 'NMEA tracker plugin.',
    author: 'Sylvain DEBRAY (CMA CGM)',
    repository: 'https://github.com/syldeb35/windy-plugin-nmea-tracker',
    desktopUI: 'rhpane',
    mobileUI: 'fullscreen',
    routerPath: '/nmea-tracker',
    private: true,
    // This plugin is private and not intended for public use.
    // It is used internally by CMA CGM for testing purposes.
    // It is not available in the Windy plugin store.
};

export default config;
