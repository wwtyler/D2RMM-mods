const automagicFilename = 'global\\excel\\automagic.txt';
const automagics = D2RMM.readTsv(automagicFilename);

//自动附魔蓝色装备特有词缀。rare=0
const GOOD_AM_EXCL_PREFIX_NAME = ["of the Colossus", "Great Wyrm's", 'Chromatic', 'of Anthrax'];
//自动附魔高等级词缀。rare=1
const GOOD_AM_PREFIX_NAME = ["Athlete's", "Archer's", "Lancer's", 'of the Mammoth', "Wyrm's", "Prismatic", "of Pestilence"];
// const GOOD_AM_PREFIX_CODE = ["skilltab", "hp", "mana"];

//auto附魔的词缀频率统一调整到1。
//对于部分高级别词缀变相提升出现的概率。比如：3/2/1 -> 1/1/1，则概率1/6提升到1/3。 
automagics.rows.forEach((row) => {
  const prefixName = row["Name"];
  row['frequency'] = 1;
  GOOD_AM_PREFIX_NAME.forEach((amPrefix) => {
    if (prefixName != null && prefixName == amPrefix) {
      row['frequency'] = 2;
    }
  });
});

D2RMM.writeTsv(automagicFilename, automagics);

//itype1
const CHARM_ITYPES = ['scha', 'mcha', 'lcha'];
const JEW_ITYPES = ['jewl', 'amul', 'ring'];

const AMA_ITYPES = ['spea', 'miss', 'glov', 'amul', 'circ'];
const SOR_ITYPES = ['orb', 'staff', 'staf', 'circ', 'amul'];
const NEC_ITYPES = ['wand', 'head', 'amul', 'circ', 'knif'];
const PAL_ITYPES = ['scep', 'swor', 'mace', `shld`, `ashd`, `amul`, `circ`];
const BAR_ITYPES = ['phlm', 'axe', 'weap', 'tkni', 'spea', 'helm', 'amul'];
const DRU_ITYPES = ['club', 'pelt', 'amul', 'circ'];
const ASS_ITYPES = ['h2h', 'helm', 'amul', 'circ'];

const NORMAL_ITYPES = ['weap', `armo`];
const ARMO_ITYPES = ['tors', `helm`, `shld`, `belt`, `boot`];

//mod1code
const GOOD_PREFIX_CODES = ['dmg%', 'mana', 'res-all', 'res-fire', 'res-ltng', 'mag%', 'sock'];
const PREFIX_SKILL_CODES = ['skilltab', 'ama', 'sor', 'pal', 'nec', 'bar', 'dru', 'ass'];
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

const magicPrefixFilename = 'global\\excel\\MagicPrefix.txt';
const magicPrefixs = D2RMM.readTsv(magicPrefixFilename);
const magicSuffixFilename = 'global\\excel\\MagicSuffix.txt';
const magicSuffixs = D2RMM.readTsv(magicSuffixFilename);



magicPrefixs.rows.forEach((row) => {
  const prefixName = row['Name'];
  const frequency = row['frequency'];
  const mod1code = row['mod1code'];
  const itype1 = row['itype1'];
  const itype2 = row['itype2'];


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
        SOR_ITYPES.includes(itype1) | NEC_ITYPES.includes(itype1) | PAL_ITYPES.includes(itype1) |
        AMA_ITYPES.includes(itype1) | DRU_ITYPES.includes(itype1) | BAR_ITYPES.includes(itype1))
        row['frequency'] = 4;
    }
  }
});

magicSuffixs.rows.forEach((row) => {
  const suffixName = row['Name'];
  const frequency = row['frequency']
  const mod1code = row['mod1code']
  //frequency不等于0和null
  if (frequency != null && frequency != 0) {
    row['frequency'] = 1;
    if (GOOD_SUFFIX_CODES.includes(mod1code)) {
      row['frequency'] = 2;
    }
    if (GOOD_SUFFIX_NAMES.includes(suffixName)) {
      row['frequency'] = 3;
    }
  }
});


