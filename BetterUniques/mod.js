const uniqueItemsFilename = 'global\\excel\\UniqueItems.txt';
const uniqueItems = D2RMM.readTsv(uniqueItemsFilename);


let gheedsFortune;
let rainbowFacet;
let hellfireTorch;
uniqueItems.rows.forEach((uniqueItem) => {
  if (uniqueItem.index != null) {
    if (uniqueItem.index === "Gheed's Fortune") {
      gheedsFortune = uniqueItem;
      uniqueItem.prop1 = 'mag%'; uniqueItem.min1 = 40; uniqueItem.max1 = 80;
      uniqueItem.prop2 = 'gold%'; uniqueItem.min2 = 120; uniqueItem.max2 = 200;
      uniqueItem.prop3 = 'cheap'; uniqueItem.min3 = 10; uniqueItem.max3 = 20;
    }
    else if (uniqueItem.index === "Ormus' Robes") {
      //ac		10	20	cast2		20	20	extra-fire		10	15	extra-cold		10	15	extra-ltng		10	15	regen-mana		10	15	skill-rand	3	36	60		
      uniqueItem.prop1 = 'ac'; uniqueItem.min1 = 20; uniqueItem.max1 = 80;
      uniqueItem.prop2 = 'cast2'; uniqueItem.min2 = 20; uniqueItem.max2 = 35;
      uniqueItem.prop3 = 'extra-fire'; uniqueItem.min3 = 10; uniqueItem.max3 = 20;
      uniqueItem.prop4 = 'extra-cold'; uniqueItem.min4 = 10; uniqueItem.max4 = 20;
      uniqueItem.prop5 = 'extra-ltng'; uniqueItem.min5 = 10; uniqueItem.max5 = 20;
      uniqueItem.prop6 = 'regen-mana'; uniqueItem.min6 = 15; uniqueItem.max6 = 20;
      uniqueItem.prop7 = 'skill-rand'; uniqueItem.min7 = 36; uniqueItem.max7 = 60; uniqueItem.par7 = 4;
      uniqueItem.prop8 = 'allskills'; uniqueItem.min8 = 1; uniqueItem.max8 = 2;;
    }
    else if (uniqueItem.index === "Rainbow Facet" && uniqueItem.par4 === "Chain Lightning") {
      rainbowFacet = uniqueItem;
    }
    else if (uniqueItem.index === "Hellfire Torch") {
      hellfireTorch = uniqueItem;
    }
    else if (uniqueItem.index === "Hellfire Torch") {
      hellfireTorch = uniqueItem;
    }
  }
});

//Annihilus	381	100	1		1	1	110	70	cm1	charm	1	3	5000			flpmss	invmss	item_gem	12	item_gem	allskills		1	1	all-stats		10	20	res-all		10	20	addxp		5	10
// '*ID': Math.max(...uniqueItems.rows.map((row) => row['*ID'])) + 1,
// '*ID': (itemID = itemID + 1),
let itemID = Math.max(...uniqueItems.rows.map((row) => row['*ID']));
uniqueItems.rows.push({
  ...hellfireTorch, index: "Hellfire's Bless", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50,
  prop1: 'addxp', min1: 5, max1: 10,
  prop2: 'cheap', min2: 5, max2: 10,
  prop3: 'move2', min3: 10, max3: 20,
  prop4: 'light', min4: 5, max4: 5,
  prop5: 'mag%', min5: 5, max5: 15,
  prop6: 'gold%', min6: 25, max6: 50, par6: '',
  '*eol\r': '0',
});
uniqueItems.rows.push({
  ...gheedsFortune, index: "Gheed's Lucky", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50,
  prop1: 'addxp', min1: 5, max1: 10,
  prop2: 'cheap', min2: 5, max2: 10,
  prop3: 'move2', min3: 10, max3: 20,
  '*eol\r': '0',
});
uniqueItems.rows.push({
  ...gheedsFortune, index: "Gheed's Lucky", '*ID': (itemID = itemID + 1),
  carry1: 0, lvl: 70, 'lvl req': 50,
  prop1: 'addxp', min1: 5, max1: 10,
  prop2: 'res-all', min2: 5, max2: 10,
  prop3: 'all-stats', min3: 10, max3: 20,
  '*eol\r': '0',
});
uniqueItems.rows.push({
  ...rainbowFacet, index: "Rainbow Stone", '*ID': (itemID = itemID + 1),
  prop1: 'dmg%', min1: 20, max1: 40,
  prop2: 'reduce-ac', min2: 10, max2: 20,
  prop3: 'crush', min3: 10, max3: 15,
  prop4: 'ease', min4: 20, max4: 20,
  '*eol\r': '0'
});

uniqueItems.rows.push({
  ...rainbowFacet, index: "Rainbow Stone", '*ID': (itemID = itemID + 1),
  prop1: 'dmg', min1: 10, max1: 20,
  prop2: 'noheal', min2: 1, max2: 1,
  prop3: 'swing2', min3: 20, max3: 30,
  prop4: 'ease', min4: 20, max4: 20,
  '*eol\r': '0'
});
uniqueItems.rows.push({
  ...rainbowFacet, index: "Rainbow Stone", '*ID': (itemID = itemID + 1),
  prop1: 'res-all', min1: 10, max1: 20,
  prop2: 'red-mag', min2: 6, max2: 12,
  prop3: 'mana-kill', min3: 4, max3: 8,
  prop4: 'ease', min4: -20, max4: -20, par4: null,
  '*eol\r': '0',
});
D2RMM.writeTsv(uniqueItemsFilename, uniqueItems);


const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNameaffixesFilename = 'local\\lng\\strings\\item-nameaffixes.json';
const itemNameaffixes = D2RMM.readJson(itemNameaffixesFilename);
const itemNames = D2RMM.readJson(itemNamesFilename);


itemNames.push({
  id: D2RMM.getNextStringID(),
  Key: `Rainbow Stone`, enUS: `Rainbow Stone`, zhTW: `Rainbow Stone`
});

itemNames.push({
  id: D2RMM.getNextStringID(),
  Key: `Hellfire's Bless`, enUS: `Hellfire's Bless`, zhTW: `Hellfire's Bless`
});
itemNames.push({
  id: D2RMM.getNextStringID(),
  Key: `Gheed's Lucky`, enUS: `Gheed's Lucky`, zhTW: `Gheed's Lucky`
});

D2RMM.writeJson(itemNamesFilename, itemNames);
D2RMM.writeJson(itemNameaffixesFilename, itemNameaffixes);
