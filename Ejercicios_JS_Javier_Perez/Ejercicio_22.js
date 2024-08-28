const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

const usedFruits = new Set()

let fruitIndex = 0

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    if (fruitIndex < fruits.length) {
      let fruit = fruits[fruitIndex]
      while (usedFruits.has(fruit)) {
        fruitIndex++
        if (fruitIndex >= fruits.length) {
          fruit = null
          break
        }
        fruit = fruits[fruitIndex]
      }

      if (fruit) {
        foodSchedule[i].name = fruit
        usedFruits.add(fruit)
        fruitIndex++
      }
    }
  }
}

console.log(foodSchedule) // Imprime el array actualizado
