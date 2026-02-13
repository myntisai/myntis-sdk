export interface ZKProof {
    a: [string, string];
    b: [[string, string], [string, string]];
    c: [string, string];
}
export interface ZKProofResult {
    proof: ZKProof;
    publicInputs: string[];
    batchHash: string;
    merkleRoot: string;
}
export interface ZKProofRequest {
    users: string[];
    scores: number[];
    multipliers: number[];
    amounts: number[];
    baseRewardAmount?: number;
    totalAmountWei?: string;
    chainId?: number;
}
