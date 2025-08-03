// Global Navigator API extensions
export {};
declare global {
    interface Navigator {
        userAgentData?: {
            platform?: string;
            getHighEntropyValues?: (hints: string[]) => Promise<{architecture?: string}>;
        };
        deviceMemory?: number;
    }
}

// Windy plugin interfaces and module declarations
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
        private: boolean;
    }
}

declare module '@windy/broadcast' {
    const bcast: {
        emit: (event: string, data?: any) => void;
        on: (event: string, callback: Function) => void;
    };
    export default bcast;
}

declare module '@windy/map' {
    export const map: any;
}

declare module '@windy/interpolator' {
    export function getLatLonInterpolator(): Promise<any>;
}

declare module '@windy/config' {
    export const overlaySettings: any;
}

declare module '@windy/utils' {
    export function wind2obj(values: any): { dir: number, wind: number };
}

declare module '@windy/store' {
    const store: {
        get: (key: string) => any;
        set: (key: string, value: any) => void;
        on: (key: string, callback: (value: any) => void) => (() => void) | void;
    };
    export default store;
}

declare module '@windy/metrics' {
    const metrics: {
        wind: { convertValue: (value: number) => string };
        waves: { convertValue: (value: number) => string };
        temp: { convertValue: (value: number) => string };
        pressure: { convertValue: (value: number) => string };
    };
    export default metrics;
}