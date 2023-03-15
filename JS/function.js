// function(hàm)
// khai báo function 
// cú pháp (Syntax): function functionName(parameters){
// you code here
// ?

function sum(a=1, b=0){
// console.log("it is working")
// console.log(a, b)
// return
// return value
// khong co return ket qua tra ve underfined
const total =  a + b;
return total;
}
console.log(sum());

// tham so la function

// luu function vao 1 bien roi goi sau nay
function add(a, b){
    console.log(a +b)
    return a+b;
}
const sum2 = add;

// add(500,1000);
//fn la function
 function average(a, b, fn){
    const total = fn(a, b);
    return total/2;
 }
 let result = average(200, 300, sum2);
 console.group(`result ${result}`)

 // anonymous function(function expression)
// Function declaration
const logName = function(){
console.log("Your name");

};
logName();
(function(){
    console.log("this is IIPE function");

})();

// Scope 
//Global scope , function scope
let myName = "evondev"; // global scope
function logYourName(){
    let myName2 ="tuan";
    console.log(myName2);
}
logYourName();
// block scope
// let message2;
if(2>1){
    // let message = "Hello evondev";
    // const message = "Hello evondev";
    // var hosting
    var message2 = "hello tuan"
    // message2="hello dung"
}
alert(message2);

let aNewName = "KeyMagic"
function sayHi(){
    let message ="Hi"
    console.log(`${message} ${aNewName}`)
}
sayHi()

function sayHello(){
    let message ="Hi"
    function sayHi(){
        console.log(message)
    }
    return sayHi;
}
let hello = sayHello();
hello();

function sayHello3(message){
    return function hiYourName(name){
console.log(`${message} ${name}`)
    };

}
// let hello = sayHello3("Welcome to javascript")
hello("Closuare")
// Welcome to javascript Closuare