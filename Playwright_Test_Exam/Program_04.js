
let ispresent = true;
let isdisplayed =true;
let isenabled = false;


if(ispresent===false){
    console.log("Element is not visible");
}
else if(ispresent===true && isdisplayed===true && isenabled===true){
    console.log("Element present");
}
else if(ispresent===true && isdisplayed===true && isenabled===false){
    console.log("Present  but not enabled")
}
else if(ispresent===true && isdisplayed===false){
    console.log("Element is hidden")
}

let severity = !ispresent ? "critical" : (!isdisplayed || !isenabled) ? "Warning" : "ok";

console.log("severity is", severity)

