function noOfElements(x, y, z) {
    let xCount = 0;

    // for (let i = 0; i < x.length; i++ ) {
    //     if (x[i] >= y && x[i] <= z) {
    //         xCount++
    //     }
    //  }
    for (let num of x) {
        if (num >= y && num <= z) {
            xCount++
        }
    }
    return xCount
}

console.log(noOfElements([2,3,0,1,7], 4, 8))
console.log(noOfElements([3,3,3,5,18,6,20], 15, 30))
console.log(noOfElements([4,6,2,6,7,7], 0, 7) )

//OR--------------------------------------------------
function noOfElement (x, y, z) {
    let result = []
    for (num of x) {
        if (num >= y && num <= z) {
            result.push(num)
        }
    }
    //return result  returns the numbers in the array itself meeting the above conditions
    return result.length //returns count of how many elements in the array meeting the condition
}

console.log(noOfElement([2,3,0,1,7], 4, 8))
console.log(noOfElement([3,3,3,5,18,6,20], 15, 30))
console.log(noOfElement([4,6,2,6,7,7], 0, 7) )

//OR---------------------------------------------------
function noOfElem (x, y, z) {
    return x.filter((num) => num >= y && num <= z).length;
}

console.log(noOfElem([2,3,0,1,7], 4, 8))
console.log(noOfElem([3,3,3,5,18,6,20], 15, 30))
console.log(noOfElem([4,6,2,6,7,7], 0, 7) )

   
module.exports = noOfElements
