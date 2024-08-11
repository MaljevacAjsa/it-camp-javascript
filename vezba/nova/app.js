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
