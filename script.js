a = 5 // global
console.log(a)

var b = 6 // function scope
console.log(b)

let c = 7 // block scope
console.log(c)

const d = 8 // constant
// d = 10 // error - attempting to override constant - if an exception occurs without handling, code stops and will not print following line
console.log(d)

// // Input and output
// let value = prompt('What is your name?')

// // Template string (like a Python f-string)
// // print (f"Your name is {name})
// console.log(`Your name is ${value}`) // Need to use backtick ` (on the ~ key)

// Data types

// Boolean - note no capitalisation
true
false

// Falsy values - anything not included below is a Truthy value
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(NaN)) // Not a Number
console.log(Boolean(null)) // none in Python
console.log(Boolean(undefined))

// Typecast
// int(2.5)
console.log(Boolean(false))

// Truthy values
console.log(Boolean(12))
console.log(Boolean('Hi'))
console.log(Boolean([]))

// Number
// type(2.5) # returns float 
console.log(typeof('Hi'))
console.log(typeof(12))
console.log(typeof(2.5))