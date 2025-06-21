/*# Level 149:

# 1. შექმენით JSON -  ფაილი, სადაც შეიტანთ ინფორმაციას ამინდზე. შემდეგ შექმენით weather.js ფაილი, სადაც წამოიღებთ json ფაილიდან ინფორმაციას(copy/paste), წამოღებული ინფორმაცია შეინახეთ ტექსტური ფორმატით და შემდეგ გამოიყენეთ json - ის 2 მეთოდი იმისთვის, რომ ჯერ გადააქციოთ ჯავაკსრიპტის ობიექტად და შემდეგ გადააქციოთ ისევ სტრინგად.
*/
// weather.json
{
    "city"; "Tbilisi",
    "temperature"; 25,
    "condition"; "Sunny",
    "humidity"; 60,
    "windSpeed"; 10
}
// weather.js
import fs from 'fs';
import path from 'path';
const weatherFilePath = path.join(import.meta.dirname, 'weather.json');
fs.readFile(weatherFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the weather file:", err);
        return;
    }
    
    // Convert JSON string to JavaScript object
    const weatherData = JSON.parse(data);
    
    // Log the JavaScript object
    console.log("Weather Data as Object:", weatherData);
    
    // Convert JavaScript object back to JSON string
    const jsonString = JSON.stringify(weatherData, null, 2);
    
    // Log the JSON string
    console.log("Weather Data as JSON String:", jsonString);
});