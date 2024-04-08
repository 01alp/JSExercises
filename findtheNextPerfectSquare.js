function findNextSquare(sq) {
  let sqr = Math.sqrt(sq);
  return sqr % 1 === 0 ? Math.pow(sqr + 1, 2) : -1;
}
console.log(findNextSquare(16));
