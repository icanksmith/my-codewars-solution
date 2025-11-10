// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  // ...
  let arrData = numbers.split(' ');
//   let highestNum = Math.max(...arrData);
//   let lowestNum = Math.min(...arrData) +''+ Math.max(...arrData);
//   for (let i = 0; i < arrData.length; i++){
//     let arrNum = Number(arrData[i]);
//     if (arrNum[i] > arrNum[i+1]){
//         return highestNum += arrNum;
//     } else
//         return lowestNum += arrNum;
//     // console.log(arrNum);

//   }
//   console.log(lowestNum);
  return numbers = Math.max(...arrData) +' '+ Math.min(...arrData)
}

console.log(highAndLow('1 2 3 4 5')); // '5 1'
console.log(highAndLow('9 8 7 6 5')); // '5 1'

// oke gw baru ngeh kalo ada syntax matematika yang bantu banget wkwkwkw
// anjir gw makan waktu 4 sesi pomodoro yg ternyata sebenernya segampang ini cuk kalo searching dari tadi harusnya
// gausah gw hapus lah kodingan gw yg wasweswos, gw jadiin komen sebagai jejak hahaha
