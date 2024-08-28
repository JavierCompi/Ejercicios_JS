//Ejercicio 4//

//1.1//

const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

console.log(avengers[0])

//1.2//

const avenger = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

// Cambiar el primer elemento a "IRONMAN"
avenger[0] = 'IRONMAN'

console.log(avenger)

//1.3//

const avenger = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

console.log(avenger.length)

//1.4//

const rickAndMortYCharacters = ['Rick', 'Beth', 'Jerry']

rickAndMortYCharacters.push('Morty')
rickAndMortyYCharacters.push('Summer')

console.log(rickAndMortYCharacters[rickAndMortYCharacters.length - 1])

//1.5//

const rickAndMortyCharacter = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

rickAndMortyCharacter.pop()

console.log('Primer elemento:', rickAndMortyCharacters[0])
console.log(
  'Último elemento:',
  rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
)

//1.6//

const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

rickAndMortyCharacters.splice(1, 1)

console.log(rickAndMortyCharacters)
