// https://www.codewars.com/kata/56747fd5cb988479af000028/

function getMiddle(s) {
    if (s.length === 1) return s;
    if (s.length % 2 === 1){
        return s.substring((s.length / 2), (s.length / 2) + 1);
    } else if (s.length % 2 === 0) {
        return s.substring((s.length / 2) - 1,(s.length / 2) + 1);
    }
}

console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't' 
console.log(getMiddle('middle')); //dd
console.log(getMiddle('A')); // A
console.log(getMiddle('nakula')); //ku

/* Best Solution

function getMiddle(string) {
  var middleIndex = string.length / 2;
  if (string.length % 2 == 0) {
    return string.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return string.charAt(middleIndex);
  }
}
 */