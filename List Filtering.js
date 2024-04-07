//! Array list filtering
filter_list([1, 2, 'a', 'b']) == [1, 2];
filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15];
filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123];
//alttaki olmadi sadece numaralari donduruyor
function filter_list(l) {
  const regex = /^[0-9]+$/;
  const numbers = l.filter((num) => regex.test(num));
  return numbers;
}
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));

function filter_list2(l) {
  const numbers = [];
  l.forEach((element) => {
    if (typeof element === 'number') {
      numbers.push(element);
    }
  });
  return numbers;
}

console.log(filter_list2([3, 6, 'yrt']));
//
function filter_list3(l) {
  return l.filter((element) => typeof element === 'number');
}
//Benzeri
function filter_list5(l) {
  return l.filter(function (v) {
    return typeof v == 'number';
  });
}
//
function filter_list4(l) {
  return l.filter((element) => !isNaN(element));
}
//for loop
function filter_list(l) {
  const numbers = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      numbers.push(l[i]);
    }
  }
  return numbers;
}
