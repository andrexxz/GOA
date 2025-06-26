/*Level 120:
ობიექტის თვისებების გამოტანა:
შექმენით ობიექტი, რომელიც წარმოადგენს ადამიანს (სახელი, ასაკი, ქალაქი).
გამოიყენეთ for...in მარყუჟი ობიექტის ყველა თვისების სახელისა და მნიშვნელობის კონსოლში გამოსატანად.
ობიექტის თვისებების ჯამი:
შექმენით ობიექტი, რომელიც წარმოადგენს პროდუქტების ფასებს.
გამოიყენეთ for...in მარყუჟი ყველა ფასის ჯამის გამოსათვლელად.
ობიექტის თვისებების ფილტრაცია:
შექმენით ობიექტი, რომელიც შეიცავს სხვადასხვა ტიპის მონაცემებს (სტრიქონები, რიცხვები, ბულეანები).
გამოიყენეთ for...in მარყუჟი მხოლოდ რიცხვითი მნიშვნელობების გამოსატანად.
ობიექტის გასაღებების სიის შექმნა:
შექმენით ობიექტი, რომელშიც მოცემულია წიგნების სახელები და ავტორები.
გამოიყენეთ for...in მარყუჟი და შექმენით მასივი, რომელიც შეიცავს მხოლოდ წიგნების სახელებს.
მასივის ელემენტების ჯამი:
შექმენით რიცხვების მასივი.
გამოიყენეთ for...of მარყუჟი მასივის ყველა ელემენტის ჯამის გამოსათვლელად.
სტრიქონის სიმბოლოების გამოტანა:
შექმენით სტრიქონი.
გამოიყენეთ for...of მარყუჟი სტრიქონის თითოეული სიმბოლოს კონსოლში გამოსატანად.
მასივის ელემენტების ფილტრაცია:
შექმენით სტრიქონების მასივი.
გამოიყენეთ for...of მარყუჟი მხოლოდ იმ სტრიქონების გამოსატანად, რომელთა სიგრძე 5-ზე მეტია.
მასივის ელემენტების გარდაქმნა:
შექმენით რიცხვების მასივი.
გამოიყენეთ for...of მარყუჟი და შექმენით ახალი მასივი, რომელიც შეიცავს თითოეული ელემენტის კვადრატს. */

// 1. ობიექტის თვისებების გამოტანა
const person = {
    name: "John",
    age: 30,
    city: "Tbilisi"
    };
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }

// 2. ობიექტის თვისებების ჯამი
const productPrices = {
    apple: 1.5,
    banana: 2.0,
    cherry: 3.0
};
let totalPrice = 0;
for (const key in productPrices) {
    totalPrice += productPrices[key];
}
console.log(`Total Price: ${totalPrice}`);
// 3. ობიექტის თვისებების ფილტრაცია
const mixedData = {
    name: "Alice",
    age: 25,
    isStudent: true,
    height: 170
};
for (const key in mixedData) {
    if (typeof mixedData[key] === 'number') {
        console.log(`${key}: ${mixedData[key]}`);
    }
}
// 4. ობიექტის გასაღებების სიის შექმნა
const books = {
    "To Kill a Mockingbird": "Harper Lee",
    "1984": "George Orwell",
    "The Great Gatsby": "F. Scott Fitzgerald"
};  
const bookTitles = [];
for (const key in books) {
    bookTitles.push(key);
}
console.log(`Book Titles: ${bookTitles.join(', ')}`);
// 5. მასივის ელემენტების ჯამი
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;
for (const number of numbersArray) {
    sum += number;
}
console.log(`Sum of Array Elements: ${sum}`);
// 6. სტრიქონის სიმბოლოების გამოტანა
const str = "Hello, World!";
for (const char of str) {
    console.log(char);
}
// 7. მასივის ელემენტების ფილტრაცია
const stringArray = ["apple", "banana", "cherry", "date", "fig", "grape"];
for (const str of stringArray) {
    if (str.length > 5) {
        console.log(str);
    }
    }
// 8. მასივის ელემენტების გარდაქმნა
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = [];
for (const number of numbers) {
     squaredNumbers.push(number ** 2);
}
console.log(`Squared Numbers: ${squaredNumbers.join(', ')}`);
