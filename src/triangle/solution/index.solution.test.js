import getTriangleType from '.'

test('should return an EQUILATERAL triangle', () => {
  const expected = 'EQUILATERAL Triangle'
  const actual = getTriangleType(3, 3, 3)

  expect(actual).toEqual(expected)
})

test('should return an ISOSCELES triangle with a and b the same', () => {
  const expected = 'ISOSCELES Triangle'
  const actual = getTriangleType(3, 3, 2)

  expect(actual).toEqual(expected)
})

test('should return an ISOSCELES triangle with b and c the same', () => {
  const expected = 'ISOSCELES Triangle'
  const actual = getTriangleType(2, 3, 3)

  expect(actual).toEqual(expected)
})

test('should return an ISOSCELES triangle with a and c the same', () => {
  const expected = 'ISOSCELES Triangle'
  const actual = getTriangleType(3, 2, 3)

  expect(actual).toEqual(expected)
})

test('should return an SCALENE triangle', () => {
  const expected = 'SCALENE Triangle'
  const actual = getTriangleType(3, 4, 5)

  expect(actual).toEqual(expected)
})

test('should return an INVALID triangle when triangle inequality theorem is not valid', () => {
  const expected = 'INVALID Triangle'
  const actual = getTriangleType(1, 2, 9)

  expect(actual).toEqual(expected)
})

test('should return an INVALID triangle for negative sides', () => {
  const expected = 'INVALID Triangle'
  const actual = getTriangleType(-1, -2, 9)

  expect(actual).toEqual(expected)
})

test('should return an INVALID triangle for 0 sides', () => {
  const expected = 'INVALID Triangle'
  const actual = getTriangleType(0, 0 , 0)

  expect(actual).toEqual(expected)
})
