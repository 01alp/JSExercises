function oddOrEven(array) {
  return array.reduce((sum, curVal) => (sum += curVal), 0) % 2 != 0 ? 'odd' : 'even' || [];
}
console.log(oddOrEven([]));

//Daha kisa
function oddOrEven2(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}
