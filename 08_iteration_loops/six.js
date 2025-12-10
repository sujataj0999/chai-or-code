// const coding = ["js", "java", "Py", "C++"]

//  const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )
//  console.log(values)


const myNum = [1,2,3,4,5,6,7,8,9,10]

//  const newNum = myNum.filter((num) => num>6 )
//  console.log(newNum)

 // in filter method we should declare a callback function and must added a condition like above (num>6) then the 

 // if we use scope{} in arrow function then we have to write 'retur' value also.

//  const newNum = myNum.filter((num) => {
//     return num>6 
// } )


const newNum = []

myNum.forEach( (num) => {
    if(num>4){
        newNum.push(num)
    }

})
 //console.log(newNum)


 const books = [
    {
        title: 'bookone',
        genre: 'Fiction',
        publish: '1956',
        edition: '2005'
    },
    {
        title: 'booktwo',
        genre: 'Non-Fiction',
        publish: '1967',
        edition: '2008'
    },
    {
        title: 'bookthree',
        genre: 'History',
        publish: '1956',
        edition: '2005'
    },


    {
        title: 'bookfour',
        genre: 'Science',
        publish: '2003',
        edition: '2011'
    },
    {
        title: 'bookfive',
        genre: 'Fiction',
        publish: '2004',
        edition: '2023'
    },

    {
        title: 'bookone',
        genre: 'History',
        publish: '2002',
        edition: '2018'
    },
 ]
 
 let userBooks = books.filter( (bk) => bk.genre === 'Fiction' )
 userBooks = books.filter((bk)=> { return bk.publish >= 1995 && bk.genre === 'History'} )

 console.log(userBooks);
 

 

 
 