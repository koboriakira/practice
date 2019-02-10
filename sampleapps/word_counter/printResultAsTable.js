const CLASS_DIV = ['uk-column-1-2@s', 'uk-column-1-3@m', 'uk-column-1-5@l'];
let printResultAsTable = (result) => {
  let orderedResultArray = sortResult(result.entries());
  let innerHtml = orderedResultArray.reduce((prev, cur) => {
    let [word, count] = cur;
    if (isIgnored(word)) return prev;
    let wordClass = getWordClass(word, count);
    let element = surround(word, 'span', wordClass) + ' ' + surround(count + '', 'span', CLASS_COUNT);
    return prev + surround(element, 'p');
  }, '');

  document.getElementById(ID).innerHTML = surround(innerHtml, 'div', CLASS_DIV);
};
