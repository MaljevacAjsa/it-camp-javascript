console.log ("test");
console.log ("test123");
//alert ("test");
document.write ("test");

//Tipovi Podataka 
//Primitivni ili prosti tipovi podataka
//Slozeni ili referentni tipovi podataka




//Primitivni tipovi podataka


//to su podatci koji imaju samo jednu vrednost,a to su:

//string--> predstavlja neki tekst
//number--> predstavlja neki broj
//null--> predstavlja odsustvo vrednosti
//boolean--> predstavlja neke logicke vrednosti(true/false)
//undefined--> predstavlja vrednost koja nije definisana
//bigInt--> 
//symbol-->

//Varijable ili promenljive 
//To je kontejner gde mi skladistimo neki podatak
//Obelezava se sa "var"
//Tu se stvaljaju prosti podatci 
var godina=2024;
console.log (godina);
var ime= "Neko ime"
console. log (ime);
var k= 5;
var b= 6;
console.log (k+b);
var c=14;
var n=56;
console.log (c+n);
var abc=676578;
var vbn=36579;
console.log (abc+vbn);
var am= ("ajsa");
var hs= ("blabla");
console.log (am+hs);
var ads= 100;
var drs= 5;
console.log (ads-drs)
var vari= ("jedna recenica ");
var irav= ("mnogo kratka");
//alert (vari+irav);
//var kont= ("mali prozorcic ");
//var nokt= ("je iskocio");
//alert (kont+nokt);
//console.log ("teksticneki");

var ai= 15;
var ia= 25;
var ce= ai + ia;
console.log(c);







//null
var nesto = null;


//bolean

var bool= true;
var bool2= false;
console.log (bool);

const a= {
    name: "Ime",
};
a.name

const cars= ["bmw","audi","mercedes"];
cars.push ("w");
cars.pop ();
console.log (cars);
cars.unshift ("h");
cars.shift ();
cars.shift ();
cars.pop ()
const newCars=cars.slice (1,3);
console.log (newCars);
console.log (cars)

const knjige= ["knjiga1", "knjiga2", "knjiga3", "knjiga4","knjiga5"]
const newknjige=knjige.slice (1,4);
console.log (newknjige);
console.log(knjige);

cars.splice (1,4);
console.log(cars);
const evve= ["e", "r", "g", "y", "j"]
evve.splice (1, 2, "hehe")
evve.splice (1, 2, "3", "hehe", "neen")
console.log(evve)

const brojevi=[1,2]
const brojevi2 = [...brojevi,3,4]
console.log(brojevi2)

const cifre = [1,2,3,4,5]
const cifre2=[...cifre, 6,7,8,9,10]
console.log(cifre2)

cifre2.push=(11)
console.log(cifre2)

cifre.pop ()
console.log(cifre)







//push dodaje element na kraju niza, push
//pop uklanja poslednji element niza, pop mice samo jedan element
//unshift dodaje element na pocetku niza
//shift uklanja prvi element niza
//slice uzima izabrane elemente iz niza i pravi novi niz a ne menja originalni niz
//splice brise selektovane elemente dodaje na svaki sledeci argument nove elemnte u niz (menja originalni niz)
//spread operator (...) kopira elemente iz niza i prikazuje u drugi niz