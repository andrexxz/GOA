/*# Level 145:

# 1. შექმენით 3 promise და შეამოწმეთ all method - ის გამოყენებით, ყველა პირობა არის თუ არა ჭეშმარიტი, თუ ჭეშმარიტია, გამოიტანეთ Success, ხოლო სხვა შემთხვევაში გამოიტანეთ Failure
*/
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 resolved"), 3000);
});
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved successfully:");
        results.forEach(result => console.log(result));
        console.log("Success");
    })
    .catch((error) => {
        console.error("One or more promises failed:", error);
        console.log("Failure");
    });