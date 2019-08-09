import { legalAgeChecker, isValidString } from '.'

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

test('should return true for a string length lesser than 10', () => {
  const expected = true
  const result = isValidString('hello')

  expect(result).toEqual(expected)
})

test('should return false for a string length equal to 10', () => {
  const expected = false
  const result = isValidString('helloworld')

  expect(result).toEqual(expected)
})

test('should return false for a string length greater than 10', () => {
  const expected = false
  const result = isValidString('helloworld!!')

  expect(result).toEqual(expected)
})
