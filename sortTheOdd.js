function sortArray(array) {
  let sorted = [];
  let oddIndex = 0;
  let odd = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
  for (let n of array) {
    if (n % 2 !== 0) {
      sorted.push(odd[oddIndex]);
      oddIndex++;
    } else {
      sorted.push(n);
    }
  }
  return sorted;
}
console.log(sortArray([5, 8, 6, 3, 4]));

//Better
function sortArray2(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
