
// const magicPrefixFilename = 'global\\excel\\MagicPrefix.txt';
// const magicSuffixFilename = 'global\\excel\\MagicSuffix.txt';

// const magicPrefixs = D2RMM.readTsv(magicPrefixFilename);
// const magicSuffixs = D2RMM.readTsv(magicPrefixFilename);

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

//itype1
const CHARM_ITYPES = ['scha', `mcha`, 'lcha'];
const JEW_ITYPES = ['jewl', `amul`, 'ring'];
const SOR_ITYPES = ['orb', 'staf', `circ`];
const PAL_ITYPES = ['scep', `circ`];
const NORMAL_ITYPES = ['weap', `armo`];
const ARMO_ITYPES = ['tors', `helm`, `shld`, `belt`, `boot`];



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

const skilltab3 = new ModX('skilltab', '3', 1, 1);
const skilltab4 = new ModX('skilltab', '4', 1, 1);
const skilltab5 = new ModX('skilltab', '5', 1, 1);
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

console.log(displayModifier(dualResFL));
console.log(displayModifier(dualResFP));

pushSuffix(magicModifiers,MagicModifier.oneMod(new ModifierBase("manaPercent", 201, ''), manaPercent));
pushSuffix(magicModifiers,hpPercentModifier);
pushSuffix(magicModifiers,sorDualTabA);
pushSuffix(magicModifiers,sorDualTabB);
pushSuffix(magicModifiers,sorDualTabC);
pushSuffix(magicModifiers,dualResFL);
pushSuffix(magicModifiers,dualResFC);
pushSuffix(magicModifiers,dualResFP);
pushSuffix(magicModifiers,dualResCL);
pushSuffix(magicModifiers,dualResCP);
pushSuffix(magicModifiers,dualResLP);

function pushSuffix(magicModifiers, input) {
  magicModifiers.rows.push({
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
  });
}

