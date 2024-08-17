// console.log(x);
// var x = 10;

// pozivanje funkcije pre nego sto je definisana moze u ES5 (hoisting) a ne u ES6 tj arrow funkcije su novi nacin

// kako funkcionise js?
//arrow function je novi nacin tj ES6

const buttons = document.getElementsByClassName("dugme-broj");
const input = document.querySelector(".input");

buttons.addEventListener("click", function () {
  input.style.backgroundColor = "red";
});
