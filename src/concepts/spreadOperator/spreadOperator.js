const numbers = [1, 2, 3, 4, 5]
const words = ['foo', 'bar']

const result1 = [0, ...numbers]
console.log(result1)

const result2 = [...numbers, 6]
console.log(result2)

const result3 = [0, ...numbers, 7, 8]
console.log(result3)

const result4 = [...words, ...numbers]
console.log(result4)

const city = {
  name: 'London',
  country: 'UK',
}

const result5 = {
  user: {
    name: 'Bob',
    location: { ...city }
  } 
}

console.log(result5)

city.name = 'Manchester'

console.log(result5)

const math = (numbers, fn) => numbers.reduce((acc, number) => fn(acc, number))

const add = (num1, num2) => num1 + num2
const multiply = (num1, num2) => num1 * num2

const args1 = [numbers, add]
const args2 = [numbers, multiply]

const sum = math(...args1)
const product = math(...args2)

console.log(sum)
console.log(product)