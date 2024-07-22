const niz = [1, 2, 3, 4, 5];

// const rezultat = niz.reduce(function (akumulator, vrednost) {
//   return akumulator + vrednost / niz.length;
// }, 0);

let rezultat = 0;

for (i = 0; i <= niz.length; i++) {
  rezultat = rezultat + i;
}

console.log(rezultat / niz.length);
