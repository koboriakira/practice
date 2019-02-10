'use strict';
let isMine = grid => {
  if (grid === undefined) return false;
  if (grid === '#') return true;
  return false;
};

let countMine = (map, i, j) => {
  if (map[i][j] === '#') return '#';

  let count = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (i + x < 0 || j + y < 0) continue;
      if (i + x >= map.length || j + y >= map[i].length) continue;
      if (isMine(map[i + x][j + y])) count++;
    }
  }
  return count + '';
};
let execute = input => {
  let inputs = input.split('\n');
  inputs.shift();
  let map = inputs.map(line => line.split(''));
  let ans = '';
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      ans += countMine(map, i, j);
    }
    if (i + 1 !== map.length) ans += '\n';
  }
  return ans;
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`3 5
.....
.#.#.
.....`);
input.push(`3 5
#####
#####
#####`);
input.push(`6 6
#####.
#.#.##
####.#
.#..#.
#.##..
#.#...`);
const result = [];
result.push(`11211
1#2#1
11211`);
result.push(`#####
#####
#####`);
result.push(`#####3
#8#7##
####5#
4#65#2
#5##21
#4#310`);

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
