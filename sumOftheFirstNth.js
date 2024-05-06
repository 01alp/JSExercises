const SeriesSum = (n) => {
  if (n < 1) {
    return '0.00';
  }
  let series = Array.from({ length: n }, (_, i) => (i == 0 ? 1 : 1 / (3 * i + 1)));
  const sum = series.reduce((acc, val) => acc + val);
  return sum.toFixed(2);
};
console.log(SeriesSum(3));
