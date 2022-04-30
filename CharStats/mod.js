const CLASS_NAMES = ['Amazon', 'Sorceress', 'Necromancer', 'Paladin', 'Barbarian', 'Druid', 'Assassin'];
const charstatsFilename = 'global\\excel\\charstats.txt';
const charstats = D2RMM.readTsv(charstatsFilename);

charstats.rows.forEach((row) => {

  if (row.class !== 'Expansion') {
    //角色出生自带盒子
    row.item6 = 'box';
    row.item6count = 1;

    //角色出生初始耐力x3
    row.stamina = Math.floor(row.stamina * 3);

    //角色升级每级的技能点数
    // row.SkillsPerLevel = 2;
  }

});
D2RMM.writeTsv(charstatsFilename, charstats);
