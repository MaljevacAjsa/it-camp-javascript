const mimz = document.querySelector(".h2");
mimz.innerText = "merima naaaaaachaaaa";
mimz.style.margin = "20px";
mimz.className = "h2";

function brr() {
  mimz.addEventListener("click", function () {
    mimz.style.color = "blue";
    const blabla = document.createElement("div");
    blabla.className = "h11";
    blabla.innerText = "I JOS JACA";
    mimz.appendChild(blabla);
    const deletee = document.createElement("div");
    deletee.innerText = "delete";
    deletee.className = "delete";
    mimz.appendChild(deletee);
    blabla.style.backgroundColor = "white";
    deletee.addEventListener("click", function () {
      blabla.remove();
      console.log(blabla);
    });
  });
}

brr();
