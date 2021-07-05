class BasePowers {
  constructor(powers) {
    this.intelligence = +powers.intelligence;
    this.strength = +powers.strength;
    this.speed = +powers.speed;
    this.durability = +powers.durability;
    this.power = +powers.power;
    this.combat = +powers.combat;
  }

  attack() {
    const power =
      ((this.strength + this.speed + this.power) / 100) * this.combat;
    console.log(`Attacking with power ${power}`);
    return power;
  }

  defend() {
    const power = ((this.intelligence + this.durability) / 100) * this.combat;
    console.log(`Defending with power ${power}`);
    return power;
  }
}

export default BasePowers;
