//index++ ==> index = index +1
// index -- ==> index = index -1

var index = 10;
var y = index +1 //11
console.log(index,y);

var index = 10;
var y = index++ //11
console.log(index,y);

var index = 10;
var y = index--//
console.log(index,y);

//post increment++//pre//pre decriment --index
var index = 10;
var y = index++//--  index = index +1;
console.log(`index:${index},y: ${y}`); // output 10 11