const uniqueItemsFilename = 'global\\excel\\UniqueItems.txt';
const uniqueItems = D2RMM.readTsv(uniqueItemsFilename);


uniqueItems.rows.forEach((uniqueItem) => {
  if (uniqueItem.index != null && uniqueItem.index === "Gheed's Fortune") {
    uniqueItem.prop2 = 'mag%';
    uniqueItem.min1 = 40;
    uniqueItem.max1 = 80;
    uniqueItem.prop2 = 'gold%';
    uniqueItem.min2 = 120;
    uniqueItem.max2 = 200;
    uniqueItem.prop3 = 'cheap';
    uniqueItem.min3 = 15;
    uniqueItem.max3 = 25;
  }

});

D2RMM.writeTsv(uniqueItemsFilename, uniqueItems);
