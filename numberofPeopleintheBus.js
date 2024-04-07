var number = function (busStops) {
  return busStops.reduce((sum, [on, off]) => sum + on - off, 0);
};
console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

//Map ile:
var number2 = function (busStops2) {
  return busStops.map((x) => x[0] - x[1]).reduce((x, y) => x + y);
};
let sum = 0;
let number3 = (busStops) => busStops.map(([x, y]) => x - y).reduce((x, y) => x + y);
console.log(
  number3([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
