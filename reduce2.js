const numbers = [3, 6, 2, 9, 1];
let total = numbers.reduce((acc, val) => {
  //   console.log(acc);
  //   console.log(val);
  return acc + val;
}, 0);
//console.log(total);

const people = [
  {
    name: 'Dom Perry',
    age: '35',
  },
  {
    name: 'Andrew Wilksons',
    age: '47',
  },
  {
    name: 'Brian Walker',
    age: '27',
  },
];

const oldest = people.reduce((acc, val) => {
  if (val.age > acc) {
    return val.age;
  }
  return acc;
}, 0);
console.log(oldest);

const names = people.reduce((acc, val) => {
  acc.push(val.name.replace(/(\b\w)\w*\s*(\b\w)\w*/g, '$1$2'));
  return acc;
}, []);
const join = names.join(', ') + '.';
console.log(join);

const output = people.reduce((acc, val, index, array) => {
  const split = val.name.split(' ');
  let part = `${split[0][0]}${split[1][0]}`;
  if (index === array.length - 1) {
    part += '.';
  } else {
    part += ', ';
  }
  return acc + part;
}, '');

console.log(output);
