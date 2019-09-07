import isPangram from '.'

test('should return true for a valid pangram', () => {
  const expected = true
  const result = isPangram('the quick brown fox jumps over the lazy dog')

  expect(result).toEqual(expected)
})

test('should return true for a valid pangram with special characters', () => {
  const expected = true
  const result = isPangram('The quick brown fox jumps (over) the lazy dog!')

  expect(result).toEqual(expected)
})

test('should return true for a valid pangram with uppercase letters', () => {
  const expected = true
  const result = isPangram('THE quick brown fox jumps over the lazy DOG')

  expect(result).toEqual(expected)
})

test('should return false for an invalid pangram', () => {
  const expected = false
  const result = isPangram('hello world')

  expect(result).toEqual(expected)
})

test('should return false for an invalid pangram with only special characters', () => {
  const expected = false
  const result = isPangram('**|-|**')

  expect(result).toEqual(expected)
})

test('should return false if input is not a string', () => {
  const expected = false
  const result = isPangram(123)

  expect(result).toEqual(expected)
})
