                    //    VARIABLES 

// 1. Create a variable called `studentName` and store your name in it.
// 2. Create a variable `age` and print it.
// 3. Create two variables and swap their values.
// 4. Create a constant variable for `PI` and print it.
// 5. Declare a variable without assigning a value and print it.
// 6. Create a variable `score` and increase it by 10.
// 7. Create three variables for first name, last name, and full name.

console.log('js-variables')

var studenName = "Avinash"
var age = console.log(23);

var val1 = 12
var val2 = 14 

console.log("value of val1 without swapping is " + val1)
console.log("value of val2 without swapping is " + val2)
var temp = val2
val2=val1
val1=temp

console.log("value of val1 after swapping is " + val1)
console.log("value of val2 after swapping is " + val2)


// without using third variable 

let a=10
let b=20

console.log("value of a before swapping is " + a)
console.log("value of b before swapping is " + b)

a = a+b;
b=a-b;
a=a-b;

console.log("value of a after swapping is " + a)
console.log("value of b after swapping is " + b)


const PI = 3.14
console.log(PI)

let score = 10
score+=10;
console.log(score++)
console.log(score)


let firstname = "Prince"
let middleName = "Avinash"
let lastName = "Chimaniya"

console.log(`${firstname} ${middleName} ${lastName}`)

