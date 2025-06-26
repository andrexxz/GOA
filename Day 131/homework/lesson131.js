/*Level 131:
კომენტარის სახით ახსენით თუ რა არის strict mode(მკაცრი რეჟიმი).
კომენტარის სახით ახსენით თუ რისთვის გამოიყენება strict mode.
კომენტარის სახით ახსენით თუ რამდენი ტიპის strict mode არსებობს და როგორ/რანაირად ყენდება იგი.
გააკეთეთ 3 მაგალითი ცვლადებზე strict mode ის გამოყენებით.
გააკეთეთ 3 მაგალითი ფუნქციებზე strict mode ის გამოყენებით. */
// Strict mode is a way to opt in to a restricted variant of JavaScript, which helps catch common coding errors and "unsafe" actions such as defining global variables unintentionally. It can also prevent the use of certain features that are considered problematic or error-prone.
// Strict mode is enabled by adding the directive `"use strict";` at the beginning of a
// script or a function. It can be applied globally to an entire script or locally to individual functions.
// There are two types of strict mode:
// 1. Global Strict Mode: Applied to the entire script by placing `"use strict";
//` at the top of the script file.
// 2. Function Strict Mode: Applied to a specific function by placing `"use strict";
//` at the beginning of the function body.
"use strict"; // Enabling strict mode for the entire script
// Example 1: Strict Mode with Variables
let x = 10; // This is allowed in strict mode   
// x = 20; // This is also allowed
// Uncommenting the line below would throw an error in strict mode
// y = 30; // ReferenceError: y is not defined (y is not declared)
// Example 2: Strict Mode with Functions
function myFunction() {
    "use strict"; // Enabling strict mode for this function
    let a = 5; // This is allowed
    // b = 10; // Uncommenting this line would throw an error in strict mode
    console.log(a);
}
myFunction(); // Output: 5
// Example 3: Strict Mode with Object Properties
const obj = {
    prop: 42,
    // Uncommenting the line below would throw an error in strict mode
    // set prop(value) { this.prop = value; } // SyntaxError: Unexpected token '='
};
// Example 4: Strict Mode with Function Parameters
function anotherFunction(param) {
    "use strict"; // Enabling strict mode for this function
    // Uncommenting the line below would throw an error in strict mode
    // param = 10; // This is allowed, but reassigning a parameter is not recommended
    console.log(param);
}
anotherFunction(20); // Output: 20  
// Example 5: Strict Mode with 'this' Context
function strictThisExample() {
    "use strict"; // Enabling strict mode for this function
    console.log(this); // In strict mode, 'this' is undefined in a regular function call
}
strictThisExample(); // Output: undefined
// Example 6: Strict Mode with 'eval'
function evalExample() {
    "use strict"; // Enabling strict mode for this function
    // Uncommenting the line below would throw an error in strict mode
    // eval("var x = 10;"); // SyntaxError: Using 'eval' in strict mode is not allowed
}
// }
evalExample(); // No output, but the function runs without errors
// Example 7: Strict Mode with 'delete'
function deleteExample() {
    "use strict"; // Enabling strict mode for this function
    const obj = { a: 1 };
    // Uncommenting the line below would throw an error in strict mode
    // delete obj.a; // SyntaxError: Delete of an unqualified identifier in strict mode
}   
deleteExample(); // No output, but the function runs without errors