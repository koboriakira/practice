let globalResult;

let loadByReader = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = data => {
      resolve(data.target.result);
    };
    reader.readAsText(file);
  });
};

let loadFiles = (files, loadMethod, func) => {
  return new Promise((resolve, reject) => {
    let prev;
    for (let i = 0; i < files.length; i++) {
      console.debug(`Load ${files[i].name}`)
      loadMethod(files[i]).then(result => {
        prev = func(result, prev);
        if (i === files.length - 1) {
          resolve(prev);
        }
      });
    }
  });
};

let printResult = (result, id) => {
  let text = '<ul>';
  result.forEach(value => {
    if (IGNORE_WORDS.indexOf(value[0]) === -1) {
      text = text + `<li>${value[0]} : ${value[1]}</li>`;
    }
  });
  text = text + '</ul>';
  document.getElementById(id).innerHTML = text;
};

let event = e => {
  if (isUnsupported()) return;
  let targetFiles = extractTargetFiles(e.target.files, ['article.md']);
  if (isEmptyFiles(targetFiles)) return;

  document.getElementById('result').innerHTML = '<span>now loading...</span>';

  loadFiles(targetFiles, loadByReader, countWords).then(result => {
    let orderedResultArray = Array.from(result.entries()).sort((a, b) => {
      if (a[1] - b[1] > 0) return -1;
      if (a[1] - b[1] < 0) return 1;
      return 0;
    });
    printResult(orderedResultArray, 'result');
    globalResult = orderedResultArray;
  });
};
