

const mps = {
  headers: [],
  rows: [],
};
const mss = {
  headers: [],
  rows: [],
};
const ams = {
  headers: [],
  rows: [],
};


const UNIQUE_CODE_PREFIX = {
  0: 'z',
  1: 'y',
  2: 'x',
  3: 'w',
  4: 'v',
  5: 'u',
}
const SET_CODE_PREFIX = {
  0: 't',
  1: 's',
  2: 'r'
}


function getEssenceRuneUniqueCode(unique,itemID) {
  const codePreifxIndex = Math.floor(itemID / 100);
  const codeIndex = itemID - codePreifxIndex * 100;
  const codeIndexString = codeIndex > 10 ? codeIndex.toString() : `0${codeIndex}`;
  const condePrefix = unique==='unique'? UNIQUE_CODE_PREFIX[codePreifxIndex]: SET_CODE_PREFIX[codePreifxIndex];
  return `${condePrefix}${codeIndexString}`;
}

console.log(getEssenceRuneUniqueCode('unique',0));
console.log(getEssenceRuneUniqueCode('unique',122));
console.log(getEssenceRuneUniqueCode('set',122));
console.log(getEssenceRuneUniqueCode('unique',405));
console.log(getEssenceRuneUniqueCode('unique',6));
console.log(getEssenceRuneUniqueCode('unique',017));


var randBetween = (min, max) => min + Math.floor(Math.random() * (max - min))

console.log(randBetween(5,10));

