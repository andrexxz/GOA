// Array containing different data types
let allValue = [
    25,
    "Hello",
    3.14,
    true,
    {
        name: "ანდრია",
        surname: "კორჩლიავა",
        age: 20,
        country: "საქართველო",
        city: "თბილისი"
    }
];

// Extracting object data 
let person = allValue[4];
let sentence = `ჩემი სახელია ${person.name}, ჩემი გვარია ${person.surname}, ვარ ${person.age} წლის, ვცხოვრობ ${person.country}ში, ქალაქ ${person.city}ში.`;

// Output the result
console.log(sentence);
