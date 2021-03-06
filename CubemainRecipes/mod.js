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
  ['amu', '项链'],
  ['jew', '珠宝'],
  ['cm1', '小护符'],
  ['cm2', '中护符'],
  ['cm3', '大护符'],
];

const ALL_EQUIP_TYPES = [
  //weap
  ['axe'], ['wand'], ['club'], ['scep'], ['mace'], ['hamm'], ['swor'], ['knif'], ['tkni'], ['taxe'], ['jave'], ['spea'],
  ['pole'], ['staf'], ['bow'], ['xbow'], ['tpot'], ['h2h'], ['h2h2'], ['orb'], ['abow'], ['aspe'], ['ajav'],
  //armo
  ['helm'], ['tors'], ['shie'], ['glov'], ['boot'], ['belt'], ['pelt'], ['phlm'], ['ashd'], ['head'], ['circ'],
];
const ENCHANT_RARITY = [
  ['nor', '普通'],
  ['hiq', '超强'],
  // ['low', '低劣'],
  // ['tmp', '手工']
];
const REROLL_RARITY = [
  ['nor', '普通'],
  ['hiq', '超强'],
  ['mag', '魔法'],
  ['rar', '稀有'],
  ['uni', '暗金'],
  ['set', '套装']
];
const REROLL_TYPES = [
  //type,label,cost
  ['rin', '戒指', 'cst'],
  ['amu', '项链', 'cst'],
  ['char', '护符', 'cst'],
  ['jew', '珠宝', 'cst'],
  ['weap', '武器', 'cst'],
  ['armo', '防具', 'cst']
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


cubemain.rows.push({
  description: `test AAA`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'r01',
  'input 2': `tsc`,
  lvl: 99,
  output: "k76",
  '*eol\r': 0,
});
cubemain.rows.push({
  description: `test AAA`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'r02',
  'input 2': `tsc`,
  lvl: 99,
  output: "k77",
  '*eol\r': 0,
});
cubemain.rows.push({
  description: `test AAA`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'r03',
  'input 2': `tsc`,
  lvl: 99,
  output: "k78",
  '*eol\r': 0,
});

cubemain.rows.push({
  description: `test AAA`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'r05',
  'input 2': `tsc`,
  lvl: 99,
  output: "toa",
  '*eol\r': 0,
});
cubemain.rows.push({
  description: `test AAA`,
  enabled: 1,
  version: 100,
  numinputs: 3,
  'input 1': 'runx,qty=3',
  lvl: 99,
  output: "jew,uni",
  '*eol\r': 0,
});
cubemain.rows.push({
  description: `test AAA`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'r04',
  'input 2': `tsc`,
  lvl: 99,
  output: "runz",
  '*eol\r': 0,
});

cubemain.rows.push({
  description: `test BBB`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': '"scha"',
  'input 2': `r09`,
  lvl: 99,
  output: 'useitem',
  'mod 1': 'aura',// aura Conviction	12	12	// 光环
  'mod 1 param': 'Conviction',
  'mod 1 min': 18,
  'mod 1 max': 18,
  '*eol\r': 0,
});



cubemain.rows.push({
  description: `test BBD`,
  enabled: 1,
  version: 100,
  numinputs: 2,
  'input 1': 'jew',
  'input 2': `r08`,
  lvl: 99,
  output: 'useitem',
  'mod 1': 'levelreq',
  'mod 1 min': 20,
  'mod 1 max': 20,
  '*eol\r': 0,
});



//disable部分原始合成公式。
const DISABLED_DESCRIPTION = [
  // 三蓝色戒指合成蓝色项链	1			100					3	"rin,mag,qty=3"							"amu,mag"	99	0
  // 三蓝色项链合成蓝色戒指	1			100					3	"amu,mag,qty=3"							"rin,mag"	99	0
  '3 Magic Rings -> Magic Amulet',
  '3 Magic Amulets -> Magic Ring',
  '3 Perfect Gems (Any) + 1 Magic Item -> Re-rolled Magic Item',
  '6 Perfect Skulls + 1 Rare Item -> 1 Low Quality Rare Item',
  // '1 Ort Rune + 1 Weapon -> Fully Repaired Weapon',
  // '1 Ral Rune + 1 Armor -> Fully Repaired Armor'
];
const ENABLED_DESCRIPTION = [
  '1 Ral Rune + 1 Jewel + 1 Superior Armor -> Tempered Armor',
  '1 Ral Rune + 1 Jewel + 1 Superior Weapon -> Tempered Weapon',
  '1 Ral Rune + 1 Jewel + Magic Ring -> Tempered Ring',
  '1 Ral Rune + 1 Jewel + 1 Magic Amulet -> Tempered Amulet'
];

cubemain.rows.forEach((row) => {
  const desc = row.description;
  if (DISABLED_DESCRIPTION.includes(desc)) {
    row.enabled = 0;
  }
  if (ENABLED_DESCRIPTION.includes(desc)) {
    row.enabled = 1;
  }
  if (row.ladder == 1) {
    row.ladder = 0;
  }
});


///FORGE
[
  ['mag', 'rar'],
  ['rar', 'rar'],
  ['uni', 'uni']
].forEach(([fromRarity, toRarity]) => {
  const fromRarityLabel = TRI_FORGE_RARITY[fromRarity];
  const toRarityLabel = TRI_FORGE_RARITY[toRarity];

  JEW_FORGE_TYPES.forEach(([type, typeLabel]) => {
    //'reg' = If the function has “usetype” and if the item is a Unique, then regenerate/reroll the Unique
    // const outputString = fromRarity === 'uni' ? 'useitem,reg' : `${type},${toRarity}`;
    const outputString = `usetype,${toRarity}`;
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
  description: `亮金项链戒指合成亮金珠宝MERGE`,
  numinputs: 2,
  'input 1': 'amu,rar', 'input 2': 'rin,rar',
  output: 'jew,rar', ilvl: 100,
  '*eol\r': '0', enabled: 1, version: 100,
});
cubemain.rows.push({
  description: `魔法项链戒指合成魔法珠宝MERGE`,
  numinputs: 2,
  'input 1': 'amu,mag', 'input 2': 'rin,mag',
  output: 'jew,mag', ilvl: 100,
  '*eol\r': '0', enabled: 1, version: 100,
});

//宝石简易合成公式
for (let gemLvl = 0; gemLvl <= 3; gemLvl = gemLvl + 1) {
  let nextLvl = gemLvl + 1;
  cubemain.rows.push({
    description: `宝石合成 MERGE#${gemLvl}`,
    enabled: 1, version: 100, ilvl: 100,
    numinputs: 3,
    'input 1': `gem${gemLvl},qty=3`,
    output: `"gem${nextLvl}"`,
    '*eol\r': 0,
  });
}

//各种装备REROLL
REROLL_TYPES.forEach(([type, typeLabel, cost]) => {
  REROLL_RARITY.forEach(([rarity, rarityLabel]) => {
    //'reg' = If the function has “usetype” and if the item is a Unique, then regenerate/reroll the Unique
    const outputString = rarity === 'uni' ? 'useitem,reg' : `usetype,${rarity}`;
    const inputCost = 'gem4,qty=1';
    const recipe = {
      description: `洗装备-REROLL-${rarityLabel}${typeLabel}`,
      numinputs: 3,
      ilvl: 100, // preserve item level
      'input 1': `${type},${rarity}`, 'input 2': `${cost},qty=2`,
      output: `${outputString}`,
      // 'output b': `${cost},qty=1`,//免费洗装备用来调试。
      // 'b lvl': 99,
      '*eol\r': '0', enabled: 1, version: 100,
    };
    cubemain.rows.push(recipe);
  });
});

//白色装备ENCHANT
EQUIP_TYPES.forEach((enchantType) => {
  ENCHANT_RARITY.forEach(([lootRarity, rarityLabel]) => {
    [
      ['mag'],
      ['rar'],
      ['uni']
    ].forEach(([jewRarity]) => {
      const recipe = {
        description: `白装附魔-ENCHANT-${rarityLabel}`,
        enabled: 1, version: 100,
        numinputs: 3,
        ilvl: 100,
        'input 1': `${enchantType},${lootRarity}`,
        'input 2': `jew,${jewRarity},qty=2`,
        output: `usetype,${jewRarity}`,
        '*eol\r': '0'
      };
      cubemain.rows.push(recipe);
    });
  });
});

// [
//   ['uni', '暗金'],
//   ['set', '套装']
// ].forEach(([rarity, rarityLabel]) => {
//   EXTRACT_TYPES.forEach(([uniqueType, typeLabel]) => {
//     const uniqueIndex = ALL_UNIQUE_TYPES.indexOf(uniqueType);
//     const pgSCode = ALL_PG_S_CODES[uniqueIndex];
//     cubemain.rows.push({
//       description: `${rarityLabel}${typeLabel}萃取（EXTRACT）`,
//       enabled: 1,
//       version: 100,
//       numinputs: 2,
//       'input 1': `${uniqueType},${rarity}`,
//       'input 2': 'rvs',
//       ilvl: 100,
//       // output: `${pgSCode}`,
//       output: `gem4,qty=1`,
//       'output b': `rvs`,
//       '*eol\r': '0',
//     });
//   });
// });

EQUIP_TYPES.forEach((equipType) => {
  ALL_RARITY.forEach((magicType) => {
    const description = "制作无形-ETHEREAL-" + `${equipType}-${magicType}`;
    cubemain.rows.push({
      description: description,
      enabled: 1,
      version: 100,
      numinputs: 3,
      'input 1': `${equipType},${magicType}`,
      'input 2': "r25",
      'input 3': "isc",
      ilvl: 100,
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
    const description = "底材萃取-EXTRACTION-" + `${equipType}-${magicType}`;
    const hiqStr = magicType === 'hiq' ? 'hiq' : 'nor';
    cubemain.rows.push({
      description: description,
      enabled: 1,
      version: 100,
      numinputs: 3,
      'input 1': `${equipType},${magicType}`,
      'input 2': "r18",
      'input 3': "tsc",
      ilvl: 100,
      output: `usetype,hiq`,
      '*eol\r': '0',
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