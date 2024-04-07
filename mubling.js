function accum(s) {
  let word = s.toLowerCase().split('');
  let result = word
    .map((value, index) => {
      return `${value.toUpperCase()}${value.repeat(index)}`;
    })
    .join('-');
  return result;
}
console.log(accum('test'));
//map ve join ile
