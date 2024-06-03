function stray(numbers) {
  const count = {};
  numbers.forEach((element) => {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  });
  for (const key in count) {
    if (count[key] === 1) {
      return Number(key);
    }
  }
}
console.log(stray([1, 1, 2]));

//Better
const stray2 = (nums) => nums.reduce((a, b) => a ^ b);
const stray3 = (numbers) => numbers.find((num) => numbers.indexOf(num) === numbers.lastIndexOf(num));
