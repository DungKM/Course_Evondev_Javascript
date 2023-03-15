// regular expression : biểu thức chính quy

// 1. 2 cách khai báo với regex

const re1 = /hello/;
const re2 = new Request("hello");
// hello world
// regex.text(value) -> true or false

console.log(re1.test("hello world"));

