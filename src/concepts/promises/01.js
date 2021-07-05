const displayData = (response) => {
  console.log(response);
};

const displayError = (err) => {
  throw err;
};

const getDataFromServer1 = fetch("https://some-endpoint.com");
const getDataFromServer2 = fetch("https://some-endpoint.com");

getDataFromServer1.then(displayData).catch(displayError);
getDataFromServer2.then(displayData).catch(displayError);

console.log("End of app");
