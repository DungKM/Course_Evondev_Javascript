// Call and Apply

const person = {
  firstName: "evondev",
  lastName: "FE developer",
};

function sayHello(str1, str2) {
  console.log(`${str1} ${str2} ${this.firstName} ${this.lastName}`);
}

// function.call(this, arg1..., arg2...)
sayHello.call(person, "hello", "good evening");
// function.apple(this, [arg1, arg2,...])
sayHello.apply(person, ["hi", "good evening"]);
const arr = [1, 2, 3];
const arr2 = [2, 3, 4];

arr.push.apply(arr, arr2);
console.log(arr);
