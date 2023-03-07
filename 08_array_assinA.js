console.log(`---------- 1 -----------`);
const arraySeasonalFruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Water Melon",
];
console.log("First element of the array");
let first = arraySeasonalFruits[0];
console.log(first);

console.log("Last element of the array");
let last = arraySeasonalFruits[arraySeasonalFruits.length - 1];
console.log(last);

console.log(`---------- 2 -----------`);
console.log(`Adding element Papaya befor Banana`);
arraySeasonalFruits.unshift("Papaya");
console.log(arraySeasonalFruits);

console.log(`---------- 3 -----------`);
console.log(`Removing mongo from the array`);
let remove = arraySeasonalFruits.splice(4, 1);
console.log(remove);
console.log(arraySeasonalFruits);

console.log(`---------- 4 -----------`);
console.log(`Add element Pear at the last of aaray`);
arraySeasonalFruits.push("Pear");
console.log(arraySeasonalFruits);

console.log(`---------- 5 -----------`);
console.log(`Adding Lychee Fruit before Water Melon`);
arraySeasonalFruits.splice(4, 0, "Lychee Fruit");
console.log(arraySeasonalFruits);

console.log(`---------- 6 -----------`);
console.log(`Replacing Orange with Jujube`);
arraySeasonalFruits.splice(2, 1, "Jujube");
console.log(arraySeasonalFruits);

console.log(`---------- 7 -----------`);
console.log(`Log element from 1 to 4`);
let elements = arraySeasonalFruits.splice(1, 3);
console.log(elements);

console.log(`---------- 8 -----------`);
console.log(`Select last 3 elements`);
const last3 = arraySeasonalFruits.slice(-3);
console.log(last3);
