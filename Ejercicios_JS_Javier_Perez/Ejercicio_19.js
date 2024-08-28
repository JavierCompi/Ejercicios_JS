const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

for (let i = toys.length - 1; i >= 0; i--) {
  if (toys[i].name.toLowerCase().includes('gato')) {
    toys.splice(i, 1)
  }
}

console.log(toys)
