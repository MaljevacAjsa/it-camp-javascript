function mnozenje(broj, callbackFunkcija) {
  //   callbackFunkcija(broj * 2);
  const rezultat = broj * 2;
  callbackFunkcija(rezultat);
}

function prikaziRez(rezultat) {
  console.log(`Rezultat je ${rezultat}`);
}

mnozenje(5, prikaziRez);

//////////////////////////////////////////////////////

function sabiranje(broj, funkcija) {
  const rezultat = broj + 3;
  funkcija(rezultat);
}

function rezz(rezultat) {
  console.log(`Ovo je rezultat :${rezultat}`);
}

sabiranje(5, rezz);

//////////////////////////////////////////////////////

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (!success) {
        const data = { id: 1, ime: "Neko" };
        resolve(data);
      } else {
        reject("greska");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log("podatci su uspesno prikazani", data))
  .catch((error) => {
    console.log("neuspesno prikazivanje podataka", error);
  })
  .finally(() => {
    console.log("kraj");
  });
