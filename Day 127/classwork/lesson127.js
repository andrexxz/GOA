const person = {
    name: 'andria korchilava',
    age: 14,
    city: 'gori',
    occupation: 'Software Developer',
    hobbies: ['coding', 'gaming', 'reading'],
};

const car = {
    make: 'Toyota',
    model: 'supra',
    year: 2024,
    color: 'black',
    turbo: true,
    horsepower: 5000
};

// Destructuring the person object
const { name, age, city, occupation, hobbies } = person;
console.log(`Name: ${name}, Age: ${age}, City: ${city}, Occupation: ${occupation}, Hobbies: ${hobbies.join(', ')}`);

// Destructuring the car object
const { make, model, year, color, turbo, horsepower } = car;
console.log(`Make: ${make}, Model: ${model}, Year: ${year}, Color: ${color}, Turbo: ${turbo}, Horsepower: ${horsepower}`);







