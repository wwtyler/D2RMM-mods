const setItemsFilename = 'global\\excel\\SetItems.txt';
const setItems = D2RMM.readTsv(setItemsFilename);


const APPEND_PROP = ['mag%', 'ac%', 'balance2', 'ac', 'red-dmg%'];

const APPEND_PROP_CFG = { 'mag%': 1.5, 'ac%': 1.5, 'balance2': 1.5, 'ac': 1.5, 'red-dmg%': 1.25 };


setItems.rows.forEach((item) => {

    // 对所有的套装加成属性(add func = 1 or 2)进行强化。
    for (let i = 1; i <= 5; i++) {
        // aprop1a    apar1a 	amin1a 	amax1a 	aprop1b 	apar1b 	amin1b 	amax1b 	
        // aprop2a    apar2a 	amin2a 	amax2a 	aprop2b 	apar2b 	amin2b 	amax2b 	
        // aprop3a    apar3a 	amin3a 	amax3a 	aprop3b 	apar3b 	amin3b 	amax3b 	
        // aprop4a    apar4a 	amin4a 	amax4a 	aprop4b 	apar4b 	amin4b 	amax4b 	
        // aprop5a    apar5a 	amin5a 	amax5a 	aprop5b 	apar5b 	amin5b 	amax5b
        const apropNa = item[`aprop` + i + 'a'];
        const apropNb = item[`aprop` + i + 'b'];
        const aminNa = item[`amin` + i + 'a'];
        const amaxNa = item[`amax` + i + 'a'];
        const aminNb = item[`amin` + i + 'b'];
        const amaxNb = item[`amax` + i + 'b'];
        if (apropNa != null && apropNb != null) {
            if (APPEND_PROP.includes(apropNa)) {

                APPEND_PROP_CFG[apropNa]
                item[`amin` + i + 'a'] = Math.floor(aminNa) * APPEND_PROP_CFG[apropNa];
                item[`amax` + i + 'a'] = Math.floor(amaxNa) * APPEND_PROP_CFG[apropNa];
            }
            if (APPEND_PROP.includes(apropNb)) {
                item[`amin` + i + 'b'] = Math.floor(aminNb) * APPEND_PROP_CFG[apropNb];
                item[`amax` + i + 'b'] = Math.floor(amaxNb) * APPEND_PROP_CFG[apropNb];
            }
        }
    }
});

D2RMM.writeTsv(setItemsFilename, setItems);
