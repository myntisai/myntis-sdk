import type { Address, Wei, TransactionResult } from '../types/common.js';
import type { ClaimData, ClaimableReward } from '../types/claims.js';
import type { MyntisTokenContract, DistributorContract, VaultContract } from '../contracts/index.js';
import { MyntisAPIClient } from '../api/index.js';
export declare class AgentOperations {
    private token;
    private distributor;
    private vault;
    private vaultAddress;
    private distributorAddress;
    private api?;
    private signerAddress?;
    constructor(token: MyntisTokenContract, distributor: DistributorContract, vault: VaultContract, vaultAddress: Address, distributorAddress: Address, api?: MyntisAPIClient | undefined, signerAddress?: Address | undefined);
    claim(data: ClaimData): Promise<TransactionResult>;
    batchClaim(claims: ClaimData[]): Promise<TransactionResult>;
    getClaimableRewards(): Promise<ClaimableReward[]>;
    claimAll(): Promise<TransactionResult | null>;
    hasClaimed(provider: Address, rootIndex: number): Promise<boolean>;
    depositToVault(amount: Wei): Promise<TransactionResult>;
    withdrawFromVault(amount: Wei): Promise<TransactionResult>;
    getVaultShares(): Promise<Wei>;
    getVaultValue(): Promise<Wei>;
    getBalance(): Promise<Wei>;
    approveTokens(spender: Address, amount: Wei): Promise<TransactionResult>;
}
