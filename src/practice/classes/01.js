/**
 * Create an Animal class which has
 */

class Animal {
  constructor(health) {
    this.health = health;
  }

  eat() {
    const newHealth = this.health + this.points;
    if (newHealth < 100) {
      this.health = newHealth;
    } else {
      this.health = 100;
    }
  }

  sleep() {
    const newHealth = this.health + this.points;
    if (newHealth < 100) {
      this.health = newHealth;
    } else {
      this.health = 100;
    }
  }

  run() {}

  stats() {
    console.log(this.health);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(100);

    this.name = name;
    this.points = 5;
  }
}

const dog = new Dog("Milo");

dog.eat();
dog.stats();
