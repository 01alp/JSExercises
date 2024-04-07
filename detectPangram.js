function isPangram(string) {
  string = string.toLowerCase();
  const unique = new Set(string.replace(/[^a-z]/g, ''));
  const next = [...unique].join('');
  return next.length === 26;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
//Match ile
function isPangram2(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}
