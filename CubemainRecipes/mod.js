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
  'input 1': '"armo"',
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

cubemain.rows.push({
  description: `test DDD`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': '"armo"',
  'input 2': `r04`,
  plvl: 99,
  ilvl: 99,
  output: 'useitem,suf=754',
  '*eol': 0,
});

cubemain.rows.push({
  description: `test EEE`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': '"armo"',
  'input 2': `r05`,
  plvl: 99,
  ilvl: 99,
  output: 'useitem,suf=756',
  '*eol': 0,
});
cubemain.rows.push({
  description: `test FFF`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': '"weap"',
  'input 2': `r06`,
  plvl: 99,
  ilvl: 99,
  output: 'usetype,mag,suf=748',
  '*eol': 0,
});

cubemain.rows.push({
  description: `test GGG`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': '"weap"',
  'input 2': `r07`,
  plvl: 99,
  ilvl: 99,
  output: 'usetype,mag,suf=750',
  '*eol': 0,
});
// 三蓝色戒指合成蓝色项链	1			100					3	"rin,mag,qty=3"							"amu,mag"	99	0
// 三蓝色项链合成蓝色戒指	1			100					3	"amu,mag,qty=3"							"rin,mag"	99	0

//disable原始合成公示。
cubemain.rows.forEach((row) => {
  const MagicRingAndAmulet = row.description;
  if (MagicRingAndAmulet === '3 Magic Rings -> Magic Amulet') {
    row.enabled = 0;
    // row.plvl = 99;
    // version =  100;
    // row.output = 'rin,rar';

  }
  else if (MagicRingAndAmulet === '3 Magic Amulets -> Magic Ring') {
    row.enabled = 0;
    // row.plvl = 99;
    // version =  100;
    // row.output = 'amu,rar';
  }
});

cubemain.rows.push({
  description: `三mag戒指合成亮金戒指`,
  enabled: 1,
  version: 100,
  numinputs: 3,
  'input 1': 'rin,mag,qty=3',
  plvl: 99,
  output: 'rin,rar',
  '*eol': '0',
});

cubemain.rows.push({
  description: `三mag项链合成亮金项链`,
  enabled: 1,
  version: 100,
  numinputs: 3,
  'input 1': 'amu,mag,qty=3',
  plvl: 99,
  output: 'amu,rar',
  '*eol': '0',
});
cubemain.rows.push({
  description: `三亮金项链合成亮金项链`,
  enabled: 1,
  version: 100,
  numinputs: 3,
  'input 1': 'amu,rar,qty=3',
  plvl: 99,
  output: 'amu,rar',
  '*eol': '0',
});
cubemain.rows.push({
  description: `三暗金戒指合成暗金戒指`,
  enabled: 1,
  version: 100,
  numinputs: 3,
  'input 1': 'rin,uni,qty=3',
  plvl: 99,
  output: 'rin,uni',
  '*eol': '0',
});
cubemain.rows.push({
  description: `三暗金项链合成暗金项链`,
  enabled: 1,
  version: 100,
  numinputs: 3,
  'input 1': 'amu,uni,qty=3',
  plvl: 99,
  output: 'amu,uni',
  '*eol': '0',
});
cubemain.rows.push({
  description: `亮金项链戒指合成亮金珠宝`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'amu,rar',
  'input 2': 'rin,rar',
  output: 'jew,rar',
  '*eol': '0',
});
cubemain.rows.push({
  description: `魔法项链戒指合成魔法珠宝`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'amu,mag',
  'input 2': 'rin,mag',
  output: 'jew,mag',
  '*eol': '0',
});
// cubemain.rows.push({
//   description: `三亮金戒指合成新亮金戒指`,
//   enabled: 1,
//   version: 100,
//   numinputs: 3,
//   'input 1': 'rin,rar,qty=3',
//   plvl: 99,
//   output: 'rin,rar',
//   "*eol": '0',
// });

// cubemain.rows.push({
//   description: `三亮金项链合成新亮金项链`,
//   enabled: 1,
//   version: 100,
//   numinputs: 3,
//   'input 1': 'amu,rar,qty=3',
//   plvl: 99,
//   output: 'amu,rar',
//   "*eol": '0',
// });

// 制作无形武器-亮金	1	100		3	weap,rar	isc	run1					useitem	99			ethereal
// 制作无形武器-蓝色	1	100		3	weap,mag	isc	run1					useitem	99			ethereal
// 制作无形武器-暗金	1	100		3	weap,uni	isc	run1					useitem	99			ethereal
// 制作无形防具-亮金	1	100		3	armo,rar	isc	run1					useitem	99			ethereal
// 制作无形防具-蓝色	1	100		3	armo,mag	isc	run1					useitem	99			ethereal
// 制作无形防具-暗金	1	100		3	armo,uni	isc	run1					useitem	99			ethereal

const EQUIP_TYPES = ['weap', 'armo'];
const MAGIC_TYPES = ['nor', 'hiq', 'mag', 'rar', 'set', 'uni']
EQUIP_TYPES.forEach((equipType) => {
  MAGIC_TYPES.forEach((magicType) => {
    const description = "制作无形" + `${equipType}-${magicType}`;
    cubemain.rows.push({
      description: description,
      enabled: 1,
      version: 100,
      numinputs: 3,
      'input 1': `${equipType},${magicType}`,
      'input 2': "isc",
      'input 3': "rune",
      plvl: 80,
      output: 'useitem',
      'mod 1': 'ethereal',
      '*eol': '0',
    });
  });
});

//底材萃取
EQUIP_TYPES.forEach((equipType) => {
  MAGIC_TYPES.forEach((magicType) => {
    const description = "底材萃取" + `${equipType}-${magicType}`;
    cubemain.rows.push({
      description: description,
      enabled: 1,
      version: 100,
      numinputs: 3,
      'input 1': `${equipType},${magicType}`,
      'input 2': "tsc",
      'input 3': "rune",
      plvl: 99,
      output: 'usetype,hiq',
      '*eol': '0',
    });
  });
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