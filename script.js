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

console.log(1/2)
console.log(1/"2") // Type coercion
console.log(1/0)
console.log(1/"hi")

// Explicit cast
x = "2"
console.log(1/Number(x))

// Array (list in Python)
const names = ['John', 'Jane', 'Bob'] // Declares array as constant, not the contents
const foo = ['Matt', 52, 184.5]
console.log(names[1])
// names[4] = 'Mary'
names.push('Mary', 'Jason')
// names.pop() // Removes last element
console.log(names)
const name = names.pop()
console.log(name)
const bigArray = names.concat(foo)
console.log(bigArray)

// Objects - dict in Python
const person1 = {
    // Python - "name": "John"
    name: "John",
    age: 32,
    city: "Sydney"
}
console.log(person1)
console.log(person1['age'])
console.log(person1.age)
person1.country = "Australia"
console.log(person1)
Object.freeze(person1)
person1.city = "Melbourne"
console.log(person1)

const person2 = {
    name: "Sally",
    age: 45,
    address: {  // Sub-object
        city: "Melbourne",
        country: "Australia"
    }
}
console.log(person2)
console.log(person2.address.city)

// const attr = prompt('Which attribute?')
// console.log(person2.address[attr])

// Optional chaining with ?
console.log(person1.address?.country) // ? Makes address truthy - will only continue if defined, returns undefined and avoids returning an error
