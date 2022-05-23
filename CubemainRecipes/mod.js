///////////////////////////////////////////////////////////////
const cubemainFilename = 'global\\excel\\cubemain.txt';
const cubemain = D2RMM.readTsv(cubemainFilename);

const EQUIP_TYPES = ['weap', 'armo'];
const ALL_RARITY = ['low', 'nor', 'hiq', 'mag', 'rar', 'set', 'uni', 'crf', 'tmp']
const ALL_UNIQUE_TYPES = ['weap', 'armo', 'amu', 'rin', 'jew', 'char'];
const ALL_PG_CODES = ['gpv', 'gpy', 'gpb', 'gpg', 'gpr', 'gpw', 'skz'];
const ALL_PG_S_CODES = ['zpv', 'zpy', 'zpb', 'zpg', 'zpr', 'zpw', 'zkz'];
const TRI_FORGE_RARITY = {
  mag: '魔法',
  rar: '稀有',
  uni: '暗金',
  set: '套装'
};
const JEW_FORGE_TYPES = [
  ['rin', '戒指'],
  ['amu', '项链']
];
const REROLL_RARITY = [
  ['mag', '魔法'],
  ['rar', '稀有'],
  ['uni', '暗金'],
  ['set', '套装']
];
const REROLL_TYPES = [
  ['rin', '戒指'],
  ['amu', '项链'],
  ['char', '护符'],
  ['jew', '珠宝'],
  ['weap', '武器'],
  ['armo', '防具']
];
const EXTRACT_TYPES = [
  ['rin', '戒指'],
  ['amu', '项链'],
  ['char', '护符'],
  ['jew', '珠宝'],
  ['weap', '武器'],
  ['armo', '防具']
];

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
  '*eol\r': 0,
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
  'input 2': `run2`,
  plvl: 99,
  ilvl: 99,
  output: "Andariel's Visage",
  '*eol\r': 0,
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
  '*eol\r': 0,
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
  '*eol\r': 0,
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
  '*eol\r': 0,
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
  '*eol\r': 0,
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
  '*eol\r': 0,
});

cubemain.rows.push({
  description: `test GGG`,
  enabled: 1,
  version: 100,
  numinputs: 3,
  'input 1': '"gem3,qty=3"',
  lvl: 99,
  output: 'gem4,qty=3',
  '*eol\r': 0,
});
// 三蓝色戒指合成蓝色项链	1			100					3	"rin,mag,qty=3"							"amu,mag"	99	0
// 三蓝色项链合成蓝色戒指	1			100					3	"amu,mag,qty=3"							"rin,mag"	99	0

//disable原始合成公示。
cubemain.rows.forEach((row) => {
  const desc = row.description;
  if (desc === '3 Magic Rings -> Magic Amulet') {
    row.enabled = 0;
  }
  else if (desc === '3 Magic Amulets -> Magic Ring') {
    row.enabled = 0;
  }
  else if (desc === '3 Perfect Gems (Any) + 1 Magic Item -> Re-rolled Magic Item') {
    row.enabled = 0;
  }
  else if (desc === '6 Perfect Skulls + 1 Rare Item -> 1 Low Quality Rare Item') {
    row.enabled = 0;
  }
});


//三个项链、戒指REROLL。
[
  ['mag', 'rar'],
  ['rar', 'rar'],
  ['uni', 'uni']
].forEach(([fromRarity, toRarity]) => {
  const fromRarityLabel = TRI_FORGE_RARITY[fromRarity];
  const toRarityLabel = TRI_FORGE_RARITY[toRarity];

  JEW_FORGE_TYPES.forEach(([type, typeLabel]) => {
    //'reg' = If the function has “usetype” and if the item is a Unique, then regenerate/reroll the Unique
    const outputString = fromRarity === 'uni' ? 'useitem,reg' : `${type},${toRarity}`;
    const recipe = {
      description: `${fromRarityLabel}${typeLabel} 合成(FORGE) ${toRarityLabel}${typeLabel}`,
      enabled: 1,
      version: 100,
      numinputs: 3,
      'input 1': `${type},${fromRarity},qty=3`,
      output: `${outputString}`,
      ilvl: 100, // preserve item level
      '*eol\r': 0,
    };
    cubemain.rows.push(recipe);
  });
});

