'use strict';
let execute = input => {
  let array = input.split('\n').map(el => el.split(' ').map(el2 => +el2));
  return array[1].filter(el => el > array[0][1]).length;
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`5 2
1 1 2 2 5`);
input.push(`4 4
1 1 2 2`);
input.push(`10 3
5 1 3 2 4 1 1 2 3 4`);
const result = ['1', '0', '3'];

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
