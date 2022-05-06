
const magicPrefixFilename = 'global\\excel\\MagicPrefix.txt';
const magicSuffixFilename = 'global\\excel\\MagicSuffix.txt';

const magicPrefixs = D2RMM.readTsv(magicPrefixFilename);
const magicSuffixs = D2RMM.readTsv(magicPrefixFilename);

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

pushSuffix(magicSuffixs, "", 'mana%', 5, 8);

const myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
const manaPercentMod = { mod1code: 'mana%', mod1param, mod1min: 5, mod1max: 8 };
const hpPercentMod = { mod1code: 'hp%', mod1param, mod1min: 5, mod1max: 8 };

class MagicModifier {
  // constructor(a,b,c,d){
  //           this.a = a
  //           this.b = b
  //           this.c = c
  //           this.d = d
  //       }
  //       static BAndCInstance(b,c){
  //           return new MyClass(null,b,c)
  //       }
  //       static BAndDInstance(b,d){
  //           return new MyClass(null,b, null,d)
  //       }
  constructor(Name, mod1) {
    this.Name = Name;
    this.mod1 = mod1;
  }
  constructor(Name, mod1, mod2) {
    this.Name = Name;
    this.mod1 = mod1;
    this.mod2 = mod2;
  }
}
class ModX {
  constructor(code, param, min, max) {
    this.code = code;
    this.param = param;
    this.min = min;
    this.max = max;
  }
  constructor(code, min, max) {
    this.code = code;
    this.param = param;
    this.min = min;
    this.max = max;
  }
}

// skilltab(3)+skilltab(4)*
const doubleSkilltabMod = {
  classspecific: 'sor',
  mod1code: 'skilltab', mod1param: 3, mod1min: 1, mod1max: 1,
  mod2code: 'skilltab', mod2param: 4, mod2min: 1, mod2max: 1,
};


const greatManaW = {
  Name: 'GreatManaW', mod1code: 'mana%', mod1min: 5, mod1max: 8
};


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

