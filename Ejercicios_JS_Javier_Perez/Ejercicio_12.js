function removeDuplicates(param) {
  let uniqueElements = []

  for (let i = 0; i < param.length; i++) {
    if (!uniqueElements.includes(param[i])) {
      uniqueElements.push(param[i])
    }
  }

  return uniqueElements
}

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

console.log(removeDuplicates(duplicates))
// Debería devolver ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'chicken', 'onion rings', 'soda']
