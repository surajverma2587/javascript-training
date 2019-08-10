import { sumOfNumbers, largestNumber } from ".";

test('should return the sum of all numbers', () => {
  const expected = 15
  const result = sumOfNumbers([1, 2, 3, 4, 5])

  expect(result).toEqual(expected)
})

test('should return the sum of all numbers as 0', () => {
  const expected = 0
  const result = sumOfNumbers([])

  expect(result).toEqual(expected)
})

test('should return the largest number', () => {
  const expected = 5
  const result = largestNumber([1, 2, 3, 4, 5])

  expect(result).toEqual(expected)
})

test('should return 0 when there are no numbers', () => {
  const expected = 0
  const result = largestNumber([])

  expect(result).toEqual(expected)
})