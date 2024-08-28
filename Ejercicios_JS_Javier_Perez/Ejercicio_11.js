function averageWord(param) {
  let totalSum = 0

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      totalSum += param[i]
    } else if (typeof param[i] === 'string') {
      totalSum += param[i].length
    }
  }

  let avg = param.length > 0 ? totalSum / param.length : 0
  return avg
}

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
console.log(averageWord(mixedElements))
