/*# Level 150:

# Task 1: Create a Simple JSON Object
Objective: Define a JSON object representing a person.

Your task:
Write a JSON object like this in your code editor (or online JSON viewer), and try adding one more key (e.g., hobbies).


# - 


# Task 2: Access JSON Data in JavaScript
Objective: Use JavaScript to access values in a JSON object.


Your task:
Access all values (name, age, city) using dot notation or bracket notation. 


# - 

# Task 3: Convert JSON String to JavaScript Object
Objective: Parse a JSON string into a usable object.


Your task:
Parse the string, then log both keys to the console.



# - 

# Task 4: Convert JavaScript Object to JSON String
Objective: Use JSON.stringify() to convert a JS object into a JSON string.


Your task:
Add another key (like color) and stringify it again.


# - 


# Task 5: Loop Through JSON Array
Objective: Use a loop to access data inside a JSON array of objects.


Your task:
Add a third user and print their name and age too. */
// Task 1: Create a Simple JSON Object
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
  hobbies: ["reading", "adventuring"]
};
// Log the JSON object
console.log(person);
// Task 2: Access JSON Data in JavaScript
// Access values using dot notation
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`City: ${person.city}`);
// Access values using bracket notation
console.log(`Name: ${person["name"]}`);
console.log(`Age: ${person["age"]}`);
console.log(`City: ${person["city"]}`);
// Task 3: Convert JSON String to JavaScript Object
const jsonString = '{"name": "Bob", "age": 25, "city": "Builderland"}';
// Parse the JSON string into a JavaScript object
const parsedObject = JSON.parse(jsonString);
// Log the keys to the console
console.log(`Name: ${parsedObject.name}`);
console.log(`Age: ${parsedObject.age}`);
console.log(`City: ${parsedObject.city}`);
// Task 4: Convert JavaScript Object to JSON String
const user = {
  username: "masterjaneza",
  loggedIn: true,
  favorites: ["React", "Tailwind", "JSON"],
  color: "blue" // Adding another key
};
// Convert the JavaScript object to a JSON string
const userJsonString = JSON.stringify(user);
// Log the JSON string
console.log(userJsonString);
// Task 5: Loop Through JSON Array
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 28 } // Adding a third user
];
// Loop through the array and print each user's name and age
users.forEach(user => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
});