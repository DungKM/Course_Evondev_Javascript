// regular expression : biểu thức chính quy

// 1. 2 cách khai báo với regex

// const re1 = /hello/;
// const re2 = new Request("hello");
// hello world
// regex.text(value) -> true or false

// console.log(re1.test("hello world"));

// 2. Anchor ^ $ 
// ^ string bắt đầu với từ nào đó
// $ string kết thúc với từ nào đó
//  const re3 = /hi/;
//  /hi/.test("hi"); // true
//  /hi$/.text("welcome to hi");// true
//  /hi$/.text("welcome to hello");// false
//  /^hi/.text("hi welcome to hi"); // true
//  /^hi/.text("welcome to hi"); // false

// 3. ranges  []
// [a-z]: các kí tự a đến z là thường
// [A-Z]: các kí tự từ A-Z in hoa
// [0-9]: các số từ 0-9
// [a-z0-9A-Z] : các số từ 0-9 hoặc từ a - z hoặc từ A - Z
// /[a-z]/.test("aaanjn"); // true
// /[a-z]/.test("A"); // false
// /[A-Z]/.test("Z"); // true
// /[A-Z]/.test("abc"); // false
// /[0-9]/.test("abc1000xyz"); // true
// /[0-9]/.test("abc"); // false
// /[a-z0-9A-Z]/.text("A123sdfnjl"); // true
// /[^a-z]/.test("a"); // phủ định regex biểu thức chính quy : false

// 4.Meta characters

// \d: khớp với số nó sẽ tương đương với [0-9]
/\d/.test("1234"); // true

// \D: ngược lại với \d tương đương với [^0-9];
/\D/.test("1234"); // false
// \w: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9_]
/\w/.test("_"); //true
// \w: ngược lại \w nó sẽ tương đương [^a-zA-Z0-9_]
/\W/.test("_");  //false
// \s: khớp với cái kí tự khoảng trắng : spaces,tab, newline
/\s/.test(" "); // true
// \S: các kí tự không phải khoảng trắng 
/\S/.test(" "); // false
// \n: khớp với newline (xuống hàng)
// \t: khớp với lại tab character
// .: khớp với tất cả mọi thứ ngoại trừ newline(\n);
// [^]: khớp với tất cả mọi thứ bao gồm newline(\n);

// 5.Quantifiers: {n,m} + ? *

// string.match(regex) "abc".match(/\w/) -> []
// {n} : số lượng nhất định
// {n,m} : số lượng trong khoảng từ n tới m
// +:lấy 1 hoặc nhiều kí tự thỏa điều kiện
// const str1 = "Welcome to 20212222fjjjfjj";

// console.log(str1.match(/\d/)[0]);
// console.log(str1.match(/\d{4}/)[0]);
// console.log(str1.match(/\d{4,6}/)[0]);
// console.log(str1.match(/\d+/)[0]);

// const str2 = "color or colour";
// // ?: có thể có hoặc không có kí tự nào đó
// console.log(str2.match(/colou?r/g)); // ["color","colour"]
// // flag 
// // g: global 
// // i: case insensitive
// // m: multipe lines
// // *: không có hoặc là nhiều
// const str3 = "12345";
// console.log(str3.match(/\d*/g));

// 6. groups ()
/(\d{3})?(\w+)/.test("123"); // true
/(\d{3})(\w+)/.test("123"); // false
