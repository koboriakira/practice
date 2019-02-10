const REGEXP_TAG = /<[/]?\w+>/g;
const REGEXP_CODE = /`\w*`/g;
const REGEXP_SYMBOL = /[();:,.\[\]*#/=`!?|"<>{}+_&\\$%…”’€¥~^@æ«≤≥÷`]/g;
const REGEXP_ONEWORD = /\b\w\b/g;
const REGEXP_NUM = /\d+/g;

let exceptTagsAndSymbols = line => {
  return line
    .replace(REGEXP_TAG, '')
    .replace(REGEXP_CODE, '')
    .replace(REGEXP_SYMBOL, '')
    .replace(REGEXP_NUM, '')
    .replace(REGEXP_ONEWORD, ' ')
    .toLowerCase();
};
