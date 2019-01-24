'use strict';

let execute = input => {
  let cardList = input.split('\n')[1].split(' ').map(str => +str).sort().reverse();
  return cardList.reduce((prev, cur, idx) => prev += (idx % 2 === 0) ? cur : cur * -1, 0);
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`2
3 1`);
input.push(`3
2 7 4`);
input.push(`4
20 18 2 18`);
const result = [];
result.push(`2`);
result.push(`5`);
result.push(`18`);

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
