console.clear();

// 1st exercise

function compareNums(a, b) {
  return a > b
    ? `${a} is bigger than ${b}`
    : b > a
    ? `${b} is bigger than ${a}`
    : `${a} and ${b} are equal`;
}

console.log(compareNums(9, 9));

console.log("--------------------------");

// 2nd exercise

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("--------------------------");

// 3rd exercise

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

console.log("--------------------------");

// 4th exercise

for (let i = 0; i < 5; i++) {
  const random = Math.ceil(Math.random() * 10);
  console.log(random);
}

console.log("--------------------------");

// 5th exercise

let i = 1;
while (i > 0) {
  const random = Math.ceil(Math.random() * 10);
  console.log(random);
  if (random === 5) break;
  i++;
}

console.log("--------------------------");

// 6th exercise

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const arrLength = getRandomIntInclusive(20, 30);
const arr = [];
let maxNum = 0;
for (i = 0; i < arrLength; i++) {
  const random = getRandomIntInclusive(10, 30);
  arr.push(random);
  if (random > maxNum) maxNum = random;
}
console.log(maxNum);

console.log("--------------------------");

// 7th exercise

let arr2 = [];
let a = 0;
let b = 0;
let c = 0;
let d = 0;
for (let i = 0; i < 100; i++) {
  const els = ["A", "B", "C", "D"];
  const random = Math.floor(Math.random() * els.length);
  const randomEl = els[random];
  switch (randomEl) {
    case "A":
      a++;
      break;
    case "B":
      b++;
      break;
    case "C":
      c++;
      break;
    case "D":
      d++;
      break;
  }
  arr2.push(randomEl);
}
console.log(arr2);
console.log(a, b, c, d);

console.log("--------------------------");

// 8th exercise

function lygineSuma(a, b) {
  if (
    (Array.isArray(a) && Array.isArray(b)) ||
    (typeof a === "number" && typeof b === "number")
  )
    return true;
  return false;
}

console.log(lygineSuma([6, 8, 6], [1, 5]));

console.log("--------------------------");

// 9th exercise

function pirminisSkaicius(a) {
  if (typeof a !== "number") return "argument is not a number!";
  // one is not a prime number
  if (a <= 1) return false;
  if (a === 2) return true;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) return false;
  }
  return true;
}

console.log(pirminisSkaicius(123));

console.log("--------------------------");

function telefonoNumeris(a) {
  if (!Array.isArray(a)) return "not an array";
  if (a.length !== 10) return "array length must be 10 numbers long";
  for (let i = 0; i < 10; i++) {
    if (a[i] >= 10 || a[i] < 0) return "incorrect number input";
  }
  return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
}

console.log(telefonoNumeris([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
