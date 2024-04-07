function abbrevName(name) {
  return name.replace(/(^\w)\w*\s(\w)\w*/, '$1.$2').toUpperCase();
}
console.log(abbrevName('Sam Harris'));

//Map ile
function abbrevName(name) {
  return name
    .split(' ')
    .map((i) => i[0].toUpperCase())
    .join('.');
}

// match ile
const abbrevName = (name) => name.match(/\b\w/g).join('.').toUpperCase();
