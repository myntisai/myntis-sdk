import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import type { Address, Wei } from '../types/common.js';
import type { EmissionInfo } from '../types/emissions.js';
export declare class EmissionsContract extends BaseContract {
    constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer);
    getCurrentEmissionRate(): Promise<Wei>;
    pendingRewards(provider: Address): Promise<Wei>;
    getEmissionInfo(): Promise<EmissionInfo>;
}
