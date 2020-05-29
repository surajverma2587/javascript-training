const functionGenerator = (count = 0) => {
  const increment = () => {
    count++;
    console.log(`Counter 1: ${count}`);
  };

  const decrement = () => {
    count--;
    console.log(`Counter 2: ${count}`);
  };

  return {
    increment,
    decrement,
  };
};

const counter1 = functionGenerator();
const counter2 = functionGenerator();

counter1.increment();
counter1.increment();

counter2.increment();
