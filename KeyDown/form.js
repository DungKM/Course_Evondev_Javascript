// 1. keydown : khi chúng ta nhấn bàn phím xuống xuống 

const input = document.querySelector(".input");
// input.addEventListener("keydown", function(e){
//     console.log(e.key);
//     // e.key : key nhập vào
//     // console.log(e.keyCode);
//     // console.log(e.which)
// });

// 2. keyup :sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
//  input.addEventListener("keyup", function(e){
//     console.log(e.key);
//     e.preventDefault(); không sử dụng

//  });

 // 3. keypress : sự kiện này xảy ra khi các bạn nhấn phím
 // keypress sẽ ignore phím như delete , mũi tên , page up , page down , home , end , ctrl, alt, shift ,esc
// thứ tự ưu tiên keydown -> keydress -> keyup

// input.addEventListener("keypress", function(e){
//    console.log(e.key);
// });
// thứ tự ưu tiên keydown -> keypress -> keyup 

// 4. change : xảy ra khi gõ xong, nhấn enter hoặc nhấn chuột ra ngoài 1 lần

// input.addEventListener("change" , function(){
//    console.log("working");
// })

// 5. focus

input.addEventListener("focus", function(){
   // console.log("Input is focus");
})
// 6. blur
input.addEventListener("blur", function(){
   // console.log("Input is blur");
});

// 7. submit form

const form = document.querySelector(".form");
form.addEventListener("submit", function(e){
     e.preventDefault();
   //  console.log(input.value);
   // this , e.target
   // this.elments
   console.log(this.elements);
   console.log(this.elements["name"].value);
   const username = this.elements["name"].value;
   const gender = this.elements["gender"].value;
   // const hobby = this.elements["hobby"].value;
   // console.log({username, gender, hobby});

   const hobby = this.querySelectorAll(`input[name="hobby"]`);
   let hobbyValues =[];
   [...hobby].forEach(item => hobbyValues.push(item.value));
   console.log(hobbyValues); // lấy value
});

