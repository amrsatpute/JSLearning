console.log(`Start`);
var num = 10;
if (num > 0) {
  console.log(`inside if`);
  console.log(`number is positive: ${num}`);
}
console.log(`End`);

var ageForVote = 10;
if (ageForVote >= 18) {
  console.log("You are eligible for voting");
  console.log(`Age is: ${ageForVote}`);
}
console.log("End of next if block");

function checkEvenOdd(num) {
  if (num % 2 == 0) {
    return "EVEN";
  }
  if (num % 2 != 0);
  {
    return "ODD";
  }
}
var result = checkEvenOdd(45);
console.log(`Given Number 45 is ${result}`);
var result = checkEvenOdd(70);
console.log(`Given number 70 is ${result}`);
