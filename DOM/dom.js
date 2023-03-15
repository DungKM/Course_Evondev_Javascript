// 1.DOM la gi
// Document Object Model
// DOM attribu

// 2. Selecting nodes
// 2.1 document.querySelector("selector")
// selector : .header ,p,body, #heading
// tr
const singleNole = document.querySelector("h1");
const singleNole2 = document.querySelector(".container");
const singleNole3 = document.querySelector("#spinner"); // khong co se tra ve null
const singleNole4 = document.querySelector(".container header");

// console.log(singleNole4);

// 2.2 document.querySelectorAll("selector") => trả về một NodeList chưa danh sách các node, nếu không có thì trả về empty
// nó có thể loop và sử dụng foreach
// nó giống array là có thể loop nhưng ko sử dụng được các phương thức như push ,pop, shift,map
const multiNodes = document.querySelectorAll(".item");
// for(let i = 0; i< multiNodes.length;i++){
//     console.log(multiNodes[i])
// }
// console.log(multiNodes);
// 2.3 document.getElementsByClassName("className") trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty 
const classNodes = document.getElementsByClassName("item");
// console.log(classNodes)
//2.4 document.getElementsByTagName("tagName");
//trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty 
const tagNodes = document.getElementsByTagName("header");
// console.log(tagNodes);
// 2.5 document.getElementById("id") -> trả về 1 node
// const idNode = document.getElementById("spinner");
const idNode2 = document.querySelector("#spinner");
// hay dùng nhất document.querySelector( tag, class, id, document) , document.querySelectorAll(tag, class)
console.log(idNode2);
