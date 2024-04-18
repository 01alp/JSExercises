function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) {
    return '';
  }

  const newarray = [];
  strarr.forEach((_, index) => {
    newarray.push(strarr.slice(index, index + k).join(''));
  });

  newarray.sort((a, b) => b.length - a.length);
  return newarray[0];
}
const strarr = ['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'];
const k = 2;
console.log(longestConsec(strarr, k));

//With reduce
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return currString.length > long.length ? currString : long;
  }, '');
}
