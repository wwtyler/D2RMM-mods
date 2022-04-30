const difficultylevelsFilename = 'global\\excel\\difficultylevels.txt';
const difficultylevels = D2RMM.readTsv(difficultylevelsFilename);
difficultylevels.rows.forEach((row) => {
  if (row.ResistPenalty !== '' && config.ResistPenalty) {
    row.ResistPenalty = Math.floor(row.ResistPenalty * config.ResistPenaltyMultiplier / 100);

  }

  if (row.DeathExpPenalty !== '' && config.DeathExpPenalty) {
    row.DeathExpPenalty = Math.floor(row.DeathExpPenalty * config.DeathExpMultiplier / 100);

  }

});
D2RMM.writeTsv(difficultylevelsFilename, difficultylevels);

