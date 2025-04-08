// 1. Named function
function isEvenOrOddNamed(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 2. Anonymous function
const isEvenOrOddAnonymous = function(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

// 3. Arrow function
const isEvenOrOddArrow = (number) => {
    return number % 2 === 0 ? "Even" : "Odd";
};

const userInput = parseInt(prompt("Enter a number: "), 10);
console.log("Named function result:", isEvenOrOddNamed(userInput));
console.log("Anonymous function result:", isEvenOrOddAnonymous(userInput));
console.log("Arrow function result:", isEvenOrOddArrow(userInput));