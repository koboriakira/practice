const CLASS_CARD = ['uk-card', 'uk-card-default', 'uk-card-hover', 'uk-card-body']
const CLASS_CARD_WHOLE = ['uk-child-width-1-2@s', 'uk-child-width-1-3@m', 'uk-child-width-1-4@l', 'uk-grid-match'];
const SUFFIX_GRID = 'uk-grid';

let createCardHtml = (word, count) => {
  let wordClass = getWordClass(count);
  let wordHtml = surround(word, 'span', wordClass);
  let countHtml = '<br/>' + surround(count + '', 'span', CLASS_COUNT);
  return surround(wordHtml + countHtml, 'div', CLASS_CARD);
}
let printResultAsCard = (result) => {
  let orderedResultArray = sortResult(result.entries());
  setFrequentlyCount(orderedResultArray);
  let innerHtml = orderedResultArray.reduce((prev, cur) => {
    let [word, count] = cur;
    if (isIgnored(word)) return prev;
    let cardHtml = createCardHtml(word, count);
    return prev + surround(cardHtml, 'div');
  }, '');

  document.getElementById(ID).innerHTML = '<hr/>' + surround(innerHtml, 'div', CLASS_CARD_WHOLE, SUFFIX_GRID);
};
