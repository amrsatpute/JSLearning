console.log("****increment 1 value 5:15****");
for (let index = 5; index <= 15; index = index + 1) {
  console.log(`index increment 1 value:${index}`);
}
console.log("****Decrement value 50:40****");

for (let index = 50; index >= 40; index--) {
  console.log(`index Decrement 50:40 value:${index}`);
}

console.log("****Find first odd number****");

let count = 0;
let num = 1;

while (count < 15) {
  if (num % 2 !== 0) {
    console.log(`First 15 Odd number:${num}`);
    count++;
  }
  num++;
}

console.log("****Find first Even number****");

let counts = 0;
let num2 = 0;

while (counts < 10) {
  console.log(`First 10 Even number:${num2}`);
  counts++;
  num2 += 2;
}

console.log("****like 5  value 50****");

for (let index = 5; index <= 50; index = index + 5) {
  console.log(`index 5 To 50 value:${index}`);
}

console.log("*****like 10  value 100******");
for (let index = 10; index <= 100; index = index + 10) {
  console.log(`index 10 to 100 value:${index}`);
}
console.log("****Reserve table 100 To 10 ****");
for (let index = 10; index >= 1; index--) {
  console.log(`index 10 to 100 value:${index * 10}`);
}
