/*# Level 136:
# შექმენით generaly Map, სადაც შეიტანთ 5 სხვადასხვა მონაცემთა ტიპის მქონე თვისებას(თვისებები უნდა შეიტანოთ Set() ის გამოყენებით),  შეტანის შემდეგ შეამოწმეთ არის თუ არა რომელიმე თვისება Map - ში, შემოწმების შემდეგ ამოშალეთ რომელიმე თვისება და შემდეგ წამოიღეთ იგი კონსოლში.
*/
const myMap = new Map();
// Adding properties with different data types using Set
myMap.set('name', new Set(['Alice', 'Bob']));
myMap.set('age', new Set([25, 30]));
myMap.set('isActive', new Set([true, false]));
myMap.set('balance', new Set([100.50, 200.75]));
myMap.set('tags', new Set(['admin', 'user', 'guest']));
// Checking if a property exists in the Map
if (myMap.has('age')) {
    console.log('Age property exists in the Map.');
    // Removing the 'age' property from the Map
    myMap.delete('age');
    console.log('Age property has been removed.');
}
// Logging the Map to the console
console.log('Current Map:', myMap);
// Logging the removed property
if (!myMap.has('age')) {
    console.log('The age property has been successfully removed.');
}
// Output the remaining properties in the Map
console.log('Remaining properties in the Map:');
myMap.forEach((value, key) => {
    console.log(`${key}:`, Array.from(value));
});
// Output the final state of the Map
console.log('Final Map:', myMap);