console.log(
  `Assignment 01---------------------------------------------------------------------------------------------------------- `
);
const professor = {
  id: 123456,
  name: "Dr.Mohit Sharma",
  subject: "Catalysis",
  dept: "Catalysis and Inorganic Division",
  address: "Pune",
  degrees: {
    engineering: "CSC",
    PHD: "ADV Computing",
    Mphil: "Computer Science",
    add: function () {
      return this.engineering + " " + this.PHD + " " + this.Mphil;
    },
  },
  certificate: ["Hacker Rank Participation", "IFE Course", "Adv Programming"],
};
console.log(
  `1.------------------------------------------Add Properties of Professor------------------------------------------------\n`
);
// console.log(Object.keys(professor));
console.log(professor);
console.log(
  `2.------------------------------------------Add Nested Object as Degrees-----------------------------------------------\n`
);
console.log(professor.degrees);
console.log(
  `3.----------------------------------------Add Array in Certificate Properties-------------------------------------------\n`
);
console.log(professor.certificate);
console.log(
  `4.----------------------------------------Concat All Degrees and return as String---------------------------------------\n`
);
const totalDegree = professor.degrees.add();
//   console.log(professor.degrees);
console.log(`--> Total Degrees are : ${totalDegree}`);
console.log(
  `5.-----------------------------------------Add New Properties totalExperience-------------------------------------------\n`
);
professor.totalExperience = "14 Years";
console.log(`--> totalExperience`, professor.totalExperience);
console.log(
  `6.---------------------------------------------Update Propertie Subject--------------------------------------------------\n`
);
console.log(professor);
professor.subject = "Chemical Engineering";
console.log(`Update Subject Properties : `, professor.subject);
console.log(
  `7.---------------------------Add New Certificate "Oracle Certified" in a Last Position ----------------------------------\n`
);
console.log(professor.certificate);
//   professor.certificate.fourth="Oracle Certified"
const lastElement = professor.certificate.push("Oracle Certified");
console.log(professor.certificate);
