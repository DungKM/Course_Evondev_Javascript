"4.5" // 4.5 parseFloat
"4" // 4 parseInt
// Number(Value)
console.log(Number("4.5"))
console.log(Number("4"))
console.log(Number("NaN"))
// NaN : Not a Number

console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(false)) // 0
console.log(Number(true)) // 1

// String(Value)

console.log(String(4.5)) // "4.5"
console.log(String(null)) // "null"
console.log(String(undefined)) // "undefined"
console.log(String(NaN)) // "NaN"
console.log(String(false)) // "false"
console.log(String(true)) // "true"

// Boolean(value) -> true or false

console.log(`Boolean of zero : ${Boolean(0)}`);
console.log(`Boolean of "": ${Boolean("")}`);
console.log(`Boolean of null : ${Boolean(null)}`);
console.log(`Boolean of underfined: ${Boolean(undefined)}`);
console.log(`Boolean of NaN : ${Boolean(NaN)}`);
console.log(`Boolean of false: ${Boolean(false)}`);
console.log(`Boolean of text dung : ${Boolean("dungx")}`);


// toan tu so sanh > < >= <=

console.log(5>=7) // false
console.log(50>=7) // true

console.log(5>7) // false
console.log(50>7) // true

console.log(6>=6) // true
console.log(6<=6) // true

// toan tu logic co ban : && || !
console.log(5>7 && 8>3) // false
console.log(5>7 || 8>3) // false || true => true
const amlWrong = true
console.log(!amlWrong)
// = loose equality vs === strict equality
console.log("== vs =")
console.log(10 == "10")// true
console.log(true == 1) // Number(true) = 1 -> 1=1 ->true
console.log(null != "") // false
console.log(typeof 10)
console.log(typeof "10")
console.log(10 === "10") // false
console.log(10 !== "10") // true
console.log(true == "true") // false

