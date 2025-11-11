// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/

function abbrevName(name){
    const arr = name.toUpperCase().split(' ')
    for (let i = 0; i < arr.length; i++){
        return arr[0][0] +'.'+ arr[1][0]; 
    }
}

console.log(abbrevName('Sam Harris')); // S.H
console.log(abbrevName('icank smith')); // I.S

//damn gaperlu looping jir, ngantuk guha lol

/* Best Solution

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
   */
