const user = {
    username: "Sujata",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website`);
        console.log(this)
    } 

    
}
// user.welcomeMessage()
// user.username = "Anup"
// user.welcomeMessage()
// console.log(this);

//'Window' is the global object in browser
//In Node.js, the global object is 'global', but 'this' at the top level refers to an empty object {}

// function chai(){
//     console.log(this);
// }
// chai()  // global object for this function call

// function chai(){
//     let username = "Sujata"
//     console.log(this.username);
// }
// chai() // undefined

//********** Arrow Function and this keyword **********//

// const chai = () => {
//     let username = "Sujata"
//     console.log(this.username);
// }
// chai() // undefined

//pure arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) =>  num1 + num2  // implicit return

// const addThree = (num3, num4) =>  (num3 + num4)  // implicit return
    
const addThree = (num3, num4) =>  ({username:"Sujata"})  // implicit return of object 

// console.log(addTwo(5, 6));

console.log(addThree(10, 12));