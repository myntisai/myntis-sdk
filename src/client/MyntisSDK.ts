import { ethers } from 'ethers';
import type { Address } from '../types/common.js';
import type { MyntisSDKConfig, ResolvedMyntisSDKConfig } from '../config/types.js';
import { getDefaultAddresses } from '../config/addresses.js';
import { CHAIN_IDS, DEFAULT_RPC_URLS } from '../config/chains.js';
import {
  MyntisTokenContract,
  StakingContract,
  EmissionsContract,
  DistributorContract,
  VaultContract,
  RegistryContract,
} from '../contracts/index.js';
import { MyntisAPIClient } from '../api/index.js';
import { ProviderOperations } from './ProviderOperations.js';
import { AgentOperations } from './AgentOperations.js';
import { ReadOperations } from './ReadOperations.js';
import { MyntisMerkleTree } from '../merkle/index.js';
import { ConfigurationError } from '../utils/errors.js';

export class MyntisSDK {
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
  readonly merkle = MyntisMerkleTree;

  private config: ResolvedMyntisSDKConfig;
  private ethersProvider: ethers.Provider;
  private signer?: ethers.Signer;

  private constructor(
    config: ResolvedMyntisSDKConfig,
    provider: ethers.Provider,
    signer?: ethers.Signer
  ) {
    this.config = config;
    this.ethersProvider = provider;
    this.signer = signer;

    const providerOrSigner = signer || provider;

    // Initialize contract wrappers
    this.contracts = {
      token: new MyntisTokenContract(config.addresses.myntisToken, providerOrSigner),
      staking: new StakingContract(config.addresses.dualPoolStaking, providerOrSigner),
      emissions: new EmissionsContract(config.addresses.emissionsContract, providerOrSigner),
      distributor: new DistributorContract(config.addresses.zkMerkleDistributor, providerOrSigner),
      vault: new VaultContract(config.addresses.liquidStakingVault, providerOrSigner),
      registry: new RegistryContract(config.addresses.globalSupplyRegistry, providerOrSigner),
    };

    // Initialize API client if configured
    if (config.apiUrl) {
      this.api = new MyntisAPIClient({
        apiUrl: config.apiUrl,
        serviceApiKey: config.serviceApiKey,
        graphqlUrl: config.graphqlUrl,
        graphqlToken: config.graphqlToken,
      });
    }

    // Get signer address synchronously if available
    let signerAddress: Address | undefined;
    if (signer && typeof (signer as any).address === 'string') {
      signerAddress = (signer as any).address as Address;
    }

    // Initialize operation bundles
    this.provider = new ProviderOperations(
      this.contracts.token,
      this.contracts.staking,
      this.contracts.distributor,
      config.addresses.dualPoolStaking,
      config.addresses.zkMerkleDistributor,
      config.chainId,
      this.api,
      signerAddress
    );

    this.agent = new AgentOperations(
      this.contracts.token,
      this.contracts.distributor,
      this.contracts.vault,
      config.addresses.liquidStakingVault,
      config.addresses.zkMerkleDistributor,
      this.api,
      signerAddress
    );

    this.read = new ReadOperations(
      this.contracts.token,
      this.contracts.staking,
      this.contracts.emissions,
      this.contracts.distributor,
      this.contracts.vault,
      this.contracts.registry
    );
  }

  /**
   * Create SDK with private key (backend/agent usage)
   */
  static fromPrivateKey(privateKey: string, config: Partial<MyntisSDKConfig> = {}): MyntisSDK {
    const resolved = this.resolveConfig({ ...config, privateKey });

    if (!resolved.rpcUrl) {
      throw new ConfigurationError('rpcUrl required when using private key');
    }

    const provider = new ethers.JsonRpcProvider(resolved.rpcUrl, resolved.chainId);
    const wallet = new ethers.Wallet(privateKey, provider);

    return new MyntisSDK(resolved, provider, wallet);
  }

  /**
   * Create SDK with browser provider (frontend usage)
   */
  static fromBrowserProvider(
    browserProvider: any,
    config: Partial<MyntisSDKConfig> = {}
  ): MyntisSDK {
    const resolved = this.resolveConfig(config);
    const provider = new ethers.BrowserProvider(browserProvider);

    // Get signer from browser provider
    provider.getSigner().then(signer => {
      // Signer will be available for write operations
    });

    return new MyntisSDK(resolved, provider);
  }

  /**
   * Create read-only SDK (no signer)
   */
  static readOnly(rpcUrl: string, config: Partial<MyntisSDKConfig> = {}): MyntisSDK {
    const resolved = this.resolveConfig({ ...config, rpcUrl });
    const provider = new ethers.JsonRpcProvider(rpcUrl, resolved.chainId);

    return new MyntisSDK(resolved, provider);
  }

  /**
   * Get the signer's address (async)
   */
  async getAddress(): Promise<Address> {
    if (!this.signer) {
      throw new ConfigurationError('No signer available');
    }
    return (await this.signer.getAddress()) as Address;
  }

  /**
   * Get the current chain ID
   */
  getChainId(): number {
    return this.config.chainId;
  }

  /**
   * Resolve and validate config
   */
  private static resolveConfig(config: Partial<MyntisSDKConfig>): ResolvedMyntisSDKConfig {
    const chainId = config.chainId || CHAIN_IDS.BASE_MAINNET;

    // Get default addresses for chain
    let addresses;
    try {
      addresses = getDefaultAddresses(chainId);
    } catch {
      if (!config.addresses) {
        throw new ConfigurationError(`No default addresses for chainId ${chainId}. Provide addresses in config.`);
      }
      addresses = config.addresses as any; // User must provide all addresses
    }

    // Merge with user overrides
    if (config.addresses) {
      addresses = { ...addresses, ...config.addresses };
    }

    return {
      chainId,
      rpcUrl: config.rpcUrl,
      addresses,
      apiUrl: config.apiUrl,
      serviceApiKey: config.serviceApiKey,
      graphqlUrl: config.graphqlUrl,
      graphqlToken: config.graphqlToken,
    };
  }
}
