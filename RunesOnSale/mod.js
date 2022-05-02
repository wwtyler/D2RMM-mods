
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
  description: `test AAA`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': '"char"',
  'input 2': `r01`,
  plvl: 99,
  ilvl: 99,
  output: 'The Stone of Jordan',
  '*eol': 0,
});

cubemain.rows.push({
  description: `test BBB`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  op: 16, // less than or no more than
  param: 127, // item_allskills (itemstatcost.txt)
  value: 1, // start from 0. ALLSKILLs +1=0， +2=1
  'input 1': '"scha"',
  'input 2': `r02`,
  plvl: 99,
  ilvl: 99,
  output: 'useitem',
  'mod 1': 'allskills',
  'mod 1 min': 1,
  'mod 1 max': 1,
  '*eol': 0,
});

cubemain.rows.push({
  description: `test CCC`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  op: 16, // less than or no more than
  param: 183, // item_allskills (itemstatcost.txt)
  value: 2, // start from 0. ALLSKILLs +1=0， +2=1
  'input 1': '"scha"',
  'input 2': `r03`,
  plvl: 99,
  ilvl: 99,
  output: 'useitem',
  'mod 1': 'addxp',
  'mod 1 min': 10,
  'mod 1 max': 10,
  'mod 2': 'innernum',
  'mod 2 min': 1,
  'mod 2 max': 1,
  '*eol': 0,
});



D2RMM.writeTsv(cubemainFilename, cubemain);


const itemstatcostFilename = 'global\\excel\\itemstatcost.txt';
const itemstatcost = D2RMM.readTsv(itemstatcostFilename);
itemstatcost.rows.forEach((row) => {
  if (row.Stat === "unused183") {
    row['Stat'] = 'innernum';
    row['Signed'] = 1;
    row['Send Bits'] = 8;
    row['1.09-Save Bits'] = 3;
    row['1.09-Save Add'] = 0;
    row['Save Bits'] = 3;
    row['Save Add'] = 0;
    row['descstrpos'] = 'innernumdesc';
    row['descstrneg'] = 'innernumdesc';
    row['descpriority'] = 159;
    row['descfunc'] = 19;

    row['*eol'] = 0;

  }
});

const propertiesFilename = 'global\\excel\\Properties.txt';
const properties = D2RMM.readTsv(propertiesFilename);

properties.rows.push({
  code: `innernum`,
  '*Enabled': 1,
  func1: 1,
  stat1: 'innernum',
  '*Tooltip': '+# item inner number for cubemain use.',
  '*eol': 0,
});

D2RMM.writeTsv(itemstatcostFilename, itemstatcost);
D2RMM.writeTsv(propertiesFilename, properties);