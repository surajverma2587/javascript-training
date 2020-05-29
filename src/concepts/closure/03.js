const counter = (counter = 0) => {
  const increment = () => {
    counter++;
    console.log(`Counter 1: ${counter}`);
  };

  const decrement = () => {
    counter--;
    console.log(`Counter 2: ${counter}`);
  };

  return {
    increment,
    decrement,
  };
};

const counter1 = counter();
const counter2 = counter();

counter1.increment();
counter1.increment();

counter2.increment();
