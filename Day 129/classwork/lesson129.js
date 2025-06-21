/*# Level 129:

# 1. Task:

Create a function called sumNumbers that takes any number of arguments and returns the sum of all the numbers.

**Requirements**:

1. The function should use the rest operator to accept a variable number of arguments.

2. The function should calculate the sum of all the numbers passed to it.

3. The function should return the final sum.

4. If no arguments are passed, the function should return 0.*/
function sumNumbers(...args) {
  // Check if no arguments are passed
  if (args.length === 0) {
    return 0;
  }
  
  // Calculate the sum of all numbers
  const sum = args.reduce((accumulator, current) => {
    // Ensure current is a number before adding
    return accumulator + (typeof current === 'number' ? current : 0);
  }, 0);
  
  return sum;
}
// Example usage:
console.log(sumNumbers(1, 2, 3)); // Output: 6
console.log(sumNumbers(10, 20, 30, 40)); // Output: 100
console.log(sumNumbers()); // Output: 0
console.log(sumNumbers(5, 'a', 15, null, 10)); // Output: 30 (ignores non-number arguments)
