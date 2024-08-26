// console.log(x);
// var x = 10;

// pozivanje funkcije pre nego sto je definisana moze u ES5 (hoisting) a ne u ES6 tj arrow funkcije su novi nacin

// kako funkcionise js?
//arrow function je novi nacin tj ES6

//{ pass by value vazi za proste podatke (primitivne)
// pass by reference (niz,objekat,funkcija)
// EVAl
// } VIDEO POGLEDAJ NA YOUTUBE
// legacy algoritmi i algoritmi generalno

const input = document.querySelector(".input");
const resetDugme = document.querySelector("#c");
const jednak = document.querySelector(".jednako");

function klik(value) {
  input.value += value;
}

function reset() {
  input.value = "";
}

function jednako() {
  let result = input.value;
  input.value = eval(result);
}

let a = [10, 2];
let b = a;
