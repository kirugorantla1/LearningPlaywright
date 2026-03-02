
    let attempts=0;
    let max_attempt=5;
    let success = false;
    do{
        attempts++;
        let random_value = Math.random();
        console.log("Total attempts are", attempts);
        if (random_value> 0.6 ){
            console.log(`Attempt ${attempts}: SUCCESS (Response 200 OK)`);
            success = true;
        }
        else {
            console.log(`Attempt ${attempts}: Failed (Timeout/Error)` )

        }
    } while(!success && attempts < max_attempt)
        if(success){
            console.log("API Succeed in", attempts, "attempts")
        }
        else {
            console.log("API failed in",max_attempt,"attempts")
        }
        