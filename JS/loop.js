// Vong lap 
const number = [1, 2, 3, 4, 5, 6, 7,8,9,10];
// for (let i =0; i < number.length;i++){
//     body code
// }
// for(let i = 0;i < number.length;i++){
//     console.log(`The index is ${i}`);
// }



// for(let i = 0;i < number.length;i++){
    // console.log(`The index is ${i}`);
    // Neu gia tri la 8 thi dung vong lap
    // console.log(`The value ${number[i]}`)
    // if(number[i]===8 ){
    //     break;
    // }
    //  Neu gia tri la 8 thi bo qua gia tri do
// if(number[i]===8){
//     continue;
// }
// console.log(`the value ${number[i]}`);

// }
// nested loop
// [[1,2,3,4,5], [1,2,3,4,5]]
for(let i = number.length-1;i >= 0;i--){
    // console.log(`the value ${number[i]}`);
    for(let j = number.length -1; j >=0;j--){
        // console.log(j);
    }
} 
/*
// infinite loop
for(let i = 0; 2> 1;i--){

}

*/
// if(2>1)
// let i = number.length - 1 -> lay vi tri cuoi cung cua mang
// i >= 0 -> dien kien index lon hon hoac bang 0
// 1. sao chép mảng dùng vòng lặp for
let copyArr = []
//1 2 3
// push(value)
for(let i = 0;i < number.length;i++){
    copyArr.push(number[i]);
}
// console.log(copyArr);
// 2. Đảo ngược từ "i love"
let str = "i love";
let result = ""
for(let i = str.length-1; i>=0;i--){
    // console.log(str[i])
    result=result+str[i]
}
// console.log(result);
// while và do while
// while(condition : điều kiện){
    //body code
// }

let numbers = 1;
while(numbers<10){
    // console.log("number is " + numbers)
    // điều kiện để dừng
    numbers+=1;
    // numbers++;
    
}

/*
do{

}while(condition:điều kiện)

*/
// for of
// for (value of array){}
let a=[]
for(let value of number){
    value +=10;
    // console.log(value);
    a.push(value)
}
// console.log(a)

for(let c of "evondev"){
    console.log(c)
}



