function squareDigits(num) {
  const array = num.toString().split('');
  let number = [];
  for (let n of array) {
    number.push(n * n);
  }
  return +number.join('');
}
console.log(squareDigits(3212));

//Map ile
function squareDigits2(num) {
  return +num
    .toString()
    .split('')
    .map((i) => i * i)
    .join('');
}
