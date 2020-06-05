const addByNumber = (numberToAdd) => {
  const adder = (number) => {
    return number + numberToAdd;
  };

  return adder;
};

const myAdder = addByNumber(10);

console.log(myAdder(5));
