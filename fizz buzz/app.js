for (i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}

const tekst = "dobar Dan . Kako Ste";
let velikaSlova = "";
for (i = 0; i < tekst.length; i++) {
  if (tekst[i] >= "A" && tekst[i] <= "Z") {
    velikaSlova += tekst[i];
  }
}
console.log(velikaSlova);

function isUpperCase(slovo) {
  return slovo === slovo.toUpperCase();
}

const tekst1 = "dobar Dan Kako Ste";
let velikaSlova1 = "";
for (i = 0; i < tekst1.length; i++) {
  if (isUpperCase(tekst1[i])) {
    velikaSlova1 += tekst1[i];
  }
}

console.log(velikaSlova1);
