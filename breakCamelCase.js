function solution(string) {
  const text = string.replace(/[A-Z]/g, (match) => ' ' + match);
  return text;
}

console.log(solution('camelCasing'));

//Better
function solution2(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

function solution3(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}

const solution4 = (string) => string.replace(/[A-Z]/g, ' $&');
