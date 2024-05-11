function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let left = arr.slice(0, i + 1).reduce((acc, val) => acc + val, 0);
    let right = arr.slice(i).reduce((acc, val) => acc + val, 0);
    if (left == right) {
      return i;
    }
  }
  return -1;
}
//console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

function findEvenIndex2(arr) {
  return arr.findIndex((element, index) => {
    let left = arr.slice(0, index + 1).reduce((acc, val) => acc + val, 0);
    let right = arr.slice(index).reduce((acc, val) => acc + val, 0);
    return left === right;
  });
}

console.log(findEvenIndex2([1, 2, 3, 4, 3, 2, 1]));
