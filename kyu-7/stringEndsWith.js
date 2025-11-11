// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/

function solution(str, ending){
  // TODO: complete
  if (ending === '') return true;
  if (str.slice(-ending.length) === ending.slice(-ending.length)) return true;
  else return false;
}

console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false
console.log(solution('empty ending', '')); // true
console.log(solution('', 'empty string')); // false
console.log(solution('', '')); // true

//last codewars for now atleast
