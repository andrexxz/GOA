/*Level 139:
TASK 1: Create a Temperature Converter Class
Goal: Build a class that:

Takes Celsius in the constructor.

Has a get fahrenheit property that returns the temperature in Fahrenheit.

Has a static fromFahrenheit(f) method that returns a new object with the right Celsius value.

🔁 Hint: F = C × 1.8 + 32; C = (F - 32) / 1.8
-
TASK 2: Create a Circle Class with Static Utility
Goal: Make a Circle class that:

Takes a radius in the constructor.

Has a get area to return area of the circle.

Has a static isValidRadius(r) that checks if r is a positive number.

Area formula: π × r² 
-
TASK 3: Car Class with Speed Control
Goal: Create a class Car that:

Has a constructor with brand, model, and speed.

Has a get info that returns: "Brand Model is going at Speed km/h".

Has a static compareSpeed(car1, car2) that returns the faster car.

Bonus: Return the car object with the higher speed. 
-
TASK 4: Bank Account Class
Goal: Make a class BankAccount that:

Takes ownerName and initialBalance.

Has a get balance to read the balance.

Has a static totalAccountsCreated counter (use a static property).

Each time a new account is created, increment the counter.
-
TASK 5: Book Library Class
Goal: Build a Book class that:

Has title, author, and pages.

get summary returns: "Title by Author - Pages pages".

static isLongBook(book) returns true if book has more than 300 pages. */
class TemperatureConverter {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    static fromFahrenheit(f) {
        const celsius = (f - 32) / 1.8;
        return new TemperatureConverter(celsius);
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    static isValidRadius(r) {
        return typeof r === 'number' && r > 0;
    }
}   
class Car {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }

    get info() {
        return `${this.brand} ${this.model} is going at ${this.speed} km/h`;
    }

    static compareSpeed(car1, car2) {
        return car1.speed > car2.speed ? car1 : car2;
    }
}
class BankAccount {
    static totalAccountsCreated = 0;

    constructor(ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
        BankAccount.totalAccountsCreated++;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        if (value < 0) {
            throw new Error("Balance cannot be negative");
        }
        this._balance = value;
    }
}
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    get summary() {
        return `${this.title} by ${this.author} - ${this.pages} pages`;
    }

    static isLongBook(book) {
        return book.pages > 300;
    }
}
