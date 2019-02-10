let sumToForLoop = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

let sumToForRecursion = num => {
  return num > 1 ? num + sumToForRecursion(num - 1) : 1;
};

let sumToForArithmeticProgression = num => {
  return ((1 + num) * num) / 2;
};

let measureTime = func => {
  const start = Date.now();
  console.log(func(1000000));
  const end = Date.now();
  console.log(`${end - start} ms`);
};

measureTime(sumToForArithmeticProgression);
measureTime(sumToForLoop);
// measureTime(sumToForRecursion);
