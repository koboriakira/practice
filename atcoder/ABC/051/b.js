'use strict';
let equalAll = (a, b, c) => {
  return a === b && a === c;
};
let equalSome = (a, b, c) => {
  return a === b || b === c || a === c;
};
let permutationSize = pattern => {
  if (equalAll(pattern[0], pattern[1], pattern[2])) {
    return 1;
  }
  if (equalSome(pattern[0], pattern[1], pattern[2])) {
    return 3;
  }
  return 6;
};
function Main(input) {
  const line = input.split(' ').map(el => +el);

  let patterns = [];
  for (let x = 0; x <= line[0]; x++) {
    if (x > line[1]) continue;
    for (let y = x; y <= line[0]; y++) {
      if (y > line[1]) continue;
      const z = line[1] - x - y;
      if (z < 0 || z > line[0]) continue;
      if (z < x || z < y) continue;
      patterns.push([x, y, z]);
    }
  }

  let result = 0;
  for (let i = 0; i < patterns.length; i++) {
    result += permutationSize(patterns[i]);
  }
  console.log(result);
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input1 = `2 2`;
Main(input1);
console.log('\n');
const input2 = `5 15`;
Main(input2);
