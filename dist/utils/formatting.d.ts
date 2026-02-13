import type { Wei } from '../types/common.js';
export declare function formatTokens(wei: Wei, decimals?: number): string;
export declare function parseTokens(amount: string, decimals?: number): Wei;
export declare function formatAddress(address: string): string;
