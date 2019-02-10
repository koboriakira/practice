let globalResult;

let exceptTagsAndSymbols = line => {
  const REGEXP_TAG = /<[/]?[a-z]+>/g;
  const REGEXP_SYMBOL = /[();:,.\[\]*#]/g;
  return line
    .replace(REGEXP_TAG, '')
    .replace(REGEXP_SYMBOL, '')
    .toLowerCase();
};

let count = (word, words) => {
  return words.has(word) ? words.get(word) + 1 : 1;
};

let countWord = (line, words) => {
  exceptTagsAndSymbols(line)
    .split(' ')
    .forEach(word => {
      words.set(word, count(word, words));
    });
  return words;
};

let countWords = (data, words) => {
  data.split('\n').forEach(line => {
    console.debug(line);
    words = countWord(line, words);
  });
  return words;
};

let loadByReader = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = data => {
      resolve(data.target.result);
    };
    reader.readAsText(file);
  });
};

let loadFiles = (files, loadFile, func) => {
  return new Promise((resolve, reject) => {
    let words = new Map();
    for (let i = 0; i < files.length; i++) {
      loadFile(files[i]).then(result => {
        words = func(result, words);
        if (i === files.length - 1) {
          resolve(words);
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

let extractTargetFiles = files => {
  let result = [];
  for (let i = 0; i < files.length; i++) {
    if (files[i].name === 'article.md') {
      result.push(files[i]);
    }
  }
  return result;
}

let event = e => {
  if (isUnsupported()) return;
  let targetFiles = extractTargetFiles(e.target.files);
  if (isEmptyFiles(targetFiles)) return;

  document.getElementById('result').innerHTML = '<span>now loading...</span>';

  loadFiles(targetFiles, loadByReader, countWords).then(result => {
    console.debug(result);
    let orderedResultArray = Array.from(result.entries()).sort((a, b) => {
      if (a[1] - b[1] > 0) return -1;
      if (a[1] - b[1] < 0) return 1;
      return 0;
    });
    printResult(orderedResultArray, 'result');
    globalResult = orderedResultArray;
  });
};
