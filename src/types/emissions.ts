import type { Wei } from './common.js';

export interface EmissionInfo {
  currentRate: Wei;
  totalEmitted: Wei;
  lastHarvestTime: number;
  halvingInterval: number;
  nextHalvingTime: number;
}
