function friend(friends) {
  let frd = [];
  friends.map((value) => {
    if (value.length === 4) {
      frd.push(value);
    }
  });
  return frd;
}
console.log(friend(['Ryan', 'Kieran', 'Mark']));

//Better
function friend2(friends) {
  return friends.filter((n) => n.length === 4);
}
