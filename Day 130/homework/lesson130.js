/*Level 130:
Task 1: Arrow Functions
Rewrite with Arrow Function:
Rewrite the following function as an arrow function:

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
-
Task 2: Arrow Functions
Write an arrow function called square that takes a number and returns its square using the implicit return feature.
 
-
Task 3: Destructuring
Array Destructuring Basics:
Given const numbers = [1, 2, 3, 4, 5];, use array destructuring to get the first and last elements into variables first and last.
 
-
Task 4: Destructuring

 
Object Destructuring Renaming:

 
Given const student = { name: 'Emma', age: 20 };, use object destructuring to extract the name into a variable called studentName and age into studentAge.
-
Task 5: Destructuring
Nested Object Destructuring:
Given:

const product = {
  id: 101,
  details: {
    name: "Laptop",
    price: 1200
  }
};

 
Destructure name and price into variables productName and productPrice.
-
Task 6: for...in and for...of
for...in with Object:
Use for...in to iterate over the properties of the object:

const car = { make: 'Toyota', model: 'Camry', year: 2020 };

 
Print each property name and its value.
-
Task 7:  for...in and for...of
for...of with Array:
Use for...of to iterate over the array:

const colors = ['red', 'green', 'blue'];

 
Print each color.
-
Task 8: for...in and for...of
for...of with String:
Use for...of to iterate over the string "JavaScript" and print each character.
 
-
Task 9: Default Parameters
Basic Default Parameter:
Write a function multiply that takes two arguments, a and b, with b defaulting to 2. Return the product of a and b.

-
Task 10: Default Parameters
Default Parameter and Undefined:
Show how a default parameter works when undefined is passed as an argument.

-
Task 11: Default Parameters
Default Parameter Evaluation:
Write a function greet with a default parameter that is the result of another function call:
-
Task 12:
კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება arrow function.

-
Task 13:
კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება destructing.

-
Task 14:
კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება for in / for of.

-
Task 15:
კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება object enhancment.

-
Task 16:
კომენტარების გამოყენებით ახსენით თუ რა არის და რისთვის გამოიყენება default parameter.
 */
// Task 1: Arrow Functions
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("Arrow Function Example:", getFullName("John", "Doe")); // Output: John Doe
// Task 2: Arrow Functions
const square = number => number * number;
console.log("Square Example:", square(5)); // Output: 25
// Task 3: Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, , , , last] = numbers;
console.log("First Element:", first); // Output: 1
console.log("Last Element:", last); // Output: 5
// Task 4: Destructuring
const student = { name: 'Emma', age: 20 };
const { name: studentName, age: studentAge } = student;
console.log("Student Name:", studentName); // Output: Emma
console.log("Student Age:", studentAge); // Output: 20
// Task 5: Destructuring Nested Object
const product = {
  id: 101,
  details: {
    name: "Laptop",
    price: 1200
  }
};  
const { details: { name: productName, price: productPrice } } = product;
console.log("Product Name:", productName); // Output: Laptop
console.log("Product Price:", productPrice); // Output: 1200
// Task 6: for...in with Object
const car = { make: 'Toyota', model: 'Camry', year: 2020 };
for (const key in car) {
  console.log(`Property: ${key}, Value: ${car[key]}`);
}
// Task 7: for...of with Array
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(`Color: ${color}`);
}
// Task 8: for...of with String
const str = "JavaScript";
for (const char of str) {
  console.log(`Character: ${char}`);
}
// Task 9: Default Parameters
const multiply = (a, b = 2) => a * b;
console.log("Multiply Example:", multiply(5)); // Output: 10
// Task 10: Default Parameter and Undefined
const multiplyWithUndefined = (a, b = 2) => a * b;
console.log("Multiply with Undefined Example:", multiplyWithUndefined(5, undefined)); // Output:
// Task 11: Default Parameter Evaluation
const greet = (name = getDefaultName()) => `Hello, ${name}!`;
const getDefaultName = () => "Guest";
console.log("Greet Example:", greet()); // Output: Hello, Guest!
console.log("Greet with Name Example:", greet("Alice")); // Output: Hello, Alice
// Task 12: Arrow Function Explanation
// Arrow functions are a concise way to write function expressions in JavaScript.
// They allow for shorter syntax and do not have their own 'this' context, making them useful for callbacks and methods that require lexical scoping.
// Arrow functions are defined using the arrow syntax (=>) and can be used for single-line or multi-line functions.
// They are particularly useful in functional programming paradigms and when working with higher-order functions.
// Task 13: Destructuring Explanation
// Destructuring is a syntax in JavaScript that allows unpacking values from arrays or properties from objects into distinct variables.
// It provides a more readable and concise way to extract values, making code cleaner and easier to
// maintain.
// Destructuring can be used with arrays and objects, allowing for direct assignment of values to
// variables without the need for repetitive property access.
// It is particularly useful when dealing with complex data structures or when passing multiple
// parameters to functions, as it simplifies the extraction of values and improves code clarity.
// Task 14: for...in / for...of Explanation
// The `for...in` loop is used to iterate over the enumerable properties of an object.
// It allows you to access each property name (key) in the object, making it useful
// for iterating through object properties.
// The `for...of` loop is used to iterate over iterable objects like arrays, strings
// and other collections. It provides a simpler syntax for accessing each element
// in the collection without needing to use an index.
// The `for...in` loop is typically used for objects, while the `for...of` loop is
// used for arrays and other iterable structures.
// Task 15: Object Enhancement Explanation
// Object enhancement is a feature in JavaScript that allows you to create objects with
// shorthand property names and methods. It simplifies the creation of objects by allowing
// you to define properties and methods without repeating the variable names.
// This feature is particularly useful when you want to create objects that hold related data
// and functionality, making your code cleaner and more concise.
// Object enhancement allows you to define properties using variables directly, and it also
// supports shorthand method definitions, making it easier to create objects with
// encapsulated behavior.
// It is commonly used in modern JavaScript development to improve code readability and maintainability.
// Task 16: Default Parameter Explanation
// Default parameters in JavaScript allow you to specify default values for function parameters.    
// If a parameter is not provided when the function is called, the default value is used.
// This feature helps to avoid errors and provides a way to define fallback values for parameters.
// Default parameters can be defined directly in the function signature, making the code cleaner
// and more readable.
// It is particularly useful when you want to ensure that a function has a valid value for a parameter,
// even if the caller does not provide one. This enhances the flexibility and usability of functions in
