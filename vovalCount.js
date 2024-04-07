// function getCount(str) {
//   const array = str.split('');
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (/[a,e,i,o,u]/.test(array[i])) {
//       count++;
//     }
//     return count;
//   }
// }
// console.log(getCount('teest'));

function getCount(str) {
  const array = str.split('');
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (/[aeiou]/.test(array[i])) {
      count++;
    }
  }
  return count;
}
console.log(getCount('teest')); // Output: 2

//Baska
function getCount2(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

//
function getCount3(str) {
  return str.sp;
  lit('').filter((c) => 'aeiouAEIOU'.includes(c)).length;
}

//
function getCount4(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
