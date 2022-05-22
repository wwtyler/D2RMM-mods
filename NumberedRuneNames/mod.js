// D2R colors runes as orange by default, but it seems to be based on item type
// rather than localization strings so it does not apply to the stacked versions
// we update the localization file to manually color the names of runes here
// so that it will also apply to the stacked versions of the runes

const itemRunesFilename = 'local\\lng\\strings\\item-runes.json';
const itemRunes = D2RMM.readJson(itemRunesFilename);
itemRunes.forEach((item) => {
  const itemtype = item.Key;
  if (itemtype.match(/^r[0-9]{2}$/) != null) {
    const runeNumber = itemtype.replace(/^r0?/, '');
    // update all localizations
    for (const key in item) {
      if (key !== 'id' && key !== 'Key') {
        if (runeNumber <= 8)
          item[key] = `ÿc0${item[key]} ÿc2#${runeNumber}`;
        if (runeNumber >= 9 && runeNumber <= 16)
          item[key] = `ÿc3${item[key]} ÿc2#${runeNumber}`;
        if (runeNumber >= 17 && runeNumber <= 24)
          item[key] = `ÿc8${item[key]} ÿc2#${runeNumber}`;
        if (runeNumber >= 25 && runeNumber <= 29)
          item[key] = `ÿcQ${item[key]} ÿc2#${runeNumber}`;
        if (runeNumber >= 30)
          item[key] = `ÿc;${item[key]} ÿc2#${runeNumber}`;
      }
    }
  }

  if (itemtype.match(/^r[0-9]{2}L$/) != null) {
    const runeNumber = itemtype.substring(1, 3);;
    // update all localizations
    for (const key in item) {
      if (key !== 'id' && key !== 'Key') {
        if (runeNumber <= 8)
          item[key] = `ÿc0${item[key]} ÿc2#${runeNumber}`;
        if (runeNumber >= 9 && runeNumber <= 16)
          item[key] = `ÿc3${item[key]} ÿc2#${runeNumber}`;
        if (runeNumber >= 17 && runeNumber <= 24)
          item[key] = `ÿc8${item[key]} ÿc2#${runeNumber}`;
        if (runeNumber >= 25 && runeNumber <= 29)
          item[key] = `ÿcQ${item[key]} ÿc2#${runeNumber}`;
        if (runeNumber >= 30)
          item[key] = `ÿc;${item[key]} ÿc2#${runeNumber}`;
      }
    }
  }
});

D2RMM.writeJson(itemRunesFilename, itemRunes);

//对所有的符文进行run1-run5的分级。
const miscFilename = 'global\\excel\\misc.txt';
const miscs = D2RMM.readTsv(miscFilename);
miscs.rows.forEach((item) => {
  const itemtype = item['type'];
  const itemCode = item['code'];
  if (itemtype != null && itemCode != null && itemtype === "rune") {
    const runeNumber = itemCode.replace(/^r0?/, '');
    if (runeNumber <= 8)
      item['type2'] = 'run1';
    if (runeNumber >= 9 && runeNumber <= 16)
      item['type2'] = 'run2';
    if (runeNumber >= 17 && runeNumber <= 24)
      item['type2'] = 'run3';
    if (runeNumber >= 25 && runeNumber <= 29)
      item['type2'] = 'run4';
    if (runeNumber >= 30)
      item['type2'] = 'run5';
  }
});

D2RMM.writeTsv(miscFilename, miscs);

const itemTypesFilename = 'global\\excel\\itemtypes.txt';
const itemTypes = D2RMM.readTsv(itemTypesFilename);
const inputItemBase = {
  ItemType: `Rune`,
  // Code: 'run1',
  'Equiv1': 'sock',
  // 'Equiv2': '',
  // Magic	=0,
  // Rare	= 0,
  Normal: 1,
  MaxSockets1: 0,
  MaxSockets2: 0,
  MaxSockets3: 0,
  MaxSocketsLevelThreshold1: 25,
  MaxSocketsLevelThreshold2: 40,
  Beltable: 0,
  TreasureClass: 0,
  Rarity: 3,
  VarInvGfx: 0,
  Repair: 0,
  Body: 0,
  Throwable: 0,
  Reload: 0,
  ReEquip: 0,
  AutoStack: 0,
  StorePage: 'misc',
  '*eol\r': '0',
}

itemTypes.rows.push({...inputItemBase, Code: 'run1',});
itemTypes.rows.push({...inputItemBase, Code: 'run2',});
itemTypes.rows.push({...inputItemBase, Code: 'run3',});
itemTypes.rows.push({...inputItemBase, Code: 'run4',});
itemTypes.rows.push({...inputItemBase, Code: 'run5',});
D2RMM.writeTsv(itemTypesFilename, itemTypes);