// // 1.sự kiện scroll
// window.addEventListener(
//   "scroll",
//   debounceFn(function (e) {
//     console.log("scroll");
//   }, 100)
// );

// // 2.debounce: là kỹ thuật buộc 1 hàm phải đợi 1 khoảng thời gian nhất định trước khi thực hiện. Trong khoảng thời gian đợi, mọi tác động sẽ đều
// bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra  trong thời gian chúng ta định trước

function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// 3.window.pageYOffset và window.pageXOffset
// window.pageXOffset : là khoảng cách scrol của window theo chiều ngang
// window.pageYOffset : là khoảng cách scrol của window theo chiều dọc

//4 .scrollTop, scrollLeft, scrollTo, scrollHeight, scrollWidth
// scrollHeight : trả về chiều cao của element bao gồm padding nhưng không có border
// scrollWidth : trả về chiều rộng của element bao gồm padding nhưng không có border

const boxed =document.querySelector(".boxed");
boxed.addEventListener("scroll", function(e){
  console.log(e.target.pageYOffset)
})
console.log(boxed.scrollLeft)

// scroll(x, y)

// 5.scrollWidth & offsetWidth

//boxed.offsetWidth -> 200 độ rộng thực tế
//boxed.scrollWidth  -> 200

// scrollWidth chả về độ rộng phần tử lớn hơn nếu có 

// 6.scrollIntoView() : scroll tới phạm vi mà có thể thấy 



