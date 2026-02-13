import { ethers } from "ethers";
import type { SDKConfig } from "./types";
import { ZKMERKLEDISTRIBUTOR_ABI } from "./abi/ZKMerkleDistributor.js";

export class BackendAdminClient {
  private config: SDKConfig;
  private wallet: ethers.Wallet;
  private provider: ethers.JsonRpcProvider;

  constructor(config: SDKConfig, adminPrivateKey: string) {
    if (!config.network.rpcUrl) {
      throw new Error("RPC URL required for backend client");
    }
    this.config = config;
    this.provider = new ethers.JsonRpcProvider(config.network.rpcUrl, config.network.chainId);
    this.wallet = new ethers.Wallet(adminPrivateKey, this.provider);
  }

  getContract() {
    return new ethers.Contract(
      this.config.network.addresses.merkleDistributor,
      ZKMERKLEDISTRIBUTOR_ABI as any,
      this.wallet
    );
  }

  async submitMerkleRoot(merkleRoot: string, expiry: bigint): Promise<ethers.TransactionResponse> {
    const contract = this.getContract();
    return await contract.submitMerkleRoot(merkleRoot, expiry);
  }
}
