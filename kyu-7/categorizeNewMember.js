// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/

function openOrSenior(data){
  // ...
  let seniorReq = [54, 7]
  let newMember = []
  for (let i = 0; i < data.length; i++){
    if (data[i][0] > seniorReq[0]&& data[i][1] > seniorReq[1]){
        data[i] = 'Senior';
        newMember.push(data[i]);
    } else {
        data[i] = 'Open';
        newMember.push(data[i])
    }
  }
  return newMember;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); // ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])); // ['Open', 'Open', 'Open', 'Open']
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])); // ['Senior', 'Open', 'Open', 'Open']
