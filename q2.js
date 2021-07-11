const allInOrNot = (input) => {
  /* Your code here */
  let chk = true
  for (let i = 0;i < input.length-1 ; i++){
    if (typeof input[i] == typeof input[i+1]) {
      chk = true
    } else {
      chk = false
      return false
    }
  }
  return chk
}

//Test cases
const input1 = [1, 2, 3]
const input2 = ["hello", true, 0]
const input3 = ["Only", "string", "array"]
const input4 = []

console.log( allInOrNot( input1))
console.log( allInOrNot( input2))
console.log( allInOrNot( input3))
console.log( allInOrNot( input4))

module.exports = allInOrNot