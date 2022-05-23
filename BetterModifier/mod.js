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
// const GOOD_AM_PREFIX_CODE = ["skilltab", "hp", "mana"];

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


//mod1code
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
  "Ruby"//  dmg%		31	40
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

mps.rows.forEach((row) => {
  const prefixName = row['Name'];
  const frequency = row['frequency'];
  const mod1code = row['mod1code'];
  const itype1 = row['itype1'];

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
        row['frequency'] = 4;
    }

    //珠宝专用词缀
    if (JEW_ITYPES.includes(itype1)) {
      if (GOOD_JEW_PREFIX_NAMES.includes(prefixName)) {
        row['frequency'] = 4;
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
        row['frequency'] = 4;
      }
    }

    //护符专用词缀
    if (CHARM_ITYPES.includes(itype1)) {
      if (GOOD_CHARM_SUFFIX_NAMES.includes(suffixName)) {
        row['frequency'] = 4;
      }
    }
  }
});



function displayModX(mod) { return `code:${mod.code}|param:${mod.param}|min:${mod.min}|max:${mod.max}`; }
function displayModBase(base) { return `Name:${base.Name}|version:${base.version}|spawnable:${base.spawnable}|group:${base.group}|frequency:${base.frequency}|classspecific:${base.classspecific}`; }
function displayModifier(magicModifier) {
  let result = '';
  result += "Base=" + displayModBase(magicModifier.base) + "\n";
  if (magicModifier.mod1 != null)
    result += "Mod1=" + displayModX(magicModifier.mod1) + "\n";
  if (magicModifier.mod2 != null)
    result += "Mod2=" + displayModX(magicModifier.mod2) + "\n";
  if (magicModifier.mod3 != null)
    result += "Mod3=" + displayModX(magicModifier.mod3) + "\n";
  return result;
}

class ModBase {
  constructor(name, group, classspecific) {
    this.Name = name;
    this.version = 100;
    this.spawnable = 1;
    this.rare = 1;
    this.frequency = 1;
    this.group = group;
    this.classspecific = classspecific;
    this.level = 30;
    this.levelreq = 20;
    this.multiply = 0;
    this.add = 0;
  }
}
class ModX { constructor(code, param, min, max) { this.code = code; this.param = param; this.min = min; this.max = max; } }

class Modifier {
  constructor(base, mod1, mod2, mod3) {
    this.base = base;
    this.mod1 = mod1;
    this.mod2 = mod2;
    this.mod3 = mod3;
  }
  static twoMods(base, mod1, mod2) {
    return new Modifier(base, mod1, mod2)
  }
  static oneMod(base, mod1) {
    return new Modifier(base, mod1, null)
  }

}

const manaPercent = new ModX('mana%', '', 5, 8);
const hpPercent = new ModX('hp%', '', 5, 8);

const skilltab0m = new ModX('skilltab', '0', 1, 3);//ama
const skilltab1m = new ModX('skilltab', '1', 1, 3);//ama
const skilltab2m = new ModX('skilltab', '2', 1, 3);//ama
const skilltab3m = new ModX('skilltab', '3', 1, 3);//sor
const skilltab4m = new ModX('skilltab', '4', 1, 3);//sor
const skilltab5m = new ModX('skilltab', '5', 1, 3);//sor
const skilltab6m = new ModX('skilltab', '6', 1, 3);//nec
const skilltab7m = new ModX('skilltab', '7', 1, 3);//nec
const skilltab8m = new ModX('skilltab', '8', 1, 3);//nec
const skilltab9m = new ModX('skilltab', '9', 1, 3);//pal
const skilltab10m = new ModX('skilltab', '10', 1, 3);//pal
const skilltab11m = new ModX('skilltab', '11', 1, 3);//pal

const skilltab0r = new ModX('skilltab', '0', 1, 2);//ama
const skilltab1r = new ModX('skilltab', '1', 1, 2);//ama
const skilltab2r = new ModX('skilltab', '2', 1, 2);//ama
const skilltab3r = new ModX('skilltab', '3', 1, 2);//sor
const skilltab4r = new ModX('skilltab', '4', 1, 2);//sor
const skilltab5r = new ModX('skilltab', '5', 1, 2);//sor
const skilltab6r = new ModX('skilltab', '6', 1, 2);//nec
const skilltab7r = new ModX('skilltab', '7', 1, 2);//nec
const skilltab8r = new ModX('skilltab', '8', 1, 2);//nec
const skilltab9r = new ModX('skilltab', '9', 1, 2);//pal
const skilltab10r = new ModX('skilltab', '10', 1, 2);//pal
const skilltab11r = new ModX('skilltab', '11', 1, 2);//pal

const resfire = new ModX('res-fire', '', 18, 36);
const resltng = new ModX('res-ltng', '', 18, 36);
const rescold = new ModX('res-cold', '', 18, 36);
const respois = new ModX('res-pois', '', 18, 36);

