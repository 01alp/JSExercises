function dnaStrand(dna) {
  return dna.replace(
    /[ATGC]/g,
    (match) =>
      ({
        A: 'T',
        T: 'A',
        G: 'C',
        C: 'G',
      }[match])
  );
}

console.log(dnaStrand('AAAA'));

//Better
let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
const DNAStrand = (dna) => dna.replace(/./g, (c) => pairs[c]);

const ltc = 'LiteCoin';
let sol = 'SOL';
const cryptos = {
  bitcoin: 3500,
  [ltc]: 100,
  [sol]: 1100,
};

console.log(cryptos.bitcoin);

let addProp = (obj, propName, val) => {
  obj[propName] = val;
  obj.propName = val + 1;
};

addProp(cryptos, 'DogCoin', 2500);

console.log(cryptos);
//DogCoin: 2500
//propName: 2501
