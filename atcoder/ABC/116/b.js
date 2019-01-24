'use strict';
let fn = val => {
  return val % 2 == 0 ? val / 2 : val * 3 + 1;
};
let execute = input => {
  let val = +input;
  let set = new Set([val]);
  let i = 2;
  while (true) {
    val = fn(val);
    if (set.has(val)) return i;
    set.add(val);
    i++;
  }
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`8`);
input.push(`7`);
input.push(`54`);
const result = [];
result.push(`5`);
result.push(`18`);
result.push(`114`);

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
