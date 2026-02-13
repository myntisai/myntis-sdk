import { ethers } from 'ethers';
import { getDefaultAddresses } from '../config/addresses.js';
import { CHAIN_IDS } from '../config/chains.js';
import { MyntisTokenContract, StakingContract, EmissionsContract, DistributorContract, VaultContract, RegistryContract, } from '../contracts/index.js';
import { MyntisAPIClient } from '../api/index.js';
import { ProviderOperations } from './ProviderOperations.js';
import { AgentOperations } from './AgentOperations.js';
import { ReadOperations } from './ReadOperations.js';
import { MyntisMerkleTree } from '../merkle/index.js';
import { ConfigurationError } from '../utils/errors.js';
export class MyntisSDK {
    constructor(config, provider, signer) {
        this.merkle = MyntisMerkleTree;
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
        let signerAddress;
        if (signer && typeof signer.address === 'string') {
            signerAddress = signer.address;
        }
        // Initialize operation bundles
        this.provider = new ProviderOperations(this.contracts.token, this.contracts.staking, this.contracts.distributor, config.addresses.dualPoolStaking, config.addresses.zkMerkleDistributor, config.chainId, this.api, signerAddress);
        this.agent = new AgentOperations(this.contracts.token, this.contracts.distributor, this.contracts.vault, config.addresses.liquidStakingVault, config.addresses.zkMerkleDistributor, this.api, signerAddress);
        this.read = new ReadOperations(this.contracts.token, this.contracts.staking, this.contracts.emissions, this.contracts.distributor, this.contracts.vault, this.contracts.registry);
    }
    /**
     * Create SDK with private key (backend/agent usage)
     */
    static fromPrivateKey(privateKey, config = {}) {
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
    static fromBrowserProvider(browserProvider, config = {}) {
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
    static readOnly(rpcUrl, config = {}) {
        const resolved = this.resolveConfig({ ...config, rpcUrl });
        const provider = new ethers.JsonRpcProvider(rpcUrl, resolved.chainId);
        return new MyntisSDK(resolved, provider);
    }
    /**
     * Get the signer's address (async)
     */
    async getAddress() {
        if (!this.signer) {
            throw new ConfigurationError('No signer available');
        }
        return (await this.signer.getAddress());
    }
    /**
     * Get the current chain ID
     */
    getChainId() {
        return this.config.chainId;
    }
    /**
     * Resolve and validate config
     */
    static resolveConfig(config) {
        const chainId = config.chainId || CHAIN_IDS.BASE_MAINNET;
        // Get default addresses for chain
        let addresses;
        try {
            addresses = getDefaultAddresses(chainId);
        }
        catch {
            if (!config.addresses) {
                throw new ConfigurationError(`No default addresses for chainId ${chainId}. Provide addresses in config.`);
            }
            addresses = config.addresses; // User must provide all addresses
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
