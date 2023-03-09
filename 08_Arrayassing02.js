const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Total numbers of elements available is: ${arrayNumbers.length}`);
console.log("-------------------------------------");
const firstElement = arrayNumbers[0];
console.log(`First Element is: ${firstElement}`);

const lastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(`Last element is: ${lastElement}`);

const lastThirdelement = arrayNumbers[arrayNumbers.length - 3];
console.log(`Last thirst element is: ${lastThirdelement}`);
console.log("----------------------------------------");

let evenElements = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 0) {
    evenElements = evenElements.concat(element);
  }
}
console.log(`even Number is : ${evenElements}`);

let oddElement = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    oddElement = oddElement.concat(element);
  }
}
console.log(`Odd Number is : "${oddElement}"`);
console.log("-------------------------------------------------");

let evenNumbers = function (arrayNumbers) {
  //even position numbers
  let evenPositionArray = [];
  for (let index = 0; index < arrayNumbers.length; index = index + 2) {
    let element = arrayNumbers[index];
    evenPositionArray.push(element);
  }
  console.log(`Even position numbers is:${evenPositionArray}`);
  let sum = 0;
  for (let index = 0; index < evenPositionArray.length; index++) {
    const element = evenPositionArray[index];
    sum = sum + element;
  }
  console.log(`sum of Even position numbers is:${sum}`);
};
evenNumbers([20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]);

console.log("------------------------------------------------");
let oddNumbers = function (params) {
  let oddPositionArray = []; //odd position numbers

  for (let index = 1; index < params.length; index = index + 2) {
    let elements = params[index];
    oddPositionArray.push(elements);
  }
  console.log(`Odd position numbers are :${oddPositionArray}`);
  let sum = 0;
  for (let index = 0; index < oddPositionArray.length; index++) {
    const element = oddPositionArray[index];
    sum = sum + element;
  }
  console.log(`Sum of Odd position numbers is :${sum}`);
};
oddNumbers([20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]);
console.log("--------------------------------------");

let arraysum = function (arrayNumbers) {
  //sum of all array elements
  let sumofArraynumbers = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumofArraynumbers = sumofArraynumbers + element;
  }
  console.log(`sum of all elements is: ${sumofArraynumbers}`);
};
arraysum([20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]);

let multipleNumbers = function (array) {
  let emptyArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 5 == 0) {
      emptyArray.push(element);
    }
  }
  return emptyArray;
};
console.log("-----------------------------");
let multi = multipleNumbers([20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]);
console.log(`These numbers are multiple of 5: ${multi}`);
console.log("---------------------------------------------");

arrayNumbers.includes(115)
  ? console.log(`Number 115 is available in array :${true}`)
  : console.log(`Number 115 is available in array: ${false}`);
arrayNumbers.includes(23)
  ? console.log(`Number 23 is available in array : ${true}`)
  : console.log(`Number 23 is available in array: ${false}`);
console.log("------------------------------------------");

console.log(`given Arry elements are: ${arrayNumbers}`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(`Added 55 and 66 Number Before index 3: ${arrayNumbers}`);

console.log("-----------------------------------");
const deletedNumbers = arrayNumbers.splice(4, 3);
console.log(`3 elements deleted from index 4: ${arrayNumbers}`);
