function isDivisbleByN(arr, n) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % n === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(isDivisbleByN([1,3,5,6,3,6,7,4], 2))
console.log(isDivisbleByN([21,3,5,6,3,6,7,4], 7))

//OR---------------------------------------------
function nDivisibility (arr, n) {
    return arr.filter((num) => num % n === 0)
}
console.log(nDivisibility([1,3,5,6,3,6,7,4], 2))
console.log(nDivisibility([21,3,5,6,3,6,7,4], 7))


module.exports = isDivisbleByN
