class Zivotinja {
  constructor(ime) {
    this.ime = ime;
  }
  info() {
    console.log(`Ime ove zivotinje je ${this.ime}`);
  }
  zvuk() {
    console.log(`${this.ime} pravi neki zvuk`);
  }
}

class Pas extends Zivotinja {
  constructor(ime, rasa) {
    super(ime);
    this.rasa = rasa;
  }
  zvuk() {
    console.log(`${this.ime} laje`);
  }
}

const nekaZivotinja = new Zivotinja(`Neki pas`);
console.log(nekaZivotinja.zvuk());

const nekiPas = new Pas("Rex", "Pitbul");
console.log(nekiPas);

// polimorfizam
// nasledjivanje

class Objekat {
  constructor(vrstaObjekta, visina, duzina) {
    this.vrstaObjekta = vrstaObjekta;
    this.visina = visina;
    this.duzina = duzina;
  }
  info() {
    console.log(
      `Ovo je ${this.vrstaObjekta}, ona je ${this.visina} visoka i ${this.duzina} dugacka.`
    );
  }
}

const opis = new Objekat("zgrada", "8m", "10m");
opis.info();

class Zgrada extends Objekat {
  constructor(vrstaObjekta, visina, duzina, boja, brojStanova, sirina) {
    super(vrstaObjekta, visina, duzina);
    this.boja = boja;
    this.brojStanova = brojStanova;
    this.sirina = sirina;
  }

  info() {
    console.log(
      `Ovo je ${this.vrstaObjekta}, ona je ${this.visina} visoka i ${this.duzina} dugacka, ${this.boja} je boje. Ima ${this.brojStanova} sobe i siroka je ${this.sirina}.`
    );
  }
}

const informacije = new Zgrada("kuca", "3m", "6m", "zute", "4", "5m");
informacije.info();

class Ajla {
  constructor(ime, bojaKose, tipKose, visina) {
    this.ime = ime;
    this.bojaKose = bojaKose;
    this.tipKose = tipKose;
    this.visina = visina;
  }
  prt() {
    console.log(
      `On se zove ${this.ime}, ima ${this.tipKose} ${this.bojaKose} kosu i visok je ${this.visina}cm.`
    );
  }
}

const tedisa = new Ajla("Saladin", "uvijenu", "braon", "180");
tedisa.prt();

class Ajlicica extends Ajla {
  constructor(ime, bojaKose, tipKose, visina, bojaOciju, facialHair, godine) {
    super(ime, bojaKose, tipKose, visina);
    this.bojaOciju = bojaOciju;
    this.facialHair = facialHair;
    this.godine = godine;
  }
  smrd() {
    console.log(
      `On se zove ${this.ime}, ima ${this.tipKose} ${this.bojaKose} kosu i visok je ${this.visina}cm.On ima ${this.bojaOciju} oci, ${this.godine} godina i ${this.facialHair}.`
    );
  }
}

const tedisa1 = new Ajlicica(
  "Saladin",
  "uvijenu",
  "braon",
  "180",
  "braon",
  "bradicu",
  "18"
);
tedisa1.smrd();

//bojaOciju,facialHair,godine

//
////
//
///
///

///
///
///
///
///                                     ----------------
///                                     PUBLIC INTERFACE
///                                     ----------------

///funkcije
class Car {
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }
  accelerate(speedIncrease) {
    this.speed += speedIncrease;
  }
}

function driveCarExternaly(car, speed) {
  car.accelerate(speed);
}

const myCar = new Car("Toyota");

driveCarExternaly(myCar, 30);
driveCarExternaly(myCar, 30);
driveCarExternaly(myCar, 30);

console.log(myCar);

///////////////////////////////////

//objekti

class Auto {
  constructor(brand) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate(speedIncrease) {
    this.speed += speedIncrease;
  }
}

class Driver {
  driveCar(car, speed) {
    car.accelerate(speed);
  }
}

const car = new Car("Toyota");
const mee = new Driver();

// setter
// getter
// instanca

console.log(car);

