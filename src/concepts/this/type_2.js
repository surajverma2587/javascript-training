// Implicit binding with another this within a function

const greet = function () {
  console.log(`Welcome ${this.username}!!`);

  const greetFriend = function () {
    console.log(`Your best friend is ${this.username}!!`);
  }
  const friend = { username: "Alice", greetFriend }
  friend.greetFriend()
}

const user1 = { username: "Bob", greet }

user1.greet()