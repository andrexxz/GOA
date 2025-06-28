/*# Level 157:


# 1. Promise - ზე დაწერეთ 3 მაგალითი და ახსენით კომენტარებით თითოეული ხაზი.

მაგალითი:

let name = 'davit';
// შევქმენით ცვლადი სახელწოდებით name და მივანიჭეთ მნიშვნელობა 'davit'

console.log(name);
// დავბეჭდეთ name ცვლადის მნიშვნელობა. */

// Example 1: Simple Promise
const simplePromise = new Promise((resolve, reject) => {
    const success = true; // Change to false to test rejection
    if (success) {
        resolve("Promise resolved successfully!"); // If successful, resolve the promise
    } else {
        reject("Promise rejected."); // If not successful, reject the promise
    }
});
simplePromise
    .then(result => console.log(result)) // If resolved, log the result
    .catch(error => console.error(error)); // If rejected, log the error    
// Example 2: Promise with setTimeout
const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This message is delayed by 2 seconds."); // Resolve after 2 seconds
    }, 2000);
});
delayedPromise
    .then(result => console.log(result)) // Log the result after the delay
    .catch(error => console.error(error)); // Log any error if it occurs
// Example 3: Promise with Math.random()
const randomPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random(); // Generate a random number between 0 and 1
    if (randomNumber > 0.5) {
        resolve(`Random number ${randomNumber} is greater than 0.5`); // If greater than 0.5, resolve the promise
    } else {
        reject(`Random number ${randomNumber} is less than or equal to 0.5`); // If not, reject the promise
    }
});
randomPromise
    .then(result => console.log(result)) // Log the result if resolved
    .catch(error => console.error(error)); // Log the error if rejected
