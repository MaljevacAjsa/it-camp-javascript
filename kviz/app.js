const quizData = [
  {
    pitanje: "Koji je glavni grad Nemacke?",
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

const questionCon = document.querySelector(".questionCon");
const odgovorii = document.querySelector(".odgovori");
const sledece = document.querySelector(".sledece");
const pocnii = document.querySelector(".pocni-kviz");

let score = 0;
let trenutnoPitanjeIndex = 0;
questionCon = "";
odgovorii = "";

function pocni() {
  function startQuiz() {
    score = 0;
    trenutnoPitanjeIndex = 0;
    showQA(quizData[trenutnoPitanjeIndex]);
    pocni.innerHTML = "";
  }

  function showQA(question) {
    pocnii.style.display = "none";
    const sledece = document.createElement("button");
    sledece.className = "sledece";
    sledece.innerText = "Sledece";
    questionCon.innerText = question.pitanje;
    odgovorii.innerHTML = "";
    question.odgovori.forEach((odgovor) => {
      const dugme = document.createElement("button");
      dugme.className = "odgovor";
      dugme.innerHTML = odgovor.odgovor;
      dugme.addEventListener("click", function () {
        console.log(odgovor.odgovor);
        if (odgovor.resenje === true) {
          score++;
          console.log(odgovor.resenje);
          console.log(score);
        }
      });
      odgovorii.appendChild(dugme);
    });
    // score da proverimo jel tacno dugme pa da se doda
    sledece.addEventListener("click", function () {
      trenutnoPitanjeIndex++;
      if (trenutnoPitanjeIndex < quizData.length) {
        showQA(quizData[trenutnoPitanjeIndex]);
      } else {
        questionCon.innerText = "Quiz completed! Your score: " + score;
        odgovorii.innerHTML = "";
        sledece.style.display = "none";
      }
    });
  }

  startQuiz();
}

pocni();

// quizData.forEach((index) => {
//   console.log(index[0].pitanje.odgovori);
// });

// const pitanje1 = quizData[0].pitanje;
// const pitanje2 = quizData[1].pitanje;
// const pitanje3 = quizData[2].pitanje;
// const pitanje4 = quizData[3].pitanje;

// const odgovori1 = quizData[0].odgovori;
// const odgovori2 = quizData[1].odgovori;
// const odgovori3 = quizData[2].odgovori;
// const odgovori4 = quizData[3].odgovori;

// console.log(pitanje1);
// console.log(odgovori1);

// console.log(pitanje2);
// console.log(odgovori2);

// console.log(pitanje3);
// console.log(odgovori3);

// console.log(pitanje4);
// console.log(odgovori4);

// const glavniDiv = document.querySelector(".glavni-div");
// glavniDiv.appendChild(pitanje1);
// function pocni() {}

// function pojavi() {
//   quizData.forEach((pitanje, index) => {
//     console.log(quizData[0]);
//   });
// }
// pojavi();
// forEach
