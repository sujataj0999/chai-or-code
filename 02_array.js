// const marvel_heros = ["thor", "Ironman", "spiderman"];
// const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// new_heros = marvel_heros.concat(dc_heros)
// console.log(new_heros);

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// const another_array = ["banana","orange", "apple", ['kiwi', 'grapes',], "watermelon", ['potato', 'onion', ['sweet', 'laddu']]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray ("sujata")) 
// console.log(Array.from("sujata")) 
// console.log(Array.from({name: "sujata"}))  //intresting, converts to an array with a single element

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of (score1, score2, score3));

const super_heros = ["tonystark", "Ironman", "spiderman"];

console.log(super_heros.length); // length method 3
super_heros.reverse(); // reverse method
console.log("A",super_heros); // 

const str = super_heros.join(" , "); // join method
console.log(str);
