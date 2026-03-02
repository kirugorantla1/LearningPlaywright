let  marks= "seven";
if(typeof marks !=="number"){
    console.log("The given input is not a number");
}

if(marks<=0 || marks>=100){
    console.log("Marks are not valid");
}

if(marks>=90 && marks<=100){
    console.log("A");
}
else if(marks>=80 && marks<89){
    console.log("B");
}
else if(marks>=70 && marks<79){
    console.log("C");
}
else if(marks>=60 && marks <69){
    console.log("D");
}
else if(marks>=0 && marks <59){
    console.log("E");
}
else{
    console.log("Invalid marks");
}
