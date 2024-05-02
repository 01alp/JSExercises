function betterThanAverage(classPoints, yourPoints) {
  const average = classPoints.reduce((acc, val) => acc + val, 0) / classPoints.length;
  return yourPoints > average;
}

console.log(betterThanAverage([5, 5, 5], 1));
