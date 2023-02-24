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

console.log("*****femaleMarriageEligibility*****");

var result = femaleMarriageEligibility("female", 16, "Akshada");
console.log(result);

var result1 = femaleMarriageEligibility("female", 27, "Rashmika");
console.log(result1);
