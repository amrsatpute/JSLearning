function factorialOfWordCount(String) {
  var count = 1;
  if (String == "" || String == "null") {
    return `invalid data`;
  }

  for (let index = 0; index <= String.lenght; index++) {
    var charString = String.charAt(index);
    if ((charString = "")) {
      count = count + 1;
    }
  }
  return count;
}
var wordCount = factorialOfWordCount("Revision is the mother seccess");
console.log(
  `The total of word in Givem string "Revision is the mother seccess is" ${wordCount}`
);

var wordCount = factorialOfWordCount("wer never fail, we always learn");
console.log(
  `The total of word in Givem string "wer never fail, we always learn" ${wordCount}`
);

var wordCount = factorialOfWordCount("null");
console.log(`The total of word in Givem string "null" ${wordCount}`);

var wordCount = factorialOfWordCount(" ");
console.log(`The total of word in Givem string " " ${wordCount}`);

var wordCount = factorialOfWordCount("Satpute Amar Baliram");
console.log(
  `The total of word in Givem string "Satpute Amar Baliram" ${wordCount}`
);

function factorialOfNum(num1) {
  var result = 1;
  for (let index = num1; index >= 1; index--) {
    result *= index;
  }
  return result;
}
var factorialOf6 = factorialOfNum(6);
console.log(`The factorial of given number "6 is: ${factorialOf6}`);

console.log(`*********`);

var factorialOf3 = factorialOfNum(3);
console.log(`The factorial of given number "3" is ${factorialOf3}`);
