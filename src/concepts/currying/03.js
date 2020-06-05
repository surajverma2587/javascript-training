const numbers = [1, 2, 3, 4, 5];

const multiplyBy = (multiplier) => {
  return (number) => {
    return number * multiplier;
  };
};

const doubleNumbers = numbers.map(multiplyBy(2));
const tripleNumbers = numbers.map(multiplyBy(3));
const tenNumbers = numbers.map(multiplyBy(10));

console.log(doubleNumbers);
console.log(tripleNumbers);
console.log(tenNumbers);
