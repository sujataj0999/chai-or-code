//singleton
//constructor function
//const TodoUser = new Object(); //This is a singleton object
const TodoUser = {} //This is a Non-singleton object

TodoUser.name = 'Sujata';
TodoUser.email = 'myemail@gmail.com';
TodoUser.isLoggedIn = false;
TodoUser.age = 28;
TodoUser.location = 'India';
 
// console.log(TodoUser);
const regularUser = {
    email: 'my@gmail.com',
    fulname: {
        userfullname: {
            firstname: 'Sujata',
            lastname: 'Jena',
        }
    }
}
 //console.log(regularUser.fulname.userfullname.lastname);

 //Merge 2 objects

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj3 = {5: "a", 6: "b"}
 const obj4 = {7: "a", 8: "b"}

 const obj5 = {... obj1,... obj2,...obj3,...obj4 } //spread operator method to merge objects
 const obj6 = Object.assign({}, obj1, obj2, obj3, obj4) //Object.assign method to merge objects

//  console.log(obj5);
//  console.log(obj6);

 const users = [
    { id: 1,
      email: "s@gmail.com",
    },
    { id: 2,
      email: "p@gmail.com",
    },
    { id: 3,
      email: "k@gmail.com",
    },
    { id: 4,
      email: "g@gmail.com",
    },
    { id: 5,
      email: "b@gmail.com",
    },
 ]
    //console.log(users[0].email);
    // console.log(TodoUser);
    // console.log(Object.keys(TodoUser));
    // console.log(Object.values(TodoUser));
    // console.log(Object.entries(TodoUser));
    // console.log(TodoUser.hasOwnProperty('age'));

    const course = {
        coursename: 'Js in hindi',
        price: 2999,
        courseInstructor: 'S Jena',
    }

   const{courseInstructor} = course; //object destructuring
    console.log(courseInstructor);

    // {
    //     "name": 'Sujata',
    //     "coursename": 'Js in hindi',
    //     "price": "free",
    // }

    [
        {},
        {},

    ]
