async function morningCommute() {
    console.log("Engine started...");
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Driving...");
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    console.log("Stuck in traffic...");
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log("You’ve arrived!");
    }
morningCommute();
        