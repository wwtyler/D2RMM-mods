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
    if (runeWord.Name === "Runeword169") {//Youth
      // Runeword169	Youth	1		109	shld									ShaelEth	r13	r05					
      // block2		20	20	block		20	20	res-all		25	25	nofreeze		1	1	gold%		50	50	mag%		25	25
      runeWord['*Rune Name'] = 'Youth';
      runeWord.complete = 1;
      runeWord['*Patch Release'] = 'wwtyler'
      runeWord.itype1 = 'shld';
      runeWord['*RunesUsed'] = 'z01z99';
      runeWord.Rune1 = 'z01';
      runeWord.Rune2 = 'z99';
      runeWord.T1Code1 = 'block2'; runeWord.T1Min1 = 20; runeWord.T1Max1 = 20;
      runeWord.T1Code2 = 'res-all'; runeWord.T1Min2 = 77; runeWord.T1Max2 = 77;
      runeWord.T1Code3 = 'nofreeze'; runeWord.T1Min3 = 1; runeWord.T1Max3 = 1;
      runeWord.T1Code4 = 'gold%'; runeWord.T1Min4 = 50; runeWord.T1Max4 = 50;
      runeWord.T1Code5 = 'mag%'; runeWord.T1Min5 = 77; runeWord.T1Max5 = 77;
    }
    // Tal Rasha's Wrappings	Tal Rasha's Wrappings	1		tors										tlx1	tlx2	tlx3	tlx4					
    // sor		2	2	res-all		30	30	hp		150	150	mag%		65	65	ac		400	400	cast2		20	30	state	fullsetgeneric	1	1	0
    // M'avina's Battle Hymn	M'avina's Battle Hymn	1		miss										mvn1	mvn2	mvn3	mvn4	mvn5		
    // aura	Might	17	17	swing3		40	40	dmg%		188	188	extra-cold-fire-dex-str		20	20	mag%		100	100	res-all		50	50	state	fullsetgeneric	1	1	0
    // Trang-Oul's Avatar	Trang-Oul's Avatar	1		tors										tga1	tga2	tga3	tga4			
    //nec		2	2	move3		40	40	res-all		40	40	state	fullsetgeneric	1	1	mana		100	100	hp		66	66	pierce-pois		25	25	0


  }

});
D2RMM.writeTsv(runesFilename, runes);

