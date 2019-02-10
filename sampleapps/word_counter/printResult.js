const ID = 'result';
const HTML_LOADING = '<span>now loading...</span>';

let initResultForm = () => {
  document.getElementById(ID).innerHTML = HTML_LOADING;
}

let printHtml = (result) => {
  let orderedResultArray = Array.from(result.entries()).sort((a, b) => {
    if (a[1] - b[1] > 0) return -1;
    if (a[1] - b[1] < 0) return 1;
    return 0;
  });

  let text = '<ul>';
  orderedResultArray.forEach(value => {
    if (IGNORE_WORDS.indexOf(value[0]) === -1) {
      text = text + `<li>${value[0]} : ${value[1]}</li>`;
    }
  });
  text = text + '</ul>';
  document.getElementById(ID).innerHTML = text;
};
