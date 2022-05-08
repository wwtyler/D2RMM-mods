const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);

for (let tier = 2; tier <= 33; tier++) {
  let previousTier = tier - 1;
  cubemain.rows.push({
    description: 'Rune ' + tier + ' -> Rune ' + previousTier,
    enabled: 1,
    version: 100,
    numinputs: 2,
    'input 1': 'r' + tier.toString().padStart(2, '0'),
    'input 2': 'wms',
    output: 'r' + previousTier.toString().padStart(2, '0'),
    '*eol': 0,
  });
}

D2RMM.writeTsv(cubemainFilename, cubemain);