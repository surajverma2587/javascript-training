const formatName = (str) => {
  {
    let fName, lName;
    fName = str.split(",")[0];
    lName = str.split(",")[1];
    str = `${fName.toUpperCase()} ${lName.toUpperCase()}`;

    console.log(fName, lName);
  }

  // console.log(fName, lName)

  return str;
};

const result = formatName("john,smith");

console.log(result);
