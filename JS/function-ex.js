//1.vie function (ham) so sanh 2 so a, b tim ra so lon hon

function compare(a, b="Dung"){
    // const message = a>b ? a : b
    if(typeof a !== "number" || typeof b !== "number"){
        console.log("Moi nhap so")
        return 0
    }
    return Math.max(a, b);
}
console.log(`so lon nhat la ${compare(5)}`)


function upper(Name =""){
    if(Name.length ===0 ) return null
    let first =Name.toLowerCase().charAt(0).toUpperCase()
    let last =Name.toLowerCase().slice(1)
    return `${first}${last}`
}
console.log(upper("DUNG"))

const value = (x) => x*x
console.log(value(4))