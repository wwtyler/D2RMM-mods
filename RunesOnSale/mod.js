
const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
misc.rows.forEach((row) => {
  if (row.type === "rune") {
    row.PermStoreItem = 1;
    row.AkaraMin = 2;
    row.AkaraMax = 4;
    row.AkaraMagicMin = 2;
    row.AkaraMagicMax = 4;
    row.spawnable = 1
  }
});

D2RMM.writeTsv(miscFilename, misc);

///////////////////////////////////////////////////////////////

const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);

const scRecipe = {
  description: `enhance sc `,
  enabled: 1,
  version: 100,
  numinputs: 2,
  // input 1 defined below
  // 'input 2': `char`,
  output: 'useitem',
  'mod 1': 'addxp',
  'mod 1 min': 40,
  'mod 1 max': 50,
  '*eol': 0,
};

// cubemain.rows.push({
//   ...scRecipe,
//   description: `${scRecipe.description} To R01`,
//   'input 1': '"char"',
//   'input 2': 'r33',
// });

cubemain.rows.push({
  description: `get soj sc `,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': '"char"',
  'input 2': `r01`,
  plvl : 99,
  ilvl : 99,
  output: 'The Stone of Jordan',
  '*eol': 0,
});

cubemain.rows.push({
  description: `get potion of life #1 `,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': '"char"',
  'input 2': `r02`,
  plvl : 99,
  ilvl : 99,
  output: 'Potion of life',
  '*eol': 0,
});

cubemain.rows.push({
  description: `get potion of life #2 `,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'r04',
  'input 2': `r03`,
  plvl : 99,
  ilvl : 99,
  output: 'xyz',
  '*eol': 0,
});


D2RMM.writeTsv(cubemainFilename, cubemain);
