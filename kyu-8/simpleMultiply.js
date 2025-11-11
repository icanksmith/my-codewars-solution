// https://www.codewars.com/kata/583710ccaa6717322c000105/

function simpleMultiplication(number) {
    // your code........
  if (number % 2 === 0) return number * 8;
  else return number * 9;
}

console.log(simpleMultiplication(2)); // 16
console.log(simpleMultiplication(1)); // 9
console.log(simpleMultiplication(5)); // 45

/* Best Solution

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
*/

