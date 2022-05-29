

const mps = {
  headers: [],
  rows: [],
};
const mss = {
  headers: [],
  rows: [],
};
const ams = {
  headers: [],
  rows: [],
};

const MOD_PROPERTIES = {
  'skilltab': [
    ['RANK1', { code: 'skilltab', param: 3, min: 1, max: 3 }, { level: 80, levelreq: 55, rare: 0, classspecific: 'sor' }, ['lcha']],
    ['RANK2', { code: 'skilltab', param: 4, min: 1, max: 2 }, { level: 60, levelreq: 35, rare: 0, classspecific: 'sor' }, ['lcha']],
    ['RANK3', { code: 'skilltab', param: 5, min: 1, max: 1 }, { level: 40, levelreq: 15, rare: 0, classspecific: 'sor' }, ['lcha', 'mcha']]
  ],
  'skill-rand': [
    ['RANK1', { code: 'skill-rand', param: 4, min: 36, max: 60 }, { level: 80, levelreq: 55 }],
    ['RANK2', { code: 'skill-rand', param: 3, min: 36, max: 60 }, { level: 70, levelreq: 55 }]
  ],
  'cheap': [
    ['RANK1', { code: 'cheap', param: null, min: 3, max: 4 }, { level: 80, levelreq: 65 }],
    ['RANK2', { code: 'cheap', param: null, min: 2, max: 3 }, { level: 55, levelreq: 45 }],
    ['RANK3', { code: 'cheap', param: null, min: 1, max: 2 }, { level: 45, levelreq: 20 }]
  ],
  'dmg': [
    ['RANK1', { code: 'dmg', param: null, min: 10, max: 20 }, { level: 80, levelreq: 65 }]
  ]
};
const SOR_TIER_ITYPES = {
  tier1: ['orb', 'staf', 'amul', 'circ'],
  tier2: ['ring', 'glov'],
  tier3: ['jew', 'lcha'],
};
let modName = 'cheap';
let rankValue;
let mod1;
let modProperties = MOD_PROPERTIES[modName];

modProperties.forEach(([modRank, modXs, modBase, modItypes]) => {
  rankValue = modRank;
  mod1 = modXs;
  let min = mod1.min;   
   let itypes = modItypes == null ? SOR_TIER_ITYPES['tier1'] : modItypes;

  let itype4 = itypes[3];
  console.log(itypes);
  console.log(itypes[0]);
  console.log(itypes[1]);
  console.log(itypes[2]);
  console.log(itypes[3]);
  console.log(itypes[4]);
  console.log(itypes[5]);
  console.log(itypes[6]);
  console.log(itype4);

});




// function displayModX(mod) { return `code:${mod.code}|param:${mod.param}|min:${mod.min}|max:${mod.max}`; }
// function displayModBase(base) { return `Name:${base.Name}|version:${base.version}|spawnable:${base.spawnable}|group:${base.group}|frequency:${base.frequency}|classspecific:${base.classspecific}`; }
// function displayModifier(magicModifier) {
//   let result = '';
//   result += "Base=" + displayModBase(magicModifier.base) + "\n";
//   if (magicModifier.mod1 != null)
//     result += "Mod1=" + displayModX(magicModifier.mod1) + "\n";
//   if (magicModifier.mod2 != null)
//     result += "Mod2=" + displayModX(magicModifier.mod2) + "\n";
//   if (magicModifier.mod3 != null)
//     result += "Mod3=" + displayModX(magicModifier.mod3) + "\n";
//   return result;
// }

// class ModBase {
//   constructor(name, group, classspecific) {
//     this.Name = name;
//     this.version = 100;
//     this.spawnable = 1;
//     this.rare = 1;
//     this.frequency = 1;
//     this.group = group;
//     this.classspecific = classspecific;
//     this.level = 30;
//     this.levelreq = 20;
//     this.multiply = 0;
//     this.add = 0;
//   }
// }
// class ModX { constructor(code, param, min, max) { this.code = code; this.param = param; this.min = min; this.max = max; } }

// class Modifier {
//   constructor(base, mod1, mod2, mod3) {
//     this.base = base;
//     this.mod1 = mod1;
//     this.mod2 = mod2;
//     this.mod3 = mod3;
//   }
//   static twoMods(base, mod1, mod2) {
//     return new Modifier(base, mod1, mod2)
//   }
//   static oneMod(base, mod1) {
//     return new Modifier(base, mod1, null)
//   }

