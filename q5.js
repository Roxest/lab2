const mafiaWar = (mafias, fights) => {
  /* Your code here */
  let edmaf = mafias
  let ring = []
  let queue = fights
  while (queue.length != 0){
    ring.push(Object.assign({},edmaf[queue[0]-1]))
    if (ring.length == 2){
      if(ring[0].power > ring[1].power){
        edmaf[ring[0].id-1].power = ring[0].power+ring[1].power
        edmaf[ring[0].id-1].members.push(ring[1].id)
        ring = []
      }else{
        edmaf[ring[1].id-1].power = ring[1].power+ring[0].power
        edmaf[ring[1].id-1].members.push(ring[0].id)
        ring = []
      }
    }
    queue.shift()
  }
  let strongest = []
  strongest.push(Object.assign({},edmaf[0]))
  for(let i = 0;i < edmaf.length;i++){
    if(strongest[0].power < edmaf[i].power){
      strongest.push(Object.assign({},edmaf[i]))
      strongest.shift()
    }
  }
  return edmaf[strongest[0].id-1]
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