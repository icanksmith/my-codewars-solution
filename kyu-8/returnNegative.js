// https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
  // Code?
  if (num === 0) return num;
  return -Math.abs(num);
}

console.log(makeNegative(0)); // 0
console.log(makeNegative(9)); // -9
console.log(makeNegative(0.12)); // -0.12