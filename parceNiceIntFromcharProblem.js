const getAge = (str) => Number(str.split(' ').slice(0, 1));

//better
const getAge2 = (s) => +s[0];
const getAge3 = parseInt;
