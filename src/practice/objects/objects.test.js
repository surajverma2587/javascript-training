import insertIntoObject from "./exercise_1"
import getFromObject from "./exercise_2"
import getNestedObjectValue from "./exercise_3"
import getObjectKeysLength from "./exercise_4"
import hasValueInObject from "./exercise_5"
import hasKeyInObject from "./exercise_6"

describe('Objects - Exercise 1', () => {
  test('should insert the key and value in the object', () => {
    const expected = { name: 'Bob' }
    const actual = insertIntoObject('name', 'Bob')

    expect(actual).toEqual(expected)
  })
})

describe('Objects - Exercise 2', () => {
  test('should get value from object', () => {
    const expected = 'Bob'
    const actual = getFromObject({ name: 'Bob' }, 'name')

    expect(actual).toEqual(expected)
  })
})

describe('Objects - Exercise 3', () => {
  test('should return the value from a nested object of depth 3', () => {
    const expected = 'Google'
    const nestedObject = {
      name: 'Bob',
      age: 30,
      friend: {
        name: 'Alice',
        career: {
          type: 'Full-Time',
          company: 'Google'
        }
      }
    }
    const actual = getNestedObjectValue(nestedObject, 'friend', 'career', 'company')

    expect(actual).toEqual(expected)
  })
})

describe('Objects - Exercise 4', () => {
  test('should return the length of the keys', () => {
    const expected = 4
    const object = {
      name: 'Bob',
      age: 30,
      email: 'bob@example.com',
      city: 'London'
    }
    const actual = getObjectKeysLength(object)

    expect(actual).toEqual(expected)
  })
})

describe('Objects - Exercise 5', () => {
  test('should return true if object includes the value', () => {
    const expected = true
    const object = {
      name: 'Bob',
      age: 30,
      email: 'bob@example.com',
      city: 'London'
    }
    const actual = hasValueInObject(object, 'London')

    expect(actual).toEqual(expected)
  })

  test('should return false if object does not include the value', () => {
    const expected = false
    const object = {
      name: 'Bob',
      age: 30,
      email: 'bob@example.com',
      city: 'London'
    }
    const actual = hasValueInObject(object, 40)

    expect(actual).toEqual(expected)
  })
})

describe('Objects - Exercise 6', () => {
  test('should return \'Key found\' when object has key', () => {
    const expected = 'Key found'
    const object = {
      name: 'Bob',
      age: 30,
      email: 'bob@example.com',
      city: 'London'
    }
    const actual = hasKeyInObject(object, 'city')

    expect(actual).toEqual(expected)
  })
  
  test('should return \'Key not found\' when object has key', () => {
    const expected = 'Key not found'
    const object = {
      name: 'Bob',
      age: 30,
      email: 'bob@example.com',
      city: 'London'
    }
    const actual = hasKeyInObject(object, 'country')

    expect(actual).toEqual(expected)
  })
})
