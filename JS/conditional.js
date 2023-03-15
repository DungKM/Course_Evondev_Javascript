// dieu kien
// if (condition)
// your code here
// }

// const isRich = false
// const myMoney = 10000
// if(isRich){ // true
//     console.log("I will buy a new car")
// } else if(myMoney < 100) {
//     console.log("I will save my money")
// } else {
//     console.log("I poor")
// }

// prompt confirm alert
// alert("Good night")
// const yourName =prompt("vui long nhap ten cua ban ", " Tuaans ")
// console.log(yourName)
// const isYourName = confirm("day co phai tien cua ban hay k ?")
// console.log(isYourName)

// const isOld = Number(prompt("How old are you ? "))
// if(isOld > 18){
//     alert("Ban duoc coi phim")
// }else{
//     alert("Ban khong duoc coi phim")
// }

// const isAge = prompt("How old are you ?")
// let Megger;
// if(Number(isAge)>=18){
// Megger =" Ban co the vao"
// }else{
// Megger ="Ban khong the vao"
// }
// // console.log(Megger)
// alert(Megger)

const a = prompt("Moi nhap so a :")
const b = prompt("Moi nhap so b :")
let isNumber;
if(Number(a) > Number(b)){
isNumber = `So lon nhat la a = ${a}`
} else{
isNumber=`So lon nhat la b = ${b}`
}
alert(isNumber)