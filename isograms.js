function isIsogram(str) {
  const lowercase = str.toLowerCase();
  const myset = new Set(lowercase);
  const str1 = [...myset].join('');
  return lowercase === str1;
}

console.log(isIsogram(''));
