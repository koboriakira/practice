let printResultAsList = (result) => {
  let orderedResultArray = sortResult(result.entries());

  let text = '<ul class="uk-list">';
  orderedResultArray.forEach(value => {
    if (IGNORE_WORDS.indexOf(value[0]) === -1) {
      text = text + `<li>${value[0]} : ${value[1]}</li>`;
    }
  });
  text = text + '</ul>';
  document.getElementById(ID).innerHTML = text;
};
