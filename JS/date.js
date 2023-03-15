const now = new Date()
// // built-in object
// console.log(now)
//Mon Jul 04 2022 01:08:27 GMT+0700 (Giờ Đông Dương)
//timezone : GMT + 0700 
//Second : 34
// Hour : 23
// year: 2021
//Month : May
//Day : 13
//Day of the week : Thu
//Timestamp & Epoch time
//Unix time 
// console.log(now.getTime()) // print timestamp  1656871986106
// // console.log(new Date(0));
// // new Date() -> In ra ngay gio hien tai
// // new Date(timestamp) -> dua vao timstamp de in ra ngay gio
// // new Date(date string)
// // new Date(year, moth, day,hour,minutes,second,miliseconds)
// console.log(new Date(1656872389051))
// console.log(new Date("Mon Jul 04 2022 01:19:49 GMT+0700 (Giờ Đông Dương)"))
// console.log(new Date(2021,5,1,2,23,23))

// cac ham get trong date
// const birthday = new Date(2003, 11, 6);
// // in ra nam
// console.log(birthday.getFullYear())// 2003
// // in ra thang
// // 0 la thang 1 (jan) 11 thangs 12(dec)
// console.log(birthday.getMonth())// 11
// // in ra ngay cua thang 1->31
// console.log(birthday.getDate());//6
// // in ra thu cua tuan
// // 0 -6 0: la chu nhat
// console.log(birthday.getDay());
// // in ra gio
// console.log(birthday.getHours())
// // in ra phut
// console.log(birthday.getMinutes())
// // in ra giay 
// console.log(birthday.getMilliseconds())

// // in ra timestamp
// console.log(birthday.getTime())


// // cac ham set trong date

// console.log(`My birthday : ${birthday}`);
// birthday.setFullYear(1993)
// birthday.setMonth(10)
// birthday.setDate(30)
// birthday.setHours(23)
// birthday.setMinutes(23)
// birthday.setSeconds(23)
// console.log(`My birthday after update : ${birthday}`)

// console.log(now.toDateString()) // Mon Jul 04 2022
// console.log(now.toTimeString()) // 02:02:49 GMT+0700 (Giờ Đông Dương)
// console.log(now.toLocaleDateString()) // 4/7/2022
// // 4/7/2021
// console.log(now.toLocaleDateString("vi-VI")) // 14/05/2021
// console.log(now.toISOString()) //2022-07-03T19:26:45.424Z

// // 06/12/2003'

// const myTime =new Date("Mon Jul 04 2022 01:08:27 GMT+0700 (Giờ Đông Dương)")
// const myYear=myTime.getFullYear();
// const myMonth = myTime.getMonth()+1;
// const myDate = myTime.getDate();
// const prefixMonth = myMonth <10? "0" :"";
// console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`)

// const timer1=setTimeout(function(){
//     alert("Hello buoi sang")
// },2000)
// clearTimeout(timer1)

// const timer = setInterval(function(){
//     console.log("call me")
// },2000)
// clearInterval(timer)

// Bai 1
const timeNow = new Date()
const myYear = timeNow.getFullYear()
console.log(timeNow)
const age = (year) => myYear-year
console.log(`Tuổi của bạn là ${age()}`)


