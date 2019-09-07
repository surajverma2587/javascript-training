const mathObjectCreator = function(num1, num2) {
  this.num1 = num1
  this.num2 = num2
}

mathObjectCreator.prototype.add = function () {
  return this.num1 + this.num2
}

mathObjectCreator.prototype.subtract = function () {
  return this.num1 - this.num2
}

mathObjectCreator.prototype.multiply = function () {
  return this.num1 * this.num2
}

mathObjectCreator.prototype.divide = function () {
  return this.num1 / this.num2
}

mathObjectCreator.prototype.modulus = function () {
  return this.num1 % this.num2
}

const user1 = new mathObjectCreator(20, 4)
const user2 = new mathObjectCreator(50, 10)

console.log('USER 1 RESULTS')
console.log(user1)
console.log(user1.add())
console.log(user1.subtract())
console.log(user1.multiply())
console.log(user1.divide())
console.log(user1.modulus())

console.log('USER 2 RESULTS')
console.log(user2)
console.log(user2.add())
console.log(user2.subtract())
console.log(user2.multiply())
console.log(user2.divide())
console.log(user2.modulus())