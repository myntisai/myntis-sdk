import { ethers } from 'ethers';
/**
 * Encode a Merkle leaf exactly as the contract does:
 * keccak256(abi.encode(address, uint256, uint256))
 *
 * IMPORTANT: MUST use AbiCoder.encode (NOT encodePacked) to match the contract.
 * This matches staking.js:1456-1463
 */
export function encodeLeaf(walletAddress, amount, chainId) {
    const encoded = ethers.AbiCoder.defaultAbiCoder().encode(['address', 'uint256', 'uint256'], [ethers.getAddress(walletAddress), amount, BigInt(chainId)]);
    return ethers.keccak256(encoded);
}
