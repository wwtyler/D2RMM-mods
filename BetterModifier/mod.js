const amFilename = 'global\\excel\\automagic.txt';
const mpFileName = 'global\\excel\\MagicPrefix.txt';
const msFileName = 'global\\excel\\MagicSuffix.txt';
const ams = D2RMM.readTsv(amFilename);
const mps = D2RMM.readTsv(mpFileName);
const mss = D2RMM.readTsv(msFileName);


//itypes，不能大于7；
const CHARM_ITYPES = ['scha', 'mcha', 'lcha'];
const JEW_ITYPES = ['jewl'];
const AMA_ITYPES = ['spea', 'miss', 'glov', 'amul', 'circ'];
const SOR_ITYPES = ['orb', 'staff', 'amul', 'circ'];
const NEC_ITYPES = ['wand', 'head', 'amul', 'circ', 'knif'];
const PAL_ITYPES = ['scep', 'swor', 'mace', `shld`, `ashd`, `amul`, `circ`];
const BAR_ITYPES = ['phlm', 'axe', 'tkni', 'spea', 'helm', 'amul'];
const DRU_ITYPES = ['club', 'pelt', 'amul', 'circ'];
const ASS_ITYPES = ['h2h', 'helm', 'amul', 'circ'];
const NORMAL_ITYPES = ['weap', `armo`];
const ARMO_ITYPES = ['tors', `helm`, `shld`, `belt`, `boot`, 'glov'];

//自动附魔蓝色装备特有词缀。rare=0
const GOOD_AM_EXCL_PREFIX_NAME = ["of the Colossus", "Great Wyrm's", 'Chromatic', 'of Anthrax'];
//自动附魔高等级词缀。rare=1
const GOOD_AM_PREFIX_NAME = ["Athlete's", "Archer's", "Lancer's", 'of the Mammoth', "Wyrm's", "Prismatic", "of Pestilence"];

//auto附魔的词缀频率统一调整到1。
//对于部分高级别词缀变相提升出现的概率。比如：3/2/1 -> 1/1/1，则概率1/6提升到1/3。 
ams.rows.forEach((row) => {
  const prefixName = row["Name"];
  row['frequency'] = 1;
  GOOD_AM_PREFIX_NAME.forEach((amPrefix) => {
    if (prefixName != null && prefixName == amPrefix) {
      row['frequency'] = 2;
    }
  });
});

ams.rows.push({
  Name: "Weapon Boost #1",
  version: 100,
  spawnable: 1,
  rare: 1,
  level: 85,
  levelreq: 65,
  frequency: 1,
  group: 310,
  mod1code: "dmg%",
  mod1min: 150,
  mod1max: 250,
  itype1: "weap",
  multiply: 0,
  add: 0
});
ams.rows.push({
  Name: "Weapon Boost #2",
  version: 100,
  spawnable: 1,
  rare: 1,
  level: 65,
  levelreq: 35,
  frequency: 2,
  group: 310,
  mod1code: "dmg%",
  mod1min: 100,
  mod1max: 200,
  itype1: "weap",
  multiply: 0,
  add: 0
});

ams.rows.push({
  Name: "Weapon Boost #3",
  version: 100,
  spawnable: 1,
  rare: 1,
  level: 35,
  levelreq: 15,
  frequency: 3,
  group: 310,
  mod1code: "dmg%",
  mod1min: 50,
  mod1max: 100,
  itype1: "weap",
  multiply: 0,
  add: 0
});

const weaponFilename = 'global\\excel\\weapons.txt';
const weapons = D2RMM.readTsv(weaponFilename);

const WEAPON_AM_TYPES = ["axe", "club", "scep", "mace", "hamm", "swor", "knif", "tkni", "taxe", "jave", "spea", "pole", "bow", "xbow", "tpot", "h2h", "h2h2", "abow", "aspe", "ajav"];
weapons.rows.forEach((row) => {
  if (WEAPON_AM_TYPES.includes(row.type)) {
    if (row['auto prefix'] != 302 || row['auto suffix'] != 300 || row['auto prefix'] != 301 || row['auto suffix'] != 303) {
      // row['auto prefix'] = 310;
    }
  }
});
D2RMM.writeTsv(weaponFilename, weapons);

const qualityitemsFilename = 'global\\excel\\qualityitems.txt';
const qualityitems = D2RMM.readTsv(qualityitemsFilename);

