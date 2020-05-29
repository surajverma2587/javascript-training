const isMillennial = (yearOfBirth) =>
  yearOfBirth >= 1981 && yearOfBirth <= 1996;

const birthYear = 1987;

isMillennial(birthYear)
  ? console.log("Welcome to the Millennial Club!!")
  : console.log("Try a different Club!!");
