import { area, perimeter, dimensions } from './approach_0'
import rectangleObjectConstructor from './approach_1'
import rectangleConstructor from './approach_2'
import Rectangle from './approach_3'

describe('Approach 0 - Without Objects Approach', () => {
  test('should return the area of a rectangle', () => {
    const expected = 20
    const actual = area(4, 5)
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the perimeter of a rectangle', () => {
    const expected = 18
    const actual = perimeter(4, 5)
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the dimensions of a rectangle', () => {
    const expected = 'Length: 4 Width: 5'
    const actual = dimensions(4, 5)
  
    expect(actual).toEqual(expected)
  })
})

describe('Approach 1 - Object Create Approach', () => {
  test('should return the area of a rectangle', () => {
    const rectangle = rectangleObjectConstructor(4, 5)
    const expected = 20
    const actual = rectangle.area()
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the perimeter of a rectangle', () => {
    const rectangle = rectangleObjectConstructor(4, 5)
    const expected = 18
    const actual = rectangle.perimeter()
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the dimensions of a rectangle', () => {
    const rectangle = rectangleObjectConstructor(4, 5)
    const expected = 'Length: 4 Width: 5'
    const actual = rectangle.dimensions()
  
    expect(actual).toEqual(expected)
  })
})

describe('Approach 2 - New Keyword Approach', () => {
  test('should return the area of a rectangle', () => {
    const rectangle = new rectangleConstructor(4, 5)
    const expected = 20
    const actual = rectangle.area()
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the perimeter of a rectangle', () => {
    const rectangle = new rectangleConstructor(4, 5)
    const expected = 18
    const actual = rectangle.perimeter()
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the dimensions of a rectangle', () => {
    const rectangle = new rectangleConstructor(4, 5)
    const expected = 'Length: 4 Width: 5'
    const actual = rectangle.dimensions()
  
    expect(actual).toEqual(expected)
  })
})

describe('Approach 3 - Class Based Approach', () => {
  test('should return the area of a rectangle', () => {
    const rectangle = new Rectangle(4, 5)
    const expected = 20
    const actual = rectangle.area()
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the perimeter of a rectangle', () => {
    const rectangle = new Rectangle(4, 5)
    const expected = 18
    const actual = rectangle.perimeter()
  
    expect(actual).toEqual(expected)
  })
  
  test('should return the dimensions of a rectangle', () => {
    const rectangle = new Rectangle(4, 5)
    const expected = 'Length: 4 Width: 5'
    const actual = rectangle.dimensions()
  
    expect(actual).toEqual(expected)
  })
})

