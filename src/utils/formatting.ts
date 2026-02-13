import { ethers } from 'ethers';
import type { Wei } from '../types/common.js';

export function formatTokens(wei: Wei, decimals: number = 18): string {
  return ethers.formatUnits(wei, decimals);
}

export function parseTokens(amount: string, decimals: number = 18): Wei {
  return ethers.parseUnits(amount, decimals);
}

export function formatAddress(address: string): string {
  return ethers.getAddress(address);
}
