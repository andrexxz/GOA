/*Level 129:
Task 1: Function with Filtering
Create a function filterAndSum that takes one number argument and any number of additional number arguments.

 
The first argument is a threshold value.

 
The function should use the rest operator to collect the additional numbers into an array.

 
The function should filter the array to include only numbers greater than the threshold.

 
Finally, the function should return the sum of the filtered numbers.

Example:

filterAndSum(5, 1, 6, 2, 8, 3, 9); // Should return 23 (6 + 8 + 9)
-
Task 2: Object Destructuring
Given an object representing a product:
 
const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "TechCorp",
    color: "Silver",
    weight: "2kg"
};
Write code that uses object destructuring with the rest operator to:
Extract the id and name into separate variables.
Collect the remaining properties (price, brand, color, and weight) into a new object called details.

 
Print the id, name, and details to the console.
 
-
Task 3:  Combining Arrays with a Function
Create a function named combineArrays that takes a string as the first argument and any number of array arguments.

 
The function should use the rest operator to collect all the array arguments into a single array of arrays.

 
The function should create a new array.  It should add the string to the new array first.  Then, it should combine all the elements of the input arrays into the new array.

 
Return the new combined arra
-
Task 4:  Merging Objects
Given two objects:

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

 
Create a new object that combines the properties of both obj1 and obj2 using the spread operator.

 
Print the new object to the console.
-
Task 5:  Copying and Modifying Arrays
Given an array:

const numbers = [10, 20, 30];


 
Use the spread operator to create a copy of the numbers array.

 
Add the numbers 40 and 50 to the end of the new array.

 
Print both the original numbers array and the modified copy to the console.
 
-
Task 6:  Finding the Maximum
Given a function getMax

function getMax(a,b,c){
    return Math.max(a,b,c);
}

 
And given an array

const values = [25, 10, 35, 5];

 
Use the spread operator to call the getMax function with the first three values from the values array.

 
Print the result to the console. */
// Task 1: Function with Filtering
function filterAndSum(threshold, ...numbers) {
    const filteredNumbers = numbers.filter(num => num > threshold);
    return filteredNumbers.reduce((sum, num) => sum + num, 0);
}
console.log(filterAndSum(5, 1, 6, 2, 8, 3, 9)); // Should return 23 (6 + 8 + 9)
// Task 2: Object Destructuring
const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "TechCorp",
    color: "Silver",
    weight: "2kg"
};
const { id, name, ...details } = product;
console.log(`ID: ${id}, Name: ${name}`);
console.log("Details:", details); // { price: 1200, brand: 'TechCorp', color: 'Silver', weight: '2kg' }
// Task 3: Combining Arrays with a Function
function combineArrays(firstString, ...arrays) {
    const combinedArray = [firstString];
    for (const array of arrays) {
        combinedArray.push(...array);
    }
    return combinedArray;
}
console.log(combineArrays("Start", [1, 2], [3, 4], [5])); // Should return ["Start", 1, 2, 3, 4, 5]
// Task 4: Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4 }
// Task 5: Copying and Modifying Arrays
const numbers = [10, 20, 30];
const modifiedNumbers = [...numbers, 40, 50];
console.log("Original array:", numbers); // [10, 20, 30]
console.log("Modified array:", modifiedNumbers); // [10, 20, 30, 40, 50]
// Task 6: Finding the Maximum
function getMax(a, b, c) {
    return Math.max(a, b, c);
}   
const values = [25, 10, 35, 5];
const max = getMax(...values.slice(0, 3)); // Using the first three values
console.log(max); // Should print 35    
