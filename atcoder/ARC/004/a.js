'use strict';
function Main(input) {
  const line = input
    .split('\n')
    .slice(1, -1)
    .map(e1 => e1.split(' ').map(str => +str));
  let result = 0;
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let x = Math.pow(line[i][0] - line[j][0], 2);
      let y = Math.pow(line[i][1] - line[j][1], 2);
      result = Math.max(result, x + y);
    }
  }
  console.log(Math.sqrt(result));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
const input1 = `3
1 1
2 4
4 3
`;
const input2 = `10
1 8
4 0
3 7
2 4
5 9
9 1
6 2
0 2
8 6
7 8`;

const input3 = `4
0 0
0 100
100 0
100 100`;

const input4 = `5
3 0
1 0
0 0
4 0
2 0`;

const input5 = `4
2 2
0 0
1 1
3 3`;

Main(input1);
console.log('\n');
Main(input2);
console.log('\n');
Main(input3);
console.log('\n');
Main(input4);
console.log('\n');
Main(input5);
