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
        // item[key] = `${item[key]} ÿc2#${runeNumber} `;
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
        // item[key] = `${item[key]} ÿc2#${runeNumber} `;
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
