# Data Types and Variables

### SWBAT: 
- Review JS Data Types
- Review JS Conditionals 
- Demonstrate understanding of scope in JavaScript 
- Explain the effect let and const has on scope and variable declarations and assigning 

```txt
05 min - Introduction
05 min - Warm Up
05 min - The Set up
05 min - The Console
05 min - Debugging
20 min - Segment 1: Review Data Types

20 min - Functions as variables
10 min - Break
10 min - Check for Understanding
10 min - Scope, var, let and const
10 min - The Callstack
05 min - Exit Ticket
---
120 min
```

### Introduction - (5 minutes)

Introduce students to the lecture style. Here we can discuss classroom etiquette. Make students feel comfortable and build a positive culture for learning. Encourage students to be present and participant in their learning experience. Provide students with a repository and go over git flow to provide context on how to utilize repositories. Go over best practices for following along lectures. Allow students the option to code along however discuss the pros and cons of missing information if student becomes stuck on an error while coding along.

### Warm Up - (5 minutes)

- What are the different data types we can work with in JS?

```
8 basic data types in JS:
String 
Number 
Boolean
BigInt - A BigInt number is created by appending n to the end of an integer
Object
Symbols
Null
Undefined
```

### The Set up - (5 minutes)

Take a second to go over our file structure.
Lightly touch on how our JavaScript file is being rendered by our script tag in our index.html. We are going to be playing around in the console so we shouldn’t need a deep dive into the DOM yet.

### The Console - (5 minutes)

Open up your dev tools and give a quick tour, touching on the element and network tabs but mostly focus on the console.

Encourage students to play around in the console by test out some code. Its a good time to do a quick review of some primitive types and operations.

### Debugging - (5 minutes)

Debugging is most of development, our lectures should have a number of built in bugs to help students familiarize themselves with their tools. It's also important to encourage a culture of error. Anytime you as a lecture run into a bug, use it as a teaching opportunity. Encourage being wrong and not knowing the answer, but knowing how to problem solve and get to a solution.

`Errors`, `Console.log` and `debugger` are our new best friends.

Console:
Go over console in dev tools and discuss gotcha's in console's i.e variable redeclarations allowed. Best practice to code in JS file and run files in console.

### Segment 1: Data Types 
Go over examples of the different JS data types

#### Strings

Go over the different ways of writing a string. 

```
"Using double quotation marks"
'Using single quotation marks'
`Using backticks so we can ${interpolate}`
```

#### Numbers
Review some examples of numbers
```
integers 
floats
NaN 
```

#### Booleans
Make sure that students know truthy and falsy values are booleans.

Identify things in JS that will return false

```
0
NaN
undefined
false
null
""
```

Point out that everything else is true

#### Using typeof

``` 
console.log(typeof undefined) => undefined
console.log(typeof true) => boolean
console.log(typeof Symbol("name")) => symbol
```

// What is a primitive data type? 
// a datatype that can only store a single piece of data

// Of the data types we went over, which one is not considered a primitive data type
// Object - non-primitive

// Why is an object not a primitive? 
// Can store collections of data











Var vs. let, const
Could stick with var for a little longer and switch to let, const once we introduce function scope to show change in behavior

