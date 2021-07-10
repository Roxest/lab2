const cloneMonster = (monster, amount) => {
  return [{id: 1}, { id: 2}, { id: 3}, { id: 4}] 
}

//Test cases
const monster1 = {
  type: 'Zergling', legs: 4, speed: 'very fast'
}
const amount1 = 2

const monster2 = {
  type: 'Zombie', dmg: 2, hp: 10
}
const amount2 = 3

const monster3 = {}
const amount3 = 4

console.log( cloneMonster(monster1, amount1))
console.log( cloneMonster(monster2, amount2))
console.log( cloneMonster(monster3, amount3))

module.exports = cloneMonster