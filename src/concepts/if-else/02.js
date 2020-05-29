const salary = 30000;

if (salary >= 18000 && salary < 24000) {
  console.log("You are on grade 1 salary band");
} else if (salary >= 24000 && salary < 30000) {
  console.log("You are on grade 2 salary band");
} else if (salary >= 30000 && salary < 45000) {
  console.log("You are on grade 3 salary band");
} else {
  console.log("Your salary is either too less or too much");
}
