var uniqueInOrder = function (iterable) {
  //If iterable is not array is a string:
  if (typeof iterable === 'string') {
    iterable = iterable.split('');
  }
  let result = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
};

console.log(uniqueInOrder([1, 2, 2, 4, 4, 5, 5, 6, 6, 7]));

// Baska cozum
var uniqueInOrder2 = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
