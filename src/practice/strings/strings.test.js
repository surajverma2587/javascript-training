import welcomeMessageFormatter from './exercise_1'
import ageFormatter from './exercise_2'
import legalAgeChallenger from './exercise_3'
import convertToSingleLine from './exercise_4'
import upper from './exercise_5'
import stringTrimmer from './exercise_6'
import searchString from './exercise_7'
import stringToArray from './exercise_8'
import stringToLowercase from './exercise_9'
import stringToUppercase from './exercise_10'

describe('Strings - Exercise 1', () => {
  test('should return a string with variables embedded', () => {
    const expected = 'My name is Bob Smith.'
    const actual = welcomeMessageFormatter('Bob', 'Smith')
  
    expect(actual).toEqual(expected)
  })
})

describe('Strings - Exercise 2', () => {
  test('should return a string with expressions embedded', () => {
    const expected = 'My age is 30.'
    const actual = ageFormatter(10, 20)
  
    expect(actual).toEqual(expected)
  })
})

describe('Strings - Exercise 3', () => {
  test('should return \'Challenge for 16 years - REQUIRED\'', () => {
    const expected = 'Challenge for 16 years - REQUIRED'
    const actual = legalAgeChallenger(16)
  
    expect(actual).toEqual(expected)
  })

  test('should return \'Challenge for 16 years - NOT REQUIRED\'', () => {
    const expected = 'Challenge for 30 years - NOT REQUIRED'
    const actual = legalAgeChallenger(30)
  
    expect(actual).toEqual(expected)
  })
})

describe('Strings - Exercise 4', () => {
  test('should convert a multi-line string to a single-line string', () => {
    const expected = 'https://news.com/article?utm_source=designernews.co'
    const multiLineString = `
    https://news.com/article
    ?utm_source=designernews.co
    `
    const actual = convertToSingleLine(multiLineString)
  
    expect(actual).toEqual(expected)
  })
})

describe('Strings - Exercise 5', () => {
  test('should convert all the values to uppercase using the tagged template', () => {
    const expected = 'Hello BOB SMITH, welcome to LONDON!!'
    const name = 'bob sMith'
    const city = 'loNDon'
    const actual = upper `Hello ${name}, welcome to ${city}!!`
  
    expect(actual).toEqual(expected)
  })
})

describe('Strings - Exercise 6', () => {
  test('should trim a string on both left and right sides', () => {
    const expected = 'bob@example.com'
    const actual = stringTrimmer('   bob@example.com\t\t \n')

    expect(actual).toEqual(expected)
  })
})

describe('Strings - Exercise 7', () => {
  test('should return true when substring is included in string', () => {
    const expected = true
    const actual = searchString('hello javascript developers', 'javascript')

    expect(actual).toEqual(expected)
  })

  test('should return true when substring is included in string', () => {
    const expected = true
    const actual = searchString('hello javascript developers', 'java')

    expect(actual).toEqual(expected)
  })

  test('should return false when substring is not included in string', () => {
    const expected = false
    const actual = searchString('hello javascript developers', 'python')

    expect(actual).toEqual(expected)
  })
})

describe('Strings - Exercise 8', () => {
  test('should return an array of characters', () => {
    const expected = ['h', 'e', 'l', 'l', 'o']
    const actual = stringToArray('hello', '')

    expect(actual).toEqual(expected)
  })
  
  test('should return an array of words in a sentance', () => {
    const expected = ['hello', 'my', 'name', 'is', 'Bob']
    const actual = stringToArray('hello my name is Bob', ' ')

    expect(actual).toEqual(expected)
  })
})

describe('Strings - Exercise 9', () => {
  test('should return a lowercase version of a string', () => {
    const expected = 'hello, my name is bob'
    const actual = stringToLowercase('HELlo, mY name is BOB')

    expect(actual).toEqual(expected)
  })
})

describe('Strings - Exercise 10', () => {
  test('should return a lowercase version of a string', () => {
    const expected = 'HELLO, MY NAME IS BOB'
    const actual = stringToUppercase('hellO, mY NamE is bOb')

    expect(actual).toEqual(expected)
  })
})
