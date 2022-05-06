
// const magicPrefixFilename = 'global\\excel\\MagicPrefix.txt';
// const magicSuffixFilename = 'global\\excel\\MagicSuffix.txt';

// const magicPrefixs = D2RMM.readTsv(magicPrefixFilename);
// const magicSuffixs = D2RMM.readTsv(magicPrefixFilename);

function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
function listAllProperties(o) {
  let objectToInspect = o;
  let result = [];

  while(objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  }

  return result;
}


//itype1
const CHARM_ITYPES = ['scha', `mcha`, 'lcha'];
const JEW_ITYPES = ['jewl', `amul`, 'ring'];
const SOR_ITYPES = ['orb', 'staf', `circ`];
const PAL_ITYPES = ['scep', `circ`];
const NORMAL_ITYPES = ['weap', `armo`];
const ARMO_ITYPES = ['tors', `helm`, `shld`, `belt`, `boot`];

//group:1-45,MagicSuffix.txt
//group:101-142,MagicSuffix.txt
//new group id >2xx。例如：mana%、hp%、move3+balance3、str+dex、dmg%+ac%、res-fire+res-ltng、skilltab(3)+skilltab(4)*。
const newSuffix = {
  Name: 'Empty Suffix',
  version: 100,
  spawnable: 1,
  rare: 1,
  // group: 201,
  frequency: 1,
  level: 30,
  levelreq: 20,
  // classspecific: '',
  // class:'',
  // mod1code	mod1param	mod1min	mod1max
  // mod2code	mod2param	mod2min	mod2max
  // mod3code	mod3param	mod3min	mod3max
  // itype1	itype2	itype3	itype4	itype5	itype6	itype7
  // etype1	etype2	etype3	etype4	etype5
  multiply: 0,
  add: 0,
};

class modifierBase {
  constructor(name) {
    this.Name = name;
    this.version = 100;
    this.spawnable = 1;
    this.rare = 1;
    this.frequency = 1;
    this.group = 201;
    this.level = 30;
    this.levelreq = 20;
  }
}
class ModX {
  constructor(code, param, min, max) {
    this.code = code;
    this.param = param;
    this.min = min;
    this.max = max;
  }


}
class MagicModifier {
  constructor(base, mod1, mod2) {
    this.base = base;
    this.mod1 = mod1;
    this.mod2 = mod2;
    this.base.group++;
  }
  static twoMods(base, mod1, mod2) {
    return new MagicModifier(base, mod1, mod2)
  }
  static oneMod(base, mod1) {
    return new MagicModifier(base, mod1, null)
  }
}

function displayObj(obj) {
  let result='';
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += `${obj.Name}.${i} = ${obj[i]}|`;
    }
  }
  return result;
}

function displayModifier(magicModifier) {
  let result='';
  for (let i in magicModifier) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (magicModifier.hasOwnProperty(i)) {
      result += `${magicModifier.base.Name}`;
      result +=displayObj(magicModifier.base);
      result +=displayObj(magicModifier.mod1);
      result +=displayObj(magicModifier.mod2);

    }
  }
  // const result = `${magicModifier.base.Name} ${magicModifier.base.frequency} ${magicModifier.mod1.code}`;
  return result;
}

// { mod1code: 'mana%', mod1param, mod1min: 5, mod1max: 8 }
const manaPercentMod = new ModX('mana%', '', 5, 8);
const hpPercentMod = new ModX('hp%', '', 5, 8);
const manaPercentModifier = MagicModifier.oneMod(new modifierBase("manaPercentMod"), manaPercentMod);
const hpPercentModifier = MagicModifier.oneMod(new modifierBase("hpPercentMod"), hpPercentMod);

console.log(displayModifier(manaPercentModifier));
console.log(displayModifier(hpPercentModifier));

// skilltab(3)+skilltab(4)*
const doubleSkilltabMod = {
  classspecific: 'sor',
  mod1code: 'skilltab', mod1param: 3, mod1min: 1, mod1max: 1,
  mod2code: 'skilltab', mod2param: 4, mod2min: 1, mod2max: 1,
};


const greatManaW = {
  Name: 'GreatManaW', mod1code: 'mana%', mod1min: 5, mod1max: 8
};



// pushSuffix(magicSuffixs, "", 'mana%', 5, 8);

function pushSuffix(magicModifiers, greatManaW) {
  magicModifiers.rows.push({
    ...newSuffix,
    Name: greatManaW.Name,
    group: 201,
    frequency: 2,
    level: 30,
    levelreq: 20,
    mod1code: greatManaW.mod1code,
    mod1min: greatManaW.mod1min,
    mod1max: greatManaW.mod1max,
    itype1: 'weap',
    itype2: 'armo',
  });
}

