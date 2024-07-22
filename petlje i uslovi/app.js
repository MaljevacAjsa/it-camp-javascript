//USLOVI

//if/else if/else

let vecibroj = 10;
let manjibroj = 5;
if (vecibroj > manjibroj) {
  console.log(true);
} else {
  console.log(false);
}

//if (mesec === 1) {
//  console.log(januar)
//console.log(mesec === 2)
//console.log(februar)
//} else if (mesec===3){
//   console.log(mart)}
//else {
//      //  console.log("Meseci u godini nisu pronadjeni")
//  }
//}

//switch
//kad ima vise uslova
let mesec = 3;

switch (mesec) {
  case 1:
    console.log("januar");
    break;
  case 2:
    console.log("Februar");
    break;
  case 3:
    console.log("Mart");
    break;
  default:
    console.log("Meseci u godini nisu pronadjeni");
}

//PETLJE

//uvecavanje
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//umanjivanje
for (let o = 10; o >= 1; o--) {
  console.log(o);
}

for (let a = 1; a <= 10; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

for (let a = 1; a <= 10; a++) {
  if (a % 2) console.log(a);
}

for (i = 0; i <= 6; i++) {
  console.log(i);
}

const imena = ["ajsa", "saladin", "ajla", "tedi"];
for (i = 0; i < imena.length; i++) {
  console.log(i, imena[i]);
}

for (i = 0; i < 6; i++) {
  console.log("saki+ajsa");
}

for (i = 0; i < 6; i++) {
  console.log("saki+ajsa" + i);
}

let nesto = 0;
for (i = 0; i < 11; i++) {
  nesto = nesto + i;
}
console.log(nesto);

for (let a = 1; a < 10; a++) {
  if (a % 2) console.log(a);
}

for (let a = 1; a <= 10; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

for (i = 0; i < 100; i++) {
  if (i % 2) console.log(i);
}

for (i = 0; i < 100; i++) {
  if (i % 2 === 0) console.log("ajsa" + "saki" + i);
}

for (i = 0; i <= 50; i++) {
  if (i % 5 === 0) console.log("Ovaj broj je deljiv sa 5 " + i);
}

for (i = 0; i <= 50; i++) {
  if (i % 5) console.log("Ovaj broj je deljiv sa 5 " + i);
}

const AISD = [
  "Khadidza",
  "Hafsna",
  "Jasmin",
  "Halima",
  "Jasina",
  "Ahsena",
  "Dzamil",
  "Zakarija",
  "Iljas",
  "Jahja",
  "Dzamil",
];

for (let ime in AISD) {
  console.log(AISD[ime]);
}

const oci = [
  "crne",
  "crnse",
  "najcrnje",
  "hejzel",
  "zelene",
  "bas svetle braon",
  "bas jako zelene",
  "tamno crne",
  "S boja ociju",
  "A boja ociju",
];

for (let bojaOciju in oci) {
  console.log(oci[bojaOciju]);
}

const destinacije = [
  "ulcin",
  "marokou",
  "tutin",
  "bechhh",
  "sjenica",
  "italija",
  "japanese",
  "egipat fr fr",
];

for (mesta in destinacije) {
  console.log(destinacije[mesta]);
}

destinacije.forEach(function (ime, broj) {
  console.log(ime, broj);
});
