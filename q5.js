const mafiaWar = (mafias, fights) => {
  /* Your code here */
}

//Test case
const mafias = [
  {id: 1, power: 5, members: []},
  {id: 2, power: 30, members: []},
  {id: 3, power: 60, members: []},
  {id: 4, power: 42, members: []},
  {id: 5, power: 70, members: []},
]
const fights = [5, 2, 4, 3, 2, 1]
console.log(mafiaWar(mafias, fights))

module.exports = mafiaWar