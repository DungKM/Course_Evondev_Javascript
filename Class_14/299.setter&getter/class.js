// ES6
// constructor/prototype

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getName = function () {
//   console.log(this.name);
// };
// const evondev = new Person("Evondev");
// evondev.getName();

// Class

class Person2 {
  constructor(name) {
    this.name = name;
  }
  // getName() {
  //   return this.name;
  // }
  get name() {
    return this._name;
  }
  // setName(Newname) {
  //   this.name = Newname;
  // }
  set name(NewName) {
    return (this._name = NewName);
  }
}
const dung = new Person2("dung");
// console.log(dung.getName());
// dung.setName("Hoang Anh Dung");
// console.log(dung.getName());
console.log(dung.name);
dung.name = "Hoang Anh Dung";
console.log(dung.name);
