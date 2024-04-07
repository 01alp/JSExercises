function countSheeps(sheep) {
  let count = 0;
  for (let n of sheep) {
    if (n == true) {
      count++;
    }
  }
  return count;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

//Better
function countSheeps2(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
