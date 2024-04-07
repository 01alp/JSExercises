var countSheep = function (num) {
  let text = [];
  for (let i = 1; i <= num; i++) {
    text.push(`${i} sheep...`);
  }
  return text.join('');
};

console.log(countSheep(5));

//Str ile
var countSheep2 = function (num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