qualityitems.rows.forEach((item) => {
  // mod1code 	mod1param 	mod1min 	mod1max 	mod2code 	mod2param 	mod2min 	mod2max 	armor 	weapon 	shield 	scepter 	wand 	staff 	bow 	boots 	gloves 	belt
  // att      	        0 	     15 	     50 	         	        0 	        	        	    0 	     1 	     0 	      1 	   1 	    1 	  1 	    0 	     0 	   0
  // dmg%     	        0 	     15 	     50 	         	        0 	        	        	    0 	     1 	     0 	      1 	   1 	    1 	  1 	    0 	     0 	   0
  // ac%      	        0 	      5 	     15 	         	        0 	        	        	    1 	     0 	     1 	      0 	   0 	    0 	  0 	    1 	     1 	   1
  // att      	        0 	     15 	     50 	dmg%     	        0 	      5 	     15 	    0 	     1 	     0 	      1 	   1 	    1 	  1 	    0 	     0 	   0
  // dur%     	        0 	     10 	     15 	         	          	        	        	    1 	     1 	     1 	      1 	   1 	    1 	  1 	    1 	     1 	   1
  // att      	        0 	     1 	     3 	dur%     	        0 	     10 	     15 	    0 	     1 	     0 	      1 	   1 	    1 	  1 	    0 	     0 	   0
  // dmg%     	        0 	     15 	     50 	dur%     	        0 	     10 	     15 	    0 	     1 	     0 	      1 	   1 	    1 	  1 	    0 	     0 	   0
  // ac%      	        0 	      5 	     15 	dur%     	        0 	     10 	     15 	    1 	     0 	     1 	      0 	   0 	    0 	  0 	    1 	     1 	   1
  // dmg      	          	     15 	     50 	att      	          	     10 	     50 	    0 	     1 	     1 	      0 	   0 	    0 	  1 	    0 	     0 	    
  if (item.mod1code === 'att' && item.mod2code === null) { item.mod1min = 30; item.mod1max = 50; }
  if (item.mod1code === 'dmg%' && item.mod2code === null) { item.mod1min = 30; item.mod1max = 50; }
  if (item.mod1code === 'ac%' && item.mod2code === null) { item.mod1min = 30; item.mod1max = 50; }
  if (item.mod1code === 'att' && item.mod2code === 'dmg%') { item.mod1min = 20; item.mod1max = 30; item.mod2min = 20; item.mod2max = 30; }
  if (item.mod1code === 'dur% ' && item.mod2code === null) { item.mod1min = 30; item.mod1max = 50; }
  if (item.mod1code === 'att ' && item.mod2code === 'dur%') { item.mod1min = 20; item.mod1max = 30; item.mod2min = 20; item.mod2max = 30; }
  if (item.mod1code === 'dmg% ' && item.mod2code === 'dur%') { item.mod1min = 20; item.mod1max = 30; item.mod2min = 20; item.mod2max = 30; }
});
// qualityitems.rows.push({
//   mod1code: 'dmg',
//   mod1min: 15,
//   mod1max: 50,
//   mod2code: 'att',
//   mod2min: 10,
//   mod2max: 50,
//   armor: 0,
//   weapon: 1,
//   shield: 1,
//   scepter: 0,
//   wand: 0,
//   staff: 0,
//   bow: 1,
//   boots: 0,
//   gloves: 0,
//   'belt\r': 0,
// });


const PREFIX_SKILL_CODES = ['skilltab', 'ama', 'sor', 'pal', 'nec', 'bar', 'dru', 'ass'];
const GOOD_PREFIX_CODES = ['dmg%', 'mana', 'res-all', 'res-fire', 'res-ltng', 'mag%', 'sock'];
const GOOD_SUFFIX_CODES = [
  'hp', 'mana', 'move3', 'noheal',
  'mag%', 'red-dmg', 'str',
  'block', 'balance3', 'cast3'];

const CLASS_SPECIFIC = ['ama', 'sor', 'pal', 'nec', 'bar', 'dru', 'ass'];

const GOOD_PREFIX_NAMES = [
  "Arch-Angel's", "Priest's", "Berserker's", "Necromancer's",
  "Valkyrie's", "Hierophant's", "Witch-hunter's",//all class skills
  "Volcanic", "Powered", "Glacial",//SOR skilltab
  "Lancer's", "Athlete's", "Archer's",//AMA skilltab
  "Accursed", "Venomous", "Golemlord's",//nec skilltab
  "Rose Branded", "Marshal's", "Guardian's",//pal skilltab
  "Master's", "Furious", "Echoing",//bar skilltab
  "Keeper's", "Communal", "Gaea's",//dru skilltab
  "Cunning", 'Shadow', "Kenshi's",//ass skilltab
  "Jeweler's",//珠宝匠sock 4
  "Ruby",//dmg% jewl
];

