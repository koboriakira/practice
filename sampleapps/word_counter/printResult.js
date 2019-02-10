const HTML_LOADING = '<span class="uk-text-primary">now loading...</span>';
const CLASS_MOST_FREQUENTLY = 'uk-text-danger'
const CLASS_FREQUENTLY = 'uk-text-success'
const CLASS_WORD = [];
const CLASS_COUNT = ['uk-text-muted', 'uk-text-small'];

let initResultForm = () => {
  document.getElementById(ID).innerHTML = HTML_LOADING;
}

let sortResult = mapEntries => {
  return Array.from(mapEntries).sort((a, b) => {
    if (a[1] - b[1] > 0) return -1;
    if (a[1] - b[1] < 0) return 1;
    return 0;
  });
}

let isIgnored = word => {
  console.log(word);
  console.log(typeof word);
  console.log(word.length);
  if (word.length > 18) return true;
  return IGNORE_WORDS.indexOf(word) > -1;
}

let surround = (inner, tag, classes = [], suffix = '') => {
  console.log(inner, tag, classes);
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


let getWordClass = count => {
  if (count < 2) {
    return CLASS_WORD;
  } else if (count < 5) {
    return [CLASS_FREQUENTLY, ...CLASS_WORD];
  } else {
    return [CLASS_MOST_FREQUENTLY, ...CLASS_WORD];
  }
}
