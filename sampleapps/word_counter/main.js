let isUnsupported = () => {
  let isSupported = window.File && window.FileReader && window.FileList && window.Blob;
  return !isUnsupported;
}

let exceptTagsAndSymbols = line => {
  const REGEXP_TAG = /<[/]?[a-z]+>/g;
  const REGEXP_SYMBOL = /[();:,.]/g;
  return line.replace(REGEXP_TAG, '').replace(REGEXP_SYMBOL, '').toLowerCase();
}

let count = (word, words) => {
  return (words.has(word)) ? words.get(word) + 1 : 1;
}

let countWord = (line, words) => {
  exceptTagsAndSymbols(line).split(' ').forEach(word => {
    words.set(word, count(word, words));
  });
  return words;
}

let startsWithTagP = line => {
  return line.slice(0, 3) === '<p>';
}

let countWords = (data, words) => {
  data.split('\n').forEach(line => {
    if (startsWithTagP(line)) {
      words = countWord(line, words);
    }
  });
  return words;
}

let loadByReader = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = data => {
      resolve(data.target.result);
    }
    reader.readAsText(file);
  })
}

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
}

let event = e => {
  if (isUnsupported()) {
    alert('File APIに未対応');
    return;
  }
  if (e.target.files.length === 0) {
    alert('ファイルが存在しません')
    return;
  }
  loadFiles(e.target.files, loadByReader, countWords).then(console.log);
}
