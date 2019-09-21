import evenNumbersCounter from './exercise_1'
import vowelsCounter from './exercise_2'
import uppercaseStrings from './exercise_3'
import squareNumbers from './exercise_4'
import addNumberToNumbers from './exercise_5'
import sumOfNumbers from './exercise_6'
import largestNumber from './exercise_7'
import evenNumbersChecker from './exercise_8'
import stringLengthChecker from './exercise_9'
import itemChecker from './exercise_10'
import arrayToString from './exercise_11'
import itemFinder from './exercise_12'
import evenNumberFilter from './exercise_13'

describe('Arrays - Exercise 1', () => {
  test('should return the count of even numbers', () => {
    const expected = 3
    const actual = evenNumbersCounter([2, 5, 7, 8, 10, 11])
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 2', () => {
  test('should return the count of vowels as 2', () => {
    const expected = 2
    const actual = vowelsCounter('book')
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the count of vowels as 0', () => {
    const expected = 0
    const actual = vowelsCounter('cry')
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 3', () => {
  test('should return an array of uppercase strings', () => {
    const expected = ['CAT', 'DOG', 'RAT']
    const actual = uppercaseStrings(['cat', 'dog', 'rat'])
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 4', () => {
  test('should return an array of square numbers', () => {
    const expected = [4, 9, 16, 25]
    const actual = squareNumbers([2, 3, 4, 5])
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 5', () => {
  test('should return an array of numbers added by 5', () => {
    const expected = [15, 25, 35, 45]
    const actual = addNumberToNumbers(5, [10, 20, 30, 40])
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 6', () => {
  test('should return the sum of all numbers', () => {
    const expected = 15
    const actual = sumOfNumbers([1, 2, 3, 4, 5])
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the sum of all numbers as 0', () => {
    const expected = 0
    const actual = sumOfNumbers([])
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 7', () => {
  test('should return the largest number', () => {
    const expected = 5
    const actual = largestNumber([1, 2, 3, 4, 5])
  
    expect(actual).toEqual(expected)
  })
  
  test('should return 0 when there are no numbers', () => {
    const expected = 0
    const actual = largestNumber([])
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 8', () => {
  test('should return true if all numbers are even', () => {
    const expected = true
    const actual = evenNumbersChecker([2, 4, 6, 8, 10])
  
    expect(actual).toEqual(expected)
  })
  
  test('should return false if any number is not even', () => {
    const expected = false
    const actual = evenNumbersChecker([2, 4, 6, 9, 10])
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 9', () => {
  test('should return true if any string is bigger than 5 characters', () => {
    const expected = true
    const actual = stringLengthChecker(['car', 'dog', 'blue', 'rainbow'])
  
    expect(actual).toEqual(expected)
  })
  
  test('should return false if all strings are smaller than 5 characters', () => {
    const expected = false
    const actual = stringLengthChecker(['car', 'dog', 'blue'])
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 10', () => {
  test('should return true if item exists in the array', () => {
    const expected = 'Found blue'
    const actual = itemChecker('blue')
  
    expect(actual).toEqual(expected)
  })
  
  test('should return false if item does not exist in the array', () => {
    const expected = 'yellow does not exist'
    const actual = itemChecker('yellow')
  
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 11', () => {
  test('should return a string concatenated with \'|\'', () => {
    const expected = 'red|blue|green|pink'
    const actual = arrayToString(['red', 'blue', 'green', 'pink'], '|')
    
    expect(actual).toEqual(expected)
  })

  test('should return a string concatenated with \'|\'', () => {
    const expected = 'Hello'
    const actual = arrayToString(['H', 'e', 'l', 'l', 'o'])
    
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 12', () => {
  test('should return the item when item is found', () => {
    const expected = 'green day'
    const actual = itemFinder(['blue oyster cult', 'black sabbath', 'green day'], 'day')
    
    expect(actual).toEqual(expected)
  })

  test('should return \'Sorry no such item found\'', () => {
    const expected = 'Sorry no such item found'
    const actual = itemFinder(['blue oyster cult', 'black sabbath', 'green day'], 'iron')
    
    expect(actual).toEqual(expected)
  })
})

describe('Arrays - Exercise 13', () => {
  test('should return an array of only even numbers', () => {
    const expected = [2, 6, 8]
    const actual = evenNumberFilter([1, 5, 2, 13, 6, 21, 11, 8])
    
    expect(actual).toEqual(expected)
  })

  test('should return an empty array when no even number is found', () => {
    const expected = []
    const actual = evenNumberFilter([1, 5, 13, 21, 11])
    
    expect(actual).toEqual(expected)
  })
})