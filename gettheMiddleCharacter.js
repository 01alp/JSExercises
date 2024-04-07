function getMiddle(s) {
  const length = s.length;
  const middle = Math.floor(length / 2);
  if (length % 2 == 0) {
    return s[middle - 1] + s[middle];
  } else {
    return s[middle];
  }
}

function getMiddle2(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
console.log(getMiddle2('testi'));
