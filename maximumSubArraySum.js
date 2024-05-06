var maxSequence = function (arr) {
  if (arr.length < 1) {
    return 0;
  }
  let maxValues = [];
  arr.reduce((total, val) => {
    max = Math.max(0, total + val);
    maxValues.push(max);
    return max;
  }, 0);
  return Math.max(...maxValues);
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//Better
var maxSequence2 = function (arr) {
  var currentSum = 0;
  return arr.reduce(function (maxSum, number) {
    currentSum = Math.max(currentSum + number, 0);
    return Math.max(currentSum, maxSum);
  }, 0);
};
