import fs from 'fs';
import path from 'path';

const contracts = [
  'Myntis',
  'DualPoolStaking',
  'EmissionsContract',
  'ZKMerkleDistributor',
  'LiquidStakingVault',
  'GlobalSupplyRegistry'
];

for (const contract of contracts) {
  const jsonPath = path.join('json', `${contract}.json`);
  const abi = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  
  const tsContent = `// Generated from ${contract}.json
export const ${contract.toUpperCase()}_ABI = ${JSON.stringify(abi, null, 2)} as const;
`;
  
  fs.writeFileSync(`${contract}.ts`, tsContent);
  console.log(`Generated ${contract}.ts`);
}

// Generate index
const indexContent = contracts.map(c => `export * from './${c}.js';`).join('\n') + '\n';
fs.writeFileSync('index.ts', indexContent);
console.log('Generated index.ts');
