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


const NIHLATHAK_TEMPLE_NAMES = ["Act 5 - Temple Entrance", "Act 5 - Temple 1", "Act 5 - Temple 2", "Act 5 - Temple Boss"];

levels.rows.forEach((row) => {
  // multiply number of packs spawned
  if (NIHLATHAK_TEMPLE_NAMES.includes(row.Name)) {
    row['MonLvlEx(H)'] = 85;
  }

});

D2RMM.writeTsv(levelsFilename, levels);
