import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import type { Address, HexString, Wei, TransactionResult } from '../types/common.js';
import type { ClaimData, EpochInfo } from '../types/claims.js';
import type { ZKProof } from '../types/zk.js';
export declare class DistributorContract extends BaseContract {
    constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer);
    submitMerkleRoot(root: HexString, expiry: number, totalClaimableAmount: Wei, zkProof?: ZKProof, publicInputs?: string[]): Promise<{
        tx: TransactionResult;
        rootIndex: number;
    }>;
    depositBalance(amount: Wei): Promise<TransactionResult>;
    claim(data: ClaimData): Promise<TransactionResult>;
    batchClaim(claims: ClaimData[]): Promise<TransactionResult>;
    getProviderBalance(provider: Address): Promise<Wei>;
    getLockedBalance(provider: Address): Promise<Wei>;
    getEpochInfo(provider: Address, rootIndex: number): Promise<EpochInfo>;
    getEpochCount(provider: Address): Promise<number>;
    hasClaimed(provider: Address, rootIndex: number, user: Address): Promise<boolean>;
}
