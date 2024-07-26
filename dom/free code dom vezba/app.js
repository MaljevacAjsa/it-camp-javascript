//Get Element By Id ()

// const title = document.getElementById("main-heading");
// console.log(title);

//Get Elements By Class Name ()

// const listItems = document.getElementsByClassName("list-items");
// console.log(listItems);

//Get Elements By Tag Name ()

// const listItems = document.getElementsByClassName("li");
// console.log(listItems);

//Query Selector

// const container = document.querySelector("div");

// console.log(container);

//Query Selector All

// const container = document.querySelectorAll("div");

// console.log(container);

const title = document.querySelector("#main-heading");
title.style.color = "blue";

const listItems = document.querySelectorAll(".listItems");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "25px";
  listItems[i].style.color = "red";
  listItems[i].style.fontFamily = "arial";
}

console.log(listItems);

//Adding elements

const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li);

//Modifying the text

li.innerText = "X-MEN";

//Modifying attributes and classes

li.setAttribute("class", "listItems");

// const firstListItem = document.querySelector(".listItems");
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);
const obj = { name: "ajsa", funk: function () {} };
