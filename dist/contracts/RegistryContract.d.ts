import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import type { Address, Wei } from '../types/common.js';
export declare class RegistryContract extends BaseContract {
    constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer);
    getGlobalSupply(): Promise<Wei>;
    canMint(amount: Wei): Promise<boolean>;
    maxSupply(): Promise<Wei>;
}
