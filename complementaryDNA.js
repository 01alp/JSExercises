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
