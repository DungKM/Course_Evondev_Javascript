// thêm xóa sửa node trong Javascrip

// 1. Tạo ra Element trong Javascrip : document.createElement("tag")

const div = document.createElement("div")

// 2.appendChild

// document.body -> thẻ 
// document.querySelector("body")

const body = document.body;
body.appendChild(div);
div.classList.add("container")
div.className="tilte mail";
div.textContent="Dũng đẹp zai";

div.innerHTML=`<div class="content"> Content Cient</div>`;
div.setAttribute("style" , "color:red")
div.classList.add("card");
const cardImage = document.createElement("img");
cardImage.classList.add("card-image")
cardImage.setAttribute("src", "https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60.jpg");

body.appendChild(cardImage);
body.appendChild(div);

// 3. document.createTextNode
const text = document.createTextNode("Hello my name is Evondev");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

// 4. element.cloneNode

const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone)

// 5. element.hasChildNodes -> kiem tra element có phần tử con hay không nếu có là true ko có là false

console.log(document.querySelector("h3").hasChildNodes()); // false

