// Example 1: Property shorthand
const name = "John";
const age = 30;
const person = { name, age };
console.log(person); // { name: 'John', age: 30 }

// Example 2: Method shorthand
const car = {
    brand: "Toyota",
    start() {
        console.log("Car started");
    },
};
car.start(); // Car started

// Example 3: Computed property names
const key = "color";
const value = "red";
const item = {
    [key]: value,
};
console.log(item); // { color: 'red' }

// Example 4: Dynamic property assignment
const propName = "isActive";
const user = {
    name: "Alice",
    [propName]: true,
};
console.log(user); // { name: 'Alice', isActive: true }

// Example 5: Combining variables and methods
const type = "fruit";
const quantity = 10;
const basket = {
    type,
    quantity,
    describe() {
        return `This basket contains ${this.quantity} ${this.type}s.`;
    },
};
console.log(basket.describe()); // This basket contains 10 fruits.