const automagicFilename = 'global\\excel\\automagic.txt';
const automagics = D2RMM.readTsv(automagicFilename);

//自动附魔蓝色装备特有词缀。rare=0
const GOOD_AM_EXCL_PREFIX_NAME = ["of the Colossus", "Great Wyrm's", 'Chromatic', 'of Anthrax'];
//自动附魔高等级词缀。rare=1
const GOOD_AM_PREFIX_NAME = ["Athlete's", "Archer's", "Lancer's", 'of the Mammoth', "Wyrm's", "Prismatic", "of Pestilence"];
// const GOOD_AM_PREFIX_CODE = ["skilltab", "hp", "mana"];

//auto附魔的词缀频率统一调整到1。
//对于部分高级别词缀变相提升出现的概率。比如：3/2/1 -> 1/1/1，则概率1/6提升到1/3。 
automagics.rows.forEach((row) => {
  const prefixName = row["Name"];
  row['frequency'] = 1;
  GOOD_AM_PREFIX_NAME.forEach((amPrefix) => {
    if (prefixName != null && prefixName == amPrefix) {
      row['frequency'] = 2;
    }
  });
});

D2RMM.writeTsv(automagicFilename, automagics);



//itype1
const CHARM_ITYPES = ['scha', 'mcha', 'lcha'];
const JEW_ITYPES = ['jewl', 'amul', 'ring'];
const SOR_ITYPES = ['orb', 'staf', 'circ'];
const PAL_ITYPES = ['scep', 'circ'];
''

//mod1code
const GOOD_PREFIX_CODES = ['dmg%', 'mana', 'res-all', 'res-fire', 'res-ltng', 'mag%',
  'sock',
  'skilltab',
  'ama', 'sor', 'pal', 'nec', 'bar', 'dru', 'ass'];
const GOOD_SUFFIX_CODES = ['hp', 'mana', 'move3', 'noheal', 'mag%',
  'red-dmg',
  'str',
  'cast1', 'cast2', 'cast3'];
const CLASS_SPECIFIC = ['ama', 'sor', 'pal', 'nec', 'bar', 'dru', 'ass'];
const GOOD_PREFIX_NAMES = [
  "Arch-Angel's", "Priest's", "Berserker's", "Necromancer's", "Valkyrie's", "Hierophant's", "Witch-hunter's",//all class skills
  "Volcanic", "Powered", "Glacial",//SOR skilltab
  "Lancer's", "Athlete's", "Archer's",//AMA skilltab
  "Accursed", "Venomous", "Golemlord's",//nec skilltab
  "Rose Branded", "Marshal's", "Guardian's",//pal skilltab
  "Master's", "Furious", "Echoing",//bar skilltab
  "Keeper's", "Communal", "Gaea's",//dru skilltab
  "Cunning", 'Shadow', "Kenshi's"//ass skilltab
];

const GOOD_SUFFIX_NAMES = [
  "of Negation", "of Fire Quenching", "of the Dynamo", "of the Sirocco", "of Quickness", "of Warmth", "of Evisceration",
  "of Maiming", "of Carnage", "of Bliss",
  "of Performance", "of Transcendence",
  "of Perfection", "of Precision",
  "of Stability", "of Luck",
  "of Dexterity", "of Prosperity", "of Enlightenment",
  "of Wizardry", "of Sorcery",
  "of the Whale", "of the Colosuss", "of the Mammoth", "of Vita",
  "of Hope", 'of Atlus', "of the Titan",
  "of the Giant", "of Acceleration", "of Piercing"
];

const magicPrefixFilename = 'global\\excel\\MagicPrefix.txt';
const magicPrefixs = D2RMM.readTsv(magicPrefixFilename);
const magicSuffixFilename = 'global\\excel\\MagicSuffix.txt';
const magicSuffixs = D2RMM.readTsv(magicSuffixFilename);

magicPrefixs.rows.forEach((row) => {
  const prefixName = row['Name'];
  const frequency = row['frequency']
  const mod1code = row['mod1code']

  //frequency不等于0和null
  if (frequency != null && frequency != 0) {
    row['frequency'] = 1;
    GOOD_PREFIX_CODES.forEach((goodCode) => {
      if (mod1code != null && mod1code == goodCode) {
        row['frequency'] = 2;
      }
    });
    GOOD_PREFIX_NAMES.forEach((goodName) => {
      if (prefixName != null && prefixName == goodName) {
        row['frequency'] = 3;
      }
    });
  }

});

magicSuffixs.rows.forEach((row) => {
  const suffixName = row['Name'];
  const frequency = row['frequency']
  const mod1code = row['mod1code']

  //frequency不等于0和null
  if (frequency != null && frequency != 0) {
    row['frequency'] = 1;
    GOOD_SUFFIX_CODES.forEach((goodCode) => {
      if (mod1code != null && mod1code == goodCode) {
        row['frequency'] = 2;
      }

    });
    GOOD_SUFFIX_NAMES.forEach((goodName) => {
      if (suffixName != null && suffixName == goodName) {
        row['frequency'] = 3;
      }
    });
  }
});

D2RMM.writeTsv(magicPrefixFilename, magicPrefixs);
D2RMM.writeTsv(magicSuffixFilename, magicSuffixs);
