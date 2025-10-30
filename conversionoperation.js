// let score = 55
// console.log(typeof score) //number
// console.log(typeof (score));

// let score = "55abc" //Nan
// let score = null //0
// let score = undefined //value will be NaN
// let score = true //1

//let score = "sujata" //NaN

// console.log(typeof score) //string
// console.log(typeof (score));

//let valueInNumber = Number(score) //explicit conversion
// console.log(typeof score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "55" => 55
// "55abc" => NaN
// null => 0
// undefined => NaN
// true => 1 , false => 0
// "sujata" => NaN

//let isLoggedIn = 1
//let isLoggedIn = "" //False
// let isLoggedIn = "sujata" //True
// let booleanIsLoggedIn = Boolean(isLoggedIn) //explicit conversion
// console.log(booleanIsLoggedIn);

// 1 => true , 0 => false
// "" => false , "sujata" => true


let someNumber = 55
let stringNumber = String(someNumber) //explicit conversion
// console.log(typeof stringNumber);
// console.log(stringNumber);


//************************************Operations*******************************************//

let value = 5 
let negValue = -value
// console.log(negValue); //-5
// console.log(2+2); //4
// console.log(2*2); //4
// console.log(2/2); //1
// console.log(2**2); //4  
// console.log(2%2); //0

let str1 = "hello "
let str2 = "sujata"
let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// console.log( (3 + 4) * 5 % 3); //2
//  console.log(true);
//  console.log ((3+4)*5%3);
// console.log(true); //true
// console.log(+true); 1
// console.log(+"");0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter++);
console.log(++gameCounter);