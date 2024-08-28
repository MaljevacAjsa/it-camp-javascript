function mnozenje(broj, callbackFunkcija) {
  //   callbackFunkcija(broj * 2);
  const rezultat = broj * 2;
  callbackFunkcija(rezultat);
}

function prikaziRez(rezultat) {
  console.log(`Rezultat je ${rezultat}`);
}

mnozenje(5, prikaziRez);
