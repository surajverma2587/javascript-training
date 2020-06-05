import fs from "fs";
import util from "util";

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const isAnimal = (species) => (animal) => animal.species === species;

const processAnimals = (data) => {
  const animals = JSON.parse(data);

  const dogs = animals.filter(isAnimal("dog"));
  const cats = animals.filter(isAnimal("cat"));

  const dogJSON = JSON.stringify(dogs, null, 2);
  const catJSON = JSON.stringify(cats, null, 2);

  const handleError = (error) => {
    console.log(error);
  };

  writeFileAsync("dogs.json", dogJSON)
    .then(() => {
      console.log("Successfully wrote to dogs.json file");
    })
    .catch(handleError);

  writeFileAsync("cats.json", catJSON)
    .then(() => {
      console.log("Successfully wrote to cats.json file");
    })
    .catch(handleError);
};

readFileAsync("animals.json", "utf8").then(processAnimals);
