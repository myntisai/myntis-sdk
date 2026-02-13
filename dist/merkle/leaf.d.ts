import type { Address, HexString, Wei } from '../types/common.js';
/**
 * Encode a Merkle leaf exactly as the contract does:
 * keccak256(abi.encode(address, uint256, uint256))
 *
 * IMPORTANT: MUST use AbiCoder.encode (NOT encodePacked) to match the contract.
 * This matches staking.js:1456-1463
 */
export declare function encodeLeaf(walletAddress: Address, amount: Wei, chainId: number): HexString;
