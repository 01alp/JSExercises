var min = function (list) {
  return +Math.min(...list);
};

var max = function (list) {
  return +Math.max(...list);
};
let list = [-52, 56, 30, 29, -54, 0, -110];
console.log(min(list));
console.log(max(list));
