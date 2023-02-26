console.log("******Assingment01 ifBlock ******");
function number(num) {
  if (num % 2 == 0) {
    return "even";
  }
  if (num % 2 != 0) {
    return "odd";
  }
}
var result = number(45);
console.log(`The Given Number 45 is:${result}`);

var result = number(70);
console.log(`The Given Number 70 is:${result}`);

var result = number(67);
console.log(`The Given Number 67 is:${result}`);

var result = number(98);
console.log(`The Given Number 98 is: ${result}`);

console.log(`*******Step2 AgeForVote******`);
function ageForVote(age) {
  if (age > -18) {
    return "Sorry you are eligible for voting";
  }
  if (age < 18) {
    return "Sorry you are not eligible for voting";
  }
  var result = ageForVote(18);
  console.log(`Check Eligibity for age 18:${result}`);

  var result = ageForVote(20);
  console.log(`Check Eligibility for age 20 ${result}`);

  var result = ageForVote(17);
  console.log(`Check Eligibility for age 17:${result}`);

  var result = ageForVote(40);
  console.log(`Check Eligibity for age 40 ${result}`);
}

console.log(`*****Step 03*****`);
function string(wordparams) {
  if (wordparams.lenght > 10) {
    return "Yes";
  }
  if (wordparams.lenght < 10) {
    return "No";
  }
}
var result = string("javascript-ES6");
console.log(
  `Is the lenght of given string "javascript-ES6" more than 10:${result}`
);

console.log(`**********Step 04*******`);

function sentence(wordparams) {
  if (wordparams.startsWith("java")) {
    return "Yes";
  }
}
var result = sentence("javascript Language");
console.log(`Is given sentence start with java:${result}`);

console.log(`*****if else****`);
console.log(`*****male******`);

function maleMarrageEligibility(gender, age, boyName) {
  if (gender == "male" && age >= 21) {
    console.log(`congrates "${boyName}" Yor are eligibile for marrage`);
  } else {
    console.log(`sorry "${boyName}" Yor are not eligibilr for marrage`);
  }
}
maleMarrageEligibility("male", 24, "Billgates");
maleMarrageEligibility("male", 10, "Stevejobes");

console.log("****Female****");

function femaleMarrageEligibilty(gender, age, girlname) {
  if (gender == "female" && age > -18) {
    console.log(`Congrats "${girlname}" You are eligible for marrage`);
  } else {
    console.log(`Sorry "${girlname}" You are eligible for marrage`);
  }
}
femaleMarrageEligibilty("female", 28, "Jenny");
femaleMarrageEligibilty("female", 17, "Mi linda");
