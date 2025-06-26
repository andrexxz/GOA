/*  Level 136:
Create a Map of Countries and Capitals.
Add at least 5 countries and their capitals.

 
Print all entries.
Add and Remove Items.
Start with a Map of 3 fruits and their colors.

  
Add two more fruits.

  
Remove one fruit.

  
Print the final Map.
Check if a Key Exists.
Use has() to check if a certain item exists.

  
Print "Yes" or "No" depending on the result.
 
Loop through a Map.
Loop through both keys and values.

  
Print in format: "The capital of X is Y".
5 Convert a Map to an Array and back.
Use Array.from() to convert the Map to an array.

  
Then use that array to create a new Map.
Write a function that returns a new Map, sorted alphabetically by its keys.
Count Word Occurrences.
Given a sentence, count how many times each word appears using a Map.

 
For example: "this is a test and this is fun" → { this: 2, is: 2, a: 1, test: 1, and: 1, fun: 1 } */
class CountryCapitalMap {
    constructor() {
        this.map = new Map();
    }

    addCountry(country, capital) {
        this.map.set(country, capital);
    }

    printEntries() {
        for (const [country, capital] of this.map.entries()) {
            console.log(`The capital of ${country} is ${capital}.`);
        }
    }
}

// Create an instance of CountryCapitalMap
const countryCapitalMap = new CountryCapitalMap();
// Add at least 5 countries and their capitals
countryCapitalMap.addCountry("USA", "Washington, D.C.");
countryCapitalMap.addCountry("Canada", "Ottawa");
countryCapitalMap.addCountry("France", "Paris");
countryCapitalMap.addCountry("Germany", "Berlin");
countryCapitalMap.addCountry("Japan", "Tokyo"); 
// Print all entries
countryCapitalMap.printEntries();
// Add and Remove Items
const fruitMap = new Map([
    ["Apple", "Red"],
    ["Banana", "Yellow"],
    ["Grapes", "Purple"]
]); 
// Add two more fruits
fruitMap.set("Orange", "Orange");
fruitMap.set("Lemon", "Yellow");
// Remove one fruit
fruitMap.delete("Banana");
// Print the final Map
console.log("Final Fruit Map:");
for (const [fruit, color] of fruitMap.entries()) {
    console.log(`${fruit}: ${color}`);
}
// Check if a Key Exists
const keyToCheck = "Apple";
console.log(`Does the key "${keyToCheck}" exist? ${fruitMap.has(keyToCheck) ? "Yes" : "No"}`);
// Loop through a Map
for (const [country, capital] of countryCapitalMap.map.entries()) {
    console.log(`The capital of ${country} is ${capital}.`);
}
// Convert a Map to an Array and back
const arrayFromMap = Array.from(fruitMap);
const newFruitMap = new Map(arrayFromMap);
console.log("New Fruit Map from Array:");
for (const [fruit, color] of newFruitMap.entries()) {
    console.log(`${fruit}: ${color}`);
}   
// Function to return a new Map sorted alphabetically by its keys
function sortMapByKeys(map) {
    const sortedArray = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    return new Map(sortedArray);
}
// Example usage of sortMapByKeys
const sortedFruitMap = sortMapByKeys(newFruitMap);
console.log("Sorted Fruit Map:");
for (const [fruit, color] of sortedFruitMap.entries()) {
    console.log(`${fruit}: ${color}`);
}   
// Count Word Occurrences
function countWordOccurrences(sentence) {
    const words = sentence.toLowerCase().split(/\s+/);
    const wordCountMap = new Map();

    for (const word of words) {
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    }

    return wordCountMap;
}
// Example usage of countWordOccurrences
const sentence = "this is a test and this is fun";
const wordOccurrences = countWordOccurrences(sentence);
console.log("Word Occurrences:");
for (const [word, count] of wordOccurrences.entries()) {
    console.log(`${word}: ${count}`);
}
// Output:
// The capital of USA is Washington, D.C.