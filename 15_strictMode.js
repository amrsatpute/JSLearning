//myName = "Virat"; // Not allowed
let myName = "Virat";
console.log(myName);

person = {  // Not allowed to define an object without var, let and const
    firstName: "Virat",
    lastName: "Kohli",
    age : 33
}

'use strict'
//myName = "Virat"; // Not allowed
let myName2 = "Virat";
console.log(myName2);
// delete myName; //  Not allowed

//  person = {  // Not allowed to define an object without var, let and const
//     firstName: "Virat",
//     lastName: "Kohli",
//     age : 33
// }

const student = {
    rollNo: 34,
    age: 17,
    city: "PUNE"
}
student = null;
// delete student; // Not allowed in strict mode