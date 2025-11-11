// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/

var isSquare = function(n){
  if (Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) === n) return true;
  else return false;
}

console.log(isSquare(-1)); // false (minus gabisa di square)
console.log(isSquare(0)); // true (0 * 0)
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true (2 * 2)
console.log(isSquare(25)); // true
console.log(isSquare(26)); // false
console.log(isSquare(93)); // false (ini tricky ges karna ada komanya kalo square root doang, kalo gapake sqrt returnnya true)

/* Best Solution

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0; //klo ada komanya atau angka aneh bakalan return false
}
   */