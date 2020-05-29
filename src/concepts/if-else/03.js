const isMillennial = (yearOfBirth) => {
  if (yearOfBirth >= 1981 && yearOfBirth <= 1996) {
    return true;
  } else {
    return false;
  }
};

const birthYear = 1987;

if (isMillennial(birthYear)) {
  console.log("Welcome to the Millennial Club!!");
} else {
  console.log("Try a different Club!!");
}
