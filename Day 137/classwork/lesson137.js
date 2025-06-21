/*# Level 137:

# 1. შექმენით Set, დაამატეთ 3 მნიშვნელობა, ამოშალეთ 1 მნიშვნელობა, შეამოწმეთ ამოშლილი მნიშვნელობა, შეამოწმეთ Set ის ზომა და შემდეგ მთლიანად გაასუფთავეთ.
*/
const mySet = new Set();
// Adding 3 values to the Set
mySet.add('apple');
mySet.add('banana');
mySet.add('cherry');
// Removing 1 value from the Set
mySet.delete('banana'); // Checking if the removed value exists in the Set
if (!mySet.has('banana')) {
    console.log('The value "banana" has been successfully removed from the Set.');
}
// Checking the size of the Set
console.log('Size of the Set:', mySet.size); // Output: 2
// Clearing the Set
mySet.clear();
console.log('Set has been cleared. Current size:', mySet.size); // Output: 0
// Final state of the Set
console.log('Final Set:', mySet); // Output: Set {}