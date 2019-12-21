/**
 * ADD CODE HERE
 * NOTE: Don't forget to add your tests first
 */
const factory = (array = [], result) => {
  let startIndex = 0
  let endIndex = array.length ? array.length - 1 : 0
  let sum
  let pair

  const add = (a, b) => a + b

  const shiftIndexes = () => {
    if (sum < result) {
      startIndex++
    }

    if (sum > result) {
      endIndex--
    }
  }

  const callback = () => (startIndex === endIndex) ? [] : duplet()

  const setPair = () => {
    pair = [array[startIndex], array[endIndex]]
    return pair
  }

  const setSum = () => {
    sum = add(...pair)
    return sum
  }

  const duplet = () => {
    setPair()
    setSum()

    if (sum === result) {
      return pair
    }

    shiftIndexes()

    return callback()
  }
  
  return duplet
}

const getDuplet = (array, result) => {
  const myDuplet = factory(array, result)
  return myDuplet()
}

export default getDuplet