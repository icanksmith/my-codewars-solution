// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
  let numString = num.toString();
  let result = '';
  for (let i = 0; i < numString.length; i++){
    let strNumber = Number(numString[i])
    let squared = Math.pow(strNumber, 2).toString();
    result += squared;
  }
  return Number(result);
}

console.log(squareDigits(88)); //6464

// well lagi lagi best solution menggunakan map dan aku gapaham jadi ga kutulis disini
// tapi so far okelah aku tau mikir gimana algoritma seharusnya berjalan
// tinggal nyari nyari syntax di mdn dan dpt yg kumau
// ini pertama kali pake Math.pow() hasil googling juga jadinya tinggal implementasikan 