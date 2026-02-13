import type { Wei } from './common.js';
export interface VaultInfo {
    totalAssets: Wei;
    totalShares: Wei;
    sharePrice: Wei;
}
