console.log(`==============Set Of Object Assignment B===============`);
console.log(
  `-------Object Created Using Class and initializwd using constructor---------- `
);
let bank = {
  bankName: "bankName",
  location: "location",
  accountNumber: "accountNumber",
  ifscCode: "ifscCode",
  interestRate: "interestRate",
};

class Bank {
  constructor(bankName, location, accountNumber, ifscCode, interestRate) {
    this.bankName = bankName;
    this.location = location;
    this.accountNumber = accountNumber;
    this.ifscCode = ifscCode;
    this.interestRate = interestRate;
  }
}
const axisBank = new Bank("Axis Bank", "Dharashiv", "98282727", "AXIS003", "12.4");
console.log(axisBank);

const sbiBank = new Bank("SBI Bank", "Thane", "12345678", "SBI77699", "8.50");
console.log(sbiBank);

const iciciBank = new Bank(
  "ICICI Bank",
  "Solapur",
  "9872662",
  "ICICI008",
  "12356"
);
console.log(iciciBank);

const kotakBank = new Bank("KOTAK Bank", "Sihagad", "11223344", "KTK0044", "10.9");
console.log(kotakBank);

const hdfcBank = new Bank("HDFC Bank", "Latur", "10111213", "HDFC00998", "11.7");
console.log(hdfcBank);

const saraswatBank = new Bank("Saraswat Bank", "pune", "09977333", "SRK00883", "7.80");
console.log(saraswatBank);

const setOfBank = new Set();
setOfBank.add(axisBank);
setOfBank.add(sbiBank);
setOfBank.add(iciciBank);
setOfBank.add(kotakBank);
setOfBank.add(hdfcBank);
setOfBank.add(saraswatBank);

console.log(`-----------Add All Object in Set---------------`);
console.log(setOfBank);

console.log(`-----------Traverse Set using For Of loop---------------`);
for (const bank of setOfBank) {
  console.log(
    `Bank Name is: ${bank.bankName} , Bank Location is : ${bank.location}`
  );
}
