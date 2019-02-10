let files;
const ID = 'result';


let saveFiles = e => {
  if (isUnsupported()) return;
  files = e.target.files;
};

let execute = () => {
  let filename = document.getElementById('filename').value;
  let targetFiles = extractTargetFiles(files, filename.split('\n'));
  if (isEmptyFiles(targetFiles)) return;

  initResultForm();
  setRegExp();

  // 対象ファイル、ファイルの読み込み方、各ファイルのデータに対する処理、結果の表示方法をそれぞれ指定する。
  loadFiles(targetFiles, loadByReader, countWords, printResultAsCard);
}
