const CLASS_NAMES = ['Amazon', 'Sorceress', 'Necromancer', 'Paladin', 'Barbarian', 'Druid', 'Assassin'];
const charstatsFilename = 'global\\excel\\charstats.txt';
const charstats = D2RMM.readTsv(charstatsFilename);

charstats.rows.forEach((row) => {

  if (row.class !== 'Expansion') {
    row.item6 = 'box';
    row.stamina = Math.floor(row.stamina * 3);
    row.item6count = 1;
  }

});
D2RMM.writeTsv(charstatsFilename, charstats);
