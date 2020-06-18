const displayData = (response) => {
  console.log(response);
};

const getDataFromServer1 = fetch("https://some-endpoint.com");
const getDataFromServer2 = fetch("https://some-endpoint.com");

getDataFromServer1.then(displayData);
getDataFromServer2.then(displayData);

console.log("End of app");
