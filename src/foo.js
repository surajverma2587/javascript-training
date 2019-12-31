// const user = {
//   name: 'Alice',
//   points: 0
// }

// const increasePoints = (diceNumber) => {
//   if (diceNumber === 6) {
//     return { ...user, points: user.points + 10 }
//   }
//   return { ...user }
// }

// let currentUser = {}

// currentUser = increasePoints(3)

// console.log('USER', user)
// console.log(currentUser)

// currentUser = increasePoints(6)

// console.log('USER', user)
// console.log(currentUser)

const myArray = [1, 2, 3, 4, 5]

// const copyArrayAndMultiplyBy2 = (array) => {
//   let output = []
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] * 2)
//   }
//   return output
// }

// const copyArrayAndDivideBy2 = (array) => {
//   let output = []
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] / 2)
//   }
//   return output
// }

// const copyArrayAndAdd3 = (array) => {
//   let output = []
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] +3)
//   }
//   return output
// }

// const result1 = copyArrayAndMultiplyBy2(myArray)
// const result2 = copyArrayAndDivideBy2(myArray)
// const result3 = copyArrayAndAdd3(myArray)

// console.log(result1)
// console.log(result2)
// console.log(result3)

const transformArray = (array, transformFunction) => {
  let output = []
  for (let i = 0; i < array.length; i++) {
    output.push(transformFunction(array[i]))
  }
  return output
}

const multiplyBy2 = (num) => num * 2
const divideBy2 = (num) => num / 2
const addBy3 = (num) => num + 3

const result4 = transformArray(myArray, multiplyBy2)
const result5 = transformArray(myArray, divideBy2)
const result6 = transformArray(myArray, addBy3)

console.log(result4)
console.log(result5)
console.log(result6)