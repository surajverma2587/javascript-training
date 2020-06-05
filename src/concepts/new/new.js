const User = function (name) {
  this.name = name;
  this.score = 0;
  this.increaseScore = function () {
    this.score += 1;
  };
  this.decreaseScore = function () {
    this.score -= 1;
  };
};

const bob = new User("Bob");
const alice = new User("Alice");
const carol = new User("Carol");

bob.increaseScore();
bob.increaseScore();
bob.increaseScore();

console.log(bob);

alice.increaseScore();
alice.increaseScore();
alice.increaseScore();
alice.decreaseScore();

console.log(alice);

console.log(carol);