// }

// const manaPercent = new ModX('mana%', '', 5, 8);
// const hpPercent = new ModX('hp%', '', 5, 8);

// const skilltab0m = new ModX('skilltab', '0', 1, 3);//ama
// const skilltab1m = new ModX('skilltab', '1', 1, 3);//ama
// const skilltab2m = new ModX('skilltab', '2', 1, 3);//ama
// const skilltab3m = new ModX('skilltab', '3', 1, 3);//sor
// const skilltab4m = new ModX('skilltab', '4', 1, 3);//sor
// const skilltab5m = new ModX('skilltab', '5', 1, 3);//sor
// const skilltab6m = new ModX('skilltab', '6', 1, 3);//nec
// const skilltab7m = new ModX('skilltab', '7', 1, 3);//nec
// const skilltab8m = new ModX('skilltab', '8', 1, 3);//nec
// const skilltab9m = new ModX('skilltab', '9', 1, 3);//pal
// const skilltab10m = new ModX('skilltab', '10', 1, 3);//pal
// const skilltab11m = new ModX('skilltab', '11', 1, 3);//pal

// const skilltab0r = new ModX('skilltab', '0', 1, 2);//ama
// const skilltab1r = new ModX('skilltab', '1', 1, 2);//ama
// const skilltab2r = new ModX('skilltab', '2', 1, 2);//ama
// const skilltab3r = new ModX('skilltab', '3', 1, 2);//sor
// const skilltab4r = new ModX('skilltab', '4', 1, 2);//sor
// const skilltab5r = new ModX('skilltab', '5', 1, 2);//sor
// const skilltab6r = new ModX('skilltab', '6', 1, 2);//nec
// const skilltab7r = new ModX('skilltab', '7', 1, 2);//nec
// const skilltab8r = new ModX('skilltab', '8', 1, 2);//nec
// const skilltab9r = new ModX('skilltab', '9', 1, 2);//pal
// const skilltab10r = new ModX('skilltab', '10', 1, 2);//pal
// const skilltab11r = new ModX('skilltab', '11', 1, 2);//pal

// const resfire = new ModX('res-fire', '', 18, 36);
// const resltng = new ModX('res-ltng', '', 18, 36);
// const rescold = new ModX('res-cold', '', 18, 36);
// const respois = new ModX('res-pois', '', 18, 36);

// //group:1-45,MagicSuffix.txt
// //group:101-142,MagicSuffix.txt
// //new group id >2xx。例如：mana%、hp%、move3+balance3、str+dex、dmg%+ac%、res-fire+res-ltng、skilltab(3)+skilltab(4)*。
// // '*ID': (itemID = itemID + 1),
// // const maxGroup = Math.max(...mss.rows.map((row) => row.group)) + 1;
// // let groupIndex = 200 + 1;
// let groupID = Math.max(...mss.rows.map((row) => row['group']) );
// pushSuf(mss, setItypes(Modifier.oneMod(new ModBase("manaPercent", groupID++, ''), manaPercent), NORMAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.oneMod(new ModBase("hpPercent", groupID++, ''), hpPercent), NORMAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("hp+mana", groupID++, ''), hpPercent, manaPercent), NORMAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResFL", groupID, ''), resfire, resltng), NORMAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResFC", groupID, ''), resfire, rescold), NORMAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResFP", groupID, ''), resfire, respois), NORMAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResCL", groupID, ''), rescold, resltng), NORMAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResCP", groupID, ''), rescold, respois), NORMAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("dualResLP", groupID, ''), resltng, respois), NORMAL_ITYPES));

// pushSuf(mss, setItypes(noRare(Modifier.oneMod(new ModBase("allskills", groupID++, ''), new ModX('allskills', '', 2, 4))), NORMAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.oneMod(new ModBase("allskills", groupID, ''), new ModX('allskills', '', 1, 2)), NORMAL_ITYPES));

