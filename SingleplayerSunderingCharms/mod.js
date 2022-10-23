const uniqueitemsFilename = 'global\\excel\\uniqueitems.txt';
const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);

uniqueitems.rows.forEach((row) => {
  var index = row.index;

  if (index === 'Cold Rupture' && config.coldrupture) {
    row.enabled = '1';
    row.ladder = '';
  }

  if (index === 'Flame Rift' && config.flamerift) {
    row.enabled = '1';
    row.ladder = '';
  }

  if (index === 'Crack of the Heavens' && config.crackoftheheavens) {
    row.enabled = '1';
    row.ladder = '';
  }

  if (index === 'Rotting Fissure' && config.rottingfissure) {
    row.enabled = '1';
    row.ladder = '';
  }

  if (index === 'Bone Break' && config.bonebreak) {
    row.enabled = '1';
    row.ladder = '';
  }

  if (index === 'Black Cleft' && config.blackcleft) {
    row.enabled = '1';
    row.ladder = '';
  }
});
D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);
