// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/

function longest(s1, s2) {
  // your code
  let one = s1.split('').sort().join('');
  let two = s2.split('').sort().join('');

  let resOne = '';
  let resTwo = '';

  let trueResult = '';

  for (let i = 0; i < one.length; i++){
    let char = one[i]
    if (resOne.indexOf(char) === -1){
        resOne += char;
    }
  }

  for (let i = 0; i < two.length; i++){
    let char = two[i]
    if (resTwo.indexOf(char) === -1){
        resTwo += char;
    }
  }
  let finalResult = '';
  if (finalResult.indexOf(resOne) === -1){
    finalResult += resOne;
    finalResult = finalResult.split('').sort().join('');
  }
  if (finalResult.indexOf(resTwo) === -1){
    finalResult += resTwo
    finalResult = finalResult.split('').sort().join('');
  }

  for (let i = 0; i < finalResult.length; i++){
    let char = finalResult[i]
    if (trueResult.indexOf(char) === -1){
        trueResult += char;
    }
  }
  return trueResult;
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")); // "abcdefklmopqwxy"

// ini by far soal codewars paling susah menurutku, atau emg otak gw aja yg udah konslet 
// welp sebenernya nemu new Set tapi dari AI lol, aku cari di mdn gaada???? why? makannya ga aku pakai

/* Best Solution

function longest(s1, s2) {
const combine = s1 + s2;
return sorted = [...new Set(combine)].sort().join('');
}
 */

/* RPN Style tanpa new set

function longest(s1, s2) {
  let combined = s1 + s2;
  let unique = '';

  for (let char of combined) {
    if (!unique.includes(char)) unique += char;
  }

  return unique.split('').sort().join('');
}

*/

