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

const gemTemp = { wcode: 'all-stats', wmin: 5, wmax: 5, hcode: 'all-stats', hmin: 5, hmax: 5, scode: 'all-stats', smin: 5, smax: 5 };
const UNIQUE_GEMS = {
  "Frostburn": { ...gemTemp, hcode: 'mana%', hmin: 40, hmax: 40 },
  "Magefist": { ...gemTemp, hcode: 'fireskill', hmin: 1, hmax: 1 },
  // Veil of Steel	249	res-all		50	50	ac%		60	60	str		15	15	vit		15	15	light		-4	-4
  "Veil of Steel": { ...gemTemp, hcode: 'res-all', hmin: 50, hmax: 50 },
  // The Gladiator's Bane	250	ac%		150	200	red-mag		15	20	red-dmg		15	20	thorns		20	20	res-pois-len		50	50
  "The Gladiator's Bane": { ...gemTemp, hcode: 'red-dmg', hmin: 20, hmax: 20, hcode2: 'red-mag', hmin2: 20, hmax2: 20 },
  // Arkaine's Valor	251	ac%		150	180	balance2		30	30	allskills		1	2	red-dmg		10	15	vit/lvl	4		
  "Arkaine's Valor": { ...gemTemp, hcode: 'vit/lvl', hmin: 4, hmax: 4 },
  // Stormshield	253	ac/lvl	30			red-dmg%		35	35	str		30	30	indestruct		1	1	block2		35	35
  "Stormshield": { ...gemTemp, hcode: 'red-dmg%', hmin: 35, hmax: 35 },
  // Hellslayer	254	str/lvl	4			vit/lvl	4			dmg%/lvl	24			dmg-fire		150	250	hp		25	25
  "Hellslayer": { ...gemTemp, wcode: 'str/lvl', wmin: 4, wmax: 4 },
  // Messerschmidt's Reaver	255	dmg%/lvl	20			dmg%		200	200	str		15	15	dex		15	15	vit		15	15
  "Messerschmidt's Reaver": { ...gemTemp, wcode: 'dmg%/lvl', wmin: 20, wmax: 20 },
  // Schaefer's Hammer	257	hit-skill	42	20	10	hp		50	50	att/lvl	16			res-ltng		75	75	swing2		20	20
  "Schaefer's Hammer": { ...gemTemp, wcode: 'swing2', wmin: 20, wmax: 20, wcode2: 'hit-skill', wparam2: 42, wmin2: 20, wmax2: 10, hcode: 'res-ltng', hmin: 75, hmax: 75, scode: 'res-ltng', smin: 75, smax: 75 },
  // The Cranium Basher	258	swing2		20	20	indestruct		1	1	str		25	25	res-all		25	25	crush		75	75
  // "The Cranium Basher": { code:'swing2', min:20, max:20, code2:'indestruct', min2:1, max2:1, code3:'str', min3:25, max3:25, code4:'res-all', min4:25, max4:25, code5:'crush', min5:75, max5:75 },
  // Doombringer	260	hp%		20	20	dmg%		180	250	att%		40	40	indestruct		1	1	dmg-norm		30	100
  "Doombringer": { ...gemTemp, hcode: 'hp%', hmin: 20, hmax: 20 },
  // The Grandfather	261	str		20	20	dex		20	20	vit		20	20	enr		20	20	att%		50	50
  "The Grandfather": { ...gemTemp, wcode: 'all-stat', wmin: 20, wmax: 20, hcode: 'all-stat', hmin: 20, hmax: 20, scode: 'all-stat', smin: 20, smax: 20 },
  // Constricting Ring	263	res-all		100	100	regen		-30	-30	mag%		100	100	res-all-max		15	15		
  "Constricting Ring": { ...gemTemp, wcode: 'res-all', wmin: 100, wmax: 100, wcode2: 'regen', wmin2: -30, wmax2: -30 },
  // Stormspire	264	res-ltng		50	50	gethit-skill	53	5	5	dmg%		150	250	str		10	10	gethit-skill	38	2	0
  "Stormspire": { ...gemTemp, wcode: 'res-ltng', wmin: 50, wmax: 50, wcode2: 'gethit-skill', wparam2: 53, wmin2: 5, wmax2: 5 },
  // Eaglehorn	265	ignore-ac		1	1	att/lvl	12			dmg%/lvl	16			dmg%		200	200	ama		1	1
  // Windforce	266	dex		5	5	dmg/lvl	25			regen-stam		30	30	manasteal		6	8	knock		1	1
  "Windforce": { ...gemTemp, wcode: 'dmg/lvl', wmin: 25, wmax: 25, wcode2: 'manasteal', wmin2: 8, wmax2: 8 },
  // The Rising Sun	270	abs-fire/lvl	6			light		4	4	gethit-skill	56	2	0	dmg-fire		24	48	fireskill		2	2
  "The Rising Sun": { ...gemTemp, wcode: 'abs-fire/lvl', wmin: 6, wmax: 6, wcode2: 'dmg-fire', wmin2: 48, wmax2: 48 },
  // Mara's Kaleidoscope	272	allskills		2	2	res-all		20	30	str		5	5	dex		5	5	vit		5	5
  "Mara's Kaleidoscope": { ...gemTemp, wcode: 'allskills', wmin: 1, wmax: 1 },
  // Highlord's Wrath	276	res-ltng		35	35	dmg-ltng		1	30	swing2		20	20	allskills		1	1	deadly/lvl	3		
  // Djinnslayer	290	dmg%		190	240	dmg-fire		250	500	dmg-demon		100	150	att-demon		200	300	abs-ltng		3	7
  // Warshrike	292	dmg%		200	250	pierce		50	50	swing2		30	30	deadly		50	50	rep-quant	30		
  // Gutsiphon	293	dmg%		160	220	pierce		33	33	lifesteal		12	18	slow		25	25	openwounds		33	33
  // Razoredge	294	dmg%		175	225	swing2		40	40	reduce-ac		33	33	deadly		50	50	openwounds		50	50
  // Demonlimb	296	dmg%		180	230	dmg-fire		222	333	lifesteal		7	13	charged	Enchant	20	23	rep-dur	5		
  // Tomb Reaver	298	swing2		60	60	light		8	8	dmg%		200	280	dmg		150	230	mag%		50	80
  "Tomb Reaver": { ...gemTemp, wcode: 'swing2', wmin: 60, wmax: 60, wcode2: 'mag%', wmin2: 50, wmax2: 50 },
  // Deaths's Web	299	allskills		2	2	pierce-pois		40	50	heal-kill		7	12	mana-kill		7	12	skilltab	7	1	2
  "Death's Web": { ...gemTemp, wcode: 'pierce-pois', wmin2: 50, wmax2: 50, wcode2: 'heal-kill', wmin2: 12, wmax2: 12, wcode3: 'mana-kill', wmin3: 12, wmax3: 12 },
  // Nature's Peace	300	noheal		1	1	rip		1	1	red-dmg		7	11	res-pois		20	30	charged	Oak Sage	27	5
  "Nature's Peace": { ...gemTemp, wcode: 'rip', wmin: 1, wmax: 1, wcode2: 'res-pois', wmin2: 30, wmax2: 30 },
  // Azurewrath	301	dmg-mag		300	500	dmg%		230	270	aura	Conviction	10	13	dmg-cold	300	300	500	swing2		35	45
  "Azurewrath": { ...gemTemp, wcode: 'dmg-mag', wmin: 300, wmax: 300, wcode2: 'dmg-cold', wmin2: 300, wmax2: 300 },
  // Seraph's Hymn	302	allskills		2	2	skilltab	11	1	2	dmg-demon		25	50	dmg-undead		25	50	att-demon		150	250
  "Seraph's Hymn": { ...gemTemp, wcode: 'skilltab', wparam: 11, wmin: 1, wmax: 1 },
  // Fleshripper	304	dmg%		200	300	reduce-ac		50	50	noheal		1	1	crush		25	25	openwounds		50	50
  // Horizon's Tornado	306	dmg%		230	280	swing2		50	50	slow		20	20	hit-skill	Tornado	20	15	ease		-20	-20
  "Horizon's Tornado": { ...gemTemp, wcode: 'hit-skill', wparam: 'Tornado', wmin: 20, wmax: 15 },
  // Stone Crusher	307	dmg%		280	320	str		20	30	crush		40	40	reduce-ac		25	25	dmg-ac		-100	-100
  // Jadetalon	308	dmg%		190	240	manasteal		10	15	res-all		40	50	balance2		30	30	skilltab	19	1	2
  // Shadowdancer	309	ac%		70	100	move2		30	30	balance2		30	30	dex		15	25	skilltab	19	1	2
  // Cerebus	310	ac%		130	140	skilltab	16	2	4	lifesteal		7	10	att%		60	120	openwounds		33	33
  // Tyrael's Might	311	ease		-100	-100	indestruct		1	1	ac%		200	300	rip		1	1	dmg-demon		150	300
  "Tyrael's Might": { ...gemTemp, wcode: 'indestruct', wmin: 1, wmax: 1, wcode2: 'ease', wmin2: -100, wmax2: -100, hcode: 'addxp', hmin: 100, hmax: 100, hcode2: 'ease', hmin2: -100, hmax2: -100 },
  // Souldrain	312	ac%		90	120	manasteal		4	7	lifesteal		4	7	hit-skill	Weaken	8	3	dmg-ac		-50	-50
  // Runemaster	313	dmg%		220	270	sock		3	5	res-cold-max		5	5	nofreeze		1	1				
  // Deathcleaver	314	dmg%		230	280	deadly		66	66	reduce-ac		33	33	swing2		40	40	heal-kill		6	9
  // Executioner's Justice	315	dmg%		240	290	crush		25	25	reduce-ac		33	33	kill-skill	Decrepify	50	6	swing2		30	30
  "Executioner's Justice": { ...gemTemp, wcode: 'kill-skill', wparam: 'Decrepify', wmin: 50, wmax: 6 },
  // Stoneraven	316	dmg%		230	280	dmg-mag		101	187	res-all		30	50	ac		400	600	skilltab	2	1	3
  // Leviathan	317	ac%		170	200	ac		100	150	red-dmg%		15	25	str		40	50	indestruct		1	1
  // Wisp	319	abs-ltng%		10	20	hit-skill	Lightning	10	16	mag%		10	20	charged	Oak Sage	15	2	charged	Heart of Wolverine	13	5
  // Gargoyle's Bite	320	dmg%		180	230	rep-quant	30			dmg-pois	250	300	300	lifesteal		9	15	charged	Plague Javelin	60	11
  // Lacerator	321	dmg%		150	210	rep-quant	25			swing2		30	30	noheal		1	1	openwounds		33	33
  // Mang Song's Lesson	322	allskills		5	5	pierce-fire		15	25	pierce-ltng		15	25	pierce-cold		15	25	regen-mana		20	30
  // Viperfork	323	dmg%		190	240	dmg-pois	250	333	333	swing2		50	50	att		200	250	hit-skill	Poison Explosion	15	9
  // Ethereal Edge	324	dmg%		150	180	swing2		25	25	abs-fire		10	12	dmg-demon		150	200	demon-heal		5	10
  // The Reaper's Toll	326	dmg%		190	240	hit-skill	Decrepify	33	1	ignore-ac		1	1	lifesteal		11	15	ease		-25	-25
  "The Reaper's Toll": { ...gemTemp, wcode: 'hit-skill', wparam: 'Decrepify', wmin: 33, wmax: 8 },
  // Spiritkeeper	327	ac%		170	190	balance2		20	20	abs-ltng		9	14	res-fire		30	40	abs-cold%		15	25
  // Hellrack	328	dmg%		180	230	dmg-elem	33	63	324	swing2		20	20	att%		100	150	sock		2	2
  // Alma Negra	329	ac%		180	210	block2		30	30	pal		1	2	block		20	20	red-mag		5	9
  // Darkforge Spawn	330	ac%		140	180	cast2		30	30	mana%		10	10	skilltab	6	1	3	skilltab	7	1	3
  // Widowmaker	331	dmg%		150	200	deadly		33	33	ignore-ac		1	1	magicarrow		11	11	oskill	Guided Arrow	3	5
  // Bloodraven's Charge	332	dmg%		180	230	att%		200	300	explosivearrow		13	13	skilltab	0	2	4	charged	Revive	30	5
  // Shadowkiller	334	dmg%		170	220	reduce-ac		25	25	freeze		2	2	mana-kill		10	15	hit-skill	Frost Nova	33	8
  // Gimmershred	335	dmg%		160	210	dmg-fire		218	483	dmg-cold	100	176	397	dmg-ltng		29	501	stack		60	60
  // Griffon's Eye	336	ac		100	200	cast2		25	25	allskills		1	1	extra-ltng		10	15	pierce-ltng		15	20
  "Griffon's Eye": { ...gemTemp, hcode: 'pierce-ltng', hmin: 20, hmax: 20, hcode2: 'extra-ltng', hmin2: 15, hmax2: 15 },
  // Windhammer	337	dmg%		180	230	crush		50	50	swing2		60	60	hit-skill	Twister	33	22				
  // Thunderstroke	338	dmg%		150	200	dmg-ltng		1	511	hit-skill	Lightning	20	14	swing2		15	15	pierce-ltng		15	15
  // Demon's Arch	340	dmg%		160	210	dmg-fire		232	323	lifesteal		6	12	rep-quant	30			swing2		30	30
  // Boneflame	341	ac%		120	150	move2		20	20	gethit-skill	Terror	15	3	nec		2	3	res-all		20	30
  // Steelpillar	342	dmg%		210	260	swing2		25	25	reduce-ac		20	20	ac%		50	80	indestruct		1	1
  // Nightwing's Veil	343	ac%		90	120	allskills		2	2	dex		10	20	abs-cold		5	9	half-freeze		1	1
  // Crown of Ages	344	balance2		30	30	res-all		20	30	allskills		1	1	ac		100	150	indestruct		1	1
  "Crown of Ages": { ...gemTemp, hcode: 'balance2', hmin: 30, hmax: 30 },
  // Andariel's Visage	345	ac%		100	150	res-pois		70	70	allskills		2	2	res-pois-max		10	10	swing2		20	20
  "Andariel's Visage": { ...gemTemp, hcode: 'res-pois-max', hmin: 10, hmax: 10, hcode2: "res-pois", hmin2: 70, hmax2: 70 },
  // Dragonscale	347	ac%		170	200	abs-fire%		10	20	res-fire-max		5	5	str		15	25	dmg-fire		211	371
  // Steel Carapice	348	ac%		190	220	balance2		20	20	red-dmg		9	14	res-cold		40	60	regen-mana		10	15
  // Medusa's Gaze	349	ac%		150	180	slow		20	20	gethit-skill	Lower Resist	10	7	lifesteal		5	9	death-skill	Nova	100	44
  "Medusa's Gaze": { ...gemTemp, wcode: 'slow', wmin: 20, wmax: 20, hcode2: 'gethit-skill', hparam2: 'Lower Resist', hmin2: 10, hmax2: 7 },
  // Ravenlore	350	ac%		120	150	res-all		15	25	skilltab	17	3	3	enr		20	30	pierce-fire		10	20
  // Boneshade	351	nec		2	2	cast2		25	25	skill	Teeth	4	5	skill	Bone Armor	4	5	skill	Bone Spear	2	3
  // Flamebellow	353	dmg%		170	240	dmg-fire		233	482	fireskill		3	3	abs-fire%		20	30	hit-skill	Firestorm	12	16
  // Fathom	354	sor		3	3	extra-cold		15	30	cast2		20	20	res-fire		25	40	res-ltng		25	40
  // Wolfhowl	355	ac%		120	150	skilltab	14	2	3	str		8	15	dex		8	15	vit		8	15
  // Spirit Ward	356	ac%		130	180	abs-cold		6	11	res-all		30	40	block		20	30	block2		25	25
  // Kira's Guardian	357	ac		50	120	res-all		50	70	nofreeze		1	1	balance2		20	20				
  // Ormus' Robes	358	ac		20	80	cast2		20	35	extra-fire		10	20	extra-cold		10	20	extra-ltng		10	20
  // Stormlash	360	dmg%		240	300	swing2		30	30	hit-skill	Static Field	15	10	hit-skill	Tornado	20	18	dmg-ltng		1	473
  // Halaberd's Reign	361	ac%		140	170	skilltab	13	1	1	bar		2	2	balance2		20	20	regen		15	23
  // Spike Thorn	363	ac%		120	150	thorns/lvl	11			dur		250	250	balance2		30	30	red-dmg%		15	20
  // Dracul's Grasp	364	ac%		90	120	lifesteal		7	10	openwounds		25	25	hit-skill	Life Tap	5	10	heal-kill		5	10
  "Dracul's Grasp": { ...gemTemp, wcode: 'lifesteal', wmin: 10, wmax: 10, wcode2: 'hit-skill', wparam2: 'Life Tap', wmin2: 10, wmax2: 10 },
  // Frostwind	365	dmg%		180	230	freeze		4	4	half-freeze		1	1	dmg-cold	150	237	486	swing2		25	25
  // Templar's Might	366	ac%		170	220	balance2		20	20	ac-miss		250	300	stam		40	50	str		10	15
  // Eschuta's temper	367	sor		1	3	cast2		40	40	extra-fire		10	20	extra-ltng		10	20	enr		20	30
  // Firelizard's Talons	368	dmg%		200	270	swing2		15	15	skilltab	20	1	3	dmg-fire		236	480	res-fire		40	70
  // Sandstorm Trek	369	ac%		140	170	move2		20	20	balance2		20	20	stam/lvl	8			stamdrain		50	50
  // Marrowwalk	370	ac%		170	200	move2		20	20	charged	Bone Prison	13	33	charged	Life Tap	10	12	regen-stam		10	10
  // Arachnid Mesh	373	ac%		90	120	cast2		20	20	charged	Venom	11	13	allskills		1	1	slow		10	10
  // Metalgrid	375	ac		300	350	res-all		25	35	att		400	450	charged	IronGolem	11	22	charged	Iron Maiden	20	12
  // Verdugo's Hearty Cord	376	ac%		90	140	vit		30	40	stam		100	120	balance2		10	10	red-dmg%		10	15
  // Giantskull	379	ac		250	320	str		25	35	crush		10	10	sock		1	2	knock		1	1
  // Annihilus	381	allskills		1	1	all-stats		10	20	res-all		10	20	addxp		5	10				
  // Arioc's Needle	382	dmg%		180	230	dmg-pois	250	403	403	deadly		50	50	ignore-ac		1	1	allskills		2	4
  // Cranebeak	383	dmg%		240	300	dmg-ltng		1	305	swing2		40	40	reduce-ac		25	25	mag%		20	50
  // Nord's Tenderizer	384	dmg%		270	330	freeze		2	4	swing2		25	25	charged	Blizzard	12	16	att%		150	180
  // Earthshifter	385	dmg%		250	300	hit-skill	Eruption	25	14	crush		33	33	swing2		10	10	charged	Volcano	30	14
  // Wraithflight	386	dmg%		150	190	rep-quant	40			lifesteal		9	13	mana-kill		15	15	ethereal		1	1
  // Bonehew	387	dmg%		270	320	swing2		30	30	charged	Corpse Explosion	30	14	hit-skill	Bone Spear	50	16	noheal		1	1
  // Ondal's Wisdom	388	cast2		45	45	enr		40	50	allskills		2	4	ac		450	550	addxp		5	5
  // The Reedeemer	389	dmg%		250	300	dmg-demon		200	250	pal		2	2	ease		-60	-60	skill	Redemption	2	4
  // Headhunter's Glory	390	ac		320	420	ac-miss		300	350	res-pois		30	40	sock		1	3	res-fire		20	30
  // Steelrend	391	ac		170	210	str		15	20	dmg%		30	60	crush		10	10	

  // //The Oculus		sor		3	3	gethit-skill	54	25	1	res-all		20	20	cast2		30	30	ac%		20	20	vit		20	20	enr		20	20	mana-kill		5	5	mag%		50	50
  "The Oculus": { ...gemTemp, wcode: 'cast2', wmin: 30, wmax: 30, wcode2: 'mana-kill', wmin2: 5, wmax2: 5, hcode: 'mag%', hmin: 50, hmax: 50 },
  "default": { ...gemTemp }
  // "default": { wcode: 'all-stats', wmin: 5, wmax: 5, hcode: 'all-stats', hmin: 5, hmax: 5, scode: 'all-stats', smin: 5, smax: 5 }
}


