let words = new Map();

let isUnsupported = () => {
  let isSupported = window.File && window.FileReader && window.FileList && window.Blob;
  return !isUnsupported;
}

let exceptTagsAndSymbols = line => {
  const REGEXP_TAG = /<[/]?[a-z]+>/g;
  const REGEXP_SYMBOL = /[();:,.]/g;
  return line.replace(REGEXP_TAG, '').replace(REGEXP_SYMBOL, '').toLowerCase();
}

let countWord = line => {
  exceptTagsAndSymbols(line).split(' ').forEach(word => {
    if (words.has(word)) {
      words.set(word, words.get(word) + 1);
    } else {
      words.set(word, 1);
    }
  });
}

let loadFileByReader = file => {
  let reader = new FileReader();
  reader.onload = data => {
    data.target.result.split('\n').forEach(line => {
      if (line.slice(0, 3) === '<p>') {
        countWord(line);
      }
    });
  }
  reader.readAsText(file);
}

let loadFiles = (files, loadFile) => {
  for (let i = 0; i < files.length; i++) {
    loadFile(files[i]);
  }
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
  loadFiles(e.target.files, loadFileByReader);
  console.log(words);
}
