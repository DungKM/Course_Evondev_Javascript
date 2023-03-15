

const array = [1,1000,false,null,"evondev",undefined,"javascrip",[1,2,3]]

const arrayFilter = array.filter((item)=> Boolean(item))
console.log(arrayFilter)

const array2  = [[1,2,3,[false,null]],[1,5,6,["javascrip"]],[888,666,[90]]]
// flat(number) number=>số mảng muốn comeout
const arrayFlat = array2.flat(2)
console.log(arrayFlat)

// 3. Đảo ngược số nguyên . Ví dụ : 1234 - > 4321 , -567 -> 765

// Math.sign(123) -> 1
// Math.sign(-123) -> -1

function reverseNumber(number){
    // convert to String
    // split("") -> [value]
    //reverse()
    // join("")
    const value = parseInt(number.toString().split("").reverse().join(""))*Math.sign(number);
    // console.log(value)
}
reverseNumber(-1234)

// 4.Viết chương trình có tên là fizzBuzz với đầu vào là mốt só nguyễn , và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu có số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì on ra chữ "Buzz" . nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"


// function fizzBuzz(number){
// for(let i = 1;i <= number;i++){
//     if(i % 3 ===0 && i % 2 ===0){
//         console.log("FizzBuzz");
//     }else if(i % 2 ===0){
//         console.log("Fizz");
//     }else if(i % 3===0){
//         console.log("Buzz");
// }
// }
// }

// fizzBuzz(15)

// 5. cho 1 chuỗi bất kỳ đếm số lượng kí tự `vowels` có trong chuỗi .
//vowels là các kí tự u e o a i
// Ví dụ "evondev" -> 3

// function countVowels(string){
//     let count = 0;
//     const characters ="ueoai";
//     for(let c of string.toLowerCase()) {
//     if(characters.includes(c)) 
//     count = count +1;
//     }
//     return count;
// }
// console.log(countVowels("Evondev"))
// "evondev" -> e v o n d e v

// 6. cho 1 mảng các giá trị số [1,2,3,1,1,1,2,5,5,5,7,7,6]. Viết một function trả về một mảng với các giá trị unique. Kết quả ở trên sẽ là [1,2,3,4,5,7,6]

function unique(arr){
    let result = [];
    for(let i = 0; i < arr.length; i ++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(unique([1,2,3,1,1,1,2,5,5,5,7,7,6]));
// 7. Viết 1 function xử lý 1 mảng lớn thành nhiều mảng dựa vào một số nguyên đầu vào. ví dụ ([1,2,3,4,5],2) -> [[1,2], [3,4],[5]]
// {[1,2,3,4,5],3} -> [[1,2,3],[4,5,6]]
function splitArray(array, number){
let result = [];
// slice(start, end)
// [1,2,3,4,5,6]
let index=0;
while(index < array.length){
    // array.slice(index, number+index)
 result.push(array.slice(index, number+index))
    index = index+number;

}
console.log(result)
return result
}
splitArray([1,2,3,4,5,6],2)