
const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);


const NPC_NAMES = ['Charsi', 'Gheed', 'Akara', 'Lysander', 'Drognan', 'Elzix', 'Fara', 'Ormus', 'Halbu', 'Jamella', 'Malah', 'Anya'];

misc.rows.forEach((row) => {
  //rarity < 10 相当于 r01~r12
  // zod = 30
  if (row.type === "rune") {
    row.spawnable = 1;
  }
  if (row.type === "rune" && row.rarity < 10 || row.code === "r18" || row.code === "r15") {
    row.PermStoreItem = 1;

    // 如果rarity<3,会导致魔盒公式问题。因为runx的rarity=3。
    // IF RANDOM(0, ([“Rarity”] - [Current Act Level])) > 0, THEN spawn stats
    // if (row.rarity <= 3) row.rarity = 3;
    NPC_NAMES.forEach((npc) => {
      row[`${npc}min`] = 2;
      row[`${npc}max`] = 4;
      row[`${npc}MagicMin`] = 2;
      row[`${npc}MagicMax`] = 4;
    });
  }

  if (
    row.code === "jew"
    || row.code === "cm1" || row.code === "cm2" || row.code === "cm3"
    // || row.code === "rvs" || row.code === "rvl" 
  ) {
    row.PermStoreItem = 1;
    row.spawnable = 1;
    NPC_NAMES.forEach((npc) => {
      row[`${npc}min`] = 2;
      row[`${npc}max`] = 4;
      row[`${npc}MagicMin`] = 2;
      row[`${npc}MagicMax`] = 4;
      row[`${npc}MagicLvl`] = 1;

    });
  }
});

D2RMM.writeTsv(miscFilename, misc);
