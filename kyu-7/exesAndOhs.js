// https://www.codewars.com/kata/55908aad6620c066bc00002a/

function XO(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'x' || str[i] === 'X') x++;
        if (str[i] === 'o' || str[i] === 'O') o++;
    }
    if (x === 0 && o === 0) return true;
    else if (x === o) return true;
    else return false;
}
console.log(XO("ooxx")); // true
console.log(XO("xooxx")); // false
console.log(XO("zpzpz")); // true when no 'x' and 'o' is present should return true
console.log(XO("zzoo")); // false
console.log(XO("xxOo")); // 
console.log(XO("XXoOxooxxxooOxXOXoOxoXoXxoXooX")); // 

// oke baru liat best solution dan keinget bisa pake regex, tapi bingung jg soal implementasinya hahah

/* Best Solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
   */



