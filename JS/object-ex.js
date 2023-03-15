// Viết 1 function kiểm tra value có phải là Object hay ko?

// typeof value === "object"
// {} [] null
function isObject(value){
    if(typeof value === "object" && !Array.isArray(value) && value !== null){
        return true;
    }
    return false;
}
// {}

// console.log(isObject(123));

// 2. {a:1, b:2} -> [["a",1],["b",2]]
function objectToArray(object){
    // check nếu không là object thì dừng
    if(!isObject(object)) return;
    // nếu là object thì xử lý
    // return Object.entries(object);
    // [a, b]
    // const value = Object.keys(object).map((key) => [key, object[key]])
//  return value;
let result = [];
for(let key in object){
    // hasOwnproperty(key) -> nếu object chưa key trả về true ngược lại trả về false
    if(object.hasOwnProperty(key)){
        result.push([key, object[key]]);

    }
}
    return result;
}
console.log(objectToArray({a: 1, b:2}));
