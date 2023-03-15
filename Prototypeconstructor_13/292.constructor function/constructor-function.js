let student = {
  name: "evondev",
  age: 28,
};
// tạo nhiều đối tượng 
function Student(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `your name is ${this.name}`;
  };
}
let student2 = new Student("join", 40);
console.log(student2);
console.log(student2.getName());
// khởi tạo object
