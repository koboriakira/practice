let event = e => {
  if (isUnsupported()) return;
  let targetFiles = extractTargetFiles(e.target.files, ['article.md']);
  if (isEmptyFiles(targetFiles)) return;

  initResultForm();

  // ファイルとファイルの読み込み方、各ファイルのデータに対する処理、結果の表示方法を指定する。
  loadFiles(targetFiles, loadByReader, countWords, printHtml);
};
