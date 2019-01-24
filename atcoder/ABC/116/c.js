'use strict';

let rightSide = (flowers, cond) => {
  for (let i = 0; i < flowers.length; i++) {
    if (cond(flowers[i])) return i;
  }
  return flowers.length;
};

let exclude = flowers => {
  let right = rightSide(flowers, el => el > 0);
  return flowers.slice(right);
};

let water = (flowers, rightSide) => {
  let target = flowers.slice(0, rightSide).map(el => el - 1);
  let wateredFlowers = target.concat(flowers.slice(rightSide));
  // console.log(wateredFlowers);
  return exclude(wateredFlowers);
};

let fn = flowers => {
  let right = rightSide(flowers, el => el <= 0);
  return water(flowers, right);
};

let execute = input => {
  let flowers = input
    .split('\n')[1]
    .split(' ')
    .map(el => +el);
  let count = 0;
  while (true) {
    // console.log(flowers);
    count++;
    flowers = fn(flowers);
    // console.log(typeof flowers);
    // console.log(flowers.length);
    if (flowers.length === 0) return count;

    // if (count > 5) return 'miss';
  }
};

function Main(input) {
  console.log(execute(input));
}
// Main(require('fs').readFileSync('/dev/stdin', 'utf8'));

const input = [];
input.push(`4
1 2 2 1`);
input.push(`5
3 1 2 3 1`);
input.push(`8
4 23 75 0 23 96 50 100`);
const result = [];
result.push(`2`);
result.push(`5`);
result.push(`221`);

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
