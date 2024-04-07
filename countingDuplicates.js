function duplicateCount(text) {
  text = text.toLowerCase();
  let count = 0;
  const counter = text.legth;
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) !== text.lastIndexOf(text[i]) && text[i] !== '&') {
      text = text.replaceAll(text[i], '&');
      count++;
    }
  }

  return count;
}

//Better with match and regex
function match(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/(.)\1+/g) || []
  ).length;
}
console.log(match('ddaabbbcca'));
console.log(duplicateCount('ddaabbbcca'));
