function order(words) {
  return words
    .split(' ')
    .reduce((sum, val) => {
      const index = val.match(/\d/) - 1;
      console.log(index);
      sum[index] = val;
      return sum;
    }, [])
    .join(' ');
}
console.log(order('is2 Thi1s T4est 3a'));

//Sort ile
function order2(words) {
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ');
}
console.log(order2('is2 Thi1s T4est 3a'));
