function divisible(a) {
  let num = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0 && a[i] > 15) {
      num++;
    }
  }
  return num;
}

console.log(divisible([2, 3, 12, 18, 42, 24]));
console.log(divisible([100, 84, 37]));
console.log(divisible([5, 8, 6, 12]));

//OR-------------------------------------------
function divisibility(a) {
  return a.filter((num) => num % 2 === 0 && num > 15).length
}

console.log(divisibility([2, 3, 12, 18, 42, 24]));
console.log(divisibility([100, 84, 37]));
console.log(divisibility([5, 8, 6, 12])); 
 
//OR-------------------------------------------
function divisib (a) {
  let result = []
  for (let num of a) {
    if (num % 2 === 0 && num > 15) {
      result.push(num)
    }
  }
  return result.length
}

console.log(divisib([2, 3, 12, 18, 42, 24]));
console.log(divisib([100, 84, 37]));
console.log(divisib([5, 8, 6, 12]));

module.exports = divisible;
