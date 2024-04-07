function duplicateEncode(word) {
  let lower = word.toLowerCase();
  result = '';
  for (let i = 0; i < lower.length; i++) {
    let count = 0;
    for (let j = 0; j < lower.length; j++) {
      if (lower[j] === lower[i]) {
        count++;
      }
    }
    if (count > 1) {
      result += ')';
    } else {
      result += '(';
    }
  }
  return result;
}

console.log(duplicateEncode('(( @'));

//Using replace:
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) => (word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')'));
}

//Other solutions
function duplicateEncode3(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
//
