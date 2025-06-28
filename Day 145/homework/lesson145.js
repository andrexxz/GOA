/*Level 145:
You are given three promises that resolve after different times. Use Promise.all to wait until all of them are done, then log the result array.
One of the promises rejects. Use Promise.all to observe what happens, and catch the error.
(Why does the whole thing crash? That's the point!)

Use Promise.any to get the first successful result out of these promises, even if some fail. Then log the result.
You have three promises that resolve after different times. Only the fastest one should win. Use Promise.any to log the winner.
 
What happens if all promises fail in Promise.any? Test it out. Catch the AggregateError and log the message. */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 3 rejected"), 3000);
}); 
// Using Promise.all to wait for all promises
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved successfully:");
        results.forEach(result => console.log(result));
    })
    .catch((error) => {
        console.error("One or more promises failed:", error);
    });
    // Using Promise.any to get the first successful result
    Promise.any([promise1, promise2, promise3])         
    .then((result) => {
        console.log("First successful result:", result);
    })
    .catch((error) => {
        console.error("All promises failed:", error);
    });
    // Using Promise.any with all promises failing
    const promise4 = new Promise((resolve, reject) => {
        setTimeout(() => reject("Promise 4 rejected"), 1000);
    }
    );  
    const promise5 = new Promise((resolve, reject) => {
        setTimeout(() => reject("Promise 5 rejected"), 2000);
    }); 
    const promise6 = new Promise((resolve, reject) => {
        setTimeout(() => reject("Promise 6 rejected"), 3000);
    });
    Promise.any([promise4, promise5, promise6])
        .then((result) => {
            console.log("First successful result:", result);
        })
        .catch((error) => {
            console.error("All promises failed:", error);
            if (error instanceof AggregateError) {
                console.error("AggregateError message:", error.message);
            }
        });
        