function persistence(num) {
  if (num < 10) return 0;
  let count = 0;
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .reduce((sum, digit) => sum * Number(digit));
    count++;
  }
  return count;
}
console.log(persistence(999));
