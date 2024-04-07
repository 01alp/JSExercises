function bmi(weight, height) {
  const bmi = weight / (height * height);
  switch (true) {
    case bmi <= 18.5:
      return 'Underweight';
    case bmi <= 25.0:
      return 'Normal';
    case bmi <= 30.0:
      return 'Overweight';
    case bmi > 30:
      return 'Obese';
  }
}

console.log(bmi(50, 180));

//baska
const bmi2 = (w, h, bmi = w / h / h) => (bmi <= 18.5 ? 'Underweight' : bmi <= 25 ? 'Normal' : bmi <= 30 ? 'Overweight' : 'Obese');
