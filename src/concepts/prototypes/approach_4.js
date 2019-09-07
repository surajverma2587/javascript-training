class MyMath {
  constructor(num1, num2) {
    this.num1 = num1
    this.num2 = num2
  }

  add() {
    return this.num1 + this.num2
  }

  sub() {
    return this.num1 - this.num2
  }

  mul() {
    return this.num1 * this.num2
  }

  div() {
    return this.num1 / this.num2
  }

  mod() {
    return this.num1 % this.num2
  }
}

const user1 = new MyMath(20, 4)
const user2 = new MyMath(50, 10)

console.log(user1)
console.log(user2)

console.log('USER 1 RESULTS')
console.log(user1.add())
console.log(user1.sub())
console.log(user1.mul())
console.log(user1.div())
console.log(user1.mod())

console.log('USER 2 RESULTS')
console.log(user2.add())
console.log(user2.sub())
console.log(user2.mul())
console.log(user2.div())
console.log(user2.mod())
