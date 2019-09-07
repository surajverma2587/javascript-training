import helloWorld from '.'

test('should return \'Hello, World!\'', () => {
  const expected = 'Hello, World!'
  const actual = helloWorld()

  expect(actual).toEqual(expected)
})