const GOOD_SUFFIX_NAMES = [
  "of Negation", //red-mag		4	4	
  "of Quickness",//swing3		40	40
  "of Warmth", "of Evisceration",
  "of Maiming", "of Carnage", "of Bliss",
  "of Performance", "of Transcendence",//dmg-min		10	13	dmg-min		15	20
  "of Life Everlasting",//red-dmg		10	25
  "of Perfection",//dex		16	20
  "of Stability", //balance3		24	24	
  "of Luck",//	mag%		26	35	
  "of Fortune",// mag%		20	35
  "of Prosperity", //mag%		5	10	
  "of Enlightenment",//	enr		21	30
  "of Wizardry",//mana		21	30	
  "of the Whale", "of the Colosuss", "of Vita", "of Hope",//HP
  'of Atlus', //str		21	30	
  "of the Titan", "of the Giant",//str
  "of Acceleration", "of Speed",//move3		30	30	
  "of Piercing",//ignore-ac		1	1		
  "of the Lamprey",//八目鳗 lifesteal
  "Deflecting",//偏向 block 20 block 30 
  "of the Magus",//cast3 20
  "of Fire Quenching",//abs-fire		6	8
  "of the Dynamo",//abs-ltng		6	8
  "of the Sirocco",//abs-cold		6	8
];

const GOOD_JEW_SUFFIX_NAMES = [
  "of Fervor", //swing1		15	15	
  "of Carnage"//dmg-max		11	15
];

const GOOD_JEW_PREFIX_NAMES = [
  "Scintillating", //res-all		11	15	
  "Realgar",//dmg%		21	30
  "Ruby",//  dmg%		31	40
  "Emerald"//mag%		3	7
];

const GOOD_CHARM_SUFFIX_NAMES = [
  "of Vita",//HP
  "of Good Luck",//mag%
  "of Fortune"//mag%
];

const GOOD_CHARM_PREFIX_NAMES = [
  "Shimmering",//res-all
  "Serpent's",//mana
  "Lucky",//mag%
];

const DISABLED_PREFIX_CODES = [
  'att', 'stam', 'ac',
  'cold-min', 'cold-len', 'fire-min', 'pois-min', 'ltng-min',
  'hp', 'mana'
];
const DISABLED_SUFFIX_CODES = [
  'cold-min', 'cold-len', 'fire-min', 'pois-min', 'ltng-min',
  'dmg-pois', 'dmg-cold', 'dmg-fire', 'dmg-ltng',
  'thorns', 'knock', 'red-dmg',
  'red-mag', 'manasteal', 'hp', 'mana'
];

const DISABLED_ITYPES_ARRAY = ['jewl', 'scha', 'mcha', 'lcha', 'amul', 'ring', 'circ'];
const DISABLED_CODES_WITH_ITYPES = {
  jewl: ['dex', 'str', 'enr', 'vit', 'att', 'stam', 'ac', 'dmg-min', 'dmg-max',  'cold-len', 'fire-min', 'pois-min', 'ltng-min',
    'regen-stam', 'light', 'att-demon', 'att-undead', 'thorns'],
  scha: ['dex', 'str', 'enr', 'vit', 'att', 'stam', 'ac', 'dmg-min', 'dmg-max',  'cold-len', 'fire-min', 'pois-min', 'ltng-min','dmg-pois'],
  mcha: ['dex', 'str', 'enr', 'vit', 'att', 'stam', 'ac', 'dmg-min', 'dmg-max',  'cold-len', 'fire-min', 'pois-min', 'ltng-min','dmg-pois'],
  lcha: ['dex', 'str', 'enr', 'vit', 'att', 'stam', 'ac', 'dmg-min', 'dmg-max',  'cold-len', 'fire-min', 'pois-min', 'ltng-min','dmg-pois'],
  amul: ['dex', 'str', 'enr', 'vit', 'att', 'stam', 'ac', 'dmg-min', 'dmg-max',  'cold-len', 'fire-min', 'pois-min', 'ltng-min','dmg-pois'],
  ring: ['dex', 'str', 'enr', 'vit', 'att', 'stam', 'ac', 'dmg-min', 'dmg-max',  'cold-len', 'fire-min', 'pois-min', 'ltng-min','dmg-pois'],
  circ: ['dex', 'str', 'enr', 'vit', 'att', 'stam', 'ac', 'dmg-min', 'dmg-max',  'cold-len', 'fire-min', 'pois-min', 'ltng-min','dmg-pois'],
};

