function duplicateEncode(word) {
  word = word.toLowerCase();
  let encoded = '';
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      encoded += '(';
    } else {
      encoded += ')';
    }
  }
  return encoded;
}

console.log(duplicateEncode('recede'));

//with Replace
function duplicateEncode2(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) => (word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')'));
}
