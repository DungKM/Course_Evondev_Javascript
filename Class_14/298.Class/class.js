// ES6
// constructor/prototype

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  console.log(this.name);
};
const evondev = new Person("Evondev");
evondev.getName();

// Class

class Person2 {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(Newname) {
    this.name = Newname;
  }
}
const dung = new Person("dung");
console.log(dung.getName());
dung.setName("Hoang Anh Dung");
console.log(dung.getName());
