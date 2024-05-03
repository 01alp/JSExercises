const sumArray = (array) => {
  if (array === null || array === undefined) {
    return 0;
  }
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, val) => acc + val, 0);
};
console.log(sumArray(null));

//Better
const sumArray2 = (numbers) =>
  numbers && numbers.length > 1
    ? numbers
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((sum, number) => sum + number, 0)
    : 0;
