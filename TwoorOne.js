function longest(s1, s2) {
  const s3 = s1 + s2;
  //let a = s1.match(/(.)\1+/g);
  const s4 = [...new Set(s3.split(''))].sort().join('');
  return s4;
}
console.log(longest(('aretheyhere', 'yestheyarehere')));

//Better

const longest2 = (s1, s2) => [...new Set(s1 + s2)].sort().join('');
console.log(longest2(('aretheyhere', 'yestheyarehere')));
