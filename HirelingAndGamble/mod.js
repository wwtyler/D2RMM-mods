//赌博概率
// const difficultylevelsFilename = 'global\\excel\\difficultylevels.txt';
// const difficultylevels = D2RMM.readTsv(difficultylevelsFilename);
// difficultylevels.rows.forEach((row) => {


//   row.GambleRare = row.GambleRare * 20;
//   row.GambleSet = row.GambleSet * 12;
//   row.GambleUnique = row.GambleUnique * 15
//   row.GambleUber = row.GambleUber * 15;

// });
// D2RMM.writeTsv(difficultylevelsFilename, difficultylevels);


// ////////////////////////////npc sell max/////////////////////////////
// const npcFilename = 'global\\excel\\npc.txt';
// const npcs = D2RMM.readTsv(npcFilename);

// npcs.rows.forEach((npc) => {
//   const maxBuy = 'max buy';
//   const maxBuyNm = 'max buy (N)'
//   const maxBuyHell = 'max buy (H)'
//   npc[maxBuy] = 50000;
//   npc[maxBuyNm] = 70000;
//   npc[maxBuyHell] = 100000;

// });
// D2RMM.writeTsv(npcFilename, npcs);


//雇佣兵复活费用上限调整
const hirelingFilename = 'global\\excel\\hireling.txt';
const hirelings = D2RMM.readTsv(hirelingFilename);
hirelings.rows.forEach((hireling) => {
  if (hireling.resurrectcostmax != null && hireling.resurrectcostmax > 30000)
    hireling.resurrectcostmax = 30001;

});
D2RMM.writeTsv(hirelingFilename, hirelings);


//赌博价格折扣
const armorFilename = 'global\\excel\\armor.txt';
const armors = D2RMM.readTsv(armorFilename);

const weaponsFilename = 'global\\excel\\weapons.txt';
const weapons = D2RMM.readTsv(weaponsFilename);

const miscFilename = 'global\\excel\\misc.txt';
const miscs = D2RMM.readTsv(miscFilename);

armors.rows.forEach((row) => {
  gambleCostDiscount(row);

});

weapons.rows.forEach((row) => {
  gambleCostDiscount(row);

});

miscs.rows.forEach((row) => {
  gambleCostDiscount(row);

});

function gambleCostDiscount(row) {
  if (row['gamble cost'] > 0) {
    if (row['gamble cost'] > 30000) {
      // row['gamble cost'] = Math.floor(row['gamble cost'] * 0.7);
      row['gamble cost'] = 30001;
    };
    // if (row['gamble cost'] > 60000) {
    //   row['gamble cost'] = Math.floor(row['gamble cost'] * 0.6);
    // };
    // if (row['gamble cost'] > 100000) {
    //   row['gamble cost'] = Math.floor(row['gamble cost'] * 0.5);
    // };
    // if (row['gamble cost'] > 150000) {
    //   row['gamble cost'] = 50000;
    // }
  }
}

D2RMM.writeTsv(armorFilename, armors);
D2RMM.writeTsv(weaponsFilename, weapons);