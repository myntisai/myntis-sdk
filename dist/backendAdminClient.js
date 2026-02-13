import { ethers } from "ethers";
import { ZKMERKLEDISTRIBUTOR_ABI } from "./abi/ZKMerkleDistributor.js";
export class BackendAdminClient {
    constructor(config, adminPrivateKey) {
        if (!config.network.rpcUrl) {
            throw new Error("RPC URL required for backend client");
        }
        this.config = config;
        this.provider = new ethers.JsonRpcProvider(config.network.rpcUrl, config.network.chainId);
        this.wallet = new ethers.Wallet(adminPrivateKey, this.provider);
    }
    getContract() {
        return new ethers.Contract(this.config.network.addresses.merkleDistributor, ZKMERKLEDISTRIBUTOR_ABI, this.wallet);
    }
    async submitMerkleRoot(merkleRoot, expiry) {
        const contract = this.getContract();
        return await contract.submitMerkleRoot(merkleRoot, expiry);
    }
}
