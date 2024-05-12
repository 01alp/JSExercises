const sumDigPow = (n, m) => {
  let numArray = [];
  for (let i = n; i <= m; i++) {
    if (i < 10) {
      numArray.push(i);
    } else {
      const sum = i
        .toString()
        .split('')
        .reduce((acc, number, index) => {
          return acc + Math.pow(number, index + 1);
        }, 0);

      if (sum === i) {
        numArray.push(i);
      }
    }
  }
  return numArray;
};

console.log(conPow(100, 150));
