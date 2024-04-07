function comp(a, b) {
  if (!a || !b || a.length !== b.length) {
    return false;
  }
  const squaredA = a.map((number) => number * number);
  squaredA.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  for (let i = 0; i < squaredA.length; i++) {
    if (squaredA[i] !== b[i]) {
      return false;
    }
  }

  // If all corresponding elements match, return true
  return true;
}
a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));

//Better
function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}
