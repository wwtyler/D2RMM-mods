
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



