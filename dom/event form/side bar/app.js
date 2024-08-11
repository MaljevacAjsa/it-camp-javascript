const dugmeSide = document.getElementById("open");
const divV = document.querySelector(".divVeci");
const dugmeX = document.querySelector(".dugmeX");

dugmeSide.addEventListener("click", function () {
  divV.style.display = "flex";
});
dugmeX.addEventListener("", function () {
  divV.style.display = "none";
});
