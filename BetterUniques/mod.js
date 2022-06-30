const uniqueItemsFilename = 'global\\excel\\UniqueItems.txt';
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNameaffixesFilename = 'local\\lng\\strings\\item-nameaffixes.json';
const itemNameaffixes = D2RMM.readJson(itemNameaffixesFilename);
const itemNames = D2RMM.readJson(itemNamesFilename);
const uniqueItems = D2RMM.readTsv(uniqueItemsFilename);

let gheedsFortune;
let rainbowFacet;
let hellfireTorch;
let itemNeedRemove;
// const BOOST_PROP_ARRAY = [
//   'light',
//   'ac', 'ac%', 'ac-miss', 'ac-hth',
//   'dmg', 'dmg%',
//   'hp', 'hp%',
//   'mana', 'mana%',
//   'str', 'enr', 'vit', 'dex',
//   'red-dmg', 'red-mag',
// ];

uniqueItems.rows.forEach((item) => {

  function multiply(i, m) {
    const parN = item[`par` + i];
    const minN = item[`min` + i];
    const maxN = item[`max` + i];
    item[`min` + i] = Math.floor(minN * m);
    item[`max` + i] = Math.floor(maxN * m);
  }
  function add(i, m) {
    const parN = item[`par` + i];
    const minN = item[`min` + i];
    const maxN = item[`max` + i];
    item[`min` + i] = Math.floor(minN) + m;
    item[`max` + i] = Math.floor(maxN) + m;
  }
  // 对所有的属性进行强化。
  for (let i = 1; i <= 12; i++) {
    const propN = item[`prop` + i];

    if (propN != null) {
      switch (propN) {
        case 'mana-kill', 'heal-kill':
          add(i, 3);
          break;
        case 'hp', 'mana':
          add(i, 15);
          break;
        case 'hp%', 'mana%':
          multiply(i, 1.5);
          break;
        case 'res-ltng', 'res-fire', 'res-cold', 'res-pois':
          add(i, 10);
          break;
        case 'res-all':
          add(i, 5);
          break;
        case 'str', 'enr', 'vit', 'dex':
          add(i, 5);
          break;
        case 'ac', 'ac%', 'ac-miss', 'ac-hth':
          multiply(i, 2);
          break;
        case 'att':
          multiply(i, 2);
          break;
        case 'dmg%':
          multiply(i, 1.5);
          break;
        default:
          break;
      }
    };
  }
  if (item.index != null) {
    if (item.index === "Gheed's Fortune") {
      gheedsFortune = item;
      item.prop1 = 'mag%'; item.min1 = 40; item.max1 = 80;
      item.prop2 = 'gold%'; item.min2 = 120; item.max2 = 200;
      item.prop3 = 'cheap'; item.min3 = 10; item.max3 = 20;
      item['cost add'] = 5001;
    }
    else if (item.index === "Ormus' Robes") {
      //ac		10	20	cast2		20	20	extra-fire		10	15	extra-cold		10	15	extra-ltng		10	15	regen-mana		10	15	skill-rand	3	36	60		
      item.prop1 = 'ac'; item.min1 = 20; item.max1 = 80;
      item.prop2 = 'cast2'; item.min2 = 20; item.max2 = 35;
      item.prop3 = 'extra-fire'; item.min3 = 10; item.max3 = 20;
      item.prop4 = 'extra-cold'; item.min4 = 10; item.max4 = 20;
      item.prop5 = 'extra-ltng'; item.min5 = 10; item.max5 = 20;
      item.prop6 = 'regen-mana'; item.min6 = 15; item.max6 = 20;
      item.prop7 = 'skill-rand'; item.min7 = 36; item.max7 = 60; item.par7 = 4;
      item.prop8 = 'allskills'; item.min8 = 1; item.max8 = 1;
    }
    else if (item.index === "Azurewrath" && item.code === 'crs') {
      //Azurewrath重名，不唯一。
      item.index = "Azurewrath1";
    }
    else if (item.index === "Azurewrath" && item.code === '7cr') {
      // Azurewrath	301	100	1		1	1	87	85	7cr	phase blade		5	5000	lgry			invcrs				
      // dmg-mag		250	500	dmg%		230	270	aura	Conviction	10	13	dmg-cold	250	250	500	swing2		30	30	all-stats		5	10	light		3	3	allskills		1	1
      item.prop1 = 'dmg-mag'; item.min1 = 300; item.max1 = 500;
      item.prop2 = 'dmg%'; item.min2 = 230; item.max2 = 270;
      item.prop3 = 'aura'; item.par3 = 'Conviction'; item.min3 = 10; item.max3 = 13;
      item.prop4 = 'dmg-cold'; item.par4 = 300; item.min4 = 300; item.max4 = 500;
      item.prop5 = 'swing2'; item.min5 = 35; item.max5 = 45;
      item.prop6 = 'all-stats'; item.min6 = 10; item.max6 = 15;
      item.prop8 = 'allskills'; item.min8 = 1; item.max8 = 2;
    }
    else if (item.index === "Mang Song's Lesson") {
      item['cost add'] = 5001;
      // Mang Song's Lesson	322	100	1		1	1	 86	82	6ws	archon staff		5	5000	dgld	dgld		inv8wsu				
      // allskills		5	5	pierce-fire		7	15	pierce-ltng		7	15	pierce-cold		7	15	regen-mana		10	10	cast2		30	30
      item.min1 = 5; item.max1 = 6;
      item.min2 = 15; item.max2 = 25;
      item.min3 = 15; item.max3 = 25;
      item.min4 = 15; item.max4 = 25;
      item.prop5 = 'regen-mana'; item.min5 = 20; item.max5 = 30;
      item.prop6 = 'cast2'; item.min6 = 35; item.max6 = 55;
    }
    else if (item.index === "Tyrael's Might") {
      // Tyrael's Might	311	100	1		1	1	87	84	uar	sacred armor		5	5000	dblu	dblu		invaaru				
      // ease		-100	-100	indestruct		1	1	ac%		120	150	rip		1	1	dmg-demon		50	100	nofreeze		1	1	move2		20	20	res-all		20	30	str		20	30
      item.prop1 = 'ease'; item.min1 = -100; item.max1 = -100;
      item.prop2 = 'indestruct'; item.min2 = 1; item.max2 = 1;
      item.prop3 = 'ac%'; item.min3 = 200; item.max3 = 300;
      item.prop4 = 'rip'; item.min4 = 1; item.max4 = 1;
      item.prop5 = 'dmg-demon'; item.min5 = 150; item.max5 = 300;
      item.prop6 = 'aura'; item.par6 = 'Fanaticism'; item.min6 = 18; item.max6 = 18;
      item.prop7 = 'move2'; item.min7 = 40; item.max7 = 40;
      item.prop8 = 'res-all'; item.min8 = 45; item.max8 = 45;
      item.prop9 = 'all-stats'; item.min9 = 20; item.max9 = 30;
      item.prop10 = 'addxp'; item.min10 = 80; item.max10 = 120;
    }
    else if (item.index === "Tomb Reaver") {
      // Tomb Reaver	298	100	1		1	1	86	84	7pa	cryptic axe		5	5000	lyel	lyel						
      //swing2		60	60	light		4	4	dmg%		200	280	dmg-undead		150	230	mag%		50	80	res-all		30	50	att-undead		250	350	reanimate	1	10	10	heal-kill		10	14	sock		1	3	
      item.prop1 = 'swing2'; item.min1 = 60; item.max1 = 60;
      item.prop2 = 'light'; item.min2 = 8; item.max2 = 8;
      item.prop3 = 'dmg%'; item.min3 = 200; item.max3 = 280;
      item.prop4 = 'dmg'; item.min4 = 150; item.max4 = 230;
      item.prop5 = 'mag%'; item.min5 = 50; item.max5 = 80;
      item.prop6 = 'res-all'; item.min6 = 35; item.max6 = 50;
      item.prop7 = 'aura'; item.par7 = 'Concentration'; item.min7 = 12; item.max7 = 16;
      item.prop8 = 'reanimate'; item.min8 = 10; item.max8 = 14;
      item.prop9 = 'heal-kill'; item.min9 = 10; item.max9 = 14;
      item.prop10 = 'sock'; item.min10 = 2; item.max10 = 3;
    }
    else if (item.index === "Arachnid Mesh") {
      // Arachnid Mesh	373	100	1		1	1	87	80	ulc	spiderweb sash		5	5000	blac	blac						
      // ac%		90	120	cast2		20	20	charged	Venom	11	3	allskills		1	1	slow		10	10	mana%		5	5	
      item.prop1 = 'ac%'; item.min1 = 90; item.max1 = 120;
      item.prop2 = 'cast2'; item.min2 = 20; item.max2 = 20;
      item.prop3 = 'charged'; item.par3 = 'Venom'; item.min3 = 11; item.max3 = 8;
      item.prop4 = 'allskills'; item.min4 = 1; item.max4 = 1;
      item.prop5 = 'slow'; item.min5 = 10; item.max5 = 10;
      item.prop6 = 'mana%'; item.min6 = 5; item.max6 = 10;
    }
    else if (item.index === "Griffon's Eye") {
      //Griffon's Eye	336	100	1		1		84	76	ci3	diadem		5	5000
      // ac		100	200	cast2		25	25	allskills		1	1	extra-ltng		10	15	pierce-ltng		15	20
      item.prop1 = 'ac'; item.min1 = 200; item.max1 = 300;
      item.prop2 = 'cast2'; item.min2 = 25; item.max2 = 35;
      item.prop3 = 'allskills'; item.min3 = 1; item.max3 = 1;
      item.prop4 = 'extra-ltng'; item.min4 = 20; item.max4 = 30;
      item.prop5 = 'pierce-ltng'; item.min5 = 20; item.max5 = 30;
    }
    else if (item.index === 'Alma Negra') {
      // Alma Negra	329	100	1		1		85	77	pac	sacred rondache		5	5000	blac	blac				
      // ac%		180	210	block2		30	30	pal		1	2	block		20	20	red-mag		5	9	att%		40	75	dmg%		40	75
      item.prop1 = 'ac%'; item.min1 = 180; item.max1 = 210;
      item.prop2 = 'block2'; item.min2 = 30; item.max2 = 30;
      item.prop3 = 'pal'; item.min3 = 1; item.max3 = 2;
      item.prop4 = 'block'; item.min4 = 30; item.max4 = 30;
      item.prop5 = 'red-mag'; item.min5 = 5; item.max5 = 9;
      item.prop6 = 'att%'; item.min6 = 40; item.max6 = 75;
      item.prop7 = 'dmg'; item.min7 = 40; item.max7 = 75;
    }
    else if (item.index === "Deaths's Web") {
      //Deaths's Web	299	100	1		1		74	66	7gw	unearthed wand		5	5000
      //allskills		2	2	pierce-pois		40	50	heal-kill		7	12	mana-kill		7	12	skilltab	7	1	2
      item.prop1 = 'allskills'; item.min1 = 2; item.max1 = 2;
      item.prop2 = 'pierce-pois'; item.min2 = 40; item.max2 = 65;
      item.prop3 = 'heal-kill'; item.min3 = 10; item.max3 = 15;
      item.prop4 = 'mana-kill'; item.min4 = 10; item.max4 = 15;
      item.prop5 = 'skilltab'; item.par5 = 7; item.min5 = 2; item.max5 = 3;
    }
    else if (item.index === "The Stone of Jordan") {
      //The Stone of Jordan	122	0	1		1	1	39	29	rin	Ring		5	5000	whit						
      //mana		20	20	mana%		25	25	ltng-min		1	1	allskills		1	1	ltng-max		12	12
      item.prop1 = 'mana'; item.min1 = 40; item.max1 = 80;
      item.prop2 = 'mana%'; item.min2 = 25; item.max2 = 30;
      item.prop3 = 'ltng-min'; item.min3 = 1; item.max3 = 1;
      item.prop4 = 'allskills'; item.min4 = 1; item.max4 = 1;
      item.prop5 = 'ltng-max'; item.min5 = 200; item.max5 = 200;
    }
    else if (item.index === "Bul Katho's Wedding Band") {
      // Bul Katho's Wedding Band	268	100	1		1	1	66	58	rin	Ring		5	5000	dpur	dpur						
      // hp/lvl	4			allskills		1	1	lifesteal		3	5	stam		50	50	
      item.prop1 = 'hp/lvl'; item.min1 = 6; item.max1 = 6;
      item.prop2 = 'allskills'; item.min2 = 1; item.max2 = 1;
      item.prop3 = 'lifesteal'; item.min3 = 4; item.max3 = 8;
      item.prop4 = 'stam'; item.min4 = 60; item.max4 = 60;
      item.prop2 = 'hp%'; item.min2 = 15; item.max2 = 25;
    }
    else if (item.index === "Mara's Kaleidoscope") {
      // Mara's Kaleidoscope	272	100	1		2	1	80	67	amu	Amulet		5	5000	oran	oran						
      // allskills		2	2	res-all		20	30	str		5	5	dex		5	5	vit		5	5	enr		5	5
      item.prop1 = 'allskills'; item.min1 = 2; item.max1 = 2;
      item.prop2 = 'res-all'; item.min2 = 25; item.max2 = 35;
      item.prop3 = 'all-stats'; item.min3 = 10; item.max3 = 15;
    }
    else if (item.index === "Crescent Moon") {
      // Crescent Moon	271	100	1		2	1	58	50	amu	Amulet		5	5000	lblu	lblu						
      // manasteal		11	15	red-mag		10	10	dmg-to-mana		10	10	light		-2	-2	mana		45	45	lifesteal		3	6	
      item.prop1 = 'manasteal'; item.min1 = 12; item.max1 = 18;
      item.prop2 = 'red-mag'; item.min2 = 12; item.max2 = 15;
      item.prop3 = 'dmg-to-mana'; item.min3 = 15; item.max3 = 20;
      item.prop4 = 'light'; item.min4 = -3; item.max4 = -3;
      item.prop5 = 'mana'; item.min5 = 60; item.max5 = 60;
      item.prop6 = 'lifesteal'; item.min6 = 6; item.max6 = 9;
    }
    else if (item.index === "The Rising Sun") {
      // The Rising Sun	270	100	1		2	1	73	65	amu	Amulet		5	5000	lgld	lgld						
      // abs-fire/lvl	6			light		4	4	gethit-skill	56	2	0	dmg-fire		24	48	fireskill		2	2	regen		10	10
      item.prop1 = 'abs-fire/lvl'; item.min1 = 8; item.max1 = 8;
      item.prop2 = 'light'; item.min2 = 6; item.max2 = 6;
      item.prop3 = 'gethit-skill'; item.par3 = 56, item.min3 = 2; item.max3 = 0;
      item.prop4 = 'dmg-fire'; item.min4 = 60; item.max4 = 200;
      item.prop5 = 'fireskill'; item.min5 = 2; item.max5 = 3;
      item.prop6 = 'regen'; item.min6 = 20; item.max6 = 40;
    }
    else if (item.index === "Seraph's Hymn") {
      // Seraph's Hymn	302	100	1		2	1	73	65	amu	amulet		5	5000	bwht	bwht		invamu2				
      // allskills		2	2	skilltab	11	1	2	dmg-demon		25	50	dmg-undead		25	50	att-demon		150	250	att-undead		150	250	light		2	2	
      item.prop1 = 'allskills'; item.min1 = 2; item.max1 = 2;
      item.prop2 = 'skilltab'; item.min2 = 11; item.max2 = 3;
      item.prop3 = 'dmg-demon'; item.min3 = 100; item.max3 = 150;
      item.prop4 = 'dmg-undead'; item.min4 = 100; item.max4 = 150;
      item.prop5 = 'att-demon'; item.min5 = 250; item.max5 = 300;
      item.prop6 = 'att-undead'; item.min6 = 250; item.max6 = 300;
      item.prop7 = 'light'; item.min7 = 5; item.max7 = 5;
    }
    else if (item.index === "The Cat's Eye") {
      // The Cat's Eye	269	100	1		2	1	58	50	amu	Amulet		5	5000	oran	oran						
      // move2		30	30	swing2		20	20	ac		100	100	ac-miss		100	100	dex		25	25
      item.prop1 = 'move2'; item.min1 = 30; item.max1 = 45;
      item.prop2 = 'swing2'; item.min2 = 30; item.max2 = 40;
      item.prop3 = 'ac'; item.min3 = 200; item.max3 = 200;
      item.prop4 = 'ac-miss'; item.min4 = 200; item.max4 = 200;
      item.prop5 = 'dex'; item.min5 = 25; item.max5 = 40;
    }
    else if (item.index === "Nagelring") {
      // Nagelring	120	0	1		2	1	10	7	rin	Ring		5	5000	dpur							
      // red-mag		3	3	thorns		3	3	att		50	75	mag%		15	30
      item.prop1 = 'red-mag'; item.min1 = 3; item.max1 = 7;
      item.prop2 = 'thorns'; item.min2 = 3; item.max2 = 3;
      item.prop3 = 'att'; item.min3 = 75; item.max3 = 75;
      item.prop4 = 'mag%'; item.min4 = 30; item.max4 = 45;
    }
    // Manald Heal	121	0	1		2	1	20	15	rin	Ring		5	5000	oran							
    // manasteal		4	7	regen		5	8	hp		20	20	regen-mana		20	20									
    else if (item.index === "Manald Heal") {
      item.prop1 = 'manasteal'; item.min1 = 6; item.max1 = 8;
      item.prop2 = 'mana'; item.min2 = 30; item.max2 = 40;
      item.prop3 = 'hp'; item.min3 = 30; item.max3 = 40;
      item.prop4 = 'regen-mana'; item.min4 = 30; item.max4 = 40;
    }
    else if (item.index === "Dwarf Star") {
      // Dwarf Star	274	100	1		2	1	53	45	rin	Ring		5	5000	dgry	dgry						
      // gold%		100	100	stam		40	40	regen-stam		15	15	hp		40	40	red-mag		12	15	abs-fire%		15	15
      item.prop1 = 'gold%'; item.min1 = 150; item.max1 = 150;
      item.prop2 = 'abs-fire/lvl'; item.min2 = 6; item.max2 = 6;
      item.prop3 = 'cast2'; item.min3 = 10; item.max3 = 10;
      item.prop4 = 'hp'; item.min4 = 40; item.max4 = 60;
      item.prop5 = 'red-mag'; item.min5 = 12; item.max5 = 15;
      item.prop6 = 'abs-fire%'; item.min6 = 15; item.max6 = 15;
    }
    // Raven Frost	275	100	1		2	1	53	45	rin	Ring		5	5000	cblu	cblu						
    // nofreeze		1	1	dmg-cold	100	15	45	abs-cold%		20	20	mana		40	40	dex		15	20	att		150	250	
    else if (item.index === "Raven Frost") {
      item.prop1 = 'nofreeze'; item.min1 = 1; item.max1 = 1;
      item.prop2 = 'abs-cold/lvl'; item.min2 = 6; item.max2 = 6;
      item.prop3 = 'abs-cold%'; item.min3 = 20; item.max3 = 20;
      item.prop4 = 'mana'; item.min4 = 40; item.max4 = 60;
      item.prop5 = 'dex'; item.min5 = 15; item.max5 = 20;
      item.prop6 = 'att'; item.min6 = 250; item.max6 = 300;
    }
    // Wisp	319	100	1		1	1	84	76	rin	ring		5	5000	bwht	bwht						
    // abs-ltng%		10	20	hit-skill	Lightning	10	16	mag%		10	20	charged	Oak Sage	15	2	charged	Heart of Wolverine	13	5	charged	Spirit of Barbs	11	7	
    else if (item.index === "Wisp") {
      item.prop1 = 'abs-ltng%'; item.min1 = 10; item.max1 = 20;
      item.prop2 = 'hit-skill'; item.min2 = 10; item.max2 = 16;
      item.prop3 = 'mag%'; item.min3 = 10; item.max3 = 20;
      item.prop4 = 'abs-ltng/lvl'; item.min4 = 6; item.max4 = 6;
      item.prop5 = 'str'; item.min5 = 20; item.max5 = 25;
      item.prop6 = 'charged'; item.min6 = 11; item.max6 = 7;
    }
    // Nature's Peace	300	100	1		2	1	77	69	rin	ring		5	5000	dgrn	dgrn						
    // noheal		1	1	rip		1	1	red-dmg		7	11	res-pois		20	30	charged	Oak Sage	27	5					
    else if (item.index === "Nature's Peace") {
      item.prop1 = 'noheal'; item.min1 = 1; item.max1 = 1;
      item.prop2 = 'rip'; item.min2 = 1; item.max2 = 1;
      item.prop3 = 'red-dmg'; item.min3 = 7; item.max3 = 11;
      item.prop4 = 'res-pois'; item.min4 = 20; item.max4 = 30;
      item.prop5 = 'charged'; item.min5 = 27; item.max5 = 5;
    }
    // Carrion Wind	378	100	1		2	1	68	60	rin	ring		3	5000								ac-miss		100	160	lifesteal		6	9	res-pois		55	55	gethit-skill	Poison Nova	10	10	charged	Plague Poppy	15	21	hit-skill	Twister	8	13	dmg-to-mana		10	10	
    // Atma's Scarab	273	100	1		2	1	60	60	amu	Amulet		5	5000	cgrn	cgrn						dmg-pois	100	102	102	res-pois		75	75	light		3	3	thorns		5	5	hit-skill	66	5	2	att%		20	20	
    // Amulet of the Viper	123	0	1		1	1	0	0	vip	Amulet		5	5000	lgry							mana		10	10	res-pois		25	25	hp		10	10			0	0			0	0			0	0			0	0	
    // Highlord's Wrath	276	100	1		2	1	73	65	amu	Amulet		5	5000	bwht	bwht						res-ltng		35	35	dmg-ltng		1	30	swing2		20	20	allskills		1	1	deadly/lvl	3			light-thorns		15	15	
    // Saracen's Chance	277	100	1		2	1	55	47	amu	Amulet		5	5000	dpur	dpur						res-all		15	25	gethit-skill	76	10	2	str		12	12	dex		12	12	enr		12	12	vit		12	12	
    // Metalgrid	375	100	1		2	1	85	81	amu	amulet		5	5000								ac		300	350	res-all		25	35	att		400	450	charged	IronGolem	11	22	charged	Iron Maiden	20	12					
    // Nokozan Relic	117	0	1		2	1	14	10	amu	Amulet		5	5000	lgld							dmg-fire		3	6	res-fire-max		10	10	res-fire		50	50	light		3	3	balance2		20	20					
    // The Eye of Etlich	118	0	1		2	1	20	15	amu	Amulet		5	5000	dgld							ac-miss		10	40	light		1	5	allskills		1	1	lifesteal		3	7	cold-min		1	2	cold-max		3	5	cold-len		50	250	
    // The Mahim-Oak Curio	119	0	1		2	1	34	25	amu	Amulet		5	5000	lpur							dex		10	10	str		10	10	enr		10	10	vit		10	10	ac		10	10	att%		10	10	res-all		10	10	ac%		10	10

    else if (item.index === "Rainbow Facet" && item.code === 'jew') {
      // Rainbow Facet		pierce-ltng		3	5	extra-ltng		3	5	death-skill	Chain Lightning	100	47
      if (item.par4 === "Chain Lightning") {
        rainbowFacet = item;
      }
      item.min2 = 6; item.max2 = 10;
      item.min3 = 6; item.max3 = 10;
    }
    else if (item.index === "Hellfire Torch") {
      hellfireTorch = item;
    }
  }


});
// Rainbow Facet	393	100	1		1	1	85	49	jew	jewel		3	5000								dmg-cold	3	24	38	pierce-cold		3	5	extra-cold		3	5	death-skill	Blizzard	100	37									
// Rainbow Facet	394	100	1		1	1	85	49	jew	jewel		3	5000								dmg-fire		17	45	pierce-fire		3	5	extra-fire		3	5	death-skill	Meteor	100	31									
// Rainbow Facet	395	100	1		1	1	85	49	jew	jewel		3	5000								dmg-pois	50	187	187	pierce-pois		3	5	extra-pois		3	5	death-skill	Poison Nova	100	51									
// Rainbow Facet	396	100	1		1	1	85	49	jew	jewel		3	5000								dmg-ltng		1	74	pierce-ltng		3	5	extra-ltng		3	5	levelup-skill	Nova	100	41									
// Rainbow Facet	397	100	1		1	1	85	49	jew	jewel		3	5000								dmg-cold	3	24	38	pierce-cold		3	5	extra-cold		3	5	levelup-skill	Frost Nova	100	43									
// Rainbow Facet	398	100	1		1	1	85	49	jew	jewel		3	5000								dmg-fire		17	45	pierce-fire		3	5	extra-fire		3	5	levelup-skill	Blaze	100	29									
// Rainbow Facet	399	100	1		1	1	85	49	jew	jewel		3	5000								dmg-pois	50	187	187	pierce-pois		3	5	extra-pois		3	5	levelup-skill	Venom	100	23		

