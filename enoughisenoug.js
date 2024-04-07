function deleteNth(arr, n) {
  let elementCount = {};
  let result = [];
  arr.forEach((element) => {
    if (!elementCount[element]) {
      elementCount[element] = 0;
      console.log(elementCount);
    }
    if (elementCount[element] < n) {
      result.push(element);
      elementCount[element]++;
      console.log(elementCount);
    }
  });
  return result;
}
//console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
//--------------
function deleteNth2(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}
