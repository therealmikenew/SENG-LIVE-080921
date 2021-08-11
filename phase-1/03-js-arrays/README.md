# Data Types and Variables

### SWBAT:

- Create and manipulate arrays in JavaScript using array indexing
- Use for loops to access and manipulate data in arrays
- Use .map(), .find(), .filter(), and .forEach() to access and manipulate data in arrays

```txt
05 min - Warm Up
05 min - Review Warm up
20 min - Segment 1: Creating and accessing arrays
10 min - Break
20 min - Array Methods
10 min - Pass by value vs Pass by reference
20 min - Segment 2: Looping through arrays
15 min - Knowledge check exercise
05 min - Questions
05 min - Exit Ticket
---
120 min
```

### Segment 1: Creating and accessing arrays

Go over what array's are and their use in programming:

```txt
- Arrays are ordered lists of values
- A collection of related data
- Each value represented in an array is referred to as an element
- Elements in an array can be of any data type and vary all at once
- Can save multiple values in one array
```

#### Create an array

Show students the two ways to create an array:

Array constructor

```
let arr = new Array()
let arr = new Array(3) will create 3 empty places in the array
let arr = new Array(1,2,3) will create [1,2,3]
console.log(arr)
```

This can be problematic because of interpretation reasons so almost all the time, use array literal

Array literal - reader friendly

```
const pokemons = ['pikachu', 'bulbosaur', 'jigglypuff']
```

#### Access and update array elements using index

- Each element has an associated index
- Index numbers begin at 0 and increment per element in array
- We can use this index to retreive values from an array

```
pokemons[2]
```

will return the third element in the array

- We can use an index number to also update the element.

```
pokemons[2] = 'Jigglypuff'
```

Ask students what the best way to access the following arrays last element would be. Drive the fact that it is a long array, we could not know the exact size and index of the element:

```
const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "	Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate"
];
```

```
pokemons[pokemons.length -1]
```

#### .push, .pop, .shift, .unshift

Adding elements to an array:

.push() is used to add elements to the end of an array and returns the length of the array. Destructive

```
pokemons.push("Spearow")
console.log(pokemons[pokemons.length - 1])
```

.unshift() adds one or more elements at the beginning of the given array. Returns length of array. Destructive

```
pokemons.unshift('Arbok')
```

spread operator. Non destructive

```
let newPokemons = [...pokemons, "Pikachu"]
```

Removing elements from an array

.pop() will remove and return the last item of an array

```
let lastElement = pokemons.pop()
console.log(lastElement)
```

.shift() removes and returns the first item of an array

```
let firstElement = pokemons.shift()
```

.slice() can return a portion or copy of the array. Non destructive

#### Pass by value vs Pass by reference

Primitive data types will always be passed by value. Meaning that their value can be used to return a new value, but the original will remain.

```
let x = 2

function square(num){
    return num = num * num
}

let result = square(2)
console.log(x)
console.log(result)
```

Arrays will be passed by reference. Meaning that any changes made to the array values will be destructive to the original

Make a copy of an array by creating a variable
Show that mutations to the variable are still reflected in the original array

```
const copyOfPokemons = pokemons
copyOfPokemons.pop()
console.log(copyOfPokemons)
console.log(pokemons)
console.log(pokemons === copyOfPokemons)
```

Make a copy using Array.from()
Show that it’s a unique array so mutations won't affect original

```
const copyOfPokemons = Array.from(pokemons)
copyOfPokemons.pop()
console.log(copyOfPokemons)
console.log(pokemons)

console.log(pokemons === copyOfPokemons)
```

#### Access array using .find()

We can use find to return an element given a conditon. It will evaluate and find the first element that returns true for condition

```
let finding = pokemons.find((pokemon) => pokemon.startsWith('B'))
let finding = pokemons.find((pokemon) => pokemon.length < 7)
```

### Segment 2: looping through arrays

#### for loop

```
for (let i = 0; i < pokemons.length; i++) {
    alert( pokemons[i] );
}
```

#### for...of

```
for (const pokemon of pokemons) {
    alert(pokemon);
}
```

#### forEach()

```
pokemons.forEach(pokemon => alert(pokemon))
```

point out that forEach will take in a callback function. 

if we have a collection of pokemons and want to log each pokemon, how can we use the forEach method to run logPokemon for each element? 

```
pokemons.forEach((pokemon) => logPokemon(pokemon))

function logPokemon(p){
    console.log(p)
}
```

### Segment 3: manipulating arrays

#### .map()

Will return a new array with modified elements

```
function usingMap(arr){
    return arr.map((element) => lowerCasePokemon(element))
}

function lowerCasePokemon(p){
    return p.toLowerCase()
}

console.log(usingMap(pokemons))
console.log(pokemons)
```

#### .filter()

```
function usingFilter(arr) {
  return arr.filter((element) => element.startsWith("B"));
}

const filteredItems = usingFilter(pokemons)
console.log(filteredItems)
console.log(pokemons)
```