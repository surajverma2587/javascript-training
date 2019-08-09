import { evenNumbersCounter, vowelsCounter } from '.'

test('should return the count of even numbers', () => {
  const expected = 3
  const result = evenNumbersCounter([2, 5, 7, 8, 10, 11])

  expect(result).toEqual(expected)
})

test('should return the count of vowels as 2', () => {
  const expected = 2
  const result = vowelsCounter('book')

  expect(result).toEqual(expected)
})

test('should return the count of vowels as 0', () => {
  const expected = 0
  const result = vowelsCounter('cry')

  expect(result).toEqual(expected)
})