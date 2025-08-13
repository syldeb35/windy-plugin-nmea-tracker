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
    export interface WindyBroadcast {
        emit(event: string, data?: any): void;
        on(event: string, callback: Function): void;
    }
    const bcast: WindyBroadcast;
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
    export interface WindDataResult {
        dir: number;
        wind: number;
    }
    
    export interface WaveDataResult {
        period: number;
        dir: number;
    }
    
    export function wind2obj(values: number[] | any[]): WindDataResult;
    export function wave2obj(values: number[] | any[]): WaveDataResult;
}

declare module '@windy/store' {
    export interface WindyStoreInterface {
        get(key: string): any;
        set(key: string, value: any): void;
        on(key: string, callback: (value: any) => void): (() => void) | void;
    }
    const store: WindyStoreInterface;
    export default store;
}

declare module '@windy/metrics' {
    export interface WindyMetrics {
        wind: { convertValue(value: number): string };
        waves: { convertValue(value: number): string };
        temp: { convertValue(value: number): string };
        pressure: { convertValue(value: number): string };
    }
    const metrics: WindyMetrics;
    export default metrics;
}