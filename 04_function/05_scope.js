let a = 300
if (true){
let a = 10
const b = 20 
// console.log("INNER", a)
//  var c = 30  // avoid error in scope

}


// console.log(a);
// console.log(b);
// console.log(c);

//********** Nested Function Scope **********//

function one(){
    const username = "Sujata"
     function two(){
        const website = "www.google.com"
        console.log(username);
     }
    //  console.log(website);
    //  two()
}

// one()

if(true){
    const username = "Aaradhya"
    if(username === "Aaradhya"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website)
}
//console.log(username)