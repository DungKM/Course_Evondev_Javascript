// regular expression : biểu thức chính quy

// 1. 2 cách khai báo với regex

const re1 = /hello/;
const re2 = new Request("hello");
// hello world
// regex.text(value) -> true or false

console.log(re1.test("hello world"));

// 2. Anchor ^ $ 
// ^ string bắt đầu với từ nào đó
// $ string kết thúc với từ nào đó
 const re3 = /hi/;
 /hi/.test("hi"); // true
 /hi$/.text("welcome to hi");// true
 /hi$/.text("welcome to hello");// false
 /^hi/.text("hi welcome to hi"); // true
 /^hi/.text("welcome to hi"); // false




