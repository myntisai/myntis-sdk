import type { Address, HexString, Wei } from './common.js';

export interface ClaimData {
  provider: Address;
  rootIndex: number;
  amount: Wei;
  merkleProof: HexString[];
}

export interface ClaimableReward {
  id: string;
  batchId: string;
  provider: Address;
  merkleRoot: HexString;
  rootIndex: number;
  rewardAmount: string;
  expiry: number;
  walletAddress: Address;
  messageIds: string[];
  merkleProof: HexString[];
  claimed: boolean;
  distributorAddress: Address;
  chainId: number;
}

export interface RewardEntry {
  walletAddress: Address;
  totalRewards: Wei;
  userId?: string;
  messageIds?: string[];
  qualityMultiplier?: number;
  merkleProof?: HexString[];
  chainId?: number;
}

export interface MerkleTreeResult {
  root: HexString;
  leaves: HexString[];
  entries: RewardEntry[];
  totalAmount: Wei;
}

export interface EpochInfo {
  root: HexString;
  expiry: number;
  closed: boolean;
  totalClaimable: Wei;
  claimedAmount: Wei;
  providerProofVerified: boolean;
  batchHash: HexString;
}
