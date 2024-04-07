var countBits = function (n) {
  let bit = n.toString(2);
  let count = 0;
  for (i = 0; i < bit.length; i++) {
    if (bit[i] == 1) {
      count++;
    }
  }
  return count;
};

console.log(countBits(1234));
//-----------------
var countBits2 = function (n) {
  return n.toString(2).replace(/0/g, '').length;
};
