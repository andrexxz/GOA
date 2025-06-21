/*# Level 150:

# 1. შექმენით JSON -  ფაილი, სადაც შეიტანთ ინფორმაციას მომხმარებელზე. შემდეგ შექმენით user.js ფაილი, სადაც წამოიღებთ json ფაილიდან ინფორმაციას(copy/paste), წამოღებული ინფორმაცია შეინახეთ ტექსტური ფორმატით და შემდეგ გამოიყენეთ json - ის 2 მეთოდი იმისთვის, რომ ჯერ გადააქციოთ ჯავაკსრიპტის ობიექტად, შემდეგ შეცვალოთ user ობიექტში lastname თვისება და შემდეგ გადააქციოთ ისევ სტრინგად.
*/
// user.js
import fs from 'fs';
import path from 'path';
const jsonFilePath = path.join(import.meta.dirname, 'user.json');
// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }
    
    // Parse the JSON string into a JavaScript object
    let user = JSON.parse(data);
    
    // Modify the lastname property
    user.lastname = 'NewLastName';
    
    // Convert the object back to a JSON string
    const updatedJsonString = JSON.stringify(user, null, 2);
    
    // Log the updated JSON string
    console.log(updatedJsonString);
});
// Save the updated JSON string back to the file (optional)
fs.writeFile(jsonFilePath, updatedJsonString, 'utf8', (err) => {
    if (err) {
        console.error('Error writing the updated JSON file:', err);
    } else {
        console.log('Updated JSON file saved successfully.');
    }
});