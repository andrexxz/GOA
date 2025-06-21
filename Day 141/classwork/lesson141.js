/*# Level 141:

# 1. 🧩 Task: Build a Mini Toolbox Module System

You're going to create two files:

1. tools.js – This will hold your exports.

2. main.js – This will import and use what you exported.


# 📁 tools.js

In this file:

 1. Create a named export for a constant called hammer with the value "🔨".

 2. Create another named export for a function called saw() that returns "Slicing wood!".

 3. Create a default export for a function called build() that returns "Construction complete!".



# 📁 main.js


In this file:

 1. Import the hammer but rename it to mallet using as.

 2. Import the saw() function as is.

 3. Import the default export and name it startBuild.

 4. Import everything from tools.js into a namespace object called toolbox.


Then:


 1. Print mallet to the console.

 2. Call saw() and log the result.

 3. Call startBuild() and log the result.

 4. Log the full toolbox object to see all the exports grouped together.



🧪 Bonus Test (optional but fun)
Once you've done it, try changing the emoji in tools.js to 🛠️ and watch how it reflects in main.js. Just for funsies 😄*/
// tools.js
export const hammer = "🔨"; // Named export for a constant
export function saw() {
    return "Slicing wood!"; // Named export for a function
}
export default function build() {
    return "Construction complete!"; // Default export for a function
}
// main.js
import { hammer as mallet, saw } from './tools.js'; // Importing with renaming
import startBuild from './tools.js'; // Importing default export
import * as toolbox from './tools.js'; // Importing everything into a namespace object
console.log(mallet); // Print the renamed constant
console.log(saw()); // Call the saw function and log the result
console.log(startBuild()); // Call the default export function and log the result
console.log(toolbox); // Log the full toolbox object to see all exports grouped together