//We can create in 2 ways singleton object and objcet literal
//singleton
//object.create

//Object literal 

const mySym = Symbol('key1');

const JsUser = {
    name: "Sujata",
    [mySym]: 'key1',
    age: 23,
    email: 'my@gmail.com',
    hobbies: ['reading', 'traveling', 'swimming'],
    address: 'India',
    isLoggedIn: false,
    lastLoginDays : ['Monday', 'Friday'

    ]
}

// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);

JsUser.email = 'sujata@chatgpt.com' //updating email 
// console.log(typeof JsUser.mySym)

// Object.freeze(JsUser); //freeze the object, no updating allowed after this.
JsUser.email = 'sujata@microsoft.com'
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log('Hello Js User');
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());