window.addEventListener("load", function () {
  const passwordInput = document.querySelector(".btn");
  passwordInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");
    const checkSpecialClass = e.target.parentNode.querySelector(".check-special");
    const checkItem = e.target.parentNode.querySelectorAll(".check-item");

    if (!value) {
      [...checkItem].forEach((item) => {
        item.classList.remove("active");
        item.classList.remove("unactive");
      });
      return;
    }
    if (value.trim().length < 8) {
      checkLengthClass.classList.add("unactive");
      checkLengthClass.classList.remove("active");
    } else {
      checkLengthClass.classList.remove("unactive");
      checkLengthClass.classList.add("active");
    }
    // if (!/[A-Z]/.test(value)) {
    //   checkUpperClass.classList.add("unactive");
    //   checkUpperClass.classList.remove("active");
    // } else {
    //   checkUpperClass.classList.remove("unactive");
    //   checkUpperClass.classList.add("active");
    // }    addClass(checkUpperClass, /[A-Z]/);

    addClass(checkUpperClass, /[A-Z]/, value);
    addClass(checkNumberClass, /[0-9]/, value);
    addClass(checkSpecialClass, /[$%@]/, value);
  });
   function addClass(e, regex, value){
    if(!regex.test(value)){
      e.classList.add("unactive");
      e.classList.remove("active");
      return;
    } else{
      e.classList.remove("unactive");
      e.classList.add("active");
    }
   
   };
});
