// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/

function reverseWords(str) {
  // Go for it
  let arr = str.split(' ')
  let result = []
  for (let i = 0; i < arr.length; i++){
    let reversed = arr[i].split('').reverse().join('')
    result.push(reversed);
  }
  return result.join(' ')
}

console.log(reverseWords('Double  Space')); // 'elbouD  ecapS'
console.log(reverseWords('hello world!')); // 'olleh !dlrow'
console.log(reverseWords('icank smith')); // 'knaci htims'

// hadeuh kampret lagi lagi time wasting tanpa tahu bisa di kayak gini kek
/* Best solution

function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

*/
