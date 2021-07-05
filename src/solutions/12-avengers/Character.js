import BasePowers from "./BasePowers.js";
import ExtendedPowers from "./ExtendedPowers.js";

class Character {
  constructor(character, extendedPowers) {
    this.id = character.id;
    this.name = character.name;

    if (extendedPowers) {
      this.powers = new ExtendedPowers(character.powerstats, extendedPowers);
    } else {
      this.powers = new BasePowers(character.powerstats);
    }
  }
}

export default Character;
