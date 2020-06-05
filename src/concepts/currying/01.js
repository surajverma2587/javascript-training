const numbers = [1, 2, 3, 4, 5];

const multiplyBy2 = (number) => {
  return number * 2;
};

const multiplyBy3 = (number) => {
  return number * 3;
};

const multiplyBy10 = (number) => {
  return number * 10;
};

const doubleNumbers = numbers.map(multiplyBy2);
const tripleNumbers = numbers.map(multiplyBy3);
const tenNumbers = numbers.map(multiplyBy10);

console.log(doubleNumbers);
console.log(tripleNumbers);
console.log(tenNumbers);
