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

module.exports = highestSum