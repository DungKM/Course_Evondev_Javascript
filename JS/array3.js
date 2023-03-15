// by value vs by referrences
// by value -> giá trị thực sự được lưu trong vùng bộ nhớ
const numl1 = 1;
const numl2 = 1;
console.log(numl1===numl2); // true
// by referrences -> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1===arr2) // false
// JSON: Javascrip Oject Notation


// {
//     "key":value,
//     "key":value,
//     "key":value,
//     "key":value

// }
// JSON.stringify(value) ->convert giá trị dưới dạng chuỗi JSON string
// toString()
// [1,2,3].toString() ->"1,2,3"
// JSON.stringify([1,2,3]) ->"[1,2,3]"
// [1,2,3]
// JSON.parse("[1,2,3]") -> [1,2,3]
console.log(JSON.stringify([1,2,3]));
console.log(JSON.parse("[1,2,3]"));

const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2)
console.log(arr1Str===arr2Str);

// clone

const studens= ["a","b","c","d","e"]
//1. sử dụng phương thức slice()
const sliceStudent = studens.slice().reverse().join("");

console.log(sliceStudent)
// 2.spread operator [... array]
const spreadStudents = [...studens];
console.log(spreadStudents)

// 
// function reverseWord (str){
//     if(!str) return null;

//     const arrStr = str.split(" ").map(item => item.split("").reverse().join("")).reverse().join(" "); // ["i", "love"]
// // ["l","o","v","e"] -> ["e","v","o","l"] -> evol
// // const resutl = arrStr.reverse().join(" ");
// console.log(arrStr);

// }
// reverseWord("i love")

array1 = [1, 2];
array2 = [3, 4];
array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
// 2. spread operator
// [... array]

const mergeArray2 = [...array1,...array2,...array3 ]
console.log(mergeArray2);

// destructuring array
const toys = ["ball", "sword","arrow","magic","water","fire"];
const a = toys[0] // ball
const b = toys[1] // sword
const c = toys[2] // arrow
console.log(a, b, c)
// const [indexX, indexY, indexZ] = toys;
const [x, y, z] = toys;
console.log(x, y, z)
