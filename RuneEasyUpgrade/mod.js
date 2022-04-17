const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);

for (let tier = 1; tier <= 32; tier++) {
  let nextTier = tier + 1;
  cubemain.rows.push({
    description: 'Rune ' + tier + ' -> Rune ' + nextTier,
    enabled: 1,
    version: 100,
    numinputs: 2,
    'input 1': '"r' + tier.toString().padStart(2, '0') + ',qty=2"',
    output: 'r' + nextTier.toString().padStart(2, '0'),
    '*eol': 0,
  });
}

D2RMM.writeTsv(cubemainFilename, cubemain);