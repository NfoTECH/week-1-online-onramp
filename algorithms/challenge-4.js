 function higherSum (x, y) {
     let xSum = x.reduce((sum, num) => sum + num, 0);
     let ySum = y.reduce((sum, num) => sum + num, 0);

     return Math.max(xSum, ySum);
 }
console.log(higherSum([2,5,1,0,5,7], [2,3,5,6,2,1]))
console.log(higherSum([15,7], [12,17]))
console.log(higherSum([30], [3,6,2,6]))

//OR-----------------------------------------------
function highestSum(x, y) {

    function sum(k) {
        let total = 0;
        for (let i = 0; i < k.length; i++) {
            total += k[i]
        }
        return total
    }
    let xSum = sum(x);
    let ySum = sum(y);

    if (xSum > ySum) {
        return xSum
    } else {
        return ySum
    }
}

console.log(highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]))
console.log(highestSum([15,7], [12,17]))
console.log(highestSum([30], [3,6,2,6]))

//OR--------------------------------------------------
function highestSums (x, y) {
    let xSum = 0;
    let ySum = 0;
    for (let i = 0; i < x.length; i++) {
        xSum += x[i];
    }
    for (let num of y) {
        ySum += num
    }
    let result = Math.max(xSum, ySum);
    return result
}

console.log(highestSums([2,5,1,0,5,7], [2,3,5,6,2,1]))
console.log(highestSums([15,7], [12,17]))
console.log(highestSums([30], [3,6,2,6]))

 



module.exports = highestSum