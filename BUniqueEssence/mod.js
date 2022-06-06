const itemtypesFilename = 'global\\excel\\itemtypes.txt';
const miscFilename = 'global\\excel\\misc.txt';
const gemsFileName = 'global\\excel\\gems.txt';
const uniqueItemsFilename = 'global\\excel\\UniqueItems.txt';
const setItemsFilename = 'global\\excel\\SetItems.txt';
const cubemainFilename = 'global\\excel\\cubemain.txt';

const gems = D2RMM.readTsv(gemsFileName);
const misc = D2RMM.readTsv(miscFilename);
const itemtypes = D2RMM.readTsv(itemtypesFilename);
const uniqueItems = D2RMM.readTsv(uniqueItemsFilename);
const setItems = D2RMM.readTsv(setItemsFilename);
const cubemain = D2RMM.readTsv(cubemainFilename);

const itemModifiersFilename = 'local\\lng\\strings\\item-modifiers.json';
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemRunesFilename = 'local\\lng\\strings\\item-runes.json';
const itemsFilename = 'hd\\items\\items.json';

const items = D2RMM.readJson(itemsFilename);
const itemModifiers = D2RMM.readJson(itemModifiersFilename);
const itemRunes = D2RMM.readJson(itemRunesFilename);
const itemNames = D2RMM.readJson(itemNamesFilename);

const newItems = [...items];

const UNIQUE_CODE_PREFIX = {
  0: 'z',
  1: 'y',
  2: 'x',
  3: 'w',
  4: 'v',
  5: 'u',
}
const SET_CODE_PREFIX = {
  //j34 g34  d33
  0: 'k',
  1: 'm',
  2: 'l'
}

const INVALID_INDEX = ['Expansion', 'Armor', 'Elite Uniques', 'Rings', 'Class Specific'];
const DUPLICATE_INDEX = ['Rainbow Facet', 'Rainbow Stone', "Gheed's Lucky", 'Rings'];
const VALID_SETS = ["Immortal King", "Tal Rasha's Wrappings", "Bul-Kathos' Children", "M'avina's Battle Hymn", "Trang-Oul's Avatar", "Orphan's Call"];
// Aldur's Watchtower
// Angelical Raiment
// Arcanna's Tricks
// Arctic Gear
// Berserker's Garb
// Bul-Kathos' Children
// Cathan's Traps
// Civerb's Vestments
// Cleglaw's Brace
// Cow King's Leathers
// Death's Disguise
// Griswold's Legacy
// Heaven's Brethren
// Hsarus' Defense
// Hwanin's Majesty
// Immortal King
// Infernal Tools
// Iratha's Finery
// Isenhart's Armory
// M'avina's Battle Hymn
// McAuley's Folly
// Milabrega's Regalia
// Naj's Ancient Set
// Natalya's Odium
// Orphan's Call
// Sazabi's Grand Tribute
// Sigon's Complete Steel
// Tal Rasha's Wrappings
// Tancred's Battlegear
// The Disciple
// Trang-Oul's Avatar
// Vidala's Rig
// const ALL_SETS = ["Aldur's"];
function getEssenceRuneCode(unique, itemID) {
  const codePreifxIndex = Math.floor(itemID / 100);
  const codeIndex = itemID - codePreifxIndex * 100;
  const codeIndexString = codeIndex > 9 ? codeIndex.toString() : `0${codeIndex}`;
  const condPrefix = unique === 'unique' ? UNIQUE_CODE_PREFIX[codePreifxIndex] : SET_CODE_PREFIX[codePreifxIndex];
  return `${condPrefix}${codeIndexString}`;
}

const miscDirFilename = `hd\\items\\misc\\rune\\`;
const zodJsonFilename = `${miscDirFilename + 'zod_rune'}.json`;
const zodRuneJsonTemplate1 = D2RMM.readJson(zodJsonFilename);
const zodRuneJsonTemplate2 = D2RMM.readJson(zodJsonFilename);


let zodMiscItemTemplate;
misc.rows.forEach((item) => {
  if (item.name === 'Zod Rune') {
    zodMiscItemTemplate = item;
  }
});

uniqueItems.rows.forEach((uniqueItem) => {
  if (uniqueItem.index != null && !INVALID_INDEX.includes(uniqueItem.index)) {
    const essenceCode = getEssenceRuneCode('unique', uniqueItem['*ID']);
    newItems.push({ [`${essenceCode}`]: { asset: `rune/${essenceCode}_rune` } });

    const essenceFileName = `${miscDirFilename}${essenceCode}_rune.json`;
    D2RMM.writeJson(essenceFileName, zodRuneJsonTemplate1);
    addEssenceRunes(essenceCode, uniqueItem);

    //复制一份图标文件。可以考虑不同的装备类型使用不同的宝石或者珠宝图标。TODO
    D2RMM.copyFile(
      'texture/perfect_diamond2.sprite',
      `hd/global/ui/items/misc/rune/${essenceCode}_rune.sprite`,
      true // overwrite any conflicts
    );
  }
});


