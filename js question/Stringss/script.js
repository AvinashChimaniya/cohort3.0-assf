//                                Strings 

// 1. Create a string and print its length.
// 2. Convert a string into uppercase.
// 3. Convert a string into lowercase.
// 4. Check if a string includes the word `"JavaScript"`.
// 5. Extract the word `"World"` from `"Hello World"`.
// 6. Replace `"apple"` with `"mango"` in a sentence.
// 7. Split `"HTML,CSS,JS"` into an array.
// 8. Remove extra spaces from a string.
// 9. Repeat the word `"Hi"` 5 times.
// 10. Print the first character of a string.
// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`



let string1 = "babasahabambedkar"
console.log(string1.length)

let string2 = string1.toLowerCase()
console.log(string2)

let string3 = string1.toUpperCase()
console.log(string3)

let checkWord = string1.includes("javascript")
console.log(checkWord)


let string4 = "Hello World"

let string5 = string4.substring(6,12)
console.log(string5)

let string6 = string4.replace("World","Mango!")
console.log(string6)

let string7 = "HTML,CSS,JS"
let string8 = string7.split(",")
console.log(string8)