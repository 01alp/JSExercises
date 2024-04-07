function findOdd(A) {
  let count = A.reduce((count, num) => {
    if (num in count) {
      count[num]++;
    } else {
      count[num] = 1;
    }
    return count;
  }, {});
  for (let num in count) {
    if (count[num] % 2 !== 0) {
      return +num;
    }
  }
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
