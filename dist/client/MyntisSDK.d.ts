import type { Address } from '../types/common.js';
import type { MyntisSDKConfig } from '../config/types.js';
import { MyntisTokenContract, StakingContract, EmissionsContract, DistributorContract, VaultContract, RegistryContract } from '../contracts/index.js';
import { MyntisAPIClient } from '../api/index.js';
import { ProviderOperations } from './ProviderOperations.js';
import { AgentOperations } from './AgentOperations.js';
import { ReadOperations } from './ReadOperations.js';
import { MyntisMerkleTree } from '../merkle/index.js';
export declare class MyntisSDK {
    readonly provider: ProviderOperations;
    readonly agent: AgentOperations;
    readonly read: ReadOperations;
    readonly contracts: {
        token: MyntisTokenContract;
        staking: StakingContract;
        emissions: EmissionsContract;
        distributor: DistributorContract;
        vault: VaultContract;
        registry: RegistryContract;
    };
    readonly api?: MyntisAPIClient;
    readonly merkle: typeof MyntisMerkleTree;
    private config;
    private ethersProvider;
    private signer?;
    private constructor();
    /**
     * Create SDK with private key (backend/agent usage)
     */
    static fromPrivateKey(privateKey: string, config?: Partial<MyntisSDKConfig>): MyntisSDK;
    /**
     * Create SDK with browser provider (frontend usage)
     */
    static fromBrowserProvider(browserProvider: any, config?: Partial<MyntisSDKConfig>): MyntisSDK;
    /**
     * Create read-only SDK (no signer)
     */
    static readOnly(rpcUrl: string, config?: Partial<MyntisSDKConfig>): MyntisSDK;
    /**
     * Get the signer's address (async)
     */
    getAddress(): Promise<Address>;
    /**
     * Get the current chain ID
     */
    getChainId(): number;
    /**
     * Resolve and validate config
     */
    private static resolveConfig;
}
