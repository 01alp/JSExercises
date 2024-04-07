function lovefunc(flower1, flower2) {
  if ((flower1 % 2 == 0 && flower2 % 2 != 0) || (flower1 % 2 != 0 && flower2 % 2 == 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(lovefunc(0, 1));

//baska
function lovefunc1(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

//baska
function lovefunc2(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

//oha
const lovefunc3 = (Ͼ, Ͽ) => !!((Ͼ & 1) ^ (1 & Ͽ));
