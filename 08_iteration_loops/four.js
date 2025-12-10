const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is ${myObject [key]}`);
  
    
}

//for in loop for an 'Array'

const programming = [ "Js", "java", "Rb", "Py", "cpp"] 

for (const key in programming) {
    //console.log(programming [key]);
       
}

// for in loops in 'Map'

const map = new Map()
map.set('In', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

for (const key in map) {
  
    console.log(key);
    
}

// map is not itterable using for in loop