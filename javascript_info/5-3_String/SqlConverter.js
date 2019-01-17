const SQL = `
SELECT rp.orderDatetime
FROM RpOrderHead rp
WHERE rp.rpOrderNumber = '111111'
`;

let readFile = filePath => {};

let replaceAll = (str, regexp, replaceString) => {
  const reg = new RegExp(regexp, 'g');
  return str.replace(reg, replaceString);
};

let convert = sql => {
  const regexp = /([a-z])(?=[A-Z]+)/;
  const replaceString = '$1_';
  return replaceAll(sql, regexp, replaceString);
};

let showAlert = result => {
  alert(result);
};

let pasteInResult = result => {
  let element = document.querySelector('#result');
  element.innerHTML = result;
};

let convertSql = () => {
  const sql = document.querySelector('#sql').value;
  return convert(sql);
};

let execute = (process, show) => {
  show(process());
};

let onClickButton = () => {
  execute(convertSql, pasteInResult);
};
