/////////提高魔法物品的染色率/////////////////////////////
const equipmentChance = 3;
const equipmentMin = 3;
const itemratioFilename = 'global\\excel\\itemratio.txt';
const itemratio = D2RMM.readTsv(itemratioFilename);
itemratio.rows.forEach((row) => {

  row.Unique = Math.floor(row.Unique / 4);
  row.UniqueMin = Math.floor(row.UniqueMin / 4);

  row.Set = Math.floor(row.Set / 3);
  row.SetMin = Math.floor(row.SetMin / 3);

  row.Rare = Math.floor(row.Rare / 3);
  row.RareMin = Math.floor(row.RareMin / 3);

  row.Magic = Math.floor(row.Magic / 2);
  row.MagicMin = Math.floor(row.MagicMin / 2);

  // row.HiQuality = Math.max(
  //   Math.min(4, row.HiQuality),
  //   Math.floor(row.HiQuality / 2)
  // );
});
D2RMM.writeTsv(itemratioFilename, itemratio);



