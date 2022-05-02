const CLASS_NAMES = ['Amazon', 'Sorceress', 'Necromancer', 'Paladin', 'Barbarian', 'Druid', 'Assassin'];
const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);

skills.rows.forEach((row) => {

  if (row.skill === 'Blizzard') {
    row.Param8 = 6;// 原始值 5

    //row.EDmgSymPerCalc = " '(skill('Ice Bolt'.blvl)+skill('Ice Blast'.blvl)+skill('Glacial Spike'.blvl))*par8'";
  }

  if (row.skill === 'Fire Wall') {
    row.Param8 = 6;// 原始值 4
    row.Param7 = 5;// 原始值 1
    // row['*Param7 Description'] = 'Damage synergy';
    row.EDmgSymPerCalc = "skill('Warmth'.blvl)*par8+skill('Fire Ball'.blvl)*par7+skill('Fire Bolt'.blvl)*par7";//" skill('Warmth'.blvl)*par8"
  }

});
D2RMM.writeTsv(skillsFilename, skills);


const skilldescFilename = 'global\\excel\\skilldesc.txt';
const skilldescs = D2RMM.readTsv(skilldescFilename);

skilldescs.rows.forEach((row) => {



  if (row.skilldesc === 'fire wall') {
    // //warmth 缺省已经配置了温暖的加成  37
    // row.dsc3line2 = '76';
    // row.dsc3texta2= 'Firedplev';
    // row.dsc3textb2= 'skillname37';
    // row.dsc3calca2= 'par7';

    // //Fire Ball 火球加成 47
    row.dsc3line3 = 76;
    row.dsc3texta3 = 'Firedplev';
    row.dsc3textb3 = 'skillname47';
    row.dsc3calca3 = 'par7';

    // //Fire Bolt 火焰弹加成  36
    row.dsc3line4 = 76;
    row.dsc3texta4 = 'Firedplev';
    row.dsc3textb4 = 'skillname36';
    row.dsc3calca4 = 'par7';
  }

  if (row.skilldesc == 'blizzard') {
  }

});
D2RMM.writeTsv(skilldescFilename, skilldescs);