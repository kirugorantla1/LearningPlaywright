
let year= -400;
if (year %4==0 && year %100!=0  || year %400==0){
    console.log("This is a leap year");
}
else if ( year >0){
    console.log("This is invalid year");
    }
else {
    console.log("This is not leap year");
}
