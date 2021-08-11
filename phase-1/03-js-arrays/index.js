// create an array i want to have 3 elements 'pikachu', bulbosaur jigglypuff

// const pokemonArr = ['pikachu', 'bulbosaur', 'jigglypuff']

// // check the size of the arr
 
// console.log(pokemonArr.length)

// // grab the 3rd element 

// console.log(pokemonArr[2])

// pokemonArr[2] = 'Jigglypuff'
// pokemonArr[2] = 'Ivysaur'
// console.log(pokemonArr)

const pokemons = [
    "Bulbasaur",
    "Ivysaur",

  ];

// pokemons = "test"
// console.log(pokemons)
// const lastElement = pokemons[pokemons.length - 1]
// console.log(lastElement)


// methods used to add elements to an array 
// push => destructive
// spread operator => non destructive
// unshift => destructive

// let arr = [...pokemonArr, "Arbok"]
// let arr = ["Arbok", ...pokemonArr]
// console.log(arr)
// console.log(pokemonArr)

// methods to remove elements from an array

// pop => destructive 
// shift => destructive
// slice => non destructive 
// splice => removes, replace 

// slice will either return a new copy of an array, it can return a new copy of a portion of the array 

// let newPokemons = pokemons.slice(pokemons.length - 1)
// console.log(newPokemons)

// Pass by value vs pass by reference 

// primitive vs non primitive 


// pass by value
let x = 2

function square(x){
    return x = x * x
}

// let result = square(x)

// console.log(x)
// console.log(result)

// pass by reference 

const copyOfPokemons = pokemons
copyOfPokemons.pop()
// console.log(copyOfPokemons)
// console.log(pokemons)

// console.log(copyOfPokemons === pokemons)

// access our arrays .find()

// pokemons is the array

let result = pokemons.find(function(pokemon){
    pokemon.startsWith('B')
})

// console.log(result)

let finding = pokemons.filter(pokemon => pokemon.length < 7)

// console.log(finding)

let results = pokemons.filter((pokemon) => pokemon.startsWith('B'))

// console.log(results)

// loop through arrays 

// for loop 

// for (let i = 0; i < pokemons.length; i++){
//     alert(pokemons[i])
// }

// for..of 

// for (const pokemon of pokemons){
//     alert(pokemon)
// }

// forEach()

// pokemons.forEach(pokemon => alert(pokemon))


// manipulate arrays

//.map

function usingMap(arr){
    return arr.map(element => lowerCasePokemon(element))
}

function lowerCasePokemon(p){
    return p.toLowerCase()
}

const newArr = usingMap(pokemons)
// console.log(usingMap(pokemons))
console.log(pokemons)

console.log(newArr === pokemons)