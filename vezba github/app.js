const niz = [1, 2, 3, 4, 5, 8];

const rezultat = niz.reduce(function (akumulator, vrednost) {
  return akumulator + vrednost / niz.length;
}, 0);

console.log(rezultat);
