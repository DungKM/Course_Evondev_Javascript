
// Cách khai báo object
// object literal

const objectLiteral = {};
// Object constructor

const objectConstructor = new Object();
 const student = {
name: "evondev",
age:27,
male: true,
"last-name":"Dũng",
hi: function(){
    // console.log("hello evondec");
},

 };

 // properties
 //method

 // 2 cách truy xuất giá trị của object 
 // 2.1 dog notation .

// console.log(student.name);
// 2.2 Bracket notation ["key"]

// console.log(student["age"]);
// console.log(student["last-name"]);
// Thay đổi giá trị của Oject
student.age=20;
student.male ="male"
student.isDeveloper=true
student.hello =function(){
    // console.log("hello");
}
// isDeveloper
// console.log(student)

// cách xóa các giá trị trong Oject
// delete student["last-name"];

// for(let key in student){
//    if(key == 'name'){
//     console.log("Hello name")
//    }
//    let valueName = student[key]
// //    console.log(valueName)
// }
// Object.keys(Object)n-> trả về 1 mảng chưa tất cả các keys của Object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);

// Object.value(Object) ->  trả về 1 mảng chứa tất cả các giá trị của Object

const values = Object.values(student);
console.log(values);

// object.entries(object) -> trả về 1 mảng nested [["name","evondev"],["age", 20]] gồm có key và value

const entries =Object.entries(student);
console.log(entries);

// object.assign();
const a = {
    fistName: "tuan"
};
const b = {
    lastName: "tran"
};
const c = Object.assign(a, b);
console.log(c);
const d = {...a,...b};
console.log(d);

// ...

// Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object

const car = {
    brand:"BMW"

};
const newCar = Object.freeze(car);
newCar.brand= 'Audi';
console.log(newCar);


// object.seal(object) -> cho phép chỉnh sửa nhwung ko được thêm key value mới

const user = {
    userName: "evondev",
    school:{
        room: {
            name: "IT",
        },
    },
   
};

// const newUser = Object.seal(user);
// newUser.userName = "hoang anh dung";
// newUser.lastName = "john";
// console.log(newUser);
// [...array] {...object}
const newUser ={...user};
newUser.userName = "hoang anh dung";
console.log(user);
// console.log(newUser);
console.log(newUser);
// Object.assign
const newUser2 = Object.assign({}, user);
console.log(newUser2);
// clone 
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Designer";
console.log(newUser3);
// clone nested object

// this keyword
// this nó sẽ đề cập tới object gần nhất
 const student2 = {
name: "evondev",
age:27,
male: true,
"last-name":"Dũng",
hi: function(){
    console.log(`mt name  ${this.name} evondev and i am ${this.age} years old`);
},
fullname : {
    name: "Hoang Anh Dung"
},

 };

 student2.hi();

// optional chaining
console.log(student2.fullname);// undefined
console.log(student2.fullname);// undefined.name -> cannot read property
if(student2.fullname){
    if(student2.fullname.name){
        console.log(student2.fullname.name);
    }
}
// student2.fullname?


