

function sayMyName(){
console.log("S");
console.log("u");
console.log("j");
console.log("a");
console.log("t");
console.log("a");
}

//sayMyName();

// function addTwoNumbers(number1,number2){  // parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){  // parameters
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}




addTwoNumbers(2,4); //arguments 
const result = addTwoNumbers(2, 4);
// console.log("Result:", result)

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Sujata"));


function loginUserMessage(username = 'Sujata'){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }

     if(!username){
        console.log("Please enter a username"); // use '!' exclamatory for checks for falsy values like undefined, null, empty string, 0, etc.
        return;
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage()); //if we don't pass any argument it will be undefined just like other programming languages

function calculateCartPrice(val1, val2, ...num1){
    return  num1
}

console.log(calculateCartPrice(200, 300, 500, 2000)); 

const user = {
    username: "Sujata",
    price: 500,
}

function handleObject(anyobject){

   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username: "Ram",
    price: 200
})

const myNewArray = [200, 400, 100, 700,]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 700,]
));