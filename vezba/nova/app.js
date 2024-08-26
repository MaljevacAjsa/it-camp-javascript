// let nesto = new Promise((resolve, reject) => {
//   const ajsa = 1 + 2;

//   setTimeout(() => {
//     if (ajsa === 3) {
//       resolve("tacno");
//     } else {
//       reject("netacno");
//     }
//   }, 2000);
// });

// nesto
//   .then(() => {
//     console.log("great");
//   })
//   .catch(() => {
//     console.log("glup si");
//   });

const saki = new Promise((resolve, reject) => {
  const cakica = 3 * 3;

  setTimeout(() => {
    if (cakica === 3) {
      resolve(3 + 3);
    } else {
      reject("Sram te bilo");
    }
  }, 2000);
});

console.log(saki);

saki
  .then((nesto) => {
    console.log(nesto);
  })
  .catch((ja) => {
    console.log(ja);
  });

setTimeout(beba, 13000);

function beba() {
  console.log("beba naaacha");
}

let counter = 0;
const countInterval = setInterval(count, 3000);

function count() {
  console.log(counter++);
  if (counter > 5) {
    clearInterval(countInterval);
  }
}

let ajsa = `mau`;

switch (ajsa) {
  case `srecna`:
    console.log(`jupi`);
    break;
  case `ljuta`:
    console.log(`vat...sou skerd`);
    break;
  case `sopping`:
    console.log(`omg vat`);
    break;
  case `mau`:
    console.log(`tedo gono`);
  default:
    console.log(`tedo`);
}
