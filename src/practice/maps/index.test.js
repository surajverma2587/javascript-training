import { uppercaseStrings, squareNumbers, addNumberToNumbers } from '.'

test('should return an array of uppercase strings', () => {
  const expected = ['CAT', 'DOG', 'RAT']
  const result = uppercaseStrings(['cat', 'dog', 'rat'])

  expect(result).toEqual(expected)
})

test('should return an array of square numbers', () => {
  const expected = [4, 9, 16, 25]
  const result = squareNumbers([2, 3, 4, 5])

  expect(result).toEqual(expected)
})

test('should return an array of numbers added by 5', () => {
  const expected = [15, 25, 35, 45]
  const result = addNumberToNumbers(5, [10, 20, 30, 40])

  expect(result).toEqual(expected)
})