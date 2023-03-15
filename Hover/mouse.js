
    const button = document.querySelector(".button");

// mousemove, mouseover, mouseenter, mouseleave
// mousemove

// button.addEventListener("mousemove", function(){
//     console.log("mousemove");
// });
//mouseover : nó sẽ chạy khi rê chuột vào phần tử và con của phần tử đó

// button.addEventListener("mouseover", function(){
//     console.log("mouseover");
// });

// mouseent : nó sẽ chạy khi rẽ chuột vào phần tử và con của phần tử đó
// button.addEventListener("mouseenter", function(){
//     console.log("mouseenter");
// });

// // mouseleave : nó sẽ chạy khi rẽ chuột vào phần tử rồi rê ra ngoài

// button.addEventListener("mouseleave", function(){
//     console.log("mouseleave");
// });

// pageX, pageY, clientX, clienY
document.addEventListener("mousemove", function(event){
console.log(`pageX : ${event.pageX}`);
console.log(`clienX : ${event.clientX}`)
});