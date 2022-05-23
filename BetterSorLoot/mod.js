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

// CODE,LABEL
// skill-rand	3	36	60		
// const skilltab3m = new ModX('skilltab', '3', 1, 3);//sor
// const skilltab4m = new ModX('skilltab', '4', 1, 3);//sor
// const skilltab5m = new ModX('skilltab', '5', 1, 3);//sor
const SOR_BOOST_MODIFIERS = [
  ['skill-rand', '技能强化']
  // ,
  // ['skilltab', '技能页强化']
];
const RARE_AND_MAGIC = [
  ['rare', 1],
  ['magic', 0]
];
const SOR_POWER_TIERS = [
  ['tier1'],
  ['tier2'],
  ['tier3']
];
const SOR_TIER_ITYPES = {
  tier1: ['orb', 'staf', 'amul', 'circ'],
  tier2: ['ring', 'glov'],
  tier3: ['jew', 'char'],
};

//level，levelreq
const SOR_LVL = [
  [85, 70],
  [70, 55],
  [55, 40],
  [40, 25],
  [25, 10]
];
// const RARITY_LABEL = {
//   low: ['armo', 'weap'],
//   nor: ['armo', 'weap'],
//   hiq: ['armo', 'weap'],
// };
// const fromRarityLabel = RARITY_LABEL[fromRarity];
// const toRarityLabel = RARITY_LABEL[toRarity];

function getModValues(modCode, rarity, level, tierIndex) {
  if (tierIndex == 'tier1' && rarity == 'magic' && level >= 85) {
    return { code: modCode, param: 4, min: 36, max: 60 };
  }
  else if (tierIndex == 'tier1' && rarity == 'rare' && level >= 85) {
    return { code: modCode, param: 3, min: 36, max: 60 };
  }
  else if (tierIndex == 'tier2' && level >= 70) {
    return { code: modCode, param: 3, min: 36, max: 60 };
  } else if (tierIndex == 'tier2' && level >= 55) {
    return { code: modCode, param: 2, min: 36, max: 60 };
  }
  else if (tierIndex == 'tier3' && level >= 85) {
    return { code: modCode, param: 2, min: 36, max: 60 };
  }
  else {
    return { code: modCode, param: 1, min: 36, max: 60 };
  }
}

let groupID = Math.max(...mss.rows.map((row) => row['group']));

SOR_BOOST_MODIFIERS.forEach(([skillCode, skillLable]) => {
  RARE_AND_MAGIC.forEach(([rarity, rarityValue]) => {
    groupID = groupID + 1;
    SOR_POWER_TIERS.forEach((tierIndex) => {

      itemNames.push({
        id: D2RMM.getNextStringID(),
        Key: `SOA-${skillCode}-${tierIndex}`,
        enUS: `SOA-${skillCode}-${tierIndex}`,
        zhTW: `SOA-${skillCode}-${tierIndex}`
      });

      SOR_LVL.forEach(([level, levelreq]) => {
        const tierITypes = SOR_TIER_ITYPES[tierIndex];
        const mod1 = getModValues(skillCode, rarity, level, tierIndex);
        const newModifier = {
          Name: `SOA-${skillCode}-${tierIndex}`,
          version: 100,
          spawnable: 1,
          rare: `${rarityValue}`,
          frequency: 1,
          group: groupID,
          classspecific: 'sor',
          level: level,
          levelreq: levelreq,
          multiply: 0,
          add: 0,
          mod1code: skillCode,
          mod1param: mod1.param,
          mod1min: mod1.min,
          mod1max: mod1.max,
          itype1: tierITypes[0],
          itype2: tierITypes[1],
          itype3: tierITypes[2],
          itype4: tierITypes[3],
          itype5: tierITypes[4],
          itype6: tierITypes[5],
          itype7: tierITypes[6],
          '*eol\r': 0,
        };
        mss.rows.push(newModifier);
      });
    });
  });
});

D2RMM.writeTsv(amFilename, ams);
D2RMM.writeTsv(mpFileName, mps);
D2RMM.writeTsv(msFileName, mss);

D2RMM.writeJson(itemNamesFilename, itemNames);
D2RMM.writeJson(itemNameaffixesFilename, itemNameaffixes);

