const setItemsFilename = 'global\\excel\\SetItems.txt';
const setItems = D2RMM.readTsv(setItemsFilename);

setItems.rows.forEach((item) => {
  // 对所有的套装物品属性进行强化。
  function multiply(i, m) {
    const parN = item[`par` + i];
    const minN = item[`min` + i];
    const maxN = item[`max` + i];
    item[`min` + i] = Math.floor(minN * m);
    item[`max` + i] = Math.floor(maxN * m);
  }
  function add(i, m) {
    const parN = item[`par` + i];
    const minN = item[`min` + i];
    const maxN = item[`max` + i];
    item[`min` + i] = Math.floor(minN) + m;
    item[`max` + i] = Math.floor(maxN) + m;
  }
  // function apropMultiply(i, m) {
  //   // apar1a 	amin1a 	amax1a 
  //   const aparNa = item[`apar` + i+'a'];
  //   const aminNa = item[`amin` + i+'a'];
  //   const amaxNa = item[`amax` + i+'a'];
  //   item[`min` + i] = Math.floor(aminNa * m);
  //   item[`max` + i] = Math.floor(amaxNa * m);
  // }

  for (let i = 1; i <= 9; i++) {
    const propN = item[`prop` + i];
    if (propN != null) {
      if (['mana-kill', 'heal-kill'].includes(propN)) {
        add(i, 2);
      }
      else if (['hp', 'mana'].includes(propN)) {
        add(i, 15);
      }
      else if (['hp%', 'mana%'].includes(propN)) {
        multiply(i, 1.3);
      }
      else if (['res-ltng', 'res-fire', 'res-cold', 'res-pois'].includes(propN)) {
        add(i, 10);
      }
      else if (['res-all'].includes(propN)) {
        add(i, 5);
      }
      else if (['str', 'enr', 'vit', 'dex'].includes(propN)) {
        add(i, 5);
      }
      else if (['ac%', 'ac-miss', 'ac-hth', 'ac'].includes(propN)) {
        multiply(i, 1.3);
      }
      else if (['att'].includes(propN)) {
        multiply(i, 1.5);
      }
      else if (['dmg%'].includes(propN)) {
        multiply(i, 1.5);
      }
      else if (['gold%', 'mag%'].includes(propN)) {
        multiply(i, 1.5);
      }
    };
  }
  // 对所有的套装加成属性(add func = 1 or 2)进行强化。
  for (let i = 1; i <= 5; i++) {
    // aprop1a   	apar1a 	amin1a 	amax1a 	aprop1b 	apar1b 	amin1b 	amax1b 	
    // aprop2a    apar2a 	amin2a 	amax2a 	aprop2b 	apar2b 	amin2b 	amax2b 	
    // aprop3a    apar3a 	amin3a 	amax3a 	aprop3b 	apar3b 	amin3b 	amax3b 	
    // aprop4a    apar4a 	amin4a 	amax4a 	aprop4b 	apar4b 	amin4b 	amax4b 	
    // aprop5a  	apar5a 	amin5a 	amax5a 	aprop5b 	apar5b 	amin5b 	amax5b
    const apropNa = item[`aprop` + i + 'a'];
    const apropNb = item[`aprop` + i + 'b'];
    if (apropNa != null && apropNb != null) {
      if (['mag%', 'mana','ac'].includes(apropNa)||['mag%', 'mana','ac'].includes(apropNb)) {
        
      }
    }
  }
});

D2RMM.writeTsv(setItemsFilename, setItems);
