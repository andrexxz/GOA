/*// 🍵 Async/Await Task: "Boil Water for Tea"
// Scenario:
// You are making tea. To do it, you need to follow these exact steps in order, and each one takes time (simulated with setTimeout inside Promises).

// 🧩 Steps:
// 1. Boil water – Takes 2 seconds. Log: "Water is boiling..."

// 2. Add tea bag – Takes 1 second. Log: "Tea bag added."

// 3. Steep tea – Takes 3 seconds. Log: "Tea is steeping..."

// 4. Ready to drink – No delay. Just log: "Tea is ready to drink!"


-
/ ☕ Async/Await Task: "Brew Coffee"
// Scenario:
// You’re making a perfect cup of coffee.

// 🧩 Steps:
// 1. Grind beans – 1.5 sec → "Grinding beans..."
// 2. Boil water – 2 sec → "Water is boiling..."
// 3. Brew coffee – 3 sec → "Brewing coffee..."
// 4. Pour and serve – no delay → "Coffee is ready!"

-
// 🍞 Async/Await Task: "Make Toast"
// Scenario:
// Morning breakfast vibes. Toast is on the way.

// 🧩 Steps:
// 1. Put bread in toaster – 1 sec → "Bread in toaster..."
// 2. Toasting – 2.5 sec → "Toasting..."
// 3. Butter it – 1 sec → "Spreading butter..."
// 4. Done – no delay → "Toast is ready!"


-
// 🚗 Async/Await Task: "Morning Commute"
// Scenario:
// Getting to work with real-world delays.

// 🧩 Steps:
// 1. Start engine – 1 sec → "Engine started..."
// 2. Drive – 4 sec → "Driving..."
// 3. Traffic jam – 3 sec → "Stuck in traffic..."
// 4. Arrived – no delay → "You’ve arrived!"


-
// 🧼 Async/Await Task: "Do Laundry"
// Scenario:
// Clean clothes cycle. The sacred weekend ritual.

// 🧩 Steps:
// 1. Wash clothes – 3 sec → "Washing..."
// 2. Rinse – 2 sec → "Rinsing..."
// 3. Spin – 1.5 sec → "Spinning..."
// 4. Done – no delay → "Laundry complete!"
-
// 🍝 Async/Await Task: "Cook Pasta"
// Scenario:
// Time to chef it up, Italian-style.

// 🧩 Steps:
// 1. Boil water – 2 sec → "Water boiling..."
// 2. Add pasta – 1 sec → "Pasta added..."
// 3. Cook – 5 sec → "Cooking pasta..."
// 4. Drain and serve – no delay → "Pasta is ready!" */
async function boilWaterForTea() {
    console.log("Water is boiling...");
    return new Promise(resolve => setTimeout(resolve, 2000));
}
async function addTeaBag() {
    console.log("Tea bag added.");
    return new Promise(resolve => setTimeout(resolve, 1000));
}
async function steepTea() {
    console.log("Tea is steeping...");
    return new Promise(resolve => setTimeout(resolve, 3000));
}
async function readyToDrink() {
    console.log("Tea is ready to drink!");
}
async function makeTea() {
    await boilWaterForTea();
    await addTeaBag();
    await steepTea();
    readyToDrink();
}
// Call the function to make tea
makeTea().then(() => console.log("Enjoy your tea!"));

// 🍵 Async/Await Task: "Brew Coffee"
async function grindBeans() {
    console.log("Grinding beans...");
    return new Promise(resolve => setTimeout(resolve, 1500));
}
async function boilWaterForCoffee() {
    console.log("Water is boiling...");
    return new Promise(resolve => setTimeout(resolve, 2000));
}
async function brewCoffee() {
    console.log("Brewing coffee...");
    return new Promise(resolve => setTimeout(resolve, 3000));
}
async function pourAndServe() {
    console.log("Coffee is ready!");
}
async function brewCoffeeProcess() {
    await grindBeans();
    await boilWaterForCoffee();
    await brewCoffee();
    pourAndServe();
}
// Call the function to brew coffee
brewCoffeeProcess().then(() => console.log("Enjoy your coffee!"));

// 🍞 Async/Await Task: "Make Toast"
async function putBreadInToaster() {
    console.log("Bread in toaster...");
    return new Promise(resolve => setTimeout(resolve, 1000));
}
async function toasting() {
    console.log("Toasting...");
    return new Promise(resolve => setTimeout(resolve, 2500));
}
async function butterIt() {
    console.log("Spreading butter...");
    return new Promise(resolve => setTimeout(resolve, 1000));
}
async function toastReady() {
    console.log("Toast is ready!");
}
async function makeToast() {
    await putBreadInToaster();
    await toasting();
    await butterIt();
    toastReady();
}
// Call the function to make toast
makeToast().then(() => console.log("Enjoy your toast!"));

// 🚗 Async/Await Task: "Morning Commute"
async function startEngine() {
    console.log("Engine started...");
    return new Promise(resolve => setTimeout(resolve, 1000));
}
async function drive() {
    console.log("Driving...");
    return new Promise(resolve => setTimeout(resolve, 4000));
}
async function trafficJam() {
    console.log("Stuck in traffic...");
    return new Promise(resolve => setTimeout(resolve, 3000));
}
async function arrived() {
    console.log("You’ve arrived!");
}
async function morningCommute() {
    await startEngine();
    await drive();
    await trafficJam();
    arrived();
}
// Call the function for morning commute
morningCommute().then(() => console.log("Have a great day at work!"));

// 🧼 Async/Await Task: "Do Laundry"
async function washClothes() {
    console.log("Washing...");
    return new Promise(resolve => setTimeout(resolve, 3000));
}
async function rinse() {
    console.log("Rinsing...");
    return new Promise(resolve => setTimeout(resolve, 2000));
}
async function spin() {
    console.log("Spinning...");
    return new Promise(resolve => setTimeout(resolve, 1500));
}
async function laundryComplete() {
    console.log("Laundry complete!");
}
async function doLaundry() {
    await washClothes();
    await rinse();
    await spin();
    laundryComplete();
}
// Call the function to do laundry
doLaundry().then(() => console.log("Your clothes are fresh and clean!"));

// 🍝 Async/Await Task: "Cook Pasta"    
async function boilWaterForPasta() {
    console.log("Water boiling...");
    return new Promise(resolve => setTimeout(resolve, 2000));
}
async function addPasta() {
    console.log("Pasta added...");
    return new Promise(resolve => setTimeout(resolve, 1000));
}
async function cookPasta() {
    console.log("Cooking pasta...");
    return new Promise(resolve => setTimeout(resolve, 5000));
}
async function pastaReady() {
    console.log("Pasta is ready!");
}
async function cookPastaProcess() {
    await boilWaterForPasta();
    await addPasta();
    await cookPasta();
    pastaReady();
}
// Call the function to cook pasta
cookPastaProcess().then(() => console.log("Enjoy your pasta!"));
