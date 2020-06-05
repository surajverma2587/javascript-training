const greeting = () => {
  console.log("Hi Bob");
};

const someFunction = () => {
  // do something in this function which runs the function for 1 second
};

setTimeout(greeting, 0);

someFunction();

console.log("End of app");
