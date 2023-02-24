console.log(`***Greates Number01***`);
function greaterNumber(num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(`GreaterNumber: ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("---03 Assingment---");

function maleMarriageEligibility(gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName} you are eligible for marriage`
      : `Hey ${boyName} you are not eligible for marriage`;
  return result;
}
var result = maleMarriageEligibility("Male", 25, "Swapnill");
console.log(result);
var result1 = maleMarriageEligibility("Male", 17, "Akshay");
console.log(result1);

function femaleMarriageEligibility(gender, age, girlName) {
  var result =
    gender == "female" && age >= 18
      ? `Hey ${girlName} you are eligible for marriage`
      : `Hey ${girlName} you are not eligible for marriage`;
  return result;
}
var result = femaleMarriageEligibility("female", 16, "Akshada");
console.log(result);

var result1 = femaleMarriageEligibility("female", 27, "Rashmika");
console.log(result1);

 function tcsCriterea(gradScore,hscScore,sscScore,candidateName){
  var result = (gradScore >= 70 || hscScore >= 80 || sscScore > 90) ? "ALLOW HIM FOR INTERVIEW" : "dONT ALLOW";
  console.log(`TCS Critarea: ${result}`);
 }
 tcsCriterea(80,86,90, "ABC");
 tcsCriterea(70,65,55, "BCA");
 tcsCriterea(60,79,88, "MSC");

