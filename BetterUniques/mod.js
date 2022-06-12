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
uniqueItems.rows.forEach((item) => {
  if (item.index != null) {
    if (item.index === "Gheed's Fortune") {
      gheedsFortune = item;
      item.prop1 = 'mag%'; item.min1 = 40; item.max1 = 80;
      item.prop2 = 'gold%'; item.min2 = 120; item.max2 = 200;
      item.prop3 = 'cheap'; item.min3 = 10; item.max3 = 20;
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
      item.prop8 = 'allskills'; item.min8 = 1; item.max8 = 2;;
    }
    else if (item.index === "Azurewrath" && item.code === 'crs') {
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
      // Mang Song's Lesson	322	100	1		1	1	
      // 86	82	6ws	archon staff		5	5000	dgld	dgld		inv8wsu				
      // allskills		5	5	pierce-fire		7	15	pierce-ltng		7	15	pierce-cold		7	15	regen-mana		10	10	cast2		30	30
      item.min1 = 5; item.max1 = 5;
      item.min2 = 15; item.max2 = 25;
      item.min3 = 15; item.max3 = 25;
      item.min4 = 15; item.max4 = 25;
      item.prop5 = 'regen-mana'; item.min5 = 20; item.max5 = 30;
      item.prop6 = 'cast2'; item.min6 = 35; item.max6 = 50;
    }
    else if (item.index === "Tyrael's Might") {
      // Tyrael's Might	311	100	1		1	1	
      // 87	84	uar	sacred armor		5	5000	dblu	dblu		invaaru				
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
      item.prop10 = 'sock'; item.min10 = 1; item.max10 = 3;
    }
    else if (item.index === "Arachnid Mesh") {
      // Arachnid Mesh	373	100	1		1	1	87	80	ulc	spiderweb sash		5	5000	blac	blac						ac%		90	120	cast2		20	20	charged	Venom	11	3	allskills		1	1	slow		10	10	mana%		5	5																										0
      item.prop1 = 'ac%'; item.min1 = 90; item.max1 = 120;
      item.prop2 = 'cast2'; item.min2 = 20; item.max2 = 20;
      item.prop3 = 'charged'; item.par3 = 'Venom'; item.min3 = 11; item.max3 = 13;
      item.prop4 = 'allskills'; item.min4 = 1; item.max4 = 1;
      item.prop5 = 'slow'; item.min5 = 10; item.max5 = 10;
      item.prop6 = 'mana%'; item.min6 = 5; item.max6 = 5;
    }
    else if (item.index === "Griffon's Eye") {
      //Griffon's Eye	336	100	1		1		84	76	ci3	diadem		5	5000
      //ac		100	200	cast2		25	25	allskills		1	1	extra-ltng		10	15	pierce-ltng		15	20

    }
    else if (item.index === 'Alma Negra') {
      // Alma Negra	329	100	1		1		85	77	pac	sacred rondache		5	5000	blac	blac				
      // ac%		180	210	block2		30	30	pal		1	2	block		20	20	red-mag		5	9	att%		40	75	dmg%		40	75
    }
    else if (item.index === "Deaths's Web") {
      //Deaths's Web	299	100	1		1		74	66	7gw	unearthed wand		5	5000
      //allskills		2	2	pierce-pois		40	50	heal-kill		7	12	mana-kill		7	12	skilltab	7	1	2

    }
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
    else if (item.index === "Hellfire Torch") {
      hellfireTorch = item;
    }
  }
});
// Rainbow Facet	393	100	1		1	1	85	49	jew	jewel		3	5000								dmg-cold	3	24	38	pierce-cold		3	5	extra-cold		3	5	death-skill	Blizzard	100	37																																		0
// Rainbow Facet	394	100	1		1	1	85	49	jew	jewel		3	5000								dmg-fire		17	45	pierce-fire		3	5	extra-fire		3	5	death-skill	Meteor	100	31																																		0
// Rainbow Facet	395	100	1		1	1	85	49	jew	jewel		3	5000								dmg-pois	50	187	187	pierce-pois		3	5	extra-pois		3	5	death-skill	Poison Nova	100	51																																		0
// Rainbow Facet	396	100	1		1	1	85	49	jew	jewel		3	5000								dmg-ltng		1	74	pierce-ltng		3	5	extra-ltng		3	5	levelup-skill	Nova	100	41																																		0
// Rainbow Facet	397	100	1		1	1	85	49	jew	jewel		3	5000								dmg-cold	3	24	38	pierce-cold		3	5	extra-cold		3	5	levelup-skill	Frost Nova	100	43																																		0
// Rainbow Facet	398	100	1		1	1	85	49	jew	jewel		3	5000								dmg-fire		17	45	pierce-fire		3	5	extra-fire		3	5	levelup-skill	Blaze	100	29																																		0
// Rainbow Facet	399	100	1		1	1	85	49	jew	jewel		3	5000								dmg-pois	50	187	187	pierce-pois		3	5	extra-pois		3	5	levelup-skill	Venom	100	23		

