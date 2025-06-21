/*# Level 131:

# 1. შექმენით js ფაილი და ჩართეთ strict mode ორი გზით, გლობალურად და ლოკალურად. strict mode ის ჩართვის შემდეგ შექმენით 2 მაგალითი(ცვლადებზე და ფუნქციებზე) სადაც ჩანს strict mode - ის მუშაობა და ასევე ის პროცესი სადაც იჭერს შეცდომებს.
# მაგალითების შექმნის შემდეგ, კომენტარის სახით ახსენით თუ რატომ დაფიქსირდა შეცდომა.*/
"use strict"; // Global strict mode
// Example 1: Variable Declaration
let x = 10;
// Uncommenting the next line will throw an error because 'y' is not declared
// y = 20; // ReferenceError: y is not defined
// Example 2: Function Declaration
function myFunction() {
  // Uncommenting the next line will throw an error because 'this' is undefined in strict mode
  // this.value = 100; // TypeError: Cannot set property 'value' of undefined
  console.log("Function executed successfully.");
}
myFunction();
// Local strict mode example
function anotherFunction() {
  "use strict"; // Local strict mode
  let z = 30;
  // Uncommenting the next line will throw an error because 'a' is not declared
  // a = 40; // ReferenceError: a is not defined
  console.log("Another function executed successfully with z =", z);
}