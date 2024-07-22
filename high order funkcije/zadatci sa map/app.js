const brojevi = [1, 2, 3, 4, 5];

const brojeviDuplirani = brojevi.map(function (dupli) {
  return dupli * 2;
});
console.log(brojeviDuplirani);

const brojeviDupliranii = brojevi.map(function (duplii) {
  return duplii * duplii;
});

console.log(brojeviDupliranii);

const reci = ["hello", "world", "javascript", "map"]; //toUpperCase

const velikoSlovoReci = reci.map((slova) => {
  return slova.toUpperCase();
});

console.log(velikoSlovoReci);

const fruits = ["apple", "banana", "cherry"];

const fruitss = fruits.map(function (fruit) {
  return fruit.length;
});

console.log(fruitss);

var ajsa = [1, 2, 3, 33];

const ajsaa = ajsa.map(function () {
  return ajsa * 2;
});

console.log(ajsaa);

const brojeviSlova = brojevi.map(function (brojeviSlovca) {
  return brojeviSlovca % 2 === 0;
});

console.log(brojeviSlova);

const prviBroj = 2;
const drugiBroj = 3;

const brr = 32;
const br = 22;

function operacija(a, b, c) {
  const oduzimanje = a - b;
  const sabiranje = a + b;
  if (c === "plus") {
    return sabiranje;
  } else if (c === "minus") {
    return oduzimanje;
  }
}

console.log(operacija(brr, br, "plus"));

console.log(operacija(prviBroj, drugiBroj, "minus"));

const nesto = (a, b) => {
  return a + b;
};

nesto(3, 1);

// filtrirati niz i vratiti novi  niz samo sa neparnim brojevima
const brojici = [1, 2, 3, 4, 5, 6];

const brojcici = brojici.filter((broj) => {
  if (broj % 2 !== 0) {
    return broj;
  }
});

console.log(brojcici);
