//"Bubble Sort" algorithm
function descendingOrder1(n) {
  const outPut = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] > n[j]) {
        const temp = n[i];
        n[i] = n[j];
        n[i] = temp;
      }
    }
    outPut.push(n[i]);
  }
  return outPut;
}

console.log(descendingOrder1([5, 4, 2, 3, 6]));

//Swap ile
function descendingOrder2(n) {
  const outPut = [];
  const swap = (a, b) => [b, a];
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] < n[j]) {
        [n[i], n[j]] = swap(n[i], n[j]);
      }
    }
    outPut.push(n[i]);
  }
  return outPut;
}

console.log(descendingOrder2([5, 4, 2, 3, 6]));

//Array Sort

function descendingOrder3(n) {
  return n.sort((a, b) => b - a);
}

console.log(descendingOrder3([5, 4, 2, 3, 6]));

//Number to string
function descendingOrder(n) {
  const num = n.toString().split('');
  return Number(num.sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(0));

//Baska:
function descendingOrder4(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}
