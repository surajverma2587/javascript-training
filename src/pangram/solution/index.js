const isPangram = (sentence) => {
  const sentenceType = typeof sentence
  if (sentenceType === 'string') {
    const alphabetsArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
  
    const lowercaseSentence = sentence.toLowerCase()
  
    const sentenceToArray = lowercaseSentence.split('')
  
    const result = alphabetsArray.every((alphabet) => {
      return sentenceToArray.includes(alphabet)
    })
  
    return result
  } else {
    return false
  }
}

export default isPangram