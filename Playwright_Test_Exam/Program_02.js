
let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let ispass =0;
let isfail=0;
let isskip=0;


for (i=0; i<testResults.length; i++){
    if(testResults[i]==="pass"){
        ispass++;
        
    }
    else if(testResults[i] ==="fail") {
        isfail++;
    }
    else if(testResults[i]==="skip"){
        isskip++;
    }
    
}
let pass_rate = (ispass/testResults.length) * 100;
    console.log("ispass:",ispass);
    console.log("isfail", isfail);
    console.log("skip is", isskip);
    console.log("Total Value is", testResults.length);
    console.log("Passrate", pass_rate);

    if (isfail===0){
        console.log("Ready for release");
    }
    else if(isfail <=2){
        console.log("Review")
    }
    else if(isfail>2){
        console.log("Block");
    }