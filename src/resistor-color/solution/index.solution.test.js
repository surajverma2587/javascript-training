import resistorColour from '.'

test('should return 0 for black', () => {
  const expected = 0
  const result = resistorColour('black')

  expect(result).toEqual(expected)
})

test('should return 7 violet', () => {
  const expected = 7
  const result = resistorColour('violet')

  expect(result).toEqual(expected)
})

test('should return Invalid Colour', () => {
  const expected = 'Invalid Colour'
  const result = resistorColour('hello')

  expect(result).toEqual(expected)
})

test('should return 0 for Black', () => {
  const expected = 0
  const result = resistorColour('Black')

  expect(result).toEqual(expected)
})

test('should return Invalid Colour', () => {
  const expected = 'Invalid Colour'
  const result = resistorColour()

  expect(result).toEqual(expected)
})
