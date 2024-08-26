const quizData = [
  {
    pitanje: "Koji je glavni grad Francuske?",
    odgovori: [
      { odgovor: "Berlin", resenje: true },
      { odgovor: "London", resenje: false },
      { odgovor: "Pariz", resenje: false },
      { odgovor: "Madrid", resenje: false },
    ],
  },
  {
    pitanje: "Koliko ima minuta u jednom satu?",
    odgovori: [
      { odgovor: "56", resenje: false },
      { odgovor: "68", resenje: false },
      { odgovor: "60", resenje: true },
      { odgovor: "50", resenje: false },
    ],
  },
  {
    pitanje: "Koja je najcesca boja ociju kod ljudi?",
    odgovori: [
      { odgovor: "braon", resenje: true },
      { odgovor: "plava", resenje: false },
      { odgovor: "crna", resenje: false },
      { odgovor: "zelena", resenje: false },
    ],
  },
  {
    pitanje: "Koliko postoji kontinenata?",
    odgovori: [
      { odgovor: "7", resenje: true },
      { odgovor: "5", resenje: false },
      { odgovor: "6", resenje: false },
      { odgovor: "8", resenje: false },
    ],
  },
];

quizData.forEach((pitanje, index) => {
  // console.log(index[2], pitanje, pitanje.odgovori);
  // console.log(quizData[0]);
});

const pitanje1 = quizData[0].pitanje;
const pitanje2 = quizData[1].pitanje;
const pitanje3 = quizData[2].pitanje;
const pitanje4 = quizData[3].pitanje;

const odgovori1 = quizData[0].odgovori;
const odgovori2 = quizData[1].odgovori;
const odgovori3 = quizData[2].odgovori;
const odgovori4 = quizData[3].odgovori;

console.log(pitanje1);
console.log(odgovori1);

console.log(pitanje2);
console.log(odgovori2);

console.log(pitanje3);
console.log(odgovori3);

console.log(pitanje4);
console.log(odgovori4);

const glavniDiv = document.querySelector(".glavni-div");
glavniDiv.appendChild(pitanje1);
function pocni() {}

// function pojavi() {
//   quizData.forEach((pitanje, index) => {
//     console.log(quizData[0]);
//   });
// }
// pojavi();
// forEach
