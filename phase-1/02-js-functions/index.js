// declare functions
// anonymous functions - doesn't have a name
// arrow functions
// function expression
// function declaration

// write a function called init that will log 'page has loaded, run your program' using the function keyword

// console.log(init())

function init() {
    console.log("page had loaded, run your program");
  }
  
  // createPokemon sets a variable pokemon to our users input using the prompt method 
  
  // const createPokemon = function(){ // outer function
  //     let pokemon = "pikachu"
  //     // console.log(likes)
  //     function renderPokemon(){ // inner function / new scope
  //         let likes = 0
  //         console.log(pokemon)
  //     }
  //     renderPokemon()
  // }
  
  // createPokemon()
  
  // arrow function renderPokemon, no parameters, log 'Rendering Pikachu'
  
  // const renderPokemon = () => {
  //     console.log('Rendering Pikachu')
  // }
  
  const renderPokemon = pokemon => console.log(`Rendering ${pokemon}`)
  
  // parameter is a variable for placeholder 
  // arguments are the data we pass in when we make a call to the function 
  
  // renderPokemon('jigglypuff')
  // renderPokemon('bulbosaur')
  // renderPokemon('pikachu')
  
  // First class functions 
  // treat it like any other object: assign functions to variables, pass as values to other functions 
  // return functions as a value from another function
  // pass functions as arguments to other functions 
  
  
  // callback functions - functions passed into other functions as arguments 
  
  const printPokemon = (name) => {
      console.log(`Today's popular pokemon is: ${name}`)
  }
  const capitalizePokemon = (name) => {
      console.log(name.toUpperCase())
  }
  
  const createPokemon = (callback1, callback2) => {
      let pokemon ='Pikachu'
      // how do i use callback function here
      callback1(pokemon)
      callback2(pokemon)
  }
  
  // createPokemon(capitalizePokemon, printPokemon)
  
  
  // code challenge
  
  function total(num1, num2) {
      return num1 + num2
  }
  
  function multiply(num1, num2) {
      return num1 * num2
  }
  
  function subtraction(num1, num2){
      return num1 - num2
  }
  
  function compute(calculate){
      return calculate(6,3)
  }
  
  const math = compute(total)
  console.log(compute(total))
  console.log(compute(multiply))
  console.log(compute(subtraction))