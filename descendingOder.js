function descendingOrder(n) {
  const number = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return +number;
}
console.log(typeof descendingOrder(0));
