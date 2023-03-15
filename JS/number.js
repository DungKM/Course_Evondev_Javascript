// số nguyên : 1 2 3 44 999
// số thập phân : 3.4 3.5 4.3 5.6

console.log(5 + 7)
console.log(typeof 12)
const number1 = "5"
const number2 ="4.8"
console.log(parseInt(number1))
// 5
console.log(parseFloat(number2))
// 4.8
const number3 = -10
// Math.abs tri tuyet doi
console.log(Math.abs(number3))
// 10

// Math.floor(value) => lam tron xuong vi du : 4.3 -> 4
console.log(Math.floor(4.3))
// Math.floor(value) => lam tron len vi du : 4.3 ->5
console.log(Math.ceil(4.3))
// Math.round(Value) => lam tron gan nhat 4.5 -> 5   ,4.3 -> 4
console.log(Math.round(4.5));
console.log(Math.round(4.3));

console.log(parseFloat((1/3).toFixed(2)))
// toFixed(number) vi du : 0.333333 => 0.33
console.log(Math.round(Math.random()*10))
// Math.max tra ve gia tri lon nhat
// Math.min  tra ve gia tri nho nhat
console.log(`Max : ${parseInt(Math.max(1,2,3))}`)
console.log(`Min : ${Math.min(1,2,3)}`)
console.log(Math.pow(3,2)) // Mu 2
console.log(isNaN("This is a string")) // true
console.log(isNaN("12345")) // false
console.log(Number.isNaN("12345")) // false
console.log(Number.isNaN(NaN))  // true

