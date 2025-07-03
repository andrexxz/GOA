/*# Level 159:

# 1. // 🍳 Async/Await Task: "Make an Omelette"

// 🧩 Steps:
// 1. Crack eggs – 1 sec → "Cracking eggs..."
// 2. Whisk – 1 sec → "Whisking..."
// 3. Cook on pan – 3 sec → "Cooking omelette..."
// 4. Serve – no delay → "Omelette is ready!"


# 2. // 🧽 Async/Await Task: "Clean the Room"

// 🧩 Steps:
// 1. Pick up clothes – 1.5 sec → "Picking up clothes..."
// 2. Vacuum floor – 2 sec → "Vacuuming..."
// 3. Make bed – 1 sec → "Making bed..."
// 4. Room is clean – no delay → "Room is spotless!"


# 3. // 🎥 Async/Await Task: "Upload a YouTube Video"

// 🧩 Steps:
// 1. Render video – 4 sec → "Rendering..."
// 2. Upload – 3 sec → "Uploading..."
// 3. Add title & tags – 1.5 sec → "Metadata added..."
// 4. Published – no delay → "Video is live!"



# 4. // 🧳 Async/Await Task: "Pack for a Trip"

// 🧩 Steps:
// 1. Choose clothes – 1.5 sec → "Picking outfits..."
// 2. Pack suitcase – 2 sec → "Packing..."
// 3. Double-check list – 1 sec → "Checking items..."
// 4. Done – no delay → "Ready to travel!"


# 5. // 🖥️ Async/Await Task: "Turn On Your PC"

// 🧩 Steps:
// 1. Push power button – 0.5 sec → "Powering on..."
// 2. Boot OS – 2.5 sec → "Booting up..."
// 3. Login – 1 sec → "Logging in..."
// 4. Desktop ready – no delay → "System is ready!"
// 
// # Level 159:

# 1. // 🍳 Async/Await Task: "Make an Omelette"

// 🧩 Steps:
// 1. Crack eggs – 1 sec → "Cracking eggs..."
// 2. Whisk – 1 sec → "Whisking..."
// 3. Cook on pan – 3 sec → "Cooking omelette..."
// 4. Serve – no delay → "Omelette is ready!"


# 2. // 🧽 Async/Await Task: "Clean the Room"

// 🧩 Steps:
// 1. Pick up clothes – 1.5 sec → "Picking up clothes..."
// 2. Vacuum floor – 2 sec → "Vacuuming..."
// 3. Make bed – 1 sec → "Making bed..."
// 4. Room is clean – no delay → "Room is spotless!"


# 3. // 🎥 Async/Await Task: "Upload a YouTube Video"

// 🧩 Steps:
// 1. Render video – 4 sec → "Rendering..."
// 2. Upload – 3 sec → "Uploading..."
// 3. Add title & tags – 1.5 sec → "Metadata added..."
// 4. Published – no delay → "Video is live!"



# 4. // 🧳 Async/Await Task: "Pack for a Trip"

// 🧩 Steps:
// 1. Choose clothes – 1.5 sec → "Picking outfits..."
// 2. Pack suitcase – 2 sec → "Packing..."
// 3. Double-check list – 1 sec → "Checking items..."
// 4. Done – no delay → "Ready to travel!"


# 5. // 🖥️ Async/Await Task: "Turn On Your PC"

// 🧩 Steps:
// 1. Push power button – 0.5 sec → "Powering on..."
// 2. Boot OS – 2.5 sec → "Booting up..."
// 3. Login – 1 sec → "Logging in..."
// 4. Desktop ready – no delay → "System is ready!"
// # 6. "Survive the Day as a JavaScript Dev"

// 🧠 Scenario:
// You’re a modern JavaScript developer. It's Monday. You have to wake up, do your morning routine, finish client work, deploy a project, and crash into bed—all in order, all simulated with async/await and setTimeout. Each step logs to the console. Each step has a fake delay. Don’t mess up… the client is watching 👀.

// 📋 Objectives (aka the Steps):



// Structure:


// 1. Wake up – 1 sec → "Waking up..."
// 2. Make coffee – 2 sec → "Brewing coffee..."
// 3. Check emails – 1.5 sec → "Reading emails..."
// 4. Fix urgent bug – 3 sec → "Fixing production bug..."
// 5. Attend meeting – 2 sec → "Zoom meeting... *yawn*"
// 6. Push code to GitHub – 1 sec → "Pushing commits..."
// 7. Deploy to production – 2.5 sec → "Deploying..."
// 8. Dinner and Netflix – 1 sec → "Unwinding with food and streaming..."
// 9. Sleep – no delay → "Day complete. Zzz..."


# 🔄 Wrap each step in a try/catch to simulate bugs or internet issues. */


async function makeOmelette() {
    try {
        console.log("Cracking eggs...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Whisking...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Cooking omelette...");
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        console.log("Omelette is ready!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
async function cleanRoom() {
    try {
        console.log("Picking up clothes...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log("Vacuuming...");
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log("Making bed...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Room is spotless!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
async function uploadYouTubeVideo() {
    try {
        console.log("Rendering...");
        await new Promise(resolve => setTimeout(resolve, 4000));
        
        console.log("Uploading...");
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        console.log("Metadata added...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log("Video is live!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
async function packForTrip() {
    try {
        console.log("Picking outfits...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log("Packing...");
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log("Checking items...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Ready to travel!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
async function turnOnPC() {
    try {
        console.log("Powering on...");
        await new Promise(resolve => setTimeout(resolve, 500));
        
        console.log("Booting up...");
        await new Promise(resolve => setTimeout(resolve, 2500));
        
        console.log("Logging in...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("System is ready!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
async function surviveDayAsDev() {
    try {
        console.log("Waking up...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Brewing coffee...");
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log("Reading emails...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log("Fixing production bug...");
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        console.log("Zoom meeting... *yawn*");
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log("Pushing commits...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Deploying...");
        await new Promise(resolve => setTimeout(resolve, 2500));
        
        console.log("Unwinding with food and streaming...");
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Day complete. Zzz...");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}