// Create print function to avoid console.log repetition

function print(value) {
    console.log(value)
}
    

// While loop

// Python
// count = 4
// while count > 0:
//      print(count)
//      count -= 1

let count = 4
while (count > 0) {
    print(count--)
    // count -= 1
    // count-- // Post-decrement operator, equivalent to line above
}

// For loop

// Python
// for i in range(10):
//      print(i)

// 3-part For loop
// for (initializer; condition; post-iteration)
// initializer: runs once, before first iteration
// condition: will be tested before each iteration
// post-iteration: will be evaluated after each iteration

for (let i=0; i < 10; i++) {
    print(i)
}


const numbers = [1, 2, 5, 21, 44, 37]

// Python
// for num in numbers:
//      print(num)

for (let num of numbers) {
    print(num)
}

// Python
// for index, num in enumerate(numbers):
//      print(f"{index}: {num}")

function orderedList(item, index) {
    print(`${index+1}: ${item}`)
}

numbers.forEach(orderedList)