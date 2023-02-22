console.log("******No Reture Value*******");
function showfullName() {
  console.log("My Full Name Is Amar Satpute.");
}
showfullName();

function college() {
  console.log("My college name is a Bill Gates Computer science Dharashiv. ");
}

function goal() {
  console.log("Blank");
}
goal();

console.log("******02 Assingment*******");
function personalDetails(firstName, lastName, collegeName) {
  console.log("My personal Details");
  console.log("FirstName:,", firstName);
  console.log("LastName:", lastName);
  console.log("collegeName:", collegeName);
}
personalDetails("Amar", "Satpute", "Bill Gates Clg");

console.log("*****03 Assingment****");
function swapValuesDude(num1, num2) {
  console.log("Before Swap:", num1, num2);
  var temp = num1;
  num1 = num2;
  num2 = temp;
  console.log("After swap:", num1, num2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000);

console.log("****04 Assingment****");
function addThreeValues(value1, value2, value3) {
  var add = value1 + value2 + value3;
  return add;
}
var addResult = addThreeValues(10.23, 600, 40);
console.log("Addition:", addResult);
var addResult2 = addThreeValues("Hello ", "Good ", "Morning ");
console.log("Day:", addResult2);
