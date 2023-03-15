// document.title -> thẻ title của trang web

console.log(document.title); // Javascript
document.title = "welcome javascript course";

// document.head 

// console.log(document.head);
//  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
const meta = document.createElement("meta");

meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
// document.head.appendChild(meta);

const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);

//inserBefore
// parentNode.insertBefore(newnde, existingnode)

const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3"));


// replaceChild
// node.replaceChild(newNode, oldnode);
const span = document.createElement("span");
span.textContent="abc";
document.body.replaceChild(span, document.querySelector(".boxed"));

// convert HTML collection, NodeList to Array
const li = document.getElementsByTagName("li");
console.log(li);
// Array.from(HTML collection or NodeList)
// [.. HTMLCOLLECT], [...NodeList]
[...li].forEach(item => item)

// html body head title

// html : document.Element
// body : document.body
// head : document.head
// title : document.title