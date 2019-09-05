// Explicit and fixed binding using the call method of Function

let greet = function () {
  console.log(`Welcome ${this.name}!!`);
}

const user1 = { name: "Bob" };
const user2 = { name: "Alice" };

const originalGreetFun = greet;

greet = function() {
  originalGreetFun.call(user1);
};

greet();
greet.call(user2);