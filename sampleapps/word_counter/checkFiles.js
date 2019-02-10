let isEmptyFiles = files => {
  if (files.length === 0) {
    alert('ファイルが存在しません');
    return true;
  }
  return false;
}

let extractTargetFiles = (files, names) => {
  if (files === undefined) {
    return [];
  }
  let result = [];
  for (let i = 0; i < files.length; i++) {
    if (names.indexOf(files[i].name) > -1) {
      result.push(files[i]);
    }
  }
  return result;
}
