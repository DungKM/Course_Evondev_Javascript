//1. parentMode.parentElement. removeChild

// parentNode vs parentelement
const span = document.querySelector("span")
// console.log(span.parentElement)
// console.log(span.parentNode)
// selector.parentNode hoac selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);
// span.remove();

// 2. nextElementSibling : tìm tới phần từ kế tiếp vs previousElementSibling : tìm tới phần tử đứng sau nó

// a b c
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);

// 3.childNode : trả về các node bên trong bao gồm textNodes vs children : trả về các node ko bao gồm các TextNode

console.log(span.childNodes); // text strong text
console.log(span.children);

//4. firstChild vs firstelementChild

console.log(span.firstChild) // text
console.log(span.firstElementChild) // strong

// 5. lastChild vs lastEmlementChild
console.log(span.lastChild); // next
console.log(span.lastElementChild) // strong

// 6.nextSibling vs previousSibling

console.log(span.nextSibling);
console.log(span.previousSibling);

