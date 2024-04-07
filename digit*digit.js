function squareDigits(num) {
  let squared = num
    .toString()
    .split('')
    .map(function (number) {
      return number * number;
    });
  let squaredNumbers = parseInt(squared.join(''));
  return squaredNumbers;
}
console.log(squareDigits(7642));

//Kisa
function squareDigits2(num) {
  return +num
    .toString()
    .split('')
    .map((i) => i * i)
    .join('');
}
