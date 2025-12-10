// For Each loops

const coding = ["js", "java", "Py", "C++"]
// coding.forEach( function (value){
//     console.log(value);
// } )


// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item){
// console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr )

// } )

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"

    },
    {
        languageName : "Html",
        languageFileName : "html"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
} )