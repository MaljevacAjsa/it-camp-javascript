const forma = document.forms["myForm"];
const email = document.forms["myForm"]["email"];
const pass = document.forms["myForm"]["email"];
const submitt = document.forms["myForm"]["submitt"];
const password = document.forms["myForm"]["password"];
const passwordP = document.forms["myForm"]["passwordP"];

function inputCheck() {
  if (email.value.length < 8) {
    alert("Email must contain at least eight characters.");
  }

  if (password.value.length < 6) {
    alert("Password must contain at least six characters.");
  }

  if (password.value !== passwordP.value) {
    alert("Password does not match.");
  }
}

// for (let i = 0; i <= 6; i++) {
//     password = i;
//   }

email.style.backgroundColor = "lightBlue";
password.style.backgroundColor = "lightBlue";
passwordP.style.backgroundColor = "lightBlue";
submitt.style.backgroundColor = "lightBlue";
submitt.style.color = "darkBlue";
submitt.style.borderRadius = "6px";
submitt.style.padding = "5px";
submitt.style.marginLeft = "19px";
email.style.margin = "15px";
password.style.margin = "15px";
passwordP.style.margin = "15px";
email.style.padding = "5px";
email.style.borderRadius = "6px";
passwordP.style.borderRadius = "6px";
password.style.borderRadius = "6px";
password.style.padding = "5px";
passwordP.style.padding = "5px";
passwordP.style.border = "5px";

forma.style.display = "flex";
forma.style.alignItems = "center";
forma.style.justifyContent = "center";

forma.style.fontFamily = "arial";
