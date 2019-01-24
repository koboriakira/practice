'use strict';

let execute = input => {
  // const [N, A, B] = input.split(' ').map(str => +str);
  // 上記が使えないので、仕方ないから配列でいく。
  let inputs = input.split(' ').map(str => +str);
  let ans = 0;
  for (let i = 1; i <= inputs[0]; i++) {
    const sum = String(i).split('').reduce((sum, el) => sum += +el, 0);
    if (sum >= inputs[1] && sum <= inputs[2]) ans += i;
  }
  return ans;
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`20 2 5`);
input.push(`10 1 2`);
input.push(`100 4 16`);
const result = [];
result.push(`84`);
result.push(`13`);
result.push(`4554`);

for (let i = 0; i < input.length; i++) {
  let ans = execute(input[i]);
  if (ans == result[i]) {
    console.log('success!!');
  } else {
    console.log(`Not success...`);
    console.log(`actual: ${ans}`);
    console.log(`expect: ${result[i]}`);
  }
  console.log('--------------------------------');
}
