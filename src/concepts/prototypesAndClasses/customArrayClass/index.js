class CustomArray {
  constructor(array) {
    this.array = array
  }

  map(callbackFn) {
    let index = 0
    const newArray = []
    while (index < this.array.length) {
      const currentValue = this.array[index]
      const result = callbackFn(currentValue)
      newArray.push(result)
      index++
    }
    return newArray
  }

  reduce(callbackFn, acc) {
    let index = 0
    while (index < this.array.length) {
      const currentValue = this.array[index]
      acc = callbackFn(acc, currentValue)
      index++
    }
    return acc
  }

  filter(callbackFn) {
    let index = 0
    const newArray = []
    while (index < this.array.length) {
      const currentValue = this.array[index]
      const result = callbackFn(currentValue)
      if (result) {
        newArray.push(currentValue)
      }
      index++
    }
    return newArray
  }
}

// Callback Functions
const addNumberBy5 = (each) => {
  return each + 5
}

const mulNumberBy5 = (each) => {
  return each * 5
}

const add = (num1, num2) => {
  return num1 + num2
}

const stringConcatenation = (a, b) => {
  return `${a}${b}`
}

const objectTransformation = (acc, obj) => {
  return [
    ...acc,
    {
      name: `${obj.fname} ${obj.lname}`,
      age: `${obj.age} years old`
    }
  ]
}

const isEven = (number) => {
  return (number % 2 === 0)
}

// Initial Arrays defined as Custom Array Data Types
const numbersArray = new CustomArray([1, 2, 3])
const charactersArray = new CustomArray(['h', 'e', 'l', 'l', 'o'])
const objectsArray = new CustomArray([
  {
    fname: 'Bob',
    lname: 'Smith',
    age: 35
  },
  {
    fname: 'Alice',
    lname: 'Smith',
    age: 27
  },
  {
    fname: 'Carol',
    lname: 'Jane',
    age: 45
  }
])

// Array Map Results
const mapResult1 = numbersArray.map(addNumberBy5)
const mapResult2 = numbersArray.map(mulNumberBy5)

console.log('Map Results');
console.log('===========');
console.log(mapResult1);
console.log(mapResult2);
console.log('===========');

// Array Reduce Results
const reduceResult1 = charactersArray.reduce(stringConcatenation, '')
const reduceResult2 = numbersArray.reduce(add, 0)
const reduceResult3 = objectsArray.reduce(objectTransformation, [])

console.log('Reduce Results');
console.log('===========');
console.log(reduceResult1);
console.log(reduceResult2);
console.log(reduceResult3);

// Array Filter Results
const filterResult1 = numbersArray.filter(isEven)

console.log('Filter Results');
console.log('===========');
console.log(filterResult1);