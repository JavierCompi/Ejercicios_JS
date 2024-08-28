function average(param) {
  if (param.length === 0) return 0
  let sum = 0

  for (let i = 0; i < param.length; i++) {
    sum += param[i]
  }

  let avg = sum / param.length
  return avg
}

const numbers = [12, 21, 38, 5, 45, 37, 6]
console.log(average(numbers))
