// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const monthName = "jan"

switch (monthName) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;
    case "june":
        console.log("june");
        break;

    default:
        console.log("default case match");
        break;
}
//in switch case if the value is in 'string' then we have to give case value in 'string' only otherwise it will go to default case.
//  like for month = '4' it will go to in string case like "april" instead of 4.
const month = 4;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        // break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;

    default:
        console.log("default case match");
        break;
}