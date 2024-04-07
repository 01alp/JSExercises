function addBinary(a, b) {
  const sum = a + b;
  return sum.toString(2);
}
console.log(addBinary(3, 5));
//
const addBinary2 = (a, b) => (a + b).toString(2);
