const numbers = [1, 2, 3, 5];

let total = 0;
numbers.forEach((number) => (total += number));

console.log(total);

let total2 = numbers.reduce((toplayici, number) => toplayici + number, 5);

console.log(total2);

const basket = [
  {
    name: 'Iphone 8',
    price: 7000,
  },
  {
    name: 'Harman/Kardon',
    price: 2500,
  },
];

let tutar = basket.reduce((toplam, fiyat) => toplam + fiyat.price, 0);
console.log(tutar);

const names = ['Tayfun', 'Mehmet', 'Ahmet', 'Gokhan', 'Tayfun'];

let kackere = names.reduce((tumIsimler, isim) => {
  if (isim in tumIsimler) {
    tumIsimler[isim]++;
  } else {
    tumIsimler[isim] = 1;
  }
  return tumIsimler;
}, {});

console.log(kackere);

const products = [
  {
    name: 'Mikrofon',
    brand: 'Rode',
  },
  {
    name: 'Iphone XS',
    brand: 'Apple',
  },
  {
    name: 'Yaka mikrafonu',
    brand: 'Rode',
  },
  {
    name: 'Keyboard',
    brand: 'M-Audio',
  },
];
let group = 'brand';
let markaGrubu = products.reduce((acc, item) => {
  let key = item['brand'];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {});
console.log(markaGrubu);

const post = [
  {
    title: 'Post 1',
    tags: ['php', 'css'],
  },
  {
    title: 'Post 2',
    tags: ['JavaScript', 'Html5'],
  },
  {
    title: 'Post 3',
    tags: ['html5', 'json'],
  },
];

const allTags = post.reduce((acc, post) => [...acc, ...post.tags], []);
console.log(allTags);

const array2 = ['a', 'b', 'b', 'c', 'a', 'd', 'e', 'e', 'd', 'e'];
const result = array2.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);
console.log(result);

const numbers2 = [-5, 6, 2, 0];
// const totals = numbers2.filter((number) => number > 0).map((number) => number * 2);
// console.log(totals);
const zertabox = numbers2.reduce((acc, number) => {
  if (number > 0) {
    acc.push(number * 2);
  }
  return acc;
}, []);
console.log(zertabox);
