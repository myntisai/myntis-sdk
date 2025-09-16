import { ethers } from "ethers";
import MerkleDistributorABI from "./abi/MerkleDistributor.json" assert { type: "json" };
export class FrontendClient {
    constructor(config) {
        this.config = config;
    }
    async claimRewards(provider, rootIndex, totalClaimAmount, merkleProof, signer) {
        // Use injected provider if signer not provided
        const effectiveSigner = signer || (await new ethers.BrowserProvider(globalThis.ethereum).getSigner());
        const contract = new ethers.Contract(this.config.network.addresses.merkleDistributor, MerkleDistributorABI, effectiveSigner);
        return await contract.claimRewards(provider, rootIndex, totalClaimAmount, merkleProof);
    }
}
