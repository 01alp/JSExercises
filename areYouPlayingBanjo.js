function areYouPlayingBanjo(name) {
  if (name.match(/^r/i)) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlayingBanjo('rAdamr'));

// Better
function areYouPlayingBanjo2(name) {
  return name + (/^r/i.test(name) ? 'plays' : 'does not play ') + 'banjo';
}
//oneline
let areYouPlayingBanjo3 = (name) => name + ` ${(/^r/i.test(name) ? 'plays' : 'does not play') + ' banjo'}`;
console.log(areYouPlayingBanjo3('Raulf'));
