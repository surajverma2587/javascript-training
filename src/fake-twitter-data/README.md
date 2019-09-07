# Fake Twitter Data

## Challenge

Write a function which receives a list of tweets related to cars from the fake twitter API and performs the following operations:

- filter out the tweets that contain hashtags "honda", "audi" and "bmw"
- sort the tweets by ID in descending order
- transform the resultant object to the one shown below and ensure the following operations
  - should insert the total likes of all tweets
  - construct a new string for hashtags as `#cars #nissan #newcar`
  - construct a new string for title as `Tweet from <username here>`

```javascript
{
  tweets: [
    {
      id: 300,
      likes: 6378,
      message: "Kia was over-rated!!",
      title: "Tweet from Alice",
      hashtags: "#cars #kia #newcar",
    },
    {
      id: 121,
      likes: 52342,
      message: "I love my new nissan!!",
      title: "Tweet from Bob",
      hashtags: "#cars #nissan #newcar",
    },
  ],
  likes: 58720
}
```

The returned object is then used by the UI-client to render a list of tweets and relevant data.

### JSON data sample

```javascript
{
  tweets: [
    {
      id: 256,
      likes: 2432,
      message: "This is my first tweet!!",
      username: "Kate",
      hashtags: ["cars", "bmw", "newcar"]
    },
    {
      id: 121,
      likes: 52342,
      message: "I love my new nissan!!",
      username: "Bob",
      hashtags: ["cars", "nissan", "newcar"]
    },
    {
      id: 300,
      likes: 6378,
      message: "Kia was over-rated!!",
      username: "Alice",
      hashtags: ["cars", "kia", "newcar"]
    }
  ]
}
```

### Note

- Write your tests in the file `index.spec.js` located inside the `__tests__` directory.
- Add the function in file `index.js`.
- Follow a Test Driven Development (TDD) approach.

### Useful Links

- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Jest Framework](https://jestjs.io/docs/en/getting-started)
