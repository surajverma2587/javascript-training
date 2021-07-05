const oncify = (convertMe) => {
  let counter = 0;
  const inner = (input) => {
    if (counter === 0) {
      const output = convertMe(input);
      counter++;
      return output;
    }
    return "Sorry";
  };
  return inner;
};

const multiplyBy2 = (num) => num * 2;

const oncifiedMultiplyBy2 = oncify(multiplyBy2);

oncifiedMultiplyBy2(10);
oncifiedMultiplyBy2(7);
