//immediately invoked function Expression (IIFE)
(function Car (){
    console.log(`DB Connected`);

})();
//Car()  // normal way to call a function


// IIFE is used to create a new scope and avoid polluting the global scope

((name) => {
    console.log(`DB Connected Two ${name}`);
})('Sujata')