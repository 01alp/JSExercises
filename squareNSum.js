function squareSum(numbers) {
  let sum = 0;
  for (let n of numbers) {
    sum += n * n;
  }
  return sum;
}
console.log(squareSum([]));
