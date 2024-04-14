function reverseWords(str) {
  return str
    .split(' ')
    .map((key) => key.split('').reverse().join(''))
    .join(' ');
}
console.log(reverseWords('The  quick brown fox jumps over the lazy dog.'));
