//1 . selector.getAttribute{"attribute"}
// seclector : 1 cái
// attribute -> thuộc tính : href, id , class, style
// 
const link = document.querySelector(".link");

console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
// li.getAttribute("class");
li.forEach(item =>{
    console.log(item.getAttribute("class"))
})
console.log(li)

// if(link){

// }
// 2. selector.setAttribute("attribute",value) -> set giá trị cho attribute
link.setAttribute("target", "_blank")
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach(item => item.setAttribute("target","_blank"));

// 3. selector.removeAttribute("attribute") -> xóa attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("style");
// 4. hasAttribute("attribute") -> kiểm tra selector có là attribute nào đó hay không , nếu có  ->btrue ngược lại không có trả về false 

console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"))
