const ages = [33, 18, 12, 20, 65, 54, 55, 44, 11, 13, 32, 25, 17];

const agess = [];

for (let i = 0; i < ages.lenght; i++) {
  if (ages[i] > 18) agess.push(ages[i]);
  console.log(ages);
}

console.log(agess);

const oldAges = ages.filter(function (age) {
  return age >= 18;
});

console.log(oldAges);

const reci = ["j", "jn", "ee"];

const ageSum = ages.reduce(function (total, age) {
  return total + age;
});

console.log(ageSum);

const brojici = [1, 2, 3, 4, 5, 6];

const brojcici = brojici.filter((broj) => {
  if (broj % 2 !== 0) {
    return broj;
  }
});

const brojevi = [1, 2, 3, 4, 5];

const brojeviDupliranii = brojevi.map(function (duplii) {
  return duplii * duplii;
});

console.log(brojeviDupliranii);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersParni = numbers.filter((number) => {
  if (number % 2 === 0) return number;
});

console.log(numbersParni);

const people = [
  { name: "JOhn", age: 17 },
  { name: "Jane", age: 17 },
  { name: "Tom", age: 19 },
  { name: "Lucy", age: 30 },
];

const zbirLjudi = people.filter(function (covek) {
  return covek.age >= 18;
});
console.log(zbirLjudi);

const worldsFilter = [
  "apple",
  "banana",
  "cherry",
  "date",
  "fig",
  "elderbarry",
  "grape",
];

const wF = worldsFilter.filter(function (rec) {
  return rec.length > 5;
});

console.log(wF);

const parniBrojevi = [3, -1, 7, 2, -5, 8];

const zbirParnih = parniBrojevi.reduce(function (total, broj) {
  if (broj > 0) {
    return broj + total;
  }
  return total;
}, 0);

console.log(zbirParnih);

const niz = [1, 2, 3, 4, 5, 6];
const niz1 = niz.reduce(function (total, broj) {
  return broj + total;
}, 0);

console.log(niz1);

const macka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mackaParna = macka.filter(function (maca) {
  return maca % 2 === 0;
});

console.log(mackaParna);

const mackaNeparna = macka.filter(function (maca) {
  return maca % 2;
});

console.log(mackaNeparna);

const mackaVeca = macka.filter(function (maca) {
  return maca > 5;
});

console.log(mackaVeca);

const mackaManja = macka.filter(function (maca) {
  return maca <= 5;
});

console.log(mackaManja);

const mackaZbir = macka.reduce(function (total, jedno) {
  return total + jedno;
});

console.log(mackaZbir);

const tedi = ["Tedo", "ajla", "Ajlica", "SElimehanka", "TEodor", "mesud"];

const teodor = tedi.filter(function (maca) {
  return maca.length > 5;
});

console.log(teodor);

const tedo = tedi.filter(function (maca) {
  return maca.length < 6;
});

console.log(tedo);

const tedisa = tedi.map(function (maca) {
  return maca.toUpperCase();
});

console.log(tedisa);

const tedisha = tedi.map(function (maca) {
  return maca.toLowerCase();
});

console.log(tedisha);

const mackaa = macka.map(function (maca) {
  return maca * maca;
});

console.log(mackaa);

const mackaaa = macka.map(function (maca) {
  return maca - (maca - 1);
});

console.log(mackaaa);

const ljudi = [
  { name: "JOhn", age: 17 },
  { name: "Jaane", age: 17 },
  { name: "Tom", age: 19 },
  { name: "Lucuy", age: 30 },
];

const ljudii = ljudi.filter(function (maca) {
  return maca.age > 17;
});

console.log(ljudii);

const ljudovi = ljudi.filter(function (maca) {
  return maca.name.length > 3;
});

console.log(ljudovi);

const ljudovii = ljudi.filter(function (maca) {
  return maca.age % 2 === 0;
});

console.log(ljudovii);

const ljuds = ljudi.filter(function (maca) {
  return maca.age % 2 !== 0;
});

console.log(ljuds);

const pipls = ljudi.filter(function (maca) {
  return maca.name.lenght < 4;
});

console.log(pipls);

const mapamama = ljudi.filter(function (maca) {
  return maca.age * 2;
});

console.log(mapamama);

const tedodorTreci = ["mali", "beba", "ruzan", "narandzast", "sladak"];

const malisha = tedodorTreci.map(function (maca) {
  return maca.toUpperCase();
});

console.log(malisha);

const mrnjau = ["boje", "oblici", "nijanse", "forma", "graficki"];

const mau = mrnjau.filter(function (maco) {
  return maco.length > 5;
});

console.log(mau);

mrnjau.splice(0, 1, "sto", "stocic", "hastal");
console.log(mrnjau);

mrnjau.pop();
console.log(mrnjau);

mrnjau.shift();

console.log(mrnjau);

mrnjau.push("mama");
console.log(mrnjau);

mrnjau.unshift("mama");
console.log(mrnjau);

const brkovi = [1, 2, 3, ...mrnjau, 2];
console.log(brkovi);

mrnjau.slice(1, 2);
console.log(mrnjau);
