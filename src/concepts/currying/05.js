const numbers = [1, 2, 3, 4, 5];

const multiplyByAndAddBy = (adder) => (multiplier) => (number) =>
  number * multiplier + adder;

const doubleNumbers = numbers.map(multiplyByAndAddBy(100)(2));
const tripleNumbers = numbers.map(multiplyByAndAddBy(100)(3));
const tenNumbers = numbers.map(multiplyByAndAddBy(100)(10));

console.log(doubleNumbers);
console.log(tripleNumbers);
console.log(tenNumbers);
