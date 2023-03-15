// 1.Bind

const student = {
  firstName: "Hoang",
  lastName: "Anh Dung",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
// $
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const button = $("button");
button.addEventListener("click", student.fullName.bind(student));

