//https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  return (str.match(/[^aeiuo]/gi)).join('');
}

console.log(disemvowel('aeiuobckZP'));

// oke finally pake regex walopun masi nyontek regexr.com yg penting gak nyontek AI deh.