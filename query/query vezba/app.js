const paragraf = document.querySelector("#paragraf");

// function promeniBoju() {
//   paragraf.style.color = "red";
// }
// function uvecaj() {
//   paragraf.style.fontSize = "15px";
// }

// function promeni() {
//   paragraf.style.fontFamily = "arial";
//   paragraf.style.color = "green";
//   paragraf.style.fontSize = "30px";
// }

// function promeni() {
//   const boja = Math.random();
//   paragraf = "";
//   if (boja > 0 / 3 && boja <= 1 / 3) {
//     paragraf.style.color = "red";
//   } else if (boja > 1 / 3 && boja <= 2 / 3) {
//     paragraf.style.color = "green";
//   } else if (boja > 2 / 3 && boja <= 3 / 3) {
//     paragraf.style.color = "blue";
//   }
// }

// console.log(paragraf);

// boja = ["blue", "red", "green"];

// function promeni(boja) {
//   for (let i = 0; i < boja.length; i++) {
//     paragraf.style.color = [i];
//   }
// }

function promeni(boja) {
  paragraf.style.color = boja;
}