//Annihilus	381	100	1		1	1	110	70	cm1	charm	1	3	5000			flpmss	invmss	item_gem	12	item_gem	allskills		1	1	all-stats		10	20	res-all		10	20	addxp		5	10
// '*ID': Math.max(...uniqueItems.rows.map((row) => row['*ID'])) + 1,
// '*ID': (itemID = itemID + 1),
let itemID = Math.max(...uniqueItems.rows.map((row) => row['*ID']));
uniqueItems.rows.push({
  ...hellfireTorch, index: "Hellfire's Bless", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50, '*eol\r': '0',
  prop1: 'addxp', min1: 5, max1: 10, prop2: 'cheap', min2: 5, max2: 10, prop3: 'move2', min3: 10, max3: 20,
  prop4: 'light', min4: 5, max4: 5, prop5: 'mag%', min5: 5, max5: 15, prop6: 'gold%', min6: 25, max6: 50,
});
uniqueItems.rows.push({
  ...gheedsFortune, index: "Gheed's Lucky", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50, '*eol\r': '0',
  prop1: 'addxp', min1: 5, max1: 10, prop2: 'cheap', min2: 5, max2: 10, prop3: 'move2', min3: 10, max3: 20,
});
uniqueItems.rows.push({
  ...gheedsFortune, index: "Gheed's Lucky", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50, '*eol\r': '0',
  prop1: 'addxp', min1: 5, max1: 10, prop2: 'res-all', min2: 5, max2: 15, prop3: 'all-stats', min3: 10, max3: 20,
});
uniqueItems.rows.push({
  ...rainbowFacet, index: "Rainbow Stone", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50, '*eol\r': '0',
  prop1: 'dmg%', min1: 20, max1: 40, prop2: 'reduce-ac', min2: 10, max2: 20,
  prop3: 'crush', min3: 10, max3: 15, prop4: 'ease', par4: '', min4: 20, max4: 20,
});

