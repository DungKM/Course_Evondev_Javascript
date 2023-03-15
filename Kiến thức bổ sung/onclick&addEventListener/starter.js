const button = document.querySelector(".button");

function handleClick(){
    console.log("clicked");
}
function handleClick2(){
    console.log("clicked2");
}
// envent handler
// onclick : chấp nhận 1 event handle
// button.onclick = handleClick;
// button.onclick = handleClick2;

// addEventListener : chấp nhận nhiều event handler cùng lúc 
// button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick2,{
    // chỉ chạy 1 lần duy nhất
    once : true,
});