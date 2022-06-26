//赌博概率
// Normal	0	0	0	0	1	1	1	1	1	90	90	17	100	100	10	10	17	25	50	13	100	200	400	17	50	75	0	30000	800	500	700	330
// Nightmare	-40	-20	5	3	2	2	2	2	2	75	75	17	100	100	10	10	17	25	35	13	100	200	400	17	35	50	33	30000	800	500	700	330
// Hell	-100	-50	10	7	4	4	4	3	3	66	66	17	100	100	10	10	17	25	25	13	100	200	400	17	20	13	50	30000	800	500	700	330
// Hell	-100	-50	10	7	4	4	4	3	3	66	66	17	100	100	10	10	17	25	25	13	100	200	400	17	20	13	50	50000	1500	750	1800	660
// Normal	0	0	0	0	1	1	1	1	1	90	90	17	100	100	10	10	17	25	50	13	100	200	400	17	50	75	0	50000	1500	750	1800	660
// Nightmare	-40	-20	5	3	2	2	2	2	2	75	75	17	100	100	10	10	17	25	35	13	100	200	400	17	35	50	33	50000	1500	750	1800	660
// 	GambleRare	GambleSet	GambleUnique	GambleUber	GambleUltra

const difficultylevelsFilename = 'global\\excel\\difficultylevels.txt';
const difficultylevels = D2RMM.readTsv(difficultylevelsFilename);
difficultylevels.rows.forEach((row) => {
  row.GambleRare = row.GambleRare * 3;
  row.GambleSet = row.GambleSet * 10;
  row.GambleUnique = row.GambleUnique * 12
  row.GambleUber = row.GambleUber * 15
  row[`GambleUltra\r`] = row[`GambleUltra\r`] * 15;

  if (row.ResistPenalty !== '') {
    row.ResistPenalty = Math.floor(row.ResistPenalty * 125 / 100);
  }
  if (row.DeathExpPenalty !== '') {
    row.DeathExpPenalty = Math.floor(row.DeathExpPenalty * 40 / 100);
  }
});

D2RMM.writeTsv(difficultylevelsFilename, difficultylevels);

// ////////////////////////////npc sell max/////////////////////////////
const npcFilename = 'global\\excel\\npc.txt';
const npcs = D2RMM.readTsv(npcFilename);

npcs.rows.forEach((npc) => {
  const maxBuy = 'max buy';
  const maxBuyNm = 'max buy (N)'
  const maxBuyHell = 'max buy (H)\r'
  npc[maxBuy] = 50000;
  npc[maxBuyNm] = 75000;
  npc[maxBuyHell] = 100000;

});
D2RMM.writeTsv(npcFilename, npcs);


//雇佣兵复活费用上限调整
const hirelingFilename = 'global\\excel\\hireling.txt';
const hirelings = D2RMM.readTsv(hirelingFilename);
hirelings.rows.forEach((hireling) => {
  if (hireling.resurrectcostmax != null && hireling.resurrectcostmax > 30000)
    hireling.resurrectcostmax = 30001;

});
D2RMM.writeTsv(hirelingFilename, hirelings);

const itemtypesFilename = 'global\\excel\\itemtypes.txt';
const itemtypes = D2RMM.readTsv(itemtypesFilename);
const CHARM_NAMES = ['Small Charm', 'Medium Charm', 'Large Charm'];
itemtypes.rows.forEach((row) => {
  if (CHARM_NAMES.includes(row.ItemType)) {
    //是否开启亮金（rare）咒符
    row['Rare'] = 1;
  }
});
D2RMM.writeTsv(itemtypesFilename, itemtypes);

// gambles.rows.push({
//   name: `Jewel`,
//   'code\r': 'jew',
// });
// gambles.rows.push({
//   name: `Diadem`,
//   'code\r': 'ci3'
// });
// gambles.rows.push({
//   name: `Diadem`,
//   'code\r': 'ci3'
// });
// miscs.rows.forEach((row) => {
//   if (row.name === 'Jewel') {
//     row['gamble cost'] = 42000;
//   }
// });
// gambles.rows.push({
//   name: `Charm Small`,
//   'code\r': 'cm1'
// });
// gambles.rows.push({
//   name: `Charm Medium`,
//   'code\r': 'cm2'
// });
// gambles.rows.push({
//   name: `Charm Large`,
//   'code\r': 'cm3'
// });

// D2RMM.writeTsv(miscFilename, miscs);
// D2RMM.writeTsv(armorFilename, armors);
// D2RMM.writeTsv(weaponsFilename, weapons);
// D2RMM.writeTsv(gambleFilename, gambles);

