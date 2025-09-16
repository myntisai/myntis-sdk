import { ethers } from "ethers";
import type { SDKConfig } from "./types";
export declare class BackendAdminClient {
    private config;
    private wallet;
    private provider;
    constructor(config: SDKConfig, adminPrivateKey: string);
    getContract(): ethers.Contract;
    submitMerkleRoot(merkleRoot: string, expiry: bigint): Promise<ethers.TransactionResponse>;
}
