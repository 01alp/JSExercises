const reverseSeq = (n) => {
  const newarr = [];
  for (let i = n; i > 0; i--) {
    newarr.push(i);
  }
  return newarr;
};
console.log(reverseSeq(5));
