// Implicit binding when a method property of an object is invoked

const greet = function () {
  console.log(`Welcome ${this.username}!!`);
}

const goodbye = function () {
  console.log(`Goodbye ${this.username}!!`);
}

const user1 = { username: "Bob", greet, goodbye }
const user2 = { username: "Alice", greet, goodbye }

user1.greet()
user1.goodbye()

user2.greet()
user2.goodbye()