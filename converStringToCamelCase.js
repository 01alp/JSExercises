function toCamelCase(str) {
  return str.replace(/[-_]./g, (match) => match[1].toUpperCase());
}
console.log(toCamelCase('the-steal_th-warrior'));
