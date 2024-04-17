String.prototype.toJadenCase = function () {
  return this.replace(/(^\w)|\s(\w)/g, (match) => match.toUpperCase());
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

//Other
String.prototype.toJadenCase2 = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  });
};
