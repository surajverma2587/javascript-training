const copyArrayAndMultiplyBy2 = (array) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    output.push(currentItem * 2);
  }

  return output;
};

const myArray = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(myArray);

console.log(result);
