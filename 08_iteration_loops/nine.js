//Reduce method

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and currval: ${curval}`)
//     return acc + curval
// }, 3)

const myTotal = myNum.reduce( (acc, currval) => acc + currval, 0)

console.log(myTotal);
  