# Data Types and Variables

### SWBAT:

- Explain why functions are important in JS
- Understand the difference between declaring and invoking a function
- Understand what a first-class function is and why that matters in JS
- Create and use callback functions
- Understand function scope vs global scope

```txt
05 min - Warm Up
05 min - Review Warm up
30 min - Segment 1: functions & scope

05 min - The Console
05 min - Debugging
05 min - Warm Up
20 min - Segment 1: Review Data Types
10 min - Break
20 min - Segment 2: Variables and Conditionals
10 min - Check for Understanding
10 min - Go over global and block scope
10 min - Questions
05 min - Exit Ticket
---
120 min
```

### Warm up - (5 min)

Warm up question:

What are functions and why do we use them?

```
Allow the creation of reusable code
Separation of responsibilities
Building blocks of JS programming
Allows us to structure larger programs
```

### Segment 1: functions & scope

#### Declaring a function

Using function keyword/function declaration - point out that this creates a global scope

```
console.log(renderPokemon())
function renderPokemon(){
    console.log('Hi, I\'m Pikachu!')
}
```

Have students help you convert the previous function into a function expression

```
console.log(renderPokemon())
const renderPokemon = function(){
console.log('Hi, I\'m Pikachu!')
}
```

Discuss anonymous functions and the restrictions of scope in these two examples

Go over arrow functions

```
const renderPokemon = () => {
console.log('Hi, I\'m Pikachu!')
}
```

#### Anatomy of a function (parameters, body)

Go over function anatomy, point out parameters
and the body

Go over difference between a paramter and argument

#### Reference vs invokation
What is the difference between defining and invoking a function?

```
printPokemonName
printPokemonName()
```


Function scope vs global scope
What is a closure and why is it useful
