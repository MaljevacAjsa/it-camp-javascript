const paragraf = document.getElementById("paragraf");
paragraf.innerText = "tekst neki";
paragraf.style.color = "blue";
paragraf.style.backgroundColor = "red";
paragraf.style.fontSize = "30px";
paragraf.style.borderColor = "purple";
paragraf.style.borderWidth = "10px";
paragraf.style.padding = "20px";
paragraf.style.margin = "0px";
paragraf.style.display = "flex";
paragraf.style.justifySelf = "block";

const div = document.getElementById("div");
div.style.color = "white";
div.style.backgroundColor = "orange";
div.style.fontSize = "35px";
div.style.padding = "30px";
div.style.margin = "10px";
div.style.borderStyle = "dashed";
div.style.borderWidth = "10px";
div.style.borderLeftColor = "red";
div.style.borderRightColor = "red";
div.style.fontFamily = "Arial";

// const liste = document.getElementByClassName("list");
// list.style.color = "red";
// list.style.backgroundColor = "blue";

const lists = document.getElementsByTagName("li");
// lists[1].style.fontSize = "20px";

for (let i = 0; i < lists.length; i++) {
  lists[i].style.color = "blue";
}
