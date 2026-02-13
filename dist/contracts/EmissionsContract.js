import { BaseContract } from './base.js';
import { EMISSIONSCONTRACT_ABI } from '../abi/EmissionsContract.js';
export class EmissionsContract extends BaseContract {
    constructor(address, providerOrSigner) {
        super(address, EMISSIONSCONTRACT_ABI, providerOrSigner);
    }
    // Read operations (EmissionsContract is typically read-only for SDK users)
    async getCurrentEmissionRate() {
        return await this.contract.getCurrentEmissionRate();
    }
    async pendingRewards(provider) {
        return await this.contract.pendingRewards(provider);
    }
    async getEmissionInfo() {
        const rate = await this.getCurrentEmissionRate();
        const totalEmitted = await this.contract.totalEmitted();
        const lastHarvestTime = Number(await this.contract.lastHarvestTime());
        const halvingInterval = Number(await this.contract.HALVING_INTERVAL());
        // Calculate next halving time
        const startTime = Number(await this.contract.startTime());
        const elapsed = lastHarvestTime - startTime;
        const currentHalvingPeriod = Math.floor(elapsed / halvingInterval);
        const nextHalvingTime = startTime + ((currentHalvingPeriod + 1) * halvingInterval);
        return {
            currentRate: rate,
            totalEmitted,
            lastHarvestTime,
            halvingInterval,
            nextHalvingTime,
        };
    }
}
