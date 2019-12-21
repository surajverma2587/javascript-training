/**
 * ADD TESTS HERE
 */

import getDuplet from '.'

test('should return [4, 5] for 9', () => {
  const expected = [4, 5]
  const actual = getDuplet([1, 2, 3, 4, 5], 9)

  expect(actual).toEqual(expected)
})

test('should return [2, 5] for 7', () => {
  const expected = [2, 5]
  const actual = getDuplet([1, 2, 3, 4, 5], 7)

  expect(actual).toEqual(expected)
})

test('should return [1, 2] for 3', () => {
  const expected = [1, 2]
  const actual = getDuplet([1, 2, 3, 4, 5], 3)

  expect(actual).toEqual(expected)
})

test('should return [] for 1', () => {
  const expected = []
  const actual = getDuplet([1, 2, 3, 4, 5], 1)

  expect(actual).toEqual(expected)
})

test('should return [] for 0', () => {
  const expected = []
  const actual = getDuplet([1, 2, 3, 4, 5], 0)

  expect(actual).toEqual(expected)
})

test('should return [53, 65] for 118', () => {
  const expected = [53, 65]
  const actual = getDuplet([1, 2, 3, 4, 5, 6, 7, 12, 53, 65, 67, 78, 87, 99], 118)

  expect(actual).toEqual(expected)
})

test('should return [] for 10', () => {
  const expected = []
  const actual = getDuplet([], 10)

  expect(actual).toEqual(expected)
})
