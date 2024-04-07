function noSpace(x) {
  return x.trim().replace(/\s/g, '');
}
console.log(noSpace('8aaaaa dddd r     '));

//baska cozum
const noSpace2 = (x) => x.replace(/\s/g, '');
console.log(noSpace2('8aaaaa dddd r     '));
