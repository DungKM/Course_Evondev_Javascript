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

// 3. ranges  []
// [a-z]: các kí tự a đến z là thường
// [A-Z]: các kí tự từ A-Z in hoa
// [0-9]: các số từ 0-9
// [a-z0-9A-Z] : các số từ 0-9 hoặc từ a - z hoặc từ A - Z
/[a-z]/.test("aaanjn"); // true
/[a-z]/.test("A"); // false
/[A-Z]/.test("Z"); // true
/[A-Z]/.test("abc"); // false
/[0-9]/.test("abc1000xyz"); // true
/[0-9]/.test("abc"); // false
/[a-z0-9A-Z]/.text("A123sdfnjl"); // true
/[^a-z]/.test("a") // phủ định regex biểu thức chính quy : false




