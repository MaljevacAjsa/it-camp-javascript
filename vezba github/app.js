const niz = [1, 2, 3, 4, 5];

// const rezultat = niz.reduce(function (akumulator, vrednost) {
//   return akumulator + vrednost / niz.length;
// }, 0);

let rezultat = 0;

for (i = 0; i <= niz.length; i++) {
  rezultat = rezultat + i;
}

console.log(rezultat / niz.length);

const niz2 = ["ma", "ba", "va", "ta"];

const result = niz2.reduce(function (akumulator, vrednost) {
  return akumulator + vrednost;
});

console.log(result);

const buttonn = document.getElementById("dugme");
buttonn.style.color = "lightBlue";
buttonn.style.backgroundColor = "black";
buttonn.style.fontSize = "20px";
buttonn.style.display = "block";
buttonn.style.padding = "10px";
buttonn.style.visibility = "60%";

const mapiran = niz2.map(function (vrednost) {
  return vrednost.toUpperCase();
});
console.log(mapiran);

const mapirann = mapiran.reduce(function (akumulator, vrednost) {
  return akumulator + vrednost;
});

console.log(mapirann);

const prof = document.getElementById("prof");
prof.style.color = "darkGreen";

const niz3 = [1, 2, 3, 4, 5];

const niz3Redusovan = niz3.reduce(function (akumulator, vrednost) {
  return akumulator + vrednost / niz3.length;
});

console.log(niz3Redusovan);

const slova = document.getElementById("#slova");
slova.style.color = "blue";

console.log(!0);
