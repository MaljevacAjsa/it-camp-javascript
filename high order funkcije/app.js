//rade samo na nizovima
//tj metode
//ima ih 4

//const companies = [
//   {}
// {}
//{}
//]

//forEach
//map
//filter
//reduce

const destinacije = [
  //  {name:"ulcin",
  //"marokou",
  // "tutin"},
  // {ime:"bechhh",
  //"sjenica",
  // "italija"},
  //"japanese",
  // "egipat fr fr",
];

//for (mesta in destinacije) {
//console.log(destinacije[mesta]);
// }

destinacije.forEach(function (ime, broj) {
  console.log(ime, broj);
});

var niz = [1, 2, "3", true, [4, 5, 6]];
const noviNiz = niz.filter((value) => typeof value === "number");
const noviniz = niz.filter((value) => typeof value === "string");

const mapNiz = niz.map((banana, index) => index * 2);
console.log(mapNiz);

console.log(noviniz);
console.log(noviNiz);

//map

//const destinacijeimena = destinacije.map(function(name)) {
//   return name.name
function (){}
//}

const ajsa = (value) => value;



console.log(ajsa("radi"));
