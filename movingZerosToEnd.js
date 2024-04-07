function moveZeros(arr) {
  let count = 0;
  const nonZeros = arr.filter((zero) => zero !== 0);
  const find = arr.find((zero) => {
    if (zero === 0) {
      count++;
    }
  });
  const zeros = new Array(count).fill(0);
  return nonZeros.concat(zeros);
}

//Daha iyisi
var moveZeros2 = function (arr) {
  return arr.filter((zero) => zero !== 0).concat(arr.filter((zero) => zero === 0));
};
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
console.log(moveZeros2([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
