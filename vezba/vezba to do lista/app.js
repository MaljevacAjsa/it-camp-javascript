const buttton = document.querySelector(".buttton");
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const bbutton = document.querySelector(".bbutton");
h1.style.fontFamily = "arial";

buttton.addEventListener("click", function () {
  buttton.style.backgroundColor = "red";
  buttton.style.height = "35px";
  buttton.style.width = "65px";
  h1.style.color = "red";
  h1.innerText = "Sad je crveno.";
  buttton.innerText = "RED";
});

buttton.addEventListener("mouseover", function () {
  buttton.style.height = "40px";
  buttton.style.width = "80px";
  buttton.style.backgroundColor = "green";
  h1.innerText = "Sad  je zeleno.";
  buttton.innerText = "GREEN";
  h1.style.color = "green";
});

input.addEventListener("submit", function () {
  if (buttton.style.color === input.value) {
    alert("jes");
  }
});

bbutton.addEventListener("submit", function () {
  const text = input.value;
  if (text !== "") {
    console.log(text);
    input.value = "";
  }
});

bbutton.style.height = "40px";
bbutton.style.width = "80px";
