function finderName(param, nameToFind) {
  for (let i = 0; i < param.length; i++) {
    if (param[i] === nameToFind) {
      return { found: true, position: i }
    }
  }
  return { found: false, position: -1 }
}

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

console.log(finderName(nameFinder, 'Logan'))
console.log(finderName(nameFinder, 'Wanda'))
