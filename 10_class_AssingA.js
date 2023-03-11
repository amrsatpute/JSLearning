console.log("==============<<<<< Step 01 <<<<=================");

class Vehicle {
  constructor(Carname, Model, Company, Price, color) {
    this.Carname = Carname;
    this.Model = Model;
    this.Company = Company;
    this.Price = Price;
    this.colour = color;
  }
}

const TataNexon = new Vehicle(
  "TataNexon",
  "XM",
  "TATA",
  "1175000",
  "White",
  11
);
console.log(TataNexon);
const MarutiSwift = new Vehicle("Swift", "Vxi", "Maruti", "675000", "Red");
console.log(MarutiSwift);
const MarutiBrezza = new Vehicle("Brezza", "VDi", "Maruti", "300000", "Black");
console.log(MarutiBrezza);
const thar = new Vehicle("Thar", "4*4", "Mahindra", "800023", "Black");
console.log(thar);
const skoda = new Vehicle("Fabia", "Tdi", "Skoda", "1800000", "Red");
console.log(skoda);

console.log("==============================================================");

console.log("=================<<<<<<Step 02 <<<<================");

class Collage {
  constructor(Collagename, Cource, City, Grade, Id) {
    this.Collagename = Collagename;
    this.Cource = Cource;
    this.City = City;
    this.Grade = Grade;
    this.Id = Id;
  }
}

const Jspm = new Collage("JSPM", "BE", "Hadpsar,Pune", "A++", "0514");
console.log(Jspm);
const Tulsi = new Collage("Tulsi Collage", "BCS", "Beed", "A++", "2020");
console.log(Tulsi);
const Ksk = new Collage("KSK", "Art", "Neknoor", "B+", "0955");
console.log(Ksk);
const DYpatil = new Collage("DyPatil", "Nursing", "Pimpary", "A++", "8002");
console.log(DYpatil);
console.log("=======================================================");

let traverseObject = function (params) {
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      const element = params[key];
      console.log(`${key} : ${element}`);
    }
  }
};
traverseObject(Jspm);
console.log("");

traverseObject(Ksk);
console.log("");

traverseObject(DYpatil);
console.log("");

traverseObject(Tulsi);
console.log("");

console.log(`-----------Step04----------`);

const num = 11;
let isprime = num > 1;
for (let index = 2; index < num; index++) {
  if (num % index === 0) {
    isprime = false;
    break;
  }
}
if (isprime) {
  console.log(`${num}is a prime number.`);
} else {
  console.log(`{num} is not prime number.`);
}
