const skillsFilename = 'global\\excel\\skills.txt';
const skills = D2RMM.readTsv(skillsFilename);
const convictionMax = 250;

skills.rows.forEach((row) => {

  //*********************************************||SOR SKILLS||*********************************************
  if (row.skill === 'Warmth') {
    row.Param1 = 30;//30 # Mana Recovery % baseline	
    row.Param2 = 18;//12 # 	Mana Recovery % per level
  }
  if (row.skill === 'Blizzard') {
    row.Param8 = 7;// 原始值 5
    //row.EDmgSymPerCalc = " '(skill('Ice Bolt'.blvl)+skill('Ice Blast'.blvl)+skill('Glacial Spike'.blvl))*par8'";
  }
  if (row.skill === 'Charged Bolt') {
    row.calc1 = "min(36,ln12)";	// # of Bolt Missiles created
    row.Param1 = 3;//3 # of Bolt Missiles created baseline	
    row.Param2 = 1;//1 # of Bolt Missiles created per level
    row.Param8 = 6;//6 # Damage synergy	
    //(skill('Lightning'.blvl))*par8
    row.EDmgSymPerCalc = "(skill('Lightning'.blvl))*par8";
    //EMin	EMinLev1	EMinLev2	EMinLev3	EMinLev4	EMinLev5	EMax	EMaxLev1	EMaxLev2	EMaxLev3	EMaxLev4	EMaxLev5
    //4	1	1	2	3	4	8	1	1	2	3	4
    row.EMin = "6"; row.EMinLev1 = "2"; row.EMinLev2 = "3"; row.EMinLev3 = "4"; row.EMinLev4 = "5"; row.EMinLev5 = "6";
    row.EMax = "10"; row.EMaxLev1 = "4"; row.EMaxLev2 = "5"; row.EMaxLev3 = "6"; row.EMaxLev4 = "8"; row.EMaxLev5 = "10";
  }
  if (row.skill === 'Lightning') {
    row.Param8 = 10;// 原始值 8
  }
  if (row.skill === 'Chain Lightning') {
    row.Param8 = 6;// 原始值 4
    // (skill('Charged Bolt'.blvl)+skill('Lightning'.blvl)+skill('Nova'.blvl))*par8
    row.EDmgSymPerCalc = "(skill('Charged Bolt'.blvl)+skill('Lightning'.blvl)+skill('Nova'.blvl))*par8";
  }
  if (row.skill === 'Nova') {
    row.Param8 = 6;// 原始值 5
    //(skill('Static Field'.blvl))*par8
    row.EDmgSymPerCalc = "(skill('Charged Bolt'.blvl)+skill('Lightning'.blvl))*par8";
  }
  if (row.skill === 'Fire Wall') {
    row.Param8 = 6;// 原始值 4
    row.Param7 = 5;// 原始值 1
    // "skill('Warmth'.blvl)*par8"
    row.EDmgSymPerCalc = "skill('Warmth'.blvl)*par8+skill('Fire Ball'.blvl)*par7+skill('Fire Bolt'.blvl)*par7";
  }
  //*********************************************||PLA SKILLS||*********************************************
  if (row.skill === 'Holy Bolt') {
    row.Param8 = 65;// 原始值 50
    row.Param7 = 30;// 原始值 20
    // row.EDmgSymPerCalc = "skill('Fist of the Heavens'.blvl)*par8";
  }
  if (row.skill === 'Fist of the Heavens') {
    row.Param8 = 12;// 原始值 7
    // row.EDmgSymPerCalc = "skill('Holy Shock'.blvl)*par8";
  }
  if (row.skill === 'Conviction') {
    row.Param4 = 10;// 原始值 5  Resistance % reduction per level
    row.aurastatcalc2 = `-min(ln34,${convictionMax})`;//fireresist
    row.aurastatcalc3 = `-min(ln34,${convictionMax})`;//coldresist
    row.aurastatcalc4 = `-min(ln34,${convictionMax})`;//lightresist
  }
});
D2RMM.writeTsv(skillsFilename, skills);


const skilldescFilename = 'global\\excel\\skilldesc.txt';
const skilldescs = D2RMM.readTsv(skilldescFilename);

skilldescs.rows.forEach((row) => {
  if (row.skilldesc === 'charged bolt') {
    row.desccalca3 = "min(36,ln12)";
  }
  if (row.skilldesc === 'fire wall') {
    // warmth 缺省已经配置了温暖的加成  37
    // row.dsc3line2 = '76';row.dsc3texta2= 'Firedplev';row.dsc3textb2= 'skillname37';row.dsc3calca2= 'par7';
    // Fire Ball 火球加成 47
    row.dsc3line3 = 76; row.dsc3texta3 = 'Firedplev'; row.dsc3textb3 = 'skillname47'; row.dsc3calca3 = 'par7';
    // Fire Bolt 火焰弹加成  36
    row.dsc3line4 = 76; row.dsc3texta4 = 'Firedplev'; row.dsc3textb4 = 'skillname36'; row.dsc3calca4 = 'par7';
  }
  if (row.skilldesc === 'nova') {
    // 76	Ltngdplev	skillname42	par8
    row.dsc3line2 = 76; row.dsc3texta2 = 'Ltngdplev'; row.dsc3textb2 = 'skillname38'; row.dsc3calca2 = 'par8';
    row.dsc3line3 = 76; row.dsc3texta3 = 'Ltngdplev'; row.dsc3textb3 = 'skillname49'; row.dsc3calca3 = 'par8';
  }
  if (row.skilldesc == 'conviction') {
    row.desccalca2 = `-min(ln34,${convictionMax})`;
  }

});
D2RMM.writeTsv(skilldescFilename, skilldescs);