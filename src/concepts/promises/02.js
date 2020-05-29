const axios = require("axios");

const getApiData = (url) => {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(`This is your error: ${err.message}`));
};

getApiData("https://jsonplaceholder.typicode.com/users");

// Comment the above line and uncomment the line below to catch errors

// getApiData('https://jsonplaceholder.typicode.com/something')
