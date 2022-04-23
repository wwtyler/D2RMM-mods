const difficultylevelsFilename = 'global\\excel\\difficultylevels.txt';
const difficultylevels = D2RMM.readTsv(difficultylevelsFilename);
difficultylevels.rows.forEach((row) => {
  if (row.ResistPenalty !== '' && config.ResistPenalty ) {
    row.ResistPenalty = Math.floor(row.ResistPenalty * config.ResistPenaltyMultiplier/100);
  
  }

  if (row.DeathExpPenalty !== '' && config.DeathExpPenalty ) {
    row.DeathExpPenalty = Math.floor(row.DeathExpPenalty * config.DeathExpMultiplier/100);
   
  }

  row.GambleRare =  row.GambleRare * 3;
  row.GambleSet =  row.GambleSet * 5 ;
  row.GambleUnique = row.GambleUnique * 10
  row.GambleUltra= row.GambleUltra * 10;
  row.GambleUber =  row.GambleUber * 5;

});
D2RMM.writeTsv(difficultylevelsFilename, difficultylevels);