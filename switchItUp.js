function switchItUp(number) {
  const words = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    0: 'Zero',
  };
  return words[number];
}

console.log(switchItUp(1));

//1 line
switchItUp2 = (n) => ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][n];
