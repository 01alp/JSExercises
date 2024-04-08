function findUniq(arr) {
  return arr.reduce((acc, val) => {
    if (arr.indexOf(val) == arr.lastIndexOf(val)) {
      return val;
    }
    return acc;
  }, undefined);
}

console.log(findUniq([5, 5, 0, 0, 4, 4, 1]));
//Better
function find(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}
