function findNeedle(haystack) {
  const needle = haystack.indexOf('needle');
  return `found the needle at position ${needle}`;
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
