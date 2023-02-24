console.log("*****TCS Interview ALLOW/Dont Allow*****");

 function tcsCriterea(gradScore,hscScore,sscScore,candidateName){
  var result = (gradScore >= 70 || hscScore >= 80 || sscScore > 90) ? "ALLOW HIM FOR INTERVIEW" : "dONT ALLOW";
  console.log(`TCS Critarea: ${result}`);
 }
  tcsCriterea(80,86,90, "ABC");
  tcsCriterea(70,65,55, "BCA");
   tcsCriterea(60,79,88, "MSC");