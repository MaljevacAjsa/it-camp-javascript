const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxBroj = niz[0];
let minNum = niz[0];

// for (i = 0,i<niz.length, i++) {
//     if (i= niz.lenght% niz.length){
//         console.log(i)
//     }
// }

for (let i = 0; i <= niz.length; i++) {
  if (niz[i] > maxBroj) {
    maxBroj = niz[i];
  }
  if (niz[i] < minNum) {
    minNum = niz[i];
  }
}

console.log(maxBroj);
console.log(minNum);

function konvertovanje(brojC) {
  let brojF = (brojC * 9) / 5 + 32;
  return brojF;
}
console.log(konvertovanje(6));

let x = 10 ** 2;
console.log(x);

let y = 2;
y = x + y;
console.log(y);
//102

y += x;
console.log(y);
//202;

y *= x;
console.log(y);
//20200

y /= x;
console.log(y);
//202

x -= y;
console.log(x);
//-102

const z = 2;
x **= z;
console.log(x);

console.log((x = x << y));
