function print(value) {
    console.log(value)
}

// Python
// def add(x, y)
//      return x + y

function add(x, y){
    return x + y
}

print(add(10,34))

// lambda (x, y): x + y

const sum = (x, y) => x + y
const square = (x) => x ** 2 

print(sum(3, 4))
print(square(5))

numbers = [1, 2, 3, 4]
const result = numbers.map(x => x ** 3)
print(result)