class Osoba {
  #age = 25;
  constructor(ime, prezime, bojaOciju) {
    this.ime = ime;
    this.prezime = prezime;
    this.bojaOciju = bojaOciju;
  }
  changeAge() {
    console.log((this.#age = 30));
  }
}
const me = new Osoba("Edina", "Maljevac", "braon");

// me.bojaOciju = "red";
console.log(me.bojaOciju);

me.changeAge();

console.log(Array());

const arr = [1, 2, 3, 4, 5];

arr.map((el) => console.log(el * 2));

const names = [
  "Maid Halilovic",
  "Aleksa Jankovic",
  "Edina Maljevac",
  "Ajsa Maljevac",
  "Ilhan Buhic",
];

const [prvi, drugi, treci, cetvrti, peti = "Nejla Tobdziu", sesti, sedmi] =
  names;
console.log(drugi, treci, cetvrti, peti);

//ako hocemo da preskocimo neki element napisemo u const u nizu ( , , )

//destructuring

const [a, b, c, , n] = [1, 2, 3, 4, 5];
console.log(a, b, c, n);

const namesDrugi = [
  "Maid Halilovic",
  "Aleksa Jankovic",
  "Edina Maljevac",
  "Ajsa Maljevac",
  "Ilhan Buhic",
  "Seid Mecinovic",
];

const [prvo, , trece, ...drugaImena] = namesDrugi;

console.log(namesDrugi, drugaImena);

const namesDva = [...drugaImena, "Imran Masovic"];
console.log(namesDva);

const person = {
  firstName: "Aleksa",
  lastName: "Jankovic",
  eyesColor: "braon",
  skillSet: {
    programing: "Javascript",
    sport: "Kosarka",
    jezik: "Serbian",
  },
};

// const { firstName, eyesColor } = person;

// const {
//   firstName,
//   lastName,
//   skillSet: { ...ajla },
//   ...nesto
// } = person;
// const personDva = { firstName };

// const {
//   firstName,
//   lastName,
//   eyesColor,
//   skillSet,
//   skillSet: { programing, ...rest },
// } = person;

// console.log(skillSet);
// const {firstName,lastName,eyesColor, ...restGrupa, skillSet ...pro} = person

// console.log(rest);

//execution context YOUTUBE

const btn = document.querySelector(".btn");
const divRoot = document.querySelector(".root");
let tekst = "ovo ce biti sacuvano kada refreshujem stranicu";

btn.addEventListener("click", () => {
  const checkIfSaved = localStorage.getItem("saved");
  if (!checkIfSaved) {
    localStorage.setItem("saved", tekst);
    divRoot.innerText = tekst;
  } else {
    localStorage.removeItem("saved");
    divRoot.innerText = "";
  }
});

const btn2 = document.querySelector(".btn2");
const div2 = document.querySelector(".div2");
let recenica = "Silly goofy recenica koja menja bojicu.";
const remove = document.querySelector(".remove");

btn2.addEventListener("click", () => {
  div2.innerHTML = recenica;
  const btnBoja = document.createElement("button");
  localStorage.setItem("save", recenica);

  div2.appendChild(btnBoja);
  btnBoja.innerHTML = "Roza";
  btnBoja.addEventListener("click", () => {
    div2.style.color = "red";
  });
  const btnBoja2 = document.createElement("button");
  div2.appendChild(btnBoja2);
  btnBoja2.innerHTML = "Plava";
  btnBoja2.addEventListener("click", () => {
    div2.style.color = "blue";
  });
});

remove.addEventListener("click", () => {
  div2.innerHTML = "";
});

let recenica1 = "Danas radimo cetvrti cas Centar Nit";
// let samoglasnici = ["a", "i", "e", "o", "u"];
let transformedSentence = "";

function transform(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i] === "a" ||
      sentence[i] === "e" ||
      sentence[i] === "i" ||
      sentence[i] === "o" ||
      sentence[i] === "u"
    ) {
      transformedSentence += sentence[i].toUpperCase();
    } else {
      transformedSentence += sentence[i];
    }
  }

  return transformedSentence;
}

console.log(transform(recenica1));

///
///
///
///

const arrr = [
  [10, 23, 14],
  [17, 54, 18],
  [12, 28, 96],
];

//uradi xo

function filterParnih(arrr) {
  for (let i = 0; i < arrr.length; i++) {
    for (let j = 0; j < arrr[i].length; j++) {
      if (arrr[i][j] % 2 === 0) {
        console.log(arrr[i][j]);
      }
    }
  }
}

filterParnih(arrr);

arrr.flatMap((el) => el.map);

// : znaci u suprotnom

// arrr.flatMap((el) => console.log(`flatMap`+ el));

// for (i = 0; i < recenica.length; i++) {
//   if (
//     recenica1[i] === "a" ||
//     recenica1[i] === "e" ||
//     recenica1[i] === "i" ||
//     recenica1[i] === "o" ||
//     recenica1[i] === "u"
//   ) {
//     samoglasnici += recenica1[i];
//     recenica2 = recenica1[samoglasnici.toUpperCase()];
//   }
// }

// console.log(samoglasnici);
// console.log(recenica2);

console.log(true + false);
1;

console.log(true + 2);
3;

console.log(false - true * "hello");
NaN;

console.log(null && 0 && undefined && true);

console.log(undefined || null || 2 || "string");

console.log("a" + 4 * "saladin" + "as");
