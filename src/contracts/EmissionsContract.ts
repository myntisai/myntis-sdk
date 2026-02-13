import { ethers } from 'ethers';
import { BaseContract } from './base.js';
import { EMISSIONSCONTRACT_ABI } from '../abi/EmissionsContract.js';
import type { Address, Wei } from '../types/common.js';
import type { EmissionInfo } from '../types/emissions.js';

export class EmissionsContract extends BaseContract {
  constructor(address: Address, providerOrSigner: ethers.Provider | ethers.Signer) {
    super(address, EMISSIONSCONTRACT_ABI, providerOrSigner);
  }

  // Read operations (EmissionsContract is typically read-only for SDK users)
  async getCurrentEmissionRate(): Promise<Wei> {
    return await this.contract.getCurrentEmissionRate();
  }

  async pendingRewards(provider: Address): Promise<Wei> {
    return await this.contract.pendingRewards(provider);
  }

  async getEmissionInfo(): Promise<EmissionInfo> {
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
