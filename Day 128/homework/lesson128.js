/*Level 127:
Task 1: Basic Object Destructuring
Objective: Extract values from an object using destructuring.

 
Problem: Given the following object:

const person = { name: "Alice", age: 30, city: "New York" };

Write code to extract the name and age into separate variables.
Task 2: Destructuring with Renaming
Objective: Extract values from an object and assign them to new variable names.

 
Problem: Given the same object:

const person = { name: "Alice", age: 30, city: "New York" };

Write code to extract the name and assign it to a variable called userName, and extract city and assign it to a variable called userCity.
Task 3: Destructuring Nested Objects
Objective: Extract values from nested objects.

 
Problem: Given the following object:

const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};

Write code to extract the math and english grades into separate variables.
Task 4: Basic Array Destructuring
Objective: Extract values from an array using destructuring.

 
Problem: Given the following array:

const numbers = [1, 2, 3, 4, 5];

Write code to extract the first and third elements into separate variables.*/

// Task 1: Basic Object Destructuring
const person = { name: "Alice", age: 30, city: "New York" };
const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`); // Name: Alice, Age: 30
// Task 2: Destructuring with Renaming
const { name: userName, city: userCity } = person;
console.log(`User Name: ${userName}, User City: ${userCity}`); // User Name: Alice, User City: New York
// Task 3: Destructuring Nested Objects
const student = {
    name: "Bob",
    age: 20,
    grades: {
        math: 90,
        science: 85,
        english: 92,
    },
};  
const { grades: { math, english } } = student;
console.log(`Math Grade: ${math}, English Grade: ${english}`); // Math Grade: 90, English Grade: 92
// Task 4: Basic Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers;
console.log(`First Element: ${first}, Third Element: ${third}`); // First Element: 1, Third Element: 3
