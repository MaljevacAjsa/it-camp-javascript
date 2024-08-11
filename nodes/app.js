const paragraf = document.createElement("p");
const div = document.createElement("div");
const text = document.createTextNode("Paragraf");
// text.style.fontFamily = "arial";
div.appendChild(paragraf);
paragraf.appendChild(text);
const body = document.body;
body.appendChild(div);
console.log(div);
const paragraf2 = document.createElement("p");
const div2 = document.createElement("div");
div2.appendChild(paragraf2);
paragraf2.innerText = "Ovaj tekst menja boju.";
const recenica = document.createTextNode(" Sad je crven.");
paragraf2.appendChild(recenica);
console.log(paragraf2);
body.appendChild(div2);
paragraf2.style.color = "red";
paragraf2.style.fontFamily = "arial";

const a = 5;
const b = 7;
// function saberi(a, b) {
//   return a + b;
// }
console.log(a);
console.log(b);
const dugme = document.createElement("button");
const div3 = document.createElement("div");
dugme.innerHTML = "plavo";
dugme.style.borderRadius = "6px";
dugme.style.border = "none";
dugme.style.backgroundColor = "blue";
dugme.style.color = "white";
dugme.style.padding = "5px";
dugme.style.fontSize = "16px";
dugme.style.margin = "5px";
div3.appendChild(dugme);
const body2 = document.body;
body2.appendChild(div3);

dugme.addEventListener("click", function () {
  paragraf2.style.color = "blue";
  div2.style.backgroundColor = "darkBlue";
  paragraf.innerText = "sad je plav";
});

const dugme4 = document.createElement("button");
dugme4.innerText = "zeleno";
dugme4.style.borderRadius = "6px";
dugme4.style.border = "none";
dugme4.style.backgroundColor = "green";
dugme4.style.color = "white";
dugme4.style.padding = "5px";
dugme4.style.margin = "5px";
dugme4.style.fontSize = "16px";
div3.appendChild(dugme4);

const dugme5 = document.createElement("button");
dugme5.innerText = "crveno";
dugme5.style.borderRadius = "6px";
dugme5.style.border = "none";
dugme5.style.backgroundColor = "red";
dugme5.style.color = "white";
dugme5.style.fontSize = "16px";
dugme5.style.padding = "5px";
dugme5.style.margin = "5px";
div3.appendChild(dugme5);
dugme5.addEventListener("click", function () {
  paragraf2.style.color = "red";
  div2.style.backgroundColor = "darkRed";
});

dugme4.addEventListener("click", function () {
  paragraf2.style.color = "green";
  div2.style.backgroundColor = "darkGreen";
});

div2.style.backgroundColor = "lightGreen";
div2.style.padding = "10px";
div2.style.margin = "10px";
div2.style.borderRadius = "20px";
