function findLongestWord(param) {
  let longestWord = ''
  for (let i = 0; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
      longestWord = param[i]
    }
  }

  return longestWord
}

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
console.log(findLongestWord(avengers))
