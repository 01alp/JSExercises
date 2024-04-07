function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number);
  console.log(nums);
  const j = Math.min(...nums);
  const i = Math.max(...nums);
  return `${i} ${j}`;
}

console.log(highAndLow('1 2 3 4 5'));

//Better
function highAndLow2(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
