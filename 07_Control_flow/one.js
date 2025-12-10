//if

// const isUserLoggedIn = true
// const temperature = 41
// if (temperature === 40){
//     console.log("less than 50");

// } else {
//  console.log("temperatture is greater than 50");
//  }
//  console.log("Execute");

// <, >, <=, >=, ==, ===, != 

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power is ${power}`);
// }
// console.log(`User power is ${power}`);    // error power is not defined because of block scope 

//const balance = 1000
//if(balance > 500) console.log("test"); //implicit scope

// if (balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}