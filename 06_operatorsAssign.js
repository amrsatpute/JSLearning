console.log(`***Greates Number01***`);
function greaterNumber(num1, num2,num3) {
  var result = num1 > num2 > num3 ? num1 : num2, num3;
  console.log(`GreaterNumber: ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);
greaterNumber(767, -988);

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




