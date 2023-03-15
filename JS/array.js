// mMang

// const a ="a"
// const b ="b"
// const c ="c"
// const d ="d"

//  2 cach tao mang
// array literal
// const students1 = [];
// array constractor
// const  students = new Array();
// vi du mot mang
// Mang phuc tap [0, false, undefined, null, "evondev", ["evondev",false,1200, []]]
// Mang don gian [0, false, undefined, null, "evondev"]
// [1,2,3,4,5] ["a","b","c","d"] [false, true, true]
//[]:empty array -> mang rong
const students1 = ["evondev","tuan", "dung","nam","thanh","trung","tuan"];
// 0 1 2 3 4
// index: vi tri cua phan tu (gia tri) trong mang va no bat dau tu 0
// length : do dai cua mang , no den tu 1
// truy xuat trong mang -> students1(index)
// console.log(students1[0]);
// console.log(students1[7]); // undefined
// lay phan tu cuoi cung trong mang la do dai cua mang -1 -> array.length-1
// console.log(students1[students1.length-1])
// students1.length=0

// Phuong thuc hay dung cua mang
// length -> tra ve do dai cua mang
console.log("--------- array.Length ------------")
console.log(students1.length);
// reverse -> Dao nguoc gia tri trong mang
// console.log("--------- array.reverse -----------")
// console.log(students1.reverse());
// join -> nối các phần tử thành chuỗi
console.log("--------- array.join  -----------")
console.log(students1.join());
// indexOf -> trả về vị trí của phần tử tìm thấy đầu tiên
console.log("--------- array.indexOf  -----------")
console.log(students1.indexOf("tuan"));
// lastIndexOf -> trả về vị trí của phần tử tìm thấy cuối cùng
console.log("--------- array.indecOf  -----------")
console.log(students1.lastIndexOf("tuan"));
// push -> thêm phần tử vào cuối mảng
console.log("--------- array.push  -----------")
console.log(students1.push("javascrip"));
console.log(students1);
// unshift -> thêm phần tử vào đầu mảng
console.log("--------- array.unshift  -----------")
console.log(students1.unshift("FrontEnd"));
console.log(students1);
// pop -> xóa phần tử cuối cùng trong mảng
console.log(students1)
students1.pop();
console.log(students1)
// shift -> xóa phần tử đầu tiên trong mảng
console.log(students1)
students1.shift();
console.log(students1)

console.log("---------- array.slice------------");
// tạo ra một mảng coppy của mảng ban đầu
const animals = ["tiger", "lion","horse","elephant"];
// slice() : tạo ra mảng mới y hệt mảng ban đầu
const animals2 = animals.slice();
console.log(animals2);
// slice(start).start -> vị trí index ở trong mảng
const animals3 = animals.slice(1);
//  ['lion', 'horse', 'elephant']
console.log(animals3);
// slice(start, end) => start la vi tri bat dau , end là vi tri ket thuc
// nó sẽ sao chép từ vị trí start tới vị trí end-1
const animals4 = animals.slice(1,3)
console.log(animals4);

const animals5 = animals.slice(-1)
console.log(animals5);
console.log("--------- array.splice-----------");
// nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog","cat","bird","dragon"];
// splice(start)
// const pets2 = pets.splice(2);
// console.log(pets2);

// splice{start, deleteCount}: deleteCount là số lượng phần tử muốn xóa hoặc thay thế
const pets3 = pets.splice(0, 2, "cat","dog","men",false, 100);
console.log(pets)
//sắp xếp các phần tử trong mange theo chuẩn unicode-16
const random = [1, 999,10, 5,09];
// (5) [1, 10, 5, 9, 999]
console.log(random.sort());
// sort (function(a, b))
// function(callback)
const random2 = random.sort(function(a, b){
    if(a>b) return 1; // đổi vi trí cho nhau
    if(a<b) return -1; // không đổi vị trí cho nhau
});
const random3= random.sort((a, b)=>a > b ? 1 : -1);
console.log(random3);
console.log(random2);
console.log("------------ array.find-----------")

// nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện nào đấy

const numbers = [1, 999, 1000000, 10, 5, 09];
// tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((Element) => Element >1000000000);
// không tìm thấy thì nó sẽ trả ra kết quả là undefined
console.log(findYourNumber) // 999
console.log("------------ array.findIndex-----------")
// nó sẽ trả về vị trí index thấy đầu tiên trong mảng thỏa điều kiện nào 
const findYourIndex = numbers.findIndex((Element) => Element  < 0);
// Nếu không tìm thấy thì sẽ trả ra kết quả là -1
console.log(findYourIndex);
// sort bổ dung
// const random = [1, 999, 10, 5, 09];
const random4= random.sort((a, b)=>a > b ? -1 : 1);
console.log(random4)
// [999, 10, 9, 5, 1]
console.log("------ array.map--------");
// duyệt qua từng phần tử trong mảng trả ra 1 mảng mới không thay đổi mảng ban đầu
const listNumber = [1,2,3,4,5];
// trả ra 1 mảng mới mà các số(giá trị) trong mảng cũ nhân 2 
// map(callback(value, index , array))
const listNumberDouble = listNumber.map(function(value, index, array){
    return value * 2;
    
});
console.log(listNumberDouble);

console.log("---------- array.forEach---------");
const listNumberTripple = listNumber.forEach((value, index, array)=> {
    return value * 3;
} );
console.log(listNumberTripple);
// hãy cho biết sự khác nhau giữa forEach và map
// forEach(callback(value, index , array))

console.log("------------- array.filter-------------")
// dùng để filter(sàng lọc) các phần từ trong mảng thỏa điều kiện nào đó
// filter(callback(value, index , array))
// const listNumber = [1,2,3,4,5];
const greater = listNumber.filter((item, i, a)=>  item > 3)
console.log(listNumber);
console.log(greater);

console.log("------------- array.some-----------")
// trả về true khi thỏa 1 điều kiện và ngược lại trả về false khi không thỏa điều kiện nào cả
const someNumber = listNumber.some(value => value > 30);
console.log(someNumber)

console.log("-------------- array.every------------")
// chỉ trả về true khi tất cả điều kiện đúng , ngược lại chỉ cần 1 cái sai là số sẽ return false

const everyNumber = listNumber.every(value => value > 4);
console.log(everyNumber);

// true or false

console.log("--------- array.reduce---------");
// gom các phần tử trong mảng lại thành 1
// .reduce(a, b) => {}, initialize value












