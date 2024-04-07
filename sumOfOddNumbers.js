function rowSumOddNumbers(n) {
  let sum = 0;
  let k = n * (n - 1) + 1;
  for (let i = 0; i < n; i++) {
    sum += k + i * 2;
  }
  return sum;
}
console.log(rowSumOddNumbers(2));

//Better solution
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
