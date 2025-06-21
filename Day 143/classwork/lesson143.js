/*# Level 143:

# 1. დაწერეთ სინქრონული და ასინქრონული კოდი და ახსენით კომენტარებით.*/
// Synchronous code example
function synchronousExample() {
    console.log("Start synchronous code");
    for (let i = 0; i < 5; i++) {
        console.log(`Synchronous iteration: ${i}`);
    }
    console.log("End synchronous code");
}
synchronousExample();
// Asynchronous code example using setTimeout
function asynchronousExample() {
    console.log("Start asynchronous code");
    setTimeout(() => {
        console.log("Asynchronous operation completed after 2 seconds");
    }, 2000); // This will execute after 2 seconds
    console.log("End asynchronous code");
}
asynchronousExample();
// Asynchronous code example using Promises
function promiseExample() {
    console.log("Start promise code");
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after 3 seconds");
        }, 3000); // This will resolve after 3 seconds
    });
    
    myPromise.then((message) => {
        console.log(message);
    });
    
    console.log("End promise code");
}
promiseExample();
// Asynchronous code example using async/await
async function asyncAwaitExample() {
    console.log("Start async/await code");
    
    const myAsyncFunction = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Async function resolved after 4 seconds");
            }, 4000); // This will resolve after 4 seconds
        });
    };
    
    const result = await myAsyncFunction();
    console.log(result);
    
    console.log("End async/await code");
}
asyncAwaitExample();
