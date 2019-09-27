import legalAgeChecker from './exercise_1'
import isValidString from './exercise_2'
import daysOfTheWeek from './exercise_4'
import addNumbers from './exercise_3'

describe('Control Flow - Exercise 1', () => {
  test('should return \'No Challenge Required\' when age is over 18', () => {
    const expected = 'No Challenge Required'
    const result = legalAgeChecker(20)

    expect(result).toEqual(expected)
  })

  test('should return \'No Challenge Required\' when age is 18', () => {
    const expected = 'No Challenge Required'
    const result = legalAgeChecker(18)

    expect(result).toEqual(expected)
  })

  test('should return \'Challenge Required\' when age is under 18', () => {
    const expected = 'Challenge Required'
    const result = legalAgeChecker(16)

    expect(result).toEqual(expected)
  })
})

describe('Control Flow - Exercise 2', () => {
  test('should return true for a string length lesser than 10', () => {
    const expected = true
    const result = isValidString('hello')

    expect(result).toEqual(expected)
  })

  test('should return true for a string length equal to 10', () => {
    const expected = true
    const result = isValidString('helloworld')

    expect(result).toEqual(expected)
  })

  test('should return false for a string length greater than 10', () => {
    const expected = false
    const result = isValidString('helloworld!!')

    expect(result).toEqual(expected)
  })
})

describe('Control Flow - Exercise 3', () => {
  test('should return the sum of all numbers in an array', () => {
    const expected = 15
    const result = addNumbers([1, 2, 3, 4, 5])

    expect(result).toEqual(expected)
  })

  test('should return a sum of 0 for an empty array', () => {
    const expected = 0
    const result = addNumbers([])

    expect(result).toEqual(expected)
  })
})

describe('Control Flow - Exercise 4', () => {
  test('should return Sunday for day number 1', () => {
    const expected = 'Sunday'
    const result = daysOfTheWeek(1)

    expect(result).toEqual(expected)
  })

  test('should return Wednesday for day number 4', () => {
    const expected = 'Wednesday'
    const result = daysOfTheWeek(4)

    expect(result).toEqual(expected)
  })

  test('should return Invalid Number for day number 10', () => {
    const expected = 'Invalid Number'
    const result = daysOfTheWeek(10)

    expect(result).toEqual(expected)
  })
})