uniqueItems.rows.push({
  ...rainbowFacet, index: "Rainbow Stone", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50, '*eol\r': '0',
  prop1: 'dmg', min1: 15, max1: 30, prop2: 'noheal', min2: 1, max2: 1,
  prop3: 'swing2', min3: 20, max3: 30, prop4: 'ease', par4: '', min4: -20, max4: -20, par4: null,
});
uniqueItems.rows.push({
  ...rainbowFacet, index: "Rainbow Stone", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50, '*eol\r': '0',
  prop1: 'res-all', min1: 10, max1: 20, prop2: 'red-mag', min2: 6, max2: 12,
  prop3: 'mana-kill', min3: 4, max3: 8, prop4: 'ease', par4: '', min4: -20, max4: -20,
});

itemNames.push({
  id: D2RMM.getNextStringID(),
  Key: `Rainbow Stone`, enUS: `Rainbow Stone`, zhTW: `ÿcDRainbow StoneÿcD`
});

itemNames.push({
  id: D2RMM.getNextStringID(),
  Key: `Hellfire's Bless`, enUS: `Hellfire's Bless`, zhTW: `ÿcDHellfire's BlessÿcD`
});
itemNames.push({
  id: D2RMM.getNextStringID(),
  Key: `Gheed's Lucky`, enUS: `Gheed's Lucky`, zhTW: `ÿcDGheed's LuckyÿcD`
});

itemNames.push({
  id: D2RMM.getNextStringID(),
  Key: `Azurewrath1`, enUS: `Azurewrath1`, zhTW: `ÿcDAzurewrath1ÿcD`
});

D2RMM.writeTsv(uniqueItemsFilename, uniqueItems);
D2RMM.writeJson(itemNamesFilename, itemNames);
D2RMM.writeJson(itemNameaffixesFilename, itemNameaffixes);
