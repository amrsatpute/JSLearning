var leapYear = function checkeLeapYear(year) {
  if (year % 4 == 0) {
    console.log(`The Given year "${year}" is : Leap Year`);
  }
  if (year % 4 != 0 && typeof year == "number") {
    console.log(`The Given year "${year}" is : not Leap Year`);
  }
  if (year == undefined || year == NaN || year == "twenty twenty") {
    console.log(
      `The Given year "${year}" is not valid ,please provide valid data`
    );
  }
};
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
