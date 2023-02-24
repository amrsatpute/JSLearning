console.log(`***Even Odd Number02***`);
function isEvenOddNumber(num1) {
  var result = num1 % 2 == 0 ? "true" : "false";
  return result;
}
var result = isEvenOddNumber(29);
console.log(`Condition is : ${result}`);

var result = isEvenOddNumber(44);
console.log(`Condition is : ${result}`);

var result = isEvenOddNumber(0);
console.log(`Condition is : ${result}`);

var result = isEvenOddNumber(101);
console.log(`Condition is : ${result}`);
