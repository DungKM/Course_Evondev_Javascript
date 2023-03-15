// 1. đảo ngược một chuỗi . ví dụ : " My name is evondev " -> "evondev is name My"
// function reverseString(str){
//   if(!str) return null;
//   // split(" ")
// //   const newStr = str.split(" ");
// //   console.log(newStr);
// //   const reverseStr = str.split(" ").reverse().join(" ");
//   // chaining methods
// //   console.log(reverseStr)
// //  ['My', 'name', 'is', 'evondev']
 
// return str.split(" ").reverse().join(" ");
// }
// console.log(reverseString("My name is evondev"))

// 2. Đảo ngược chuối bao gồm các kí tự . Ví dụ : " i love" ->"evol i"

// function reverseWord (str){
//     if(!str) return null;

//     const arrStr = str.split(" ").map(item => item.split("").reverse().join("")).reverse().join(" "); // ["i", "love"]
// // ["l","o","v","e"] -> ["e","v","o","l"] -> evol
// // const resutl = arrStr.reverse().join(" ");
// console.log(arrStr);

// }
// reverseWord("i love")

// 3.in hoa chữ cái đầu trong chữ ví dụ  : "my name is evondev" ->"My Name Is Evondev"

function upper(Name =""){
    if(Name.length ===0 ) return null
    let first =Name.toLowerCase().charAt(0).toUpperCase()
    let last =Name.toLowerCase().slice(1)
    return `${first}${last}`
}
function capitalizeStr(str){
    if(!str) return null;
    const result  = str.split(" ").map(item => upper(item)).join(" ")
    console.log(result);

}
capitalizeStr("My name is evondev")


//