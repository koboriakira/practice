let isEmptyFiles = files => {
  if (files.length === 0) {
    alert('ファイルが存在しません');
    return true;
  }
  return false;
}
