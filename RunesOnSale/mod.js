
const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);

const NPC_NAMES = ['Akara', 'Fara', 'Lysander', 'Ormus', 'Halbu', 'Malah', 'Anya','Jamella'];

misc.rows.forEach((row) => {
  //rarity < 10 相当于 r01~r12
  if (row.type === "rune" && row.rarity < 10) {
    row.PermStoreItem = 1;
    row.spawnable = 1
    NPC_NAMES.forEach((npc) => {
      row[`${npc}min`] = 2;
      row[`${npc}max`] = 4;
      row[`${npc}MagicMin`] = 2;
      row[`${npc}MagicMax`] = 4;
    });
  }
});

D2RMM.writeTsv(miscFilename, misc);
