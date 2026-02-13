export type Address = `0x${string}`;
export type HexString = `0x${string}`;
export type Wei = bigint;
export interface TransactionResult {
    hash: string;
    wait(): Promise<TransactionReceipt>;
}
export interface TransactionReceipt {
    blockNumber: number;
    transactionHash: string;
    status: number;
    logs: any[];
}
export interface ContractAddresses {
    myntisToken: Address;
    dualPoolStaking: Address;
    emissionsContract: Address;
    zkMerkleDistributor: Address;
    liquidStakingVault: Address;
    globalSupplyRegistry: Address;
    groth16Verifier?: Address;
}
