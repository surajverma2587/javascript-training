import { filterItems, sortItems, hashtagFormat, titleFormat } from '.'

test('should return the filtered items', () => {
  const tweets = [
    {
      "id": 256,
      "likes": 2432,
      "message": "This is my first tweet!!",
      "username": "Kate",
      "hashtags": ["cars", "bmw", "newcar"]
    },
    {
      "id": 121,
      "likes": 52342,
      "message": "I love my new nissan!!",
      "username": "Bob",
      "hashtags": ["cars", "nissan", "newcar"]
    },
    {
      "id": 300,
      "likes": 6378,
      "message": "Kia was over-rated!!",
      "username": "Alice",
      "hashtags": ["cars", "kia", "newcar"]
    }
  ]
  const expected = [
    {
      "id": 121,
      "likes": 52342,
      "message": "I love my new nissan!!",
      "username": "Bob",
      "hashtags": ["cars", "nissan", "newcar"]
    },
    {
      "id": 300,
      "likes": 6378,
      "message": "Kia was over-rated!!",
      "username": "Alice",
      "hashtags": ["cars", "kia", "newcar"]
    }
  ]
  const result = filterItems(tweets)

  expect(result).toEqual(expected)
})

test('should return the sorted items', () => {
  const tweets = [
    {
      "id": 121,
      "likes": 52342,
      "message": "I love my new nissan!!",
      "username": "Bob",
      "hashtags": ["cars", "nissan", "newcar"]
    },
    {
      "id": 300,
      "likes": 6378,
      "message": "Kia was over-rated!!",
      "username": "Alice",
      "hashtags": ["cars", "kia", "newcar"]
    }
  ]
  const expected = [
    {
      "id": 300,
      "likes": 6378,
      "message": "Kia was over-rated!!",
      "username": "Alice",
      "hashtags": ["cars", "kia", "newcar"]
    },
    {
      "id": 121,
      "likes": 52342,
      "message": "I love my new nissan!!",
      "username": "Bob",
      "hashtags": ["cars", "nissan", "newcar"]
    },
  ]
  const result = sortItems(tweets)

  expect(result).toEqual(expected)
})

test('should return a string format of hashtags', () => {
  const expected = '#cars #kia #newcar'
  const result = hashtagFormat(["cars", "kia", "newcar"])

  expect(result).toEqual(expected)
})

test('should return a string format of title', () => {
  const expected = 'Tweet from Bob'
  const result = titleFormat('Bob')

  expect(result).toEqual(expected)
})
