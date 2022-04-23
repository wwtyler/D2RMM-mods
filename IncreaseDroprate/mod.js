
if (config.runes) {
  const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
  const treasureclassex = D2RMM.readTsv(treasureclassexFilename);
  treasureclassex.rows.forEach((row) => {
    const treasureClass = row['Treasure Class'];
    if (treasureClass.match(/^Runes [1-9][0-9]?$/) != null) {
      const groupNumber = +treasureClass.replace(/^Runes ([1-9][0-9]?)$/, '$1');
      if (groupNumber > 1) {
        const restGroupColumn = groupNumber < 17 ? 'Prob3' : 'Prob2';

        row[restGroupColumn] = Math.floor(
          Math.max(
            row[restGroupColumn] / config.runesScaling,
            2 * Math.sqrt(config.runesScaling)
          )
        );
      }
    }
  });
  D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
}

/////////////////////////////////////////////////////////


if (config.equipment) {
  const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
  const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

  const DIFFICULTY_AFFIXES = ['', ' (N)', ' (H)'];
  const DIFFICULTY_QUEST_AFFIXES = ['q', 'q (N)', 'q (H)'];

  const BOSS_NAMES = ['Andariel', 'Duriel', 'Mephisto', 'Diablo', 'Baal'];

  treasureclassex.rows.forEach((row) => {
    const treasureClass = row['Treasure Class'];

    // 高级别装备掉落概率
    const prob9 = 'Prob9';
    if (row[prob9] > 200) {
      row[prob9] = 200;
    }

    const uniqueRate = 'Unique';
    const setRate = 'Set';
    const rareRate = 'Rare';
    const magicRate = 'Magic';

    var questRow = null;

    // 难度与关卡Boss掉落调整
    DIFFICULTY_QUEST_AFFIXES.forEach((difficultyQuestAffix) => {
      BOSS_NAMES.forEach((bossName) => {
        const bossQuestCell = `${bossName}${difficultyQuestAffix}`;

        if (treasureClass === bossQuestCell) {
          if (row['Prob2'] > 0)
            row['Prob2'] = Math.floor(row['Prob2'] * 2);
        }
      })
    });

    DIFFICULTY_AFFIXES.forEach((difficultyAffix) => {
      BOSS_NAMES.forEach((bossName) => {
        const bossCell = `${bossName}${difficultyAffix}`;
        if (treasureClass === bossCell) {
          row[uniqueRate] = 996;
          row[setRate] = 996
          row[rareRate] = 1024;
          row[magicRate] = 1024;
          row = questRow;
        }
      })
    });


  });
  D2RMM.writeTsv(treasureclassexFilename, treasureclassex);

}

/////////////////////////////////////////////////////////

if (config.equipment) {
  const { equipmentChance, equipmentMin } = config;
  const itemratioFilename = 'global\\excel\\itemratio.txt';
  const itemratio = D2RMM.readTsv(itemratioFilename);
  itemratio.rows.forEach((row) => {
    row.Unique = Math.max(
      Math.min(4, row.Unique),
      Math.floor(row.Unique / equipmentChance)
    );
    row.UniqueMin = Math.max(1, Math.floor(row.UniqueMin / equipmentMin));

    row.Set = Math.max(
      Math.min(4, row.Set),
      Math.floor(row.Set / equipmentChance)
    );
    row.SetMin = Math.max(1, Math.floor(row.SetMin / equipmentMin));

    row.Rare = Math.max(
      Math.min(4, row.Rare),
      Math.floor(row.Rare / equipmentChance)
    );
    row.RareMin = Math.max(1, Math.floor(row.RareMin / equipmentMin));

    row.Magic = Math.max(
      Math.min(4, row.Magic),
      Math.floor(row.Magic / equipmentChance)
    );
    row.MagicMin = Math.max(1, Math.floor(row.MagicMin / equipmentMin));

    row.HiQuality = Math.max(
      Math.min(4, row.HiQuality),
      Math.floor(row.HiQuality / equipmentChance)
    );
  });
  D2RMM.writeTsv(itemratioFilename, itemratio);
}
