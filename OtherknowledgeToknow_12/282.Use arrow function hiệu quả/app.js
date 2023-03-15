// arguments

// function number(a, b, c) {
//     console.log(arguments);
//     const args = Array.from(arguments);
//     const args2 = [...arguments];
//     console.log(args);
//     console.log(args2);
//   }
//   number(1, 2, 3);

//   // closua

//   for (var i = 1; i < 5; i++) {
//     setTimeout(() => {console.log(i)}, 1000);
//   }

// var ->hoisting
// scope của var sau mỗi vòng lặp thì nó ko thay đổi
// let thì ngược lại

// 6. sự khác nhau giữa localStorage và sessionStorage

localStorage.getItem("abc"); // khi đóng tab và tắt trình duyệt vẫn còn dự án
sessionStorage.getItem("abc"); // khi đóng tab và tắt trình duyệt  mất dự án

// 7.Những trường hợp ko nên sử dụng arrow function
// nomal function
// const input = document.querySelector(".input");
// input.addEventListener("keyup", function () {
//   console.log(this.value);
// });
// Arrow function
const input = document.querySelector(".input");
input.addEventListener("keyup", () => {
  console.log(this.value);
});

// 7.2 Object
// nomal function
const student = {
  counter: 0,
  increment() {
    return ++this.counter;
  },
};

console.log(student.increment()); // 1
// nomal function
const teacher = {
  counter: 0,
  increment: () => {
    return ++this.counter;
  },
};
console.log(teacher.increment()); // NaN
