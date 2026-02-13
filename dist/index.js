// Main SDK export
export { MyntisSDK } from './client/MyntisSDK.js';
// Re-export config constants
export { BASE_MAINNET_ADDRESSES, BASE_SEPOLIA_ADDRESSES } from './config/addresses.js';
export { CHAIN_IDS, CHAIN_NAMES } from './config/chains.js';
// Re-export Merkle tree class for direct usage
export { MyntisMerkleTree, encodeLeaf, verifyProof } from './merkle/index.js';
export { generateProviderBatchProof, isZKProofAvailable } from './zk/index.js';
// Deprecated legacy clients (for backward compatibility)
/** @deprecated Use MyntisSDK.fromBrowserProvider() instead */
export { FrontendClient } from './frontendClient.js';
/** @deprecated Use MyntisSDK.fromPrivateKey() instead */
export { BackendAdminClient } from './backendAdminClient.js';
