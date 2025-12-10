const userEmail = []
if (userEmail){
    console.log("Got user email");
} else {
    console.log("Don,t have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values
//All values other than falsy values are truthy values
// "0" , 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyobj = {}
// if (Object.keys(emptyobj) .length === 0) {
//     console.log("Object is empty");

// }

// Logical Operators are && (AND), || (OR), ! (NOT)

// nullish Coalescing Operator (??) : null or undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 16

 val1 = null ?? 10 ?? 20;
console.log(val1);

//Ternary Operator

//condition ? true : false
const iceTeaPrize = 100;
iceTeaPrize >= 80 ? console.log("less than 80") : console.log("more than 80");
