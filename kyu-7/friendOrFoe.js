// https://www.codewars.com/kata/55b42574ff091733d900002f/

function friend(friends){
  //your code here
  const realFriends = [];
  for (let i =0; i < friends.length; i++){
    if (friends[i].length === 4) {
        realFriends.push(friends[i])
    } //aish gw gatau kenapa kalo else otomatis masuk ke else dan datanya jadi [] semua
  }
  return realFriends;
}

console.log(friend(['icank', 'smith','bima'])); // [bima]
console.log(friend(['icank', 'smith'])); // []

/* Best Solution

function friend(friends){
  return friends.filter(n => n.length === 4)
}

*/
