function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return (sum = [min, max]);
}
console.log(minMax([2334454, 3, 6, 9, 11, 5]));

//Better
function minMax2(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
