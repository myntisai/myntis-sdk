import { ethers } from 'ethers';
export function isValidAddress(address) {
    try {
        ethers.getAddress(address);
        return true;
    }
    catch {
        return false;
    }
}
export function requireValidAddress(address, name = 'address') {
    if (!isValidAddress(address)) {
        throw new Error(`Invalid ${name}: ${address}`);
    }
    return address;
}
