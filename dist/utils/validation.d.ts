import type { Address } from '../types/common.js';
export declare function isValidAddress(address: string): address is Address;
export declare function requireValidAddress(address: string, name?: string): Address;
