function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let directioncount = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  walk.forEach((direction) => {
    directioncount[direction]++;
  });
  if (directioncount.n === directioncount.s && directioncount.e === directioncount.w) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
//--------------

function isValidWalk2(walk) {
  var res = { n: 0, w: 0, s: 0, e: 0 };
  walk.forEach((c) => res[c]++);
  return walk.length === 10 && res.n == res.s && res.e == res.w;
}
