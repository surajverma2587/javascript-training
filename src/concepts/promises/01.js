const displayData = (response) => {
  console.log(response);
};

const getDataFromServer = fetch("https://some-endpoint.com");

getDataFromServer.then(displayData);

console.log("End of app");
