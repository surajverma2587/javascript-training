class CustomArray {
  constructor(array) {
    this.array = array
    this.index = 0
    this.newArray = []
  }

  map(callbackFn) {
    this.index = 0
    this.newArray = []
    while (this.index < this.array.length) {
      const currentValue = this.array[this.index]
      const result = callbackFn(currentValue)
      this.newArray.push(result)
      this.index++
    }
    return this.newArray
  }
}

const addBy5 = (each) => {
  return each + 5
}

const mulBy5 = (each) => {
  return each * 5
}

const myArray = new CustomArray([1, 2, 3])

const addResult = myArray.map(addBy5)
const mulResult = myArray.map(mulBy5)

console.log(addResult);
console.log(mulResult);