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
