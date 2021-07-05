const reduce = (array, howToCombine, buildingUp) => {
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    buildingUp = howToCombine(buildingUp, currentItem);
  }

  return buildingUp;
};

const add = (a, b) => {
  return a + b;
};

const summed = reduce([1, 2, 3], add, 0);

console.log(summed);
