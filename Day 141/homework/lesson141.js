/*Level 141:
Files:
 
mathTools.js
main.js

In mathTools.js:
    
Export three named constants: addSymbol = '+', subSymbol = '-', and multiplySymbol = '*'.

In main.js:

 
Import all three using as and give them your own creative names (e.g., plus, minus, times).

 
Log each renamed constant to the console.

💡 This flexes your renaming muscles and keeps your naming sharp like an editor with red ink.
-
🧩 Task 2: One Default, Many Named
Files:

 
characters.js
game.js

In characters.js:
 
export default a string: "🧙 Wizard".

 
export two named constants: warrior = "🗡️ Warrior" and healer = "💊 Healer".

In game.js:

 
Import the default as mainCharacter.

 
Import the named ones but rename them to tank and support.

 
Log a party lineup using them:
Example: Party: 🧙 Wizard (Main), 🗡️ Warrior (Tank), 💊 Healer (Support)
-
🧩 Task 3: Full Namespace Access + Selective Use
Files:

 
zoo.js
app.js

In zoo.js:

 
Export three named constants: lion = "🦁", elephant = "🐘", parrot = "🦜".

Export a default function called visit() that returns "Welcome to the Zoo!".

In app.js:

 
Import everything as zoo.

 
Import only parrot separately (using a named import).

 
Log the result of zoo.visit(), then log zoo.lion and parrot.
 
-
🧩 Task 4: Mixed Exports with Functions
Files:

 
helpers.js
main.js

In helpers.js:

Export a function capitalize(str) that returns the string with the first letter uppercased.

Export a function reverse(str) that returns the reversed string.

Default export a function process(str) that returns:
capitalize(reverse(str))


In main.js:
 
Import only process as stringWizard.

 
Log the result of stringWizard("hello").

🧙‍♂️ Expected output: "Olleh" 
-
Task 5: Build a Custom Logger Utility
Files:
 
logger.js
app.js

In logger.js:

Export named function logInfo(msg) – prepends "ℹ️ INFO:" to msg.

Export named function logError(msg) – prepends "❌ ERROR:" to msg.

Default export a function logAll(msg) – calls both logInfo and logError on msg.


In app.js:
 
Import logInfo and rename it to infoLog.

 
Import the default function as allLogs.

 
Call infoLog("Everything's fine.").

 
Call allLogs("Something happened."). */
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
console.log(toolbox); // Log the full toolbox object to see all the exports grouped together
// Bonus: Changing the emoji in tools.js will reflect here automatically
// Just for funsies
console.log("🔨 has been changed to 🛠️ in tools.js, and it will reflect here automatically!"); // Just for funsies
//  😄
// This is a fun exercise to see how module exports and imports work in JavaScript.
// You can change the emoji in tools.js to see how it reflects in main.js.
// This demonstrates the dynamic nature of module imports and exports in JavaScript.
// Enjoy coding! 😄