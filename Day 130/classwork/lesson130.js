//# 1. გააკეთეთ თითო მაგალითი ყველა საკითხზე. (arrow function, destructing, object enhancment, forIn/forOf, defaupt parameter).

// Arrow Function Example
const add = (a, b) => a + b;
console.log("Arrow Function Example:", add(5, 10)); // Output: 15
// Destructuring Example
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log("Destructuring Example:", name, age); // Output: John 30
// Object Enhancement Example
const x = 10;
const y = 20;
const point = { x, y, z: 30 };
console.log("Object Enhancement Example:", point); // Output: { x: 10, y: 20, z: 30 }
// for...in Example
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`for...in Example: ${key} = ${obj[key]}`); // Output: a = 1, b = 2, c = 3
}
// for...of Example
const array = [1, 2, 3];
for (const value of array) {
  console.log(`for...of Example: ${value}`); // Output: 1, 2, 3
}
// Default Parameter Example
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log("Default Parameter Example:", greet()); // Output: Hello, Guest!
console.log("Default Parameter Example:", greet("Alice")); // Output: Hello, Alice!