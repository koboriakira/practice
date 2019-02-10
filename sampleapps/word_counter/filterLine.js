const REGEXP_TAG = /<[/]?\w+>/g;
const REGEXP_CODE = /`\w*`/g;
const REGEXP_SYMBOL = /[();:,.\[\]*#/=`!?|"<>{}+_&\\$%…”’€¥~^@æ«≤≥÷`]/g;
const REGEXP_ONEWORD = /\b\w\b/g;
const REGEXP_NUM = /\d+/g;

let regexpArray;

let setRegExp = () => {
  let result = [];

  let option1 = document.getElementById('option1').checked;
  if (option1) {
    result.push(REGEXP_CODE);
  }
  result.push(REGEXP_TAG);
  result.push(REGEXP_SYMBOL);
  result.push(REGEXP_ONEWORD);
  result.push(REGEXP_NUM);
  regexpArray = result;
}

let exceptTagsAndSymbols = line => {
  let localLine = Object.assign(line);
  regexpArray.forEach(regexp => {
    localLine = localLine.replace(regexp, '');
  })
  return localLine;
};
