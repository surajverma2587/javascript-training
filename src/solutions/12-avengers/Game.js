class Game {
  constructor([thanos, avenger]) {
    this.thanos = thanos;
    this.avenger = avenger;
    this.thanosHealth = 100;
    this.avengerHealth = 100;
    this.status = "In Progress";
    this.winner = "";
  }

  thanosStats() {
    return `
    ${this.thanos.name} Stats
    ------------
    Health: ${this.thanosHealth}
    `;
  }

  avengerStats() {
    return `
    ${this.avenger.name} Stats
    ------------
    Health: ${this.avengerHealth}
    `;
  }

  setWinner(name) {
    this.winner = name;
    this.status = "Game Over";

    this.stats();
    this.results();
  }

  healthCheck() {
    if (this.thanosHealth <= 0) {
      this.setWinner(this.avenger.name);
    } else if (this.avengerHealth <= 0) {
      this.setWinner(this.thanos.name);
    } else {
      this.stats();
    }
  }

  playerMove(player, move) {
    if (player === "avenger") {
      if (move === "attack") {
        const attack = this.avenger.powers.attack();
        const defend = this.thanos.powers.defend();

        if (attack > defend) {
          this.thanosHealth -= attack - defend;
        }
      }

      if (move === "defend") {
        const defend = this.avenger.powers.defend();
        const attack = this.thanos.powers.attack();

        if (attack > defend) {
          this.avengerHealth -= attack - defend;
        }
      }
    }

    if (player === "thanos") {
      if (move === "attack") {
        const attack = this.thanos.powers.attack();
        const defend = this.avenger.powers.defend();

        if (attack > defend) {
          this.avengerHealth -= attack - defend;
        }
      }

      if (move === "defend") {
        const attack = this.avenger.powers.attack();
        const defend = this.thanos.powers.defend();

        if (attack > defend) {
          this.thanosHealth -= attack - defend;
        }
      }
    }

    this.healthCheck();
  }

  stats() {
    const stats = `
    Game - ${this.status}
    ${this.thanosStats()}
    ${this.avengerStats()}
    `;
    console.log(stats);
  }

  results() {
    const results = `
    Game - ${this.status}
    Winner - ${this.winner}
    `;
    console.log(results);
  }
}

export default Game;
