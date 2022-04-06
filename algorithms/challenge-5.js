function replaceDivisible(x, y) {
    for (let i = 0; i < x.length; i++) {
        if (x[i] % y === 0) {
            x[i] = "isDivisible"
        }
    }
     return x
}

console.log(replaceDivisible([2,4,3,6,5], 3));
console.log(replaceDivisible([12,4,3,6,5], 2));


//OR-------------------------------------------
function isDivisible (x, y) {
    return x.map((num) => {    //first use return x.map to go through all the elements in the array
        if (num % y === 0) return "IS DIVISIBLE";
        return num  //still return num not divisible as is
    })
}  
console.log(isDivisible([2,4,3,6,5], 3));
console.log(isDivisible([12,4,3,6,5], 2));

module.exports = replaceDivisible