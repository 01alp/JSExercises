function tribonacci(signature, n) {
  if (n == 0) return [];
  if (n < 3) return signature.slice(0, n);

  const tri = signature.slice(0, 3);
  for (let i = 3; i < n; i++) {
    tri.push(tri[i - 3] + tri[i - 2] + tri[i - 1]);
  }
  return tri;
}
console.log(tribonacci([1, 1, 1], 10));
