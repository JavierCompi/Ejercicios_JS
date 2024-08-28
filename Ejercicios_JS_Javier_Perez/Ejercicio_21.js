const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const minors = []
const adults = []

for (const user of users) {
  if (user.years < 18) {
    minors.push(user.name)
  } else {
    adults.push(user.name)
  }
}

console.log('Usuarios menores de edad:')
for (const minor of minors) {
  console.log(minor)
}

console.log('Usuarios mayores de edad:')
for (const adult of adults) {
  console.log(adult)
}