// //rare 专属  TODO mps groupID= 125
// //"[Class Skill Tab ID] = (Amazon = 0-2, Sorceress = 3-5, Necromancer = 6-8, Paladin = 9-11, Barbarian = 12-14, Druid = 15-17,  Assassin = 18-20)"
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("amaDualTabA", groupID++, 'ama'), skilltab0r, skilltab1r), AMA_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("amaDualTabB", groupID, 'ama'), skilltab0r, skilltab2r), AMA_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("amaDualTabC", groupID, 'ama'), skilltab1r, skilltab2r), AMA_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("sorDualTabA", groupID, 'sor'), skilltab3r, skilltab4r), SOR_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("sorDualTabB", groupID, 'sor'), skilltab3r, skilltab5r), SOR_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("sorDualTabC", groupID, 'sor'), skilltab4r, skilltab5r), SOR_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("necDualTabA", groupID, 'nec'), skilltab6r, skilltab7r), NEC_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("necDualTabB", groupID, 'nec'), skilltab6r, skilltab8r), NEC_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("necDualTabC", groupID, 'nec'), skilltab7r, skilltab8r), NEC_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("palDualTabA", groupID, 'pal'), skilltab9r, skilltab10r), PAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("palDualTabB", groupID, 'pal'), skilltab9r, skilltab11r), PAL_ITYPES));
// pushSuf(mss, setItypes(Modifier.twoMods(new ModBase("palDualTabC", groupID, 'pal'), skilltab10r, skilltab11r), PAL_ITYPES));
// //magic 专属
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("amaDualTabA", groupID, 'ama'), skilltab0m, skilltab1m)), AMA_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("amaDualTabB", groupID, 'ama'), skilltab0m, skilltab2m)), AMA_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("amaDualTabC", groupID, 'ama'), skilltab1m, skilltab2m)), AMA_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("sorDualTabA", groupID, 'sor'), skilltab3m, skilltab4m)), SOR_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("sorDualTabB", groupID, 'sor'), skilltab3m, skilltab5m)), SOR_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("sorDualTabC", groupID, 'sor'), skilltab4m, skilltab5m)), SOR_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("necDualTabA", groupID, 'nec'), skilltab6m, skilltab7m)), NEC_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("necDualTabB", groupID, 'nec'), skilltab6m, skilltab8m)), NEC_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("necDualTabC", groupID, 'nec'), skilltab7m, skilltab8m)), NEC_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("palDualTabA", groupID, 'pal'), skilltab9m, skilltab10m)), PAL_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("palDualTabB", groupID, 'pal'), skilltab9m, skilltab11m)), PAL_ITYPES));
// pushSuf(mss, setItypes(noRare(Modifier.twoMods(new ModBase("palDualTabC", groupID, 'pal'), skilltab10m, skilltab11m)), PAL_ITYPES));


// function noRare(modifier) {
//   if (modifier.base != null) {
//     modifier.base.rare = 0;
//   }
//   return modifier;
// }

// function setItypes(modInput, typeInput) {
//   for (let i = 0; i < typeInput.length && i < 7; i = i + 1) {
//     const itemValue = typeInput[i];
//     const itemIndex = `itype${i + 1}`;
//     modInput[`${itemIndex}`] = itemValue;
//   }
//   return modInput;
// }

// function pushSuf(magicModifiers, input) {
//   const inputItem1 = {
//     Name: input.base.Name,
//     version: input.base.version,
//     spawnable: input.base.spawnable,
//     rare: input.base.rare,
//     frequency: input.base.frequency,
//     group: input.base.group,
//     classspecific: input.base.classspecific,
//     level: input.base.level,
//     levelreq: input.base.levelreq,
//     multiply: input.base.multiply,
//     add: input.base.add,
//     mod1code: input.mod1.code,
//     mod1param: input.mod1.param,
//     mod1min: input.mod1.min,
//     mod1max: input.mod1.max,
//     itype1: input.itype1,
//     itype2: input.itype2,
//     itype3: input.itype3,
//     itype4: input.itype4,
//     itype5: input.itype5,
//     itype6: input.itype6,
//     itype7: input.itype7,
//   }
//   if (input.mod2 !== null) {
//     const inputItem2 = {
//       ...inputItem1,
//       mod2code: input.mod2.code,
//       mod2param: input.mod2.param,
//       mod2min: input.mod2.min,
//       mod2max: input.mod2.max,
//     }
//     magicModifiers.rows.push(inputItem2);
//   }
//   else {
//     magicModifiers.rows.push(inputItem1);
//   }
// }
