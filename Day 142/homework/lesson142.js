/*Level 142:
Create a global variable called score. Write a function increaseScore that adds 10 to score. Call it twice and log the final value.
Write a function secretCode that declares a local variable code with value '1234'. Try to console.log(code) outside the function. What happens?
Declare a global variable name = "World". Inside a function greet, declare a local variable name = "Alice". Log name inside the function and outside.
Create a function counterGame that declares a variable counter = 0. Every time you call the function, increase counter by 1 and log it. Why does it always print 1?
Without declaring variables properly (i.e., missing let, const, or var), assign a value inside a function and log it outside. What do you notice?
კომენტარის გამოყენებით, ახსენით თუ არ არის გლობალური ცვლადი(თქვენი სიტყვებით)
კომენტარის გამოყენებით, ახსენით თუ არ არის ლოკალური ცვლადი(თქვენი სიტყვებით)
 
Create a module file called mathUtils.js. Inside it, define two functions: add(a, b) and subtract(a, b). Export both functions. Then, create another file called app.js and import the functions to use them.
Create a file logger.js that exports a default function which logs any message you pass to it. Then, import and use it in another file named main.js.
Create a file userService.js where you define:
a default export function createUser(name)

 
a named export function deleteUser(id)

Then import and use both in another file. */
// lesson142.js
export function increaseScore(score) {
    return score + 10;
}   
export function secretCode() {
    const code = '1234';
    return code;
}
export function greet() {
    const name = "Alice";
    console.log(name); // Logs "Alice"
}
export function counterGame() {
    let counter = 0;
    counter += 1;
    console.log(counter); // Always prints 1 because counter is reset each time the function is called
}
export function globalVariableTest() {
    globalThis.name = "World"; // Declaring a global variable
    console.log(name); // Logs "World"
}
export function localVariableTest() {
    const name = "Alice"; // Local variable
    console.log(name); // Logs "Alice"
    // console.log(globalThis.name); // Would log "World" if uncommented
}
export function noVariableDeclaration() {
    globalThis.value = 42; // Assigning a value without declaration
    console.log(value); // Logs 42, as it is now a global variable
}
export function isGlobalVariable() {
    // Global variables are accessible from anywhere in the code
    return "Global variables are accessible throughout the entire application.";
}
export function isLocalVariable() {
    // Local variables are only accessible within the function they are declared in
    return "Local variables are only accessible within the function they are declared in.";
}
export function mathUtils() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };
}
export function logger(message) {
    console.log(message);
}
export function userService() {
    return {
        createUser: (name) => `User ${name} created.`,
        deleteUser: (id) => `User with ID ${id} deleted.`
    };
}