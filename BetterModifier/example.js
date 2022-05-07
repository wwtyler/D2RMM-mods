
// const magicPrefixFilename = 'global\\excel\\MagicPrefix.txt';
// const magicSuffixFilename = 'global\\excel\\MagicSuffix.txt';

// const magicPrefixs = D2RMM.readTsv(magicPrefixFilename);
// const magicSuffixs = D2RMM.readTsv(magicPrefixFilename);
const magicPrefixs= {
  headers: [],
  rows: [],
};
const magicSuffixs = {
  headers: [],
  rows: [],
};

//itype1
const CHARM_ITYPES = ['scha', 'mcha', 'lcha'];
const JEW_ITYPES = ['jewl', 'amul', 'ring'];

const AMA_ITYPES = ['spea', 'glov', 'amul', 'circ'];
const SOR_ITYPES = ['orb', 'staff', 'circ', 'amul'];
const NEC_ITYPES = ['wand', 'head', 'amul', 'circ', 'knif'];
const PAL_ITYPES = ['scep', 'swor', 'mace', `shld`, `ashd`, `amul`, `circ`];
const BAR_ITYPES = ['phlm', 'weap', 'helm', 'amul'];
const DRU_ITYPES = ['club', 'pelt', 'amul', 'circ'];
const ASS_ITYPES = ['h2h', 'helm', 'amul', 'circ'];

const NORMAL_ITYPES = ['weap', `armo`];
const ARMO_ITYPES = ['tors', `helm`, `shld`, `belt`, `boot`];

//mod1code
const GOOD_PREFIX_CODES = ['dmg%', 'mana', 'res-all', 'res-fire', 'res-ltng', 'mag%',
  'sock',
];
const GOOD_PRE_SKILL_CODES = ['skilltab', 'ama', 'sor', 'pal', 'nec', 'bar', 'dru', 'ass'];
const GOOD_SUFFIX_CODES = ['hp', 'mana', 'move3', 'noheal', 'mag%',
  'red-dmg',
  'str',
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
  "of the Lamprey",//八目鳗 lifesteal
];

const GOOD_SUFFIX_NAMES = [
  "of Negation", "of Fire Quenching", "of the Dynamo", "of the Sirocco", "of Quickness", "of Warmth", "of Evisceration",
  "of Maiming", "of Carnage", "of Bliss",
  "of Performance", "of Transcendence",
  "of Perfection", "of Precision",
  "of Stability", "of Luck",
  "of Dexterity", "of Prosperity", "of Enlightenment",
  "of Wizardry", "of Sorcery",
  "of the Whale", "of the Colosuss", "of the Mammoth", "of Vita",
  "of Hope", 'of Atlus', "of the Titan",
  "of the Giant", "of Acceleration", "of Piercing",
  "Deflecting",//偏向 block 20 block 30 
  "of the Magus",//cast3 20
];

magicPrefixs.rows.forEach((row) => {
  const prefixName = row['Name'];
  const frequency = row['frequency'];
  const mod1code = row['mod1code'];
  const itype1 = row['itype1'];
  const itype2 = row['itype2'];

  //frequency不等于0和null
  if (frequency != null && frequency != 0) {
    row['frequency'] = 1;
    GOOD_PREFIX_CODES.forEach((goodCode) => {
      if (mod1code != null && mod1code == goodCode) {
        row['frequency'] = 3;
      }
    });
    GOOD_PREFIX_NAMES.forEach((goodName) => {
      if (prefixName != null && prefixName == goodName) {
        row['frequency'] = 4;
      }
    });
    GOOD_PRE_SKILL_CODES.forEach((skillCode) => {
      if (mod1code != null && mod1code == skillCode) {
        if (CHARM_ITYPES.includes(itype1) | ASS_ITYPES.includes(itype1) |
          SOR_ITYPES.includes(itype1) | NEC_ITYPES.includes(itype1) | PAL_ITYPES.includes(itype1) |
          AMA_ITYPES.includes(itype1) | DRU_ITYPES.includes(itype1) | BAR_ITYPES.includes(itype1))
          row['frequency'] = 5;
      }
    });
  }
});

magicSuffixs.rows.forEach((row) => {
  const suffixName = row['Name'];
  const frequency = row['frequency']
  const mod1code = row['mod1code']
  //frequency不等于0和null
  if (frequency != null && frequency != 0) {
    row['frequency'] = 1;
    GOOD_SUFFIX_CODES.forEach((goodCode) => {
      if (mod1code != null && mod1code == goodCode) {
        row['frequency'] = 3;
      }
    });
    GOOD_SUFFIX_NAMES.forEach((goodName) => {
      if (suffixName != null && suffixName == goodName) {
        row['frequency'] = 4;
      }
    });
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

const manaPercent = new ModX('mana%', '', 5, 8);
const hpPercent = new ModX('hp%', '', 5, 8);
const skilltab3 = new ModX('skilltab', '3', 1, 3);
const skilltab4 = new ModX('skilltab', '4', 1, 3);
const skilltab5 = new ModX('skilltab', '5', 1, 3);
const resfire = new ModX('res-fire', '', 8, 18);
const resltng = new ModX('res-ltng', '', 8, 18);
const rescold = new ModX('res-cold', '', 8, 18);
const respois = new ModX('res-pois', '', 8, 18);

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
    itype1: 'weap',
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