/*# Level 144:

# 1. Promises ის საშუალებით შექმენით პროგრამა, რომელიც Random პრინციპით  გამოიტანს რიცხვს 0 - დან 100 - მდე. 

# თუ რიცხვი იქნება 50 ზე მეტი, მაშინ უნდა გამოიტანოს Success, ხოლო თუ იქნება 50 - ზე ნაკლები, მაშინ უნდა გამოიტანოს Failure.
*/
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100
        setTimeout(() => { // Simulate an asynchronous operation
            if (randomNumber >= 50) {
                resolve(`Success: The random number is ${randomNumber}`);
            } else {
                reject(`Failure: The random number is ${randomNumber}`);
            }
        }, 1000); // Delay of 1 second before resolving or rejecting the promise
    });
}
getRandomNumber()
    .then(result => {
        console.log(result); // Log success message
    })
    .catch(error => {
        console.error(error); // Log failure message
    });