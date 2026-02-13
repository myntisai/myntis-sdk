import type { ContractAddresses } from '../types/common.js';
export declare const BASE_MAINNET_ADDRESSES: ContractAddresses;
export declare const BASE_SEPOLIA_ADDRESSES: Partial<ContractAddresses>;
export declare function getDefaultAddresses(chainId: number): ContractAddresses;
