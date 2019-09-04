const BLACKLIST = ['honda', 'audi', 'bmw']

export const filterItems = (tweets) => {
  return tweets.filter((tweet) => {
    const hashtags = tweet.hashtags
    return hashtags.every((hashtag) => {
      return !BLACKLIST.includes(hashtag)
    })
  })
}

export const sortItems = (tweets) => {
  return tweets.sort((tweet1, tweet2) => {
    return tweet2.id > tweet1.id
  })
}

export const hashtagFormat = (hashtags) => {
  const mappedArray = hashtags.map((hashtag) => {
    return `#${hashtag}`
  })
  return mappedArray.join(' ')
}

export const titleFormat = (username) => {
  return `Tweet from ${username}`
}

export const transformTweet = (tweet) => {
  return {
    id: tweet.id,
    likes: tweet.likes,
    message: tweet.message,
    hashtags: hashtagFormat(tweet.hashtags),
    title: titleFormat(tweet.username)
  }
}

export const transformTweets = (tweets) => {
  return tweets.map((tweet) => {
    return transformTweet(tweet)
  })
}

export const totalLikes = (tweets) => {
  return tweets.reduce((acc, tweet) => {
    return acc + tweet.likes
  }, 0)
}

export const fakeTwitter = (data) => {
  const filteredTweets = filterItems(data.tweets)
  const sortedTweets = sortItems(filteredTweets)
  const tweets = transformTweets(sortedTweets)
  const likes = totalLikes(sortedTweets)

  return {
    tweets: tweets,
    likes: likes
  }
}