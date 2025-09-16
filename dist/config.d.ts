import type { SDKConfig } from "./types";
export declare function requireEnv(value: string | undefined, name: string): string;
export declare function loadFrontendConfig(): SDKConfig;
export declare function loadBackendConfig(): SDKConfig;
