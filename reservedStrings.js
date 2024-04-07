function solution(str) {
  let arr = str.split('').reverse().join('');
  return arr;
}
console.log(solution('testing'));

//return ayni sirada yazilabilir
function solution1(str) {
  return str.split('').reverse().join('');
}

//Arrow function ile
const solution2 = (str) => str.split('').reverse().join('');

//Array'e ekleyerek
const solution3 = (s) => [...s].reverse().join('');
