// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/

function maps(x){
  let result = [];
  for (let i = 0; i < x.length; i++){
    result.push(x[i] + x[i])
  }
  return result;
}

console.log(maps([1, 2, 3])); // [2, 4, 6]