function displayModX(mod) { return `code:${mod.code}|param:${mod.param}|min:${mod.min}|max:${mod.max}`; }
function displayModifierBase(base) { return `Name:${base.Name}|version:${base.version}|spawnable:${base.spawnable}|group:${base.group}|frequency:${base.frequency}|classspecific:${base.classspecific}`; }
function displayModifier(magicModifier) {
  let result = '';
  result += "Base=" + displayModifierBase(magicModifier.base) + "\n";
  if (magicModifier.mod1 != null)
    result += "Mod1=" + displayModX(magicModifier.mod1) + "\n";
  if (magicModifier.mod2 != null)
    result += "Mod2=" + displayModX(magicModifier.mod2) + "\n";
  if (magicModifier.mod3 != null)
    result += "Mod3=" + displayModX(magicModifier.mod3) + "\n";
  return result;
}

class ModifierBase {
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

class MagicModifier {
  constructor(base, mod1, mod2, mod3) {
    this.base = base;
    this.mod1 = mod1;
    this.mod2 = mod2;
    this.mod3 = mod3;
  }
  static twoMods(base, mod1, mod2) {
    return new MagicModifier(base, mod1, mod2)
  }
  static oneMod(base, mod1) {
    return new MagicModifier(base, mod1, null)
  }
}

//group:1-45,MagicSuffix.txt
//group:101-142,MagicSuffix.txt
//new group id >2xx。例如：mana%、hp%、move3+balance3、str+dex、dmg%+ac%、res-fire+res-ltng、skilltab(3)+skilltab(4)*。

const manaPercent = new ModX('mana%', '', 6, 10);
const hpPercent = new ModX('hp%', '', 6, 10);
const skilltab3 = new ModX('skilltab', '3', 1, 3);
const skilltab4 = new ModX('skilltab', '4', 1, 3);
const skilltab5 = new ModX('skilltab', '5', 1, 3);
const resfire = new ModX('res-fire', '', 18, 36);
const resltng = new ModX('res-ltng', '', 18, 36);
const rescold = new ModX('res-cold', '', 18, 36);
const respois = new ModX('res-pois', '', 18, 36);

const manaPercentModifier = MagicModifier.oneMod(new ModifierBase("manaPercent", 201, ''), manaPercent);
const hpPercentModifier = MagicModifier.oneMod(new ModifierBase("hpPercent", 202, ''), hpPercent);
const sorDualTabA = MagicModifier.twoMods(new ModifierBase("sorDualTabA", 203, 'sor'), skilltab3, skilltab4);
const sorDualTabB = MagicModifier.twoMods(new ModifierBase("sorDualTabB", 203, 'sor'), skilltab3, skilltab5);
const sorDualTabC = MagicModifier.twoMods(new ModifierBase("sorDualTabC", 203, 'sor'), skilltab4, skilltab5);
const dualResFL = MagicModifier.twoMods(new ModifierBase("dualResFL", 204, ''), resfire, resltng);
const dualResFC = MagicModifier.twoMods(new ModifierBase("dualResFC", 204, ''), resfire, rescold);
const dualResFP = MagicModifier.twoMods(new ModifierBase("dualResFP", 204, ''), resfire, respois);
const dualResCL = MagicModifier.twoMods(new ModifierBase("dualResCL", 204, ''), rescold, resltng);
const dualResCP = MagicModifier.twoMods(new ModifierBase("dualResCP", 204, ''), rescold, respois);
const dualResLP = MagicModifier.twoMods(new ModifierBase("dualResLP", 204, ''), resltng, respois);

pushSuffix(magicSuffixs, MagicModifier.oneMod(new ModifierBase("manaPercent", 201, ''), manaPercent));
pushSuffix(magicSuffixs, hpPercentModifier);
pushSuffix(magicSuffixs, sorDualTabA);
pushSuffix(magicSuffixs, sorDualTabB);
pushSuffix(magicSuffixs, sorDualTabC);
pushSuffix(magicSuffixs, dualResFL);
pushSuffix(magicSuffixs, dualResFC);
pushSuffix(magicSuffixs, dualResFP);
pushSuffix(magicSuffixs, dualResCL);
pushSuffix(magicSuffixs, dualResCP);
pushSuffix(magicSuffixs, dualResLP);

function pushSuffix(magicModifiers, input) {
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
    itype1: 'weap',//TODO：一些角色技能词缀需要指定具体的装备类型。
    itype2: 'armo',
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

D2RMM.writeTsv(magicPrefixFilename, magicPrefixs);
D2RMM.writeTsv(magicSuffixFilename, magicSuffixs);
