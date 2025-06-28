/*Level 149:
Task 1: Parse and Access
Objective: Parse a JSON string and access specific data.
const jsonString = '{"name": "Luna", "age": 4, "type": "cat"}';
// Your task:
✅ Tasks to complete:

Parse jsonString into a JavaScript object.

Log the pet’s name and age to the console.

Add a new property called "color" with value "black" to the object.
-
Task 2: Convert and Stringify
Objective: Convert a JavaScript object to a JSON string.
const user = {
  username: "masterjaneza",
  loggedIn: true,
  favorites: ["React", "Tailwind", "JSON"]
}; 
.
Tasks to complete:

Convert the user object into a JSON string.

Log the JSON string.

What happens if one of the values is a function? Try it and explain
 
-
გაასწორეთ მოცემული json - ის კოდი:
{
  name: "Broken Object",
  age: 27,
  hobbies: ["debugging", "fixing bugs"]
} */

// Task 1: Parse and Access
const jsonString = '{"name": "Luna", "age": 4, "type": "cat"}';
// Parse jsonString into a JavaScript object
const pet = JSON.parse(jsonString);
// Log the pet’s name and age to the console
console.log(`Pet's Name: ${pet.name}, Age: ${pet.age}`);
// Add a new property called "color" with value "black" to the object
pet.color = "black";
console.log(pet);
// Task 2: Convert and Stringify
const user = {
  username: "masterjaneza",
  loggedIn: true,
  favorites: ["React", "Tailwind", "JSON"]
};
// Convert the user object into a JSON string
const userJsonString = JSON.stringify(user);
// Log the JSON string
console.log(userJsonString);
// If one of the values is a function, it will not be included in the JSON string
const userWithFunction = {
    username: "masterjaneza",
    loggedIn: true,
    favorites: ["React", "Tailwind", "JSON"],
    greet: function() { return "Hello!"; }
    };
    // Convert the userWithFunction object into a JSON string
const userWithFunctionJsonString = JSON.stringify(userWithFunction);
// Log the JSON string