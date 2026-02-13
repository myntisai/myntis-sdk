import { ethers } from 'ethers';
export function formatTokens(wei, decimals = 18) {
    return ethers.formatUnits(wei, decimals);
}
export function parseTokens(amount, decimals = 18) {
    return ethers.parseUnits(amount, decimals);
}
export function formatAddress(address) {
    return ethers.getAddress(address);
}
