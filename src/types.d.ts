declare module '@windy/interfaces' {
    export interface ExternalPluginConfig {
        name: string;
        version: string;
        title: string;
        icon: string;
        description: string;
        author: string;
        repository: string;
        desktopUI: string;
        mobileUI: string;
        routerPath: string;
    }
}

declare module '@windy/broadcast' {
    const bcast: {
        emit: (event: string, data?: any) => void;
        on: (event: string, callback: Function) => void;
    };
    export default bcast;
}