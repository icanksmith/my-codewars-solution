//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  let vowels = '';
  for (let i = 0; i < str.length; i++){
    if ('aeiuo'.includes(str[i])){
        vowels += str[i]
    }
  }
  return vowels.length;
}

console.log(getCount('abracadabra'));

// agak tricky but so far so good
// referensi method includes() ini ada di week 4 part 1 soal 2 repo RPN ku


/* Best Practice orang:

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

*/
// kampret gakepikiran pake regex guys wkwkw