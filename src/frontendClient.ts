import { ethers } from "ethers";
import type { SDKConfig } from "./types";
import { ZKMERKLEDISTRIBUTOR_ABI } from "./abi/ZKMerkleDistributor.js";

export class FrontendClient {
  private config: SDKConfig;
  constructor(config: SDKConfig) {
    this.config = config;
  }

  async claimRewards(
    provider: `0x${string}`,
    rootIndex: bigint,
    totalClaimAmount: bigint,
    merkleProof: string[],
    signer?: ethers.Signer
  ): Promise<ethers.TransactionResponse> {
    // Use injected provider if signer not provided
    const effectiveSigner = signer || (await new ethers.BrowserProvider((globalThis as any).ethereum).getSigner());
    const contract = new ethers.Contract(
      this.config.network.addresses.merkleDistributor,
      ZKMERKLEDISTRIBUTOR_ABI as any,
      effectiveSigner
    );
    return await contract.claimRewards(provider, rootIndex, totalClaimAmount, merkleProof);
  }
}
