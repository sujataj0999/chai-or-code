const myArray = ["banana", "apple", "grapes", "orange" ,"kiwi", "watermelon"];
//console.log(myArray[0]);
const myArray2 = new Array(10, 12, 14, 16,)

//Array Methods
// myArray.push("mango");
// myArray.pop()  //removes last element 
// myArray.shift() //removes first element
// myArray.unshift("jamun"); //adds element at the beginning
// console.log(myArray.includes("grapes"));
// console.log(myArray.indexOf("grapes"));
// console.log(myArray);

//slice and splice
console.log("A", myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B", myArray);
const myn2 = myArray.splice(1,3);
console.log("C", myArray);
console.log(myn2);
