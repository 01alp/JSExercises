const simpleMultiplication = (number) => (number % 2 == 0 ? number * 8 : number * 9);
//better
const simpleMultiplication2 = (n) => n * (n % 2 ? 9 : 8);
