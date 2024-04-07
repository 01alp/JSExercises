function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  const sum = sorted[0] + sorted[1];
  return sum;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
