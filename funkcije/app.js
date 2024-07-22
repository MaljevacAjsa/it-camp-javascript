//ES5
function sabiranje(a, b) {
  console.log(a + b);
}
sabiranje(54, 4);
sabiranje(1, 8);

function pozdrav(ime) {
  console.log("Pozdrav " + ime);
}
pozdrav("Saki");

function predstavljanje(ime, prezime) {
  console.log("Zdravo, ja sam " + ime + prezime);
}
predstavljanje("Ajla ", "Maljevac");
predstavljanje("Ajsa ", "Maljevac");
predstavljanje("Tedi ", "Maljevac");

function oduzimanje(a, b) {
  console.log(a - b);
}
oduzimanje(24, 33);
oduzimanje(67, 33);

function operacija(a, b, c) {
  console.log(a - (b + c));
}
operacija(22, 12, 5);

function razgovor(ime, prezime, godine, mesto) {
  console.log(
    "Zdravo ja sam " +
      ime +
      prezime +
      ".Imam" +
      godine +
      "godina. I dolazim iz" +
      mesto
  );
}

razgovor("Ajsa ", "Maljevac", " 19 ", " Novog Pazara.");

//ES6
//lambda-->
// ()=>
//function

const oduzimanjee = (a, b) => {
  console.log(a - b);
};

oduzimanjee(10, 5);

const racunanje = (a, b, c, d) => {
  console.log(a - b * (c + d));
};

racunanje(2, 3, 4, 5);

let ime = "Saladin";
let godine = "18";

console.log(`Zdravo ja se zovem ${ime} i imam ${godine} godina`);

let boja = "roza";
let zivotinja = "slon";

console.log(
  `Zdravo ja se zovem ${ime} i imam ${godine} godina. Moja omiljena boja je ${boja} i moja omiljena zivotinja je ${zivotinja}.`
);

let imence = "Ajsa ";
let prezimence = "Maljevac";

console.log("Zdravo, ja sam " + imence + prezimence);

//return provezbaj

//lambda=>

function pravougaonik() {
  let duzina = prompt("Unesi duzinu");
  let sirina = prompt("Unesi sirinu");
  console.log("Povrsina je ", duzina * sirina);
}

function mnozenje() {
  let duzina = prompt("unesi prvi broj");
  let sirina = prompt("unesti drugi broj");
  console.log("vas broj je", duzina * sirina);
}

//konvertovanje cel u faren
// 9/5 + 32

function konvertovanje(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(konvertovanje(30));

for (i = 0; i <= 6; i++) {
  console.log(i);
}

for (let a = 1; a <= 10; a++) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

let nesto = 0;
for (i = 0; i < 11; i++) {
  nesto = nesto + i;
}
console.log(nesto);
