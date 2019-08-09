import { daysOfTheWeek } from '.'

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