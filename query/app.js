// const paragraf = document.querySelector("#paragraf");
// paragraf.innerText = "tekst";
// paragraf.style.color = "blue";
// paragraf.style.fontSize = "25px";

const paragraf = document.querySelectorAll("#paragraf");

for (let i = 0; i < paragraf.length; i++) {
  paragraf[i].style.color = "blue";
}

console.log(paragraf);

const paragraf1 = document.querySelector("#paragraf");

for (let i = 0; i < paragraf.length; i++) {
  paragraf[1].style.color = "red";
}

const paragraf2 = document.querySelectorAll("#paragraf");

for (let i = 0; i < paragraf.length; i++) {
  paragraf[2].style.fontSize = "25px";
  paragraf[0].style.fontFamily = "arial";
  paragraf[0].style.color = "purple";
  paragraf[0].style.fontSize = "30px";
}

//event

//onclick

function promeniBoju() {
  paragraf.style.color = "red";
}
