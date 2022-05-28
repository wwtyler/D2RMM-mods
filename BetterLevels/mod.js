const levelsFilename = 'global\\excel\\levels.txt';
const levels = D2RMM.readTsv(levelsFilename);

//怪物密度
levels.rows.forEach((row) => {
  // multiply number of packs spawned
  if (row.MonDen !== '') {
    row.MonDen = Math.floor(row.MonDen * config.monDensityMultiplier);
    row['MonDen(N)'] = Math.floor(row['MonDen(N)'] * config.monDensityMultiplier);
    row['MonDen(H)'] = Math.floor(row['MonDen(H)'] * config.monDensityMultiplier);
  }

  // multiply minimum number of unique/champion monsters
  if (row.MonUMin !== '') {
    row.MonUMin = Math.floor(row.MonUMin * config.monDensityMultiplier);
    row['MonUMin(N)'] = Math.floor(row['MonUMin(N)'] * config.monDensityMultiplier + 1);
    row['MonUMin(H)'] = Math.floor(row['MonUMin(H)'] * config.monDensityMultiplier + 1);
  }

  // multiply maximum number of unique/champion monsters
  if (row.MonUMax !== '') {
    row.MonUMax = Math.floor(row.MonUMax * config.monDensityMultiplier) + 1;
    row['MonUMax(N)'] = Math.floor(row['MonUMax(N)'] * config.monDensityMultiplier) + 1;
    row['MonUMax(H)'] = Math.floor(row['MonUMax(H)'] * config.monDensityMultiplier) + 1;
  }
});

//   ShrineDurations X 3
const shrinesFilename = 'global\\excel\\shrines.txt';
const shrines = D2RMM.readTsv(shrinesFilename);

shrines.rows.forEach((row) => {
  if (row['Duration in frames'] > 0 && row['*Shrine Type'] === 'Booster') {
    row['Duration in frames'] = Math.floor(row['Duration in frames'] * 3);
  }
});
D2RMM.writeTsv(shrinesFilename, shrines);

const NIHLATHAK_TEMPLE_NAMES = [
  ["Act 5 - Temple Entrance", "Nihlathaks Temple", "尼拉塞克的神殿[32/63/85]"],
  ["Act 5 - Temple 1", "Halls of Anguish", "怨慟之廳[33/63/85]"],
  ["Act 5 - Temple 2", "Halls of Pain", "苦痛之廳[34/64/85]"],
  ["Act 5 - Temple Boss", "Halls of Vaught", "沃特之廳[36/64/85]"]
];

levels.rows.forEach((row) => {
  NIHLATHAK_TEMPLE_NAMES.forEach(([nName, levelKey, levelLabel]) => {
    if (row.Name == nName) {
      row['MonLvlEx(H)'] = 85;
    }
  });
});

D2RMM.writeTsv(levelsFilename, levels);

const levelNamesFilename = 'local\\lng\\strings\\levels.json';
const levelNames = D2RMM.readJson(levelNamesFilename);

levelNames.forEach((levelName) => {
  NIHLATHAK_TEMPLE_NAMES.forEach(([nName, levelKey, levelLabel]) => {
    const itemKey = levelName.Key;
    if (itemKey == levelKey) {
      levelName.zhTW = levelLabel;
    }
  });
});

D2RMM.writeJson(levelNamesFilename, levelNames);
