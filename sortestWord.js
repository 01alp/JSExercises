function findShort(s) {
  const min = s.match(/\b\w+(?:'\w+)?\b/g).map((match) => match.replace("'", '').length);
  console.log(min);
  return Math.min(...min);
}
console.log(findShort("Let's travel abroad shall we"));

// Better
function findShort2(s) {
  return Math.min(...s.split(' ').map((s) => s.length));
}
