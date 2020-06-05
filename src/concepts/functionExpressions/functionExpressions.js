const sum = (a, b) => a + b;

console.log(sum(2, 3));

const difference = function (a, b) {
  return a - b;
};

console.log(difference(7, 3));

const product = function multiplyTwoNumbers(a, b) {
  return a * b;
};

console.log(product(2, 5));

const words = ["foo", "bar", "biz", "baz"];

const results1 = words.map((word) => word.toUpperCase());

console.log(results1);

const results2 = words.map(function capitalize(word) {
  return word.toUpperCase();
});

console.log(results2);

const capitalize = (word) => word.toUpperCase();

const results3 = words.map(capitalize);

console.log(results3);
