const copyArrayAndManipulate = (array, instructions) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    const result = instructions(currentItem);
    output.push(result);
  }

  return output;
};

const multiplyBy2 = (input) => {
  return input * 2;
};

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

console.log(result);
