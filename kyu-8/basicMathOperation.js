// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/

function basicOp(operation, value1, value2){
  //Code
  if (operation == '+'){
    return value1 + value2;
  } else if (operation == '-'){
    return value1 - value2;
  } else if (operation == '*'){
    return value1 * value2;
  } else if (operation == '/'){
    return value1 / value2;
  }
}

console.log(basicOp('+', 1, 2));

/* another solution
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
 */