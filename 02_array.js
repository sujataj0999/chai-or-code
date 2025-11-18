const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// new_heros = marvel_heros.concat(dc_heros)
// console.log(new_heros);

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array = ["banana","orange", "apple", ['kiwi', 'grapes',], "watermelon", ['potato', 'onion', ['sweet', 'laddu']]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.from("sujata"))