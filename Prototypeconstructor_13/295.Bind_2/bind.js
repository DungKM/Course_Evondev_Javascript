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

function log(level, time, message) {
  console.log(`${level} ${time} ${message}`);
}

// function logErrToday(message) {
//   log("Error", "Today", message);
// }

// logErrToday("Server OKE")

const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server OKE");
