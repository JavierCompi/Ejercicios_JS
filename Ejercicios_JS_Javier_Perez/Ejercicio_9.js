function sumAll(param) {
  let sum = 0

  for (let i = 0; i < param.length; i++) {
    sum += param[i]
  }

  return sum
}

const numbers = [1, 2, 3, 5, 45, 37, 58]
console.log(sumAll(numbers))
