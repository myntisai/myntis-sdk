import { ethers } from "ethers";
import { ZKMERKLEDISTRIBUTOR_ABI } from "./abi/ZKMerkleDistributor.js";
export class FrontendClient {
    constructor(config) {
        this.config = config;
    }
    async claimRewards(provider, rootIndex, totalClaimAmount, merkleProof, signer) {
        // Use injected provider if signer not provided
        const effectiveSigner = signer || (await new ethers.BrowserProvider(globalThis.ethereum).getSigner());
        const contract = new ethers.Contract(this.config.network.addresses.merkleDistributor, ZKMERKLEDISTRIBUTOR_ABI, effectiveSigner);
        return await contract.claimRewards(provider, rootIndex, totalClaimAmount, merkleProof);
    }
}
