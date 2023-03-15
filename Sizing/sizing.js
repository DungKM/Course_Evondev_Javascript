// 1. offsetWidth , offsetHeight, offsetLeft, offsetParent, offsetTop

// const boxed = document.querySelector(".boxed");
 function log(value){
    console.log(value);
 }

const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // độ rộng của phần tử
log(boxed.offsetHeight); // chiều cao của phần tử
log(boxed.offsetLeft); // vị trí của nó so với phần tử bên trái
log(boxed.offsetTop); // vị trí của nó so với phần tử phía trên
log(boxed.offsetParent); // lấy ra phần tử cha

// 2. clientWidth, clientHeight, clientLeft, clientTop

log(boxed.clientWidth); // độ rộng của phần tử trừ đi border
log(boxed.clientHeight); // chiều cao của phần tử trừ đi border
log(boxed.clientLeft); // vị trí của nó so với bên trái  border
log(boxed.clientTop); // vị trí của nó so với bên trên  border



// 3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight

// log(window.innerHeight);
// log(window.outerHeight);
// log(window.innerWidth);
// log(window.outerWidth);

// 4. selector.getBoudingClientRect() - > lấy ra tọa độ kích thwucs của phần tử

// log(boxed.getBoundingClientRect());

// left , x : vị trí của khối so với bên trái
// top : vị trí của khối so với phía trên
// bottom : chiều cao của khối + top
// right : có rộng của khối + left

// width : độ rộng
// height : chiều cao

