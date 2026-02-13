import type { Address, Wei, TransactionResult } from '../types/common.js';
import type { ProviderInfo } from '../types/staking.js';
import type { RewardEntry, MerkleTreeResult } from '../types/claims.js';
import type { ZKProofResult } from '../types/zk.js';
import type { MyntisTokenContract, StakingContract, DistributorContract } from '../contracts/index.js';
import { MyntisAPIClient } from '../api/index.js';
import { MyntisMerkleTree } from '../merkle/index.js';
export interface DistributeRewardsOptions {
    applyQuality?: boolean;
    generateZKProof?: boolean;
    expiryDays?: number;
    chainId?: number;
}
export interface DistributeRewardsResult {
    merkleTree: MerkleTreeResult;
    zkProof?: ZKProofResult;
    rootIndex: number;
    txHash: string;
}
export declare class ProviderOperations {
    private token;
    private staking;
    private distributor;
    private stakingAddress;
    private distributorAddress;
    private chainId;
    private api?;
    private signerAddress?;
    constructor(token: MyntisTokenContract, staking: StakingContract, distributor: DistributorContract, stakingAddress: Address, distributorAddress: Address, chainId: number, api?: MyntisAPIClient | undefined, signerAddress?: Address | undefined);
    stake(amount: Wei): Promise<TransactionResult>;
    unstake(amount: Wei): Promise<TransactionResult>;
    harvestEmissions(): Promise<{
        tx: TransactionResult;
        amount: Wei;
    }>;
    fundDistributor(amount: Wei): Promise<TransactionResult>;
    buildMerkleTree(entries: RewardEntry[], chainId?: number): MyntisMerkleTree;
    applyQualityWeighting(entries: RewardEntry[]): Promise<RewardEntry[]>;
    generateZKProof(entries: RewardEntry[], merkleRoot: string, totalAmount: Wei): Promise<ZKProofResult | null>;
    distributeRewards(entries: RewardEntry[], options?: DistributeRewardsOptions): Promise<DistributeRewardsResult>;
    getAccruedEmissions(): Promise<Wei>;
    getDistributorBalance(): Promise<Wei>;
    getInfo(): Promise<ProviderInfo>;
    withdrawEmissions(amount: Wei): Promise<TransactionResult>;
}
