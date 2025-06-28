

/*  
Level 157:,
1 გააკეთეთ 6 მაგალითი Promise - ზე.,
2 მაგალითი ჩვეულებრივად,
2 მაგალითი Math ობიექტზე,
2 მაგალითი setTimeout - ზე.,
კომენტარების გამოყენებით თავიდან ბოლომდე ახსენით Promise.,
,
კომენტარების გამოყენებით თავიდან ბოლომდე ახსენით Fetch.,
,
კომენტარების გამოყენებით თავიდან ბოლომდე ახსენით API.,
,
კომენტარების გამოყენებით თავიდან ბოლომდე ახსენით JSON.,
,
გააკეთეთ Level 154 & 156 - ის საშინაო დავალებები.
// Level 157: Promises, Math, and setTimeout
// Task 1: Create 6 examples of Promises
// Example 1: Simple Promise
const simplePromise = new Promise((resolve, reject) => {
    const success = true; // Change to false to test rejection
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});
simplePromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
// Example 2: Promise with setTimeout
const delayedPromise = new Promise((resolve) => {               
    setTimeout(() => {
        resolve("This message is delayed by 2 seconds.");
    }, 2000);
});
delayedPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));  
// Example 3: Promise with Math.random()
const randomPromise = new Promise((resolve, reject) => {    
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve(`Random number ${randomNumber} is greater than 0.5`);
    } else {
        reject(`Random number ${randomNumber} is less than or equal to 0.5`);
    }
}
);
randomPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));  
// Example 4: Promise with Math operations
const mathPromise = new Promise((resolve, reject) => {  
    const a = 5;
    const b = 10;
    const sum = a + b;
    if (sum > 10) {
        resolve(`Sum is ${sum}, which is greater than 10.`);
    } else {
        reject(`Sum is ${sum}, which is not greater than 10.`);
    }
}   
);
mathPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
// Example 5: Promise with setTimeout and Math.random()
const timeoutRandomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Random number ${randomNumber} is greater than 0.5 after delay.`);
        } else {
            reject(`Random number ${randomNumber} is less than or equal to 0.5 after delay.`);
        }
    }, 3000);
}
);
timeoutRandomPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));  
// Example 6: Promise with multiple asynchronous operations
const asyncOperationsPromise = new Promise((resolve, reject) => {
    const operations = [1, 2, 3, 4, 5];
    const results = [];
    operations.forEach((op, index) => {
        setTimeout(() => {
            results.push(op * 2);
            if (index === operations.length - 1) {
                resolve(`All operations completed: ${results}`);
            }
        }, index * 1000); // Delay each operation by 1 second
    });
}   
);
asyncOperationsPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
// Task 2: Create 2 examples using Math object
// Example 1: Using Math.random()
const randomValue = Math.random();
console.log(`Random value between 0 and 1: ${randomValue}`);
// Example 2: Using Math.max() and Math.min()
const numbers = [5, 10, 15, 20, 25];
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);
console.log(`Max number: ${maxNumber}, Min number: ${minNumber}`);
// Task 3: Create 2 examples using setTimeout
// Example 1: Simple setTimeout
setTimeout(() => {
    console.log("This message is displayed after 3 seconds.");
}, 3000);   
// Example 2: setTimeout with a counter
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Counter: ${counter}`);
    if (counter === 5) {
        clearInterval(intervalId);
        console.log("Counter stopped after 5 seconds.");
    }
}, 1000); // Increment counter every second
// Task 4: Explain Promises, Fetch, API, and JSON using comments
Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They allow you to write cleaner asynchronous code by avoiding callback hell. A Promise can be in one of three states: pending, fulfilled, or rejected. You can use `.then()` to handle successful completion and `.catch()` to handle errors.
Fetch is a modern web API that allows you to make network requests to servers. It returns a Promise that resolves to the Response object representing the response to the request. You can use Fetch to retrieve data from APIs, submit forms, or perform other network operations.
APIs (Application Programming Interfaces) are sets of rules and protocols that allow different software applications to
communicate with each other. They define how requests and responses should be structured, enabling developers to access the functionality of a service or application without needing to understand its internal workings. APIs can be used for various purposes, such as retrieving data, submitting data, or performing actions on a server.
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read
and write for humans and machines. It is often used to transmit data between a server and a web application. JSON is based on a subset of JavaScript syntax and consists of key-value pairs, making it easy to represent structured data. It is commonly used in APIs to send and receive data in a standardized format.    



*/