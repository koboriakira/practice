'use strict';
let execute = input => {
  let mochies = input.split('\n').map(str => +str);
  mochies.shift();
  return String(new Set(mochies).size);
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`4
10
8
8
6`);
input.push(`3
15
15
15`);
input.push(`7
50
30
50
100
50
80
30`);
const result = [];
result.push(`3`);
result.push(`1`);
result.push(`4`);

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
