const amFilename = 'global\\excel\\automagic.txt';
const mpFileName = 'global\\excel\\MagicPrefix.txt';
const msFileName = 'global\\excel\\MagicSuffix.txt';
const ams = D2RMM.readTsv(amFilename);
const mps = D2RMM.readTsv(mpFileName);
const mss = D2RMM.readTsv(msFileName);

const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNameaffixesFilename = 'local\\lng\\strings\\item-nameaffixes.json';
const itemNameaffixes = D2RMM.readJson(itemNameaffixesFilename);
const itemNames = D2RMM.readJson(itemNamesFilename);

const RARE_AND_MAGIC = [
  ['rare', 1],
  ['magic', 0]
];

const M_ITS = {
  CHARM: ['scha', 'mcha', 'lcha'],
  CM1: ['scha'],
  CM2: ['mcha'],
  CM3: ['lcha'],
  CM32: ['mcha', 'lcha'],
  CM321: ['scha', 'mcha', 'lcha'],
  CM3_AND_JEW: ['lcha', 'jewl'],
  CM32_AND_JEW: ['mcha', 'lcha', 'jewl'],
  CM321_AND_JEW: ['scha', 'mcha', 'lcha', 'jewl'],
  JEW: ['jewl'],
  AMA: ['amaz', 'spea', 'miss', 'glov', 'amul', 'circ'],
  AMA_ONLY: ['amaz', 'spea', 'miss'],
  SOR: ['sorc', 'orb', 'staff', 'amul', 'circ', 'ring', 'glov'],
  SOR_ONLY: ['sorc', 'orb', 'staff'],
  SOR_UPP: ['orb', 'staff', 'amul', 'circ'],
  SOR_LOW: ['ring', 'glov', 'belt'],
  NEC: ['necr', 'wand', 'head', 'amul', 'circ', 'knif'],
  NEC_ONLY: ['necr', 'wand', 'head'],
  PAL: ['pala', 'scep', 'swor', 'mace', `shld`, `ashd`, `amul`, `circ`],
  PAL_ONLY: ['pala', 'scep', 'ashd'],
  BAR: ['barb', 'phlm', 'axe', 'tkni', 'spea', 'helm', 'amul'],
  BAR_ONLY: ['barb', 'phlm', 'tkni'],
  DRU: ['drui', 'club', 'pelt', 'amul', 'circ'],
  DRU_ONLY: ['drui', 'club', 'pelt'],
  ASS: ['assn', 'h2h', 'helm', 'amul', 'circ'],
  ASS_ONLY: ['assn', 'h2h'],
  NORMAL: ['weap', `armo`],
  ARMO: ['tors', `helm`, `shld`, `belt`, `boot`, 'glov'],
  WEAP: ['weap'],
  MELE_AND_MISS: ['mele', 'miss'],
  MELE: ['mele'],
  MISS: ['miss'],
  CASTER: ['orb', 'staff', 'scep', 'wand', 'head', 'knif', 'amul', 'ring', 'circ'],
  CASTER_UPP: ['orb', 'staff', 'scep', 'wand', 'head', 'amul', 'circ'],
  CASTER_LOW: ['orb', 'scep', 'head', 'knif', 'amul', 'ring']
};

