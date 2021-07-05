import inquirer from "inquirer";
import axios from "axios";

import Character from "./Character.js";
import Game from "./Game.js";

let thanosTurn = false;

const ACCESS_TOKEN = "10163747746225364";

const extendedCharacters = {
  thanos: {
    flight: 60,
    special: "Destroy World",
  },
  thor: {
    flight: 80,
    special: "Lightning Strike",
  },
};

const gameSetupQuestions = [
  {
    name: "avenger",
    message: "Select your Avengers character:",
    type: "list",
    choices: [
      {
        name: "Iron Man",
        value: "732",
        short: "Iron Man",
      },
      {
        name: "Thor",
        value: "659",
        short: "Thor",
      },
      {
        name: "Black Widow",
        value: "107",
        short: "Black Widow",
      },
      {
        name: "Hulk",
        value: "332",
        short: "Hulk",
      },
    ],
  },
];

const playGame = async (game) => {
  const player = thanosTurn ? "thanos" : "avenger";
  const { move } = await inquirer.prompt([
    {
      name: "move",
      message: `${thanosTurn ? "Thanos" : "Avenger"} Choose your move:`,
      type: "list",
      choices: [
        {
          name: "Attack",
          value: "attack",
          short: "Attack",
        },
        {
          name: "Defend",
          value: "defend",
          short: "Defend",
        },
      ],
    },
  ]);

  game.playerMove(player, move);
};

const getCharacters = (characters) => {
  return characters.map((character) => {
    const name = character.name.toLowerCase();
    const isExtendedCharacter = extendedCharacters.hasOwnProperty(name);

    if (isExtendedCharacter) {
      const extendedPowers = extendedCharacters[name];
      return new Character(character, extendedPowers);
    } else {
      return new Character(character);
    }
  });
};

const getData = async (ids = []) => {
  const [{ data: thanos }, { data: avenger }] = await Promise.all(
    ids.map((id) =>
      axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}`)
    )
  );
  return [thanos, avenger];
};

const startGame = async (characters) => {
  const game = new Game(characters);

  while (game.status === "In Progress") {
    await playGame(game);
    thanosTurn = !thanosTurn;
  }
};

const init = async () => {
  const answers = await inquirer.prompt(gameSetupQuestions);

  const data = await getData(["655", answers.avenger]);

  const characters = getCharacters(data);

  startGame(characters);
};

init();
