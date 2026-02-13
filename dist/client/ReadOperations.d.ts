import type { Address, Wei } from '../types/common.js';
import type { PoolInfo, ProviderInfo } from '../types/staking.js';
import type { EmissionInfo } from '../types/emissions.js';
import type { EpochInfo } from '../types/claims.js';
import type { MyntisTokenContract, StakingContract, EmissionsContract, DistributorContract, VaultContract, RegistryContract } from '../contracts/index.js';
export declare class ReadOperations {
    private token;
    private staking;
    private emissions;
    private distributor;
    private vault;
    private registry;
    constructor(token: MyntisTokenContract, staking: StakingContract, emissions: EmissionsContract, distributor: DistributorContract, vault: VaultContract, registry: RegistryContract);
    getCurrentEmissionRate(): Promise<Wei>;
    getEmissionInfo(): Promise<EmissionInfo>;
    getProviderPoolInfo(): Promise<PoolInfo>;
    getUserPoolInfo(): Promise<PoolInfo>;
    getTotalStaked(): Promise<Wei>;
    getTokenBalance(address: Address): Promise<Wei>;
    getTotalSupply(): Promise<Wei>;
    getPendingRewards(address: Address): Promise<Wei>;
    getProviderInfo(provider: Address): Promise<ProviderInfo>;
    getProviderAccruedEmissions(provider: Address): Promise<Wei>;
    getProviderDistributorBalance(provider: Address): Promise<Wei>;
    getEpochInfo(provider: Address, rootIndex: number): Promise<EpochInfo>;
    getEpochCount(provider: Address): Promise<number>;
    hasClaimed(provider: Address, rootIndex: number, user: Address): Promise<boolean>;
    getVaultTotalAssets(): Promise<Wei>;
    convertToShares(assets: Wei): Promise<Wei>;
    convertToAssets(shares: Wei): Promise<Wei>;
    getGlobalSupply(): Promise<{
        totalSupply: Wei;
        canMint: boolean;
        maxSupply: Wei;
    }>;
}
