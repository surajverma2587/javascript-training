const greet = function (user) {
  console.log('USER in FN BEFORE', user);
  console.log(`Welcome ${this.username}!!`);
  user.foo = 'bar'
  console.log('USER in FN AFTER', user);
  return this
}

const user1 = { username: "Bob", greet }

console.log('USER BEFORE', user1);

user1.greet(user1)

console.log('USER AFTER', user1);
