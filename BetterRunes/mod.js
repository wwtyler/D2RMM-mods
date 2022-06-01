const runesFilename = 'global\\excel\\runes.txt';
const runes = D2RMM.readTsv(runesFilename);



runes.rows.forEach((runeWord) => {
  if (runeWord.Name != null) {
    if (runeWord.Name === "Runeword60") {//infinity
      // BerMalBerIst	r30	r23	r30	r24			
      // dmg%		255	325	move3		35	35	vit/lvl	4			aura	Conviction	12	12	kill-skill	Chain Lightning	50	20	pierce-ltng		45	55	charged	Cyclone Armor	30	21	0
      runeWord.T1Min4 = 16; runeWord.T1Max4 = 16;
    }
    if (runeWord.Name === "Runeword94") {//Obsession
      // Runeword94	Obsession	1		D2R Ladder 1	staf								
      // ZodIstLemLumIoNef	r33	r24	r20	r17	r16	r04	
      // allskills		4	4	gethit-skill	Weaken	24	10	cast3		65	65	balance3		60	60	res-all		60	70	hp%		15	25	regen-mana		15	30	0
      runeWord.T1Code1 = 'allskills'; runeWord.T1Min1 = 6; runeWord.T1Max1 = 6;
      runeWord.T1Code2 = 'aura'; runeWord.T1Param2 = 'Conviction'; runeWord.T1Min2 = 15; runeWord.T1Max2 = 15;
      runeWord.T1Code3 = 'cast3'; runeWord.T1Min3 = 65; runeWord.T1Max3 = 75;
      runeWord.T1Code4 = 'balance3'; runeWord.T1Min4 = 60; runeWord.T1Max4 = 60;
      runeWord.T1Code5 = 'res-all'; runeWord.T1Min5 = 60; runeWord.T1Max5 = 75;
      runeWord.T1Code6 = 'hp'; runeWord.T1Min6 = 200; runeWord.T1Max6 = 250;
      runeWord.T1Code7 = 'skill'; runeWord.T1Param7 = 37; runeWord.T1Min7 = 15; runeWord.T1Max7 = 15;
    }
    if (runeWord.Name === "Runeword41") {//Fortitude
      // Runeword41	Fortitude	1		Previously Ladder Only	weap	tors								
      // ElSolDolLo	r01	r12	r14	r28			
      // ac%		200	200	dmg%		300	300	cast3		25	25	gethit-skill	Chilling Armor	20	15	dmg-to-mana		12	12	hp/lvl		8	12	res-all		25	30
      runeWord.T1Code1 = 'ac%'; runeWord.T1Min1 = 200; runeWord.T1Max1 = 200;
      runeWord.T1Code2 = 'dmg%'; runeWord.T1Min2 = 300; runeWord.T1Max2 = 300;
      runeWord.T1Code3 = 'cast3'; runeWord.T1Min3 = 25; runeWord.T1Max3 = 25;
      runeWord.T1Code4 = 'gethit-skill'; runeWord.T1Min4 = 20; runeWord.T1Max4 = 20;
      runeWord.T1Code5 = 'dmg-to-mana'; runeWord.T1Min5 = 12; runeWord.T1Max5 = 12;
      runeWord.T1Code6 = 'hp/lvl'; runeWord.T1Min6 = 8; runeWord.T1Max6 = 12;
      runeWord.T1Code7 = 'res-all'; runeWord.T1Min7 = 25; runeWord.T1Max7 = 30;
    }


  }

});
D2RMM.writeTsv(runesFilename, runes);

