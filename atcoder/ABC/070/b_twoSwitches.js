'use strict';
let execute = input => {
  const TIME = input.split(' ').map(el => +el);
  let executing = [];
  for (let i = Number(TIME[0]); i < TIME[1]; i++) {
    executing[i] = executing[i] === undefined ? 1 : executing[i] + 1;
  }
  for (let i = Number(TIME[2]); i < TIME[3]; i++) {
    executing[i] = executing[i] === undefined ? 1 : executing[i] + 1;
  }
  let ans = executing.reduce((prev, cur) => {
    return cur === 2 ? prev + 1 : prev;
  }, 0);
  return ans;
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`0 75 25 100`);
input.push(`0 33 66 99`);
input.push(`10 90 20 80`);
input.push(`25 100 0 75`);
const result = [];
result.push(`50`);
result.push(`0`);
result.push(`60`);
result.push(`50`);

for (let i = 0; i < input.length; i++) {
  let ans = execute(input[i]);
  if (ans.toString() === result[i]) {
    console.log('success!!');
  } else {
    console.log(`Not success...`);
    console.log(`actual: ${ans}`);
    console.log(`expect: ${result[i]}`);
  }
  console.log('--------------------------------');
}
