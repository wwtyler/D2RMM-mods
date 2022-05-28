

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
const MOD_CODE_ARRAYS = {
  'skill-rand': [
    ['RANK1', { code: 'skill-rand', param: 4, min: 36, max: 60 }],
    ['RANK2', { code: 'skill-rand', param: 4, min: 36, max: 60 }]
  ],
  'cheap': [
    ['RANK1', { code: 'cheap', param: null, min: 1, max: 4 }]
  ],
  'dmg': [
    ['RANK1', { code: 'dmg', param: null, min: 10, max: 20 }]
  ]
};
const SOR_TIER_ITYPES = {
  tier1: ['orb', 'staf', 'amul', 'circ'],
  tier2: ['ring', 'glov'],
  tier3: ['jew', 'lcha'],
};
let skillCode = 'skill-rand';
let rankValue ;
let mod1 ;
let skillArrays = MOD_CODE_ARRAYS[skillCode];
skillArrays.forEach(([rank, mod]) => {
  rankValue = rank;
  mod1 = mod;
  let min =mod1.min;
  console.log(min);
  console.log(mod.min);

});

let mod2 =MOD_CODE_ARRAYS[skillCode]['RANK2']
console.log(mod2.max);

