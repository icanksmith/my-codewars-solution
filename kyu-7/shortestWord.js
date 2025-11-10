// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/

function findShort(s){
    const strData = s.split(' ');
    let shortString = strData[0];
    for (let i = 0; i < strData.length; i++){
        if (strData[i].length < shortString.length){ //kalau panjang kata ini lebih kecil dari kata terpendek sebelumnya, jadikan ini yang terpendek
            shortString = strData[i]
        }
    }
    return shortString.length;
}

console.log(findShort('Halo Perkenalkan nama saya adalah x')); // 1
console.log(findShort('Di Bali kemarin cuacanya sangat indah')); //2
console.log(findShort('waktunya pahlawan beraksi guys')); //4

