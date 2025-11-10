// https://www.codewars.com/kata/57a429e253ba3381850000fb/

function bmi(weight, height) {
  let data = weight / (height * height); //kurung biar dikali dulu baru bagi ges
  if (data <= 18.5)
    return 'Underweight';
  else if (data <= 25.0)
    return 'Normal';
  else if (data <= 30.0)
    return 'Overweight';
  else 
    return 'Obese';
}

console.log(bmi(50, 1.80)); // 'Underweight'

// termasuk best solution ygy