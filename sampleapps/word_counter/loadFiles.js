let loadByReader = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = data => resolve(data.target.result);;

    // 読み込み終わったらonloadが呼ばれる
    reader.readAsText(file);
  });
};

let loadFiles = (files, loadMethod, func, print) => {
  return new Promise((resolve, reject) => {
    let prev;
    for (let i = 0; i < files.length; i++) {
      console.debug(`Load ${files[i].name}`);
      loadMethod(files[i]).then(data => {
        // reduceのようにファイルをひとつずつ処理する
        prev = func(data, prev);

        // 最後のファイルの処理が終わったら、結果の描画に移る
        if (i === files.length - 1) {
          let printResult = print(prev);
          resolve(printResult);
        }
      });
    }
  });
};
