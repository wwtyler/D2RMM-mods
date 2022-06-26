/////////提高魔法物品的染色率/////////////////////////////
const equipmentChance = 3;
const equipmentMin = 3;
const itemratioFilename = 'global\\excel\\itemratio.txt';
const itemratio = D2RMM.readTsv(itemratioFilename);
itemratio.rows.forEach((row) => {

  row.Unique = Math.floor(row.Unique / equipmentChance);
  row.UniqueMin = Math.floor(row.UniqueMin / equipmentMin);

  row.Set = Math.floor(row.Set / equipmentChance);
  row.SetMin = Math.floor(row.SetMin / equipmentMin);

  row.Rare = Math.floor(row.Rare / equipmentChance);
  row.RareMin = Math.floor(row.RareMin / equipmentMin);

  row.Magic = Math.floor(row.Magic / equipmentChance);
  row.MagicMin = Math.floor(row.MagicMin / equipmentMin);

  row.HiQuality = Math.max(
    Math.min(4, row.HiQuality),
    Math.floor(row.HiQuality / equipmentChance)
  );
});
D2RMM.writeTsv(itemratioFilename, itemratio);



