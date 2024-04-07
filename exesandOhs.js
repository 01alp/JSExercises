function XO(str) {
  let countX = 0;
  let countY = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == 'x' || str[i] == 'X') {
      countX++;
    }
    if (str[i] == 'o' || str[i] == 'O') {
      countY++;
    }
  }
  return countX == countY;
}

console.log(XO('zzoo'));

//Better solution
function XO2(str) {
  return str.toLowerCase().split('x') === str.toLowerCase().split('o').length;
}
