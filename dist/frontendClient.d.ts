import { ethers } from "ethers";
import type { SDKConfig } from "./types";
export declare class FrontendClient {
    private config;
    constructor(config: SDKConfig);
    claimRewards(provider: `0x${string}`, rootIndex: bigint, totalClaimAmount: bigint, merkleProof: string[], signer?: ethers.Signer): Promise<ethers.TransactionResponse>;
}