//项链戒指merge公式。
cubemain.rows.push({
  description: `亮金项链戒指合成亮金珠宝`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'amu,rar',
  'input 2': 'rin,rar',
  output: 'jew,rar',
  '*eol\r': '0',
});
cubemain.rows.push({
  description: `魔法项链戒指合成魔法珠宝`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'amu,mag',
  'input 2': 'rin,mag',
  output: 'jew,mag',
  '*eol\r': '0',
});

//各种装备REROLL
REROLL_TYPES.forEach(([type, typeLabel]) => {
  REROLL_RARITY.forEach(([rarity, rarityLabel]) => {
    //'reg' = If the function has “usetype” and if the item is a Unique, then regenerate/reroll the Unique
    const outputString = rarity === 'uni' ? 'useitem,reg' : `usetype,${rarity}`;
    const inputCost = 'gem4,qty=3';
    const recipe = {
      description: `洗（REROLL）${rarityLabel}${typeLabel}`,
      enabled: 1,
      version: 100,
      numinputs: 4,
      'input 1': `${type},${rarity}`,
      'input 2': `${inputCost}`,
      output: `${outputString}`,
      ilvl: 100, // preserve item level
      '*eol\r': 0,
    };
    cubemain.rows.push(recipe);
  });
});


[
  ['uni', '暗金'],
  ['set', '套装']
].forEach(([rarity, rarityLabel]) => {
  EXTRACT_TYPES.forEach(([uniqueType, typeLabel]) => {
    const uniqueIndex = ALL_UNIQUE_TYPES.indexOf(uniqueType);
    const pgSCode = ALL_PG_S_CODES[uniqueIndex];
    cubemain.rows.push({
      description: `${rarityLabel}${typeLabel}萃取（EXTRACT）`,
      enabled: 1,
      version: 100,
      numinputs: 2,
      'input 1': `${uniqueType},${rarity}`,
      'input 2': 'rvs',
      lvl: 99,
      ilvl: 99,
      output: `${pgSCode}`,
      'output b': `rvs`,
      '*eol\r': '0',
    });
  });
});

EQUIP_TYPES.forEach((equipType) => {
  ALL_RARITY.forEach((magicType) => {
    const description = "制作无形" + `${equipType}-${magicType}`;
    cubemain.rows.push({
      description: description,
      enabled: 1,
      version: 100,
      numinputs: 2,
      'input 1': `${equipType},${magicType}`,
      'input 2': "r25",
      // 'input 3': "isc",
      ilvl: 100, // preserve item level
      output: 'useitem',
      'mod 1': 'ethereal',
      'mod 1 min': 1,
      'mod 1 max': 1,
      '*eol\r': '0',
    });
  });
});

//底材萃取
EQUIP_TYPES.forEach((equipType) => {
  ALL_RARITY.forEach((magicType) => {
    const description = "底材萃取" + `${equipType}-${magicType}`;
    cubemain.rows.push({
      description: description,
      enabled: 1,
      version: 100,
      numinputs: 2,
      'input 1': `${equipType},${magicType}`,
      'input 2': "r18",
      // 'input 3': "tsc",
      ilvl: 100, // preserve item level
      output: 'usetype,bas',
      '*eol\r': '0',
    });
  });
});

D2RMM.writeTsv(cubemainFilename, cubemain);


// const itemRunesFilename = 'local\\lng\\strings\\item-runes.json';
// const itemRunes = D2RMM.readJson(itemRunesFilename);
// itemRunes.forEach((item) => {
//   const runeKey = item.Key;
//   if (runeKey === 'r25') {
//     item.zhTW = `${item.zhTW}\n r25+item=无形item`;
//   }
//   else if (runeKey === 'r18') {
//     item.zhTW = `${item.zhTW}\n r18+item=底材Item`;
//   }
// });
// D2RMM.writeJson(itemRunesFilename, itemRunes);


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
    row['*eol\r'] = 0;
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
  '*eol\r': 0,
});

D2RMM.writeTsv(itemstatcostFilename, itemstatcost);
D2RMM.writeTsv(propertiesFilename, properties);