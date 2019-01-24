'use strict';
let execute = input => {
  let sides = input.split(' ').map(el => +el);
  let hypotenuse = Math.max(...sides);
  return (
    sides.filter(el => el != hypotenuse).reduce((sum, el) => sum * el, 1) / 2
  );
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`3 4 5`);
input.push(`5 12 13`);
input.push(`45 28 53`);
const result = [];
result.push(`6`);
result.push(`30`);
result.push(`630`);

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
