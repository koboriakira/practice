'use strict';
let execute = input => {
  let sum = input.split('').reduce((sum, el) => (sum += +el), 0);
  return input % sum === 0 ? 'Yes' : 'No';
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`12`);
input.push(`57`);
input.push(`148`);
const result = [];
result.push(`Yes`);
result.push(`No`);
result.push(`No`);

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
