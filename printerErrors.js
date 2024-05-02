function printerError(s) {
  const matches = s.match(/[^a-m]/g);
  return `${matches ? matches.length : 0}/${s.length}`;
}
console.log(printerError('aaakkz'));

//Better
const printError2 = (s) => `${s.replace(/[a-m]/gi, '').length}/${s.length}`;

console.log(printError2('aaa'));
