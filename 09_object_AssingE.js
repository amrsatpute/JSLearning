const sbiBank = {
  bankName: "SBI Bank",
  location: "paud Road Pune",
  accountNo: 35772678822,
  Ifsc: "SBI445566",
  interestRate: 7.50,
  showDetails: function () {
    console.log(`---------- SBI Bank DEtails ----------`);
    console.log(
      `Bank Name:${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC coad: ${this.Ifsc}, Interest rate: ${this.interestRate}`
    );
  },
};
sbiBank.showDetails();

axisBank = {
  bankName: "Axis Bank",
  location: "Latur",
  accountNo: 444003737,
  Ifsc: "AXIS88776ku",
  interestRate: 7.33,
  showDetails: function () {
    console.log(`---------- Axis Bank DEtails ----------`);
    console.log(
      `Bank Name:${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC coad: ${this.Ifsc}, Interest rate: ${this.interestRate}`
    );
  },
};
axisBank.showDetails();

hdfcBank = {
  bankName: "HDFC Bank",
  location: "Dharashiv",
  accountNo: 50003200453,
  Ifsc: "HDFC558837",
  interestRate: 11.5,
  showDetails: function () {
    console.log(`---------- HDFC Bank DEtails ----------`);
    console.log(
      `Bank Name:${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC coad: ${this.Ifsc}, Interest rate: ${this.interestRate}`
    );
  },
};
hdfcBank.showDetails();

yesBank = {
  bankName: "Yes Bank",
  location: "Mumabi",
  accountNo: 3633473898,
  Ifsc: "YES663388",
  interestRate: 9.80,
  showDetails: function () {
    console.log(`---------- YES Bank DEtails ----------`);
    console.log(
      `Bank Name:${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC coad: ${this.Ifsc}, Interest rate: ${this.interestRate}`
    );
  },
};
yesBank.showDetails();
