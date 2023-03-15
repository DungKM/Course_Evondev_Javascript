// let student = {
//   name: "evondev",
//   age: 28,
// };
// // tạo nhiều đối tượng
// function Student(name, age) {
//   // this = {}
//   this.name = name;
//   this.age = age;
//   this.getName = function () {
//     return `your name is ${this.name}`;
//   };
// }
// let student2 = new Student("join", 40);
// console.log(student2);
// console.log(student2.getName());
// // khởi tạo object

// Prototype

let str = "abc";
str.toUpperCase();

String.prototype.duplicare = function () {
  return this + this;
};
console.log(str.duplicare());

function Girl() {
  this.cook = function () {
    console.log("your girlfriend can cook");
  };
}
Girl.prototype.sing = function () {
  console.log("your girlfriend can sing");
};
Object.prototype.dancer = function () {
  console.log("your girlfriend can dancer");

};

const girl = new Girl();
girl.cook();
girl.dancer();
