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
  "Raticate",
];

function usingFilter(arr) {
  return arr.filter((element) => element.startsWith("B"));
}

const filteredItems = usingFilter(pokemons)
console.log(filteredItems)
console.log(pokemons)