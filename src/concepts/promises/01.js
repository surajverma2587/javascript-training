const executor = (resolve, reject) => {
  const onTimeoutComplete = () => {
    // Change this to true to trigger the reject function
    const hasError = false;

    if (hasError) {
      reject("timer threw an error");
    }

    resolve("timer value");
  };

  setTimeout(onTimeoutComplete, 1000);
};

const myPromise = new Promise(executor);

const firstThenFunc = function (value) {
  console.log(`First then receives ${value}`);
  return "first then value";
};

const secondThenFunc = function (value) {
  console.log(`Second then receives ${value}`);
  return "second then value";
};

const errorHandler = (err) => {
  console.log(err);
};

myPromise.then(firstThenFunc).then(secondThenFunc).catch(errorHandler);

console.log(myPromise);