//group:1-45,MagicSuffix.txt
//group:101-142,MagicSuffix.txt
//new group id >2xx。例如：mana%、hp%、move3+balance3、str+dex、dmg%+ac%、res-fire+res-ltng、skilltab(3)+skilltab(4)*。
// '*ID': (itemID = itemID + 1),
// const maxGroup = Math.max(...mss.rows.map((row) => row.group)) + 1;
// let groupIndex = 200 + 1;
let groupID = Math.max(...mss.rows.map((row) => row['group']) );
pushSuf(mss, setItypes(Modifier.oneMod(new ModBase("manaPercent", groupID++, ''), manaPercent), NORMAL_ITYPES));
pushSuf(mss, setItypes(Modifier.oneMod(new ModBase("hpPercent", groupID++, ''), hpPercent), NORMAL_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("hp+mana", groupID++, ''), hpPercent, manaPercent), NORMAL_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResFL", groupID, ''), resfire, resltng), NORMAL_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResFC", groupID, ''), resfire, rescold), NORMAL_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResFP", groupID, ''), resfire, respois), NORMAL_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResCL", groupID, ''), rescold, resltng), NORMAL_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResCP", groupID, ''), rescold, respois), NORMAL_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResLP", groupID, ''), resltng, respois), NORMAL_ITYPES));

pushSuf(mss, setItypes(noRare(Modifier.oneMod(new ModBase("allskills", groupID++, ''), new ModX('allskills', '', 2, 4))), NORMAL_ITYPES));
pushSuf(mss, setItypes(Modifier.oneMod(new ModBase("allskills", groupID, ''), new ModX('allskills', '', 1, 2)), NORMAL_ITYPES));

//rare 专属  TODO mps groupID= 125
//"[Class Skill Tab ID] = (Amazon = 0-2, Sorceress = 3-5, Necromancer = 6-8, Paladin = 9-11, Barbarian = 12-14, Druid = 15-17,  Assassin = 18-20)"
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("amaDualTabA", groupID++, 'ama'), skilltab0r, skilltab1r), AMA_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("amaDualTabB", groupID, 'ama'), skilltab0r, skilltab2r), AMA_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("amaDualTabC", groupID, 'ama'), skilltab1r, skilltab2r), AMA_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("sorDualTabA", groupID, 'sor'), skilltab3r, skilltab4r), SOR_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("sorDualTabB", groupID, 'sor'), skilltab3r, skilltab5r), SOR_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("sorDualTabC", groupID, 'sor'), skilltab4r, skilltab5r), SOR_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("necDualTabA", groupID, 'nec'), skilltab6r, skilltab7r), NEC_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("necDualTabB", groupID, 'nec'), skilltab6r, skilltab8r), NEC_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("necDualTabC", groupID, 'nec'), skilltab7r, skilltab8r), NEC_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("palDualTabA", groupID, 'pal'), skilltab9r, skilltab10r), PAL_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("palDualTabB", groupID, 'pal'), skilltab9r, skilltab11r), PAL_ITYPES));
pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("palDualTabC", groupID, 'pal'), skilltab10r, skilltab11r), PAL_ITYPES));
//magic 专属
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("amaDualTabA", groupID, 'ama'), skilltab0m, skilltab1m)), AMA_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("amaDualTabB", groupID, 'ama'), skilltab0m, skilltab2m)), AMA_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("amaDualTabC", groupID, 'ama'), skilltab1m, skilltab2m)), AMA_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("sorDualTabA", groupID, 'sor'), skilltab3m, skilltab4m)), SOR_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("sorDualTabB", groupID, 'sor'), skilltab3m, skilltab5m)), SOR_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("sorDualTabC", groupID, 'sor'), skilltab4m, skilltab5m)), SOR_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("necDualTabA", groupID, 'nec'), skilltab6m, skilltab7m)), NEC_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("necDualTabB", groupID, 'nec'), skilltab6m, skilltab8m)), NEC_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("necDualTabC", groupID, 'nec'), skilltab7m, skilltab8m)), NEC_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("palDualTabA", groupID, 'pal'), skilltab9m, skilltab10m)), PAL_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("palDualTabB", groupID, 'pal'), skilltab9m, skilltab11m)), PAL_ITYPES));
pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("palDualTabC", groupID, 'pal'), skilltab10m, skilltab11m)), PAL_ITYPES));


function noRare(modifier) {
  if (modifier.base != null) {
    modifier.base.rare = 0;
  }
  return modifier;
}

function setItypes(modInput, typeInput) {
  for (let i = 0; i < typeInput.length && i < 7; i = i + 1) {
    const itemValue = typeInput[i];
    const itemIndex = `itype${i + 1}`;
    modInput[`${itemIndex}`] = itemValue;
  }
  return modInput;
}

function pushSuf(magicModifiers, input) {
  const inputItem1 = {
    Name: input.base.Name,
    version: input.base.version,
    spawnable: input.base.spawnable,
    rare: input.base.rare,
    frequency: input.base.frequency,
    group: input.base.group,
    classspecific: input.base.classspecific,
    level: input.base.level,
    levelreq: input.base.levelreq,
    multiply: input.base.multiply,
    add: input.base.add,
    mod1code: input.mod1.code,
    mod1param: input.mod1.param,
    mod1min: input.mod1.min,
    mod1max: input.mod1.max,
    itype1: input.itype1,
    itype2: input.itype2,
    itype3: input.itype3,
    itype4: input.itype4,
    itype5: input.itype5,
    itype6: input.itype6,
    itype7: input.itype7,
  }
  if (input.mod2 !== null) {
    const inputItem2 = {
      ...inputItem1,
      mod2code: input.mod2.code,
      mod2param: input.mod2.param,
      mod2min: input.mod2.min,
      mod2max: input.mod2.max,
    }
    magicModifiers.rows.push(inputItem2);
  }
  else {
    magicModifiers.rows.push(inputItem1);
  }
}

D2RMM.writeTsv(amFilename, ams);
D2RMM.writeTsv(mpFileName, mps);
D2RMM.writeTsv(msFileName, mss);
