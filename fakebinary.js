function fakeBin(x) {
  return x.replace(/(\d)/g, (match) => (match < 5 ? 0 : 1));
}
console.log(fakeBin(45385593107843568));

//map ile
function fakeBin2(x) {
  return x
    .split('')
    .map((n) => (n < 5 ? 0 : 1))
    .join('');
}
console.log(fakeBin2(45385593107843568));
