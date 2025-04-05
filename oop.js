function print(value) {
    console.log(value)
}


// Object literal
const person = {
    name: 'John',
    age: 34
}

// print(person)

// Python: type(x)
// print(typeof person)

// Python class
// class Person:
//      def __init__ (self, name, age):
//          self.name = name
//          self.age = age
//
// p1 = Person('John', 35)

// Constructor
// function Person(name, age) {
//     // Copy param values into object attributes
//     this.name = name
//     this.age = age
//     // this.greet = () => {
//     //     print(`${this.name} is ${this.age} years old.`)
//     // }
// }

// Person.prototype.greet = function () {
//     print(`${this.name} is ${this.age} years old.`)
// }

class Person {
    constructor(name, age) {
    // Copy param values into object attributes
    this.name = name
    this.age = age
    } 

    greet() {
        print(`${this.name} is ${this.age} years old.`)
    }
}

const p1 = new Person("Matt", 52)
const p2 = new Person("Kate", 59)
// print(p1)
// print(p2)
// p2.age = 61
// print(p2)
// p1.greet()
// p2.greet()


class Rectangle {
    constructor(width, height) {
        this._width = width
        this.height = height
    }

    get width() {
        return _width
    }

    set width(value) {
        // Check auth
        // Validate value
        this._width = value
    }

    get area() { // get prevents area method from being changed
        // Check auth
        // if (auth)
        return this._width * this.height
        // else (raise an exception)
    }
}

const r1 = new Rectangle(10, 20)
r1.width = 5
print(r1.area)


// Inheritance
// Python:
// class Square(Rectange):

class Square extends Rectangle {
    constructor(size) {
        super(size, size) // Calls constructor from parent class
    }
 }

const s1 = new Square(10)
print(s1)
print(s1.area)