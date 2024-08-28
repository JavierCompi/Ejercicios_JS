function repeatCounter(param) {
  let wordCounts = {}

  for (let i = 0; i < param.length; i++) {
    let word = param[i]
    if (wordCounts[word]) {
      wordCounts[word] += 1
    } else {
      wordCounts[word] = 1
    }
  }

  return wordCounts
}

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

console.log(repeatCounter(counterWords))
