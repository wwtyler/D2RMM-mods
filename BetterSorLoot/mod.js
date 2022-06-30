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

const M_ETS = {
  DEFAULT: [],
  MAGIC_STAFF: ['orb', 'staff', 'wand']
}
const M_ITS = {
  CHARM: ['scha', 'mcha', 'lcha'],
  CM1: ['scha'],
  CM2: ['mcha'],
  CM3: ['lcha'],
  CM32: ['mcha', 'lcha'],
  CM321: ['scha', 'mcha', 'lcha'],
  CM3_JEW: ['lcha', 'jewl'],
  CM32_JEW: ['mcha', 'lcha', 'jewl'],
  // CM321_JEW: ['scha', 'mcha', 'lcha', 'jewl'],
  CM321_JEW: ['char', 'jewl'],
  JEW: ['jewl'],
  AMA: ['amaz', 'spea', 'miss', 'glov', 'amul', 'circ'],
  AMA_ONLY: ['amaz', 'spea', 'miss'],
  SOR: ['sorc', 'orb', 'staff', 'amul', 'circ', 'ring', 'glov'],
  SOR_ONLY: ['sorc', 'orb', 'staff'],
  SOR_UPP: ['orb', 'staff', 'amul', 'circ'],
  SOR_LOW: ['ring', 'glov', 'belt'],
  NEC: ['necr', 'wand', 'head', 'amul', 'circ', 'knif'],
  NEC_ONLY: ['necr', 'wand', 'head'],
  PAL: ['pala', 'scep', 'swor', 'mace', `shld`, `amul`, `circ`],
  PAL_ONLY: ['pala', 'scep', 'ashd'],
  BAR: ['barb', 'phlm', 'axe', 'tkni', 'spea', 'helm', 'amul'],
  BAR_ONLY: ['barb', 'phlm', 'tkni'],
  DRU: ['drui', 'club', 'pelt', 'amul', 'circ'],
  DRU_ONLY: ['drui', 'club', 'pelt'],
  ASS: ['assn', 'h2h', 'helm', 'amul', 'circ'],
  ASS_ONLY: ['assn', 'h2h'],
  NORMAL: ['weap', `armo`, `amul`, `ring`],
  M_EK: ['weap', `glov`, `boot`, `amul`, `ring`, 'circ'],
  H_EK: ['weap', `helm`, `belt`, `amul`, `ring`, 'circ'],
  ARMO: ['tors', `helm`, `shld`, `belt`, `boot`, 'glov'],
  WEAP: ['weap'],
  WEAP_ARMO: ['weap', `armo`],
  MELE_MISS: ['mele', 'miss'],
  MELE: ['mele'],
  MISS: ['miss'],
  MOVE2: ['boot', `belt`, `glov`, `tors`, `staff`, `circ`],
  CASTER: ['orb', 'staff', 'scep', 'wand', 'head', 'knif', 'amul', 'ring', 'circ'],
  CASTER_UPP: ['orb', 'staff', 'scep', 'wand', 'head', 'amul', 'circ'],
  CASTER_LOW: ['orb', 'scep', 'head', 'knif', 'amul', 'ring']
};

