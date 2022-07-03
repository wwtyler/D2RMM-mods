const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

const DIFFICULTY_AFFIXES = ['', ' (N)', ' (H)'];
const DIFFICULTY_QUEST_AFFIXES = ['q', 'q (N)', 'q (H)'];
const PANDEMONIUSMS = ['Pandemonium Key A', 'Pandemonium Key B', 'Pandemonium Key C'];
// 特别注意：都瑞尔的treasure class =  Duriel (H) - Base。
const BOSS_NAMES = ['Andariel', 'Duriel', 'Mephisto', 'Diablo', 'Baal', 'Radament', 'Summoner', 'Council', 'Haphesto', 'Nihlathak', 'Blood Raven', 'Izual', 'Cow King', 'Countess'];
const ACT_GOODS = [
  'Act 5 (H) Good', 'Act 4 (H) Good', 'Act 3 (H) Good', 'Act 2 (H) Good', 'Act 1 (H) Good',
  'Act 5 (N) Good', 'Act 4 (N) Good', 'Act 3 (N) Good', 'Act 2 (N) Good', 'Act 1 (N) Good',
  'Act 5 Good', 'Act 4 Good', 'Act 3 Good', 'Act 2 Good', 'Act 1 Good'
];
const ACT_JUNKS = [
  'Act 5 (H) Junk', 'Act 4 (H) Junk', 'Act 3 (H) Junk', 'Act 2 (H) Junk', 'Act 1 (H) Junk',
  'Act 5 (N) Junk', 'Act 4 (N) Junk', 'Act 3 (N) Junk', 'Act 2 (N) Junk', 'Act 1 (N) Junk',
  'Act 5 Junk', 'Act 4 Junk', 'Act 3 Junk', 'Act 2 Junk', 'Act 1 Junk'
];
const JUNK_ITEMS = ['tsc', 'isc', 'key', 'hp1', 'hp2', 'hp3', 'hp4', 'mp1', 'mp2', 'mp3', 'mp4', 'Chipped Gem', 'Flawed Gem', 'Ammo'];
const RECIPE_ITEMS = ['fed', 'bet', 'ceh', 'tes'];
const UBER_KEYS_ITEMS = ['pk1', 'pk2', 'pk3'];
const GOOD_ITEMS = ['jew', 'rvs'];

const GOOD_LOOT_ITEMS = ['weap81', 'weap78', 'weap75', 'weap72', 'armo81', 'armo78', 'armo75', 'armo72', 'bow81', 'bow78', 'bow75', 'bow72'];
const GREAT_LOOT_ITEMS = ['weap87', 'weap84', 'armo87', 'armo84', 'bow87', 'bow84'];

treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];

  for (let i = 1; i <= 8; i = i + 1) {
    const itemValue = row[`Item${i}`];
    const probValue = row[`Prob${i}`];

    //act Good两倍掉落, act Junk减半。
    if (ACT_GOODS.includes(itemValue)) {
      row[`Prob${i}`] = Math.floor(probValue * 1.5)
    }
    if (ACT_JUNKS.includes(itemValue)) {
      row[`Prob${i}`] = Math.max(Math.floor(probValue / 2), 1);
    }
    //减少垃圾物品的掉落:卷轴、低等级药水等。
    //增加精华、红门钥匙、珠宝的掉落.
    if (JUNK_ITEMS.includes(itemValue)) {
      row[`Prob${i}`] = Math.max(Math.floor(probValue / 2), 1);
    }
    if (RECIPE_ITEMS.includes(itemValue)) {
      row[`Prob${i}`] = Math.floor(probValue * 5);
    }
    if (UBER_KEYS_ITEMS.includes(itemValue)) {
      if (!PANDEMONIUSMS.includes(treasureClass)) {
        row[`Prob${i}`] = Math.floor(probValue * 10);
      }
    }
    if (GOOD_ITEMS.includes(itemValue)) {
      row[`Prob${i}`] = Math.floor(probValue * 2);
    }
    if (GOOD_LOOT_ITEMS.includes(itemValue)) {
      row[`Prob${i}`] = Math.floor(probValue * 2);
    }
    if (GREAT_LOOT_ITEMS.includes(itemValue)) {
      row[`Prob${i}`] = Math.floor(probValue * 2);
    }
  }
});

treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];

  const prob9 = 'Prob9';
  const unique = 'Unique';
  const set = 'Set';
  const rare = 'Rare';
  // 高级别装备掉落概率
  if (row[prob9] > 0) {
    row[prob9] = Math.floor(800 * row[prob9] / 1800);
  }

  //暗金的掉率修正
  if (row[unique] >= 512 && row[unique] < 800) {
    row[unique] = Math.max(850, Math.floor(row[unique]));
  }
  else if (row[unique] >= 800 && row[unique] < 900) {
    row[unique] = Math.min(950, Math.floor(row[unique]) + 80);
  }
  if (row[set] >= 512 && row[set] < 800) {
    row[set] = Math.max(799, Math.floor(row[set]));
  }
  else if (row[set] >= 800 && row[set] < 900) {
    row[set] = Math.min(950, Math.floor(row[set]) + 60);
  }
  if (row[rare] >= 512 && row[rare] < 850) {
    row[rare] = Math.max(850, Math.floor(row[rare]) + 100);
  }
  else if (row[rare] >= 850 && row[rare] < 999) {
    row[rare] = Math.min(999, Math.floor(row[rare]) + 100);
  }

  // 关卡Boss掉落调整
  BOSS_NAMES.forEach((bossName) => {
    DIFFICULTY_AFFIXES.forEach((difficultyAffix) => {
      const bossCell = `${bossName}${difficultyAffix}`;
      if (treasureClass === bossCell) {
        row['Unique'] = 983;
        row['Set'] = 983
        row['Rare'] = 1020;
        row['Magic'] = 1024;
      }
    });
  });

  // 增加任務BOSS掉落
  BOSS_NAMES.forEach((bossName) => {
    DIFFICULTY_QUEST_AFFIXES.forEach((difficultyQuestAffix) => {
      const bossQuestCell = `${bossName}${difficultyQuestAffix}`;
      if (treasureClass === bossQuestCell) {
        if (row['Prob2'] > 0)
          row['Prob2'] = Math.floor(row['Prob2'] * 1.5);
      }
    })
  });
});

// 大幅提升高等级符文掉率
treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];
  if (treasureClass.match(/^Runes [1-9][0-9]?$/) != null) {
    let groupNumber = +treasureClass.replace(/^Runes ([1-9][0-9]?)$/, '$1');
    if (groupNumber > 1 && groupNumber < 6) {
      // row['Prob3'] = Math.floor( Math.max(row['Prob3'] / 3, 2 * Math.sqrt(36)));
    }
    else if (groupNumber >= 6 && groupNumber < 12) {
      row['Prob3'] = Math.floor(row['Prob3'] / groupNumber * 5.8);
    }
    else if (groupNumber >= 12 && groupNumber < 17) {
      row['Prob3'] = Math.floor(row['Prob3'] / groupNumber * 5.3);
    }
    else if (groupNumber == 17) {
      row['Prob2'] = Math.floor(row['Prob2'] / groupNumber *  4.8);
    }
  }

  //ACTGOOD掉落，增加符文的概率
  //Act 5 (H) Good	5	85	1		Jewelry C	60	Chipped Gem	2	Flawed Gem	5	Normal Gem	14	Flawless Gem	28	Runes 17	*14*	
  if (ACT_GOODS.includes(treasureClass)) {
    const item6 = row['Item6'] + "";
    const prob6 = row['Prob6'];
    const level = row['level'];
    if (item6 != null && item6.substring(0, 5) == "Runes") {
      row['Prob6'] = Math.floor(prob6 * 2);
    }
    //增加完美宝石的掉落。
    if (level != null && level >= 66) {//hell Good begin at level 66
      row['Item2'] = 'Perfect Gem';
      row['Prob2'] = 14;
    }
  }
});

treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];
  // not all rows are valid entries
  if (treasureClass !== '') {

    // NODROP修正。
    if (row.NoDrop != null && row.NoDrop > 0) {
      // row.NoDrop = Math.floor(row.NoDrop * 2 / 3);
    }

    // the countess prefer to drop runes over items
    if (
      treasureClass === 'Countess' ||
      treasureClass === 'Countess (N)' ||
      treasureClass === 'Countess (H)'
    ) {
      // swap the order of 'Countess Rune' and 'Countess Item' to make
      const item1 = row.Item1;
      const item2 = row.Item2;
      row.Item1 = item2;
      row.Item2 = item1;
    }

    //countess可以掉落所有符文。
    if (treasureClass === 'Countess Rune') row.Item1 = 'Runes 8';//vanilla=4
    if (treasureClass === 'Countess Rune (N)') row.Item1 = 'Runes 12';//vanilla=8
    if (treasureClass === 'Countess Rune (H)') row.Item1 = 'Runes 17';//vanilla=12
  }
});
D2RMM.writeTsv(treasureclassexFilename, treasureclassex);


//降低部分物品的稀有度（rarity）
//暗金物品设置nolimit值
const uniqueitemsFilename = 'global\\excel\\UniqueItems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);
uniqueitems.rows.forEach((row) => {
  row.nolimit = 1;
  if (row.rarity != null && row.rarity > 2)
    row.rarity = 2;
});
D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);

const setItemsFilename = 'global\\excel\\SetItems.txt';
const setItems = D2RMM.readTsv(setItemsFilename);
setItems.rows.forEach((row) => {
  if (row.rarity != null && row.rarity > 2)
    row.rarity = 2;
});
D2RMM.writeTsv(setItemsFilename, setItems);
