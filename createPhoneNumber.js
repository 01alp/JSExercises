function createPhoneNumber(numbers) {
  const first = numbers.slice(0, 3).join('');
  const second = numbers.slice(3, 6).join('');
  const third = numbers.slice(6, 10).join('');
  return `(${first}) ${second}-${third}`;
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
