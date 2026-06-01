// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
// 2. Convert the number `100` into a string.
// 3. Convert `"true"` into a boolean.
// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`
// 1. Create a variable with value `"123abc"` and convert it into a number.
// 2. Use `parseInt()` on `"500px"`.

let a ="50"
console.log(a)

let numa = Number(a)
console.log(numa)

let b =`100`
let strb = Number(b)

console.log(b)
console.log(strb)

let c = `"true"`
let value = Boolean(c)

let ctype = typeof(value)
console.log(ctype)


var numstring = "123abc"

let stringnum = parseInt(numstring)

console.log(numstring)
console.log(stringnum)


var pixunit = "500px"
let newpixunit = parseInt(pixunit)
console.log(newpixunit)