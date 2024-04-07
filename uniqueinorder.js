var uniqueInOrder = function (iterable) {
  const tostring = Array.isArray(iterable) ? iterable.join('') : iterable;
  return tostring.replace(/(.)\1+/g, '$1').split('');
};
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
//Failed at number arrays

var uniqueInOrder2 = function (iterable) {
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
};
console.log(uniqueInOrder2('AAAABBBCCDAABBB'));

//en iyi cozum
var uniqueInOrder3 = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
