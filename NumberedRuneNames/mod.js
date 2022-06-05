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

  // spawnable
  // usesound
  if (item.usesound === 'item_gem') {
    item.spawnable = 1;
  }
});

D2RMM.writeTsv(miscFilename, miscs);

const itemTypesFilename = 'global\\excel\\itemtypes.txt';
const itemTypes = D2RMM.readTsv(itemTypesFilename);
const runeTypeBase = {
  ItemType: `Rune`,
  'Equiv1': 'rune',
  'Equiv2': 'sock',
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
itemTypes.rows.push({ ...runeTypeBase, Code: 'run1', });
itemTypes.rows.push({ ...runeTypeBase, Code: 'run2', });
itemTypes.rows.push({ ...runeTypeBase, Code: 'run3', });
itemTypes.rows.push({ ...runeTypeBase, Code: 'run4', });
itemTypes.rows.push({ ...runeTypeBase, Code: 'run5', });

// Perfect Gem	gem4	gem		0	0					0	0	0	0			1	0	0	25	0	40	0	0	3			0							misc	0
const gemTypeBase = {
  ItemType: `Perfect Gem`,
  'Equiv1': 'gem4',
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


// Perfect Amethyst	1	0	0	0	18			6	0	0	1	30000		gpv	gpv	gpv	16	1	1	0	0	0	flpgsv	invgsve		0	xxx			0	gema	gem4	item_gem	12	item_gem	0	0	5	0	0	0	0	0	0	0			0	-1	-1																0	0	0	non	0					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255	0	0	0	xxx	xxx						
// Perfect Topaz	1	0	0	0	18			7	0	0	1	30000		gpy	gpy	gpy	16	1	1	0	0	0	flpgsy	invgsye		0	xxx			0	gemt	gem4	item_gem	12	item_gem	0	0	5	0	0	0	0	0	0	0			0	-1	-1																0	0	0	non	0					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255	0	0	0	xxx	xxx						
// Perfect Sapphire	1	0	0	0	18			8	0	0	1	30000		gpb	gpb	gpb	16	1	1	0	0	0	flpgsb	invgsbe		0	xxx			0	gems	gem4	item_gem	12	item_gem	0	0	5	0	0	0	0	0	0	0			0	-1	-1																0	0	0	non	0					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255	0	0	0	xxx	xxx						
// Perfect Emerald	1	0	0	0	18			9	0	0	1	30000		gpg	gpg	gpg	16	1	1	0	0	0	flpgsg	invgsge		0	xxx			0	geme	gem4	item_gem	12	item_gem	0	0	5	0	0	0	0	0	0	0			0	-1	-1																0	0	0	non	0					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255	0	0	0	xxx	xxx						
// Perfect Ruby	1	0	0	0	18			10	0	0	1	30000		gpr	gpr	gpr	16	1	1	0	0	0	flpgsr	invgsre		0	xxx			0	gemr	gem4	item_gem	12	item_gem	0	0	5	0	0	0	0	0	0	0			0	-1	-1																0	0	0	non	0					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255	0	0	0	xxx	xxx						
// Perfect Diamond	1	0	0	0	18			11	0	0	1	30000		gpw	gpw	gpw	16	1	1	0	0	0	flpgsw	invgswe		0	xxx			0	gemd	gem4	item_gem	12	item_gem	0	0	5	0	0	0	0	0	0	0			0	-1	-1																0	0	0	non	0					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255	0	0	0	xxx	xxx						
// Perfect Skull	1	0	0	0	18			12	0	0	1	100000		skz	skz	skz	16	1	1	0	0	0	flpskl	invskz		0	xxx			0	gemz	gem4	item_monsterbone	12	item_monsterbone	0	0	5	0	0	0	0	0	0	0			0	-1	-1																0	0	0	non	0					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255					255	0	0	0	xxx	xxx						
itemTypes.rows.push({ ...gemTypeBase, ItemType: `Perfect Amethyst`, Code: 'gpv', 'Equiv2': 'gem' });
itemTypes.rows.push({ ...gemTypeBase, ItemType: `Perfect Topaz`, Code: 'gpy', 'Equiv2': 'gem' });
itemTypes.rows.push({ ...gemTypeBase, ItemType: `Perfect Sapphire`, Code: 'gpb', 'Equiv2': 'gem' });
itemTypes.rows.push({ ...gemTypeBase, ItemType: `Perfect Emerald`, Code: 'gpg', 'Equiv2': 'gem' });
itemTypes.rows.push({ ...gemTypeBase, ItemType: `Perfect Ruby`, Code: 'gpr', 'Equiv2': 'gem' });
itemTypes.rows.push({ ...gemTypeBase, ItemType: `Perfect Diamond`, Code: 'gpw', 'Equiv2': 'gem' });
itemTypes.rows.push({ ...gemTypeBase, ItemType: `Perfect Skull`, Code: 'skz', 'Equiv2': 'gem' });

D2RMM.writeTsv(itemTypesFilename, itemTypes);