mps.rows.forEach((row) => {
  const prefixName = row['Name'];
  const frequency = row['frequency'];
  const mod1code = row['mod1code'];
  const itype1 = row['itype1'];
  const itype2 = row['itype2'];
  const itype3 = row['itype3'];
  const itype4 = row['itype4'];
  const level = row['level'];

  //降低部分词缀的频率(frequency)
  //frequency不等于0和null
  if (frequency != null && frequency != 0) {
    row['frequency'] = 1;

    if (GOOD_PREFIX_CODES.includes(mod1code)) {
      row['frequency'] = 2;
    }
    if (GOOD_PREFIX_NAMES.includes(prefixName)) {
      row['frequency'] = 3;
    }
    if (PREFIX_SKILL_CODES.includes(mod1code)) {
      if (CHARM_ITYPES.includes(itype1) | ASS_ITYPES.includes(itype1) |
        SOR_ITYPES.includes(itype1) | NEC_ITYPES.includes(itype1) |
        PAL_ITYPES.includes(itype1) |
        AMA_ITYPES.includes(itype1) | DRU_ITYPES.includes(itype1) | BAR_ITYPES.includes(itype1))
        row['frequency'] = 3;
    }

    //珠宝专用词缀
    if (JEW_ITYPES.includes(itype1)) {
      if (GOOD_JEW_PREFIX_NAMES.includes(prefixName)) {
        row['frequency'] = 3;
      }
    }

    //屏蔽部分词缀。
    if (DISABLED_PREFIX_CODES.includes(mod1code)) {
      row['frequency'] = 0;
      row['spawnable'] = 0;
    }

    //屏蔽珠宝和护符的部分词缀
    // if (DISABLED_ITYPES_ARRAY.includes(itype1)) {
    //   if (DISABLED_CODES_WITH_ITYPES[itype1].includes(mod1code)) {
    //     row['frequency'] = 0;
    //     row['spawnable'] = 0;
    //   }
    // }

    for (let i = 1; i <= 4; i++) {
      const itypeN = row[`itype` + i];
      if (itypeN != null && DISABLED_ITYPES_ARRAY.includes(itypeN) && DISABLED_CODES_WITH_ITYPES[itypeN].includes(mod1code)) {
        row[`itype` + i] = null;
      }
    }
  }
});

mss.rows.forEach((row) => {
  const suffixName = row['Name'];
  const frequency = row['frequency']
  const mod1code = row['mod1code']
  const itype1 = row['itype1']
  //frequency不等于0和null
  if (frequency != null && frequency != 0) {
    row['frequency'] = 1;
    if (GOOD_SUFFIX_CODES.includes(mod1code)) {
      row['frequency'] = 2;
    }
    if (GOOD_SUFFIX_NAMES.includes(suffixName)) {
      row['frequency'] = 3;
    }

    //珠宝专用词缀
    if (JEW_ITYPES.includes(itype1)) {
      if (GOOD_JEW_SUFFIX_NAMES.includes(suffixName)) {
        row['frequency'] = 3;
      }
    }
    //护符专用词缀
    if (CHARM_ITYPES.includes(itype1)) {
      if (GOOD_CHARM_SUFFIX_NAMES.includes(suffixName)) {
        row['frequency'] = 3;
      }
    }

    //屏蔽部分词缀
    if (DISABLED_SUFFIX_CODES.includes(mod1code)) {
      row['frequency'] = 0;
      row['spawnable'] = 0;
    }


    //屏蔽珠宝和护符的部分词缀
    if (DISABLED_ITYPES_ARRAY.includes(itype1)) {
      if (DISABLED_CODES_WITH_ITYPES[itype1].includes(mod1code)) {
        row['frequency'] = 0;
        row['spawnable'] = 0;
      }
    }
  }
});



D2RMM.writeTsv(amFilename, ams);
D2RMM.writeTsv(mpFileName, mps);
D2RMM.writeTsv(msFileName, mss);
D2RMM.writeTsv(qualityitemsFilename, qualityitems);