const INVALID_INDEX = ['Expansion', 'Armor', 'Elite Uniques', 'Rings', 'Class Specific', 'Zakarum\'s Salvation',
  'Odium', 'Larzuk\'s Champion', 'Gore Ripper', 'Giantmaimer', 'Darkfear', 'Nethercrow', 'Warriv\'s Warder', 'Merman\'s Speed', 'Sigurd\'s Staunch',
  'Amulet of the Viper', 'Staff of Kings', 'Horadric Staff', 'Hell Forge Hammer', 'KhalimFlail', 'SuperKhalimFlail'];

const INVALID_ITEM_CODE = [
  'jew', 'cm1', 'cm2', 'cm3',
  // 'rin', 'amu'
];

const DUPLICATE_INDEX = ['Rainbow Facet', 'Rainbow Stone', "Gheed's Lucky", 'Rings'];
const VALID_SETS = ["Immortal King", "Tal Rasha's Wrappings", "Bul-Kathos' Children", "M'avina's Battle Hymn", "Trang-Oul's Avatar", "Orphan's Call",
  "The Disciple", "Tancred's Battlegear", "Sazabi's Grand Tribute", "Naj's Ancient Set", "Natalya's Odium", "Griswold's Legacy", "Milabrega's Regalia",
  "Hwanin's Majesty", "Heaven's Brethren"
];
const ALL_SETS = [
  "Aldur's Watchtower", "Angelical Raiment", "Arcanna's Tricks", "Arctic Gear", "Berserker's Garb", "Bul-Kathos' Children",
  "Cathan's Traps", "Civerb's Vestments", "Cleglaw's Brace", "Cow King's Leathers", "Death's Disguise", "Griswold's Legacy", "Heaven's Brethren",
  "Hsarus' Defense", "Hwanin's Majesty", "Immortal King", "Infernal Tools", "Iratha's Finery", "Isenhart's Armory", "M'avina's Battle Hymn", "McAuley's Folly",
  "Milabrega's Regalia", "Naj's Ancient Set", "Natalya's Odium", "Orphan's Call", "Sazabi's Grand Tribute", "Sigon's Complete Steel", "Tal Rasha's Wrappings",
  "Tancred's Battlegear", "The Disciple", "Trang-Oul's Avatar", "Vidala's Rig"];

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
  //移除无效的暗金装备条目。
  if (uniqueItem.index != null && !INVALID_INDEX.includes(uniqueItem.index)) {
    //移除暗金珠宝\护符\戒指\项链。
    if (!INVALID_ITEM_CODE.includes(uniqueItem.code)) {
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
  }
});


