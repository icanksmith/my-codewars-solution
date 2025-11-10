// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/javascript

function descendingOrder(n){
  let num = Array.from(String(n), Number);

  for (let i = 0; i < num.length - 1; i++){
    for (let j = 0; j < num.length - 1 - i; j++){
        if (num[j] < num[j+1]){
            let numTemp = num[j+1];
            num[j+1] = num[j];
            num[j] = numTemp; 
        }
    }
  }
  let newNum = num.join('');
  return Math.floor(newNum)

}

console.log(descendingOrder(12345));
console.log(descendingOrder(9863552));
console.log(descendingOrder(12310));

// oke ini gila sih pake bubble sort di kyu 7 lol, aku tau ada method sort() tpi ga kepikiran karna number kan
// ternyata bener dong ada di best solution pake String() utk convert dan reverse() untuk ngebalik yg lebih gede

/* Best Solution

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
  
*/