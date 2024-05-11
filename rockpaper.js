const rps = (p1, p2) => {
  const ar = ['rock', 'paper', 'scissors'];
  if (p1 === p2) {
    return 'Draw!';
  } else if ((p1 === ar[0] && p2 === ar[2]) || (p1 === ar[1] && p2 === ar[0]) || (p1 === ar[2] && p2 === ar[1])) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

console.log(rps('rock', 'scissors'));
