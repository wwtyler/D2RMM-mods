
const miscFilename = 'global\\excel\\misc.txt';
const misc = D2RMM.readTsv(miscFilename);
misc.rows.forEach((row) => {
  if (row.type === "rune") {
    row.PermStoreItem = 1;
    row.AkaraMin = 2;
    row.AkaraMax = 4;
    row.AkaraMagicMin = 2;
    row.AkaraMagicMax = 4;
    row.spawnable = 1
  }
});

D2RMM.writeTsv(miscFilename, misc);
