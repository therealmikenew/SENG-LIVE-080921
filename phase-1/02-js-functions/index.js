const printPokemon = (name) => {
    console.log(`Today's popular pokemon is: ${name}`)
}

const capitalizePokemon = (name) => {
    console.log(`${name.toUpperCase()}`)
}

const createPokemon = (callback) => {
    let pokemon = prompt('Which pokemon are you today?')
    callback(pokemon)
}

createPokemon(capitalizePokemon)
createPokemon(printPokemon)