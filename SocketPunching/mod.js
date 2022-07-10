const cubemainFilename = 'global\\excel\\cubemain.txt';
const itemtypesFilename = 'global\\excel\\itemtypes.txt';
const armorFilename = 'global\\excel\\armor.txt';

const cubemain = D2RMM.readTsv(cubemainFilename);
const itemtypes = D2RMM.readTsv(itemtypesFilename);
const armor = D2RMM.readTsv(armorFilename);

const EQUIP_TYPES = ['weap', 'armo'];
const RARITY_SOCKET_MAX_NUM = [
  ['nor', 6],
  ['hiq', 6],
  ['mag', 6],
  ['rar', 4],
  ['uni', 2],
  ['set', 2]
];

//手套、靴子增加打孔功能
itemtypes.rows.forEach((eachtype) => {
  if (eachtype.ItemType === 'Boots' || eachtype.ItemType === 'Gloves') {
    eachtype['MaxSockets1'] = 1
    eachtype['MaxSockets2'] = 2;
    eachtype['MaxSockets3'] = 3;
  }
});

armor.rows.forEach((armor) => {
  if (armor.type === 'boot' || armor.type === 'glov') {
    // hasinv	gemsockets	gemapplytype
    armor['hasinv'] = 1
    armor['gemsockets'] = 2;
    armor['gemapplytype'] = 1;
  }
});

//打孔公式
const unsocketRecipe = {
  description: 'SOCKETING Empty Sockets',
  enabled: 1,
  version: 100,
  numinputs: 2,
  // input 1 defined below
  'input 2': 'runz,qty=1',
  output: 'useitem,rem',
  '*eol\r': 0,
};

cubemain.rows.push({
  ...unsocketRecipe,
  description: `${unsocketRecipe.description} On Armor`,
  'input 1': `armo,sock=${sockets}`,
});

cubemain.rows.push({
  ...unsocketRecipe,
  description: `${unsocketRecipe.description} On Weapon`,
  'input 1': `weap,sock=${sockets}`,
});

EQUIP_TYPES.forEach((equipType) => {
  RARITY_SOCKET_MAX_NUM.forEach(([rarity, socketMaxNum]) => {
    for (let sockets = 1; sockets <= 6; sockets = sockets + 1) {
      let bonus = 0;
      if (equipType == 'weap' && rarity == 'uni')
        bonus = 1;
      if (sockets <= socketMaxNum + bonus) {
        cubemain.rows.push({
          description: `SOCKETING Add ${sockets} Sockets To ${equipType}`,
          enabled: 1, version: 100,
          numinputs: sockets + 2,
          'input 1': `${equipType},${rarity},nos`,
          'input 2': `runx,qty=${sockets}`,
          'input 3': `runz,qty=1`,
          'mod 1': 'sock',
          'mod 1 min': Math.min(sockets, socketMaxNum + bonus),
          'mod 1 max': Math.min(sockets, socketMaxNum + bonus),
          output: 'useitem',
          '*eol\r': 0,
        });
      }
    }
  });
});


D2RMM.writeTsv(cubemainFilename, cubemain);
D2RMM.writeTsv(itemtypesFilename, itemtypes);
D2RMM.writeTsv(armorFilename, armor);