setItems.rows.forEach((setItem) => {
  if (setItem.index != null && !INVALID_INDEX.includes(setItem.index)) {
    if (VALID_SETS.includes(setItem.set)) {
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

function addEssenceRunes(essenceCode, item) {
  misc.rows.push({
    ...zodMiscItemTemplate,
    name: `ERune-${essenceCode}-${item.index}(${item['*ID']})`,
    ShowLevel: 1,
    cost: 2000,
    spawnable: 1,
    speed: 0,
    nodurability: 1,
    level: item.lvl,
    levelreq: getMinusLvlReq(),
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

  let uMod = UNIQUE_GEMS[`${item.index}`];
  if (uMod == null) uMod = UNIQUE_GEMS[`default`];

  gems.rows.push({
    name: `ERune-${essenceCode}-${item.index}(${item['*ID']})`,
    code: `${essenceCode}`, letter: `${essenceCode}L`, transform: 18,

    weaponMod1Code: uMod.wcode, weaponMod1Param: uMod.wparam, weaponMod1Min: uMod.wmin, weaponMod1Max: uMod.wmax,
    weaponMod2Code: uMod.wcode2, weaponMod2Param: uMod.wparam2, weaponMod2Min: uMod.wmin2, weaponMod2Max: uMod.wmax2,
    weaponMod3Code: uMod.wcode3, weaponMod3Param: uMod.wparam3, weaponMod3Min: uMod.wmin3, weaponMod3Max: uMod.wmax3,

    helmMod1Code: uMod.hcode, helmMod1Param: uMod.hparam, helmMod1Min: uMod.hmin, helmMod1Max: uMod.hmax,
    helmMod2Code: uMod.hcode2, helmMod2Param: uMod.hparam2, helmMod2Min: uMod.hmin2, helmMod2Max: uMod.hmax2,
    helmMod3Code: uMod.hcode3, helmMod3Param: uMod.hparam3, helmMod3Min: uMod.hmin3, helmMod3Max: uMod.hmax3,

    shieldMod1Code: uMod.scode, shieldMod1Param: uMod.sparam, shieldMod1Min: uMod.smin, shieldMod1Max: uMod.smax,
    shieldMod2Code: uMod.scode2, shieldMod2Param: uMod.sparam2, shieldMod2Min: uMod.smin2, shieldMod2Max: uMod.smax2,
    shieldMod3Code: uMod.scode3, shieldMod3Param: uMod.sparam3, shieldMod3Min: uMod.smin3, shieldMod3Max: uMod.smax3,

    'shieldMod3Max\r': uMod.smax3 == null ? 0 : uMod.max3 //最后一列必须0结尾
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
    zhTW: `ÿcD精符ÿcQ#${essenceCode}ÿcD:${nameSTRING.zhTW}`
  });
  //符文说明
  itemRunes.push({
    id: D2RMM.getNextStringID(),
    Key: `${essenceCode}L`,
    enUS: `#${essenceCode}`,
    zhTW: `ÿcD精符ÿcQ#${essenceCode}ÿcD`
  });

  function getMinusLvlReq() {
    let lvlreq = item['lvl req'];
    let minusLvlreq = Math.floor(lvlreq * 0.7);
    // if (lvlreq > 70)
    //   minusLvlreq = Math.max(60, lvlreq - 25);
    // else if (lvlreq > 50)
    //   minusLvlreq = Math.max(40, lvlreq - 20);
    // else if (lvlreq > 30)
    //   minusLvlreq = Math.max(20, lvlreq - 15);
    return minusLvlreq;
  }
}

