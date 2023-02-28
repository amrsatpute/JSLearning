function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`The month is:${monthNumber}: January`);
      break;
      case 2:
        console.log(`The month is:${monthNumber}: February`);
        break;
    case 3:
      console.log(`The  month is:${monthNumber}: March`);
      break;
    case 4:
      console.log(`The  Month is:${monthNumber}: April`);
      break;
    case 5:
      console.log(`The Month Is:${monthNumber}: May `);
   break;
    case 6:
      console.log(`The Month Is:${monthNumber}: June`);
      break;
    case 7:
      console.log(`The Month Is:${monthNumber}: July`);
      break;
    case 8:
      console.log(`The Month Is:${monthNumber}: August`);
      break;
    case 9:
      console.log(`The Month Is:${monthNumber}: September`);
      break;
    case 10:
      console.log(`The Month Is:${monthNumber}: October`);
      break;
    case 11:
      console.log(`The Month Is:${monthNumber}: November`);
      break;
    case 12:
      console.log(`The Month Is:${monthNumber}: December`);
      break; 

    default:
        console.log(`The Month is ${monthNumber} invalid,provide valid data`);
    break;
  }
}
monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(undefined);
monthOfYear(null);
monthOfYear(NaN);
monthOfYear("String");




