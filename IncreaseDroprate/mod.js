//增加符文掉落的概率
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

//降低部分词缀的频率(frequency)
const MagicPrefixFilename = 'global\\excel\\MagicPrefix.txt';
const magicPrefixs = D2RMM.readTsv(MagicPrefixFilename);
magicPrefixs.rows.forEach((magicPrefix) => {
  if (magicPrefix != null && magicPrefix.frequency >= 2)
    magicPrefix.frequency = 1;
});
D2RMM.writeTsv(MagicPrefixFilename, magicPrefixs);

const MagicSuffixFilename = 'global\\excel\\MagicSuffix.txt';
const magicSuffixs = D2RMM.readTsv(MagicSuffixFilename);
magicSuffixs.rows.forEach((magicSuffix) => {
  if (magicSuffix.frequency != null && magicSuffix.frequency > 2)
    magicSuffix.frequency = 1;
});
D2RMM.writeTsv(MagicSuffixFilename, magicSuffixs);

///增加关卡boss掉落，增加高级别装备掉落

const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

const DIFFICULTY_AFFIXES = ['', ' (N)', ' (H)'];
const DIFFICULTY_QUEST_AFFIXES = ['q', 'q (N)', 'q (H)'];

const BOSS_NAMES = ['Andariel', 'Duriel', 'Mephisto', 'Diablo', 'Baal', 'Radament', 'Summoner', 'Council', 'Haphesto', 'Nihlathak', 'Blood Raven', 'Izual', 'Cow King', 'Countess'];

treasureclassex.rows.forEach((row) => {
  const treasureClass = row['Treasure Class'];

  // 高级别装备掉落概率
  const prob9 = 'Prob9';
  const unique = 'Unique';
  const set = 'Set';

  if (row[prob9] > 0) {
    row[prob9] = Math.floor(350 * row[prob9] / 1800);
  }

  if (row[unique] >= 512 && row[unique] < 800) {
    row[unique] = 750;
  }
  if (row[unique] >= 800 && row[unique] < 900) {
    row[unique] = 850;
  }
  if (row[set] >= 512 && row[set] < 800) {
    row[set] = 750;
  }
  if (row[set] >= 800 && row[set] < 900) {
    row[set] = 800;
  }

  // 难度与关卡Boss掉落调整
  BOSS_NAMES.forEach((bossName) => {
    DIFFICULTY_AFFIXES.forEach((difficultyAffix) => {
      const bossCell = `${bossName}${difficultyAffix}`;
      if (treasureClass === bossCell) {
        row['Unique'] = 996;
        row['Set'] = 996
        row['Rare'] = 1012;
        row['Magic'] = 1024;
      }
    })
  });

  // 增加任務掉落
  BOSS_NAMES.forEach((bossName) => {
    DIFFICULTY_QUEST_AFFIXES.forEach((difficultyQuestAffix) => {

      const bossQuestCell = `${bossName}${difficultyQuestAffix}`;

      if (treasureClass === bossQuestCell) {
        if (row['Prob2'] > 0)
          row['Prob2'] = Math.floor(row['Prob2'] * 3);
      }
    })
  });
});
D2RMM.writeTsv(treasureclassexFilename, treasureclassex);


/////////提高魔法物品的染色率/////////////////////////////

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



