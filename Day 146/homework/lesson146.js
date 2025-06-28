/*Level 146:
Basic Promise: Wait and Greet
Write a Promise that resolves after 2 seconds with the message "Hello, friend!", and log the result with .then().
Promise.all: Everyone Must Arrive
You have 3 promises that resolve at different times with different names ("Anna", "Ben", "Charlie"). Use Promise.all() to log:
"Everyone arrived: [Anna, Ben, Charlie]"
Promise.race: First to Ping
Three servers return their names after 1–3 seconds. Use Promise.race() to log the first server to respond.
Promise.any: First Success is Enough
Out of three Promises:

Two reject with error messages

One resolves with "Success!"
Use Promise.any() to log the successful message, ignoring the errors.
Promise.allSettled: Final Report
Three API calls return either resolved or rejected promises. Use Promise.allSettled() to print a report of all results, like:
Promise Chain: Sequential Tasks
Chain a promise that:

Resolves to a number (e.g. 5)

Adds 10 to it

Logs the final value: 15
Use .then() chaining.
Promise.any Fallback: All Failed
Use Promise.any() with 3 promises that all reject. Catch the error and log:
"All options failed: [Server A down, Timeout, Network error]"
(Hint: Use an AggregateError's .errors property)
Race with Rejection
Use Promise.race() with:

One promise that resolves after 2s

One that rejects after 1s
Catch the rejection and log: "Race failed: Too slow!"
Timeout Strategy with Race
Create a real scenario:

A fake API call resolves after 3s

A timeout promise rejects after 2s
Use Promise.race() to simulate:
"⏰ Request timed out!"
All Settled Summary Formatter
You’re given Promise.allSettled() results. Loop over them and print:

If fulfilled: "✔ Success: [value]"

If rejected: "❌ Failed: [reason]" 
 */
const basicPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Hello, friend!"), 2000);
    }
    );
    basicPromise
    .then((message) => {
        console.log(message); // Logs "Hello, friend!" after 2 seconds
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
    
    // Promise.all: Everyone Must Arrive
    const annaPromise = new Promise((resolve) => {
        setTimeout(() => resolve("Anna"), 1000);
    }
    );
    const benPromise = new Promise((resolve) => {
        setTimeout(() => resolve("Ben"), 1500);
    }
    );
    const charliePromise = new Promise((resolve) => {
        setTimeout(() => resolve("Charlie"), 2000);
    }
    );
    Promise.all([annaPromise, benPromise, charliePromise])  
        .then((names) => {
            console.log(`Everyone arrived: [${names.join(", ")}]`); // Logs "Everyone arrived: [Anna, Ben, Charlie]"
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        }); 
    // Promise