setItems.rows.forEach((setItem) => {
  if (setItem.index != null && !INVALID_INDEX.includes(setItem.index)) {
    if (setItem.index === "Cathan's Seal" || VALID_SETS.includes(setItem.set)) {
      const essenceCode = getEssenceRuneCode('set', setItem['*ID']);
      newItems.push({ [`${essenceCode}`]: { asset: `rune/${essenceCode}_rune` } });
      const essenceFileName = `${miscDirFilename}${essenceCode}_rune.json`;
      D2RMM.writeJson(essenceFileName, zodRuneJsonTemplate2);
      addEssenceRunes(essenceCode, setItem);

      //复制一份图标文件。可以考虑不同的装备类型使用不同的宝石或者珠宝图标。TODO
      D2RMM.copyFile(
        'texture/perfect_jew_dark_green.sprite',//绿色珠宝
        `hd/global/ui/items/misc/rune/${essenceCode}_rune.sprite`,
        true // overwrite any conflicts
      );
    }
  }
});

itemtypes.rows.forEach((itemtype) => {
  if (itemtype.Code === 'rune') {
    itemtypes.rows.push({
      ...itemtype,
      ItemType: `ESSENCE Rune`,
      Code: 'runz', //runz later
      // Equiv1	Equiv2
      Equiv1: 'rune',
      Equiv2: 'misc',
    });
  }
});

//精华符文通用描述
itemModifiers.push({
  id: D2RMM.getNextStringID(),
  Key: 'EssenceRune',
  enUS: 'Rune Extract From Unique Items',
  zhTW: '暗金物品提取的精华符文',
  zhCN: '暗金物品提取的精华符文',
});

D2RMM.writeJson(itemsFilename, newItems);
D2RMM.writeJson(itemModifiersFilename, itemModifiers);
D2RMM.writeJson(itemNamesFilename, itemNames);
D2RMM.writeJson(itemRunesFilename, itemRunes);

D2RMM.writeTsv(miscFilename, misc);
D2RMM.writeTsv(gemsFileName, gems);
D2RMM.writeTsv(cubemainFilename, cubemain);
D2RMM.writeTsv(itemtypesFilename, itemtypes);

// D2RMM.copyFile(
//   'hd/global/ui/items/misc/rune/k00_rune.sprite', 
//   '../../../../D2RMM 1.4/mods/BUniqueEssence/hd/global/ui/items/misc/rune/x00_rune.sprite', 
//   true // overwrite any conflicts
// );

// D2RMM.copyFile(
//   'hd', // <mod folder>\hd
//   'hd', // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
//   true // overwrite any conflicts
// );

function addEssenceRunes(essenceCode, item) {
  misc.rows.push({
    ...zodMiscItemTemplate,
    name: `ERune-${essenceCode}-${item.index}(${item['*ID']})`,
    ShowLevel: 1,
    cost: 2000,
    spawnable: 1,
    speed: 0,
    nodurability: 1,
    type: 'rune',
    type2: 'runz',
    //code	alternategfx	namestr
    code: `${essenceCode}`,
    alternategfx: `${essenceCode}`,
    namestr: `${essenceCode}`,
    //flippyfile  invfile
    flippyfile: 'flprun',
    invfile: 'invrZod',
    dropsound: 'item_rune',
    usesound: 'item_rune',
    spelldesc: 2,
    spelldescstr: 'EssenceRune',
    spelldesccolor: 7,
    // Transform: 3,
    // InvTrans: 3 //InvTrans - Controls the color palette change of the item for the inventory graphics
  });

  gems.rows.push({
    name: `ERune-${essenceCode}-${item.index}(${item['*ID']})`,
    letter: `${essenceCode}L`,
    transform: 18,
    code: `${essenceCode}`,
    weaponMod1Code: 'str',
    weaponMod1Min: 5,
    weaponMod1Max: 5,
    // helmMod1Code	helmMod1Param	helmMod1Min	helmMod1Max
    helmMod1Code: 'vit',
    helmMod1Min: 5,
    helmMod1Max: 5,

    // shieldMod1Code	shieldMod1Param	shieldMod1Min	shieldMod1Max
    shieldMod1Code: 'ac',
    shieldMod1Min: 50,
    shieldMod1Max: 50,
    'shieldMod3Max\r': 0
  });

  if (!DUPLICATE_INDEX.includes(item.index)) {
    cubemain.rows.push({
      description: `转换装备为精华符文：item->${essenceCode}`,
      enabled: 1,
      version: 100,
      numinputs: 2,
      'input 1': item.index,
      'input 2': 'wms',
      output: `${essenceCode}`,
      lvl: 99,
      'output b': `wms`,
      // 'b lvl': 99,
      '*eol\r': 0,
    });
    cubemain.rows.push({
      description: `转换精华符文为装备：${essenceCode}-> item`,
      enabled: 1,
      version: 100,
      numinputs: 1,
      lvl: 99,
      'input 1': `${essenceCode}`,
      output: `${item.index}`,
      '*eol\r': 0,
    });
  }

  let nameSTRING = itemNames.find((name) => name.Key === item.index);
  //符文名称
  itemNames.push({
    id: D2RMM.getNextStringID(),
    Key: `${essenceCode}`,
    enUS: `Essence Rune#${essenceCode}`,
    zhTW: `ÿcD精华符文ÿcQ#${essenceCode}ÿcD:${nameSTRING.zhTW}`
  });
  //符文说明
  itemRunes.push({
    id: D2RMM.getNextStringID(),
    Key: `${essenceCode}L`,
    enUS: `#${essenceCode}L`,
    zhTW: `ÿcD精华符文ÿcQ#${essenceCode}LÿcD`
  });
}

