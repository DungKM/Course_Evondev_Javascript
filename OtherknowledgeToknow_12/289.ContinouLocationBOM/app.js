//1.Location

console.log(location);
console.log(window.location);

// setTimeout(() => {
//     location.href = "https://unsplash.com/fr";
// },1000);

let params = new URLSearchParams(location.search);
console.log(params.get("type"));
console.log(params.get("page"));
console.log(params.has("page"));
console.log(params.set("page",10));
console.log(params.get("page"));


// console.log(params.keys());

for(let i of params.keys()){
    console.log(i)
}
for(let i of params.values()){
    console.log(i)
}

params.delete("page");

console.log(params);