/*
# Level 106:

# 1. Leap year - Leap Year Challenge Exercise  ----- გააკეთეთ ეს დავალება py და js - ში
💪This is a Difficult Challenge 💪

Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

This is how to work out whether if a particular year is a leap year:

A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.



e.g. Is the year 2000 a leap year?:

2000 ÷ 4 = 500 (Leap)

2000 ÷ 100 = 20 (Not Leap)

2000 ÷ 400 = 5 (Leap!)



So the year 2000 is a leap year.

But the year 2100 is not a leap year because:

2100 ÷ 4 = 525 (Leap)

2100 ÷ 100 = 21 (Not Leap)

2100 ÷ 400 = 5.25 (Not Leap) 
https://www.youtube.com/watch?v=xX96xng7sAE - details about leap year
*/
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true; // Leap year
        } else {
            return false; // Not a leap year
        }
        } else {
        return true; // Leap year
        }
    } else {
        return false; // Not a leap year
    }
    }
/*
# 2.  - თქვენ აპირებთ დაწეროთ ფუნქცია, რომელიც შეარჩევს შემთხვევით სახელს სახელების სიიდან. შერჩეულმა პირმა უნდა გადაიხადოს ყველას საკვების გადასახადი.
# 3. FizzBuzz - პირობა - თუ რიცხვი სრულად იყოფა 3 ზე, მაშინ სიაში ჩაემატოს Fizz, თუ რიცხვი სრულადიყოფა 5 ზე, მაშინ ჩაემატოს Buzz, თუ რიცხვი სრულად იყოფა 3 ზე და 5 ზე, მაშინ ჩაემატოს FizzBuzz. ის რიცხვები რომლებიც იყოფა, უნდა ამოიშალოს
*/

function getRandomName(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function fizzBuzz() {
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}


//# 7. თქვენ უნდა დაწეროთ JavaScript ფუნქცია, რომელიც გენერირებს N რაოდენობის შემთხვევით რიცხვებს და მათ შეინახავს მასივში. ფუნქცია დააბრუნებს ამ რიცხვების საშუალო არითმეტიკულს.

function generateRandomNumbers(n) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
        numbers.push(randomNumber);
    }
    return numbers;
}

