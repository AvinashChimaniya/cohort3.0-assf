        //    Console & Basics question

// 1. Print `"Hello JavaScript"` in the console.
// 2. Print your name, age, and city using one `console.log()`.
// 3. Print a warning message using `console.warn()`.
// 4. Print an error message using `console.error()`.
// 5. Use `console.table()` to display an array of 5 numbers.


console.log("Hello JavaScript")

let name = "Avinash Chimaniya";
let age = 24;
let city = "Itarsi";

console.log(`${name} + ${age} + ${city}`)
console.warn("are these correct details")

console.error("you have not mentioned you birth date ")

const car1 = {name:"Audi", model:"A4"}
const car2 = {name:"Volvo", model:"XC90"}
const car3 = {name:"Ford", model:"Fusion"}
const tractor1 = {name:"Eicher", model:"557"}
const tractor2 = {name:"Mahindra", model:"605"}
const tractor3 = {name:"Swaraj", model:"855"}

console.table([car1, car2, car3], ["model"]);

console.table([tractor1,tractor2,tractor3],["name"])

console.table([name,age,city])

console.table()