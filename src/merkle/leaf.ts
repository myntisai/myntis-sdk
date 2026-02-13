import { ethers } from 'ethers';
import type { Address, HexString, Wei } from '../types/common.js';

/**
 * Encode a Merkle leaf exactly as the contract does:
 * keccak256(abi.encode(address, uint256, uint256))
 *
 * IMPORTANT: MUST use AbiCoder.encode (NOT encodePacked) to match the contract.
 * This matches staking.js:1456-1463
 */
export function encodeLeaf(walletAddress: Address, amount: Wei, chainId: number): HexString {
  const encoded = ethers.AbiCoder.defaultAbiCoder().encode(
    ['address', 'uint256', 'uint256'],
    [ethers.getAddress(walletAddress), amount, BigInt(chainId)]
  );
  return ethers.keccak256(encoded) as HexString;
}
