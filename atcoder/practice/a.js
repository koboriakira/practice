'use strict';
// inputに入力データ全体が入る
let sum = array => {
  return parseInt(array[0]) + parseInt(array[1]);
};

function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split('\n');
  const tmp = input[1].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const a = +input[0];
  const b = sum(tmp);
  const s = input[2];
  //出力
  console.log(`${a + b} ${s}`);
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
const input1 = `1
2 3
test`;

Main(input1);
