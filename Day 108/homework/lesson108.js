// Task 1: Create a function that displays the current date and time in the format YYYY-MM-DD HH:MM:SS.
function displayCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
console.log(displayCurrentDateTime());

// Task 2: Create a function that takes a user's birthdate as input and calculates their age in years, months, and days.
function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return `Age: ${years} years, ${months} months, and ${days} days`;
}

// Example usage: Display result on a webpage
function displayAgeOnWebpage(birthdate) {
    const ageResult = calculateAge(birthdate);
    const resultElement = document.createElement('p');
    resultElement.textContent = ageResult;
    document.body.appendChild(resultElement);
}

// Task 3: Write a function that takes a date as input and displays the corresponding day of the week.
function getDayOfWeek(dateInput) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateInput);
    return daysOfWeek[date.getDay()];
}


// Task 4: Create a timer that starts counting from 0 and updates every second.
function startTimer() {
    let counter = 0;
    setInterval(() => {
        console.log(`Timer: ${counter++} seconds`);
    }, 1000);
}

// Task 5: Display the current time (hours, minutes, and seconds) and update every second.
function displayCurrentTime() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
    }, 1000);
}

// Task 6: Log a random number between 0 and 1 to the console every second.
function logRandomNumber() {
    setInterval(() => {
        console.log(`Random Number: ${Math.random()}`);
    }, 1000);
}


// Task 7: Delayed Message
function displayDelayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}


// Task 8: Simple Greeting Message
function logGreetingMessage() {
    setTimeout(() => {
        console.log("Hello! This is a delayed greeting.");
    }, 2000); // 2-second delay
}


// Task 9: Delayed Chain of Functions
function logMessage1() {
    console.log("Message 1: This is the first message.");
}

function logMessage2() {
    console.log("Message 2: This is the second message.");
}

function logMessage3() {
    console.log("Message 3: This is the third message.");
}

function executeDelayedChain() {
    setTimeout(() => {
        logMessage1();
        setTimeout(() => {
            logMessage2();
            setTimeout(() => {
                logMessage3();
            }, 2000); // 2-second delay for Message 3
        }, 2000); // 2-second delay for Message 2
    }, 2000); // 2-second delay for Message 1
}


// Task 10: Personalized Dynamic Greeting
function displayDynamicGreeting() {
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good Morning";
        } else if (hours < 18) {
            greeting = "Good Afternoon";
        } else {
            greeting = "Good Evening";
        }

        console.log(greeting);
    }, 1000);
}