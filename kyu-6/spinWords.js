// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string){
    let str = string.split(' ');
    let arr = [];
    for (let i = 0; i < str.length; i++){
        let newArr = str[i].split(' ')
        arr.push(newArr);
        for (let j = 0; j < newArr.length; j++){
            if (newArr[j].length >= 5){
                newArr[j] = newArr[j].split('').reverse().join('')
            }
        }
        // console.log(newArr)
    }
    let newStr = arr.join(' ') //tadinya pake toString tapi ada komanya lol, jadi baru ngeh bisa pake join lg aja
    return newStr;
}

console.log(spinWords('Hello World'));
console.log(spinWords('Hello my name is Samuel'));

//gak include best solution karna gak paham apa yg mereka lakuin
//anyway ini mungkin kyu-6 terakhirku dlu deh, jujur pusing juga sih
//lebih cepet push kyu 7 8 aja biar cpt cpt livecode

/* Best solution buat imrpove kodeku dari chatgpt

function spinWords(string) {
  return string
    .split(' ')
    .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
    .join(' ');
}

*/