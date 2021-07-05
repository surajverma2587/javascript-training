const copyArrayAndAdd3 = (array) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    output.push(currentItem + 3);
  }

  return output;
};

const myArray = [1, 2, 3];
const result = copyArrayAndAdd3(myArray);

console.log(result);
