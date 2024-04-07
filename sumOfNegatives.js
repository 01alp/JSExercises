function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) {
    return [];
  }
  let posCount = 0;
  let negSum = 0;

  for (let n of input) {
    if (n > 0) {
      posCount++;
    } else if (n < 0) {
      negSum += n;
    }
  }
  return [posCount, negSum];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

//Better
function countPositivesSumNegatives2(input) {
  return input && input.length ? [input.filter((p) => p > 0).length, input.filter((n) => n < 0).reduce((a, b) => a + b, 0)] : [];
}
