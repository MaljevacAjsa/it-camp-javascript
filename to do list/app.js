const form = document.getElementById("forms");
const at = document.getElementById("at");
const list = document.getElementById("ul");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value;

  if (text !== "") {
    dodaj(text);
    input.value = "";
  }
});

let clicked = false;
const dodaj = (text) => {
  const task = document.createElement("li");
  task.className = "boxevi";
  task.innerHTML = ` <input class="check-box" type="checkbox">
${!clicked ? `<p class="text">${text}</p>` : `<input type='text'/>`}
  
<button class="del"> Delete </button>
 <button class="edit"> Edit </button>
`;

  const checkBox = task.querySelector(".check-box");
  checkBox.className = "check-box";
  checkBox.addEventListener("click", function () {
    text.textDecoration = "line-through";

    console.log(text);
  });

  const del = task.querySelector(".del");
  del.addEventListener("click", function () {
    task.remove();
  });
  list.appendChild(task);

  const edit = document.querySelector(".edit");
  edit.addEventListener("click", function () {
    clicked = true;
    task.innerHTML = `
    ${
      !clicked
        ? `<p class="text">${text}</p>`
        : `<input type='text' class='new-input' value="${text}"/>`
    }
      
    <button class="del"> Delete </button>
     <button class="save"> Save </button>
    `;
  });

  const save = document.querySelector(".save");
  save.addEventListener("click", function () {
    clicked = false;
    const newValueInput = document.querySelector(".new-input").value;
    task.innerHTML = `
        <p class="text">${newValueInput}</p>
      
    <button class="del"> Delete </button>
     <button class="edit"> Edit </button>
    `;
  });
};

// CHECK MARK BUTTON
// const completedButton = document.createElement("button");
// completedButton.innerHTML = `<i class="fas fa-check"></i>`;
// completedButton.classList.add("complete-btn");
// list.appendChild(completedButton);

//EDIT NAPRAVI

// at.addEventListener("mouseover", function (event) {
//   event.preventDefault();
//   at.style.cursor = "pointer";
// });

// at.addEventListener("click", function () {});

// del.addEventListener("mouseover", function (event) {
//   event.preventDefault();
//   del.style.cursor = "pointer";
// });

// del.addEventListener("click", function () {
//   boxevi.remove();
//   console.log(input);
// });

// checkb.addEventListener("check", function () {
//   boxevi.remove();
//   console.log(input);
// });

//form?
//
