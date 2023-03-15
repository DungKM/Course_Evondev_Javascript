// arguments

function number(a, b, c) {
  console.log(arguments);
  const args = Array.from(arguments);
  const args2 = [...arguments];
  console.log(args);
  console.log(args2);
}
number(1, 2, 3);
