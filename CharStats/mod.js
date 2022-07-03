const charstatsFilename = 'global\\excel\\charstats.txt';
const charstats = D2RMM.readTsv(charstatsFilename);

charstats.rows.forEach((row) => {

  if (row.class !== 'Expansion') {
    //角色出生自带盒子。
    row.item6 = 'box'; row.item6count = 1;
    //角色出生自带TOA.(Token of Absolution)
    row.item7 = 'toa'; row.item7count = 1;
    
    //角色出生初始耐力x3。
    row.stamina = Math.floor(row.stamina * 2);

    //角色升级每级的技能点数。
    // row.SkillsPerLevel = 1;
    //角色升级每级的属性点数。
    // row.StatPerLevel = 5;

    //ManaPerLevel 	LifePerVitality 	StaminaPerVitality 	ManaPerMagic
    row.ManaPerLevel = Math.floor(row.ManaPerLevel * 1.2);
    row.ManaPerMagic = Math.floor(row.ManaPerMagic * 1.2);
  }

});
D2RMM.writeTsv(charstatsFilename, charstats);
