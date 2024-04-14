function basicOp(operation, value1, value2) {
  const sum = {
    '+': () => value1 + value2,
    '-': () => value1 - value2,
    '*': () => value1 * value2,
    '/': () => value1 / value2,
  };
  return sum[operation]();
}
console.log(basicOp('/', 5, 5));
// funksiyonlar olmadan da yazilabirdi!