const MOD_PROP = {

  ////////////////////////////////////////////////////////////////////////BOTH BEGIN////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'addxp': [
    ['R4', { code: 'addxp', min: 10, max: 10 }, { lvl: 5, lvlreq: 5, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R3', { code: 'addxp', min: 15, max: 15 }, { lvl: 15, lvlreq: 10, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R2', { code: 'addxp', min: 20, max: 20 }, { lvl: 35, lvlreq: 20, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R1', { code: 'addxp', min: 25, max: 25 }, { lvl: 55, lvlreq: 40, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
  ],
  // ['allskills', MOD_TYPE.BOTH, '所有技能']
  'allskills': [
    // ['R2', { code: 'allskills', min: 1, max: 1 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.NORMAL],
    ['R1', { code: 'allskills', min: 1, max: 1 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.NORMAL],
    ['R2', { code: 'allskills', min: 1, max: 1 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.SOR_ONLY],
    ['R1', { code: 'allskills', min: 2, max: 2 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.SOR_ONLY],
    ['R2', { code: 'allskills', min: 1, max: 1 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.PAL_ONLY],
    ['R1', { code: 'allskills', min: 2, max: 2 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.PAL_ONLY],
    ['R2', { code: 'allskills', min: 1, max: 1 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.NEC_ONLY],
    ['R1', { code: 'allskills', min: 2, max: 2 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.NEC_ONLY],
  ],
  //  ['cheap', MOD_TYPE.BOTH, '店铺折扣'],
  // ['super-magic', MOD_TYPE.BOTH, '强化MF'],
  'cheap': [
    ['R3', { code: 'cheap', min: 1, max: 3 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.CM321],
    ['R2', { code: 'cheap', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.CM32],
    ['R1', { code: 'cheap', min: 5, max: 8 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.CM3],
  ],
  'super-magic': [
    ['R4', { code: 'mag%', min: 10, max: 15 }, { lvl: 12, lvlreq: 8, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'mag%', min: 15, max: 20 }, { lvl: 30, lvlreq: 20, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mag%', min: 20, max: 25 }, { lvl: 40, lvlreq: 30, freq: 3 }, M_ITS.NORMAL],
    ['R1', { code: 'mag%', min: 25, max: 30 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.NORMAL],
    ['R4', { code: 'mag%', min: 5, max: 10 }, { lvl: 12, lvlreq: 10, freq: 1 }, M_ITS.CM321_JEW],
    ['R3', { code: 'mag%', min: 8, max: 15 }, { lvl: 30, lvlreq: 20, freq: 3 }, M_ITS.CM32_JEW],
    ['R2', { code: 'mag%', min: 12, max: 18 }, { lvl: 40, lvlreq: 30, freq: 3 }, M_ITS.CM32_JEW],
    ['R1', { code: 'mag%', min: 16, max: 24 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.CM3_JEW],
    ['R5', { code: 'mag%/lvl', min: 4, max: 4 }, { lvl: 12, lvlreq: 5, freq: 2 }, M_ITS.NORMAL],
    ['R4', { code: 'mag%/lvl', min: 5, max: 5 }, { lvl: 20, lvlreq: 10, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'mag%/lvl', min: 6, max: 6 }, { lvl: 30, lvlreq: 20, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mag%/lvl', min: 7, max: 7 }, { lvl: 40, lvlreq: 30, freq: 2 }, M_ITS.NORMAL],
    ['R1', { code: 'mag%/lvl', min: 8, max: 8 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.NORMAL],
    ['R5', { code: 'mag%/lvl', min: 2, max: 2 }, { lvl: 12, lvlreq: 5, freq: 1 }, M_ITS.CM321],
    ['R4', { code: 'mag%/lvl', min: 3, max: 3 }, { lvl: 20, lvlreq: 10, freq: 2 }, M_ITS.CM32_JEW],
    ['R3', { code: 'mag%/lvl', min: 4, max: 4 }, { lvl: 30, lvlreq: 20, freq: 2 }, M_ITS.CM32_JEW],
    ['R2', { code: 'mag%/lvl', min: 5, max: 5 }, { lvl: 40, lvlreq: 30, freq: 2 }, M_ITS.CM3_JEW],
    ['R1', { code: 'mag%/lvl', min: 6, max: 6 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.CM3],
  ],
  // ['lvl-gold', MOD_TYPE.BOTH, '金币%/lvl'],
  // ['super-gold', MOD_TYPE.BOTH, '金币%'],
  'super-gold': [
    ['R4', { code: 'gold%', min: 60, max: 80 }, { lvl: 12, lvlreq: 7, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'gold%', min: 80, max: 100 }, { lvl: 30, lvlreq: 20, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'gold%', min: 100, max: 120 }, { lvl: 40, lvlreq: 30, freq: 2 }, M_ITS.NORMAL],
    ['R1', { code: 'gold%', min: 120, max: 160 }, { lvl: 60, lvlreq: 40, freq: 1 }, M_ITS.NORMAL],
    ['R5', { code: 'gold%', min: 20, max: 30 }, { lvl: 8, lvlreq: 5, freq: 1 }, M_ITS.CM321_JEW],
    ['R4', { code: 'gold%', min: 30, max: 40 }, { lvl: 20, lvlreq: 10, freq: 1 }, M_ITS.CM321_JEW],
    ['R3', { code: 'gold%', min: 70, max: 80 }, { lvl: 30, lvlreq: 20, freq: 2 }, M_ITS.CM32_JEW],
    ['R2', { code: 'gold%', min: 80, max: 100 }, { lvl: 40, lvlreq: 30, freq: 2 }, M_ITS.CM32_JEW],
    ['R1', { code: 'gold%', min: 100, max: 120 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.CM3_JEW],
    ['R5', { code: 'gold%/lvl', min: 4, max: 6 }, { lvl: 8, lvlreq: 5, freq: 2 }, M_ITS.NORMAL],
    ['R4', { code: 'gold%/lvl', min: 6, max: 8 }, { lvl: 20, lvlreq: 10, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'gold%/lvl', min: 10, max: 12 }, { lvl: 30, lvlreq: 20, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'gold%/lvl', min: 12, max: 14 }, { lvl: 40, lvlreq: 30, freq: 2 }, M_ITS.NORMAL],
    ['R1', { code: 'gold%/lvl', min: 14, max: 16 }, { lvl: 60, lvlreq: 40, freq: 1 }, M_ITS.NORMAL],
    ['R5', { code: 'gold%/lvl', min: 6, max: 8 }, { lvl: 8, lvlreq: 5, freq: 1 }, M_ITS.CM321],
    ['R4', { code: 'gold%/lvl', min: 8, max: 10 }, { lvl: 20, lvlreq: 8, freq: 2 }, M_ITS.CM32_JEW],
    ['R3', { code: 'gold%/lvl', min: 10, max: 12 }, { lvl: 30, lvlreq: 18, freq: 2 }, M_ITS.CM32_JEW],
    ['R2', { code: 'gold%/lvl', min: 12, max: 14 }, { lvl: 40, lvlreq: 28, freq: 2 }, M_ITS.CM3_JEW],
    ['R1', { code: 'gold%/lvl', min: 14, max: 16 }, { lvl: 60, lvlreq: 38, freq: 2 }, M_ITS.CM3],
  ],
  'easy-lvlup': [
    ['经验值', { code: 'addxp', min: 10, max: 10 }, { lvl: 15, lvlreq: 8, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['经验值', { code: 'addxp', min: 10, max: 15 }, { lvl: 25, lvlreq: 15, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['经验值', { code: 'addxp', min: 15, max: 20 }, { lvl: 35, lvlreq: 20, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['经验值', { code: 'addxp', min: 20, max: 25 }, { lvl: 55, lvlreq: 30, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],

    ['生命', { code: 'hp', min: 10, max: 15 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW)],
    ['生命', { code: 'hp', min: 10, max: 20 }, { lvl: 15, lvlreq: 8, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['生命', { code: 'hp', min: 15, max: 30 }, { lvl: 25, lvlreq: 15, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['生命', { code: 'hp', min: 20, max: 40 }, { lvl: 35, lvlreq: 20, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['生命', { code: 'hp', min: 30, max: 50 }, { lvl: 45, lvlreq: 30, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],

    ['法力', { code: 'mana', min: 10, max: 20 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW)],
    ['法力', { code: 'mana', min: 20, max: 30 }, { lvl: 15, lvlreq: 10, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['法力', { code: 'mana', min: 25, max: 40 }, { lvl: 25, lvlreq: 15, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['法力', { code: 'mana', min: 35, max: 50 }, { lvl: 35, lvlreq: 25, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['法力', { code: 'mana', min: 45, max: 60 }, { lvl: 55, lvlreq: 30, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],

    ['攻击力', { code: 'dmg', min: 3, max: 6 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力', { code: 'dmg', min: 6, max: 10 }, { lvl: 15, lvlreq: 8, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力', { code: 'dmg', min: 10, max: 15 }, { lvl: 25, lvlreq: 15, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力', { code: 'dmg', min: 15, max: 20 }, { lvl: 35, lvlreq: 20, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力', { code: 'dmg', min: 20, max: 25 }, { lvl: 45, lvlreq: 25, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力', { code: 'dmg', min: 25, max: 30 }, { lvl: 55, lvlreq: 40, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW), M_ETS.MAGIC_STAFF],

    ['攻击力min', { code: 'dmg-min', min: 3, max: 6 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力min', { code: 'dmg-min', min: 6, max: 10 }, { lvl: 10, lvlreq: 8, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力min', { code: 'dmg-min', min: 10, max: 15 }, { lvl: 15, lvlreq: 10, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力min', { code: 'dmg-min', min: 15, max: 20 }, { lvl: 25, lvlreq: 15, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力min', { code: 'dmg-min', min: 20, max: 25 }, { lvl: 40, lvlreq: 25, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力min', { code: 'dmg-min', min: 25, max: 30 }, { lvl: 55, lvlreq: 40, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW), M_ETS.MAGIC_STAFF],

    ['攻击力max', { code: 'dmg-max', min: 3, max: 8 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力max', { code: 'dmg-max', min: 8, max: 12 }, { lvl: 10, lvlreq: 8, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力max', { code: 'dmg-max', min: 12, max: 15 }, { lvl: 15, lvlreq: 10, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力max', { code: 'dmg-max', min: 15, max: 25 }, { lvl: 25, lvlreq: 15, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力max', { code: 'dmg-max', min: 25, max: 30 }, { lvl: 40, lvlreq: 25, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW), M_ETS.MAGIC_STAFF],
    ['攻击力max', { code: 'dmg-max', min: 30, max: 40 }, { lvl: 55, lvlreq: 40, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW), M_ETS.MAGIC_STAFF],

    ['准确率', { code: 'att', min: 20, max: 30 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW), M_ETS.MAGIC_STAFF],
    ['准确率', { code: 'att', min: 40, max: 50 }, { lvl: 15, lvlreq: 10, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW), M_ETS.MAGIC_STAFF],
    ['准确率', { code: 'att', min: 60, max: 80 }, { lvl: 35, lvlreq: 20, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW), M_ETS.MAGIC_STAFF],
    ['准确率', { code: 'att', min: 70, max: 120 }, { lvl: 45, lvlreq: 30, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW), M_ETS.MAGIC_STAFF],

    ['防御', { code: 'ac', min: 15, max: 30 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.ARMO.concat(M_ITS.CM32_JEW)],
    ['防御', { code: 'ac', min: 30, max: 50 }, { lvl: 15, lvlreq: 8, freq: 1 }, M_ITS.ARMO.concat(M_ITS.CM32_JEW)],
    ['防御', { code: 'ac', min: 50, max: 80 }, { lvl: 25, lvlreq: 13, freq: 1 }, M_ITS.ARMO.concat(M_ITS.CM32_JEW)],
    ['防御', { code: 'ac', min: 80, max: 120 }, { lvl: 45, lvlreq: 23, freq: 1 }, M_ITS.ARMO.concat(M_ITS.CM3_JEW)],
    ['防御', { code: 'ac', min: 120, max: 150 }, { lvl: 55, lvlreq: 43, freq: 1 }, M_ITS.ARMO.concat(M_ITS.CM3_JEW)],

    ['移动速度', { code: 'move2', min: 15, max: 15 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.MOVE2.concat(M_ITS.CM3_JEW)],
    ['移动速度', { code: 'move2', min: 20, max: 20 }, { lvl: 15, lvlreq: 10, freq: 1 }, M_ITS.MOVE2.concat(M_ITS.CM3_JEW)],
    ['移动速度', { code: 'move2', min: 25, max: 25 }, { lvl: 35, lvlreq: 23, freq: 1 }, M_ITS.MOVE2.concat(M_ITS.CM3_JEW)],
    ['移动速度', { code: 'move2', min: 30, max: 30 }, { lvl: 55, lvlreq: 43, freq: 1 }, M_ITS.MOVE2.concat(M_ITS.CM3_JEW)],

    ['全抗性', { code: 'res-all', min: 3, max: 5 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW)],
    ['全抗性', { code: 'res-all', min: 5, max: 9 }, { lvl: 15, lvlreq: 8, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['全抗性', { code: 'res-all', min: 9, max: 12 }, { lvl: 25, lvlreq: 13, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['全抗性', { code: 'res-all', min: 12, max: 15 }, { lvl: 35, lvlreq: 23, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['全抗性', { code: 'res-all', min: 15, max: 18 }, { lvl: 55, lvlreq: 43, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],

    ['全属性', { code: 'all-stats', min: 2, max: 4 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['全属性', { code: 'all-stats', min: 3, max: 6 }, { lvl: 15, lvlreq: 8, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['全属性', { code: 'all-stats', min: 5, max: 8 }, { lvl: 35, lvlreq: 23, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['全属性', { code: 'all-stats', min: 6, max: 10 }, { lvl: 45, lvlreq: 30, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],

    ['击杀回蓝', { code: 'mana-kill', min: 2, max: 3 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.M_EK.concat(M_ITS.CM32_JEW)],
    ['击杀回蓝', { code: 'mana-kill', min: 3, max: 5 }, { lvl: 15, lvlreq: 13, freq: 1 }, M_ITS.M_EK.concat(M_ITS.CM32_JEW)],
    ['击杀回蓝', { code: 'mana-kill', min: 5, max: 7 }, { lvl: 35, lvlreq: 23, freq: 1 }, M_ITS.M_EK.concat(M_ITS.CM32_JEW)],
    ['击杀回蓝', { code: 'mana-kill', min: 7, max: 10 }, { lvl: 45, lvlreq: 30, freq: 1 }, M_ITS.M_EK.concat(M_ITS.CM3_JEW)],

    ['击杀回红', { code: 'heal-kill', min: 2, max: 3 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.H_EK.concat(M_ITS.CM321_JEW)],
    ['击杀回红', { code: 'heal-kill', min: 3, max: 5 }, { lvl: 15, lvlreq: 13, freq: 1 }, M_ITS.H_EK.concat(M_ITS.CM32_JEW)],
    ['击杀回红', { code: 'heal-kill', min: 5, max: 7 }, { lvl: 35, lvlreq: 23, freq: 1 }, M_ITS.H_EK.concat(M_ITS.CM32_JEW)],
    ['击杀回红', { code: 'heal-kill', min: 7, max: 10 }, { lvl: 45, lvlreq: 30, freq: 1 }, M_ITS.H_EK.concat(M_ITS.CM3_JEW)],

    ['物伤减免', { code: 'red-dmg', min: 2, max: 3 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['物伤减免', { code: 'red-dmg', min: 3, max: 5 }, { lvl: 15, lvlreq: 13, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['物伤减免', { code: 'red-dmg', min: 5, max: 7 }, { lvl: 35, lvlreq: 23, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['物伤减免', { code: 'red-dmg', min: 7, max: 10 }, { lvl: 45, lvlreq: 30, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],

    ['魔伤减免', { code: 'red-mag', min: 2, max: 3 }, { lvl: 5, lvlreq: 3, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['魔伤减免', { code: 'red-mag', min: 3, max: 5 }, { lvl: 15, lvlreq: 13, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['魔伤减免', { code: 'red-mag', min: 5, max: 7 }, { lvl: 35, lvlreq: 23, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['魔伤减免', { code: 'red-mag', min: 7, max: 10 }, { lvl: 45, lvlreq: 30, freq: 1 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
  ],
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////BOTH END/////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////SUFFIX BEGIN/////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ['skillboost', MOD_TYPE.SUFFIX, '技能强化词缀'],
  // ['att-skill', MOD_TYPE.SUFFIX, '攻击释放技能'],
  // ['hit-skill', MOD_TYPE.SUFFIX, '击中释放技能'],
  // ['gethit-skill', MOD_TYPE.SUFFIX, '被击中释放技能'],
  // ['kill-skill', MOD_TYPE.SUFFIX, '击杀释放技能'],
  // ['oskill', MOD_TYPE.SUFFIX, '赋予技能'],
  // ['skill', MOD_TYPE.SUFFIX, '强化已有技能'],
  'skillboost': [
    ['attskill', { code: 'att-skill', param: 47, min: 10, max: 6 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.WEAP, M_ETS.MAGIC_STAFF],
    ['attskill', { code: 'att-skill', param: 53, min: 5, max: 0 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.WEAP, M_ETS.MAGIC_STAFF],
    ['attskill', { code: 'att-skill', param: 'Frozen Orb', min: 16, max: 12 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.WEAP, M_ETS.MAGIC_STAFF],
    ['attskill', { code: 'att-skill', param: 'Glacial Spike', min: 25, max: 18 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.WEAP, M_ETS.MAGIC_STAFF],
    ['attskill', { code: 'att-skill', param: 'Nova', min: 15, max: 22 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.WEAP, M_ETS.MAGIC_STAFF],
    ['attskill', { code: 'att-skill', param: 'Charged Bolt', min: 20, max: 20 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.WEAP, M_ETS.MAGIC_STAFF],

    ['hitskill', { code: 'hit-skill', param: 47, min: 10, max: 6 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Life Tap', min: 5, max: 10 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Lower Resist', min: 15, max: 7 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Decrepify', min: 30, max: 1 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Twister', min: 5, max: 15 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Tornado', min: 20, max: 16 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Venom', min: 25, max: 15 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Taunt', min: 18, max: 18 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Tornado', min: 10, max: 9 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Bone Spear', min: 15, max: 10 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Frozen Orb', min: 9, max: 11 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Charged Bolt', min: 11, max: 9 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Static Field', min: 7, max: 13 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],
    ['hitskill', { code: 'hit-skill', param: 'Chain Lightning', min: 10, max: 17 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO, M_ETS.MAGIC_STAFF],

    ['gethitskill', { code: 'gethit-skill', param: 53, min: 5, max: 5 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO],
    ['gethitskill', { code: 'gethit-skill', param: 'Lower Resist', min: 20, max: 12 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO],
    ['gethitskill', { code: 'gethit-skill', param: 'Fire Wall', min: 25, max: 17 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO],

    ['oskill', { code: 'oskill', param: 'Guided Arrow', min: 3, max: 5 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CASTER],
    ['oskill', { code: 'oskill', param: 'Critical Strike', min: 2, max: 5 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CASTER],
    ['oskill', { code: 'oskill', param: 'Hydra', min: 10, max: 10 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CASTER],
    ['oskill', { code: 'oskill', param: 'Battle Command', min: 2, max: 6 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CASTER],
    ['oskill', { code: 'oskill', param: 'Whirlwind', min: 2, max: 3 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CASTER],
    ['oskill', { code: 'oskill', param: 'Arctic Blast', min: 7, max: 14 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CASTER],
    ['oskill', { code: 'oskill', param: 'Teleport', min: 1, max: 1 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CASTER],
    ['oskill', { code: 'oskill', param: 'Warmth', min: 5, max: 8 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CASTER],
    ['oskill', { code: 'oskill', param: 'Zeal', min: 1, max: 1 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CASTER],

    ['killskill', { code: 'kill-skill', param: 'Poison Nova', min: 50, max: 20 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.WEAP],
    ['killskill', { code: 'kill-skill', param: 'Enchant', min: 30, max: 21 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.WEAP],

    ['aura', { code: 'aura', param: 'Prayer', min: 12, max: 17 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Blessed Aim', min: 12, max: 15 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Concentration', min: 12, max: 15 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Defiance', min: 6, max: 12 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Resist Lightning', min: 7, max: 9 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Resist Cold', min: 7, max: 9 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Resist Fire', min: 7, max: 9 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Holy Bolt', min: 15, max: 15 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Holy Fire', min: 15, max: 15 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Holy Freeze', min: 18, max: 18 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Vigor', min: 10, max: 10 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Cleansing', min: 10, max: 10 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Might', min: 10, max: 10 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Redemption', min: 10, max: 10 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Sanctuary', min: 16, max: 18 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Fanaticism', min: 9, max: 9 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Meditation', min: 12, max: 17 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Thorns', min: 12, max: 17 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Salvation', min: 12, max: 17 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
    ['aura', { code: 'aura', param: 'Conviction', min: 12, max: 12 }, { lvl: 75, lvlreq: 50, freq: 1 }, M_ITS.NORMAL],
  ],

  // ['sor-fire', MOD_TYPE.SUFFIX, '火系技能'],
  // ['sor-ltng', MOD_TYPE.SUFFIX, '电系技能'],
  // ['sor-cold', MOD_TYPE.SUFFIX, '冰系技能'],
  // ['sor-mastery', MOD_TYPE.SUFFIX, '法术大师'],
  'sor-mastery': [
    ['fire-R1', { code: 'skill', param: 51, min: 3, max: 4, code2: 'skill', param2: 36, min2: 3, max2: 4, code3: 'skill', param3: 47, min3: 3, max3: 4 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['fire-R2', { code: 'skill', param: 51, min: 2, max: 3, code2: 'skill', param2: 36, min2: 2, max2: 3, code3: 'skill', param3: 47, min3: 2, max3: 3 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['fire-R3', { code: 'skill', param: 51, min: 1, max: 3, code2: 'skill', param2: 36, min2: 1, max2: 3, code3: 'skill', param3: 47, min3: 1, max3: 3 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['ltng-R1', { code: 'skill', param: 38, min: 3, max: 4, code2: 'skill', param2: 49, min2: 3, max2: 4, code3: 'skill', param3: 53, min3: 3, max3: 4 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['ltng-R2', { code: 'skill', param: 38, min: 2, max: 3, code2: 'skill', param2: 49, min2: 2, max2: 3, code3: 'skill', param3: 53, min3: 2, max3: 3 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['ltng-R3', { code: 'skill', param: 38, min: 1, max: 3, code2: 'skill', param2: 49, min2: 1, max2: 3, code3: 'skill', param3: 53, min3: 1, max3: 3 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['cold-R1', { code: 'skill', param: 39, min: 3, max: 4, code2: 'skill', param2: 45, min2: 3, max2: 4, code3: 'skill', param3: 55, min3: 3, max3: 4 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['cold-R2', { code: 'skill', param: 39, min: 2, max: 3, code2: 'skill', param2: 45, min2: 2, max2: 3, code3: 'skill', param3: 55, min3: 2, max3: 3 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['cold-R3', { code: 'skill', param: 39, min: 1, max: 3, code2: 'skill', param2: 45, min2: 1, max2: 3, code3: 'skill', param3: 55, min3: 1, max3: 3 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['mastery-R1', { code: 'skill', param: 61, min: 3, max: 4, code2: 'skill', param2: 63, min2: 3, max2: 4, code3: 'skill', param3: 65, min3: 3, max3: 4 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['mastery-R2', { code: 'skill', param: 61, min: 2, max: 3, code2: 'skill', param2: 63, min2: 2, max2: 3, code3: 'skill', param3: 65, min3: 2, max3: 3 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['mastery-R3', { code: 'skill', param: 61, min: 1, max: 2, code2: 'skill', param2: 63, min2: 1, max2: 2, code3: 'skill', param3: 65, min3: 1, max3: 2 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['BLIZZARD-R1', { code: 'skill', param: 'Blizzard', min: 4, max: 6 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['BLIZZARD-R2', { code: 'skill', param: 'Blizzard', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['BLIZZARD-R3', { code: 'skill', param: 'Blizzard', min: 2, max: 4 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['FrozenOrb-R1', { code: 'skill', param: 'Frozen Orb', min: 4, max: 6 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['FrozenOrb-R2', { code: 'skill', param: 'Frozen Orb', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['FrozenOrb-R3', { code: 'skill', param: 'Frozen Orb', min: 2, max: 4 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['GlacialSpike-R1', { code: 'skill', param: 'Glacial Spike', min: 4, max: 6 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['GlacialSpike-R2', { code: 'skill', param: 'Glacial Spike', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['GlacialSpike-R3', { code: 'skill', param: 'Glacial Spike', min: 2, max: 4 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['Nova-R1', { code: 'skill', param: 'Nova', min: 4, max: 6 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['Nova-R2', { code: 'skill', param: 'Nova', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['Nova-R3', { code: 'skill', param: 'Nova', min: 2, max: 4 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['ChainLightning-R1', { code: 'skill', param: 'Chain Lightning', min: 4, max: 6 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['ChainLightning-R2', { code: 'skill', param: 'Chain Lightning', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['ChainLightning-R3', { code: 'skill', param: 'Chain Lightning', min: 2, max: 4 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['Hydra-R1', { code: 'skill', param: 'Hydra', min: 4, max: 6 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['Hydra-R2', { code: 'skill', param: 'Hydra', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['Hydra-R3', { code: 'skill', param: 'Hydra', min: 2, max: 4 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['FireBall-R1', { code: 'skill', param: 'Fire Ball', min: 4, max: 6 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['FireBall-R2', { code: 'skill', param: 'Fire Ball', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['FireBall-R3', { code: 'skill', param: 'Fire Ball', min: 2, max: 4 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['Meteor-R1', { code: 'skill', param: 'Meteor', min: 4, max: 6 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['Meteor-R2', { code: 'skill', param: 'Meteor', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['Meteor-R3', { code: 'skill', param: 'Meteor', min: 2, max: 4 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
    ['FireWall-R1', { code: 'skill', param: 'Fire Wall', min: 4, max: 6 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.SOR_ONLY],
    ['FireWall-R2', { code: 'skill', param: 'Fire Wall', min: 3, max: 5 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.SOR_ONLY],
    ['FireWall-R3', { code: 'skill', param: 'Fire Wall', min: 2, max: 4 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.SOR_ONLY],
  ],
  'skill-rand': [
    ['AMA-R1', { code: 'skill-rand', param: 4, min: 6, max: 35 }, { lvl: 80, lvlreq: 55, freq: 2, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['AMA-R2', { code: 'skill-rand', param: 3, min: 6, max: 35 }, { lvl: 60, lvlreq: 35, freq: 2, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['AMA-R3', { code: 'skill-rand', param: 2, min: 6, max: 35 }, { lvl: 40, lvlreq: 15, freq: 2, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['SOR-R1', { code: 'skill-rand', param: 4, min: 36, max: 65 }, { lvl: 80, lvlreq: 55, freq: 2, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['SOR-R2', { code: 'skill-rand', param: 3, min: 36, max: 65 }, { lvl: 60, lvlreq: 35, freq: 2, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['SOR-R3', { code: 'skill-rand', param: 2, min: 36, max: 65 }, { lvl: 40, lvlreq: 15, freq: 2, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['NEC-R1', { code: 'skill-rand', param: 4, min: 66, max: 95 }, { lvl: 80, lvlreq: 55, freq: 2, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['NEC-R2', { code: 'skill-rand', param: 3, min: 66, max: 95 }, { lvl: 60, lvlreq: 35, freq: 2, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['NEC-R3', { code: 'skill-rand', param: 2, min: 66, max: 95 }, { lvl: 40, lvlreq: 15, freq: 2, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['PAL-R1', { code: 'skill-rand', param: 4, min: 96, max: 125 }, { lvl: 80, lvlreq: 55, freq: 2, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['PAL-R2', { code: 'skill-rand', param: 3, min: 96, max: 125 }, { lvl: 60, lvlreq: 35, freq: 2, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['PAL-R3', { code: 'skill-rand', param: 2, min: 96, max: 125 }, { lvl: 40, lvlreq: 15, freq: 2, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['BAR-R1', { code: 'skill-rand', param: 4, min: 126, max: 155 }, { lvl: 80, lvlreq: 55, freq: 2, clz: 'bar' }, M_ITS.BAR_ONLY],
    ['BAR-R2', { code: 'skill-rand', param: 3, min: 126, max: 155 }, { lvl: 60, lvlreq: 35, freq: 2, clz: 'bar' }, M_ITS.BAR_ONLY],
    ['BAR-R3', { code: 'skill-rand', param: 2, min: 126, max: 155 }, { lvl: 40, lvlreq: 15, freq: 2, clz: 'bar' }, M_ITS.BAR_ONLY],
    ['DRU-R1', { code: 'skill-rand', param: 4, min: 221, max: 250 }, { lvl: 80, lvlreq: 55, freq: 2, clz: 'dru' }, M_ITS.DRU_ONLY],
    ['DRU-R2', { code: 'skill-rand', param: 3, min: 221, max: 250 }, { lvl: 60, lvlreq: 35, freq: 2, clz: 'dru' }, M_ITS.DRU_ONLY],
    ['DRU-R3', { code: 'skill-rand', param: 2, min: 221, max: 250 }, { lvl: 40, lvlreq: 15, freq: 2, clz: 'dru' }, M_ITS.DRU_ONLY],
    ['ASS-R1', { code: 'skill-rand', param: 4, min: 251, max: 280 }, { lvl: 80, lvlreq: 55, freq: 2, clz: 'ass' }, M_ITS.ASS_ONLY],
    ['ASS-R2', { code: 'skill-rand', param: 3, min: 251, max: 280 }, { lvl: 60, lvlreq: 35, freq: 2, clz: 'ass' }, M_ITS.ASS_ONLY],
    ['ASS-R3', { code: 'skill-rand', param: 2, min: 251, max: 280 }, { lvl: 40, lvlreq: 15, freq: 2, clz: 'ass' }, M_ITS.ASS_ONLY],
  ],
  'dual-skilltab': [
    //AMA
    ['R2', { code: 'skilltab', param: 0, min: 1, max: 1, code2: 'skilltab', param2: 1, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R2', { code: 'skilltab', param: 0, min: 1, max: 1, code2: 'skilltab', param2: 2, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R2', { code: 'skilltab', param: 1, min: 1, max: 1, code2: 'skilltab', param2: 2, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R1', { code: 'skilltab', param: 0, min: 1, max: 2, code2: 'skilltab', param2: 1, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R1', { code: 'skilltab', param: 0, min: 1, max: 2, code2: 'skilltab', param2: 2, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    ['R1', { code: 'skilltab', param: 1, min: 1, max: 2, code2: 'skilltab', param2: 2, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'ama' }, M_ITS.AMA_ONLY],
    //SOR
    ['R2', { code: 'skilltab', param: 3, min: 1, max: 1, code2: 'skilltab', param2: 4, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skilltab', param: 3, min: 1, max: 1, code2: 'skilltab', param2: 5, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R2', { code: 'skilltab', param: 4, min: 1, max: 1, code2: 'skilltab', param2: 5, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R1', { code: 'skilltab', param: 3, min: 1, max: 2, code2: 'skilltab', param2: 4, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R1', { code: 'skilltab', param: 3, min: 1, max: 2, code2: 'skilltab', param2: 5, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    ['R1', { code: 'skilltab', param: 4, min: 1, max: 2, code2: 'skilltab', param2: 5, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'sor' }, M_ITS.SOR_ONLY],
    //NEC
    ['R2', { code: 'skilltab', param: 6, min: 1, max: 1, code2: 'skilltab', param2: 7, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R2', { code: 'skilltab', param: 6, min: 1, max: 1, code2: 'skilltab', param2: 8, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R2', { code: 'skilltab', param: 7, min: 1, max: 1, code2: 'skilltab', param2: 8, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R1', { code: 'skilltab', param: 6, min: 1, max: 2, code2: 'skilltab', param2: 7, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R1', { code: 'skilltab', param: 6, min: 1, max: 2, code2: 'skilltab', param2: 8, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    ['R1', { code: 'skilltab', param: 7, min: 1, max: 2, code2: 'skilltab', param2: 8, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'nec' }, M_ITS.NEC_ONLY],
    //PAL
    ['R2', { code: 'skilltab', param: 9, min: 1, max: 1, code2: 'skilltab', param2: 10, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R2', { code: 'skilltab', param: 9, min: 1, max: 1, code2: 'skilltab', param2: 11, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R2', { code: 'skilltab', param: 10, min: 1, max: 1, code2: 'skilltab', param2: 11, min2: 1, max2: 1 }, { lvl: 50, lvlreq: 25, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R1', { code: 'skilltab', param: 9, min: 1, max: 2, code2: 'skilltab', param2: 10, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R1', { code: 'skilltab', param: 9, min: 1, max: 2, code2: 'skilltab', param2: 11, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    ['R1', { code: 'skilltab', param: 10, min: 1, max: 2, code2: 'skilltab', param2: 11, min2: 1, max2: 2 }, { lvl: 70, lvlreq: 44, freq: 1, clz: 'pal' }, M_ITS.PAL_ONLY],
    //TODO
  ],

  'dmg': [
    ['R1', { code: 'dmg', min: 35, max: 50 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg', min: 25, max: 35 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg', min: 20, max: 25 }, { lvl: 40, lvlreq: 25, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg', min: 15, max: 20 }, { lvl: 25, lvlreq: 15, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R5', { code: 'dmg', min: 10, max: 15 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R6', { code: 'dmg', min: 5, max: 10 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'dmg', min: 25, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'dmg', min: 20, max: 25 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'dmg', min: 15, max: 20 }, { lvl: 40, lvlreq: 25, freq: 4 }, M_ITS.JEW],
    ['R4', { code: 'dmg', min: 10, max: 15 }, { lvl: 25, lvlreq: 15, freq: 4 }, M_ITS.JEW],
    ['R5', { code: 'dmg', min: 5, max: 10 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.JEW],
    ['R6', { code: 'dmg', min: 3, max: 5 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.JEW],
    ['R1', { code: 'dmg', min: 20, max: 30 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.CM3],
    ['R1', { code: 'dmg', min: 15, max: 20 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.CM32],
    ['R2', { code: 'dmg', min: 10, max: 15 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'dmg', min: 5, max: 10 }, { lvl: 40, lvlreq: 25, freq: 4 }, M_ITS.CM321],
  ],
  // ['dmg%', MOD_TYPE.SUFFIX, '攻击%'],
  'dmg%': [
    ['R1', { code: 'dmg%', min: 80, max: 100 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg%', min: 60, max: 80 }, { lvl: 70, lvlreq: 50, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg%', min: 40, max: 60 }, { lvl: 55, lvlreq: 35, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg%', min: 30, max: 45 }, { lvl: 40, lvlreq: 25, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R5', { code: 'dmg%', min: 20, max: 35 }, { lvl: 25, lvlreq: 15, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R6', { code: 'dmg%', min: 10, max: 20 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'dmg%', min: 30, max: 40 }, { lvl: 85, lvlreq: 65, freq: 3 }, M_ITS.CM3],
    ['R2', { code: 'dmg%', min: 20, max: 30 }, { lvl: 70, lvlreq: 45, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'dmg%', min: 15, max: 25 }, { lvl: 50, lvlreq: 30, freq: 3 }, M_ITS.CM32],
    ['R4', { code: 'dmg%', min: 10, max: 20 }, { lvl: 40, lvlreq: 20, freq: 3 }, M_ITS.CM32],
    ['R5', { code: 'dmg%', min: 10, max: 15 }, { lvl: 20, lvlreq: 10, freq: 3 }, M_ITS.CM321],
    ['R6', { code: 'dmg%', min: 10, max: 10 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.CM321],
    ['R1', { code: 'dmg%', min: 50, max: 60 }, { lvl: 85, lvlreq: 65, freq: 3 }, M_ITS.JEW],
    ['R2', { code: 'dmg%', min: 40, max: 50 }, { lvl: 70, lvlreq: 50, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'dmg%', min: 30, max: 40 }, { lvl: 55, lvlreq: 45, freq: 3 }, M_ITS.JEW],
    ['R4', { code: 'dmg%', min: 20, max: 30 }, { lvl: 40, lvlreq: 30, freq: 3 }, M_ITS.JEW],
    ['R5', { code: 'dmg%', min: 10, max: 20 }, { lvl: 25, lvlreq: 15, freq: 3 }, M_ITS.JEW],
    ['R6', { code: 'dmg%', min: 5, max: 10 }, { lvl: 15, lvlreq: 5, freq: 3 }, M_ITS.JEW],
  ],
  // ['dmg/lvl', MOD_TYPE.SUFFIX, '攻击/等级'],
  'dmg/lvl': [
    ['R1', { code: 'dmg/lvl', min: 30, max: 30 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg/lvl', min: 25, max: 25 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg/lvl', min: 20, max: 20 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg/lvl', min: 15, max: 15 }, { lvl: 15, lvlreq: 9, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'dmg/lvl', min: 20, max: 20 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.CM3],
    ['R2', { code: 'dmg/lvl', min: 15, max: 15 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'dmg/lvl', min: 10, max: 10 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.CM321],
    ['R4', { code: 'dmg/lvl', min: 5, max: 5 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.CM321],
    ['R1', { code: 'dmg/lvl', min: 15, max: 15 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.JEW],
    ['R2', { code: 'dmg/lvl', min: 12, max: 12 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'dmg/lvl', min: 10, max: 10 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.JEW],
    ['R4', { code: 'dmg/lvl', min: 8, max: 8 }, { lvl: 15, lvlreq: 9, freq: 3 }, M_ITS.JEW],
  ],
  'dmg-undead': [
    ['R1', { code: 'dmg-undead', min: 350, max: 450 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg-undead', min: 250, max: 350 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg-undead', min: 150, max: 250 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg-undead', min: 100, max: 150 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'dmg-undead', min: 100, max: 150 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-undead', min: 80, max: 100 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.CM32],
    ['R3', { code: 'dmg-undead', min: 60, max: 80 }, { lvl: 35, lvlreq: 20, freq: 2 }, M_ITS.CM321],
    ['R4', { code: 'dmg-undead', min: 40, max: 60 }, { lvl: 15, lvlreq: 10, freq: 2 }, M_ITS.CM321],
    ['R1', { code: 'dmg-undead', min: 100, max: 120 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'dmg-undead', min: 80, max: 100 }, { lvl: 40, lvlreq: 25, freq: 2 }, M_ITS.JEW],
    ['R1', { code: 'dmg-undead', min: 60, max: 80 }, { lvl: 20, lvlreq: 12, freq: 2 }, M_ITS.JEW],
  ],
  'dmg-demon': [
    ['R1', { code: 'dmg-demon', min: 300, max: 400 }, { lvl: 85, lvlreq: 60, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg-demon', min: 200, max: 300 }, { lvl: 60, lvlreq: 40, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg-demon', min: 150, max: 200 }, { lvl: 35, lvlreq: 20, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg-demon', min: 100, max: 150 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'dmg-demon', min: 100, max: 120 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-demon', min: 80, max: 100 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.CM32],
    ['R3', { code: 'dmg-demon', min: 60, max: 80 }, { lvl: 35, lvlreq: 20, freq: 2 }, M_ITS.CM321],
    ['R4', { code: 'dmg-demon', min: 50, max: 60 }, { lvl: 15, lvlreq: 10, freq: 2 }, M_ITS.CM321],
    ['R1', { code: 'dmg-demon', min: 80, max: 100 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'dmg-demon', min: 60, max: 80 }, { lvl: 40, lvlreq: 25, freq: 2 }, M_ITS.JEW],
    ['R1', { code: 'dmg-demon', min: 50, max: 60 }, { lvl: 20, lvlreq: 12, freq: 2 }, M_ITS.JEW],
  ],
  // ['crush', MOD_TYPE.SUFFIX, '破甲'],
  'crush': [
    ['R1', { code: 'crush', min: 30, max: 40 }, { lvl: 85, lvlreq: 65, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'crush', min: 20, max: 30 }, { lvl: 60, lvlreq: 45, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'crush', min: 15, max: 20 }, { lvl: 35, lvlreq: 15, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'crush', min: 10, max: 15 }, { lvl: 15, lvlreq: 8, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
  ],
  // ['reduce-ac', MOD_TYPE.SUFFIX, '防御穿透'],
  // ['deadly', MOD_TYPE.SUFFIX, '致命攻击'],
  // ['openwounds', MOD_TYPE.SUFFIX, '开放伤口'],
  'reduce-ac': [
    ['R1', { code: 'reduce-ac', min: 33, max: 33 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'reduce-ac', min: 25, max: 25 }, { lvl: 60, lvlreq: 45, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'reduce-ac', min: 20, max: 20 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'reduce-ac', min: 15, max: 15 }, { lvl: 15, lvlreq: 8, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],

  ],
  'deadly': [
    ['R1', { code: 'deadly', min: 35, max: 45 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'deadly', min: 25, max: 35 }, { lvl: 60, lvlreq: 45, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'deadly', min: 15, max: 25 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'deadly', min: 10, max: 15 }, { lvl: 15, lvlreq: 8, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],

  ],
  'openwounds': [
    ['R1', { code: 'openwounds', min: 30, max: 40 }, { lvl: 85, lvlreq: 65, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'openwounds', min: 20, max: 30 }, { lvl: 60, lvlreq: 45, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'openwounds', min: 15, max: 20 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'openwounds', min: 10, max: 15 }, { lvl: 15, lvlreq: 8, freq: 4 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
  ],

  // ['pierce', MOD_TYPE.SUFFIX, '穿透'],
  // ['nofreeze', MOD_TYPE.SUFFIX, '不冻结'],
  // ['half-freeze', MOD_TYPE.SUFFIX, '半冻结'],
  // ['freeze', MOD_TYPE.SUFFIX, '冻结'],
  // ['ignore-ac', MOD_TYPE.SUFFIX, '无视防御'],
  // ['reduce-ac', MOD_TYPE.SUFFIX, '防御穿透'],
  'pierce': [
    ['R1', { code: 'pierce', min: 35, max: 35 }, { lvl: 75, lvlreq: 65, freq: 1 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'pierce', min: 25, max: 25 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'pierce', min: 15, max: 15 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'pierce', min: 10, max: 10 }, { lvl: 15, lvlreq: 8, freq: 1 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
  ],
  'nofreeze': [
    ['R1', { code: 'nofreeze', min: 1, max: 1 }, { lvl: 55, lvlreq: 35, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
  ],
  'half-freeze': [
    ['R1', { code: 'half-freeze', min: 1, max: 1 }, { lvl: 35, lvlreq: 15, freq: 3 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
  ],
  'freeze': [
    ['R1', { code: 'freeze', min: 4, max: 4 }, { lvl: 70, lvlreq: 50, freq: 1 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'freeze', min: 3, max: 3 }, { lvl: 50, lvlreq: 30, freq: 1 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'freeze', min: 2, max: 2 }, { lvl: 30, lvlreq: 10, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'freeze', min: 1, max: 1 }, { lvl: 15, lvlreq: 5, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
  ],
  'ignore-ac': [
    ['R1', { code: 'ignore-ac', min: 1, max: 1 }, { lvl: 65, lvlreq: 35, freq: 2 }, M_ITS.MELE_MISS],
  ],
  'reduce-ac': [
    ['R1', { code: 'reduce-ac', min: 50, max: 50 }, { lvl: 80, lvlreq: 65, freq: 1 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'reduce-ac', min: 33, max: 33 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'reduce-ac', min: 25, max: 25 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'reduce-ac', min: 15, max: 15 }, { lvl: 15, lvlreq: 8, freq: 2 }, M_ITS.MELE_MISS, M_ETS.MAGIC_STAFF],
  ],
  // ['att', MOD_TYPE.SUFFIX, '准确率'],
  // ['att%', MOD_TYPE.SUFFIX, '准确率%'],
  // ['att/lvl', MOD_TYPE.SUFFIX, '准确率/等级'],
  // ['att%/lvl', MOD_TYPE.SUFFIX, '准确率%/等级'],
  'att': [
    ['R4', { code: 'att', min: 30, max: 40 }, { lvl: 15, lvlreq: 8, freq: 2 }, M_ITS.CM321_JEW],
    ['R3', { code: 'att', min: 50, max: 80 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.CM32_JEW],
    ['R2', { code: 'att', min: 80, max: 100 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.CM32_JEW],
    ['R1', { code: 'att', min: 100, max: 120 }, { lvl: 75, lvlreq: 65, freq: 1 }, M_ITS.CM3],
    ['R4', { code: 'att', min: 40, max: 60 }, { lvl: 15, lvlreq: 10, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'att', min: 60, max: 90 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'att', min: 90, max: 120 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'att', min: 120, max: 150 }, { lvl: 75, lvlreq: 65, freq: 1 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
  ],
  'att%': [
    ['R1', { code: 'att%', min: 70, max: 100 }, { lvl: 75, lvlreq: 65, freq: 1 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'att%', min: 50, max: 70 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'att%', min: 30, max: 50 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'att%', min: 20, max: 30 }, { lvl: 15, lvlreq: 10, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'att%', min: 70, max: 90 }, { lvl: 75, lvlreq: 65, freq: 1 }, M_ITS.CM3],
    ['R2', { code: 'att%', min: 50, max: 70 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.CM32_JEW],
    ['R3', { code: 'att%', min: 30, max: 50 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.CM32_JEW],
    ['R4', { code: 'att%', min: 20, max: 30 }, { lvl: 15, lvlreq: 8, freq: 2 }, M_ITS.CM321_JEW],
  ],
  // ['att-demon', MOD_TYPE.SUFFIX, '准确率-恶魔'],
  // ['att-undead', MOD_TYPE.SUFFIX, '准确率-不死'],
  'att-demon': [
    ['R1', { code: 'att-demon', min: 120, max: 200 }, { lvl: 75, lvlreq: 65, freq: 1 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'att-demon', min: 90, max: 160 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'att-demon', min: 60, max: 120 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'att-demon', min: 40, max: 80 }, { lvl: 15, lvlreq: 10, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'att-demon', min: 135, max: 180 }, { lvl: 75, lvlreq: 65, freq: 1 }, M_ITS.CM3],
    ['R2', { code: 'att-demon', min: 90, max: 135 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.CM32_JEW],
    ['R3', { code: 'att-demon', min: 60, max: 90 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.CM32_JEW],
    ['R4', { code: 'att-demon', min: 50, max: 60 }, { lvl: 15, lvlreq: 8, freq: 2 }, M_ITS.CM321_JEW],
  ],
  'att-undead': [
    ['R1', { code: 'att-undead', min: 240, max: 300 }, { lvl: 75, lvlreq: 65, freq: 1 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'att-undead', min: 180, max: 240 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'att-undead', min: 120, max: 180 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'att-undead', min: 100, max: 120 }, { lvl: 15, lvlreq: 10, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'att-undead', min: 160, max: 240 }, { lvl: 75, lvlreq: 65, freq: 1 }, M_ITS.CM3],
    ['R2', { code: 'att-undead', min: 120, max: 160 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.CM32_JEW],
    ['R3', { code: 'att-undead', min: 80, max: 120 }, { lvl: 35, lvlreq: 15, freq: 2 }, M_ITS.CM32_JEW],
    ['R4', { code: 'att-undead', min: 50, max: 80 }, { lvl: 15, lvlreq: 8, freq: 2 }, M_ITS.CM321_JEW],
  ],

  // ['dmg-fire', MOD_TYPE.SUFFIX, '火焰伤害'],
  // ['dmg-ltng', MOD_TYPE.SUFFIX, '电击伤害'],
  // ['dmg-cold', MOD_TYPE.SUFFIX, '冰冷伤害'],
  // ['dmg-pois', MOD_TYPE.SUFFIX, '毒素伤害'],
  // ['dmg-mag', MOD_TYPE.SUFFIX, '魔法伤害'],
  'dmg-fire': [
    ['R5', { code: 'dmg-fire', min: 10, max: 30 }, { lvl: 15, lvlreq: 8, freq: 3 }, M_ITS.CM321_JEW],
    ['R4', { code: 'dmg-fire', min: 30, max: 60 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_JEW],
    ['R3', { code: 'dmg-fire', min: 60, max: 90 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_JEW],
    ['R2', { code: 'dmg-fire', min: 90, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.CM3_JEW],
    ['R1', { code: 'dmg-fire', min: 120, max: 150 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R5', { code: 'dmg-fire', min: 30, max: 60 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg-fire', min: 60, max: 100 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg-fire', min: 100, max: 150 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg-fire', min: 150, max: 250 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'dmg-fire', min: 250, max: 350 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
  ],
  'dmg-ltng': [
    ['R1', { code: 'dmg-ltng', min: 120, max: 150 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'dmg-ltng', min: 90, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.CM3_JEW],
    ['R3', { code: 'dmg-ltng', min: 60, max: 90 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_JEW],
    ['R4', { code: 'dmg-ltng', min: 30, max: 60 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_JEW],
    ['R5', { code: 'dmg-ltng', min: 10, max: 30 }, { lvl: 15, lvlreq: 8, freq: 3 }, M_ITS.CM321_JEW],
    ['R1', { code: 'dmg-ltng', min: 250, max: 350 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg-ltng', min: 150, max: 250 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg-ltng', min: 100, max: 150 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg-ltng', min: 60, max: 100 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R5', { code: 'dmg-ltng', min: 30, max: 60 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
  ],
  'dmg-cold': [
    ['R5', { code: 'dmg-cold', param: 50, min: 10, max: 30 }, { lvl: 15, lvlreq: 8, freq: 3 }, M_ITS.CM321_JEW],
    ['R4', { code: 'dmg-cold', param: 50, min: 30, max: 60 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_JEW],
    ['R3', { code: 'dmg-cold', param: 50, min: 60, max: 90 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_JEW],
    ['R2', { code: 'dmg-cold', param: 50, min: 90, max: 120 }, { lvl: 70, lvlreq: 42, freq: 2 }, M_ITS.CM3_JEW],
    ['R1', { code: 'dmg-cold', param: 50, min: 120, max: 150 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R5', { code: 'dmg-cold', param: 50, min: 30, max: 60 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg-cold', param: 50, min: 60, max: 100 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg-cold', param: 50, min: 100, max: 150 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg-cold', param: 50, min: 150, max: 250 }, { lvl: 70, lvlreq: 43, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'dmg-cold', param: 50, min: 250, max: 350 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
  ],
  'dmg-pois': [
    ['R5', { code: 'dmg-pois', param: 75, min: 50, max: 100 }, { lvl: 15, lvlreq: 8, freq: 3 }, M_ITS.CM321_JEW],
    ['R4', { code: 'dmg-pois', param: 75, min: 100, max: 150 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_JEW],
    ['R3', { code: 'dmg-pois', param: 75, min: 150, max: 250 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_JEW],
    ['R2', { code: 'dmg-pois', param: 75, min: 250, max: 350 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.CM3_JEW],
    ['R1', { code: 'dmg-pois', param: 75, min: 350, max: 450 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R5', { code: 'dmg-pois', param: 75, min: 50, max: 100 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg-pois', param: 75, min: 100, max: 150 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg-pois', param: 75, min: 150, max: 250 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg-pois', param: 75, min: 250, max: 350 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'dmg-pois', param: 75, min: 350, max: 450 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
  ],
  'dmg-mag': [
    ['R5', { code: 'dmg-mag', min: 10, max: 30 }, { lvl: 15, lvlreq: 8, freq: 3 }, M_ITS.CM321_JEW],
    ['R4', { code: 'dmg-mag', min: 30, max: 60 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM321_JEW],
    ['R3', { code: 'dmg-mag', min: 60, max: 90 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CM32_JEW],
    ['R2', { code: 'dmg-mag', min: 90, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.CM3_JEW],
    ['R1', { code: 'dmg-mag', min: 120, max: 150 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.CM3],
    ['R5', { code: 'dmg-mag', min: 30, max: 60 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R4', { code: 'dmg-mag', min: 60, max: 100 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R3', { code: 'dmg-mag', min: 100, max: 150 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R2', { code: 'dmg-mag', min: 150, max: 250 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
    ['R1', { code: 'dmg-mag', min: 250, max: 350 }, { lvl: 80, lvlreq: 65, freq: 2 }, M_ITS.NORMAL, M_ETS.MAGIC_STAFF],
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
    ['R4', { code: 'extra-fire', min: 3, max: 5 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3', { code: 'extra-fire', min: 5, max: 8 }, { lvl: 70, lvlreq: 35, freq: 3 }, M_ITS.CASTER_LOW],
    ['R2', { code: 'extra-fire', min: 5, max: 8 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1', { code: 'extra-fire', min: 6, max: 10 }, { lvl: 85, lvlreq: 62, freq: 1 }, M_ITS.CASTER_UPP],
  ],
  'extra-cold': [
    ['R4', { code: 'extra-cold', min: 3, max: 5 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3', { code: 'extra-cold', min: 5, max: 8 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CASTER_LOW],
    ['R2', { code: 'extra-cold', min: 5, max: 8 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1', { code: 'extra-cold', min: 6, max: 10 }, { lvl: 85, lvlreq: 63, freq: 1 }, M_ITS.CASTER_UPP],
  ],
  'extra-ltng': [
    ['R4', { code: 'extra-ltng', min: 3, max: 5 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3', { code: 'extra-ltng', min: 5, max: 8 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CASTER_LOW],
    ['R2', { code: 'extra-ltng', min: 5, max: 8 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1', { code: 'extra-ltng', min: 6, max: 10 }, { lvl: 85, lvlreq: 64, freq: 1 }, M_ITS.CASTER_UPP],
  ],
  'extra-pois': [
    ['R4', { code: 'extra-pois', min: 3, max: 5 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3', { code: 'extra-pois', min: 5, max: 8 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CASTER_LOW],
    ['R2', { code: 'extra-pois', min: 5, max: 8 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1', { code: 'extra-pois', min: 6, max: 10 }, { lvl: 85, lvlreq: 61, freq: 1 }, M_ITS.CASTER_UPP],
  ],
  'pierce-fire': [
    ['R4', { code: 'pierce-fire', min: 3, max: 5 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3', { code: 'pierce-fire', min: 5, max: 8 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CASTER_LOW],
    ['R2', { code: 'pierce-fire', min: 5, max: 8 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1', { code: 'pierce-fire', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
  ],
  'pierce-cold': [
    ['R4', { code: 'pierce-cold', min: 3, max: 5 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3', { code: 'pierce-cold', min: 5, max: 8 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CASTER_LOW],
    ['R2', { code: 'pierce-cold', min: 5, max: 8 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1', { code: 'pierce-cold', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
  ],
  'pierce-ltng': [
    ['R4', { code: 'pierce-ltng', min: 3, max: 5 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3', { code: 'pierce-ltng', min: 5, max: 8 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CASTER_LOW],
    ['R2', { code: 'pierce-ltng', min: 5, max: 8 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1', { code: 'pierce-ltng', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
  ],
  'pierce-pois': [
    ['R4', { code: 'pierce-pois', min: 3, max: 5 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3', { code: 'pierce-pois', min: 5, max: 8 }, { lvl: 50, lvlreq: 35, freq: 3 }, M_ITS.CASTER_LOW],
    ['R2', { code: 'pierce-pois', min: 5, max: 8 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1', { code: 'pierce-pois', min: 6, max: 10 }, { lvl: 85, lvlreq: 65, freq: 1 }, M_ITS.CASTER_UPP],
  ],
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////SUFFIX END///////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////PREFIX BEGIN////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // ['cast2', MOD_TYPE.PREFIX, '施法速度'],
  // ['swing2', MOD_TYPE.PREFIX, '攻击速度'],
  // ['balance2', MOD_TYPE.PREFIX, '打击恢复速度'],
  // ['move2', MOD_TYPE.PREFIX, '移动速度'],
  'cast2': [
    ['R1-1', { code: 'cast2', min: 20, max: 30 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.CASTER_UPP],
    ['R1-2', { code: 'cast2', min: 15, max: 25 }, { lvl: 55, lvlreq: 45, freq: 3 }, M_ITS.CASTER_UPP],
    ['R1-3', { code: 'cast2', min: 15, max: 20 }, { lvl: 35, lvlreq: 25, freq: 3 }, M_ITS.CASTER_UPP],
    ['R2-1', { code: 'cast2', min: 10, max: 15 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.CASTER_LOW],
    ['R2-2', { code: 'cast2', min: 10, max: 15 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CASTER_LOW],
    ['R3-1', { code: 'cast2', min: 10, max: 15 }, { lvl: 50, lvlreq: 15, freq: 4 }, M_ITS.CM3_JEW],
    ['R3-2', { code: 'cast2', min: 10, max: 15 }, { lvl: 30, lvlreq: 15, freq: 4 }, M_ITS.CM3_JEW],
    ['R3-3', { code: 'cast2', min: 10, max: 10 }, { lvl: 10, lvlreq: 15, freq: 4 }, M_ITS.CM3_JEW],
  ],
  'swing2': [
    ['R1', { code: 'swing2', min: 20, max: 30 }, { lvl: 75, lvlreq: 45, freq: 4 }, M_ITS.MELE_MISS],
    ['R2', { code: 'swing2', min: 15, max: 20 }, { lvl: 55, lvlreq: 25, freq: 5 }, M_ITS.MELE_MISS.concat(M_ITS.JEW)],
    ['R3', { code: 'swing2', min: 10, max: 15 }, { lvl: 20, lvlreq: 15, freq: 6 }, M_ITS.MELE_MISS.concat(M_ITS.CM3_JEW)],
  ],
  'move2': [
    ['R1', { code: 'move2', min: 25, max: 40 }, { lvl: 65, lvlreq: 45, freq: 4 }, [`shld`, `belt`, `boot`]],
    ['R2', { code: 'move2', min: 15, max: 30 }, { lvl: 50, lvlreq: 25, freq: 5 }, [`shld`, `belt`, `boot`].concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'move2', min: 10, max: 20 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.CM32_JEW],
  ],
  'balance2': [
    ['R1', { code: 'balance2', min: 25, max: 40 }, { lvl: 65, lvlreq: 45, freq: 4 }, M_ITS.NORMAL],
    ['R2', { code: 'balance2', min: 15, max: 30 }, { lvl: 50, lvlreq: 25, freq: 5 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'balance2', min: 10, max: 20 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.JEW.concat(M_ITS.CM32)],
  ],

  // ['hp-mana%', MOD_TYPE.SUFFIX, '血法双加'],
  // ['super-hp', MOD_TYPE.PREFIX, '大量HP'],
  // ['super-hp%', MOD_TYPE.PREFIX, '大量HP%'],
  // ['super-mana', MOD_TYPE.PREFIX, '大量MANA'],
  // ['super-mana%', MOD_TYPE.PREFIX, '大量MANA%'],
  // ['lvl-hp', MOD_TYPE.PREFIX, 'HP/lvl'],
  // ['lvl-mana', MOD_TYPE.PREFIX, 'MANA/lvl'],
  'hp-mana%': [
    ['R5', { code: 'mana%', min: 3, max: 4, code2: 'hp%', min2: 3, max2: 4 }, { lvl: 14, lvlreq: 9, freq: 3 }, M_ITS.CM321_JEW],
    ['R4', { code: 'mana%', min: 4, max: 6, code2: 'hp%', min2: 4, max2: 6 }, { lvl: 25, lvlreq: 15, freq: 3 }, M_ITS.CM32_JEW],
    ['R3', { code: 'mana%', min: 6, max: 8, code2: 'hp%', min2: 6, max2: 8 }, { lvl: 35, lvlreq: 25, freq: 2 }, M_ITS.CM32_JEW],
    ['R2', { code: 'mana%', min: 8, max: 10, code2: 'hp%', min2: 3, max2: 10 }, { lvl: 45, lvlreq: 35, freq: 2 }, M_ITS.CM3_JEW],
    ['R1', { code: 'mana%', min: 10, max: 12, code2: 'hp%', min2: 4, max2: 12 }, { lvl: 65, lvlreq: 50, freq: 1 }, M_ITS.CM3_JEW],
    ['R5', { code: 'mana%', min: 4, max: 6, code2: 'hp%', min2: 4, max2: 6 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.NORMAL],
    ['R4', { code: 'mana%', min: 6, max: 8, code2: 'hp%', min2: 6, max2: 8 }, { lvl: 25, lvlreq: 20, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'mana%', min: 8, max: 10, code2: 'hp%', min2: 3, max2: 10 }, { lvl: 45, lvlreq: 30, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mana%', min: 10, max: 12, code2: 'hp%', min2: 4, max2: 12 }, { lvl: 65, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R1', { code: 'mana%', min: 12, max: 15, code2: 'hp%', min2: 6, max2: 15 }, { lvl: 75, lvlreq: 60, freq: 1 }, M_ITS.NORMAL],
  ],
  'super-hp': [
    ['R1', { code: 'hp', min: 80, max: 100 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'hp', min: 60, max: 80 }, { lvl: 65, lvlreq: 40, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'hp', min: 50, max: 60 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R4', { code: 'hp', min: 35, max: 50 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.NORMAL],
    ['R5', { code: 'hp', min: 20, max: 35 }, { lvl: 20, lvlreq: 10, freq: 4 }, M_ITS.NORMAL],
    ['R6', { code: 'hp', min: 10, max: 20 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL],
    ['R1', { code: 'hp', min: 60, max: 80 }, { lvl: 65, lvlreq: 40, freq: 3 }, M_ITS.CM3_JEW],
    ['R2', { code: 'hp', min: 50, max: 60 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.CM32_JEW],
    ['R3', { code: 'hp', min: 35, max: 50 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_JEW],
    ['R4', { code: 'hp', min: 20, max: 35 }, { lvl: 20, lvlreq: 10, freq: 4 }, M_ITS.CM321_JEW],
    ['R5', { code: 'hp', min: 10, max: 20 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.CM321],
  ],
  'super-mana': [
    ['R1', { code: 'mana', min: 120, max: 150 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mana', min: 90, max: 120 }, { lvl: 65, lvlreq: 40, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'mana', min: 75, max: 90 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R4', { code: 'mana', min: 50, max: 75 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.NORMAL],
    ['R5', { code: 'mana', min: 30, max: 50 }, { lvl: 20, lvlreq: 10, freq: 4 }, M_ITS.NORMAL],
    ['R6', { code: 'mana', min: 20, max: 30 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL],
    ['R1', { code: 'mana', min: 90, max: 120 }, { lvl: 65, lvlreq: 40, freq: 3 }, M_ITS.CM3_JEW],
    ['R2', { code: 'mana', min: 75, max: 90 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.CM32_JEW],
    ['R3', { code: 'mana', min: 50, max: 75 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_JEW],
    ['R4', { code: 'mana', min: 30, max: 50 }, { lvl: 20, lvlreq: 10, freq: 4 }, M_ITS.CM321_JEW],
    ['R5', { code: 'mana', min: 20, max: 30 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.CM321],
  ],
  'super-hp%': [
    ['R1', { code: 'hp%', min: 15, max: 18 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'hp%', min: 10, max: 15 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'hp%', min: 6, max: 12 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R4', { code: 'hp%', min: 6, max: 8 }, { lvl: 20, lvlreq: 10, freq: 5 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R5', { code: 'hp%', min: 3, max: 6 }, { lvl: 13, lvlreq: 5, freq: 5 }, M_ITS.CM32_JEW],
  ],
  'super-mana%': [
    ['R1', { code: 'mana%', min: 18, max: 25 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mana%', min: 15, max: 20 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'mana%', min: 12, max: 18 }, { lvl: 35, lvlreq: 15, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R4', { code: 'mana%', min: 8, max: 12 }, { lvl: 20, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R5', { code: 'mana%', min: 3, max: 8 }, { lvl: 13, lvlreq: 5, freq: 3 }, M_ITS.CM32_JEW],
  ],
  'lvl-hp': [
    ['R1', { code: 'hp/lvl', min: 12, max: 14 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'hp/lvl', min: 10, max: 12 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'hp/lvl', min: 6, max: 10 }, { lvl: 35, lvlreq: 15, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R4', { code: 'hp/lvl', min: 6, max: 8 }, { lvl: 20, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R5', { code: 'hp/lvl', min: 4, max: 6 }, { lvl: 13, lvlreq: 5, freq: 3 }, M_ITS.CM32_JEW],
  ],
  'lvl-mana': [
    ['R1', { code: 'mana/lvl', min: 12, max: 16 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'mana/lvl', min: 10, max: 12 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'mana/lvl', min: 8, max: 10 }, { lvl: 35, lvlreq: 15, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R4', { code: 'mana/lvl', min: 6, max: 8 }, { lvl: 20, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R5', { code: 'mana/lvl', min: 4, max: 6 }, { lvl: 15, lvlreq: 5, freq: 3 }, M_ITS.CM32_JEW],
  ],
  // ['super-stam', MOD_TYPE.PREFIX, '体力上限'],
  'super-stam': [
    ['R1', { code: 'stam', min: 120, max: 150 }, { lvl: 75, lvlreq: 60, freq: 1 }, M_ITS.NORMAL],
    ['R2', { code: 'stam', min: 90, max: 120 }, { lvl: 65, lvlreq: 40, freq: 1 }, M_ITS.NORMAL],
    ['R3', { code: 'stam', min: 75, max: 90 }, { lvl: 50, lvlreq: 25, freq: 1 }, M_ITS.NORMAL],
    ['R4', { code: 'stam', min: 50, max: 75 }, { lvl: 35, lvlreq: 15, freq: 1 }, M_ITS.NORMAL],
    ['R5', { code: 'stam', min: 30, max: 50 }, { lvl: 20, lvlreq: 10, freq: 1 }, M_ITS.NORMAL],
    ['R6', { code: 'stam', min: 20, max: 30 }, { lvl: 10, lvlreq: 5, freq: 1 }, M_ITS.NORMAL],
    ['R1', { code: 'stam', min: 90, max: 120 }, { lvl: 65, lvlreq: 40, freq: 1 }, M_ITS.CM3_JEW],
    ['R2', { code: 'stam', min: 75, max: 90 }, { lvl: 50, lvlreq: 25, freq: 1 }, M_ITS.CM32_JEW],
    ['R3', { code: 'stam', min: 50, max: 75 }, { lvl: 35, lvlreq: 15, freq: 1 }, M_ITS.CM32_JEW],
    ['R4', { code: 'stam', min: 30, max: 50 }, { lvl: 20, lvlreq: 10, freq: 1 }, M_ITS.CM321_JEW],
    ['R5', { code: 'stam', min: 20, max: 30 }, { lvl: 10, lvlreq: 5, freq: 1 }, M_ITS.CM321],
  ],

  // ['all-stats', MOD_TYPE.PREFIX, '全属性'],
  // ['super-str', MOD_TYPE.PREFIX, '大量力量'],
  // ['super-vit', MOD_TYPE.PREFIX, '大量体能'],
  // ['super-dex', MOD_TYPE.PREFIX, '大量敏捷'],
  // ['super-enr', MOD_TYPE.PREFIX, '大量能量'],
  'all-stats': [
    ['R1', { code: 'all-stats', min: 15, max: 18 }, { lvl: 75, lvlreq: 60, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'all-stats', min: 12, max: 15 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R2', { code: 'all-stats', min: 10, max: 12 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R3', { code: 'all-stats', min: 6, max: 10 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R4', { code: 'all-stats', min: 5, max: 8 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R5', { code: 'all-stats', min: 3, max: 5 }, { lvl: 15, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW)],
  ],
  'super-str': [
    ['R1', { code: 'str', min: 20, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'str', min: 16, max: 24 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'str', min: 12, max: 16 }, { lvl: 40, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R4', { code: 'str', min: 8, max: 12 }, { lvl: 25, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R5', { code: 'str', min: 4, max: 8 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW)],
  ],
  'super-vit': [
    ['R1', { code: 'vit', min: 20, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'vit', min: 16, max: 24 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'vit', min: 12, max: 16 }, { lvl: 40, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R4', { code: 'vit', min: 8, max: 12 }, { lvl: 25, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R5', { code: 'vit', min: 4, max: 8 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW)],
  ],
  'super-dex': [
    ['R1', { code: 'dex', min: 20, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'dex', min: 16, max: 24 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'dex', min: 12, max: 16 }, { lvl: 40, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R4', { code: 'dex', min: 8, max: 12 }, { lvl: 25, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R5', { code: 'dex', min: 4, max: 8 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW)],
  ],
  'super-enr': [
    ['R1', { code: 'enr', min: 20, max: 30 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'enr', min: 16, max: 24 }, { lvl: 55, lvlreq: 40, freq: 2 }, M_ITS.NORMAL.concat(M_ITS.CM3_JEW)],
    ['R3', { code: 'enr', min: 12, max: 16 }, { lvl: 40, lvlreq: 25, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R4', { code: 'enr', min: 8, max: 12 }, { lvl: 25, lvlreq: 10, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM32_JEW)],
    ['R5', { code: 'enr', min: 4, max: 8 }, { lvl: 10, lvlreq: 5, freq: 3 }, M_ITS.NORMAL.concat(M_ITS.CM321_JEW)],
  ],

  // ['res-all', MOD_TYPE.PREFIX, '全抗性'],
  // ['res-fire', MOD_TYPE.PREFIX, '火焰抗性'],
  // ['res-cold', MOD_TYPE.PREFIX, '冰冷抗性'],
  // ['res-ltng', MOD_TYPE.PREFIX, '闪电抗性'],
  // ['res-pois', MOD_TYPE.PREFIX, '毒素抗性'],
  // ['dual-res', MOD_TYPE.SUFFIX, '双系抵抗'],
  'res-all': [
    ['R5', { code: 'res-all', min: 3, max: 6 }, { lvl: 12, lvlreq: 7, freq: 3 }, M_ITS.CM321],
    ['R4', { code: 'res-all', min: 6, max: 9 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.CM32_JEW],
    ['R3', { code: 'res-all', min: 9, max: 12 }, { lvl: 45, lvlreq: 25, freq: 2 }, M_ITS.CM32_JEW],
    ['R2', { code: 'res-all', min: 12, max: 15 }, { lvl: 60, lvlreq: 40, freq: 2 }, M_ITS.CM3_JEW],
    ['R1', { code: 'res-all', min: 15, max: 18 }, { lvl: 75, lvlreq: 55, freq: 1 }, M_ITS.CM3],
    ['R5', { code: 'res-all', min: 8, max: 10 }, { lvl: 15, lvlreq: 7, freq: 3 }, M_ITS.NORMAL],
    ['R4', { code: 'res-all', min: 10, max: 12 }, { lvl: 30, lvlreq: 15, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'res-all', min: 12, max: 16 }, { lvl: 45, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-all', min: 16, max: 20 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R1', { code: 'res-all', min: 20, max: 24 }, { lvl: 75, lvlreq: 55, freq: 1 }, M_ITS.NORMAL],
  ],
  'res-fire': [
    ['R1', { code: 'res-fire', min: 30, max: 48 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-fire', min: 20, max: 40 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'res-fire', min: 16, max: 30 }, { lvl: 35, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R4', { code: 'res-fire', min: 12, max: 20 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.NORMAL],
    ['R1', { code: 'res-fire', min: 20, max: 36 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'res-fire', min: 20, max: 30 }, { lvl: 55, lvlreq: 30, freq: 3 }, M_ITS.CM3_JEW],
    ['R3', { code: 'res-fire', min: 16, max: 24 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_JEW],
    ['R4', { code: 'res-fire', min: 6, max: 12 }, { lvl: 12, lvlreq: 7, freq: 4 }, M_ITS.CM321],
  ],
  'res-cold': [
    ['R1', { code: 'res-cold', min: 30, max: 48 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-cold', min: 20, max: 40 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'res-cold', min: 16, max: 30 }, { lvl: 35, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R4', { code: 'res-cold', min: 12, max: 20 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.NORMAL],
    ['R1', { code: 'res-cold', min: 20, max: 36 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'res-cold', min: 20, max: 30 }, { lvl: 55, lvlreq: 30, freq: 3 }, M_ITS.CM3_JEW],
    ['R3', { code: 'res-cold', min: 16, max: 24 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_JEW],
    ['R4', { code: 'res-cold', min: 6, max: 12 }, { lvl: 12, lvlreq: 7, freq: 4 }, M_ITS.CM321],
  ],
  'res-ltng': [
    ['R4', { code: 'res-ltng', min: 6, max: 12 }, { lvl: 12, lvlreq: 7, freq: 4 }, M_ITS.CM321],
    ['R3', { code: 'res-ltng', min: 16, max: 24 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_JEW],
    ['R2', { code: 'res-ltng', min: 20, max: 30 }, { lvl: 55, lvlreq: 30, freq: 3 }, M_ITS.CM3_JEW],
    ['R1', { code: 'res-ltng', min: 20, max: 36 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R4', { code: 'res-ltng', min: 12, max: 20 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.NORMAL],
    ['R3', { code: 'res-ltng', min: 16, max: 30 }, { lvl: 35, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R2', { code: 'res-ltng', min: 20, max: 40 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.NORMAL],
    ['R1', { code: 'res-ltng', min: 30, max: 48 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
  ],
  'res-pois': [
    ['R1', { code: 'res-pois', min: 30, max: 48 }, { lvl: 75, lvlreq: 55, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-pois', min: 20, max: 40 }, { lvl: 55, lvlreq: 35, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'res-pois', min: 16, max: 30 }, { lvl: 35, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R4', { code: 'res-pois', min: 12, max: 20 }, { lvl: 15, lvlreq: 7, freq: 4 }, M_ITS.NORMAL],
    ['R1', { code: 'res-pois', min: 20, max: 36 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'res-pois', min: 20, max: 30 }, { lvl: 55, lvlreq: 30, freq: 3 }, M_ITS.CM3_JEW],
    ['R3', { code: 'res-pois', min: 16, max: 24 }, { lvl: 35, lvlreq: 15, freq: 4 }, M_ITS.CM32_JEW],
    ['R4', { code: 'res-pois', min: 6, max: 12 }, { lvl: 12, lvlreq: 7, freq: 4 }, M_ITS.CM321],
  ],
  'dual-res': [
    ['R2-FC', { code: 'res-fire', min: 12, max: 20, code2: 'res-cold', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-FL', { code: 'res-fire', min: 12, max: 20, code2: 'res-ltng', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-FP', { code: 'res-fire', min: 12, max: 20, code2: 'res-pois', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-CL', { code: 'res-cold', min: 12, max: 20, code2: 'res-ltng', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-CP', { code: 'res-cold', min: 12, max: 20, code2: 'res-pois', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R2-LP', { code: 'res-ltng', min: 12, max: 20, code2: 'res-pois', min2: 12, max2: 20 }, { lvl: 45, lvlreq: 25, freq: 3 }, M_ITS.ARMO],
    ['R1-FC', { code: 'res-fire', min: 18, max: 30, code2: 'res-cold', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-FL', { code: 'res-fire', min: 18, max: 30, code2: 'res-ltng', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-FP', { code: 'res-fire', min: 18, max: 30, code2: 'res-pois', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-CL', { code: 'res-cold', min: 18, max: 30, code2: 'res-ltng', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-CP', { code: 'res-cold', min: 18, max: 30, code2: 'res-pois', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
    ['R1-LP', { code: 'res-ltng', min: 18, max: 30, code2: 'res-pois', min2: 18, max2: 30 }, { lvl: 65, lvlreq: 45, freq: 2 }, M_ITS.ARMO],
  ],

  // ['res-all-max', MOD_TYPE.PREFIX, '元素抗性上限'],//res-all-max
  // ['res-fire-max', MOD_TYPE.PREFIX, '火焰抗性上限'],
  // ['res-cold-max', MOD_TYPE.PREFIX, '冰冷抗性上限'],
  // ['res-ltng-max', MOD_TYPE.PREFIX, '闪电抗性上限'],
  // ['res-pois-max', MOD_TYPE.PREFIX, '毒素抗性上限'],
  'res-all-max': [
    ['R4', { code: 'res-all-max', min: 2, max: 2 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM32_JEW],
    ['R3', { code: 'res-all-max', min: 3, max: 3 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_JEW],
    ['R2', { code: 'res-all-max', min: 4, max: 4 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R1', { code: 'res-all-max', min: 5, max: 5 }, { lvl: 75, lvlreq: 45, freq: 1 }, M_ITS.NORMAL],
  ],
  'res-fire-max': [
    ['R1', { code: 'res-fire-max', min: 8, max: 10 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-fire-max', min: 6, max: 8 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-fire-max', min: 4, max: 6 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_JEW],
    ['R4', { code: 'res-fire-max', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 3 }, M_ITS.CM32_JEW],
  ],
  'res-cold-max': [
    ['R1', { code: 'res-cold-max', min: 8, max: 10 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-cold-max', min: 6, max: 8 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-cold-max', min: 4, max: 6 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_JEW],
    ['R4', { code: 'res-cold-max', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM32_JEW],
  ],
  'res-ltng-max': [
    ['R1', { code: 'res-ltng-max', min: 8, max: 10 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-ltng-max', min: 6, max: 8 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-ltng-max', min: 4, max: 6 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_JEW],
    ['R4', { code: 'res-ltng-max', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM32_JEW],
  ],
  'res-pois-max': [
    ['R1', { code: 'res-pois-max', min: 8, max: 10 }, { lvl: 75, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'res-pois-max', min: 6, max: 8 }, { lvl: 55, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'res-pois-max', min: 4, max: 6 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM3_JEW],
    ['R4', { code: 'res-pois-max', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 2 }, M_ITS.CM32_JEW],
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
    ['R3', { code: 'abs-mag', min: 6, max: 7 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.CM3_JEW],
    ['R4', { code: 'abs-mag', min: 5, max: 6 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.CM32_JEW],
  ],
  'abs-fire': [
    ['R1', { code: 'abs-fire', min: 8, max: 12 }, { lvl: 85, lvlreq: 45, freq: 3 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-fire', min: 7, max: 10 }, { lvl: 55, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-fire', min: 6, max: 7 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.CM3_JEW],
    ['R4', { code: 'abs-fire', min: 5, max: 6 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.CM32_JEW],
  ],
  'abs-cold': [
    ['R1', { code: 'abs-cold', min: 8, max: 12 }, { lvl: 85, lvlreq: 45, freq: 3 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-cold', min: 7, max: 10 }, { lvl: 55, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-cold', min: 6, max: 7 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.CM3_JEW],
    ['R4', { code: 'abs-cold', min: 5, max: 6 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.CM32_JEW],
  ],
  'abs-ltng': [
    ['R1', { code: 'abs-ltng', min: 8, max: 12 }, { lvl: 85, lvlreq: 45, freq: 3 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-ltng', min: 7, max: 10 }, { lvl: 55, lvlreq: 25, freq: 4 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-ltng', min: 6, max: 7 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.CM3_JEW],
    ['R4', { code: 'abs-ltng', min: 5, max: 6 }, { lvl: 40, lvlreq: 15, freq: 6 }, M_ITS.CM32_JEW],
  ],
  // 'abs-pois': [
  //   ['R1', { code: 'abs-pois', min: 8, max: 12 }, { lvl: 85,  lvlreq: 45, freq: 3 }, MOD_ITYPES['NORMAL']],
  // ],
  'abs-mag%': [
    ['R1', { code: 'abs-mag%', min: 5, max: 8 }, { lvl: 85, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-mag%', min: 4, max: 6 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-mag%', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.CM3_JEW],
    ['R4', { code: 'abs-mag%', min: 2, max: 3 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.CM32_JEW],
  ],
  'abs-fire%': [
    ['R1', { code: 'abs-fire%', min: 5, max: 8 }, { lvl: 85, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-fire%', min: 4, max: 6 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-fire%', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.CM3_JEW],
    ['R4', { code: 'abs-fire%', min: 2, max: 3 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.CM32_JEW],
  ],
  'abs-cold%': [
    ['R1', { code: 'abs-cold%', min: 5, max: 8 }, { lvl: 85, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-cold%', min: 4, max: 6 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-cold%', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.CM3_JEW],
    ['R4', { code: 'abs-cold%', min: 2, max: 3 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.CM32_JEW],
  ],
  'abs-ltng%': [
    ['R1', { code: 'abs-ltng%', min: 5, max: 8 }, { lvl: 85, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'abs-ltng%', min: 4, max: 6 }, { lvl: 55, lvlreq: 25, freq: 3 }, M_ITS.NORMAL],
    ['R3', { code: 'abs-ltng%', min: 3, max: 4 }, { lvl: 40, lvlreq: 15, freq: 4 }, M_ITS.CM3_JEW],
    ['R4', { code: 'abs-ltng%', min: 2, max: 3 }, { lvl: 40, lvlreq: 15, freq: 5 }, M_ITS.CM32_JEW],
  ],
  // 'abs-pois%': [
  //   ['R1', { code: 'abs-pois%', min: 5, max: 8 }, { lvl: 85,  lvlreq: 45, freq: 2 }, M_ITS['NORMAL']],
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
    ['R4', { code: 'ac-miss', min: 60, max: 80 }, { lvl: 15, lvlreq: 10, freq: 5 }, M_ITS.ARMO],
    ['R1', { code: 'ac-miss', min: 120, max: 150 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'ac-miss', min: 90, max: 120 }, { lvl: 55, lvlreq: 40, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'ac-miss', min: 60, max: 90 }, { lvl: 35, lvlreq: 20, freq: 4 }, M_ITS.CM32],
    ['R4', { code: 'ac-miss', min: 60, max: 60 }, { lvl: 15, lvlreq: 10, freq: 5 }, M_ITS.CM321],
    ['R1', { code: 'ac-miss', min: 100, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'ac-miss', min: 80, max: 100 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'ac-miss', min: 60, max: 80 }, { lvl: 30, lvlreq: 15, freq: 4 }, M_ITS.JEW],
    ['R4', { code: 'ac-miss', min: 40, max: 60 }, { lvl: 10, lvlreq: 7, freq: 5 }, M_ITS.JEW],
  ],
  'ac-hth': [
    ['R1', { code: 'ac-hth', min: 160, max: 200 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'ac-hth', min: 120, max: 160 }, { lvl: 55, lvlreq: 40, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'ac-hth', min: 80, max: 120 }, { lvl: 35, lvlreq: 20, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'ac-hth', min: 60, max: 80 }, { lvl: 15, lvlreq: 10, freq: 5 }, M_ITS.ARMO],
    ['R1', { code: 'ac-hth', min: 120, max: 150 }, { lvl: 75, lvlreq: 50, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'ac-hth', min: 90, max: 120 }, { lvl: 55, lvlreq: 40, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'ac-hth', min: 60, max: 90 }, { lvl: 35, lvlreq: 20, freq: 4 }, M_ITS.CM32],
    ['R4', { code: 'ac-hth', min: 60, max: 60 }, { lvl: 15, lvlreq: 10, freq: 5 }, M_ITS.CM321],
    ['R1', { code: 'ac-hth', min: 100, max: 120 }, { lvl: 70, lvlreq: 45, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'ac-hth', min: 80, max: 100 }, { lvl: 50, lvlreq: 25, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'ac-hth', min: 60, max: 80 }, { lvl: 30, lvlreq: 15, freq: 4 }, M_ITS.JEW],
    ['R4', { code: 'ac-hth', min: 40, max: 60 }, { lvl: 10, lvlreq: 7, freq: 5 }, M_ITS.JEW],
  ],
  'super-ac': [
    ['R1', { code: 'ac', min: 120, max: 150 }, { lvl: 76, lvlreq: 52, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'ac', min: 100, max: 120 }, { lvl: 56, lvlreq: 42, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'ac', min: 80, max: 100 }, { lvl: 36, lvlreq: 22, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'ac', min: 60, max: 80 }, { lvl: 16, lvlreq: 12, freq: 5 }, M_ITS.ARMO],
    ['R1', { code: 'ac', min: 100, max: 120 }, { lvl: 74, lvlreq: 51, freq: 2 }, M_ITS.CM3],
    ['R2', { code: 'ac', min: 70, max: 100 }, { lvl: 54, lvlreq: 41, freq: 3 }, M_ITS.CM32],
    ['R3', { code: 'ac', min: 50, max: 70 }, { lvl: 34, lvlreq: 21, freq: 4 }, M_ITS.CM32],
    ['R4', { code: 'ac', min: 40, max: 50 }, { lvl: 14, lvlreq: 11, freq: 5 }, M_ITS.CM321],
    ['R1', { code: 'ac', min: 80, max: 100 }, { lvl: 71, lvlreq: 43, freq: 2 }, M_ITS.JEW],
    ['R2', { code: 'ac', min: 60, max: 80 }, { lvl: 51, lvlreq: 26, freq: 3 }, M_ITS.JEW],
    ['R3', { code: 'ac', min: 40, max: 60 }, { lvl: 31, lvlreq: 14, freq: 4 }, M_ITS.JEW],
    ['R4', { code: 'ac', min: 30, max: 40 }, { lvl: 11, lvlreq: 7, freq: 5 }, M_ITS.JEW],
  ],
  'super-ac%': [
    ['R1', { code: 'ac%', min: 50, max: 60 }, { lvl: 75, lvlreq: 51, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'ac%', min: 40, max: 50 }, { lvl: 55, lvlreq: 41, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'ac%', min: 30, max: 40 }, { lvl: 35, lvlreq: 21, freq: 3 }, M_ITS.ARMO],
    ['R4', { code: 'ac%', min: 20, max: 30 }, { lvl: 15, lvlreq: 9, freq: 3 }, M_ITS.ARMO],
    ['R1', { code: 'ac%', min: 35, max: 50 }, { lvl: 72, lvlreq: 41, freq: 2 }, M_ITS.CM3_JEW],
    ['R2', { code: 'ac%', min: 25, max: 35 }, { lvl: 52, lvlreq: 31, freq: 3 }, M_ITS.CM32_JEW],
    ['R3', { code: 'ac%', min: 15, max: 25 }, { lvl: 32, lvlreq: 15, freq: 3 }, M_ITS.CM32_JEW],
    ['R4', { code: 'ac%', min: 10, max: 15 }, { lvl: 12, lvlreq: 7, freq: 3 }, M_ITS.CM321_JEW],
  ],
  'red-dmg': [
    ['R1', { code: 'red-dmg', min: 10, max: 12 }, { lvl: 73, lvlreq: 53, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'red-dmg', min: 8, max: 10 }, { lvl: 62, lvlreq: 36, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'red-dmg', min: 6, max: 8 }, { lvl: 40, lvlreq: 21, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'red-dmg', min: 4, max: 6 }, { lvl: 13, lvlreq: 7, freq: 5 }, M_ITS.ARMO],
    ['R1', { code: 'red-dmg', min: 8, max: 10 }, { lvl: 77, lvlreq: 49, freq: 2 }, M_ITS.CM3_JEW],
    ['R2', { code: 'red-dmg', min: 6, max: 8 }, { lvl: 57, lvlreq: 39, freq: 3 }, M_ITS.CM32_JEW],
    ['R3', { code: 'red-dmg', min: 4, max: 6 }, { lvl: 37, lvlreq: 19, freq: 3 }, M_ITS.CM32_JEW],
    ['R4', { code: 'red-dmg', min: 3, max: 4 }, { lvl: 14, lvlreq: 8, freq: 4 }, M_ITS.CM321_JEW],
  ],
  'red-dmg%': [
    ['R1', { code: 'red-dmg%', min: 12, max: 15 }, { lvl: 73, lvlreq: 53, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'red-dmg%', min: 9, max: 12 }, { lvl: 62, lvlreq: 36, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'red-dmg%', min: 6, max: 9 }, { lvl: 40, lvlreq: 21, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'red-dmg%', min: 3, max: 6 }, { lvl: 15, lvlreq: 8, freq: 5 }, M_ITS.ARMO],
    ['R1', { code: 'red-dmg%', min: 9, max: 12 }, { lvl: 77, lvlreq: 49, freq: 2 }, M_ITS.CM3_JEW],
    ['R2', { code: 'red-dmg%', min: 6, max: 9 }, { lvl: 57, lvlreq: 39, freq: 3 }, M_ITS.CM32_JEW],
    ['R3', { code: 'red-dmg%', min: 4, max: 6 }, { lvl: 37, lvlreq: 19, freq: 3 }, M_ITS.CM32_JEW],
    ['R4', { code: 'red-dmg%', min: 3, max: 4 }, { lvl: 17, lvlreq: 9, freq: 4 }, M_ITS.CM321_JEW],
  ],
  'red-mag': [
    ['R1', { code: 'red-mag', min: 10, max: 12 }, { lvl: 73, lvlreq: 53, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'red-mag', min: 8, max: 10 }, { lvl: 62, lvlreq: 36, freq: 3 }, M_ITS.ARMO],
    ['R3', { code: 'red-mag', min: 6, max: 8 }, { lvl: 40, lvlreq: 21, freq: 4 }, M_ITS.ARMO],
    ['R4', { code: 'red-mag', min: 4, max: 6 }, { lvl: 12, lvlreq: 6, freq: 5 }, M_ITS.ARMO],
    ['R1', { code: 'red-mag', min: 8, max: 10 }, { lvl: 77, lvlreq: 49, freq: 2 }, M_ITS.CM3_JEW],
    ['R2', { code: 'red-mag', min: 6, max: 8 }, { lvl: 57, lvlreq: 39, freq: 3 }, M_ITS.CM32_JEW],
    ['R3', { code: 'red-mag', min: 4, max: 6 }, { lvl: 37, lvlreq: 19, freq: 3 }, M_ITS.CM32_JEW],
    ['R4', { code: 'red-mag', min: 3, max: 4 }, { lvl: 13, lvlreq: 7, freq: 4 }, M_ITS.CM321_JEW],
  ],

  // ['mana-kill', MOD_TYPE.PREFIX, 'mana EK'],
  // ['heal-kill', MOD_TYPE.PREFIX, 'hp EK'],
  // ['regen-mana', MOD_TYPE.PREFIX, '法力恢复']
  'mana-kill': [
    ['R4', { code: 'mana-kill', min: 4, max: 6 }, { lvl: 13, lvlreq: 7, freq: 1 }, M_ITS.M_EK],
    ['R3', { code: 'mana-kill', min: 6, max: 8 }, { lvl: 41, lvlreq: 21, freq: 1 }, M_ITS.M_EK],
    ['R2', { code: 'mana-kill', min: 8, max: 10 }, { lvl: 62, lvlreq: 36, freq: 1 }, M_ITS.M_EK],
    ['R1', { code: 'mana-kill', min: 10, max: 12 }, { lvl: 76, lvlreq: 52, freq: 1 }, M_ITS.M_EK],
    ['R4', { code: 'mana-kill', min: 3, max: 4 }, { lvl: 11, lvlreq: 6, freq: 1 }, M_ITS.CM321_JEW],
    ['R3', { code: 'mana-kill', min: 4, max: 6 }, { lvl: 33, lvlreq: 18, freq: 1 }, M_ITS.CM32_JEW],
    ['R2', { code: 'mana-kill', min: 6, max: 8 }, { lvl: 53, lvlreq: 38, freq: 1 }, M_ITS.CM32_JEW],
    ['R1', { code: 'mana-kill', min: 8, max: 10 }, { lvl: 73, lvlreq: 48, freq: 1 }, M_ITS.CM3_JEW],
  ],
  'heal-kill': [
    ['R4', { code: 'heal-kill', min: 4, max: 6 }, { lvl: 16, lvlreq: 8, freq: 1 }, M_ITS.H_EK],
    ['R3', { code: 'heal-kill', min: 6, max: 8 }, { lvl: 41, lvlreq: 21, freq: 1 }, M_ITS.H_EK],
    ['R2', { code: 'heal-kill', min: 8, max: 10 }, { lvl: 62, lvlreq: 36, freq: 1 }, M_ITS.H_EK],
    ['R1', { code: 'heal-kill', min: 10, max: 12 }, { lvl: 76, lvlreq: 52, freq: 1 }, M_ITS.H_EK],
    ['R4', { code: 'heal-kill', min: 3, max: 4 }, { lvl: 13, lvlreq: 8, freq: 1 }, M_ITS.CM321_JEW],
    ['R3', { code: 'heal-kill', min: 4, max: 6 }, { lvl: 33, lvlreq: 18, freq: 1 }, M_ITS.CM32_JEW],
    ['R2', { code: 'heal-kill', min: 6, max: 8 }, { lvl: 53, lvlreq: 38, freq: 1 }, M_ITS.CM32_JEW],
    ['R1', { code: 'heal-kill', min: 8, max: 10 }, { lvl: 73, lvlreq: 48, freq: 1 }, M_ITS.CM3_JEW],
  ],
  'regen-mana': [
    ['R4', { code: 'regen-mana', min: 10, max: 15 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'regen-mana', min: 15, max: 20 }, { lvl: 20, lvlreq: 15, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'regen-mana', min: 20, max: 30 }, { lvl: 40, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R1', { code: 'regen-mana', min: 30, max: 40 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R4', { code: 'regen-mana', min: 10, max: 15 }, { lvl: 11, lvlreq: 6, freq: 2 }, M_ITS.CM321_JEW],
    ['R3', { code: 'regen-mana', min: 15, max: 20 }, { lvl: 15, lvlreq: 16, freq: 2 }, M_ITS.CM32_JEW],
    ['R2', { code: 'regen-mana', min: 20, max: 30 }, { lvl: 35, lvlreq: 26, freq: 2 }, M_ITS.CM32_JEW],
    ['R1', { code: 'regen-mana', min: 30, max: 40 }, { lvl: 55, lvlreq: 46, freq: 2 }, M_ITS.CM3_JEW],
  ],

  // ['regen-stam', MOD_TYPE.PREFIX, '体力恢复'],  
  // ['regen', MOD_TYPE.PREFIX, '生命恢复'],
  'regen-stam': [
    ['R4', { code: 'regen-stam', min: 10, max: 20 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.ARMO],
    ['R3', { code: 'regen-stam', min: 20, max: 30 }, { lvl: 20, lvlreq: 15, freq: 2 }, M_ITS.ARMO],
    ['R2', { code: 'regen-stam', min: 30, max: 40 }, { lvl: 40, lvlreq: 25, freq: 2 }, M_ITS.ARMO],
    ['R1', { code: 'regen-stam', min: 40, max: 50 }, { lvl: 60, lvlreq: 45, freq: 1 }, M_ITS.ARMO],
    ['R4', { code: 'regen-stam', min: 10, max: 15 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.CM321_JEW],
    ['R3', { code: 'regen-stam', min: 15, max: 25 }, { lvl: 15, lvlreq: 16, freq: 2 }, M_ITS.CM32_JEW],
    ['R2', { code: 'regen-stam', min: 20, max: 30 }, { lvl: 35, lvlreq: 26, freq: 2 }, M_ITS.CM32_JEW],
    ['R1', { code: 'regen-stam', min: 30, max: 45 }, { lvl: 55, lvlreq: 46, freq: 1 }, M_ITS.CM3_JEW],
  ],
  'regen': [
    ['R4', { code: 'regen', min: 5, max: 20 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.NORMAL],
    ['R3', { code: 'regen', min: 10, max: 15 }, { lvl: 20, lvlreq: 15, freq: 2 }, M_ITS.NORMAL],
    ['R2', { code: 'regen', min: 15, max: 20 }, { lvl: 40, lvlreq: 25, freq: 2 }, M_ITS.NORMAL],
    ['R1', { code: 'regen', min: 20, max: 25 }, { lvl: 60, lvlreq: 45, freq: 2 }, M_ITS.NORMAL],
    ['R4', { code: 'regen', min: 5, max: 10 }, { lvl: 10, lvlreq: 5, freq: 2 }, M_ITS.CM321_JEW],
    ['R3', { code: 'regen', min: 10, max: 15 }, { lvl: 15, lvlreq: 16, freq: 2 }, M_ITS.CM32_JEW],
    ['R2', { code: 'regen', min: 15, max: 20 }, { lvl: 35, lvlreq: 26, freq: 2 }, M_ITS.CM32_JEW],
    ['R1', { code: 'regen', min: 20, max: 25 }, { lvl: 55, lvlreq: 46, freq: 2 }, M_ITS.CM3_JEW],
  ],
  //////////////////////////////////////////////////////////////////////////PREFIX END////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
  ////////////////////BOTH///////////////////////////
  ['easy-lvlup', MOD_TYPE.BOTH, '开荒之'],
  ['addxp', MOD_TYPE.BOTH, '经验值加成'],
  ['allskills', MOD_TYPE.BOTH, '所有技能'],
  ['cheap', MOD_TYPE.BOTH, '折扣'],
  ['super-magic', MOD_TYPE.BOTH, 'MF'],
  // ['lvl-magic', MOD_TYPE.BOTH, 'MF/lvl'],
  // ['lvl-gold', MOD_TYPE.BOTH, '金币%/lvl'],
  ['super-gold', MOD_TYPE.BOTH, '金币'],
  ////////////////////BOTH END///////////////////////////

  //////////////////////SUFFIX///////////////////////////
  // ['att-skill', MOD_TYPE.SUFFIX, '攻击释放技能'],
  // ['hit-skill', MOD_TYPE.SUFFIX, '击中释放技能'],
  // ['gethit-skill', MOD_TYPE.SUFFIX, '被击中释放技能'],
  // ['kill-skill', MOD_TYPE.SUFFIX, '击杀释放技能'],
  // ['oskill', MOD_TYPE.SUFFIX, '赋予技能'],
  // ['skill', MOD_TYPE.SUFFIX, '强化已有技能'],
  ['skillboost', MOD_TYPE.SUFFIX, '技能大师'],

  // ['sor-fire', MOD_TYPE.SUFFIX, '火系技能'],
  // ['sor-ltng', MOD_TYPE.SUFFIX, '电系技能'],
  // ['sor-cold', MOD_TYPE.SUFFIX, '冰系技能'],
  ['sor-mastery', MOD_TYPE.SUFFIX, '法术大师'],

  ['dmg', MOD_TYPE.SUFFIX, '攻击'],
  ['dmg%', MOD_TYPE.SUFFIX, '攻击%'],
  ['crush', MOD_TYPE.SUFFIX, '破甲'],
  ['dmg/lvl', MOD_TYPE.SUFFIX, '攻击/等级'],
  ['dmg-undead', MOD_TYPE.SUFFIX, '对不死攻击'],
  ['dmg-demon', MOD_TYPE.SUFFIX, '对恶魔攻击'],

  ['reduce-ac', MOD_TYPE.SUFFIX, '防御穿透'],
  // ['bloody', MOD_TYPE.SUFFIX, '血腥攻击'],
  ['deadly', MOD_TYPE.SUFFIX, '致命攻击'],
  ['openwounds', MOD_TYPE.SUFFIX, '开放伤口'],

  //pierce,nofreeze,half-freeze,freeze,
  //att,att%,att/lvl,att%/lvl
  //att-demon,att-undead,att-dem/lvl,att-und/lvl
  //ignore-ac,reduce-ac
  ['pierce', MOD_TYPE.SUFFIX, '穿透'],
  ['nofreeze', MOD_TYPE.SUFFIX, '不冻结'],
  ['half-freeze', MOD_TYPE.SUFFIX, '半冻结'],
  ['freeze', MOD_TYPE.SUFFIX, '冻结'],
  ['ignore-ac', MOD_TYPE.SUFFIX, '无视防御'],
  ['reduce-ac', MOD_TYPE.SUFFIX, '防御穿透'],

  ['att', MOD_TYPE.SUFFIX, '准确率'],
  ['att%', MOD_TYPE.SUFFIX, '准确率%'],
  // ['att/lvl', MOD_TYPE.SUFFIX, '准确率/等级'],
  // ['att%/lvl', MOD_TYPE.SUFFIX, '准确率%/等级'],
  ['att-demon', MOD_TYPE.SUFFIX, '准确率-恶魔'],
  ['att-undead', MOD_TYPE.SUFFIX, '准确率-不死'],

  ['dmg-fire', MOD_TYPE.SUFFIX, '火焰伤害'],
  ['dmg-ltng', MOD_TYPE.SUFFIX, '电击伤害'],
  ['dmg-cold', MOD_TYPE.SUFFIX, '冰冷伤害'],
  ['dmg-pois', MOD_TYPE.SUFFIX, '毒素伤害'],
  ['dmg-mag', MOD_TYPE.SUFFIX, '魔法伤害'],

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
  //////////////////////SUFFIX END///////////////////////////

  //////////////////////PREFIX///////////////////////////
  ['cast2', MOD_TYPE.PREFIX, '施法速度'],
  ['swing2', MOD_TYPE.PREFIX, '攻击速度'],
  ['balance2', MOD_TYPE.PREFIX, '打击恢复速度'],
  ['move2', MOD_TYPE.PREFIX, '移动速度'],

  ['hp-mana%', MOD_TYPE.PREFIX, '血法双加'],
  ['super-hp', MOD_TYPE.PREFIX, 'HP上限'],
  ['super-mana', MOD_TYPE.PREFIX, '法力上限'],
  ['super-stam', MOD_TYPE.PREFIX, '体力上限'],
  ['super-hp%', MOD_TYPE.PREFIX, '大量HP%'],
  ['super-mana%', MOD_TYPE.PREFIX, '大量MANA%'],
  ['lvl-hp', MOD_TYPE.PREFIX, 'HP/lvl'],
  ['lvl-mana', MOD_TYPE.PREFIX, 'MANA/lvl'],

  ['all-stats', MOD_TYPE.PREFIX, '全属性'],
  ['super-str', MOD_TYPE.PREFIX, '力量'],
  ['super-vit', MOD_TYPE.PREFIX, '体能'],
  ['super-dex', MOD_TYPE.PREFIX, '敏捷'],
  ['super-enr', MOD_TYPE.PREFIX, '能量'],

  ['res-all', MOD_TYPE.PREFIX, '全元素抗性'],
  ['res-fire', MOD_TYPE.PREFIX, '火焰抗性'],
  ['res-cold', MOD_TYPE.PREFIX, '冰冷抗性'],
  ['res-ltng', MOD_TYPE.PREFIX, '闪电抗性'],
  ['res-pois', MOD_TYPE.PREFIX, '毒素抗性'],
  ['res-all-max', MOD_TYPE.PREFIX, '全元素抗性上限'],
  ['dual-res', MOD_TYPE.PREFIX, '双系抵抗'],
  ['res-fire-max', MOD_TYPE.PREFIX, '火抗上限'],
  ['res-cold-max', MOD_TYPE.PREFIX, '冰抗上限'],
  ['res-ltng-max', MOD_TYPE.PREFIX, '电抗上限'],
  ['res-pois-max', MOD_TYPE.PREFIX, '毒抗上限'],

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

  ['ac-miss', MOD_TYPE.PREFIX, '远程防御'],
  ['ac-hth', MOD_TYPE.PREFIX, '近战防御'],
  ['super-ac', MOD_TYPE.PREFIX, '防御'],
  ['super-ac%', MOD_TYPE.PREFIX, '防御%'],
  ['red-dmg', MOD_TYPE.PREFIX, '物伤减免'],
  ['red-dmg%', MOD_TYPE.PREFIX, '物伤减免%'],
  ['red-mag', MOD_TYPE.PREFIX, '魔伤减免'],
  ['mana-kill', MOD_TYPE.PREFIX, 'MANA EK'],
  ['heal-kill', MOD_TYPE.PREFIX, 'HP EK'],
  ['regen-mana', MOD_TYPE.PREFIX, '法力恢复'],

  ['regen-stam', MOD_TYPE.PREFIX, '体力恢复'],
  ['regen', MOD_TYPE.PREFIX, '生命恢复'],
  //////////////////////PREFIX END///////////////////////////

];

function getModPrefix(modBase) {
  if (modBase != null && modBase.classspecific != null)
    return modBase.classspecific.toUpperCase() + '-';
  else
    return '';
}

let mssGroupID = Math.max(...mss.rows.map((row) => row['group'])) + 3000;
let mpsGroupID = Math.max(...mps.rows.map((row) => row['group'])) + 1000;

BOOST_MODIFIERS.forEach(([modName, modeType, modLable]) => {
  if (MOD_TYPE.SUFFIX == modeType || modeType == MOD_TYPE.BOTH) {
    mssGroupID = mssGroupID + 1;
  }
  if (MOD_TYPE.PREFIX == modeType || modeType == MOD_TYPE.BOTH) {
    mpsGroupID = mpsGroupID + 1;
  }

  const modProp = MOD_PROP[modName];
  if (modProp != null) {
    modProp.forEach(([modRank, modXs, modBase, modItypes, modEtypes]) => {

      let modClassPrefix = getModPrefix(modBase);
      itemNames.push({
        id: D2RMM.getNextStringID(),
        Key: `${modClassPrefix}${modName.toUpperCase()}-${modRank}`,
        enUS: `${modClassPrefix}${modName.toUpperCase()}-${modRank}`,
        zhTW: `${modClassPrefix}${modLable}${modRank}`
      });
      itemNames.push({
        id: D2RMM.getNextStringID(),
        Key: `${modClassPrefix}${modName.toUpperCase()}-M-${modRank}`,
        enUS: `${modClassPrefix}${modName.toUpperCase()}-M-${modRank}`,
        zhTW: `${modClassPrefix}${modLable}${modRank}`
      });

      //ITYPE的缺省值
      let itypes = modItypes == null ? M_ITS.NORMAL : modItypes;
      let etypes = modEtypes == null ? M_ETS.DEFAULT : modEtypes;
      const newModifier = {
        Name: `${modClassPrefix}${modName.toUpperCase()}-${modRank}`,
        version: 100,
        spawnable: 1,
        rare: 1,
        classspecific: modBase.clz,
        frequency: modBase.freq == null ? 2 : modBase.freq,
        level: modBase.lvl, levelreq: modBase.lvlreq,
        multiply: 0, add: 0,
        mod1code: modXs.code, mod1param: modXs.param, mod1min: modXs.min, mod1max: modXs.max,
        mod2code: modXs.code2, mod2param: modXs.param2, mod2min: modXs.min2, mod2max: modXs.max2,
        mod3code: modXs.code3, mod3param: modXs.param3, mod3min: modXs.min3, mod3max: modXs.max3,
        itype1: itypes[0], itype2: itypes[1], itype3: itypes[2], itype4: itypes[3], itype5: itypes[4], itype6: itypes[5], itype7: itypes[6],
        etype1: etypes[0], etype2: etypes[1], etype3: etypes[2], etype4: etypes[3], etype5: etypes[4],
        '*eol\r': 0,
      };

      //克隆一份为魔法词缀
      const newMagicModifier = {
        ...newModifier,
        Name: `${modClassPrefix}${modName.toUpperCase()}-M-${modRank}`,
        rare: 0
      };

      if (modeType === MOD_TYPE.SUFFIX || modeType === MOD_TYPE.BOTH) {
        const groupID = modName == 'easy-lvlup' ? mssGroupID++ : mssGroupID;
        newModifier.group = groupID;
        newMagicModifier.group = groupID;
        mss.rows.push(newModifier);
        mss.rows.push(newMagicModifier);
      };
      if (modeType === MOD_TYPE.PREFIX || modeType === MOD_TYPE.BOTH) {
        const groupID = modName == 'easy-lvlup' ? mpsGroupID++ : mpsGroupID;
        newModifier.group = groupID;
        newMagicModifier.group = groupID;
        mps.rows.push(newModifier);
        mps.rows.push(newMagicModifier);
      }
    });
  }
});


// function getLvl(lvl) {
//   if (lvl >= 85) {
//     return randLvlM5(lvl);
//   }
//   else
//     return randLvlAM5(lvl);
// }
// function getLvlreq(lvlreq) {
//   return randLvlM5(lvlreq);
// }
// function randLvlM5(lvl) {
//   var randBetween = (min, max) => min + Math.floor(Math.random() * (max - min));
//   return Math.max(lvl - randBetween(0, 5), 3);//不能低于3级。
// }
// function randLvlAM5(lvl) {
//   var randBetween = (min, max) => min + Math.floor(Math.random() * (max - min));
//   return Math.max(lvl + randBetween(-5, 6), 3);//不能低于3级。
// }

D2RMM.writeTsv(amFilename, ams);
D2RMM.writeTsv(mpFileName, mps);
D2RMM.writeTsv(msFileName, mss);

D2RMM.writeJson(itemNamesFilename, itemNames);
D2RMM.writeJson(itemNameaffixesFilename, itemNameaffixes);

