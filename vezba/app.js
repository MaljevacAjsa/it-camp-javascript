let arr = ["rec", 1, "2", 56, true];
let arr2 = [...arr, "nesto"];
console.log(arr[arr.length - 3]);
console.log(arr2);

let myArray = ["a", "b", "c", "d"];
//myArray.splice ( 1, 2, "h")
myArray[1] = "l";
console.log(myArray);

let mixedNumbers = ["IV", 5, "six"];
mixedNumbers.unshift("I", 2, "tri");
mixedNumbers.push(7, "VIII", 9);
console.log(mixedNumbers);

let popShift = ["challenge", "is", "not", "complete"];
popShift.pop();
popShift.shift();
console.log(popShift);

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

//userActivity.data.online = 45

console.log((userActivity.data.online = 45));
console.log((userActivity.data.totalUsers = 76));

console.log((userActivity.id = 666));

let x = 3.14;

x = Math.round(x);
console.log(x);

let b = 3.99;

b = Math.floor(b);
console.log(b);

let a = 3.65;

a = Math.ceil(a);
console.log(a);

let g = 2;

g = Math.pow(g, 4);
console.log(g);

let p = 9;

p = Math.sqrt(p);
console.log(p);

let o = -3;

o = Math.abs(o);
console.log(o);

let r = 2;

let e = 4;
let y = 8;

let maximum;

let minimum;

maximum = Math.max(r, e, y);
console.log(maximum);

minimum = Math.min(r, e, y);
console.log(minimum);

let u;

u = Math.PI;

console.log(u);

const items = [
  { item: "nsft", price: 234 },
  { item: "nsat", price: 23 },
  { item: "nstt", price: 100 },
  { item: "nst", price: 45 },
];

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);

const filteredItemss = items.map((item) => {
  return item.item;
});

console.log(filteredItemss);

const filteredItemsss = items.find((item) => {
  return item.item === "nstt";
});

console.log(filteredItemsss);

items.forEach((item) => {
  console.log(item.item);
});

const jeftino = items.some((item) => {
  return item.price <= 100;
});

console.log(jeftino);

const skupo = items.every((item) => {
  return item.price <= 100;
});

console.log(skupo);
