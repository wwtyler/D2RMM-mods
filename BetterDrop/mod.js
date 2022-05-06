const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

const DIFFICULTY_AFFIXES = ['', ' (N)', ' (H)'];
const DIFFICULTY_QUEST_AFFIXES = ['q', 'q (N)', 'q (H)'];
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
const UBER_KEYS = ['pk1', 'pk2', 'pk3'];
const GOOD_ITEMS = ['jew', 'rvs'];

treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];

  for (let i = 1; i <= 6; i = i + 1) {
    const itemValue = row[`Item${i}`];
    const probValue = row[`Prob${i}`];

    //act Good两倍掉落, act Junk减半。
    ACT_GOODS.forEach((actGood) => {
      if (itemValue != null && itemValue == actGood) {
        row[`Prob${i}`] = Math.floor(probValue * 2)
      }
    });
    ACT_JUNKS.forEach((actJunk) => {
      if (itemValue != null && itemValue == actJunk) {
        row[`Prob${i}`] = Math.max(Math.floor(probValue / 2), 1);
      }
    });

    //减少垃圾物品的掉落:卷轴、低等级药水等。
    //增加精华、红门钥匙、珠宝的掉落.
    JUNK_ITEMS.forEach((junkItem) => {
      if (itemValue != null && itemValue == junkItem) {
        row[`Prob${i}`] = Math.max(Math.floor(probValue / 2), 1);
      }
    });

    RECIPE_ITEMS.forEach((recipeItem) => {
      if (itemValue != null && itemValue == recipeItem) {
        row[`Prob${i}`] = Math.floor(probValue * 3);
      }
    });

    UBER_KEYS.forEach((uberKey) => {
      if (treasureClass != 'Pandemonium Key A' && treasureClass != 'Pandemonium Key B' && treasureClass != 'Pandemonium Key C') {
        if (itemValue != null && itemValue == uberKey) {
          row[`Prob${i}`] = Math.floor(probValue * 10);
        }
      }
    });

    GOOD_ITEMS.forEach((goodItem) => {
      if (itemValue != null && itemValue == goodItem) {
        row[`Prob${i}`] = Math.floor(probValue * 2);
      }
    });
  }
});


treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];

  const prob9 = 'Prob9';
  // const unique = 'Unique';
  // const set = 'Set';

  // 高级别装备掉落概率

  if (row[prob9] > 0) {
    row[prob9] = Math.floor(500 * row[prob9] / 2000);
  }

  // if (row[unique] >= 512 && row[unique] < 800) {
  //   row[unique] = 750;
  // }
  // if (row[unique] >= 800 && row[unique] < 900) {
  //   row[unique] = 850;
  // }
  // if (row[set] >= 512 && row[set] < 800) {
  //   row[set] = 750;
  // }
  // if (row[set] >= 800 && row[set] < 900) {
  //   row[set] = 800;
  // }

  // 关卡Boss掉落调整
  BOSS_NAMES.forEach((bossName) => {
    DIFFICULTY_AFFIXES.forEach((difficultyAffix) => {
      const bossCell = `${bossName}${difficultyAffix}`;
      if (treasureClass === bossCell) {
        row['Unique'] = 983;
        row['Set'] = 983
        row['Rare'] = 999;
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
          row['Prob2'] = Math.floor(row['Prob2'] * 2);
      }
    })
  });
});


// 大幅提升符文掉率
treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];
  if (treasureClass.match(/^Runes [1-9][0-9]?$/) != null) {
    const groupNumber = +treasureClass.replace(/^Runes ([1-9][0-9]?)$/, '$1');
    if (groupNumber > 1) {
      const restGroupColumn = groupNumber < 17 ? 'Prob3' : 'Prob2';

      row[restGroupColumn] = Math.floor(
        Math.max(
          row[restGroupColumn] / 8,
          2 * Math.sqrt(8)
        )
      );
    }
  }
});

// NODROP减半
treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];
  // not all rows are valid entries
  if (treasureClass !== '') {

    if (row.NoDrop != null && row.NoDrop > 0)
      row.NoDrop = Math.floor(row.NoDrop / 2);

    // fix Countess items if necessary
    if (config.fixcountess) {
      if (
        treasureClass === 'Countess' ||
        treasureClass === 'Countess (N)' ||
        treasureClass === 'Countess (H)'
      ) {
        // swap the order of 'Countess Rune' and 'Countess Item' to make
        // the countess prefer to drop runes over items
        const item1 = row.Item1;
        const item2 = row.Item2;
        row.Item1 = item2;
        row.Item2 = item1;
      }
    }
  }
});

D2RMM.writeTsv(treasureclassexFilename, treasureclassex);



