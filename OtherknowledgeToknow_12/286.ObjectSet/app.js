const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  [
    [2, 3],
    [2, 3, 5],
    [1, 2],
  ],
];

// Array(13) [ 1, 2, 3, 3, 4, 5, 2, 3, 2, 3, … ]

// console.log(complexArr.flat(Infinity));

// a [1,2,3] b [4,5,6] -> [1,2,3,4,5,6] ->a.concat(b)
//[1,2,3].slice()

// function flatArray(arr, deep) {
//   const result =
//     deep > 0
//       ? arr.reduce(
//           (a, val) =>
//             a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val),
//           []
//         )
//       : arr.slice();
//   return result;
// }

// console.log(flatArray(complexArr, Infinity));

// 9.Set
const mySet = new Set();
mySet.add(1);
mySet.add(1); // Set chưa giá trị duy nhất
mySet.add("evondev");
mySet.delete("evondev");
console.log(mySet);
console.log(mySet.has(1)); // true
console.log(mySet.size); // 1
mySet.clear(); // all delete
//
const arr = [1, 2, 3, 4, 1, 1, 1, 4, 4, 4, 5, 5, 5, 7, 9];
//-> 1,2,3,4,5,7,9
// array to Set
const mySet2 = new Set(arr);
console.log(mySet2);
// for of
for (let item of mySet2) {
  console.log(`item ${item}`);
}
 
mySet2.forEach(element => {
  console.log(element);
});

// Set to array

const newArr = Array.from(mySet2);
console.log(newArr);
// const newArr = [...mySet2]

// cách 2
let result = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (!result.includes(element)) {
    result.push(element);
  }
}
console.log(result);
