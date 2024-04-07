function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return []; // Return an empty array for null or empty input
  }

  let counter = [];
  let count = 0;
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    }
    if (input[i] < 0) {
      sum += input[i];
    }
  }

  if (count !== 0 || sum !== 0) {
    counter.push(count, sum);
  }

  return counter;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));

// !input: This condition checks if the input variable is falsy.In JavaScript,
// null, undefined, 0, an empty string(''), and NaN are considered falsy values.
// By using!input, we check if input is any of these falsy values.If it is, the condition
// evaluates to true.

//Baska
function countPositivesSumNegatives2(input) {
  return input && input.length ? [input.filter((p) => p > 0).length, input.filter((n) => n < 0).reduce((a, b) => a + b, 0)] : [];
}

//with reduce
function countPositivesSumNegatives3(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce(
    (arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    },
    [0, 0]
  );
}
