// // 1.selector.classList.add("abc")

// const container = document.querySelector(".container");
// container.classList.add("color-red"); // chỉ được add 1 cái 

// // 2. selector.classList.remove("abc")
// container.classList.remove("container");

// // 3. selector.classList.contains("container") -> kiểm tra có chứa hay  ko
// console.log(!container.classList.contains("container")); // true
// console.log(container.classList.contains("color-red")); // true

// // 4.selector.classList.toggle()

// container.classList.toggle("color-red");
// // 5. selector.className -> trả ra chuỗi các class của selector

// const title = document.querySelector(".item-menu")
// console.log(title.className);
// title.className="title"  // thay thế các class bằng 1 class


const menu = document.querySelector(".menu");
menu.classList.toggle("is-show");