//Annihilus	381	100	1		1	1	110	70	cm1	charm	1	3	5000			flpmss	invmss	item_gem	12	item_gem	allskills		1	1	all-stats		10	20	res-all		10	20	addxp		5	10
// '*ID': Math.max(...uniqueItems.rows.map((row) => row['*ID'])) + 1,
// '*ID': (itemID = itemID + 1),
let itemID = Math.max(...uniqueItems.rows.map((row) => row['*ID']));
uniqueItems.rows.push({
  ...hellfireTorch, index: "Hellfire's Bless", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50,
  prop1: 'addxp', min1: 5, max1: 10,
  prop2: 'cheap', min2: 5, max2: 10,
  prop3: 'move2', min3: 10, max3: 20,
  prop4: 'light', min4: 5, max4: 5,
  prop5: 'mag%', min5: 5, max5: 15,
  prop6: 'gold%', min6: 25, max6: 50, par6: '',
  '*eol\r': '0',
});
uniqueItems.rows.push({
  ...gheedsFortune, index: "Gheed's Lucky", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50,
  prop1: 'addxp', min1: 5, max1: 10,
  prop2: 'cheap', min2: 5, max2: 10,
  prop3: 'move2', min3: 10, max3: 20,
  '*eol\r': '0',
});
uniqueItems.rows.push({
  ...gheedsFortune, index: "Gheed's Lucky", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50,
  prop1: 'addxp', min1: 5, max1: 10,
  prop2: 'res-all', min2: 5, max2: 15,
  prop3: 'all-stats', min3: 10, max3: 20,
  '*eol\r': '0',
});
uniqueItems.rows.push({
  ...rainbowFacet, index: "Rainbow Stone", '*ID': (itemID = itemID + 1),
  prop1: 'dmg%', min1: 20, max1: 40,
  prop2: 'reduce-ac', min2: 10, max2: 20,
  prop3: 'crush', min3: 10, max3: 15,
  prop4: 'ease', min4: 20, max4: 20,
  '*eol\r': '0'
});

uniqueItems.rows.push({
  ...rainbowFacet, index: "Rainbow Stone", '*ID': (itemID = itemID + 1),
  prop1: 'dmg', min1: 15, max1: 30,
  prop2: 'noheal', min2: 1, max2: 1,
  prop3: 'swing2', min3: 20, max3: 30,
  prop4: 'ease', min4: -20, max4: -20, par4: null,
  '*eol\r': '0'
});
uniqueItems.rows.push({
  ...rainbowFacet, index: "Rainbow Stone", '*ID': (itemID = itemID + 1),
  prop1: 'res-all', min1: 10, max1: 20,
  prop2: 'red-mag', min2: 6, max2: 12,
  prop3: 'mana-kill', min3: 4, max3: 8,
  prop4: 'ease', min4: -20, max4: -20, par4: null,
  '*eol\r': '0',
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
