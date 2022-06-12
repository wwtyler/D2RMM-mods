const cubemainFilename = 'global\\excel\\cubemain.txt';
const itemtypesFilename = 'global\\excel\\itemtypes.txt';
const armorFilename = 'global\\excel\\armor.txt';

const cubemain = D2RMM.readTsv(cubemainFilename);
const itemtypes = D2RMM.readTsv(itemtypesFilename);
const armor = D2RMM.readTsv(armorFilename);

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
if (config.unsocket) {
  const unsocketRecipe = {
    description: 'Empty Sockets',
    enabled: 1,
    version: 100,
    numinputs: 2,
    // input 1 defined below
    'input 2': 'jew',
    output: '"useitem,rem"',
    '*eol\r': 0,
  };

  cubemain.rows.push({
    ...unsocketRecipe,
    description: `${unsocketRecipe.description} On Armor`,
    'input 1': `"armo,sock=${sockets}"`,
  });

  cubemain.rows.push({
    ...unsocketRecipe,
    description: `${unsocketRecipe.description} On Weapon`,
    'input 1': `"weap,sock=${sockets}"`,
  });
}
for (let sockets = 1; sockets <= 6; sockets = sockets + 1) {
  if (config.socket) {
    const socketRecipe = {
      description: `Add ${sockets} Sockets`,
      enabled: 1,
      version: 100,
      numinputs: sockets + 1,
      // input 1 defined below
      'input 2': `"jew,qty=${sockets}"`,
      output: 'useitem',
      'mod 1': 'sock',
      'mod 1 min': sockets,
      'mod 1 max': sockets,
      '*eol\r': 0,
    };

    cubemain.rows.push({
      ...socketRecipe,
      description: `${socketRecipe.description} To Armor`,
      'input 1': '"armo,nos"',
    });

    cubemain.rows.push({
      ...socketRecipe,
      description: `${socketRecipe.description} To Weapon`,
      'input 1': '"weap,nos"',
    });
  }
}
D2RMM.writeTsv(cubemainFilename, cubemain);
D2RMM.writeTsv(itemtypesFilename, itemtypes);
D2RMM.writeTsv(armorFilename, armor);
