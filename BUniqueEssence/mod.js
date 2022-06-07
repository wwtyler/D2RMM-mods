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

    // index                  	*ID 	*ItemName           	lvl 	prop1          	par1 	min1 	max1 	prop2        	par2      	min2 	max2 	prop3          	par3             	min3 	max3 	prop4         	par4            	min4 	max4 	prop5        	par5               	min5 	max5
    // 'Frostburn': { code: 'mana%', min: 40, max: 40 },
    // 'Magefist': { code: 'fireskill', min: 1, max: 1 },
    // 'The Gladiator\'s Bane': { code: 'red-dmg', min: 20, max: 20, code2: 'red-dmg', min2: 20, max2: 20 },
    // 'Tyrael\'s Might': { code: 'ease', min: 100, max: 100, code2: 'addxp', min2: 100, max2: 100, code3: 'indestruct', min3: 1, max3: 1 },
    // 'The Reaper\'s Toll': { code: 'hit-skill', param: 'Decrepify', min: 33, max: 1, code2: 'ignore-ac', min2: 1, max2: 1 },
    // 'Alma Negra': { code: 'block2', min: 30, max: 30 },
    
const UNIQUE_GEMS = {
    // Constricting Ring      	263 	Ring                	 95 	res-all        	     	100  	100  	regen        	          	-30  	-30  	mag%           	                 	 100 	 100 	res-all-max   	                	15   	15   	             	                   	     	
    // Arachnid Mesh          	373 	spiderweb sash      	 87 	ac%            	     	90   	120  	cast2        	          	20   	20   	charged        	Venom            	  11 	   3 	allskills     	                	1    	1    	slow         	                   	10   	10
    // Tyrael's Might         	311 	sacred armor        	 87 	ease           	     	-100 	-100 	indestruct   	          	1    	1    	ac%            	                 	 120 	 150 	rip           	                	1    	1    	dmg-demon    	                   	50   	100
    // Azurewrath             	301 	phase blade         	 87 	dmg-mag        	     	250  	500  	dmg%         	          	230  	270  	aura           	Sanctuary        	  10 	  13 	dmg-cold      	250             	250  	500  	swing2       	                   	30   	30
    // Stormlash              	360 	scourge             	 86 	dmg%           	     	240  	300  	swing2       	          	30   	30   	hit-skill      	Static Field     	  15 	  10 	hit-skill     	Tornado         	20   	18   	dmg-ltng     	                   	1    	473
    // Crown of Ages          	344 	corona              	 86 	balance2       	     	30   	30   	res-all      	          	20   	30   	allskills      	                 	   1 	   1 	ac            	                	100  	150  	indestruct   	                   	1    	1
    // Mang Song's Lesson     	322 	archon staff        	 86 	allskills      	     	5    	5    	pierce-fire  	          	7    	15   	pierce-ltng    	                 	   7 	  15 	pierce-cold   	                	7    	15   	regen-mana   	                   	10   	10
    // Tomb Reaver            	298 	cryptic axe         	 86 	swing2         	     	60   	60   	light        	          	4    	4    	dmg%           	                 	 200 	 280 	dmg-undead    	                	150  	230  	mag%         	                   	50   	80
    // Arioc's Needle         	382 	hyperion spear      	 85 	dmg%           	     	180  	230  	dmg-pois     	250       	403  	403  	deadly         	                 	  50 	  50 	ignore-ac     	                	1    	1    	allskills    	                   	2    	4
    // Metalgrid              	375 	amulet              	 85 	ac             	     	300  	350  	res-all      	          	25   	35   	att            	                 	 400 	 450 	charged       	IronGolem       	11   	22   	charged      	Iron Maiden        	20   	12
    // Halaberd's Reign       	361 	conqueror crown     	 85 	ac%            	     	140  	170  	skilltab     	13        	1    	1    	bar            	                 	   2 	   2 	balance2      	                	20   	20   	regen        	                   	15   	23
    // Kira's Guardian        	357 	tiara               	 85 	ac             	     	50   	120  	res-all      	          	50   	70   	nofreeze       	                 	   1 	   1 	balance2      	                	20   	20   	             	                   	     	
    // Wolfhowl               	355 	fury visor          	 85 	ac%            	     	120  	150  	skilltab     	14        	2    	3    	str            	                 	   8 	  15 	dex           	                	8    	15   	vit          	                   	8    	15
    // Andariel's Visage      	345 	demonhead           	 85 	ac%            	     	100  	150  	res-pois     	          	70   	70   	allskills      	                 	   2 	   2 	res-pois-max  	                	10   	10   	swing2       
    // Shadowkiller           	334 	battle cestus       	 85 	dmg%           	     	170  	220  	reduce-ac    	          	25   	25   	freeze         	                 	   2 	   2 	mana-kill     	                	10   	15   	hit-skill    	Frost Nova         	33   	8
    // Alma Negra             	329 	sacred rondache     	 85 	ac%            	     	180  	210  	block2       	          	30   	30   	pal            	                 	   1 	   2 	block         	                	20   	20   	red-mag      	                   	5    	9
    // The Grandfather        	261 	Colossus Blade      	 85 	str            	     	20   	20   	dex          	          	20   	20   	vit            	                 	  20 	  20 	enr           	                	20   	20   	att%         	                   	50   	50
    // The Cranium Basher     	258 	Thunder Maul        	 85 	swing2         	     	20   	20   	indestruct   	          	1    	1    	str            	                 	  25 	  25 	res-all       	                	25   	25   	crush        	                   	75   	75
    // Arkaine's Valor        	251 	Balrog Skin         	 85 	ac%            	     	150  	180  	balance2     	          	30   	30   	allskills      	                 	   1 	   2 	red-dmg       	                	10   	15   	vit/lvl      	4                  	     	
    // The Gladiator's Bane   	250 	Wire Fleece         	 85 	ac%            	     	150  	200  	red-mag      	          	15   	20   	red-dmg        	                 	  15 	  20 	thorns        	                	20   	20   	res-pois-len 	                   	50   	50
    // Wraithflight           	386 	ghost glaive        	 84 	dmg%           	     	150  	190  	rep-quant    	40        	     	     	lifesteal      	                 	   9 	  13 	mana-kill     	                	15   	15   	ethereal     	                   	1    	1
    // Dracul's Grasp         	364 	vampirebone gloves  	 84 	ac%            	     	90   	120  	lifesteal    	          	7    	10   	openwounds     	                 	  25 	  25 	hit-skill     	Life Tap        	5    	10   	heal-kill    	                   	5    	10
    // Boneshade              	351 	lich wand           	 84 	nec            	     	2    	2    	cast2        	          	25   	25   	skill          	Teeth            	   4 	   5 	skill         	Bone Armor      	4    	5    	skill        	Bone Spear         	2    	3
    // Medusa's Gaze          	349 	aegis               	 84 	ac%            	     	150  	180  	slow         	          	20   	20   	gethit-skill   	Lower Resist     	  10 	   7 	lifesteal     	                	5    	9    	death-skill  	Nova               	100  	44
    // Dragonscale            	347 	zakarum shield      	 84 	ac%            	     	170  	200  	abs-fire%    	          	10   	20   	res-fire-max   	                 	   5 	   5 	str           	                	15   	25   	dmg-fire     	                   	211  	371
    // Griffon's Eye          	336 	diadem              	 84 	ac             	     	100  	200  	cast2        	          	25   	25   	allskills      	                 	   1 	   1 	extra-ltng    	                	10   	15   	pierce-ltng  	                   	15   	20
    // Hellrack               	328 	colossus crossbow   	 84 	dmg%           	     	180  	230  	dmg-elem     	33        	63   	324  	swing2         	                 	  20 	  20 	att%          	                	100  	150  	sock         	                   	2    	2
    // Wisp                   	319 	ring                	 84 	abs-ltng%      	     	10   	20   	hit-skill    	Lightning 	10   	16   	mag%           	                 	  10 	  20 	charged       	Oak Sage        	15   	2    	charged      	Heart of Wolverine 	13   	5
    // Headhunter's Glory     	390 	troll nest          	 83 	ac             	     	320  	420  	ac-miss      	          	300  	350  	res-pois       	                 	  30 	  40 	sock          	                	1    	3    	res-fire     	                   	20   	30
    // Ormus' Robes           	358 	dusk shroud         	 83 	ac             	     	10   	20   	cast2        	          	20   	20   	extra-fire     	                 	  10 	  15 	extra-cold    	                	10   	15   	extra-ltng   	                   	10   	15
    // The Reaper's Toll      	326 	thresher            	 83 	dmg%           	     	190  	240  	hit-skill    	Decrepify 	33   	1    	ignore-ac      	                 	   1 	   1 	lifesteal     	                	11   	15   	ease         	                   	-25  	-25
    // Executioner's Justice  	315 	glorious axe        	 83 	dmg%           	     	240  	290  	crush        	          	25   	25   	reduce-ac      	                 	  33 	  33 	kill-skill    	Decrepify       	50   	6    	swing2       	                   	30   	30
    // Warshrike              	292 	winged knife        	 83 	dmg%           	     	200  	250  	pierce       	          	50   	50   	swing2         	                 	  30 	  30 	deadly        	                	50   	50   	rep-quant    	30                 	     	
    // Schaefer's Hammer      	257 	Legendary Mallet    	 83 	hit-skill      	  42 	20   	10   	hp           	          	50   	50   	att/lvl        	16               	     	     	res-ltng      	                	75   	75   	swing2       	                   	20   	20
    // Templar's Might        	366 	sacred armor        	 82 	ac%            	     	170  	220  	balance2     	          	20   	20   	ac-miss        	                 	 250 	 300 	stam          	                	40   	50   	str          	                   	10   	15
    // Ravenlore              	350 	sky spirit          	 82 	ac%            	     	120  	150  	res-all      	          	15   	25   	skilltab       	17               	   3 	   3 	enr           	                	20   	30   	pierce-fire  	                   	10   	20
    // Ethereal Edge          	324 	silver-edged axe    	 82 	dmg%           	     	150  	180  	swing2       	          	25   	25   	abs-fire       	                 	  10 	  12 	dmg-demon     	                	150  	200  	demon-heal   	                   	5    	10
    // Souldrain              	312 	vambraces           	 82 	ac%            	     	90   	120  	manasteal    	          	4    	7    	lifesteal      	                 	   4 	   7 	hit-skill     	Weaken          	8    	3    	dmg-ac       	                   	-50  	-50
    // Fathom                 	354 	dimensional shard   	 81 	sor            	     	3    	3    	extra-cold   	          	15   	30   	cast2          	                 	  20 	  20 	res-fire      	                	25   	40   	res-ltng     	                   	25   	40
    // The Reedeemer          	389 	mighty scepter      	 80 	dmg%           	     	250  	300  	dmg-demon    	          	200  	250  	pal            	                 	   2 	   2 	ease          	                	-60  	-60  	skill        	Redemption         	2    	4
    // Eschuta's temper       	367 	eldritch orb        	 80 	sor            	     	1    	3    	cast2        	          	40   	40   	extra-fire     	                 	  10 	  20 	extra-ltng    	                	10   	20   	enr          	                   	20   	30
    // Boneflame              	341 	succubae skull      	 80 	ac%            	     	120  	150  	move2        	          	20   	20   	gethit-skill   	Terror           	  15 	   3 	nec           	                	2    	3    	res-all      	                   	20   	30
    // Runemaster             	313 	ettin axe           	 80 	dmg%           	     	220  	270  	sock         	          	3    	5    	res-cold-max   	                 	   5 	   5 	nofreeze      	                	1    	1    	             	                   	     	
    // Mara's Kaleidoscope    	272 	Amulet              	 80 	allskills      	     	2    	2    	res-all      	          	20   	30   	str            	                 	   5 	   5 	dex           	                	5    	5    	vit          	                   	5    	5
    // Windforce              	266 	Hydra Bow           	 80 	dex            	     	5    	5    	dmg/lvl      	25        	     	     	regen-stam     	                 	  30 	  30 	manasteal     	                	6    	8    	knock        	                   	1    	1
    // Flamebellow            	353 	balrog blade        	 79 	dmg%           	     	170  	240  	dmg-fire     	          	233  	482  	fireskill      	                 	   3 	   3 	abs-fire%     	                	20   	30   	hit-skill    	Firestorm          	12   	16
    // Bloodraven's Charge    	332 	matriarchal bow     	 79 	dmg%           	     	180  	230  	att%         	          	200  	300  	explosivearrow 	                 	  13 	  13 	skilltab      	0               	2    	4    	charged      	Revive             	30   	5
    // Viperfork              	323 	war fork            	 79 	dmg%           	     	190  	240  	dmg-pois     	250       	333  	333  	swing2         	                 	  50 	  50 	att           	                	200  	250  	hit-skill    	Poison Explosion   	15   	9
    // Shadowdancer           	309 	myrmidon greaves    	 79 	ac%            	     	70   	100  	move2        	          	30   	30   	balance2       	                 	  30 	  30 	dex           	                	15   	25   	skilltab     	19                 	1    	2
    // Gutsiphon              	293 	demon crossbow      	 79 	dmg%           	     	160  	220  	pierce       	          	33   	33   	lifesteal      	                 	  12 	  18 	slow          	                	25   	25   	openwounds   	                   	33   	33
    // Steelrend              	391 	ogre gauntlets      	 78 	ac             	     	170  	210  	str          	          	15   	20   	dmg%           	                 	  30 	  60 	crush         	                	10   	10   	             	                   	     	
    // Frostwind              	365 	cryptic sword       	 78 	dmg%           	     	180  	230  	freeze       	          	4    	4    	half-freeze    	                 	   1 	   1 	dmg-cold      	150             	237  	486  	swing2       	                   	25   	25
    // Spike Thorn            	363 	blade barrier       	 78 	ac%            	     	120  	150  	thorns/lvl   	11        	     	     	dur            	                 	 250 	 250 	balance2      	                	30   	30   	red-dmg%     	                   	15   	20
    // Gimmershred            	335 	flying axe          	 78 	dmg%           	     	160  	210  	dmg-fire     	          	218  	483  	dmg-cold       	100              	 176 	 397 	dmg-ltng      	                	29   	501  	stack        	                   	60   	60
    // Gargoyle's Bite        	320 	winged harpoon      	 78 	dmg%           	     	180  	230  	rep-quant    	30        	     	     	dmg-pois       	250              	 300 	 300 	lifesteal     	                	9    	15   	charged      	Plague Javelin     	60   	11
    // Deathcleaver           	314 	berserker axe       	 78 	dmg%           	     	230  	280  	deadly       	          	66   	66   	reduce-ac      	                 	  33 	  33 	swing2        	                	40   	40   	heal-kill    	                   	6    	9
    // Stormspire             	264 	Giant Thresher      	 78 	res-ltng       	     	50   	50   	gethit-skill 	53        	5    	5    	dmg%           	                 	 150 	 250 	str           	                	10   	10   	gethit-skill 	38                 	2    	0
    // Earthshifter           	385 	thunder maul        	 77 	dmg%           	     	250  	300  	hit-skill    	Eruption  	25   	14   	crush          	                 	  33 	  33 	swing2        	                	10   	10   	charged      	Volcano            	30   	14
    // Steelpillar            	342 	war pike            	 77 	dmg%           	     	210  	260  	swing2       	          	25   	25   	reduce-ac      	                 	  20 	  20 	ac%           	                	50   	80   	indestruct   	                   	1    	1
    // Thunderstroke          	338 	matriarchal javelin 	 77 	dmg%           	     	150  	200  	dmg-ltng     	          	1    	511  	hit-skill      	Lightning        	  20 	  14 	swing2        	                	15   	15   	pierce-ltng  	                   	15   	15
    // Nature's Peace         	300 	ring                	 77 	noheal         	     	1    	1    	rip          	          	1    	1    	red-dmg        	                 	   7 	  11 	res-pois      	                	20   	30   	charged      	Oak Sage           	27   	5
    // Eaglehorn              	265 	Crusader Bow        	 77 	ignore-ac      	     	1    	1    	att/lvl      	12        	     	     	dmg%/lvl       	16               	     	     	dmg%          	                	200  	200  	ama          	                   	1    	1
    // Stormshield            	253 	Monarch             	 77 	ac/lvl         	  30 	     	     	red-dmg%     	          	35   	35   	str            	                 	  30 	  30 	indestruct    	                	1    	1    	block2       	                   	35   	35
    // Veil of Steel          	249 	Spired Helm         	 77 	res-all        	     	50   	50   	ac%          	          	60   	60   	str            	                 	  15 	  15 	vit           	                	15   	15   	light        	                   	-4   	-4
    // Nord's Tenderizer      	384 	truncheon           	 76 	dmg%           	     	270  	330  	freeze       	          	2    	4    	swing2         	                 	  25 	  25 	charged       	Blizzard        	12   	16   	att%         	                   	150  	180
    // Spirit Ward            	356 	ward                	 76 	ac%            	     	130  	180  	abs-cold     	          	6    	11   	res-all        	                 	  30 	  40 	block         	                	20   	30   	block2       	                   	25   	25
    // Demon's Arch           	340 	balrog spear        	 76 	dmg%           	     	160  	210  	dmg-fire     	          	232  	323  	lifesteal      	                 	   6 	  12 	rep-quant     	30              	     	     	swing2       	                   	30   	30
    // Windhammer             	337 	ogre maul           	 76 	dmg%           	     	180  	230  	crush        	          	50   	50   	swing2         	                 	  60 	  60 	hit-skill     	Twister         	33   	22   	             	                   	     	
    // Lacerator              	321 	winged axe          	 76 	dmg%           	     	150  	210  	rep-quant    	25        	     	     	swing2         	                 	  30 	  30 	noheal        	                	1    	1    	openwounds   	                   	33   	33
    // Stone Crusher          	307 	legendary mallet    	 76 	dmg%           	     	280  	320  	str          	          	20   	30   	crush          	                 	  40 	  40 	reduce-ac     	                	25   	25   	dmg-ac       	                   	-100 	-100
    // Fleshripper            	304 	fanged knife        	 76 	dmg%           	     	200  	300  	reduce-ac    	          	50   	50   	noheal         	                 	   1 	   1 	crush         	                	25   	25   	openwounds   	                   	50   	50
    // Firelizard's Talons    	368 	feral claws         	 75 	dmg%           	     	200  	270  	swing2       	          	15   	15   	skilltab       	20               	   1 	   3 	dmg-fire      	                	236  	480  	res-fire     	                   	40   	70
    // Nightwing's Veil       	343 	spired helm         	 75 	ac%            	     	90   	120  	allskills    	          	2    	2    	dex            	                 	  10 	  20 	abs-cold      	                	5    	9    	half-freeze  	                   	1    	1
    // Spiritkeeper           	327 	earth spirit        	 75 	ac%            	     	170  	190  	balance2     	          	20   	20   	abs-ltng       	                 	   9 	  14 	res-fire      	                	30   	40   	abs-cold%    	                   	15   	25
    // Razoredge              	294 	tomahawk            	 75 	dmg%           	     	175  	225  	swing2       	          	40   	40   	reduce-ac      	                 	  33 	  33 	deadly        	                	50   	50   	openwounds   	                   	50   	50
    // Doombringer            	260 	Champion Sword      	 75 	hp%            	     	20   	20   	dmg%         	          	180  	250  	att%           	                 	  40 	  40 	indestruct    	                	1    	1    	dmg-norm     	                   	30   	100
    // Messerschmidt's Reaver 	255 	Champion Axe        	 75 	dmg%/lvl       	  20 	     	     	dmg%         	          	200  	200  	str            	                 	  15 	  15 	dex           	                	15   	15   	vit          	                   	15   	15
    // Ondal's Wisdom         	388 	elder staff         	 74 	cast2          	     	45   	45   	enr          	          	40   	50   	allskills      	                 	   2 	   4 	ac            	                	450  	550  	addxp        	                   	5    	5
    // Marrowwalk             	370 	boneweave boots     	 74 	ac%            	     	170  	200  	move2        	          	20   	20   	charged        	Bone Prison      	  13 	  33 	charged       	Life Tap        	10   	12   	regen-stam   	                   	10   	10
    // Steel Carapice         	348 	shadow plate        	 74 	ac%            	     	190  	220  	balance2     	          	20   	20   	red-dmg        	                 	   9 	  14 	res-cold      	                	40   	60   	regen-mana   	                   	10   	15
    // Jadetalon              	308 	wrist sword         	 74 	dmg%           	     	190  	240  	manasteal    	          	10   	15   	res-all        	                 	  40 	  50 	balance2      	                	30   	30   	skilltab     	19                 	1    	2
    // Deaths's Web           	299 	unearthed wand      	 74 	allskills      	     	2    	2    	pierce-pois  	          	40   	50   	heal-kill      	                 	   7 	  12 	mana-kill     	                	7    	12   	skilltab     	7                  	1    	2
    // Giantskull             	379 	bone visage         	 73 	ac             	     	250  	320  	str          	          	25   	35   	crush          	                 	  10 	  10 	sock          	                	1    	2    	knock        	                   	1    	1
    // Widowmaker             	331 	ward bow            	 73 	dmg%           	     	150  	200  	deadly       	          	33   	33   	ignore-ac      	                 	   1 	   1 	magicarrow    	                	11   	11   	oskill       	Guided Arrow       	3    	5
    // Leviathan              	317 	kraken shell        	 73 	ac%            	     	170  	200  	ac           	          	100  	150  	red-dmg%       	                 	  15 	  25 	str           	                	40   	50   	indestruct   	                   	1    	1
    // Seraph's Hymn          	302 	amulet              	 73 	allskills      	     	2    	2    	skilltab     	11        	1    	2    	dmg-demon      	                 	  25 	  50 	dmg-undead    	                	25   	50   	att-demon    	                   	150  	250
    // Djinnslayer            	290 	ataghan             	 73 	dmg%           	     	190  	240  	dmg-fire     	          	250  	500  	dmg-demon      	                 	 100 	 150 	att-demon     	                	200  	300  	abs-ltng     	                   	3    	7
    // Highlord's Wrath       	276 	Amulet              	 73 	res-ltng       	     	35   	35   	dmg-ltng     	          	1    	30   	swing2         	                 	  20 	  20 	allskills     	                	1    	1    	deadly/lvl   	3                  	     	
    // The Rising Sun         	270 	Amulet              	 73 	abs-fire/lvl   	   6 	     	     	light        	          	4    	4    	gethit-skill   	56               	   2 	   0 	dmg-fire      	                	24   	48   	fireskill    	                   	2    	2
    // Bonehew                	387 	ogre axe            	 72 	dmg%           	     	270  	320  	swing2       	          	30   	30   	charged        	Corpse Explosion 	  30 	  14 	hit-skill     	Bone Spear      	50   	16   	noheal       	                   	1    	1
    // Sandstorm Trek         	369 	scarabshell boots   	 72 	ac%            	     	140  	170  	move2        	          	20   	20   	balance2       	                 	  20 	  20 	stam/lvl      	8               	     	     	stamdrain    	                   	50   	50
    // Darkforge Spawn        	330 	bloodlord skull     	 72 	ac%            	     	140  	180  	cast2        	          	30   	30   	mana%          	                 	  10 	  10 	skilltab      	6               	1    	3    	skilltab     	7                  	1    	3
    // Stoneraven             	316 	matriarchal spear   	 72 	dmg%           	     	230  	280  	dmg-mag      	          	101  	187  	res-all        	                 	  30 	  50 	ac            	                	400  	600  	skilltab     	2                  	1    	3
    // Horizon's Tornado      	306 	scourge             	 72 	dmg%           	     	230  	280  	swing2       	          	50   	50   	slow           	                 	  20 	  20 	hit-skill     	Tornado         	20   	15   	ease         	                   	-20  	-20
    // Cranebeak              	383 	war spike           	 71 	dmg%           	     	240  	300  	dmg-ltng     	          	1    	305  	swing2         	                 	  40 	  40 	reduce-ac     	                	25   	25   	mag%         	                   	20   	50
    // Verdugo's Hearty Cord  	376 	mithril coil        	 71 	ac%            	     	90   	140  	vit          	          	30   	40   	stam           	                 	 100 	 120 	balance2      	                	10   	10   	red-dmg%     	                   	10   	15
    // Cerebus                	310 	blood spirit        	 71 	ac%            	     	130  	140  	skilltab     	16        	2    	4    	lifesteal      	                 	   7 	  10 	att%          	                	60   	120  	openwounds   	                   	33   	33
    // Demonlimb              	296 	tyrant club         	 71 	dmg%           	     	180  	230  	dmg-fire     	          	222  	333  	lifesteal      	                 	   7 	  13 	charged       	Enchant         	20   	23   	rep-dur      	5                  	     	
    // Hellslayer             	254 	Decapitator         	 71 	str/lvl        	   4 	     	     	vit/lvl      	4         	     	     	dmg%/lvl       	24               	     	     	dmg-fire      	                	150  	250  	hp           	                   	25   	25	                   	20   	20
  'Constricting Ring': { code: 'res-all', min: 30, max: 30, code2: 'regen', min2: -30, max2: -30, code3: 'mag%', min3: 100, max3: 100 },
  'Arachnid': { code: 'dmg-ltng', min: 30, max: 30, code2: 'dmg-fire', min2: 30, max2: 30, code3: 'dmg-ltng', min3: 30, max3: 30 },
  
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
  });

  gems.rows.push({
    name: `ERune-${essenceCode}-${item.index}(${item['*ID']})`,
    code: `${essenceCode}`, letter: `${essenceCode}L`, transform: 18,
    weaponMod1Code: 'str', weaponMod1Min: 5, weaponMod1Max: 5,
    // helmMod1Code	helmMod1Param	helmMod1Min	helmMod1Max
    helmMod1Code: 'vit', helmMod1Min: 5, helmMod1Max: 5,
    // shieldMod1Code	shieldMod1Param	shieldMod1Min	shieldMod1Max
    shieldMod1Code: 'ac', shieldMod1Min: 50, shieldMod1Max: 50,

    




    'shieldMod3Max\r': 0 //最后一列必须0结尾
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

