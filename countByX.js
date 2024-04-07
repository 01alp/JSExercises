function countBy(x, n) {
  let z = [];
  for (i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}
console.log(countBy(2, 5));
