function task(message) {
  let number = 100000;
  while (number > 0) {
    number--;
  }
  console.log(message);
}

// console.log("start");
// task("Loading");
// console.log("end");

// Callbacks
console.log("start");
// Start ->
setTimeout(() => {
  task("Loading");
});
console.log("end");



