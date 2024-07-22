//objekti {}
//nizovi []
//funkcije ()

//Slozeni tipovi podataka

//poredjenje
//= --> dodela vrednosti
//== --> poredi vrednost (rezultat je true ili false)
//var a= 5; 
//var b= 6;
//console.log (a==b)
//false
//var c= "5";
//var d= 5,
//console.log(c==d);
//true
//!== --> proverava da li nije jednako i po tipu i po vrednosti
//!= --> isto ko dva jednako

//=== --> poredi i tip podataka i vrednost
//var a= "2";
//var b= "2";
//console.log (a===b);

nesto(5)
nesto(2)
nesto(3)

function nesto(broj){
return console.log(broj*2) 
}

const funkcija =(broj)=>{
    return console.log(broj+2)
}
funkcija(5)


var osoba= {
    ime: "Neko",
    prezime: "Nebitno",
    godine: 20,
    zanimanje: "Programer",
    zaposlen: true,
    hobi: {
        sport: "Fudbal",
        pozicija: {
            glavna: "Golman",
            pomocna: "Pomocnik",
        },
    },
};

console.log (osoba);
console.log (osoba.ime);
console.log (osoba.godine);
console.log (osoba.hobi.sport);


var niz= [1, 2, "3", true, [4, 5, 6]];
const noviNiz=niz.filter((value)=>typeof value === 'number')
const noviniz=niz.filter((value)=>typeof value === "string")

const mapNiz=niz.map((banana,index)=>index*2)
console.log(mapNiz)

console.log(noviniz)
console.log(noviNiz)

console.log (niz[3]);
console.log (niz[4][0])

var niz2= [];

niz2 [0]= "test";
niz2 [1]=  1;
niz2 [2]= true;
niz2 [3]= "blah";

console.log (niz2);

var niz3= [];

niz3[2]= "osoba";
niz3[0]= 4;
niz3[1]= true;
niz3[4]= 28;
niz3[3]= "blue";

console.log (niz3)

var m= "2";
var n= "2";
console.log (m===n);

var v= "2";
var h= 2;
console.log (h==v);

var i= true;
var o= "3";
console.log (i===o);

console.log(typeof i)


