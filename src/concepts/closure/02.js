const createFunction = () => {
  const multiplyBy2 = (num) => {
    return num * 2;
  };

  return multiplyBy2;
};

const generatedFunc = createFunction();
const result = generatedFunc(3);

console.log(result);
