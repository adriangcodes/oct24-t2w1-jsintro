console.log('Control Flow')

// If

const noOfStudents = 20

// Python
// if no_of_students == 20:
//      pass

// == is loose equality
// === is strict equality - best practice
if (noOfStudents == 20) {
    console.log('There are 20 students') // Will print
}
if (noOfStudents == "20") {
    console.log('There are 20 students') // Will print
}
if (noOfStudents === "20") {
    console.log('There are 20 students') // Will not print
}

if (noOfStudents === "20") {
    console.log('There are 20 students') // Will not print
} else {
    console.log('There are NOT 20 students')
}

// If.. else if
const hour = 20
// if (hour < 12) {
//     console.log('Good morning!')
// } else if (hour >= 12 && hour < 17) { // Python: elif <condition>
//     console.log('Good afternoon!')
// } else if (hour >= 17 && hour < 20) {
//     console.log('Good evening!')
// } else {
//     console.log('Good night!')
// }

if (hour < 12) {
    console.log('Good morning!')
} else if (hour < 17) { // Python: elif <condition>
    console.log('Good afternoon!')
} else if (hour < 20) {
    console.log('Good evening!')
} else {
    console.log('Good night!')
}

// Match case statement
const day = 6

switch(day) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
    case 7:
        console.log('It\'s the weekend!')
        break
    default:
        console.log('That\'s not a weekday!')
}