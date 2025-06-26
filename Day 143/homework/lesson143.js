/*# Level 143:

** Here are 10 simple tasks to help you practice the Promise constructor and working with promises in JavaScript:
**
---

# 1. Create a basic Promise that resolves immediately,
Task: Use the Promise constructor to create a promise that resolves with the message "Hello, Promise!".,

---

# 2. Create a Promise that rejects with an error,

Task: Write a promise that rejects with the message "Something went wrong!" and handle the rejection with .catch().,

---

# 3. Use setTimeout to resolve a Promise after 2 seconds,

Task: Create a promise that waits for 2 seconds using setTimeout and then resolves with "2 seconds have passed".,

---

# 4. Handle both resolve and reject outcomes,

Task: Write a promise that randomly either resolves with "Success!" or rejects with "Failed!" using Math.random(). Handle both outcomes with .then() and .catch().,

---

# 5. Create a chain of promises using .then(),

Task: Create a promise that resolves with the number 5. Chain multiple .then() calls to multiply the number by 2 in each step.,

---

# 6. Simulate a network request using Promises,

Task: Create a promise that resolves with "Data fetched!" after 1 second. Use setTimeout to simulate the delay.*/
function createBasicPromise() {
    return new Promise((resolve) => {
        resolve("Hello, Promise!");
    });
}

function createRejectedPromise() {
    return new Promise((_, reject) => {
        reject("Something went wrong!");
    });
}
function resolveAfterTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2 seconds have passed");
        }, 2000);
    });
}
function randomOutcomePromise() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Success!");
        } else {
            reject("Failed!");
        }
    });
}
function chainPromises() {
    return new Promise((resolve) => {
        resolve(5);
    }).then((num) => num * 2)
      .then((num) => num * 2)
      .then((num) => num * 2);
}
function simulateNetworkRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}
function runPromises() {
    createBasicPromise().then(console.log);
    
    createRejectedPromise().catch(console.error);
    
    resolveAfterTwoSeconds().then(console.log);
    
    randomOutcomePromise()
        .then(console.log)
        .catch(console.error);
    
    chainPromises().then(result => console.log(`Final result: ${result}`));
    
    simulateNetworkRequest().then(console.log);
}
runPromises();
// Exporting the functions for testing or further use
export {
    createBasicPromise,
    createRejectedPromise,
    resolveAfterTwoSeconds,
    randomOutcomePromise,
    chainPromises,
    simulateNetworkRequest,
    runPromises
    };