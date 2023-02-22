console.log("*******01 No Arggument*******");
function stringBasic() {
  return;
}

console.log("*******02 Dream Company*******");

console.log(" Persistent Systems Limited");

console.log("*******03Hobbies*******");

var hobby1 = "swimming";
var hobby2 = "Chase";
var hobby3 = "Coding ";
console.log(hobby1, hobby2, hobby3);

console.log("*******Total Characters*******");

var hobby1Lenght = hobby1.length;
console.log("Total Char Of String My Hobbies:", hobby1Lenght);

var hobby2Lenght = hobby2.length;
console.log("Total Char Of String My Hobbies:", hobby2Lenght);

var hobby3Lenght = hobby3.length;
console.log("Total Char Of String My Hobbies:", hobby3Lenght);

console.log("****02 Assingment***");

function stringHandsOn() {
  var givenString = "    Hey you are doing Good, keep it up    ";
}
console.log(
  "Print String:",
  "    Hey you are doing Good, keep it up    ",
  givenString
);

console.log("****Calculate Lenth***");
var givenString = "    Hey you are doing Good, keep it up    ";
var length = givenString.length;
console.log("string Space lenth is:", length);

var givenStringAfterTrim = givenString.trim();
console.log(
  "Removing extra start and end spaces using trim(): ",
  givenStringAfterTrim,
  givenString.length,
  givenStringAfterTrim.length
);
console.log("** total extra spaces reoved for givenString**");
var count = givenString.length - givenStringAfterTrim.length;
console.log("Total Remove spaces:", count);

console.log("***Find The first and last Char***");
var charAtLastIndex = givenString.charAt(givenString.length - 1);
// var charAtLaststIndex = givenString.charAt(givenString.length );
console.log("First and last Char is:", charAtLastIndex);

console.log("***After triming your string number***");
var trimmedStr = givenString.trim();
var totalChars = trimmedStr.length;
console.log(`After triming: ${totalChars}`);

console.log("******Find index character******");
var sub = givenString.substring(22);
console.log("index 22 using substring:", sub);

var slice = givenString.slice(22);
console.log("index 22 using slice:", slice);

var a = givenString.includes("up");
console.log("string end with up:", a);

var b = givenString.includes("Hey");
console.log("string start with Hey:", b);
