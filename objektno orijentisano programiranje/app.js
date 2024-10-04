//OBJEKTNO ORIJENTISANO PROGRAMIRANJE

// -js podrzava oop (ne u potpunosti) ali to mu nije nativno.
//.
// -klase (class)
// klasa je veliki objekat gde smestamo ostale podatke
// klasa uvek pocinje velikim slovom
// konstruktor je metoda koja nam pusta da definisemo atribute za tu klasu
// this je kljucna rec, to je kljucna rec koja uvek daje referncu na neki objekat u zavisnosti gde je pozvan
// funkcije se samo nazivom definisu, bez function

class Osoba {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }
  pozdrav() {
    console.log("pozdrav " + this.ime + " " + this.prezime);
  }
}

//instanciranje klase - time ozivljavamo klasu
const osoba = new Osoba("Marko", "Markovic");
osoba.pozdrav();
const osoba1 = new Osoba("Pera", "Peric");
osoba1.pozdrav();

class Predmet {
  constructor(boja, oblik) {
    this.boja = boja;
    this.oblik = oblik;
  }
  opis() {
    console.log(
      "Ovaj predmet je " + this.boja + " boje i " + this.oblik + " oblika."
    );
  }
}

const predmet = new Predmet("plave", "okruglog");
predmet.opis();
const predmet1 = new Predmet("crvene", "kockastog");
predmet1.opis();
const predmet2 = new Predmet("roze", "trouglastog");
predmet2.opis();

class Sok {
  constructor(boja, ukus) {
    this.boja = boja;
    this.ukus = ukus;
  }
  pice() {
    console.log("To pice je " + this.boja + " boje i " + this.ukus + " ukusa.");
  }
}

const sok = new Sok("crvene", "vocnog");
sok.pice();
const sok1 = new Sok("narandzaste", "citrusnog");
sok1.pice();
const sok2 = new Sok("ljubicaste", "tropskog");
sok2.pice();

class Slika {
  constructor(tema, era) {
    this.tema = tema;
    this.era = era;
  }
  slika() {
    console.log(
      "Ona slika ima " + this.tema + " temu i iz doba " + this.era + " je."
    );
  }
  slike() {
    console.log("moja slika je iz doba " + this.era);
  }
}

const slika = new Slika("porodicnu", "baroka");
slika.slika();
const slika1 = new Slika("istorijsku", "renesanse");
slika1.slika();
const slika2 = new Slika("ljubavnu", "rokokoa");
slika2.slika();
const slika3 = new Slika("", "neorenesanse");
slika3.slike();

class Izgled {
  constructor(oci, kosa) {
    this.oci = oci;
    this.kosa = kosa;
  }
  opisivanje() {
    console.log("Ta osoba ima " + this.oci + " oci i " + this.kosa + " kosu");
  }
}

const izgled = new Izgled("braon", "plavu");
izgled.opisivanje();
const izgled1 = new Izgled("plave", "braon");
izgled1.opisivanje();

class Tedo {
  constructor(dan, pamet) {
    this.dan = dan;
    this.pamet = pamet;
  }
  koliko() {
    console.log("Danas je " + this.dan + " i tedo je " + this.pamet);
  }
  dani() {
    console.log("Danas je " + this.dan);
  }
}

const tedi = new Tedo("ponedeljak", "glupander");
tedi.koliko();
const dan = new Tedo("utorak", "");
dan.dani();

class Casa {
  constructor(materijal, cena) {
    this.materijal = materijal;
    this.cena = cena;
  }
  izgled() {
    console.log("Ova casa je " + this.materijal + ".");
  }
  cene() {
    console.log("Ova casa kosta " + this.cena + " dinara.");
  }
  sve() {
    console.log(
      "Ova casa je " + this.materijal + " i kosta " + this.cena + " dinara."
    );
  }
}

const casa = new Casa("plasticna", "");
casa.izgled();
const casa1 = new Casa("", "120");
casa1.cene();
const casa2 = new Casa("staklena", "150");
casa2.sve();
