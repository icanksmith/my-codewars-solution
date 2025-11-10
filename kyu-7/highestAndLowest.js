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
// oke mungkin ini sedikit tebak-tebakan aja soal kenapa RPN memilih ujian week 4 pake codewars
// tebakan gw adalah agar bisa explore mandiri diluar materi untuk ngelatih fondasi programmer yang baik, yaitu:
// nyari tau permasalahan lalu selesaikannya gimana, intinya harus explore untuk problem solving mungkin lah ya


/* Versi Chatgpt soal kode awal diatas

function highAndLow(numbers) {
  // ubah string jadi array angka
  let arrData = numbers.split(' ');
  
  // konversi semua elemen jadi Number
  for (let i = 0; i < arrData.length; i++) {
    arrData[i] = Number(arrData[i]);
  }

  // inisialisasi pembanding awal
  let highest = arrData[0];
  let lowest = arrData[0];

  // bandingin tiap angka
  for (let i = 1; i < arrData.length; i++) {
    let current = arrData[i];
    if (current > highest) {
      highest = current;
    }
    if (current < lowest) {
      lowest = current;
    }
  }

  // gabung hasil jadi string "high low"
  return highest + ' ' + lowest;
}

// TEST
console.log(highAndLow('1 2 3 4 5'));     // '5 1'
console.log(highAndLow('1 2 -3 4 5'));    // '5 -3'
console.log(highAndLow('1 9 3 4 -5'));    // '9 -5'
*/