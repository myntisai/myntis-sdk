import { ethers } from 'ethers';
import type { Address } from '../types/common.js';

export function isValidAddress(address: string): address is Address {
  try {
    ethers.getAddress(address);
    return true;
  } catch {
    return false;
  }
}

export function requireValidAddress(address: string, name: string = 'address'): Address {
  if (!isValidAddress(address)) {
    throw new Error(`Invalid ${name}: ${address}`);
  }
  return address as Address;
}
