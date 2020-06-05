const x = (a, b, c) => {
  return (a + b) * c;
};

const y = (a, b, c) => {
  return a * b + c;
};

const z = (a, b, c) => {
  return a * b * c;
};

console.log(x(3, 4, 5));
console.log(y(3, 4, 5));
console.log(z(3, 4, 5));

const add = (x, y) => x + y;

const multiply = (x, y) => x * y;

const composeFunctions = (fn1, fn2) => (x, y, z) => fn2(fn1(x, y), z);

const addAndMultiply = composeFunctions(add, multiply);
const multiplyAndAdd = composeFunctions(multiply, add);
const multiplyAndMultiply = composeFunctions(multiply, multiply);

const result1 = addAndMultiply(3, 4, 5);
const result2 = multiplyAndAdd(3, 4, 5);
const result3 = multiplyAndMultiply(3, 4, 5);

console.log(result1);
console.log(result2);
console.log(result3);
