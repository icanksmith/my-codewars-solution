// https://www.codewars.com/kata/57f780909f7e8e3183000078/

function grow(x){
  let result = 1;
  for (let i = 0; i < x.length; i++){
    result = x[i] * result;
  }
  return result;
}

console.log(grow([1, 2, 3, 4])) // 24

/* Best Solution
const grow=x=> x.reduce((a,b) => a*b);
 */