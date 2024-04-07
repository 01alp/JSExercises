function findAverage(array) {
  let sum = 0;
  for (let n of array) {
    sum += n;
  }
  return (avarage = sum / array.length || 0);
}

console.log(findAverage([1, 1, 1]));
