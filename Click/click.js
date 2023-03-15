// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handleClick () {
    console.log("click button");
}
// button.addEventListener("click", handleClick()) => Lỗi sai khi dùng function vào eventListener
button.addEventListener("click", handleClick ,{
    capture: true
});
// event: e
span.addEventListener("click" , function(e){
    // e.stopPropagation();
    e.stopImmediatePropagation();
    console.log("click span");
},{
    capture: true
});
span.addEventListener("click", function() {
    console.log("click span 2");
})
// document.body.addEventListener("click", function(){
//     console.log("click body")
// },{
//     capture: true
// })
// bubbling : nổi bọt
// sự kiện click từ trong ra ngoài

// target vs currenTarget

button.addEventListener("click", function(event){
    // event.target: nó sẽ gọi chính xác element mà mình click tới
    console.log(event.target);
    // event.currentTarget : nó sẽ chọn phần tử mà mình click
    console.log(event.currentTarget);
});
// event.preventDefault();
const link = document.querySelector(".link");
link.addEventListener("click", function(event){
    event.preventDefault();
    // lấy custom = astribute data-abc
    // event.dataset.name
    const name = event.target.dataset.nameAbc;
    console.log(name)
    event.target
    // console.log("click me");
    // selector.style
    // event.target.style.property = value
    // console.log(event.target);
    // console.log(event.target.style)
    // event.target.style.color = "red";
    // background-color -> backgroundcolor
    // position -> p

});

