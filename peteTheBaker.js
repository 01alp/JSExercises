function cakes(recipe, available) {
  const possible = Object.keys(recipe).map((key) => {
    if (key in available) {
      return Math.floor(available[key] / recipe[key]);
    }
    return 0;
  });
  const maxCakes = Math.min(...possible);
  return maxCakes;
}
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
