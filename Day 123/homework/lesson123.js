/*Level 123:
Task 1: Checking for All Even Numbers
You are given an array of numbers. Use the every() method to determine if all the numbers in the array are even. Store the result (a boolean value) in a variable named allEven.



Task 2: Checking for Existence of a Specific String
You have an array of strings. Use the some() method to check if the array contains at least one string that has a length greater than 5 characters. Store the result (a boolean value) in a variable named hasLongString.



Task 3: Doubling Array Elements
You have an array of numbers. Use the forEach() method to iterate through the array and create a new array called doubledNumbers where each element is double the value of the corresponding element in the original array.




Task 4: Checking for All Users Above a Certain Age
You have an array of user objects, where each object has a name (string) and an age (number) property. Use the every() method to check if all users in the array are 18 years or older. Store the result (a boolean value) in a variable named allAdults.



Task 5: Checking for Any Product Below a Certain Price
You have an array of product objects, where each object has a name (string) and a price (number) property. Use the some() method to check if there is at least one product in the array with a price less than 20. Store the result (a boolean value) in a variable named hasAffordableProduct. 
-
JavaScript Bookstore Analysis with every(), some(), and forEach()
Task:

You are working with an array of customer order objects for an online bookstore. Each order object has the following properties:

 
orderId: (number) A unique identifier for the order.
customerId: (number) The ID of the customer who placed the order.
items: (array of objects) An array of book objects in the order. Each book object has:
title: (string) The title of the book.
price: (number) The price of the book.
quantity: (number) The quantity of the book ordered.
shippingAddress: (string) The shipping address for the order.
isDelivered: (boolean) Indicates if the order has been delivered.
 
-

every(): Check if all orders in the customerOrders array have at least one item in their items array (i.e., no empty orders). Store the result (a boolean) in a variable called allOrdersHaveItems. Log the result.
 
some(): Check if there is at least one order in the customerOrders array that has not yet been delivered (isDelivered is false). Store the result (a boolean) in a variable called hasPendingDelivery. Log the result.

forEach() (Outer Loop): Iterate through each order in the customerOrders array. For each order, log a message to the console indicating the orderId. The message should be in the format: "Processing Order ID: [orderId]".

forEach() (Nested Loop): Within the forEach() loop from Task 3, for each order, use another forEach() loop to iterate through the items array of that order. For each item, log the title and quantity of the book in the format: " - [title] (Quantity: [quantity])".

every() (Nested within forEach): Iterate through each order using forEach(). Inside this loop, use the every() method on the items array of the current order to check if all books in that specific order have a price greater than $10. For each order, log a message indicating whether all books in that order are expensive (price > $10). The message should be in the format: "Order [orderId] contains only expensive books: [true/false]".

some() (Nested within forEach): Iterate through each order using forEach(). Inside this loop, use the some() method on the items array of the current order to check if at least one book in that specific order has a quantity greater than 1. For each order, log a message indicating whether the order contains any multiple copies of a book. The message should be in the format: "Order [orderId] has multiple copies of at least one book: [true/false]". */
// Task 1: Checking for All Even Numbers
const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(num => num % 2 === 0);
console.log(`All numbers are even: ${allEven}`); // true
// Task 2: Checking for Existence of a Specific String
const strings = ["apple", "banana", "cherry", "date", "fig"];
const hasLongString = strings.some(str => str.length > 5);
console.log(`Array contains a string longer than 5 characters: ${hasLongString}`); // true
// Task 3: Doubling Array Elements
const originalNumbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];
originalNumbers.forEach(num => {
    doubledNumbers.push(num * 2);
});
console.log(`Doubled Numbers: ${doubledNumbers}`); // [2, 4, 6, 8, 10]
// Task 4: Checking for All Users Above a Certain Age
const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];
const allAdults = users.every(user => user.age >= 18);
console.log(`All users are 18 years or older: ${allAdults}`); // true
// Task 5: Checking for Any Product Below a Certain Price
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 500 },
    { name: "Headphones", price: 15 }
];  
const hasAffordableProduct = products.some(product => product.price < 20);
console.log(`There is at least one product below $20: ${hasAffordableProduct}`);
// JavaScript Bookstore Analysis with every(), some(), and forEach()
const customerOrders = [
    {
        orderId: 1,
        customerId: 101,
        items: [
            { title: "JavaScript Basics", price: 15, quantity: 2 },
            { title: "Advanced JavaScript", price: 25, quantity: 1 }
        ],
        shippingAddress: "123 Main St",
        isDelivered: true
    },
    {
        orderId: 2,
        customerId: 102,
        items: [
            { title: "HTML & CSS", price: 10, quantity: 1 },
            { title: "React for Beginners", price: 20, quantity: 3 }
        ],
        shippingAddress: "456 Elm St",
        isDelivered: false
    }
];
// every(): Check if all orders have at least one item
const allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
console.log(`All orders have items: ${allOrdersHaveItems}`); // true
// some(): Check if there is at least one order not delivered
const hasPendingDelivery = customerOrders.some(order => !order.isDelivered);
console.log(`There is at least one order not delivered: ${hasPendingDelivery}`); // true
// forEach() (Outer Loop): Iterate through each order and log orderId
customerOrders.forEach(order => {
    console.log(`Processing Order ID: ${order.orderId}`);
}); 
// forEach() (Nested Loop): Iterate through items and log title and quantity
customerOrders.forEach(order => {
    order.items.forEach(item => {
        console.log(` - ${item.title} (Quantity: ${item.quantity})`);
    });
});
// every() (Nested within forEach): Check if all books in each order are expensive
customerOrders.forEach(order => {
    const allExpensive = order.items.every(item => item.price > 10);
    console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);
});
// some() (Nested within forEach): Check if any book in each order has quantity > 1
customerOrders.forEach(order => {
    const hasMultipleCopies = order.items.some(item => item.quantity > 1);
    console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`);
});
// Task 6: Filtering Even Numbers from an Array
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);