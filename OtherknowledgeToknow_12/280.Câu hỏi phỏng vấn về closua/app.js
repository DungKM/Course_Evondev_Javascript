// arguments

function number(a, b, c) {
  console.log(arguments);
  const args = Array.from(arguments);
  const args2 = [...arguments];
  console.log(args);
  console.log(args2);
}
number(1, 2, 3);

// closua

for (var i = 1; i < 5; i++) {
  setTimeout(() => {console.log(i)}, 1000);
}

// var ->hoisting
// scope của var sau mỗi vòng lặp thì nó ko thay đổi
// let thì ngược lại 