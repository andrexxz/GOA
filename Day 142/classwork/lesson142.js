/*# 142:

# შექმენით გლობალური და ლოკალური ცვლადები და შემდეგ მიიღეთ წვდომა მათზე.*/
// Global variable
let globalVar = "I am a global variable";
// Local variable inside a function
function localVariableExample() {
  "use strict"; // Local strict mode
  let localVar = "I am a local variable";
  
  // Accessing both global and local variables
  console.log(globalVar); // Outputs: I am a global variable
  console.log(localVar); // Outputs: I am a local variable
}
// Calling the function to see the output
localVariableExample();
// Trying to access the local variable outside the function will result in an error
try {
  console.log(localVar); // This will throw a ReferenceError
}
catch (error) {
    console.error("Error:", error.message); // Outputs: Error: localVar is not defined
    }
// Accessing the global variable outside the function
console.log(globalVar); // Outputs: I am a global variable
// Trying to access the global variable inside the function
function accessGlobalVariable() {
  "use strict"; // Local strict mode
  console.log(globalVar); // Outputs: I am a global variable
}
// Calling the function to see the output
accessGlobalVariable(); // Outputs: I am a global variable
// Trying to access a local variable from another function will result in an error
function anotherFunction() {
  "use strict"; // Local strict mode
  try {
    console.log(localVar); // This will throw a ReferenceError
  } catch (error) {
    console.error("Error:", error.message); // Outputs: Error: localVar is not defined
  }
}
// Calling the function to see the output
anotherFunction(); // Outputs: Error: localVar is not defined