const MOD_PROP = {
  ////////////////////////////////////////////////////////////////////////SUFFIX BEGIN////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'dmg': [
    ['R1', { code: 'dmg', min: 35, max: 50 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg', min: 25, max: 35 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg', min: 20, max: 25 }, { lvl: 40, lvlreq: 25, freq: 4 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg', min: 15, max: 20 }, { lvl: 25, lvlreq: 15, freq: 4 }, M_ITS.MELE_AND_MISS],
    ['R5', { code: 'dmg', min: 10, max: 15 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R6', { code: 'dmg', min: 5, max: 10 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg', min: 25, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'dmg', min: 20, max: 25 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'dmg', min: 15, max: 20 }, { lvl: 40, lvlreq: 25, freq: 4 }, M_ITS.CM3_AND_JEW],
    ['R4', { code: 'dmg', min: 10, max: 15 }, { lvl: 25, lvlreq: 15, freq: 4 }, M_ITS.CM3_AND_JEW],
    ['R5', { code: 'dmg', min: 5, max: 10 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.CM3_AND_JEW],
    ['R6', { code: 'dmg', min: 3, max: 5 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R1', { code: 'dmg', min: 15, max: 20 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.CM2],
    ['R2', { code: 'dmg', min: 10, max: 15 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.CM2],
    ['R3', { code: 'dmg', min: 5, max: 10 }, { lvl: 40, lvlreq: 25, freq: 4 }, M_ITS.CM2],
  ],
  // ['dmg%', MOD_TYPE.SUFFIX, '攻击%'],
  'dmg%': [
    ['R1', { code: 'dmg%', min: 80, max: 100 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg%', min: 60, max: 80 }, { lvl: 70, lvlreq: 50, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg%', min: 40, max: 60 }, { lvl: 55, lvlreq: 35, freq: 4 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg%', min: 30, max: 45 }, { lvl: 40, lvlreq: 25, freq: 4 }, M_ITS.MELE_AND_MISS],
    ['R5', { code: 'dmg%', min: 20, max: 35 }, { lvl: 25, lvlreq: 15, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R6', { code: 'dmg%', min: 10, max: 20 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg%', min: 30, max: 40 }, { lvl: 85, lvlreq: 65, freq: 3 }, M_ITS.CM3],
    ['R2', { code: 'dmg%', min: 20, max: 30 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'dmg%', min: 15, max: 25 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CM32],
    ['R4', { code: 'dmg%', min: 10, max: 20 }, { lvl: 40, lvlreq: 20, freq: 3 }, M_ITS.CM321],
    ['R5', { code: 'dmg%', min: 10, max: 15 }, { lvl: 20, lvlreq: 10, freq: 3 }, M_ITS.CM321],
    ['R6', { code: 'dmg%', min: 10, max: 10 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.CM321],
    ['R1', { code: 'dmg%', min: 50, max: 60 }, { lvl: 85, lvlreq: 65, freq: 3 }, M_ITS.JEW],
    ['R2', { code: 'dmg%', min: 40, max: 50 }, { lvl: 70, lvlreq: 50, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'dmg%', min: 30, max: 40 }, { lvl: 55, lvlreq: 45, freq: 3 }, M_ITS.JEW],
    ['R4', { code: 'dmg%', min: 20, max: 30 }, { lvl: 40, lvlreq: 30, freq: 3 }, M_ITS.JEW],
    ['R5', { code: 'dmg%', min: 10, max: 20 }, { lvl: 25, lvlreq: 15, freq: 3 }, M_ITS.JEW],
    ['R6', { code: 'dmg%', min: 5, max: 10 }, { lvl: 15, lvlreq: 5, freq: 3 }, M_ITS.JEW]
  ],
  // ['dmg/lvl', MOD_TYPE.SUFFIX, '攻击/等级'],
  'dmg/lvl': [
    ['R1', { code: 'dmg/lvl', min: 30, max: 30 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg/lvl', min: 25, max: 25 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg/lvl', min: 20, max: 20 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg/lvl', min: 15, max: 15 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg/lvl', min: 20, max: 20 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.CM3],
    ['R2', { code: 'dmg/lvl', min: 15, max: 15 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'dmg/lvl', min: 10, max: 10 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.CM321],
    ['R4', { code: 'dmg/lvl', min: 5, max: 5 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.CM321],
    ['R1', { code: 'dmg/lvl', min: 15, max: 15 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.JEW],
    ['R2', { code: 'dmg/lvl', min: 12, max: 12 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'dmg/lvl', min: 10, max: 10 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.JEW],
    ['R4', { code: 'dmg/lvl', min: 8, max: 8 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.JEW]
  ],
  // dmg-undead
  'dmg-undead': [
    ['R1', { code: 'dmg-undead', min: 350, max: 450 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg-undead', min: 250, max: 350 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg-undead', min: 150, max: 250 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg-undead', min: 100, max: 150 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg-undead', min: 100, max: 150 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-undead', min: 80, max: 100 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.CM32],
    ['R3', { code: 'dmg-undead', min: 60, max: 80 }, { lvl: 35, lvlreq: 20, freq: 2 }, M_ITS.CM321],
    ['R4', { code: 'dmg-undead', min: 40, max: 60 }, { lvl: 15, lvlreq: 10, freq: 2 }, M_ITS.CM321],
    ['R1', { code: 'dmg-undead', min: 100, max: 120 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'dmg-undead', min: 80, max: 100 }, { lvl: 40, lvlreq: 25, freq: 2 }, M_ITS.JEW],
    ['R1', { code: 'dmg-undead', min: 60, max: 80 }, { lvl: 20, lvlreq: 15, freq: 2 }, M_ITS.JEW],
  ],
  'dmg-demon': [
    ['R1', { code: 'dmg-demon', min: 300, max: 400 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg-demon', min: 200, max: 300 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg-demon', min: 150, max: 200 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg-demon', min: 100, max: 150 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg-demon', min: 100, max: 120 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-demon', min: 80, max: 100 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.CM32],
    ['R3', { code: 'dmg-demon', min: 60, max: 80 }, { lvl: 35, lvlreq: 20, freq: 2 }, M_ITS.CM321],
    ['R4', { code: 'dmg-demon', min: 50, max: 60 }, { lvl: 15, lvlreq: 10, freq: 2 }, M_ITS.CM321],
    ['R1', { code: 'dmg-demon', min: 80, max: 100 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'dmg-demon', min: 60, max: 80 }, { lvl: 40, lvlreq: 25, freq: 2 }, M_ITS.JEW],
    ['R1', { code: 'dmg-demon', min: 50, max: 60 }, { lvl: 20, lvlreq: 15, freq: 2 }, M_ITS.JEW],
  ],
  // ['crush', MOD_TYPE.SUFFIX, '破甲'],
  'crush': [
    ['R1', { code: 'crush', min: 30, max: 40 }, { lvl: 85, lvlreq: 65, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'crush', min: 20, max: 30 }, { lvl: 60, lvlreq: 45, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'crush', min: 15, max: 20 }, { lvl: 35, lvlreq: 15, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'crush', min: 10, max: 15 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS]
  ],
  // ['reduce-ac', MOD_TYPE.SUFFIX, '防御穿透'],
  // ['deadly', MOD_TYPE.SUFFIX, '致命攻击'],
  // ['openwounds', MOD_TYPE.SUFFIX, '开放伤口'],
  'reduce-ac': [
    ['R1', { code: 'reduce-ac', min: 33, max: 33 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'reduce-ac', min: 25, max: 25 }, { lvl: 60, lvlreq: 45, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'reduce-ac', min: 20, max: 20 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'reduce-ac', min: 15, max: 15 }, { lvl: 15, lvlreq: 10, freq: 4 }, M_ITS.MELE_AND_MISS]

  ],
  'deadly': [
    ['R1', { code: 'deadly', min: 35, max: 45 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'deadly', min: 25, max: 35 }, { lvl: 60, lvlreq: 45, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'deadly', min: 15, max: 25 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'deadly', min: 10, max: 15 }, { lvl: 15, lvlreq: 10, freq: 4 }, M_ITS.MELE_AND_MISS]

  ],
  'openwounds': [
    ['R1', { code: 'openwounds', min: 30, max: 40 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'openwounds', min: 20, max: 30 }, { lvl: 60, lvlreq: 45, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'openwounds', min: 15, max: 20 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'openwounds', min: 10, max: 15 }, { lvl: 15, lvlreq: 10, freq: 4 }, M_ITS.MELE_AND_MISS]
  ],
  // ignore-ac
  //TODO

  // ['dmg-fire', MOD_TYPE.SUFFIX, '火焰伤害'],
  // ['dmg-ltng', MOD_TYPE.SUFFIX, '电击伤害'],
  // ['dmg-cold', MOD_TYPE.SUFFIX, '冰冷伤害'],
  // ['dmg-pois', MOD_TYPE.SUFFIX, '毒素伤害'],
  // ['dmg-mag', MOD_TYPE.SUFFIX, '魔法伤害'],
  'dmg-fire': [
    ['R1', { code: 'dmg-fire', min: 250, max: 350 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg-fire', min: 150, max: 250 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg-fire', min: 100, max: 150 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg-fire', min: 60, max: 100 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R5', { code: 'dmg-fire', min: 30, max: 60 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg-fire', min: 120, max: 150 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-fire', min: 90, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'dmg-fire', min: 60, max: 90 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'dmg-fire', min: 30, max: 60 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_AND_JEW],
    ['R5', { code: 'dmg-fire', min: 10, max: 30 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.CM321_AND_JEW]
  ],
  'dmg-ltng': [
    ['R1', { code: 'dmg-ltng', min: 250, max: 350 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg-ltng', min: 150, max: 250 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg-ltng', min: 100, max: 150 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg-ltng', min: 60, max: 100 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R5', { code: 'dmg-ltng', min: 30, max: 60 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg-ltng', min: 120, max: 150 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-ltng', min: 90, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'dmg-ltng', min: 60, max: 90 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'dmg-ltng', min: 30, max: 60 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_AND_JEW],
    ['R5', { code: 'dmg-ltng', min: 10, max: 30 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.CM321_AND_JEW]
  ],
  'dmg-cold': [
    ['R1', { code: 'dmg-cold', param: 50, min: 250, max: 350 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg-cold', param: 50, min: 150, max: 250 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg-cold', param: 50, min: 100, max: 150 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg-cold', param: 50, min: 60, max: 100 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R5', { code: 'dmg-cold', param: 50, min: 30, max: 60 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg-cold', param: 50, min: 120, max: 150 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-cold', param: 50, min: 90, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'dmg-cold', param: 50, min: 60, max: 90 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'dmg-cold', param: 50, min: 30, max: 60 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_AND_JEW],
    ['R5', { code: 'dmg-cold', param: 50, min: 10, max: 30 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.CM321_AND_JEW]
  ],
  'dmg-pois': [
    ['R1', { code: 'dmg-pois', param: 75, min: 350, max: 450 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg-pois', param: 75, min: 250, max: 350 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg-pois', param: 75, min: 150, max: 250 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg-pois', param: 75, min: 100, max: 150 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R5', { code: 'dmg-pois', param: 75, min: 50, max: 100 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg-pois', param: 75, min: 350, max: 450 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-pois', param: 75, min: 250, max: 350 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'dmg-pois', param: 75, min: 150, max: 250 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'dmg-pois', param: 75, min: 100, max: 150 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_AND_JEW],
    ['R5', { code: 'dmg-pois', param: 75, min: 50, max: 100 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.CM321_AND_JEW]
  ],
  'dmg-mag': [
    ['R1', { code: 'dmg-mag', min: 250, max: 350 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R2', { code: 'dmg-mag', min: 150, max: 250 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.MELE_AND_MISS],
    ['R3', { code: 'dmg-mag', min: 100, max: 150 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R4', { code: 'dmg-mag', min: 60, max: 100 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R5', { code: 'dmg-mag', min: 30, max: 60 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_AND_MISS],
    ['R1', { code: 'dmg-mag', min: 120, max: 150 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-mag', min: 90, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'dmg-mag', min: 60, max: 90 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'dmg-mag', min: 30, max: 60 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_AND_JEW],
    ['R5', { code: 'dmg-mag', min: 10, max: 30 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.CM321_AND_JEW]
  ],

  // ['sor-fire', MOD_TYPE.SUFFIX, '火系技能'],
  // ['sor-ltng', MOD_TYPE.SUFFIX, '电系技能'],
  // ['sor-cold', MOD_TYPE.SUFFIX, '冰系技能'],
  // ['sor-mastery', MOD_TYPE.SUFFIX, '法术大师'],
  // skill	41	3	3	skill	36	3	3	skill	37	3	3	 //叶子  增加技能等级，但需要角色已经学会
  'sor-fire': [
    ['R1', { code: 'skill', param: 51, min: 3, max: 4, code2: 'skill', param2: 36, min2: 3, max2: 4, code3: 'skill', param3: 47, min3: 3, max3: 4 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skill', param: 51, min: 2, max: 3, code2: 'skill', param2: 36, min2: 2, max2: 3, code3: 'skill', param3: 47, min3: 2, max3: 3 }, { lvl: 55, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['R3', { code: 'skill', param: 51, min: 1, max: 3, code2: 'skill', param2: 36, min2: 1, max2: 3, code3: 'skill', param3: 47, min3: 1, max3: 3 }, { lvl: 35, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY]
  ],
  'sor-ltng': [
    ['R1', { code: 'skill', param: 44, min: 3, max: 4, code2: 'skill', param2: 49, min2: 3, max2: 4, code3: 'skill', param3: 53, min3: 3, max3: 4 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skill', param: 44, min: 2, max: 3, code2: 'skill', param2: 49, min2: 2, max2: 3, code3: 'skill', param3: 53, min3: 2, max3: 3 }, { lvl: 55, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['R3', { code: 'skill', param: 44, min: 1, max: 3, code2: 'skill', param2: 49, min2: 1, max2: 3, code3: 'skill', param3: 53, min3: 1, max3: 3 }, { lvl: 35, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY]
  ],
  'sor-cold': [
    ['R1', { code: 'skill', param: 39, min: 3, max: 4, code2: 'skill', param2: 45, min2: 3, max2: 4, code3: 'skill', param3: 46, min3: 3, max3: 4 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skill', param: 39, min: 2, max: 3, code2: 'skill', param2: 45, min2: 2, max2: 3, code3: 'skill', param3: 46, min3: 2, max3: 3 }, { lvl: 55, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['R3', { code: 'skill', param: 39, min: 1, max: 3, code2: 'skill', param2: 45, min2: 1, max2: 3, code3: 'skill', param3: 46, min3: 1, max3: 3 }, { lvl: 35, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY]
  ],
  'sor-mastery': [
    ['R1', { code: 'skill', param: 61, min: 3, max: 4, code2: 'skill', param2: 63, min2: 3, max2: 4, code3: 'skill', param3: 65, min3: 3, max3: 4 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skill', param: 61, min: 2, max: 3, code2: 'skill', param2: 63, min2: 2, max2: 3, code3: 'skill', param3: 65, min3: 2, max3: 3 }, { lvl: 55, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['R3', { code: 'skill', param: 61, min: 1, max: 2, code2: 'skill', param2: 63, min2: 1, max2: 2, code3: 'skill', param3: 65, min3: 1, max3: 2 }, { lvl: 35, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY]
  ],

  'skill-rand': [
    ['R1', { code: 'skill-rand', param: 4, min: 36, max: 60 }, { lvl: 80, lvlreq: 55, freq: 3, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skill-rand', param: 3, min: 36, max: 60 }, { lvl: 60, lvlreq: 35, freq: 4, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R3', { code: 'skill-rand', param: 2, min: 36, max: 60 }, { lvl: 40, lvlreq: 15, freq: 5, clz: 'sor' }, M_ITS.SOR_ONLY]
  ],
  'dual-skilltab': [
    //AMA
    ['R1', { code: 'skilltab', param: 0, min: 1, max: 2, code2: 'skilltab', param2: 1, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R1', { code: 'skilltab', param: 0, min: 1, max: 2, code2: 'skilltab', param2: 2, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R1', { code: 'skilltab', param: 1, min: 1, max: 2, code2: 'skilltab', param2: 2, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R2', { code: 'skilltab', param: 0, min: 1, max: 1, code2: 'skilltab', param2: 1, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R2', { code: 'skilltab', param: 0, min: 1, max: 1, code2: 'skilltab', param2: 2, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R2', { code: 'skilltab', param: 1, min: 1, max: 1, code2: 'skilltab', param2: 2, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    //SOR
    ['R1', { code: 'skilltab', param: 3, min: 1, max: 2, code2: 'skilltab', param2: 4, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R1', { code: 'skilltab', param: 3, min: 1, max: 2, code2: 'skilltab', param2: 5, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R1', { code: 'skilltab', param: 4, min: 1, max: 2, code2: 'skilltab', param2: 5, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skilltab', param: 3, min: 1, max: 1, code2: 'skilltab', param2: 4, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skilltab', param: 3, min: 1, max: 1, code2: 'skilltab', param2: 5, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skilltab', param: 4, min: 1, max: 1, code2: 'skilltab', param2: 5, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    //NEC
    ['R1', { code: 'skilltab', param: 6, min: 1, max: 2, code2: 'skilltab', param2: 7, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R1', { code: 'skilltab', param: 6, min: 1, max: 2, code2: 'skilltab', param2: 8, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R1', { code: 'skilltab', param: 7, min: 1, max: 2, code2: 'skilltab', param2: 8, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R2', { code: 'skilltab', param: 6, min: 1, max: 1, code2: 'skilltab', param2: 7, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R2', { code: 'skilltab', param: 6, min: 1, max: 1, code2: 'skilltab', param2: 8, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R2', { code: 'skilltab', param: 7, min: 1, max: 1, code2: 'skilltab', param2: 8, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    //PAL
    ['R1', { code: 'skilltab', param: 9, min: 1, max: 2, code2: 'skilltab', param2: 10, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R1', { code: 'skilltab', param: 9, min: 1, max: 2, code2: 'skilltab', param2: 11, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R1', { code: 'skilltab', param: 10, min: 1, max: 2, code2: 'skilltab', param2: 11, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 45, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R2', { code: 'skilltab', param: 9, min: 1, max: 1, code2: 'skilltab', param2: 10, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R2', { code: 'skilltab', param: 9, min: 1, max: 1, code2: 'skilltab', param2: 11, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R2', { code: 'skilltab', param: 10, min: 1, max: 1, code2: 'skilltab', param2: 11, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY]
    //TODO
  ],

  // ['extra-fire', MOD_TYPE.SUFFIX, '额外火伤'],
  // ['extra-cold', MOD_TYPE.SUFFIX, '额外冰伤'],
  // ['extra-ltng', MOD_TYPE.SUFFIX, '额外电伤'],
  // ['extra-pois', MOD_TYPE.SUFFIX, '额外毒伤'],
  // ['pierce-fire', MOD_TYPE.SUFFIX, '减火抗'],
  // ['pierce-cold', MOD_TYPE.SUFFIX, '减冰抗'],
  // ['pierce-ltng', MOD_TYPE.SUFFIX, '减电抗'],
  // ['pierce-pois', MOD_TYPE.SUFFIX, '减毒抗'],
  'extra-fire': [
    ['R1', { code: 'extra-fire', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
    ['R2', { code: 'extra-fire', min: 5, max: 8 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.CASTER_UPP],
    ['R3', { code: 'extra-fire', min: 5, max: 8 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CASTER_LOW],
    ['R4', { code: 'extra-fire', min: 3, max: 5 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CASTER_LOW]
  ],
  'extra-cold': [
    ['R1', { code: 'extra-cold', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
    ['R2', { code: 'extra-cold', min: 5, max: 8 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.CASTER_UPP],
    ['R3', { code: 'extra-cold', min: 5, max: 8 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CASTER_LOW],
    ['R4', { code: 'extra-cold', min: 3, max: 5 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CASTER_LOW]
  ],
  'extra-ltng': [
    ['R1', { code: 'extra-ltng', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
    ['R2', { code: 'extra-ltng', min: 5, max: 8 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.CASTER_UPP],
    ['R3', { code: 'extra-ltng', min: 5, max: 8 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CASTER_LOW],
    ['R4', { code: 'extra-ltng', min: 3, max: 5 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CASTER_LOW]
  ],
  'extra-pois': [
    ['R1', { code: 'extra-pois', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
    ['R2', { code: 'extra-pois', min: 5, max: 8 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.CASTER_UPP],
    ['R3', { code: 'extra-pois', min: 5, max: 8 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CASTER_LOW],
    ['R4', { code: 'extra-pois', min: 3, max: 5 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CASTER_LOW]
  ],
  'pierce-fire': [
    ['R1', { code: 'pierce-fire', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
    ['R2', { code: 'pierce-fire', min: 5, max: 8 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.CASTER_UPP],
    ['R3', { code: 'pierce-fire', min: 5, max: 8 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CASTER_LOW],
    ['R4', { code: 'pierce-fire', min: 3, max: 5 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CASTER_LOW]
  ],
  'pierce-cold': [
    ['R1', { code: 'pierce-cold', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
    ['R2', { code: 'pierce-cold', min: 5, max: 8 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.CASTER_UPP],
    ['R3', { code: 'pierce-cold', min: 5, max: 8 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CASTER_LOW],
    ['R4', { code: 'pierce-cold', min: 3, max: 5 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CASTER_LOW]
  ],
  'pierce-ltng': [
    ['R1', { code: 'pierce-ltng', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
    ['R2', { code: 'pierce-ltng', min: 5, max: 8 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.CASTER_UPP],
    ['R3', { code: 'pierce-ltng', min: 5, max: 8 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CASTER_LOW],
    ['R4', { code: 'pierce-ltng', min: 3, max: 5 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CASTER_LOW]
  ],
  'pierce-pois': [
    ['R1', { code: 'pierce-pois', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
    ['R2', { code: 'pierce-pois', min: 5, max: 8 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.CASTER_UPP],
    ['R3', { code: 'pierce-pois', min: 5, max: 8 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CASTER_LOW],
    ['R4', { code: 'pierce-pois', min: 3, max: 5 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CASTER_LOW]
  ],
  ////////////////////////////////////////////////////////////////////////SUFFIX END////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////PREFIX BEGIN////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ['cast2', MOD_TYPE.PREFIX, '施法速度'],
  // ['swing2', MOD_TYPE.PREFIX, '攻击速度'],
  // ['balance2', MOD_TYPE.PREFIX, '打击恢复速度'],
  // ['move2', MOD_TYPE.PREFIX, '移动速度'],
  'cast2': [
    ['R1-1', { code: 'cast2', min: 20, max: 30 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1-2', { code: 'cast2', min: 15, max: 25 }, { lvl: 75, lvlreq: 45, freq: 3 }, M_ITS.CASTER_UPP],
    ['R2-1', { code: 'cast2', min: 15, max: 20 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.CASTER_UPP],
    ['R2-2', { code: 'cast2', min: 10, max: 15 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3-1', { code: 'cast2', min: 10, max: 15 }, { lvl: 40, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3-2', { code: 'cast2', min: 10, max: 15 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R3-3', { code: 'cast2', min: 10, max: 15 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R4', { code: 'cast2', min: 10, max: 10 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.JEW.concat(M_ITS.CM3)]
  ],
  'swing2': [
    ['R1', { code: 'swing2', min: 20, max: 30 }, { lvl: 75, lvlreq: 45, freq: 4 }, M_ITS.MELE],
    ['R2', { code: 'swing2', min: 15, max: 20 }, { lvl: 55, lvlreq: 25, freq: 5 }, M_ITS.MELE.concat(M_ITS.JEW)],
    ['R3', { code: 'swing2', min: 10, max: 15 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.MELE.concat(M_ITS.JEW).concat(M_ITS.CM3)]
  ],
  'move2': [
    ['R1', { code: 'move2', min: 25, max: 40 }, { lvl: 65, lvlreq: 45, freq: 4 }, [`shld`, `belt`, `boot`]],
    ['R2', { code: 'move2', min: 15, max: 30 }, { lvl: 50, lvlreq: 25, freq: 5 }, [`shld`, `belt`, `boot`].concat(M_ITS.JEW).concat(M_ITS.CM3)],
    ['R3', { code: 'move2', min: 10, max: 20 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],
  'balance2': [
    ['R1', { code: 'balance2', min: 25, max: 40 }, { lvl: 65, lvlreq: 45, freq: 4 }, M_ITS.NORMAL],
    ['R2', { code: 'balance2', min: 15, max: 30 }, { lvl: 50, lvlreq: 25, freq: 5 }, M_ITS.NORMAL.concat(M_ITS.JEW).concat(M_ITS.CM3)],
    ['R3', { code: 'balance2', min: 10, max: 20 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],

  // ['hp-mana%', MOD_TYPE.SUFFIX, '血法双加'],
  // ['super-hp', MOD_TYPE.PREFIX, '大量HP'],
  // ['super-hp%', MOD_TYPE.PREFIX, '大量HP%'],
  // ['super-mana', MOD_TYPE.PREFIX, '大量MANA'],
  // ['super-mana%', MOD_TYPE.PREFIX, '大量MANA%'],
  // ['lvl-hp', MOD_TYPE.PREFIX, 'HP/lvl'],
  // ['lvl-mana', MOD_TYPE.PREFIX, 'MANA/lvl'],
  'hp-mana%': [
    ['R1', { code: 'mana%', min: 12, max: 15, code2: 'hp%', min2: 6, max2: 15 }, { lvl: 75, lvlreq: 60, freq: 1 }, M_ITS.NORMAL],
    ['R2', { code: 'mana%', min: 10, max: 12, code2: 'hp%', min2: 4, max2: 12 }, { lvl: 65, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'mana%', min: 8, max: 10, code2: 'hp%', min2: 3, max2: 10 }, { lvl: 45, lvlreq: 30, freq: 2 }, M_ITS.NORMAL],
    ['R4', { code: 'mana%', min: 6, max: 8, code2: 'hp%', min2: 6, max2: 8 }, { lvl: 25, lvlreq: 20, freq: 3 }, M_ITS.NORMAL],
    ['R5', { code: 'mana%', min: 4, max: 6, code2: 'hp%', min2: 4, max2: 6 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.NORMAL],
    ['R1', { code: 'mana%', min: 10, max: 12, code2: 'hp%', min2: 4, max2: 12 }, { lvl: 65, lvlreq: 50, freq: 1 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'mana%', min: 8, max: 10, code2: 'hp%', min2: 3, max2: 10 }, { lvl: 45, lvlreq: 35, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'mana%', min: 6, max: 8, code2: 'hp%', min2: 6, max2: 8 }, { lvl: 35, lvlreq: 25, freq: 2 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'mana%', min: 4, max: 6, code2: 'hp%', min2: 4, max2: 6 }, { lvl: 25, lvlreq: 15, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R5', { code: 'mana%', min: 3, max: 4, code2: 'hp%', min2: 3, max2: 4 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.CM321_AND_JEW]
  ],
  'super-hp': [
    ['R1', { code: 'hp', min: 80, max: 100 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'hp', min: 60, max: 80 }, { lvl: 65, lvlreq: 40, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'hp', min: 50, max: 60 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R4', { code: 'hp', min: 35, max: 50 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.NORMAL],
    ['R5', { code: 'hp', min: 20, max: 35 }, { lvl: 20, lvlreq: 10, freq: 4 }, M_ITS.NORMAL],
    ['R6', { code: 'hp', min: 10, max: 20 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL],
    ['R1', { code: 'hp', min: 60, max: 80 }, { lvl: 65, lvlreq: 40, freq: 3 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'hp', min: 50, max: 60 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'hp', min: 35, max: 50 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'hp', min: 20, max: 35 }, { lvl: 20, lvlreq: 10, freq: 4 }, M_ITS.CM321_AND_JEW],
    ['R5', { code: 'hp', min: 10, max: 20 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.CM321],
  ],
  'super-hp%': [
    ['R1', { code: 'hp%', min: 15, max: 18 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'hp%', min: 10, max: 15 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM3_AND_JEW)],
    ['R3', { code: 'hp%', min: 6, max: 12 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R4', { code: 'hp%', min: 6, max: 8 }, { lvl: 20, lvlreq: 10, freq: 5 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R5', { code: 'hp%', min: 3, max: 6 }, { lvl: 15, lvlreq: 5, freq: 5 }, M_ITS.CM321_AND_JEW],
  ],
  'super-mana': [
    ['R1', { code: 'mana', min: 120, max: 150 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mana', min: 90, max: 120 }, { lvl: 65, lvlreq: 40, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'mana', min: 75, max: 90 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R4', { code: 'mana', min: 50, max: 75 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.NORMAL],
    ['R5', { code: 'mana', min: 30, max: 50 }, { lvl: 20, lvlreq: 10, freq: 4 }, M_ITS.NORMAL],
    ['R6', { code: 'mana', min: 20, max: 30 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL],
    ['R1', { code: 'mana', min: 90, max: 120 }, { lvl: 65, lvlreq: 40, freq: 3 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'mana', min: 75, max: 90 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'mana', min: 50, max: 75 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'mana', min: 30, max: 50 }, { lvl: 20, lvlreq: 10, freq: 4 }, M_ITS.CM321_AND_JEW],
    ['R5', { code: 'mana', min: 20, max: 30 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.CM321],
  ],
  'super-mana%': [
    ['R1', { code: 'mana%', min: 18, max: 25 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mana%', min: 15, max: 20 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM3_AND_JEW)],
    ['R3', { code: 'mana%', min: 12, max: 18 }, { lvl: 35, lvlreq: 15, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R4', { code: 'mana%', min: 8, max: 12 }, { lvl: 20, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R5', { code: 'mana%', min: 3, max: 8 }, { lvl: 15, lvlreq: 5, freq: 3 }, M_ITS.CM321_AND_JEW],
  ],
  'lvl-hp': [
    ['R1', { code: 'hp/lvl', min: 12, max: 15 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'hp/lvl', min: 10, max: 12 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM3_AND_JEW)],
    ['R3', { code: 'hp/lvl', min: 10, max: 10 }, { lvl: 35, lvlreq: 15, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R4', { code: 'hp/lvl', min: 8, max: 8 }, { lvl: 20, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R5', { code: 'hp/lvl', min: 6, max: 6 }, { lvl: 15, lvlreq: 5, freq: 3 }, M_ITS.CM321_AND_JEW],
  ],
  'lvl-mana': [
    ['R1', { code: 'mana/lvl', min: 12, max: 15 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mana/lvl', min: 10, max: 12 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM3_AND_JEW)],
    ['R3', { code: 'mana/lvl', min: 10, max: 10 }, { lvl: 35, lvlreq: 15, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R4', { code: 'mana/lvl', min: 8, max: 8 }, { lvl: 20, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R5', { code: 'mana/lvl', min: 6, max: 6 }, { lvl: 15, lvlreq: 5, freq: 3 }, M_ITS.CM321_AND_JEW],
  ],
  // ['all-stats', MOD_TYPE.PREFIX, '全属性'],
  // ['super-str', MOD_TYPE.PREFIX, '大量力量'],
  // ['super-vit', MOD_TYPE.PREFIX, '大量体能'],
  // ['super-dex', MOD_TYPE.PREFIX, '大量敏捷'],
  // ['super-enr', MOD_TYPE.PREFIX, '大量能量'],
  'all-stats': [
    ['R1', { code: 'all-stats', min: 15, max: 15 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'all-stats', min: 10, max: 12 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_AND_JEW)],
    ['R3', { code: 'all-stats', min: 6, max: 10 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R4', { code: 'all-stats', min: 5, max: 8 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R5', { code: 'all-stats', min: 3, max: 5 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_AND_JEW)]
  ],
  'super-str': [
    ['R1', { code: 'str', min: 20, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'str', min: 16, max: 24 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_AND_JEW)],
    ['R3', { code: 'str', min: 12, max: 16 }, { lvl: 40, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R4', { code: 'str', min: 8, max: 12 }, { lvl: 25, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R5', { code: 'str', min: 5, max: 8 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_AND_JEW)]
  ],
  'super-vit': [
    ['R1', { code: 'vit', min: 20, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'vit', min: 16, max: 24 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_AND_JEW)],
    ['R3', { code: 'vit', min: 12, max: 16 }, { lvl: 40, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R4', { code: 'vit', min: 8, max: 12 }, { lvl: 25, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R5', { code: 'vit', min: 5, max: 8 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_AND_JEW)]
  ],
  'super-dex': [
    ['R1', { code: 'dex', min: 20, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'dex', min: 16, max: 24 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_AND_JEW)],
    ['R3', { code: 'dex', min: 12, max: 16 }, { lvl: 40, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R4', { code: 'dex', min: 8, max: 12 }, { lvl: 25, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R5', { code: 'dex', min: 5, max: 8 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_AND_JEW)]
  ],
  'super-enr': [
    ['R1', { code: 'enr', min: 20, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'enr', min: 16, max: 24 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_AND_JEW)],
    ['R3', { code: 'enr', min: 12, max: 16 }, { lvl: 40, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R4', { code: 'enr', min: 8, max: 12 }, { lvl: 25, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_AND_JEW)],
    ['R5', { code: 'enr', min: 5, max: 8 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_AND_JEW)]
  ],

  // ['res-all', MOD_TYPE.PREFIX, '全抗性'],
  // ['res-fire', MOD_TYPE.PREFIX, '火焰抗性'],
  // ['res-cold', MOD_TYPE.PREFIX, '冰冷抗性'],
  // ['res-ltng', MOD_TYPE.PREFIX, '闪电抗性'],
  // ['res-pois', MOD_TYPE.PREFIX, '毒素抗性'],
  // ['dual-res', MOD_TYPE.SUFFIX, '双系抵抗'],
  'res-all': [
    ['R1', { code: 'res-all', min: 20, max: 24 }, { lvl: 75, lvlreq: 55, freq: 1 }, M_ITS.NORMAL],
    ['R2', { code: 'res-all', min: 16, max: 20 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-all', min: 12, max: 16 }, { lvl: 45, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R4', { code: 'res-all', min: 10, max: 12 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.NORMAL],
    ['R5', { code: 'res-all', min: 8, max: 10 }, { lvl: 15, lvlreq: 7, freq: 3 }, M_ITS.NORMAL],
    ['R1', { code: 'res-all', min: 15, max: 18 }, { lvl: 75, lvlreq: 55, freq: 1 }, M_ITS.CM3],
    ['R2', { code: 'res-all', min: 12, max: 15 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'res-all', min: 9, max: 12 }, { lvl: 45, lvlreq: 25, freq: 2 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'res-all', min: 6, max: 9 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R5', { code: 'res-all', min: 3, max: 6 }, { lvl: 15, lvlreq: 7, freq: 3 }, M_ITS.CM321]
  ],
  'res-fire': [
    ['R1', { code: 'res-fire', min: 30, max: 48 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-fire', min: 20, max: 40 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'res-fire', min: 16, max: 30 }, { lvl: 35, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R4', { code: 'res-fire', min: 12, max: 20 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.NORMAL],
    ['R1', { code: 'res-fire', min: 20, max: 36 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'res-fire', min: 20, max: 30 }, { lvl: 55, lvlreq: 30, freq: 3 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'res-fire', min: 16, max: 24 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'res-fire', min: 12, max: 12 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.CM321]
  ],
  'res-cold': [
    ['R1', { code: 'res-cold', min: 30, max: 48 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-cold', min: 20, max: 40 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'res-cold', min: 16, max: 30 }, { lvl: 35, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R4', { code: 'res-cold', min: 12, max: 20 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.NORMAL],
    ['R1', { code: 'res-cold', min: 20, max: 36 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'res-cold', min: 20, max: 30 }, { lvl: 55, lvlreq: 30, freq: 3 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'res-cold', min: 16, max: 24 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'res-cold', min: 12, max: 12 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.CM321]
  ],
  'res-ltng': [
    ['R1', { code: 'res-ltng', min: 30, max: 48 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-ltng', min: 20, max: 40 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'res-ltng', min: 16, max: 30 }, { lvl: 35, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R4', { code: 'res-ltng', min: 12, max: 20 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.NORMAL],
    ['R1', { code: 'res-ltng', min: 20, max: 36 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'res-ltng', min: 20, max: 30 }, { lvl: 55, lvlreq: 30, freq: 3 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'res-ltng', min: 16, max: 24 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'res-ltng', min: 12, max: 12 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.CM321]
  ],
  'res-pois': [
    ['R1', { code: 'res-pois', min: 30, max: 48 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-pois', min: 20, max: 40 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'res-pois', min: 16, max: 30 }, { lvl: 35, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R4', { code: 'res-pois', min: 12, max: 20 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.NORMAL],
    ['R1', { code: 'res-pois', min: 20, max: 36 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'res-pois', min: 20, max: 30 }, { lvl: 55, lvlreq: 30, freq: 3 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'res-pois', min: 16, max: 24 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'res-pois', min: 12, max: 12 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.CM321]
  ],
  'dual-res': [
    ['R1-FC', { code: 'res-fire', min: 18, max: 30, code2: 'res-cold', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-FL', { code: 'res-fire', min: 18, max: 30, code2: 'res-ltng', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-FP', { code: 'res-fire', min: 18, max: 30, code2: 'res-pois', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-CL', { code: 'res-cold', min: 18, max: 30, code2: 'res-ltng', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-CP', { code: 'res-cold', min: 18, max: 30, code2: 'res-pois', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-LP', { code: 'res-ltng', min: 18, max: 30, code2: 'res-pois', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R2-FC', { code: 'res-fire', min: 12, max: 20, code2: 'res-cold', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-FL', { code: 'res-fire', min: 12, max: 20, code2: 'res-ltng', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-FP', { code: 'res-fire', min: 12, max: 20, code2: 'res-pois', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-CL', { code: 'res-cold', min: 12, max: 20, code2: 'res-ltng', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-CP', { code: 'res-cold', min: 12, max: 20, code2: 'res-pois', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-LP', { code: 'res-ltng', min: 12, max: 20, code2: 'res-pois', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO]
  ],

  // ['res-all-max', MOD_TYPE.PREFIX, '元素抗性上限'],//res-all-max
  // ['res-fire-max', MOD_TYPE.PREFIX, '火焰抗性上限'],
  // ['res-cold-max', MOD_TYPE.PREFIX, '冰冷抗性上限'],
  // ['res-ltng-max', MOD_TYPE.PREFIX, '闪电抗性上限'],
  // ['res-pois-max', MOD_TYPE.PREFIX, '毒素抗性上限'],
  'res-all-max': [
    ['R1', { code: 'res-all-max', min: 5, max: 5 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.NORMAL],
    ['R2', { code: 'res-all-max', min: 4, max: 4 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-all-max', min: 3, max: 3 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R4', { code: 'res-all-max', min: 2, max: 2 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM32_AND_JEW]
  ],
  'res-fire-max': [
    ['R1', { code: 'res-fire-max', min: 8, max: 10 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-fire-max', min: 6, max: 8 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-fire-max', min: 4, max: 6 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R4', { code: 'res-fire-max', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 3 }, M_ITS.CM32_AND_JEW]
  ],
  'res-cold-max': [
    ['R1', { code: 'res-cold-max', min: 8, max: 10 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-cold-max', min: 6, max: 8 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-cold-max', min: 4, max: 6 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R4', { code: 'res-cold-max', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM32_AND_JEW]
  ],
  'res-ltng-max': [
    ['R1', { code: 'res-ltng-max', min: 8, max: 10 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-ltng-max', min: 6, max: 8 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-ltng-max', min: 4, max: 6 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R4', { code: 'res-ltng-max', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM32_AND_JEW]
  ],
  'res-pois-max': [
    ['R1', { code: 'res-pois-max', min: 8, max: 10 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-pois-max', min: 6, max: 8 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-pois-max', min: 4, max: 6 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R4', { code: 'res-pois-max', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM32_AND_JEW]
  ],

  // // ['abs-mag', MOD_TYPE.PREFIX, '魔法吸收'],
  // // ['abs-fire', MOD_TYPE.PREFIX, '火焰吸收'],
  // // ['abs-cold', MOD_TYPE.PREFIX, '冰冷吸收'],
  // // ['abs-ltng', MOD_TYPE.PREFIX, '闪电吸收'],
  // // ['abs-pois', MOD_TYPE.PREFIX, '毒素吸收'],
  // // ['abs-mag%', MOD_TYPE.PREFIX, '魔法吸收%'],
  // // ['abs-fire%', MOD_TYPE.PREFIX, '火焰吸收%'],
  // // ['abs-cold%', MOD_TYPE.PREFIX, '冰冷吸收%'],
  // // ['abs-ltng%', MOD_TYPE.PREFIX, '闪电吸收%'],
  // // ['abs-pois%', MOD_TYPE.PREFIX, '毒素吸收%'],
  'abs-mag': [
    ['R1', { code: 'abs-mag', min: 8, max: 12 }, { lvl: 85, lvlreq: 45, freq: 3 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-mag', min: 7, max: 10 }, { lvl: 55, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-mag', min: 6, max: 7 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R4', { code: 'abs-mag', min: 5, max: 6 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],
  'abs-fire': [
    ['R1', { code: 'abs-fire', min: 8, max: 12 }, { lvl: 85, lvlreq: 45, freq: 3 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-fire', min: 7, max: 10 }, { lvl: 55, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-fire', min: 6, max: 7 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R4', { code: 'abs-fire', min: 5, max: 6 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],
  'abs-cold': [
    ['R1', { code: 'abs-cold', min: 8, max: 12 }, { lvl: 85, lvlreq: 45, freq: 3 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-cold', min: 7, max: 10 }, { lvl: 55, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-cold', min: 6, max: 7 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R4', { code: 'abs-cold', min: 5, max: 6 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],
  'abs-ltng': [
    ['R1', { code: 'abs-ltng', min: 8, max: 12 }, { lvl: 85, lvlreq: 45, freq: 3 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-ltng', min: 7, max: 10 }, { lvl: 55, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-ltng', min: 6, max: 7 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R4', { code: 'abs-ltng', min: 5, max: 6 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],
  // 'abs-pois': [
  //   ['R1', { code: 'abs-pois', min: 8, max: 12 }, { lvl: 85,  lvlreq: 45, freq: 3 }, MOD_ITYPES['NORMAL']],
  //   ['R2', { code: 'abs-pois', min: 7, max: 10 }, { lvl: 55,  lvlreq: 25, freq: 4 }, MOD_ITYPES['NORMAL'].concat(MOD_ITYPES['JEW'])],
  //   ['R3', { code: 'abs-pois', min: 6, max: 7 }, { lvl: 40,  lvlreq: 15, freq: 5 }, MOD_ITYPES['JEW'].concat(MOD_ITYPES['CHARM_UPP'])],
  //   ['R4', { code: 'abs-pois', min: 5, max: 6 }, { lvl: 40,  lvlreq: 15, freq: 6 }, MOD_ITYPES['JEW'].concat(MOD_ITYPES['CHARM_MID'])]
  // ],
  'abs-mag%': [
    ['R1', { code: 'abs-mag%', min: 5, max: 8 }, { lvl: 85, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-mag%', min: 4, max: 6 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-mag%', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R4', { code: 'abs-mag%', min: 2, max: 3 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],
  'abs-fire%': [
    ['R1', { code: 'abs-fire%', min: 5, max: 8 }, { lvl: 85, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-fire%', min: 4, max: 6 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-fire%', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R4', { code: 'abs-fire%', min: 2, max: 3 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],
  'abs-cold%': [
    ['R1', { code: 'abs-cold%', min: 5, max: 8 }, { lvl: 85, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-cold%', min: 4, max: 6 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-cold%', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R4', { code: 'abs-cold%', min: 2, max: 3 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],
  'abs-ltng%': [
    ['R1', { code: 'abs-ltng%', min: 5, max: 8 }, { lvl: 85, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-ltng%', min: 4, max: 6 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-ltng%', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.JEW.concat(M_ITS.CM3)],
    ['R4', { code: 'abs-ltng%', min: 2, max: 3 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.JEW.concat(M_ITS.CM32)]
  ],
  // 'abs-pois%': [
  //   ['R1', { code: 'abs-pois%', min: 5, max: 8 }, { lvl: 85,  lvlreq: 45, freq: 2 }, M_ITS['NORMAL']],
  //   ['R2', { code: 'abs-pois%', min: 4, max: 6 }, { lvl: 55,  lvlreq: 25, freq: 3 }, M_ITS['NORMAL'].concat(M_ITS['JEW'])],
  //   ['R3', { code: 'abs-pois%', min: 3, max: 4 }, { lvl: 40,  lvlreq: 15, freq: 4 }, M_ITS['JEW'].concat(M_ITS['CHARM_UPP'])],
  //   ['R4', { code: 'abs-pois%', min: 2, max: 3 }, { lvl: 40,  lvlreq: 15, freq: 5 }, M_ITS['JEW'].concat(M_ITS['CHARM_MID'])]
  // ],

  // ['ac-miss', MOD_TYPE.PREFIX, '超级远程防御'],
  // ['ac-hth', MOD_TYPE.PREFIX, '超级近战防御'],
  // ['super-ac', MOD_TYPE.PREFIX, '超级防御'],
  // ['super-ac%', MOD_TYPE.PREFIX, '超级防御%'],
  // ['red-dmg', MOD_TYPE.PREFIX, '物理伤害减免'],
  // ['red-dmg%', MOD_TYPE.PREFIX, '物理伤害减免%'],
  // ['red-mag', MOD_TYPE.PREFIX, '魔法伤害减免'],
  'ac-miss': [
    ['R1', { code: 'ac-miss', min: 160, max: 200 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'ac-miss', min: 120, max: 160 }, { lvl: 55, lvlreq: 40, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'ac-miss', min: 80, max: 120 }, { lvl: 35, lvlreq: 20, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'ac-miss', min: 60, max: 80 }, { lvl: 15, lvlreq: 10, freq: 5 }, M_ITS.ARMO]
    ['R1', { code: 'ac-miss', min: 120, max: 150 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'ac-miss', min: 90, max: 120 }, { lvl: 55, lvlreq: 40, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'ac-miss', min: 60, max: 90 }, { lvl: 35, lvlreq: 20, freq: 4 }, M_ITS.CM32],
    ['R4', { code: 'ac-miss', min: 60, max: 60 }, { lvl: 15, lvlreq: 10, freq: 5 }, M_ITS.CM321]
    ['R1', { code: 'ac-miss', min: 100, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'ac-miss', min: 80, max: 100 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'ac-miss', min: 60, max: 80 }, { lvl: 30, lvlreq: 15, freq: 4 }, M_ITS.JEW],
    ['R4', { code: 'ac-miss', min: 40, max: 60 }, { lvl: 10, lvlreq: 7, freq: 5 }, M_ITS.JEW]
  ],
  'ac-hth': [
    ['R1', { code: 'ac-hth', min: 160, max: 200 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'ac-hth', min: 120, max: 160 }, { lvl: 55, lvlreq: 40, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'ac-hth', min: 80, max: 120 }, { lvl: 35, lvlreq: 20, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'ac-hth', min: 60, max: 80 }, { lvl: 15, lvlreq: 10, freq: 5 }, M_ITS.ARMO]
    ['R1', { code: 'ac-hth', min: 120, max: 150 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'ac-hth', min: 90, max: 120 }, { lvl: 55, lvlreq: 40, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'ac-hth', min: 60, max: 90 }, { lvl: 35, lvlreq: 20, freq: 4 }, M_ITS.CM32],
    ['R4', { code: 'ac-hth', min: 60, max: 60 }, { lvl: 15, lvlreq: 10, freq: 5 }, M_ITS.CM321]
    ['R1', { code: 'ac-hth', min: 100, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'ac-hth', min: 80, max: 100 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'ac-hth', min: 60, max: 80 }, { lvl: 30, lvlreq: 15, freq: 4 }, M_ITS.JEW],
    ['R4', { code: 'ac-hth', min: 40, max: 60 }, { lvl: 10, lvlreq: 7, freq: 5 }, M_ITS.JEW]
  ],
  'super-ac': [
    ['R1', { code: 'ac', min: 120, max: 150 }, { lvl: 76, lvlreq: 52, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'ac', min: 100, max: 120 }, { lvl: 56, lvlreq: 42, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'ac', min: 80, max: 100 }, { lvl: 36, lvlreq: 22, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'ac', min: 60, max: 80 }, { lvl: 16, lvlreq: 12, freq: 5 }, M_ITS.ARMO]
    ['R1', { code: 'ac', min: 100, max: 120 }, { lvl: 74, lvlreq: 51, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'ac', min: 70, max: 100 }, { lvl: 54, lvlreq: 41, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'ac', min: 50, max: 70 }, { lvl: 34, lvlreq: 21, freq: 4 }, M_ITS.CM32],
    ['R4', { code: 'ac', min: 40, max: 50 }, { lvl: 14, lvlreq: 11, freq: 5 }, M_ITS.CM321]
    ['R1', { code: 'ac', min: 80, max: 100 }, { lvl: 71, lvlreq: 43, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'ac', min: 60, max: 80 }, { lvl: 51, lvlreq: 26, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'ac', min: 40, max: 60 }, { lvl: 31, lvlreq: 14, freq: 4 }, M_ITS.JEW],
    ['R4', { code: 'ac', min: 30, max: 40 }, { lvl: 11, lvlreq: 7, freq: 5 }, M_ITS.JEW]
  ],
  'super-ac%': [
    ['R1', { code: 'ac%', min: 50, max: 60 }, { lvl: 75, lvlreq: 51, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'ac%', min: 40, max: 50 }, { lvl: 55, lvlreq: 41, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'ac%', min: 30, max: 40 }, { lvl: 35, lvlreq: 21, freq: 3 }, M_ITS.ARMO],
    ['R4', { code: 'ac%', min: 20, max: 30 }, { lvl: 15, lvlreq: 11, freq: 3 }, M_ITS.ARMO]
    ['R1', { code: 'ac%', min: 35, max: 50 }, { lvl: 72, lvlreq: 51, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'ac%', min: 25, max: 35 }, { lvl: 52, lvlreq: 41, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'ac%', min: 15, max: 25 }, { lvl: 32, lvlreq: 22, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'ac%', min: 10, max: 15 }, { lvl: 12, lvlreq: 11, freq: 3 }, M_ITS.CM321_AND_JEW]
  ],
  'red-dmg': [
    ['R1', { code: 'red-dmg', min: 10, max: 12 }, { lvl: 73, lvlreq: 53, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'red-dmg', min: 8, max: 10 }, { lvl: 62, lvlreq: 36, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'red-dmg', min: 6, max: 8 }, { lvl: 40, lvlreq: 21, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'red-dmg', min: 4, max: 6 }, { lvl: 15, lvlreq: 8, freq: 5 }, M_ITS.ARMO],
    ['R1', { code: 'red-dmg', min: 8, max: 10 }, { lvl: 77, lvlreq: 49, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'red-dmg', min: 6, max: 8 }, { lvl: 57, lvlreq: 39, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'red-dmg', min: 4, max: 6 }, { lvl: 37, lvlreq: 19, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'red-dmg', min: 3, max: 4 }, { lvl: 17, lvlreq: 9, freq: 4 }, M_ITS.CM321_AND_JEW]
  ],
  'red-dmg%': [
    ['R1', { code: 'red-dmg%', min: 12, max: 15 }, { lvl: 73, lvlreq: 53, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'red-dmg%', min: 9, max: 12 }, { lvl: 62, lvlreq: 36, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'red-dmg%', min: 6, max: 9 }, { lvl: 40, lvlreq: 21, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'red-dmg%', min: 3, max: 6 }, { lvl: 15, lvlreq: 8, freq: 5 }, M_ITS.ARMO],
    ['R1', { code: 'red-dmg%', min: 9, max: 12 }, { lvl: 77, lvlreq: 49, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'red-dmg%', min: 6, max: 9 }, { lvl: 57, lvlreq: 39, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'red-dmg%', min: 4, max: 6 }, { lvl: 37, lvlreq: 19, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'red-dmg%', min: 3, max: 4 }, { lvl: 17, lvlreq: 9, freq: 4 }, M_ITS.CM321_AND_JEW]
  ],
  'red-mag': [
    ['R1', { code: 'red-mag', min: 10, max: 12 }, { lvl: 73, lvlreq: 53, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'red-mag', min: 8, max: 10 }, { lvl: 62, lvlreq: 36, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'red-mag', min: 6, max: 8 }, { lvl: 40, lvlreq: 21, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'red-mag', min: 4, max: 6 }, { lvl: 15, lvlreq: 8, freq: 5 }, M_ITS.ARMO],
    ['R1', { code: 'red-mag', min: 8, max: 10 }, { lvl: 77, lvlreq: 49, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'red-mag', min: 6, max: 8 }, { lvl: 57, lvlreq: 39, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'red-mag', min: 4, max: 6 }, { lvl: 37, lvlreq: 19, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'red-mag', min: 3, max: 4 }, { lvl: 17, lvlreq: 9, freq: 4 }, M_ITS.CM321_AND_JEW]
  ],

  // ['mana-kill', MOD_TYPE.PREFIX, 'mana EK'],
  // ['heal-kill', MOD_TYPE.PREFIX, 'hp EK'],
  // ['regen-mana', MOD_TYPE.PREFIX, '法力恢复']
  'mana-kill': [
    ['R1', { code: 'mana-kill', min: 10, max: 12 }, { lvl: 76, lvlreq: 52, freq: 2 }, M_ITS.WEAP],
    ['R2', { code: 'mana-kill', min: 8, max: 10 }, { lvl: 62, lvlreq: 36, freq: 3 }, M_ITS.WEAP],
    ['R3', { code: 'mana-kill', min: 6, max: 8 }, { lvl: 41, lvlreq: 21, freq: 4 }, M_ITS.WEAP],
    ['R4', { code: 'mana-kill', min: 4, max: 6 }, { lvl: 16, lvlreq: 8, freq: 5 }, M_ITS.WEAP],
    ['R1', { code: 'mana-kill', min: 8, max: 10 }, { lvl: 73, lvlreq: 48, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'mana-kill', min: 6, max: 8 }, { lvl: 53, lvlreq: 38, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'mana-kill', min: 4, max: 6 }, { lvl: 33, lvlreq: 18, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'mana-kill', min: 3, max: 4 }, { lvl: 13, lvlreq: 8, freq: 4 }, M_ITS.CM321_AND_JEW]
  ],
  'heal-kill': [
    ['R1', { code: 'heal-kill', min: 10, max: 12 }, { lvl: 76, lvlreq: 52, freq: 2 }, M_ITS.WEAP],
    ['R2', { code: 'heal-kill', min: 8, max: 10 }, { lvl: 62, lvlreq: 36, freq: 3 }, M_ITS.WEAP],
    ['R3', { code: 'heal-kill', min: 6, max: 8 }, { lvl: 41, lvlreq: 21, freq: 4 }, M_ITS.WEAP],
    ['R4', { code: 'heal-kill', min: 4, max: 6 }, { lvl: 16, lvlreq: 8, freq: 5 }, M_ITS.WEAP],
    ['R1', { code: 'heal-kill', min: 8, max: 10 }, { lvl: 73, lvlreq: 48, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'heal-kill', min: 6, max: 8 }, { lvl: 53, lvlreq: 38, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'heal-kill', min: 4, max: 6 }, { lvl: 33, lvlreq: 18, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'heal-kill', min: 3, max: 4 }, { lvl: 13, lvlreq: 8, freq: 4 }, M_ITS.CM321_AND_JEW]
  ],
  'regen-mana': [
    ['R1', { code: 'regen-mana', min: 25, max: 30 }, { lvl: 60, lvlreq: 45, freq: 3 }, M_ITS.ARMO],
    ['R2', { code: 'regen-mana', min: 20, max: 25 }, { lvl: 40, lvlreq: 25, freq: 4 }, M_ITS.ARMO],
    ['R3', { code: 'regen-mana', min: 15, max: 20 }, { lvl: 20, lvlreq: 15, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'regen-mana', min: 10, max: 15 }, { lvl: 10, lvlreq: 5, freq: 4 }, M_ITS.ARMO],
    ['R1', { code: 'regen-mana', min: 25, max: 30 }, { lvl: 55, lvlreq: 46, freq: 3 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'regen-mana', min: 20, max: 25 }, { lvl: 35, lvlreq: 26, freq: 4 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'regen-mana', min: 15, max: 20 }, { lvl: 15, lvlreq: 16, freq: 4 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'regen-mana', min: 10, max: 15 }, { lvl: 11, lvlreq: 6, freq: 4 }, M_ITS.CM321_AND_JEW]
  ],
  //////////////////////////////////////////////////////////////////////////PREFIX END////////////////////////////////////////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////////////BOTH BEGIN////////////////////////////////////////////////////////////////////////////////////////////////////////////

  'addxp': [
    ['R1', { code: 'addxp', min: 6, max: 10 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3.concat(M_ITS.NORMAL).concat(M_ITS.JEW)],
    ['R2', { code: 'addxp', min: 4, max: 8 }, { lvl: 55, lvlreq: 45, freq: 3 }, M_ITS.CM32.concat(M_ITS.NORMAL).concat(M_ITS.JEW)],
    ['R3', { code: 'addxp', min: 2, max: 5 }, { lvl: 45, lvlreq: 20, freq: 3 }, M_ITS.CM321.concat(M_ITS.JEW)]
  ],
  // ['allskills', MOD_TYPE.BOTH, '所有技能']
  'allskills': [
    ['R1', { code: 'allskills', min: 1, max: 2 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.NORMAL],
    ['R2', { code: 'allskills', min: 1, max: 1 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.NORMAL],
    ['R1', { code: 'allskills', min: 2, max: 3 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.SOR_ONLY],
    ['R2', { code: 'allskills', min: 1, max: 2 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.SOR_ONLY],
    ['R1', { code: 'allskills', min: 2, max: 3 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.PAL_ONLY],
    ['R2', { code: 'allskills', min: 1, max: 2 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.PAL_ONLY],
    ['R1', { code: 'allskills', min: 2, max: 3 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.NEC_ONLY],
    ['R2', { code: 'allskills', min: 1, max: 2 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.NEC_ONLY],
  ],
  //  ['cheap', MOD_TYPE.BOTH, '店铺折扣'],
  // ['super-magic', MOD_TYPE.BOTH, '强化MF'],
  'cheap': [
    ['R1', { code: 'cheap', min: 5, max: 8 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'cheap', min: 3, max: 5 }, { lvl: 55, lvlreq: 45, freq: 2 }, M_ITS.CM32],
    ['R3', { code: 'cheap', min: 1, max: 3 }, { lvl: 45, lvlreq: 20, freq: 2 }, M_ITS.CM321]
  ],
  'super-magic': [
    ['R1', { code: 'mag%', min: 25, max: 30 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mag%', min: 20, max: 25 }, { lvl: 40, lvlreq: 30, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'mag%', min: 15, max: 20 }, { lvl: 30, lvlreq: 20, freq: 4 }, M_ITS.NORMAL],
    ['R4', { code: 'mag%', min: 10, max: 15 }, { lvl: 20, lvlreq: 10, freq: 4 }, M_ITS.NORMAL],
    ['R1', { code: 'mag%', min: 16, max: 24 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R2', { code: 'mag%', min: 12, max: 18 }, { lvl: 40, lvlreq: 30, freq: 3 }, M_ITS.CM32_AND_JEW],
    ['R3', { code: 'mag%', min: 8, max: 15 }, { lvl: 30, lvlreq: 20, freq: 4 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'mag%', min: 5, max: 10 }, { lvl: 20, lvlreq: 10, freq: 3 }, M_ITS.CM321_AND_JEW]
  ],
  //  ['lvl-magic', MOD_TYPE.BOTH, 'MF/lvl']
  'lvl-magic': [
    ['R1', { code: 'mag/lvl', min: 8, max: 8 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mag/lvl', min: 7, max: 7 }, { lvl: 40, lvlreq: 30, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'mag/lvl', min: 6, max: 6 }, { lvl: 30, lvlreq: 20, freq: 2 }, M_ITS.NORMAL],
    ['R4', { code: 'mag/lvl', min: 5, max: 5 }, { lvl: 20, lvlreq: 10, freq: 2 }, M_ITS.NORMAL],
    ['R5', { code: 'mag/lvl', min: 4, max: 4 }, { lvl: 20, lvlreq: 10, freq: 2 }, M_ITS.NORMAL]
    ['R1', { code: 'mag/lvl', min: 6, max: 6 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'mag/lvl', min: 5, max: 5 }, { lvl: 40, lvlreq: 30, freq: 2 }, M_ITS.CM3_AND_JEW],
    ['R3', { code: 'mag/lvl', min: 4, max: 4 }, { lvl: 30, lvlreq: 20, freq: 2 }, M_ITS.CM32_AND_JEW],
    ['R4', { code: 'mag/lvl', min: 3, max: 3 }, { lvl: 20, lvlreq: 10, freq: 2 }, M_ITS.CM32_AND_JEW],
    ['R5', { code: 'mag/lvl', min: 2, max: 2 }, { lvl: 20, lvlreq: 10, freq: 2 }, M_ITS.CM321],
  ]
  ////////////////////////////////////////////////////////////////////////BOTH END////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
//level，levelreq
const LVL_RANKS = [
  [85, 70],
  [70, 55],
  [55, 40],
  [40, 25],
  [25, 10]
];
const MOD_TYPE = { PREFIX: 'PREFIX', SUFFIX: 'SUFFIX', BOTH: 'BOTH' };

const BOOST_MODIFIERS = [
  //////////////////////SUFFIX///////////////////////////
  // ['skilltab', '单系强化'],
  // randclassskill		0	6 
  // oskill	Teleport	1	1	0  //赋能技能
  // aura Conviction	12	12	// 光环
  // aura	Redemption	10	15	
  // kill-skill	Chain Lightning	50	20	// 消灭敌人 获得 概率  技能等级
  // gethit-skill	Lower Resist	10	7
  // levelup-skill

  ['dmg', MOD_TYPE.SUFFIX, '攻击'],
  ['dmg%', MOD_TYPE.SUFFIX, '攻击%'],
  ['crush', MOD_TYPE.SUFFIX, '破甲'],
  ['dmg/lvl', MOD_TYPE.SUFFIX, '攻击/等级'],
  ['dmg-undead', MOD_TYPE.SUFFIX, '对不死的攻击'],
  ['dmg-demon', MOD_TYPE.SUFFIX, '对恶魔的攻击'],

  ['reduce-ac', MOD_TYPE.SUFFIX, '防御穿透'],
  // ['bloody', MOD_TYPE.SUFFIX, '血腥攻击'],
  ['deadly', MOD_TYPE.SUFFIX, '致命攻击'],
  ['openwounds', MOD_TYPE.SUFFIX, '开放伤口'],

  ['dmg-fire', MOD_TYPE.SUFFIX, '火焰伤害'],
  ['dmg-ltng', MOD_TYPE.SUFFIX, '电击伤害'],
  ['dmg-cold', MOD_TYPE.SUFFIX, '冰冷伤害'],
  ['dmg-pois', MOD_TYPE.SUFFIX, '毒素伤害'],
  ['dmg-mag', MOD_TYPE.SUFFIX, '魔法伤害'],

  ['sor-fire', MOD_TYPE.SUFFIX, '火系技能'],
  ['sor-ltng', MOD_TYPE.SUFFIX, '电系技能'],
  ['sor-cold', MOD_TYPE.SUFFIX, '冰系技能'],
  ['sor-mastery', MOD_TYPE.SUFFIX, '法术大师'],

  ['skill-rand', MOD_TYPE.SUFFIX, '随机技能'],
  ['dual-skilltab', MOD_TYPE.SUFFIX, '双系技能'],

  ['extra-fire', MOD_TYPE.SUFFIX, '额外火伤'],
  ['extra-cold', MOD_TYPE.SUFFIX, '额外冰伤'],
  ['extra-ltng', MOD_TYPE.SUFFIX, '额外电伤'],
  ['extra-pois', MOD_TYPE.SUFFIX, '额外毒伤'],
  ['pierce-fire', MOD_TYPE.SUFFIX, '减火抗'],
  ['pierce-cold', MOD_TYPE.SUFFIX, '减冰抗'],
  ['pierce-ltng', MOD_TYPE.SUFFIX, '减电抗'],
  ['pierce-pois', MOD_TYPE.SUFFIX, '减毒抗'],

  //////////////////////PREFIX///////////////////////////

  ['cast2', MOD_TYPE.PREFIX, '施法速度'],
  ['swing2', MOD_TYPE.PREFIX, '攻击速度'],
  ['balance2', MOD_TYPE.PREFIX, '打击恢复速度'],
  ['move2', MOD_TYPE.PREFIX, '移动速度'],

  ['hp-mana%', MOD_TYPE.PREFIX, '血法双加'],
  ['super-hp', MOD_TYPE.PREFIX, '大量HP'],
  ['super-hp%', MOD_TYPE.PREFIX, '大量HP%'],
  ['super-mana', MOD_TYPE.PREFIX, '大量MANA'],
  ['super-mana%', MOD_TYPE.PREFIX, '大量MANA%'],
  ['lvl-hp', MOD_TYPE.PREFIX, 'HP/lvl'],
  ['lvl-mana', MOD_TYPE.PREFIX, 'MANA/lvl'],

  ['all-stats', MOD_TYPE.PREFIX, '全属性'],
  ['super-str', MOD_TYPE.PREFIX, '大量力量'],
  ['super-vit', MOD_TYPE.PREFIX, '大量体能'],
  ['super-dex', MOD_TYPE.PREFIX, '大量敏捷'],
  ['super-enr', MOD_TYPE.PREFIX, '大量能量'],

  ['res-all', MOD_TYPE.PREFIX, '全抗性'],//res-all-max
  ['res-fire', MOD_TYPE.PREFIX, '火焰抗性'],
  ['res-cold', MOD_TYPE.PREFIX, '冰冷抗性'],
  ['res-ltng', MOD_TYPE.PREFIX, '闪电抗性'],
  ['res-pois', MOD_TYPE.PREFIX, '毒素抗性'],
  ['res-all-max', MOD_TYPE.PREFIX, '元素抗性上限'],//res-all-max
  ['dual-res', MOD_TYPE.PREFIX, '双系抵抗'],
  ['res-fire-max', MOD_TYPE.PREFIX, '火焰抗性上限'],
  ['res-cold-max', MOD_TYPE.PREFIX, '冰冷抗性上限'],
  ['res-ltng-max', MOD_TYPE.PREFIX, '闪电抗性上限'],
  ['res-pois-max', MOD_TYPE.PREFIX, '毒素抗性上限'],

  ['abs-mag', MOD_TYPE.PREFIX, '魔法吸收'],
  ['abs-fire', MOD_TYPE.PREFIX, '火焰吸收'],
  ['abs-cold', MOD_TYPE.PREFIX, '冰冷吸收'],
  ['abs-ltng', MOD_TYPE.PREFIX, '闪电吸收'],
  // ['abs-pois', MOD_TYPE.PREFIX, '毒素吸收'],
  ['abs-mag%', MOD_TYPE.PREFIX, '魔法吸收%'],
  ['abs-fire%', MOD_TYPE.PREFIX, '火焰吸收%'],
  ['abs-cold%', MOD_TYPE.PREFIX, '冰冷吸收%'],
  ['abs-ltng%', MOD_TYPE.PREFIX, '闪电吸收%'],
  // ['abs-pois%', MOD_TYPE.PREFIX, '毒素吸收%'],

  ['ac-miss', MOD_TYPE.PREFIX, '超级远程防御'],
  ['ac-hth', MOD_TYPE.PREFIX, '超级近战防御'],
  ['super-ac', MOD_TYPE.PREFIX, '超级防御'],
  ['super-ac%', MOD_TYPE.PREFIX, '超级防御%'],
  ['red-dmg', MOD_TYPE.PREFIX, '物理伤害减免'],
  ['red-dmg%', MOD_TYPE.PREFIX, '物理伤害减免%'],
  ['red-mag', MOD_TYPE.PREFIX, '魔法伤害减免'],
  ['mana-kill', MOD_TYPE.PREFIX, 'MANA EK'],
  ['heal-kill', MOD_TYPE.PREFIX, 'HP EK'],
  ['regen-mana', MOD_TYPE.PREFIX, '法力恢复'],
  //////////////////////BOTH///////////////////////////
  ['addxp', MOD_TYPE.BOTH, '经验值加成'],
  ['allskills', MOD_TYPE.BOTH, '所有技能'],
  ['cheap', MOD_TYPE.BOTH, '店铺折扣'],
  ['super-magic', MOD_TYPE.BOTH, '强化MF'],
  ['lvl-magic', MOD_TYPE.BOTH, 'MF/lvl']
];

function getModPrefix(modBase) {
  if (modBase != null && modBase.classspecific != null)
    return modBase.classspecific.toUpperCase() + '-';
  else
    return '';
}

let mssGroupID = Math.max(...mss.rows.map((row) => row['group'])) + 300;
let mpsGroupID = Math.max(...mps.rows.map((row) => row['group'])) + 700;

BOOST_MODIFIERS.forEach(([modName, modeType, modLable]) => {
  if (MOD_TYPE.SUFFIX == modeType || modeType == MOD_TYPE.BOTH) {
    mssGroupID = mssGroupID + 1;
  }
  if (MOD_TYPE.PREFIX == modeType || modeType == MOD_TYPE.BOTH) {
    mpsGroupID = mpsGroupID + 1;
  }

  const modProp = MOD_PROP[modName];
  modProp.forEach(([modRank, modXs, modBase, modItypes]) => {

    let modClassPrefix = getModPrefix(modBase);
    itemNames.push({
      id: D2RMM.getNextStringID(),
      Key: `${modClassPrefix}${modName.toUpperCase()}-${modRank}`,
      enUS: `${modClassPrefix}${modName.toUpperCase()}-${modRank}`,
      zhTW: `${modClassPrefix}${modLable}-${modRank}`
    });
    itemNames.push({
      id: D2RMM.getNextStringID(),
      Key: `${modClassPrefix}${modName.toUpperCase()}-M-${modRank}`,
      enUS: `${modClassPrefix}${modName.toUpperCase()}-M-${modRank}`,
      zhTW: `${modClassPrefix}${modLable}-M-${modRank}`
    });

    //ITYPE的缺省值
    let itypes = modItypes == null ? M_ITS.NORMAL : modItypes;

    const newModifier = {
      Name: `${modClassPrefix}${modName.toUpperCase()}-${modRank}`,
      version: 100,
      spawnable: 1,
      rare: 1,
      classspecific: modBase.clz,
      frequency: modBase.freq == null ? 2 : modBase.freq,
      level: modBase.lvl,
      levelreq: modBase.lvlreq,
      multiply: 0,
      add: 0,
      mod1code: modXs.code,
      mod1param: modXs.param,
      mod1min: modXs.min,
      mod1max: modXs.max,
      mod2code: modXs.code2,
      mod2param: modXs.param2,
      mod2min: modXs.min2,
      mod2max: modXs.max2,
      mod3code: modXs.code3,
      mod3param: modXs.param3,
      mod3min: modXs.min3,
      mod3max: modXs.max3,
      itype1: itypes[0],
      itype2: itypes[1],
      itype3: itypes[2],
      itype4: itypes[3],
      itype5: itypes[4],
      itype6: itypes[5],
      itype7: itypes[6],
      '*eol\r': 0,
    };

    //克隆一份为魔法词缀
    const newMagicModifier = {
      ...newModifier,
      Name: `${modClassPrefix}${modName.toUpperCase()}-M-${modRank}`,
      rare: 0
    };

    if (modeType === MOD_TYPE.SUFFIX || modeType === MOD_TYPE.BOTH) {
      newModifier.group = mssGroupID;
      newMagicModifier.group = mssGroupID;
      mss.rows.push(newModifier);
      mss.rows.push(newMagicModifier);
    };
    if (modeType === MOD_TYPE.PREFIX || modeType === MOD_TYPE.BOTH) {
      newModifier.group = mpsGroupID;
      newMagicModifier.group = mpsGroupID;
      mps.rows.push(newModifier);
      mps.rows.push(newMagicModifier);
    }
  });

});

D2RMM.writeTsv(amFilename, ams);
D2RMM.writeTsv(mpFileName, mps);
D2RMM.writeTsv(msFileName, mss);

D2RMM.writeJson(itemNamesFilename, itemNames);
D2RMM.writeJson(itemNameaffixesFilename, itemNameaffixes);

