function factorialOfnum1(num1) {
    let result = 1;
if ((typeof num1!="number")||isNaN (num1)) {
  return `invalid Data`;
    }
for (let index = num1; index >= 1; index--) {
    let numindex=index;
    result=result* numindex;
    
}
return result;
  }
  
let factorialOf5 = factorialOfnum1(5);
console.log(`This Factorial of given number "5" is: ${factorialOf5}`);

let factorialOf3 = factorialOfnum1(3);
console.log(`This Factorial of given number "3" is: ${factorialOf3}`);

let factorialOf8 = factorialOfnum1(8);
console.log(`This Factorial of given number "8" is: ${factorialOf8}`);


let factorialOf9 = factorialOfnum1(9);
console.log(`This Factorial of given number "9" is: ${factorialOf9}`);

let factorialOf0 = factorialOfnum1(0);
console.log(`This Factorial of given number "8" is: ${factorialOf0}`);

let factorialOfUndefined = factorialOfnum1(undefined);
console.log(`This Factorial of given number "Undefined" is: ${factorialOfUndefined}`);

let factorialOfNaN = factorialOfnum1(NaN );
console.log(`This Factorial of given number "NaN " is: ${factorialOfNaN }`);

let factorialOfString = factorialOfnum1("String");
console.log(`This Factorial of given number "String " is: ${factorialOfString}`);


