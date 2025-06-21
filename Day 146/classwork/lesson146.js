/*# Level 146:

# 1.  Use Promise.all() to wait for three people to say "Hi!" and then log the result.

Create three promises that each resolve after a short time with:

"Hi from Alice"

"Hi from Bob"

"Hi from Charlie"

Use Promise.all() to wait for all three greetings.

Log the array of messages when all are done
*/
const alicePromise = new Promise((resolve) => {
    setTimeout(() => resolve("Hi from Alice"), 1000);
}
);
const bobPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Hi from Bob"), 1500);
}
);
const charliePromise = new Promise((resolve) => {
    setTimeout(() => resolve("Hi from Charlie"), 2000);
}
);  
Promise.all([alicePromise, bobPromise, charliePromise])
    .then((messages) => {
        console.log(messages); // Log the array of messages when all are done
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
// This will log an array like ["Hi from Alice", "Hi from Bob", "Hi from Charlie"]
// after all promises are resolved.