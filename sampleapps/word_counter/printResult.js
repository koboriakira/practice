const HTML_LOADING = '<span class="uk-text-primary">now loading...</span>';
const CLASS_MOST_FREQUENTLY = 'uk-text-danger'
const CLASS_FREQUENTLY = 'uk-text-success'
const CLASS_WORD = [];
const CLASS_COUNT = ['uk-text-muted', 'uk-text-small'];

let frequentlyCount = 0;
let mostFrequentlyCount = 0;

let surround = (inner, tag, classes = [], suffix = '') => {
  let addClass = classes.reduce((prev, cur, idx) => {
    if (idx === 0) {
      prev = ' class="';
    } else {
      prev = prev + ' ';
    }
    return prev + cur;
  }, '');
  addClass = (addClass !== '') ? addClass + '"' : '';
  return `<${tag}${addClass} ${suffix}>${inner}</${tag}>`
};

let initResultForm = () => {
  document.getElementById(ID).innerHTML = surround('now loading...', 'p', ['uk-text-primary']);
}

let showProgress = (text) => {
  document.getElementById(ID).innerHTML = surround(text, 'p', ['uk-text-primary']);
}

let isIgnored = word => {
  if (word.length > 18) return true;
  return IGNORE_WORDS.indexOf(word) > -1;
}

let sortResult = mapEntries => {
  return Array.from(mapEntries).filter(el => !isIgnored(el[0])).sort((a, b) => {
    if (a[1] - b[1] > 0) return -1;
    if (a[1] - b[1] < 0) return 1;
    return 0;
  });
}

let setFrequentlyCount = (result) => {
  let tenPercent = (result.length / 10).toFixed();
  tenPercent = (tenPercent > 100) ? 100 : tenPercent;
  let twentyPercent = (result.length / 5).toFixed();
  twentyPercent = (twentyPercent > 200) ? 200 : twentyPercent;
  mostFrequentlyCount = result[tenPercent][1];
  frequentlyCount = result[twentyPercent][1];
}


let getWordClass = count => {
  if (count < frequentlyCount) {
    return CLASS_WORD;
  } else if (count < mostFrequentlyCount) {
    return [CLASS_FREQUENTLY, ...CLASS_WORD];
  } else {
    return [CLASS_MOST_FREQUENTLY, ...CLASS_WORD];
  }
}
