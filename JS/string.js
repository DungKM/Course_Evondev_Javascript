// String => chuoi

"Hello World"
'I love you so';
`i am website Developer`
// double qoute,single qoute,backticks

// const name = "Anh Dũng"
// console.log(name)
// console.log(typeof name)

// const strNew = "My name is Anh Dũng and I am website Developer"

// const strNew2 = "My name is "+name+ " and I am website Developer"
// // console.log(strNew2)
// const strNew3 =`My name is ${name} and I am Website Developer`
// // console.log(strNew3)

// console.log(strNew3.length)

const myStr ="     Frontend Developer D     "

console.log(myStr.split(""))
//  ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
console.log(myStr.split(" "))
// ['Frontend', 'Developer']
console.log(myStr.split("/"))
// ['Frontend Developer']
console.log(myStr.toLowerCase())
// frontend developer
console.log(myStr.toUpperCase())
// FRONTEND DEVELOPER
console.log(myStr.startsWith("Frontend"))
// true
console.log(myStr.startsWith("frontend"))
// false
console.log(myStr.endsWith("Developer"))
console.log(myStr.endsWith("frontend"))


console.log(myStr.includes("end"));
// true
console.log(myStr.includes("abs"));
// false
console.log(myStr.indexOf("D"))
// vi tri ki tu
console.log(myStr.lastIndexOf("D"))
// vi tri ki tu phai sang trai
console.log(myStr.replace("Frontend","Backend"))
// Backend Developer D thay the
console.log(myStr.repeat(6))
// Frontend Developer DFrontend Developer DFrontend Developer DFrontend Developer DFrontend Developer DFrontend Developer D
// Lap lai 6 lan
console.log(myStr.slice(0, 8))
// Frontend
console.log(myStr.slice(0))
// Frontend Developer D
console.log(myStr.slice(-5))
// per D
console.log(myStr.trim()) 
// remove space left and right
console.log(myStr.trimStart())
// remove space left
console.log(myStr.trimEnd())
// remove space right

const reStr="Frontend"
console.log(reStr.charAt(1))
// goi ki tu 

const myStr3 ="   Content Sever  "

console.log(`Result of myStra3 : ${myStr3.trim().replace("Sever","Block").toUpperCase().repeat(2)}`)


