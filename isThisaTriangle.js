function isTriangle(a, b, c) {
  const arr = [a, b, c];
  const line = arr.sort((a, b) => a - b);
  return line[0] + line[1] > line[2];
}
console.log(isTriangle(4, 2, 3));

//Daha iyisi
function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  return a + b > c;
}
